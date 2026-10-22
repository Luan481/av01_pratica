export default function hero() {
    return (
        <section className="flex flex-row bg-hero pt-20 px-25 justify-between max-h-100 border-b-2 border-texto-principal">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold max-w-140">
                    Cuidado completo em um só <span className="text-main-green">lugar.</span>
                </h1>
                <p className="font-bold text-texto-secundario">Clientes,pets e serviços organizados para o atendimento do dia a dia.</p>
                <p className="text-sm font-bold text-main-green">Patinha felizes, tutores tranquilos</p>
            </div>
            <img src="/img/hero.svg" alt="Hero" className="max-h-70" />
        </section>
    )
}