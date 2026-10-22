import { IoGridOutline } from "react-icons/io5";
import Button from "../../components/Button";
import CardTutores from "../../components/CardTutores";

const tutores = [
    {
        nome: "Ana",
        img: "/img/tutores/juliana-reis.png",
        numPets: 2
    },
    {
        nome: "Marina Costa",
        img: "/img/tutores/juliana-reis.png",
         numPets: 1
    },
    {
        nome: "Carlos Lima",
        img: "/img/tutores/juliana-reis.png",
        numPets: 3
    },
    {
        nome: "Rafael Dias",
        img: "/img/tutores/juliana-reis.png",
        numPets: 1
    },
    {
        nome: "Pedro Alves",
        img: "/img/tutores/juliana-reis.png",
        numPets: 2
    },
    {
        nome: "Juliana Reis",
        img: "/img/tutores/juliana-reis.png",
        numPets: 1
    },
    {
        nome: "Beatriz Nunes",
        img: "/img/tutores/juliana-reis.png",
        numPets: 2
    },
    {
        nome: "Lucas Melo",
        img: "/img/tutores/juliana-reis.png",
        numPets: 1
    }
];

export default function Tutores() {
    return (
        <section className="px-20">
            <div className="flex flex-row gap-5 items-center mb-4">
                <h2 className="text-2xl font-bold mb-4">Tutores</h2>
                <Button icon={<IoGridOutline />} text="Ver todos" />
            </div>
            {tutores.map((tutor, index) => (<CardTutores key={index} img={tutor.img} nome={tutor.nome} numPets={tutor.numPets} />))}
        </section>
    )
}