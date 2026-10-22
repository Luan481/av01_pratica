import { CiCircleInfo } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

export default function CardTutores({ img, nome, numPets }: { img: string; nome: string; numPets: number }) {
    return (
        <div className="flex flex-col gap-5 bg-hero p-2 rounded-2xl max-w-80 hover:scale-105 transition-transform duration-300 m-2">
            <div>
                <img src={img} alt={nome} />
                <h3>{nome}</h3>
                <p>{numPets} pets</p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-between">
                <p className="flex flex-row items-center gap-1 justify-start font-bold hover:bg-green-main"><CiCircleInfo /> Saiba mais</p>
                <FaRegHeart color="#0F8A7E" size={30} className=" hover:cursor-pointer" />
            </div>
        </div>
    )
}