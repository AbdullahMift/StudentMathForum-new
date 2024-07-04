import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import React, { useEffect, useState, useCallback } from "react";

import Ballina from "./pages/Ballina";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Viti1 from "./pages/Viti1";
import Viti2 from "./pages/Viti2";
import Viti3 from "./pages/Viti3";
import Viti4 from "./pages/Viti4";
import ShtoDetyre from "./pages/ShtoDetyre";
import BreadcrumbComp from "./components/Breadcrumb";

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

function App() {

  const [detyrat, setDetyrat] = useState<MathTask[]>([]);

  const fetchAllMathTasks = useCallback(async () => {
    try {
      const response = await fetch(
        "https://mathstudentforum-default-rtdb.firebaseio.com/detyrat.json"
      );
      const data = await response.json();
      console.log("data:", data);

      let newMathTasks: MathTask[] = [];

      for (let key in data) {
        newMathTasks.push({ ...data[key], id: key });
      }
      setDetyrat(newMathTasks);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAllMathTasks();
  }, [fetchAllMathTasks]);

  console.log('detyrat', detyrat);
  

  return (
    <>
      <BrowserRouter>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Navbar />
            <BreadcrumbComp />
            <Routes>
              <Route path="/" element={<Ballina />} />
              <Route path="/viti1" element={<Viti1 detyrat={detyrat} />} />
              <Route path="/viti2" element={<Viti2 detyrat={detyrat}/>} />
              <Route path="/viti3" element={<Viti3 detyrat={detyrat}/>} />
              <Route path="/viti4" element={<Viti4 detyrat={detyrat}/>} />
              <Route path="/shtodetyre" element={<ShtoDetyre />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
