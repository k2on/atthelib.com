import Head from "next/head";
import Input from "./Input";
import Link from "next/link";
import Share from "./Share";
import { Metadata } from "next";
import { codeToPosition } from "../utils";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { location: floor } = params;
	const [floorStr] = floor.split("~");
    const imageUrl = `/img/${floor}`;
    return {
        title: `Floor ${floorStr} At The Lib`,
        description: 'Find me at the library',
        openGraph: {
                images: ["https://atthelib.com" + imageUrl]
            }
    };
}


interface Props {
    params: { location: string }
}
export default function Floor({ params }: Props) {
    const { location } = params;
	const [floor] = location.split("~");

    const imageUrl = "/img/" + location;

    return (
    <>
        <Head>
            <title>Floor {floor}</title>
            <meta property="og:title" content="At the Lib" />
            <meta property="og:type" content="atthelib" />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:description" content="Come find me AtTheLib!" />
        </Head>
        <div style={{ maxWidth: "500px", margin: "auto", display: 'flex', flexDirection: "column", height: "100vh" }}>
            <div style={{ display: "flex", alignItems: "center",  height: "80vh" }}>
                <Input location={location} />
            </div>
            <div style={{flexGrow: "1", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div style={{ fontSize: "40px" }}>Floor {floor}</div>
                <div style={{ fontSize: "20px", color: "gray" }}>Tap somewhere on the map</div>
                <div style={{ width: "100%", textAlign: "center", marginTop: "40px" }}>
                    <Share floor={floor} />
                </div>
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <Link href="/"><button style={{ fontSize: "20px", color: "gray" }}>⬅ BACK</button></Link>
                </div>
            </div>
        </div>
    </>
  );
}

