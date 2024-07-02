import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { PencilLine, BadgeCheck } from "lucide-react";

import Viti1 from "/Images/Viti1.png";

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

interface DetyraCardProps {
  detyra: MathTask; 
}


 const DetyraCard: React.FC<DetyraCardProps> = ({ detyra }) => {

  console.log('detyra card', detyra);
  
  return (
    <Card className="w-full sm:w-max max-w-[560px] flex flex-col justify-between sm:flex-row hover:shadow-md">
      <div>
        <CardHeader className="">
          <CardTitle>Detyra {detyra.detyra}</CardTitle>
          <CardDescription>Libri: {detyra.skripta.titulli}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row gap-7 px-6 pb-0 sm:pb-6  sm:gap-0 sm:flex-col">
          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-medium leading-none">
                Kapitulli {detyra.kapitulli}
              </p>
            </div>
          </div>
          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-medium leading-none">
                Faqe {detyra.faqe}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-3 sm:flex hidden">
          <Badge variant="outline" className="gap-[0.5] lg:gap-1 ">
            <PencilLine className="h-3" />
            Abdullah Miftari
          </Badge>
          <Badge variant="success" className="gap-2"><BadgeCheck className="h-3 w-3 pl-0" />E verifikuar</Badge>
        </CardFooter> 
      </div>
      <div className="p-6">
        <CardContent className="p-0 flex flex-col sm:justify-center sm:items-center h-full">
          <div className="flex h-full">
            <img src={detyra.image[0]} className="h-full max-h-[200px] w-full sm:w-[200px] object-cover relative rounded-sm" />
            <Badge variant="outline" className="m-2 absolute">
              1 / {detyra.image.length}
            </Badge>
          </div>
          <CardFooter className="flex gap-4 pt-2 p-0 pt-4 lg:gap-3 sm:hidden">
          <Badge variant="outline" className="gap-[0.5] lg:gap-1 ">
            <PencilLine className="h-3" />
            Abdullah Miftari
          </Badge>
          <Badge variant="success" className="gap-2"><BadgeCheck className="h-3 w-3 pl-0" />E verifikuar</Badge>
        </CardFooter> 
        </CardContent>
      </div>
    </Card>
  );
}

export default DetyraCard;