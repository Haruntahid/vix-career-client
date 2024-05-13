import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-[#202430] px-5 lg:px-10 py-10 lg:py-20 mt-12 lg:mt-24">
        <footer className="flex flex-col lg:flex-row lg:items-start  text-center lg:text-left container mx-auto text-gray-300 gap-4">
          <aside className="w-full lg:w-2/5">
            <p>
              <span className="text-3xl lg:text-4xl font-bold">Vix-Career</span>
              <br />
              <span className="mt-5 inline-block">
                Joobs is the largest talent platform in Southeast <br /> Asia
                and Taiwan for career development and recruitment.
              </span>
            </p>
          </aside>
          <div className="w-full lg:w-[20%]">
            <p className="text-2xl font-semibold mb-3">Resources</p>
            <div className="space-y-2">
              <Link
                className="hover:underline text-white block"
                to={"/all-jobs"}
              >
                Explore Jobs
              </Link>
              <Link className="hover:underline text-white block" to={"/blog"}>
                Blog
              </Link>
              <Link className="hover:underline text-white block">
                Companies
              </Link>
              <Link className="hover:underline text-white block">Pricing</Link>
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <p className="text-2xl font-semibold mb-3">About</p>
            <div className="space-y-2">
              <Link className="hover:underline text-white block">
                Help Docs
              </Link>
              <Link className="hover:underline text-white block">Guide</Link>
              <Link className="hover:underline text-white block">Updates</Link>
              <Link className="hover:underline text-white block">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <p className="text-2xl font-semibold mb-3 text-center">Social</p>
            <div className="flex gap-4 lg:gap-8 items-center justify-center ">
              <Link>
                <FaFacebook size={30} />
              </Link>
              <Link>
                <FaSquareInstagram size={30} />
              </Link>
              <Link>
                <FaTwitter size={30} />
              </Link>
              <Link>
                <FaLinkedin size={30} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <footer className="footer footer-center p-4 bg-bg-color text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by Vix-Career</p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
