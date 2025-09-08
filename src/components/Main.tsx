'use client'
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ChangeEvent, FormEvent } from "react"

/* ---------------------------------------
   Listas e Tabelas (iguais às suas)
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
   Campos com Label Animada (floating)
----------------------------------------*/
function useFloating(labelActive: boolean) {
  return useMemo(
    () => ({
      initial: false,
      animate: labelActive
        ? { scale: 1.2, color: "#4b5926" }
        : { y: -10, scale: 1, color: "#374151" },
      transition: { duration: 0.2, ease: ["easeOut"] },
      className: "absolute left-3 top-3 pointer-events-none text-sm font-semibold",
    }),
    [labelActive]
  );
}

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

const InputField = ({
  id, label, name, value, onChange, placeholder = "", disabled, readOnly, type = "text",
}: CommonProps) => {
  const floating = useFloating(!!value);
  return (
    <div className="relative w-full">
      <label htmlFor={id} {...floating}>
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
        className="mt-6 w-full h-12 px-4 text-[15px] rounded-xl border border-gray-200 bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#4b5926] focus:border-transparent transition"
      />
    </div>
  );
};

const SelectField = ({
  id, label, name, value, onChange, disabled,
  children,
}: CommonProps & { children: React.ReactNode }) => {
  const floating = useFloating(!!value);
  return (
    <div className="relative w-full">
      <label htmlFor={id} {...floating}>
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="mt-6 w-full h-12 px-4 text-[15px] rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#4b5926] focus:border-transparent transition"
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
    if (!form.email || !form.email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
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

  /* Variantes para animar o bloco de resultados */
  const resultWrap = {
    hidden: { opacity: 0, y: 12 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.28, when: "beforeChildren", staggerChildren: 0.05 } },
  };
  const resultItem = {
    hidden: { opacity: 0, y: 8 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="w-full flex flex-col scroll-smooth">
      <div className="w-full h-[160svh] md:h-screen md:snap-always md:snap-start relative flex md:px-8">
        <img
          className="brightness-50 md:brightness-100 object-cover object-right-top z-10 absolute top-0 bottom-0 left-0 right-0 w-full h-[100svh]"
          src="/assets/bg-painel.jpg"
          alt=""
        />

        <div className="w-full max-w-[1280px] mx-auto md:flex md:items-center xl:flex xl:items-center z-50">
          <div className="w-full flex flex-col mx-auto md:flex-row md:justify-between md:mt-[56px]">

            {/* TEXTO À ESQUERDA */}
            <div className="relative h-[100svh] md:h-full snap-always snap-start flex pt-14 md:pt-0">
              <div className="w-full max-w-[305px] md:hidden bottom-24 left-1/2 -translate-x-1/2 absolute self-center">
                <button className="bg-[#4b5926] text-white px-4 py-2 rounded-lg w-full hover:bg-opacity-90 transition">
                  SOLICITAR ORÇAMENTO
                </button>
              </div>
              <div className="px-4 md:px-0 mb-10 lg:mb-0 lg:mr-[4.8rem]">
                <div className="w-full">
                  <a className="inline-block mt-[120px] md:mt-5 shadow-lg p-2 rounded-lg bg-white/40 backdrop-blur-sm">
                    <img height={28} width={300} alt="Solar Greenergy" src="/assets/solar 1.png" />
                  </a>
                  <p className=" text-[35px] leading-[43px] tracking-wide font-normal text-white md:text-[40px] md:leading-[42px] lg:text-[40px] lg:leading-[60px] xl:text-[50px] mt-[20px] md:mt-5 lg:mt-[2.25rem]">
                    Sua energia,
                    <br />
                    seu futuro brilhante.
                    <br />
                    Faça o sol trabalhar para você!
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
                        <h3 className="text-sm font-bold text-gray-500">Simule seu gerador de Energia Solar</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                        <InputField
                          id="cep"
                          label="CEP"
                          name="cep"
                          value={form.cep}
                          onChange={handleChange}
                          placeholder="00000000"
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
                            placeholder="Ex: 350,00"
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
                          >
                            <option value="">Selecione a Concessionária</option>
                            {concessionarias.map((c, i) => (
                              <option key={i} value={c}>{c}</option>
                            ))}
                          </SelectField>
                        </div>

                        <div className="md:col-span-2">
                          <InputField
                            id="email"
                            label="E-mail"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-6 bg-[#4b5926] text-white w-full h-12 rounded-xl font-semibold tracking-wide shadow-lg hover:shadow-xl hover:bg-opacity-90 active:scale-[0.99] transition"
                      >
                        SIMULE GRÁTIS!
                      </button>
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

                    <motion.button
                      variants={resultItem}
                      onClick={() => setResultado(null)}
                      className="mt-4 bg-[#4b5926] px-4 py-2 rounded-lg hover:opacity-90 text-white transition"
                    >
                      Refazer Simulação
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
