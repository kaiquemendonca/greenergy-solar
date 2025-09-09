'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ChangeEvent, FormEvent } from "react"

/* ---------------------------------------
   Listas e Tabelas
----------------------------------------*/
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

const tarifasEnergia: Record<string, Record<string, number>> = {
    AL: { "Equatorial Alagoas": 1.15 },
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

/* ---------------------------------------
   Campos
----------------------------------------*/
type CommonProps = {
    id: string;
    label: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    type?: string;
};

const baseInputClass =
    "w-full h-12 px-4 text-[15px] rounded-xl border border-gray-200 bg-white " +
    "placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4b5926] focus:border-transparent transition";

const InputField = ({
    id, label, name, value, onChange, placeholder = "", disabled, readOnly, type = "text",
}: CommonProps) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                readOnly={readOnly}
                className={baseInputClass}
            />
        </div>
    );
};

const SelectField = ({
    id, label, name, value, onChange, disabled, children,
}: CommonProps & { children: React.ReactNode }) => {
    return (
        <div className="w-full">
            <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={baseInputClass}
            >
                {children}
            </select>
        </div>
    );
};

/* ---------------------------------------
   Componente Principal
----------------------------------------*/
export const Main = () => {
    const [form, setForm] = useState({
        cep: "",
        uf: "",
        conta: "",
        concessionaria: "",
        email: "",
        whatsapp: "",
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
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        if (name === "cep") {
            const cepNum = value.replace(/\D/g, "");
            if (cepNum.length === 8) buscarCEP(cepNum);
        }
    };

    // Simulação
    const simular = (e: FormEvent) => {
        e.preventDefault();

        const conta = Number(form.conta);
        if (conta <= 0) {
            alert("Por favor, insira um valor válido para a conta de luz.");
            return;
        }
        if (!form.cep || form.cep.length < 8) {
            alert("Por favor, insira um CEP válido.");
            return;
        }
        if (!form.concessionaria) {
            alert("Por favor, selecione uma concessionária.");
            return;
        }
        if (!form.whatsapp) {
            alert("Por favor, insira um número de WhatsApp válido.");
            return;
        }

        const tarifa = tarifasEnergia[form.uf]?.[form.concessionaria] || 0.95; // fallback
        const consumoMensal = conta / tarifa; // kWh/mês

        const producaoPorKWp = 130; // kWh/mês por kWp
        const potenciaNecessaria = consumoMensal / producaoPorKWp;

        const modulos = Math.ceil(potenciaNecessaria / 0.555);
        const potenciaFinal = (modulos * 0.555).toFixed(2);

        const producaoMensal = modulos * 55;
        const area = (modulos * 3.3).toFixed(1);

        const economiaAnual = conta * 12 - 600;
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

    /* Variantes para animar APENAS o bloco de resultados */
    const resultWrap = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.28, when: "beforeChildren", staggerChildren: 0.05 } },
    };
    const resultItem = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    };

    return (
        <div className="w-full flex flex-col scroll-smooth">
            <div className="w-full h-full md:h-screen md:snap-always md:snap-start relative flex md:px-8">
                <img
                    className="brightness-50 md:brightness-100 object-cover object-right-top z-10 absolute top-0 bottom-0 left-0 right-0 w-full h-[100svh]"
                    src="/assets/bg-painel.jpg"
                    alt="Painéis solares ao pôr do sol"
                />

                <div className="w-full max-w-[1280px] mx-auto md:flex md:items-center xl:flex xl:items-center z-50">
                    <div className="w-full flex flex-col mx-auto md:flex-row md:justify-between md:mt-[56px]">
                        {/* TEXTO À ESQUERDA */}
                        <div className="relative h-[100svh] md:h-full snap-always snap-start flex pt-14 md:pt-0">
                            {/* CTA fixo mobile */}
                            <div className="w-full max-w-[305px] md:hidden bottom-24 left-1/2 -translate-x-1/2 absolute self-center">
                                <motion.a
                                    href="#calc"
                                    className="bg-[#4b5926] text-white px-4 py-2 rounded-lg w-full block text-center hover:bg-opacity-90 transition"
                                    initial={{ scale: 1, boxShadow: "0 0 0 rgba(75,89,38,0)" }}
                                    animate={{
                                        scale: [1, 1.03, 1],
                                        boxShadow: [
                                            "0 0 0 rgba(75,89,38,0)",
                                            "0 10px 24px rgba(75,89,38,0.35)",
                                            "0 0 0 rgba(75,89,38,0)"
                                        ],
                                    }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    QUERO MINHA SIMULAÇÃO GRATUITA
                                </motion.a>
                            </div>


                            <div className="px-4 md:px-0 mb-10 lg:mb-0 ">
                                <div className="w-full">
                                    <span className="inline-block mt-[120px] md:mt-5 shadow-lg p-2 rounded-lg bg-white/40 backdrop-blur-sm">
                                        <img height={28} width={300} alt="Solar Greenergy" src="/assets/solar 1.png" />
                                    </span>

                                    {/* Headline + subheadline */}
                                    <h1 className="text-white font-semibold tracking-wide mt-[10px] md:mt-5 lg:mt-[2.25rem] text-[30px] leading-[43px] md:text-[28px] md:leading-[40px] lg:text-[36px] lg:leading-[54px]">
                                        Reduza sua conta de luz em até 95% com energia solar em Alagoas.
                                    </h1>
                                    <p className="text-white/90 mt-3 md:mt-4 max-w-[36ch] text-base md:text-[15px] leading-6">
                                        Faça uma simulação gratuita e descubra quanto você pode economizar ainda este mês.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FORM / RESULTADO À DIREITA */}
                        <div id="calc" className="max-w-3xl mx-auto p-6">
                            <AnimatePresence mode="wait">
                                {!resultado ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.25 }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 rounded-[22px] bg-gradient-to-b from-black/10 to-black/0 pointer-events-none" />

                                        <form
                                            onSubmit={simular}
                                            className="relative bg-white/95 backdrop-blur-sm shadow-2xl rounded-[22px] p-7 ring-1 ring-black/5"
                                        >
                                            <div className="text-center mb-6">
                                                <h2 className="text-3xl font-bold text-[#4b5926]">Calculadora Solar</h2>
                                                <h3 className="text-sm font-semibold text-gray-600">
                                                    Receba sua simulação personalizada no WhatsApp em até 24h
                                                </h3>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                                                <InputField
                                                    id="cep"
                                                    label="CEP"
                                                    name="cep"
                                                    value={form.cep}
                                                    onChange={handleChange}
                                                    placeholder="00000000"
                                                    required
                                                />
                                                <InputField
                                                    id="uf"
                                                    label="UF"
                                                    name="uf"
                                                    value={form.uf}
                                                    onChange={handleChange}
                                                    placeholder="UF"
                                                    readOnly
                                                />

                                                <div className="md:col-span-2">
                                                    <InputField
                                                        id="conta"
                                                        label="Valor da Conta de Luz (R$)"
                                                        name="conta"
                                                        type="number"
                                                        value={form.conta}
                                                        onChange={handleChange}
                                                        placeholder="Ex.: 350,00"
                                                        min="0"
                                                        step="0.01"
                                                        required
                                                    />
                                                </div>

                                                <div className="md:col-span-2">
                                                    <SelectField
                                                        id="concessionaria"
                                                        label="Concessionária"
                                                        name="concessionaria"
                                                        value={form.concessionaria}
                                                        onChange={handleChange}
                                                        disabled={concessionarias.length === 0}
                                                        required
                                                    >
                                                        <option value="">Selecione a Concessionária</option>
                                                        {concessionarias.map((c, i) => (
                                                            <option key={i} value={c}>{c}</option>
                                                        ))}
                                                    </SelectField>
                                                </div>

                                                {/* WhatsApp */}
                                                <div className="md:col-span-2">
                                                    <InputField
                                                        id="whatsapp"
                                                        label="WhatsApp (com DDD)"
                                                        name="whatsapp"
                                                        type="tel"
                                                        value={form.whatsapp}
                                                        onChange={handleChange}
                                                        placeholder="(82) 9 9999-9999"
                                                        required
                                                    />
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        Usamos apenas para enviar a simulação e tirar dúvidas. Sem spam.
                                                    </p>
                                                </div>
                                            </div>

                                            <motion.button
                                                type="submit"
                                                className="mt-6 bg-[#4b5926] text-white w-full h-12 rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-xl hover:bg-opacity-90 active:scale-[0.99] transition"
                                                aria-label="Enviar dados para simulação de economia com energia solar"
                                                initial={{ scale: 1, boxShadow: "0 0 0 rgba(75,89,38,0.0)" }}
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                    boxShadow: [
                                                        "0 6px 18px rgba(75,89,38,0.15)",
                                                        "0 12px 28px rgba(75,89,38,0.30)",
                                                        "0 6px 18px rgba(75,89,38,0.15)"
                                                    ],
                                                }}
                                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                QUERO MINHA SIMULAÇÃO GRATUITA
                                            </motion.button>


                                            {/* Selos rápidos */}
                                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-black">
                                                <div className="bg-[#ffcc2a] rounded-lg p-3 ring-1 ring-black/5 text-center">
                                                    +300 projetos entregues
                                                </div>
                                                <div className="bg-[#ffcc2a] rounded-lg p-3 ring-1 ring-black/5 text-center">
                                                    Economia de até 95%
                                                </div>
                                                <div className="bg-[#ffcc2a] rounded-lg p-3 ring-1 ring-black/5 text-center">
                                                    Suporte local e garantia
                                                </div>
                                            </div>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="resultado"
                                        variants={resultWrap}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="bg-white shadow-2xl rounded-[22px] p-7 text-gray-700 ring-1 ring-black/5"
                                    >
                                        <motion.h2 variants={resultItem} className="text-xl font-bold mb-4">
                                            Resumo da Simulação
                                        </motion.h2>

                                        <motion.p variants={resultItem}>
                                            <b>Tarifa considerada:</b> R$ {resultado.tarifa.toFixed(2)} / kWh
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Economia Anual Estimada:</b> R{" "}
                                            {resultado.economiaAnual.toLocaleString("pt-BR")}
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Payback Estimado:</b> {resultado.payback} anos
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Área Necessária:</b> {resultado.area} m²
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Potência do Kit:</b> {resultado.potenciaFinal} kWp
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Quantidade de Módulos:</b> {resultado.modulos}
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Produção Mensal Estimada:</b> {resultado.producaoMensal} kWh/mês
                                        </motion.p>
                                        <motion.p variants={resultItem}>
                                            <b>Valor Estimado do Sistema:</b> R{" "}
                                            {resultado.precoMin.toLocaleString("pt-BR")} - R{" "}
                                            {resultado.precoMax.toLocaleString("pt-BR")}
                                        </motion.p>

                                        <motion.div variants={resultItem} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            <button
                                                onClick={() => setResultado(null)}
                                                className="bg-gray-100 text-gray-800 px-4 h-11 rounded-lg hover:bg-gray-200 transition"
                                            >
                                                Refazer Simulação
                                            </button>
                                            <a
                                                href="https://wa.me/5582994180997?text=Olá!%20Quero%20agendar%20uma%20visita%20técnica."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#4b5926] text-white px-4 h-11 rounded-lg flex items-center justify-center font-medium hover:bg-opacity-90 transition"
                                            >
                                                Falar com um especialista
                                            </a>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
