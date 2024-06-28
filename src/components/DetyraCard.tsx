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

export default function DetyraCard() {
  return (
    <Card className="w-[350px flex flex-col md:flex-row hover:shadow-md">
      <div>
        <CardHeader className="">
          <CardTitle>Detyra 32</CardTitle>
          <CardDescription>Libri: MATEMATIKA VITI 1</CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-medium leading-none">
                Kapitulli 4
              </p>
            </div>
          </div>
          <div className="mb-2 grid grid-cols-[25px_1fr] items-start pb-1 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground font-medium leading-none">
                Faqe 54
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 ">
          <Badge variant="outline" className="gap-1">
            <PencilLine className="h-3" />
            Abdullah Miftari
          </Badge>
          <Badge variant="success" className="gap-2"><BadgeCheck className="h-3 w-3 pl-0" />E verifikuar</Badge>
        </CardFooter> 
      </div>
      <div className="p-6">
        <CardContent className="p-0 flex justify-center items-center h-full">
          <div className="flex h-full">
            <img src={Viti1} className="h-full w-[200px] object-cover relative rounded-sm" />
            <Badge variant="outline" className="m-2 absolute">
              1 / 2
            </Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
