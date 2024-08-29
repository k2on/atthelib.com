import sharp from "sharp";
import path from 'path';
import { NextRequest, NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";
import { waitUntil } from "@vercel/functions";

export const dynamic = 'force-dynamic' // defaults to force-static

export async function GET(request: NextRequest) {
    const parts = request.url.split("/img/")[1].split(":");
    const floor = parts[0];
    
    let x;
    let y;

    const basePath = path.join(process.cwd(), `public/${floor}.png`);
    const img = sharp(basePath);

    if (parts.length > 1) {

        x = parseInt(parts[1]);
        y = parseInt(parts[2]);

        waitUntil(track("loadImage", { floor, position: `${x},${y}` }));

        const overlayWidth = 100; // Width of the overlay image in pixels
        const overlayHeight = 100; // Height of the overlay image in pixels


        const overlayPath = path.join(process.cwd(), 'public/paw.png');

        const resizedOverlay = await sharp(overlayPath)
          .resize(overlayWidth, overlayHeight)
          .toBuffer();


        const result = await img
          .composite([
            { 
              input: resizedOverlay, 
              left: x,
              top: y,
            }
          ])
          .png()
          .toBuffer();


        
          return new NextResponse(result, {
          status: 200,
          headers: {
            'Content-Type': 'image/png'
          }
        });
    } else {
        
          return new NextResponse(await img.toBuffer(), {
          status: 200,
          headers: {
            'Content-Type': 'image/png'
          }
        });

    }

}
