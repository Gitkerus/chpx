import "../Styles/App.scss";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddsCard from "./AddsCard";
import CompanyCard from "./CompanyCard";
import SaleCard from "./SaleCard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/addscard" element={<AddsCard />} />
        <Route path="/company" element={<CompanyCard />} />
        <Route path="/salecard" element={<SaleCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
