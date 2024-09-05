"use client"

import React, { useEffect } from "react";
import { positionToCode } from "../utils";

export default function Input({ location }: { location: string }) {
	const ref = React.createRef<HTMLImageElement>();

	useEffect(() => {
		if (!ref.current) return;

		ref.current.onclick = (e: any) => {
			if (!ref.current) return;
			const [floor] = location.split("~");

			const imgX = ref.current.width;
			const imgY = ref.current.height;

			const x = e.offsetX / imgX;
			const y = e.offsetY / imgY;

			const code = positionToCode(x, y, 4);

			window.location.href = `${floor}~${code}`;
		}
	}, [ref]);

	return <img ref={ref} style={{ width: "auto" }} src={`/img/${location}`} />;

}
