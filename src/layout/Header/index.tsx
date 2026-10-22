import Button from "../../components/Button";
import { FaRegHeart } from "react-icons/fa";


export default function Header() {
    return (
        <header className="flex flex-row bg-hero py-5 px-25 justify-between">
            <div className="flex flex-row items-center gap-2 ">
                <img src="/img/logo-icone.png" alt="Logo" className="w-12 h-12" />
                <h2 className="text-2xl font-bold">Pet<span className="text-main-green">Care</span></h2>
            </div>
            <Button icon={<FaRegHeart />} text="Lista de favoritos" />
        </header>
    )
}