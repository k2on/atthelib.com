import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
        <ul className='min-h-screen  flex flex-col items-center justify-between floor-list'>
        <Floor floor="6" />
        <Floor floor="5" />
        <Floor floor="4" />
        <Floor floor="3" />
        <Floor floor="2" />
        <Floor floor="1" />
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
