import Button from "../../components/Button";
import Card from "../../components/Card";
import { IoGridOutline } from "react-icons/io5";


const animais = [
    {
        nome: "Thor",
        animal: "Cachorro",
        raca: "Golden Retriever",
        tutor: "Ana",
        img: "/img/pets/thor.png"
    },
    {
        nome: "Pacoca",
        animal: "Cachorro",
        raca: "Vira-lata caralamelo",
        tutor: "Marina Costa",
        img: "/img/pets/pacoca.png"
    },
    {
        nome: "Mia",
        animal: "Gato",
        raca: "Siamês",
        tutor: "Carlos Lima",
        img: "/img/pets/mia.png"
    },
    {
        nome: "Frajola",
        animal: "Gato",
        raca: "SRD",
        tutor: "Rafael Dias",
        img: "/img/pets/frajola.png"
    },
    {
        nome: "Luna",
        animal: "Gato",
        raca: "SRD",
        tutor: "Pedro Alves",
        img: "/img/pets/frajola.png"
    },
    {
        nome: "Bidu",
        animal: "Cachorro",
        raca: "Beagle",
        tutor: "Juliana Reis",
        img: "/img/pets/bidu.png"
    },
    {
        nome: "Mel",
        animal: "Cachorro",
        raca: "ShiTzu",
        tutor: "Beatriz Nunes",
        img: "/img/pets/bidu.png"
    },
    {
        nome: "Nina",
        animal: "Gato",
        raca: "Persa",
        tutor: "Lucas Melo",
        img: "/img/pets/mia.png"
    }
]

export default function Pets() {
    return (
        <section className=" py-10 px-20">
            <div className="flex flex-row gap-5 items-center mb-4">
                <h2 className="text-3xl font-bold mb-4">Pets</h2>
                <Button icon={<IoGridOutline />} text="Ver todos" />
            </div>
            <div className="grid grid-cols-4 gap-5">
                {animais.map((animal, index) => (
                    <Card key={index} {...animal} />
                ))}
            </div>
        </section>
    )
}