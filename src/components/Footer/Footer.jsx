import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="m-0">
      <div className="bg-gray-600">
        <div className="container py-7 flex justify-between">
          <p className="text-gray-300">
            &copy; 2020 Your company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <GithubIcon className="text-gray-400 hover:text-gray-300" />
            <LinkedinIcon className="text-gray-400 hover:text-gray-300" />
            <TwitterIcon className="text-gray-400 hover:text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
