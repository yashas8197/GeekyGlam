import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
