import { CiCalendar } from "react-icons/ci";
import type { ServicoProps } from "../../types/servico.types";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";



export default function CardServico({ nome, descricao }: ServicoProps) {
    return (
        <div className="flex flex-col gap-5 bg-hero p-2 rounded-2xl max-w-80 hover:scale-105 transition-transform duration-300">
            <div className="flex flex-row gap-2 items-center ">
                <CiCalendar size={40} color="#0F8A7E" className="bg-[#0f8a7e4a] rounded-2xl p-1 " />
                <div className="flex flex-col gap-1">
                    <p className="font-bold">{nome}</p>
                    <p>{descricao}</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-between">
                <p className="flex flex-row items-center gap-1 justify-start font-bold hover:bg-green-main"><CiCircleInfo /> Saiba mais</p>
                <FaRegHeart color="#0F8A7E" size={30} className=" hover:cursor-pointer" />
            </div>
        </div>
    )
}