import React from "react";
import { Link } from "react-router-dom";

import SMFLogo from "../../public/StudentMathForumLogo.png";
import {
  CircleEqual,
  CirclePlus,
  DiamondPercent,
  Home,
  SquareX,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = location.pathname;

  return (
    <>
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2 ">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 ">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <img src={SMFLogo} className="h-6" alt="" />
              {/* <span className="">Acme Inc</span> */}
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1 ">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className={`${
                  isActive === "/" ? "bg-muted" : "text-muted-foreground"
                } flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-primary`}
              >
                <Home className="h-4 w-4" />
                Ballina
              </Link>
              <Separator className="" />

              <Link
                to="#"
                className={`${
                  isActive === "/viti1" ? "bg-muted" : "text-muted-foreground"
                } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`}
              >
                <DiamondPercent className="h-4 w-4" />
                Viti 1
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                to="#"
                className={`${
                  isActive === "/viti2" ? "bg-muted" : "text-muted-foreground"
                } flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:text-primary`}
              >
                <CirclePlus className="h-4 w-4" />
                Viti 2
              </Link>
              <Link
                to="#"
                className={`${
                  isActive === "/viti3" ? "bg-muted" : "text-muted-foreground"
                } flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:text-primary`}
              >
                <SquareX className="h-4 w-4" />
                Viti 3
              </Link>
              <Link
                to="#"
                className={`${
                  isActive === "/viti4" ? "bg-muted" : "text-muted-foreground"
                } flex items-center gap-3 rounded-lg  px-3 py-2 transition-all hover:text-primary`}
              >
                <CircleEqual className="h-4 w-4" />
                Viti 4
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0 ">
              <CardHeader className="p-2 pt-0 md:p-4 text-[red]">
                <CardTitle className="text-zinc-600">
                  You are currently Guest mode
                </CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access by Log in or Sign
                  up.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full bg-zinc-600">
                  Log in or Sign up
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
