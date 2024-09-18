import { Link, useNavigate } from "react-router-dom";
import ServiceHighlights from "../ServiceHighlights/ServiceHighlights";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/profile?tab=history");
  };
  return (
    <div className="mt-5">
      <div className="text-center pt-20 pb-10">
        <small>
          <Link to="/" className="mx-2">
            Home
          </Link>
          /<span className="text-gray-400 mx-2">Order confirmed</span>
        </small>
        <h1 className="text-7xl font-bold my-4 uppercase tracking-widest">
          Order confirmed
        </h1>
      </div>
      <div className="text-center mb-20">
        <p className="mb-4">
          <i
            style={{ backgroundColor: "#D5E9FA" }}
            className="bi bi-check-lg text-blue-500 rounded-full px-3  text-6xl"
          ></i>
        </p>
        <p className="font-semibold text-xl mb-4 font-sans">
          Thank you, Your order is confirmed.
        </p>
        <p className="text-gray-500 text-sm mb-12">
          Your order hasn't shipped yet but we will send you a email when it
          does.
        </p>
        <button
          onClick={clickHandler}
          className="border border-black text-xs leading-6 tracking-widest uppercase p-2 hover:bg-slate-800 hover:text-white"
        >
          view your order
        </button>
      </div>
      <ServiceHighlights />
    </div>
  );
};

export default ConfirmationPage;
