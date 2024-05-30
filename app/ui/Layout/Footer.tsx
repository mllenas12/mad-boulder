import { FaInstagram, FaYoutube, FaShopify } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral-300 text-base-content flex flex-col mt-auto">
      <div className="footer py-4  bg-neutral-300 border-base-300 flex flex-col">
        <nav className="mx-auto flex gap-4 py-2">
          <a href="https://www.instagram.com/madboulder/" target="_blank">
            <FaInstagram size="24px" />
          </a>
          <a href="https://www.youtube.com/c/MadBoulder" target="_blank">
            <FaYoutube size="24px" />
          </a>
          <a href="https://shop.madboulder.org/" target="_blank">
            <FaShopify size="24px" />
          </a>
        </nav>
        <aside className=" flex flex-col mx-auto text-xs py-2">
          <p>
            All Rights Reserved. 2023. <br />
          </p>
          <div className="mx-auto">
            <Link href="/privacy-policy">
              <span className="underline">Privacy Policy</span> |{" "}
            </Link>
            <Link href="cookies-policy" className="underline">
              Cookies
            </Link>
          </div>
        </aside>
      </div>
    </footer>
  );
};
