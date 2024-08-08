import { Badge } from "../components/ui/badge";
import React from "react";
import { Book, BookOpen } from "lucide-react";

const DetyraPage = () => {
  return (
    <div className=" h-[400px] border p-[40px]">
      <div className="bg-slate-100 p-[15px] rounded-lg flex flex-col gap-4">
        <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Detyra 43
        </h2>
        <div className=" flex flex-row pt-1.5">
          <Badge className="bg-white border-2 text-slate-600 border-slate-300 hover:bg-white">
            MATEMATIKA_VITI_1
          </Badge>
          <Badge className="bg-white border-2 text-slate-600 border-slate-300 hover:bg-white">
            Kapitulli 2
          </Badge>
          <Badge className="bg-white border-2 text-slate-600 border-slate-300 hover:bg-white">
            Faqja 32
          </Badge>
        </div>
        <div className="flex flex-row pl-2">
          <div className="h-100% w-[1px] bg-slate-400"></div>
          <div className="p-2">
            <p className="text-lg font-semibold">Përshkrimi:</p> //! Continue to
            make the pershkrimi message area also the kerimi i detyres design.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetyraPage;
