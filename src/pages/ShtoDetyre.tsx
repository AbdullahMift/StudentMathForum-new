import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ShtoDetyre = () => {
  return (
    <div className="flex flex-col items-start px-4 lg:px-8 pt-4 md:pt-10 ">
      <div className="w-full sm:w-[40%] lg:w-[40%] xl:w-[20%] flex flex-col gap-4">
        <div className="pb-4">
          <h1 className="font-semibold sm:text-2xl text-3xl">Shto Detyrë</h1>
        </div>
        <div>
          <Label htmlFor="detyra">Detyra</Label>
          <Input type="text" id="detyra" placeholder="32" />
        </div>
        <div>
          <Label htmlFor="kerkimi">Kërkimi detyrës</Label>
          <Input
            type="text"
            id="kerkimi"
            placeholder="Zgjidh barazimet iracionale!"
          />
        </div>
        <div>
          <Label>Skripta (libri)</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="MATEMATIKA_VITI_1">
                  MATEMATIKA VITI 1
                </SelectItem>
                <SelectItem value="Zbirka Zadaci Matematika Za I Godina">
                  Zbirka Zadaci Matematika Za I Godina
                </SelectItem>
                <SelectItem value="MATEMATIKA_VITI_2">
                  MATEMATIKA VITI 2
                </SelectItem>
                <SelectItem value="Zbirka Zadaci Matematika Za II Godina">
                  Zbirka Zadaci Matematika Za II Godina
                </SelectItem>
                <SelectItem value="MATEMATIKA_VITI_3">
                  MATEMATIKA VITI 3
                </SelectItem>
                <SelectItem value="Zbirka Zadaci Matematika Za III Godina">
                  Zbirka Zadaci Matematika Za III Godina
                </SelectItem>
                <SelectItem value="MATEMATIKA_VITI_4">
                  MATEMATIKA VITI 4
                </SelectItem>
                <SelectItem value="Zbirka Zadaci Matematika Za IV Godina">
                  Zbirka Zadaci Matematika Za IV Godina
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-3">
          <Label htmlFor="kapitulli">Kapitulli</Label>
          <Input type="number" id="kapitulli" placeholder="1" />
        </div>
        <div className="flex items-center gap-3">
          <Label htmlFor="faqja">Faqja</Label>
          <Input type="number" id="faqja" placeholder="1" />
        </div>
      </div>
    </div>
  );
};

export default ShtoDetyre;
