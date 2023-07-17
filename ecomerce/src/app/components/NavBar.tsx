import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800 ">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-white text-lg font-semibold">
                            <Image 
                                src="/piramide.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />   
                            </a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Mais</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Serviços</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contato</a>
                            <Link href="../produtos">
                                <h1>Bruno</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}