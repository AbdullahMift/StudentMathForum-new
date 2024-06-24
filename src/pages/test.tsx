import { Link } from "react-router-dom";
import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  FolderClosed,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SMFLogo from "../../public/StudentMathForumLogo.png";
import Viti1 from "../../public/Images/Viti1.png";
import Viti2 from "../../public/Images/Viti2.png";
import Viti3 from "../../public/Images/Viti3.png";
import Viti4 from "../../public/Images/Viti4.png";

// import folderIcon from "../../public/Images/folderIcon.svg";

export default function Dashboard() {
  const vitet: { id: number; name: string; imgUrl: string }[] = [
    { id: 1, name: "Viti 1", imgUrl: Viti1 },
    { id: 2, name: "Viti 2", imgUrl: Viti2 },
    { id: 3, name: "Viti 3", imgUrl: Viti3 },
    { id: 4, name: "Viti 4", imgUrl: Viti4 },
  ];
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <img src={SMFLogo} className="h-6" alt="" />
              {/* <span className="">Acme Inc</span> */}
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Ballina
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <ShoppingCart className="h-4 w-4" />
                Orders
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Products{" "}
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
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

      {/* End of the Sidebar || */}

      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
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
                  to="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <img src={SMFLogo} className="h-[22px]" alt="" />
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  to="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Ballina</h1>
          </div>
          {/* <div
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 h-full items-start  pt-8 pl-8  rounded-lg border border-dashed shadow-sm gap-0"
            x-chunk="dashboard-02-chunk-1"
          >
            {vitet.map((item) => (
              <Card className="w-[200px] ">
                <CardHeader className="h-[120px] flex justify-center p-0 relative">
                  <img
                    src={item.imgUrl}
                    className="absolute w-full h-full top-0 z-10"
                    alt=""
                  />
                  <CardTitle className="z-20 p-5 text-slate-8   00 text-3xl font-bold first:mt-0">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex py-0 flex-col px-0">
                  <div className="py-2 px-5 border-b-2 border-slate-200">
                    <CardDescription className="font-medium ">
                      123 detyra të zgjidhura
                    </CardDescription>
                  </div>
                  <div className="py-1 flex justify-end px-3 ">
                    <FolderClosed className="text-slate-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div
            className="h-full border border-dashed shadow-sm rounded"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-wrap items-start justify-center sm:justify-start py-8 px-8 rounded-lg gap-8 ">
              {vitet.map((item) => (
                <Card className="w-full sm:w-[200px] ">
                  <CardHeader className="h-[120px] flex justify-center p-0 relative">
                    <img
                      src={item.imgUrl}
                      className="absolute w-full h-full top-0 z-10"
                      alt={item.name}
                    />
                    <CardTitle className="z-20 p-5 text-slate-800 text-3xl font-bold first:mt-0">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex py-0 flex-col px-0">
                    <div className="py-2 px-5 border-b-2 border-slate-200">
                      <CardDescription className="font-medium font-['Inter']">
                        123 detyra të zgjidhura
                      </CardDescription>
                    </div>
                    <div className="py-1 flex justify-end px-3">
                      <FolderClosed className="text-slate-500" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
