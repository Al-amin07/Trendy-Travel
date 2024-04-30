import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" mt-16 px-12 md:px-16  lg:px-32 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-20 gap-5 bg-neutral text-neutral-content">
      <nav className="">
        <h6 className="footer-title text-xl">Trendy Travel</h6>
        <h2 className="text-bg footer-title">Find Us On</h2>
        <ul className="flex gap-4">
          <li>
            <a className="link link-hover">
              <FaFacebook className="text-3xl" />
            </a>
          </li>
          <li>
            <a className="link link-hover">
              <FaSquareInstagram className="text-3xl" />
            </a>
          </li>
          <li>
            <a className="link link-hover">
              <FaWhatsapp className="text-3xl" />
            </a>
          </li>
         
        </ul>
      </nav>
      <nav className="">
        <h6 className="footer-title text-xl">Services</h6>

        <ul>
          <li>
            <a className="link link-hover">Branding</a>
          </li>
          <li>
            <a className="link link-hover">Design</a>
          </li>
          <li>
            <a className="link link-hover">Marketing</a>
          </li>
          <li>
            <a className="link link-hover">Advertisement</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Company</h6>
        <ul>
          <li>
            <a className="link link-hover">About Us</a>
          </li>
          <li>
            <a className="link link-hover">Contact</a>
          </li>
          <li>
            <a className="link link-hover">Jobs</a>
          </li>
          <li>
            <a className="link link-hover">Press kit</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title text-xl">Legal</h6>

        <ul>
          <li>
            <a className="link link-hover">Terms of use</a>
          </li>
          <li>
            <a className="link link-hover">Privacy policy</a>
          </li>
          <li>
            <a className="link link-hover">Cookie policy</a>
          </li>
        </ul>
      </nav>
      <div className="footer footer-center p-4 w-full  col-span-2 md:col-span-3 lg:col-span-4  text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by Trendy Travel</p>
  </aside>
</div>
    </footer>
  );
};

export default Footer;
