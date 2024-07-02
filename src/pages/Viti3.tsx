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

interface Viti3Props {
  detyrat: MathTask[];
}

const Viti3: React.FC<Viti3Props> = ({ detyrat }) => {

  const [vitiTreteDetyrat, setVitiTreteDetyrat] = useState<MathTask[]>([]);
  const [loading, setLoading] = useState(true);

  function mapVitiTreteDetyrat() {
    const newVitiTreteDetyrat = detyrat.filter((detyra) => {
      return (
        detyra.skripta.titulli === "MATEMATIKA_VITI_3" ||
        detyra.skripta.titulli === "Zbirka Zadaci Matematika Za III Godina"
      );
    });

    setVitiTreteDetyrat(newVitiTreteDetyrat);
    setLoading(false);

  }

  useEffect(() => {
    mapVitiTreteDetyrat();
  }, [detyrat]);
  return (
    <main className="flex flex-1 flex-col p-4  lg:p-6 select-none">
      <PageTitle title="Viti 3" />
      <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 lg:px-8 rounded-lg gap-8">
        {loading ? <Loading/> : vitiTreteDetyrat.map((detyra) => (
          <DetyraCard key={detyra.id} detyra={detyra} />
        ))}
      </div>
    </main>
  );
};

export default Viti3;
