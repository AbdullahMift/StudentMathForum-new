import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Ballina from "./pages/Ballina";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
