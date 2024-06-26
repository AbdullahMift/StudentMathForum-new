import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Ballina from "./pages/Ballina";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Viti1 from "./pages/Viti1";
import Viti2 from "./pages/Viti2";
import Viti3 from "./pages/Viti3";
import Viti4 from "./pages/Viti4";

function App() {
  return (
    <>
      {/* <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
        <Sidebar />

        <div className="flex flex-col">
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Ballina />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div> */}

      <BrowserRouter>
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
          <Sidebar />
          {/* End of the Sidebar */}

          <div className="flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Ballina />} />
              <Route path="/viti1" element={<Viti1 />} />
              <Route path="/viti2" element={<Viti2 />} />
              <Route path="/viti3" element={<Viti3 />} />
              <Route path="/viti4" element={<Viti4 />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
