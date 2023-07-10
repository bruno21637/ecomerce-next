import Image from "next/image"
export default function Hero() {
    return (
        <div className="bg-black h-screen" >
            <div>
                <h1 className="uppercase mt-40 font-light tracking-[1em] ml-10 text-left text-4xl  text-white">E-SHOP</h1>
            </div>
            <div className="inline-flex items-baseline">
                <div>
                    <h2 className="text-left text-white text-2xl ml-10 mt-10  w-4/6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At laudantium mollitia commodi eveniet saepe sint consequatur quaerat fuga vel corrupti natus facere repudiandae, beatae dicta, voluptatem modi rerum! Maxime, numquam.</h2>
                </div>
            </div>
            <button className="text-white mt-20 ml-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >Veja as Melhores Promoções</button>
        </div>


    )
}