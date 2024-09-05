import Link from "next/link"

export default function Home() {
	return (
		<main>
			<ul className="min-h-screen flex flex-col items-center justify-between floor-list">
				{Array(6).fill(null).map((_, i) =>
					<Floor floor={(i + 1).toString()} key={i} />
				)}
			</ul>
		</main>
	)
}

function Floor({ floor }: { floor: string }) {
	return <Link href={floor} style={{ height: "100%", flexGrow: "1", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
		<li>
			<div style={{ fontSize: "50px", textAlign: "center" }}>Floor {floor}</div>
		</li></Link>
}
