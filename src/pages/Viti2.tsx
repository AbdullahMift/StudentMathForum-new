import PageTitle from "@/components/PageTitle";
import React, { useEffect, useState } from "react";
import DetyraCard from "@/components/DetyraCard";

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

interface Viti2Props {
  detyrat: MathTask[];
}

const Viti2: React.FC<Viti2Props> = ({ detyrat }) => {
  const [vitiDyteDetyrat, setVitiDyteDetyrat] = useState<MathTask[]>([]);

  function mapVitiDyteDetyrat() {
    const newVitiDyteDetyrat = detyrat.filter((detyra) => {
      return (
        detyra.skripta.titulli === "MATEMATIKA_VITI_2" ||
        detyra.skripta.titulli === "Zbirka Zadaci Matematika Za II Godina"
      );
    });

    setVitiDyteDetyrat(newVitiDyteDetyrat);
  }

  useEffect(() => {
    mapVitiDyteDetyrat();
  }, [detyrat]);

  return (
    <main className="flex flex-1 flex-col p-4  lg:p-6 select-none">
      <PageTitle title="Viti 2" />
      
      <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 px-8 rounded-lg gap-8 ">
      {vitiDyteDetyrat.map((detyra) => (
          <DetyraCard key={detyra.id} detyra={detyra} />
        ))}
      </div>
    </main>
  );
};

export default Viti2;
