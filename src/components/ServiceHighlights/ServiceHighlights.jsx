import { Bitcoin } from "lucide-react";

const ServiceHighlights = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FA" }} className="m-0">
      <div className="mx-auto py-10">
        <div className="container">
          <div className="grid grid-cols-3 divide-x-2">
            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/d9/15/f4/d915f415772c58c453e680b31355b2a1.jpg"
                className="w-1/4 object-contain"
                alt="Shipping"
                loading="lazy"
              />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">Free shipping & return</div>
                <div className="font-mono text-gray-600">
                  <small>Free Shipping over ₹300</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <Bitcoin className="w-1/4 h-24 text-gray-800" />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">Money back guarantee</div>
                <div className="font-mono text-gray-600">
                  <small>30 Days Money Back Guarantee</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/ee/10/15/ee10150445cdadf2871e87cf362bff07.jpg"
                className="w-1/4 object-contain"
                alt="Support"
                loading="lazy"
              />
              <div className="w-3/4 pl-3">
                <div className="font-bold text-xl">020-800-456-747</div>
                <div className="font-mono text-gray-600">
                  <small>24/7 Available Support</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights;
