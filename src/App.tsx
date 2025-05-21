import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Galleries from "./pages/Galleries";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ImageViewer from "./components/ImageViewer";
import AlbumList from "./components/lists/AlbumList";
import MobileSidebar from "./components/MobileSidebar";

const App = () => {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <>
      <MobileSidebar />
      <div className="hidden md:flex pl-5 pt-10 h-full bg-gray-100">
        <div className="w-1/6 min-w-[200px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <main className="flex-1 h-full overflow-y-auto p-6">
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" element={<Home />} />
            <Route path="/galleries" element={<Galleries />} />
            <Route path="/galleries/:categoryName" element={<AlbumList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>

          {/* Modal route renders on top */}
          {state?.backgroundLocation && (
            <Routes>
              <Route path="/image/:albumName" element={<ImageViewer />} />
            </Routes>
          )}
        </main>
      </div>
      <div className="md:hidden pt-16 px-4 overflow-y-auto">
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/galleries" element={<Galleries />} />
          <Route path="/galleries/:categoryName" element={<AlbumList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>

        {/* Modal route renders on top */}
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/image/:albumName" element={<ImageViewer />} />
          </Routes>
        )}
      </div>
    </>
  );
};

export default App;
