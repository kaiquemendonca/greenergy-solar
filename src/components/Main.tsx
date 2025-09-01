'use client'
import { useState } from "react";

// ------------------
// Lista de concessionárias
// ------------------
const concessionariasPorUF: Record<string, string[]> = {
    AC: ["Energisa Acre"],
    AL: ["Equatorial Alagoas"],
    AM: ["Amazonas Energia"],
    AP: ["CEA Equatorial Amapá"],
    BA: ["Neoenergia Coelba"],
    CE: ["Enel Ceará"],
    DF: ["Neoenergia Brasília"],
    ES: ["EDP Espírito Santo", "ESCELSA"],
    GO: ["Equatorial Goiás"],
    MA: ["Equatorial Maranhão"],
    MG: [
        "CEMIG",
        "Energisa Minas Gerais",
        "DME Distribuição",
        "CEMIG Sul",
        "CEMIG Leste",
    ],
    MS: ["Energisa Mato Grosso do Sul"],
    MT: ["Energisa Mato Grosso"],
    PA: ["Equatorial Pará"],
    PB: ["Energisa Paraíba"],
    PE: ["Neoenergia Pernambuco"],
    PI: ["Equatorial Piauí"],
    PR: ["Copel Distribuição"],
    RJ: ["Light", "Enel Rio", "ENEVA Distribuidora RJ"],
    RN: ["Neoenergia Cosern"],
    RO: ["Energisa Rondônia"],
    RR: ["Roraima Energia"],
    RS: ["CEEE Equatorial", "RGE Sul", "RGE Norte"],
    SC: ["Celesc"],
    SE: ["Energisa Sergipe"],
    SP: [
        "Enel São Paulo",
        "CPFL Paulista",
        "CPFL Piratininga",
        "CPFL Santa Cruz",
        "Elektro",
        "EDP São Paulo",
        "AES Tietê",
    ],
    TO: ["Energisa Tocantins"],
};

// ------------------
// Tarifas médias por concessionária (R$/kWh)
// ------------------
const tarifasEnergia: Record<string, Record<string, number>> = {
    AL: { "Equatorial Alagoas": 0.92 },
    SP: {
        "Enel São Paulo": 0.96,
        "CPFL Paulista": 0.94,
        "CPFL Piratininga": 0.95,
        "CPFL Santa Cruz": 0.93,
        Elektro: 0.92,
        "EDP São Paulo": 0.91,
        "AES Tietê": 0.90,
    },
    RJ: { Light: 1.02, "Enel Rio": 0.99, "ENEVA Distribuidora RJ": 0.97 },
    MG: {
        CEMIG: 0.89,
        "Energisa Minas Gerais": 0.91,
        "DME Distribuição": 0.88,
        "CEMIG Sul": 0.90,
        "CEMIG Leste": 0.89,
    },
    PE: { "Neoenergia Pernambuco": 0.93 },
    BA: { "Neoenergia Coelba": 0.95 },
    CE: { "Enel Ceará": 0.94 },
    RS: { "CEEE Equatorial": 0.90, "RGE Sul": 0.91, "RGE Norte": 0.92 },
    SC: { Celesc: 0.89 },
    DF: { "Neoenergia Brasília": 0.95 },
    GO: { "Equatorial Goiás": 0.92 },
    MA: { "Equatorial Maranhão": 0.91 },
    PA: { "Equatorial Pará": 0.92 },
    PI: { "Equatorial Piauí": 0.93 },
    PB: { "Energisa Paraíba": 0.92 },
    RN: { "Neoenergia Cosern": 0.94 },
    SE: { "Energisa Sergipe": 0.91 },
    AM: { "Amazonas Energia": 0.98 },
    AC: { "Energisa Acre": 0.97 },
    RO: { "Energisa Rondônia": 0.96 },
    RR: { "Roraima Energia": 1.05 },
    MT: { "Energisa Mato Grosso": 0.94 },
    MS: { "Energisa Mato Grosso do Sul": 0.93 },
    TO: { "Energisa Tocantins": 0.92 },
    AP: { "CEA Equatorial Amapá": 1.0 },
};

