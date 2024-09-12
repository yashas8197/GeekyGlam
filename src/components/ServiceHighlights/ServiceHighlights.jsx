const ServiceHighlights = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FB" }} className="m-0">
      <div className="mx-auto py-20">
        <div className="mx-28">
          <div className="grid grid-cols-3 divide-x-2">
            <div className="flex items-center mx-10">
              <i class="bi bi-truck text-6xl"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold uppercase">
                  Free shipping & return
                </div>
                <div className="font-mono text-gray-600">
                  <small>Free Shipping over ₹300</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <i class="bi bi-currency-bitcoin text-6xl"></i>
              <div className="w-3/4 pl-3">
                <div className="font-bold uppercase">Money back guarantee</div>
                <div className="font-mono text-gray-600">
                  <small>30 Days Money Back Guarantee</small>
                </div>
              </div>
            </div>

            <div className="flex items-center mx-10">
              <img
                src="https://i.pinimg.com/564x/ee/10/15/ee10150445cdadf2871e87cf362bff07.jpg"
                className="w-1/6 object-contain"
                alt="Support"
                loading="lazy"
              />
              <div className="w-3/4 pl-3">
                <div className="font-bold">020-800-456-747</div>
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
