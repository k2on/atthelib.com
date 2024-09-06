import Link from "next/link"

export default function Home() {
	return (
		<main>
			<div className="grid grid-cols-1 md:grid-cols-3 h-screen">
				{Array(6).fill(null).map((_, i) =>
					<Floor floor={(i + 1).toString()} key={i} />
				)}
			</div>
		</main>
	)
}

function Floor({ floor }: { floor: string }) {
	return (
		<Link href={floor} className="flex justify-center text-5xl items-center odd:bg-primary even:bg-secondary">
			Floor {floor}
		</Link>
	);
}
