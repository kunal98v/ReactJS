import { Header } from "./components/Header";
import Body from "./components/Body";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Error } from "./components/Error";
import { Menu } from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value="Kunal">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/restaurant/:id" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </>
  );
}
export default App;
