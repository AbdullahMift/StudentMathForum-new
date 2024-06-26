import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

import { CircleEqual, CirclePlus, DiamondPercent, SquareX } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import SMFLogo from "/StudentMathForumLogo.png";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  const location = useLocation();
  const isActive = location.pathname;
  return (
    <>
      <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 ">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                to="/"
                className={`flex items-center gap-2 pb-2 text-lg font-semibold`}
                onClick={closeSidebar}
              >
                <img src={SMFLogo} className="h-[22px]" alt="" />
              </Link>
              <Link
                to="/"
                className={`${
                  isActive === "/" ? "bg-muted" : "text-muted-foreground"
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
                onClick={closeSidebar}
              >
                <Home className="h-5 w-5" />
                Ballina
              </Link>
              <Separator />
              <Link
                to="/viti1"
                className={`${
                  isActive === "/viti1" ? "bg-muted" : "text-muted-foreground"
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
                onClick={closeSidebar}
              >
                <DiamondPercent className="h-5 w-5" />
                Viti 1
              </Link>
              <Link
                to="/viti2"
                className={`${
                  isActive === "/viti2" ? "bg-muted" : "text-muted-foreground"
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
                onClick={closeSidebar}
              >
                <CirclePlus className="h-5 w-5" />
                Viti2
              </Link>
              <Link
                to="/viti3"
                className={`${
                  isActive === "/viti3" ? "bg-muted" : "text-muted-foreground"
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
                onClick={closeSidebar}
              >
                <SquareX className="h-5 w-5" />
                Viti 3
              </Link>
              <Link
                to="/viti4"
                className={`${
                  isActive === "/viti4" ? "bg-muted" : "text-muted-foreground"
                } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground`}
                onClick={closeSidebar}
              >
                <CircleEqual className="h-5 w-5" />
                Viti 4
              </Link>
            </nav>
            <div className="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-zinc">
                    You are currently Guest mode
                  </CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access by Log in or
                    Sign up.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" className="w-full">
                    Log in or Sign up
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>

        <div className="w-full flex-1">
          <form>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
    </>
  );
};

export default Navbar;
