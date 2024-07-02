import PageTitle from "@/components/PageTitle";
import React, { useEffect, useState } from "react";
import DetyraCard from "@/components/DetyraCard";
import Loading from "../components/LoadingIcon";


interface MathTask {
  id: string;
  detyra: number;
  pershkrimi: string;
  skripta: { titulli: string }; 
  kapitulli: number;
  faqe: number;
  kerkimiDetyres: string;
  image: string;
}

interface Viti4Props {
  detyrat: MathTask[];
}

const Viti4: React.FC<Viti4Props> = ({ detyrat })  => {

  const [vitiKatertDetyrat, setVitiKatertDetyrat] = useState<MathTask[]>([]);
  const [loading, setLoading] = useState(true);
  function mapVitiKatertDetyrat() {
    const newVitiKatertDetyrat = detyrat.filter((detyra) => {
      return (
        detyra.skripta.titulli === "MATEMATIKA_VITI_4" ||
        detyra.skripta.titulli === "Zbirka Zadaci Matematika Za IV Godina"
      );
    });

    setVitiKatertDetyrat(newVitiKatertDetyrat);
    setLoading(false);

  }

  useEffect(() => {
    mapVitiKatertDetyrat();
  }, [detyrat]);
  return (
    <main className="flex flex-1 flex-col p-4  lg:p-6 select-none">
      <PageTitle title="Viti 4" />
      <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 lg:px-8 rounded-lg gap-8">
        {loading ? <Loading/> : vitiKatertDetyrat.map((detyra) => (
          <DetyraCard key={detyra.id} detyra={detyra} />
        ))}
      </div>
    </main>
  );
};

export default Viti4;