export const Main = () => {

    const [form, setForm] = useState({
        cep: "",
        uf: "",
        conta: "",
        concessionaria: "",
        email: "",
    });

    const [resultado, setResultado] = useState<any>(null);
    const [concessionarias, setConcessionarias] = useState<string[]>([]);

    // Buscar UF pelo CEP
    const buscarCEP = async (cep: string) => {
        if (cep.length < 8) return;
        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await res.json();
            if (data.uf) {
                setForm((prev) => ({ ...prev, uf: data.uf }));
                setConcessionarias(concessionariasPorUF[data.uf] || []);
            }
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
        }
    };

    // Handle inputs
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === "cep") {
            const cepNum = value.replace(/\D/g, "");
            if (cepNum.length === 8) buscarCEP(cepNum);
        }
    };

    // Simulação
    const simular = (e: React.FormEvent) => {
        e.preventDefault();

        const conta = Number(form.conta);
        if (conta <= 0 || !form.uf || !form.concessionaria) return;

        const tarifa =
            tarifasEnergia[form.uf]?.[form.concessionaria] || 0.95; // fallback
        const consumoMensal = conta / tarifa; // kWh/mês

        const producaoPorKWp = 130; // kWh/mês por kWp
        const potenciaNecessaria = consumoMensal / producaoPorKWp;

        const modulos = Math.ceil(potenciaNecessaria / 0.555);
        const potenciaFinal = (modulos * 0.555).toFixed(2);

        const producaoMensal = modulos * 55;
        const area = (modulos * 3.3).toFixed(1);

        const economiaAnual = conta * 12;
        const precoMin = potenciaNecessaria * 2400;
        const precoMax = potenciaNecessaria * 3000;
        const payback = Math.round(precoMax / economiaAnual);

        setResultado({
            economiaAnual,
            payback,
            area,
            potenciaFinal,
            modulos,
            producaoMensal,
            precoMin,
            precoMax,
            tarifa,
        });
    };


    return (
        <div className="w-full flex flex-col scroll-smooth">
            <div className="w-full h-[180svh] md:h-screen md:snap-always md:snap-start relative flex md:px-8">
                <img className="brightness-50  md:brightness-100 object-cover object-right-top z-20 absolute top-0 bottom-0 left-0 right-0 w-full h-[150svh]"
                    src="/assets/bg-painel.jpg"/>
                <div className="w-full max-w-[1280px] mx-auto md:flex md:items-center lg:px-0 xl:flex xl:items-center z-50">
                    <div className="w-full flex flex-col mx-auto md:flex-row md:justify-between md:mt-[56px]">
                        <div className="relative h-[100svh] md:h-full snap-always snap-start md:snap-align-none flex pt-14 md:pt-0 lg:flex">
                            <div className="w-full max-w-[305px] md:hidden bottom-24 left-1/2 -translate-x-1/2 absolute self-center">
                                <button className="w-full text-white font-semibold border border-2 rounded-full p-1"><a href="#calc">FAÇA UMA SIMULAÇÃO</a></button>
                            </div>
                            <div className="px-4 md:px-0 mb-10 lg:mb-0 lg:mr-[4.8rem]">
                                <div className="w-full">
                                    <a className="inline-block mt-[120px] md:mt-5  shadow-lg p-2 rounded-lg bg-white/40 backdrop-blur-sm">
                                        <img height={28} width={300} alt="Solar Greenergy" src="/assets/solar 1.png" />
                                    </a>
                                    <p className=" text-[35px] leading-[43px] tracking-wide font-normal text-white md:text-[40px] md:leading-[42px] lg:text-[40px] lg:leading-[60px] xl:text-[50px] mt-[20px] md:mt-5 lg:mt-[2.25rem]">
                                        Sua energia,
                                        <br></br>
                                        seu futuro brilhante.
                                        <br></br>
                                        Faça o sol trabalhar para você!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div id="calc" className="max-w-3xl mx-auto p-6">
                            {!resultado ? (
                                <form
                                    onSubmit={simular}
                                    className="bg-white shadow-lg rounded-2xl p-6 space-y-4"
                                >
                                    <h2 className="text-xl font-bold text-[#4b5926]">Calculadora Solar</h2>
                                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                                        <input
                                            type="text"
                                            name="cep"
                                            placeholder="CEP"
                                            value={form.cep}
                                            onChange={handleChange}
                                            className="border p-2 rounded-lg w-full"
                                        />
                                        <input
                                            type="text"
                                            name="uf"
                                            placeholder="UF"
                                            value={form.uf}
                                            readOnly
                                            className="border p-2 rounded-lg w-full bg-gray-100"
                                        />
                                        <input
                                            type="number"
                                            name="conta"
                                            placeholder="Valor da Conta de Luz (R$)"
                                            value={form.conta}
                                            onChange={handleChange}
                                            className="border p-2 rounded-lg w-full text-sm"
                                        />

                                        <select
                                            name="concessionaria"
                                            value={form.concessionaria}
                                            onChange={handleChange}
                                            className="border p-2 rounded-lg w-full text-sm"
                                            disabled={concessionarias.length === 0}
                                        >
                                            <option value="">Selecione a Concessionária</option>
                                            {concessionarias.map((c, i) => (
                                                <option key={i} value={c}>
                                                    {c}
                                                </option>
                                            ))}
                                        </select>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="E-mail"
                                            value={form.email}
                                            onChange={handleChange}
                                            className="border p-2 rounded-lg col-span-2"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#4b5926] text-white px-4 py-2 rounded-lg w-full hover:bg-opacity-90 transition"
                                    >
                                        Simule Grátis!
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-white shadow-lg rounded-2xl p-6 text-gray-700">
                                    <h2 className="text-xl font-bold mb-4">Resumo da Simulação</h2>
                                    <p>
                                        <b>Tarifa considerada:</b> R$ {resultado.tarifa.toFixed(2)} / kWh
                                    </p>
                                    <p>
                                        <b>Economia Anual Estimada:</b> R${" "}
                                        {resultado.economiaAnual.toLocaleString("pt-BR")}
                                    </p>
                                    <p>
                                        <b>Payback Estimado:</b> {resultado.payback} meses
                                    </p>
                                    <p>
                                        <b>Área Necessária:</b> {resultado.area} m²
                                    </p>
                                    <p>
                                        <b>Potência do Kit:</b> {resultado.potenciaFinal} kWp
                                    </p>
                                    <p>
                                        <b>Quantidade de Módulos:</b> {resultado.modulos}
                                    </p>
                                    <p>
                                        <b>Produção Mensal Estimada:</b> {resultado.producaoMensal} kWh/mês
                                    </p>
                                    <p>
                                        <b>Valor Estimado do Sistema:</b> R${" "}
                                        {resultado.precoMin.toLocaleString("pt-BR")} - R${" "}
                                        {resultado.precoMax.toLocaleString("pt-BR")}
                                    </p>

                                    <button
                                        onClick={() => setResultado(null)}
                                        className="mt-4 bg-[#4b5926] px-4 py-2 rounded-lg hover:opacity-90 text-white transition"
                                    >
                                        Refazer Simulação
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}