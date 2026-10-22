import Button from "../../components/Button";
import { IoGridOutline } from "react-icons/io5";
import CardServico from "../../components/CardServico";

const servicos = [
    {
        nome: "Banho e Tosa",
        descricao: "Seg a Sáb • 1h30"
    },
    {
        nome: "Consulta Veterinária",
        descricao: "Agendamento • 40 min"
    }, 
    {
        nome: "Vacinação",
        descricao: "V10, Antirrábica"
    },
    {
        nome: "Hospedagem",
        descricao: "Diaria com recreação"
    },
    {
        nome: "Adestramento",
        descricao: "Pacote de 8 aulas"
    }
];

export default function Servicos() {
    return (
        <section className="py-12 px-20">
            <div className="flex flex-row gap-5 items-center mb-4">
                <h2 className="text-2xl font-bold">Serviços</h2>
                <Button icon={<IoGridOutline />} text="Ver todos" />
            </div>
            <div className="grid grid-cols-5 gap-5">
            {servicos.map((servico, index) => (
                <CardServico key={index} {...servico} />
            ))}
            </div>
        </section>
    )
}