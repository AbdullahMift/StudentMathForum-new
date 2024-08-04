import React from "react";
import { useState } from "react";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { Upload, CircleX } from "lucide-react";

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
  const [images, setImages] = useState<File[]>([]);
  const [fileNames, setfileNames] = useState<string>("");

  function deleteImage(imageIndex) {
    setImages((prevImages) =>
      prevImages.filter((img, index) => index !== imageIndex)
    );
  }
  console.log("images", images);

  return (
    <div className="flex flex-col items-start px-4 lg:px-8 pt-4 md:pt-10 ">
      <div className="w-full sm:w-[60%] lg:w-[50%] xl:w-[40%] 2xl flex flex-col gap-4">
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

        <div className="flex flex-col gap-4 sm:flex-row ">
          <div className="sm:w-[50%] flex items-center gap-3">
            <Label htmlFor="kapitulli">Kapitulli</Label>

            <Input type="number" id="kapitulli" placeholder="1" />
          </div>
          <div className="sm:w-[50%] flex items-center gap-3">
            <Label htmlFor="faqja">Faqja</Label>

            <Input type="number" id="faqja" placeholder="1" />
          </div>
        </div>
        <div>
          <Label htmlFor="pershkrimi">Përshkrimi i detyrës</Label>

          <Textarea id="pershkrimi" rows={2} placeholder="x^2 - 4x + 2" />
        </div>
        <div>
          <Label htmlFor="zgjidhje">Zgjidhje</Label>

          <div
            onClick={() =>
              document.querySelector<HTMLInputElement>(".input-field")?.click()
            }
            className="flex text-slate-500 justify-center items-center gap-2 w-full rounded-md border-input border-[2px] border-dashed p-[20px]"
          >
            {images.length === 0 ? (
              <>
                <Upload size={20} />
                <p className="text-[15px]">Upload</p>
              </>
            ) : (
              <>
                {images.map((item, index) => (
                  <div key={index}>
                    <img
                      src={URL.createObjectURL(item)}
                      className="rounded-md h-[120px]"
                    />
                    <p className="text-sm flex items-center gap-2">
                      img {index + 1}
                      <CircleX
                        size={15}
                        onClick={(event) => {
                          event.stopPropagation();
                          deleteImage(index);
                        }}
                      />
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            multiple
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { files } = event.target;
              if (files) {
                const selectedImages = Array.from(files).slice(0, 3);
                console.log("selectedImages", selectedImages);
                if (selectedImages.length > 0) {
                  setImages(selectedImages);

                  setfileNames(
                    selectedImages.map((file: File) => file.name).join(", ")
                  );
                }
              }
            }}
          />
        </div>
        <div>
          <Button className="w-full">Shto</Button>
        </div>
      </div>
    </div>
  );
};

export default ShtoDetyre;
