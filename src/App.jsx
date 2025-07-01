import { Header } from "./components/Header";
import Body from "./components/Body";
import {Contact} from "./components/Contact";
import {About} from "./components/About";
import {Error} from "./components/Error";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}
export default App;
