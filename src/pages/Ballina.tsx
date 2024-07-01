import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderClosed } from "lucide-react";

import Viti1 from "/Images/Viti1.png";
import Viti2 from "/Images/Viti2.png";
import Viti3 from "/Images/Viti3.png";
import Viti4 from "/Images/Viti4.png";
import { Link } from "react-router-dom";

import PageTitle from "@/components/PageTitle";

const Ballina = () => {
  const vitet: { id: number; name: string; imgUrl: string; path: string }[] = [
    { id: 1, name: "Viti 1", imgUrl: Viti1, path: "/viti1" },
    { id: 2, name: "Viti 2", imgUrl: Viti2, path: "/viti2" },
    { id: 3, name: "Viti 3", imgUrl: Viti3, path: "/viti3" },
    { id: 4, name: "Viti 4", imgUrl: Viti4, path: "/viti4" },
  ];
  return (
    <>
      <main className="flex flex-1 flex-col p-4 lg:p-6 select-none">
        <PageTitle title="Ballina" />
        {/* <div
          className="h-full border border-dashed shadow-sm rounded"
          x-chunk="dashboard-02-chunk-1"
        > */}
        <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 lg:px-8 rounded-lg gap-8 ">
          {vitet.map((item) => (
            <Link to={item.path} className="max-w-[400px] w-full sm:w-[250px]">
              <Card className=" w-full hover:cursor-pointer hover:shadow-lg">
                <CardHeader className="h-[120px] flex justify-center p-0 relative">
                  <img
                    src={item.imgUrl}
                    className="absolute w-full h-full top-0 z-10 object-cover rounded-t-md"
                    alt={item.name}
                  />
                  <CardTitle className="z-20 p-5 text-slate-800 text-3xl font-bold first:mt-0">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex py-0 flex-col px-0">
                  <div className="py-2 px-5 border-b-2 border-slate-200">
                    <CardDescription className="font-medium">
                      123 detyra të zgjidhura
                    </CardDescription>
                  </div>
                  <div className="py-1 flex justify-end px-3">
                    <FolderClosed className="text-slate-500 hover:fill-slate-400 " />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default Ballina;
