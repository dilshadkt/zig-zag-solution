import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layouts/HomeLayout";
import About from "./pages/About/About";
import Contact from "./components/Contact";
import Serivce from "./pages/Service/Service";
import SocialMedia from "./pages/Service/SocialMedia";
import Seo from "./pages/Service/Seo";
import Webdev from "./pages/Service/Webdev";
import Perform from "./pages/Service/Performence";
import Media from "./pages/Service/Media";
import PortfolioLayout from "./pages/layouts/PortfolioLayout";
import PortContent from "./components/portfolio-content/PortContent";

import Blog from "./components/blog/TenDigitalMarket";
import Training from "./components/blog/Training";
import Hunting from "./components/blog/Hunting";
import Blogs from "./pages/Blogs/Blogs";
import Unlocking from "./components/blog/Unlocking";
import BestDigital from "./components/blog/BestDigital";
import PowerOfPartners from "./components/blog/PowerOfPartners";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/about/:status" element={<About />} />
          <Route path="/portfolio" element={<PortfolioLayout />}>
            <Route index element={<PortContent />} />
            <Route path="/portfolio/:status" element={<PortContent />} />
          </Route>
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/best-digital" element={<Blog />} />
          <Route path="/blogs/training" element={<Training />} />
          <Route path="/blogs/hunting" element={<Hunting />} />
          <Route path="/blogs/Unlocking" element={<Unlocking />} />
          <Route path="/blogs/introduction" element={<BestDigital />} />
          <Route path="/blogs/partnering" element={<PowerOfPartners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/media" element={<Media />} />
          <Route path="/service/seo" element={<Seo />} />
          <Route path="/service/performence" element={<Perform />} />
          <Route path="/service/corperate" element={<Serivce />} />
          <Route path="/service/webdev" element={<Webdev />} />
          <Route path="/service/social" element={<SocialMedia />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
