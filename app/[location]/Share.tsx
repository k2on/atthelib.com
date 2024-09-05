"use client"

import { useState } from "react";

export default function Share({ floor }: { floor: string }) {
	const [copied, setCopied] = useState(false);

	const onShare = () => {

		if (navigator.share) {
			navigator.share({
				title: 'Meet me At The Lib',
				text: 'On floor ' + floor,
				url: window.location.href,
			});
		} else {
			navigator.clipboard.writeText(window.location.href).then(() => {
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 1000);
			});
		}
	}

	return <button onClick={onShare} style={{ background: "#F56600", fontSize: "40px", padding: "0 20px", borderRadius: "10px" }}>{copied ? "Link Copied!" : "SHARE"}</button>;
}
