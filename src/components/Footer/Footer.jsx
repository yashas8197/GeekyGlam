import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="m-0">
      <div className="bg-gray-600">
        <div className="container py-7 flex justify-between">
          <p className="text-gray-300">
            &copy; 2020 Your company. Feel Free To Replicate.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/yashas8197" target="_blank">
              <GithubIcon className="text-gray-400 hover:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/yashas-v-b5b41a26a/"
              target="_blank"
            >
              <LinkedinIcon className="text-gray-400 hover:text-gray-300" />
            </a>
            <a href="https://x.com/Yashas8197" target="_blank">
              <TwitterIcon className="text-gray-400 hover:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
