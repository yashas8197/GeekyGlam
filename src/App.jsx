import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet className="flex-grow" />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
