import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useLocation } from "react-router-dom";

export default function BreadcrumbComp() {
  const location = useLocation();
  console.log("location", location.pathname);

  const pathElements = location.pathname
    .split("/")
    .filter((element) => element !== "");
  console.log("Path Elements:", pathElements);

  return (
    <Breadcrumb className="bg-slate-50 px-6 py-3">
      <BreadcrumbList>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/`}>Ballina</BreadcrumbLink>
        </BreadcrumbItem>
        {pathElements.map((item) => (
          <>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${item}`} >{item}</BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
