export default function Navbar() {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#" className="text-white text-lg font-semibold">Imagem</a>
                        </div>
                        <div className="flex items-center">
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Mais</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Serviços</a>
                            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Contato</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )

}