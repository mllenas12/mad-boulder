"use client";
import React from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useUser, logOut } from "../lib/firebase/firebase-utils";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      console.log(user);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);
  const activeSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="navbar bg-neutral-800 text-white lg:flex lg:justify-between">
      <div className=" px-2 lg:w-[140px]">
        <Link href="/">
          <img
            src="/logo/logo-menu.webp"
            alt="madboulder logo"
            className="w-10 "
          />
        </Link>
      </div>
      {/* Desktop: */}
      <div className="navbar-center hidden pr-4 lg:flex lg:w-6/8">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-yellow-400">
            <a href="/areas">AREAS</a>
          </li>
          <li className="hover:text-yellow-400">
            <Link href={user ? "/profile" : "/contributors"}>CONTRIBUTORS</Link>
          </li>
          <li className="hover:text-yellow-400">
            <a href="https://www.blog.madboulder.org/" target="_blank">
              BLOG
            </a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="https://shop.madboulder.org/" target="_blank">
              SHOP
            </a>
          </li>
          <li className="hover:text-yellow-400">
            <a href="/about-us">ABOUT US</a>
          </li>
        </ul>
      </div>
      {isLogged ? (
        <div className="dropdown dropdown-end hidden lg:block lg:w-1/8">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost flex lg:w-[140px]"
          >
            <p>Welcome {user?.displayName}!</p>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content text-black  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/profile">PROFILE</Link>
            </li>
            <li>
              <button onClick={() => logOut(router)}>LOG OUT</button>
            </li>
          </ul>
        </div>
      ) : (
        <div className="lg:w-[140px]"></div>
      )}
      {/* Mobile */}
      <div className="flex justify-end flex-1 px-2 lg:hidden">
        <div className="flex items-stretch relative">
          {isSearchActive ? (
            <div className="my-auto">
              <label className="relative block">
                <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <img src="/lupa.svg" alt="" className="w-4" />
                </span>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border text-black border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none  sm:text-sm"
                  placeholder="Search"
                  type="text"
                  name="search"
                  //onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>
          ) : (
            <button onClick={activeSearch}>
              <IoIosSearch className="my-auto" size="24px" />
            </button>
          )}

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content text-black  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/areas">AREAS</a>
              </li>
              <li>
                <a href={user ? "/video-uploader" : "/sign-in"}>CONTRIBUTORS</a>
              </li>
              <li>
                <a href="https://www.blog.madboulder.org/" target="_blank">
                  BLOG
                </a>
              </li>
              <li>
                <a href="https://shop.madboulder.org/" target="_blank">
                  SHOP
                </a>
              </li>
              <li>
                <a href="/about-us">ABOUT US</a>
              </li>
              {isLogged ? (
                <>
                  <div className="divider my-0"></div>
                  <li className="rounded">
                    <Link href="/profile">PROFILE</Link>
                    {/* <a href="/sign-in" className="flex justify-between">
                      <p>PROFILE</p>

                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        className="rounded-full w-10"
                      />
                    </a> */}
                  </li>
                  <li className=" rounded">
                    <button onClick={() => logOut(router)}>LOG OUT</button>
                  </li>
                </>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
