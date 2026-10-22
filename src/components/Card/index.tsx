import type { CardProps } from "../../types/card.types";
import { FaRegHeart } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";



export default function Card({ nome, animal, raca, tutor, img }: CardProps) {
    return (
        <section className=" w-full h-full flex flex-col items-center justify-center ">
            <div className="flex flex-row gap-5 bg-hero p-2 rounded-2xl">
                <div className="flex flex-col gap-2">
                    <img src={img} alt={nome} />
                    <h2 className="text-2xl font-bold">{nome}</h2> 
                    <p className="text-texto-secundario">{animal}</p>
                    <p className="text-texto-secundario">{raca}</p>
                    <p className="text-texto-secundario">Tutor: {tutor}</p>
                    <FaRegHeart color="#0F8A7E" size={30} className="relative  bottom-30 left-55 hover:cursor-pointer"/>
                    <p className="flex flex-row items-center gap-1 justify-end mx-2 font-bold"><CiCircleInfo /> Saiba mais</p>
                </div>
            </div>
        </section>
    )
}