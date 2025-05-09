import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Galleries from "./pages/Galleries";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div className="flex pl-5 pt-10 h-full bg-gray-100">
      <div className="w-1/6 min-w-[200px] h-full overflow-y-auto">
        <Sidebar />
      </div>
      <main className="flex-1 h-full overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
