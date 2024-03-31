"use client";
import React from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
//import { useUser } from "../lib/context/AuthProvider";
import { useUser } from "../lib/firebase/firebase-utils";

export default function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const user = useUser();
  console.log(user);

  const activeSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  const changeLogState = () => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };
  useEffect(() => {
    changeLogState();
  }, [user]);

  return (
    <div className="navbar bg-neutral-800 text-white lg:flex lg:justify-between">
      <div className=" px-2 lg:flex-none">
        <a href="/">
          <img
            src="/logo/logo-menu.webp"
            alt="madboulder logo"
            className="w-10 p-1"
          />
        </a>
      </div>
      {/* Desktop: */}
      <div className="navbar-center hidden pr-4 lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:text-yellow-400">
            <a href="/areas">AREAS</a>
          </li>
          <li className="hover:text-yellow-400">
            <Link href={user ? "/video-uploader" : "/sign-in"}>UPLOAD</Link>
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
        <div className="dropdown dropdown-end h idden lg:block">
          <div tabIndex={0} role="button" className="btn btn-ghost w-20 flex">
            <img
              alt="Tailwind CSS Navbar component"
              src={
                user
                  ? user.photoURL
                  : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              }
              className="rounded-full"
            />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content text-black  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button>PROFILE</button>
            </li>
            <li>
              <button>LOG OUT</button>
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
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
                <a href={user ? "/video-uploader" : "/sign-in"}>UPLOAD</a>
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
              {isLogged && (
                <>
                  <div className="divider my-0"></div>
                  <li className="rounded">
                    <a href="/sign-in">PROFILE</a>
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
                    <a href="/sign-in">LOG OUT</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
