import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import About from "./pages/about/about";
import Home from "./pages/home/home";
import Login from "./pages/login";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
