import DetyraCard from "@/components/DetyraCard";
import PageTitle from "@/components/PageTitle";

const Viti1 = () => {
  return (
    <main className="flex flex-1 flex-col p-4 lg:p-6 select-none">
      <PageTitle title="Viti 1" />
      <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 lg:px-8 rounded-lg gap-8 ">
        <DetyraCard />
      </div>
    </main>
  );
};

export default Viti1;
