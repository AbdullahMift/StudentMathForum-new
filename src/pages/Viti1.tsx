import React, { useEffect, useState } from "react";
import DetyraCard from "@/components/DetyraCard";
import PageTitle from "@/components/PageTitle";

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

interface Viti1Props {
  detyrat: MathTask[];
}

const Viti1: React.FC<Viti1Props> = ({ detyrat }) => {
  const [vitiPareDetyrat, setVitiPareDetyrat] = useState<MathTask[]>([]);

  function mapVitiPareDetyrat() {
    const newVitiPareDetyrat = detyrat.filter((detyra) => {
      return (
        detyra.skripta.titulli === "MATEMATIKA_VITI_1" ||
        detyra.skripta.titulli === "Zbirka Zadaci Matematika Za I Godina"
      );
    });

    setVitiPareDetyrat(newVitiPareDetyrat);
  }

  useEffect(() => {
    mapVitiPareDetyrat();
  }, [detyrat]);

  return (
    <main className="flex flex-1 flex-col p-4 lg:p-6 select-none">
      <PageTitle title="Viti 1" />
      <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 lg:px-8 rounded-lg gap-8">
        {vitiPareDetyrat.map((detyra) => (
          <DetyraCard key={detyra.id} detyra={detyra} />
        ))}
      </div>
    </main>
  );
};

export default Viti1;