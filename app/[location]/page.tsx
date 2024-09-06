import Head from "next/head";
import Input from "./Input";
import Link from "next/link";
import Share from "./Share";
import { Metadata } from "next";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { location } = params;
	const [floor] = location.split("~");
	return {
		title: `Floor ${floor} At The Lib`,
		description: 'Find me at the library',
		openGraph: {
			images: [`https://atthelib.com/img/${location}`]
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
			<div className="flex flex-col items-center text-center h-screen">
				<div className="flex flex-col items-center justify-center grow mb-2">
					<h1 className="text-4xl font-bold">Floor {floor}</h1>
					<h2 className="text-2xl text-slate-400">tap somewhere on the map</h2>
				</div>
				<Input location={location} />
				<div className="flex flex-col items-center justify-center gap-3 grow mt-2">
					<Share floor={floor} />
					<Link href="/">
						<button className="text-xl">⬅ BACK</button>
					</Link>
				</div>
			</div>
		</>
	);
}

