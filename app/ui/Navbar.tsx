"use client";
import React from "react";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/context/AuthProvider";
import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const { logOut, getUser } = useAuth();
  const router = useRouter();
  const user = getUser();
  useEffect(() => {
    if (user) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [user]);
  const activeSearch = () => {
    setIsSearchActive((prev) => !prev);
  };

  return (
    <div className="navbar bg-neutral-800 text-white lg:flex lg:justify-between px-0">
      <div className="lg:w-[160px]">
        <Link href="/">
          <img
            src="/logo/logo-menu.webp"
            alt="madboulder logo"
            className="w-10 ms-4"
          />
        </Link>
      </div>
      {/* Desktop: */}
      <div className="navbar-center hidden pr-4 lg:flex lg:w-6/8">
        <ul className="flex gap-8 px-1 ">
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
            className="btn btn-ghost flex lg:w-[160px]"
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
      <div className="flex justify-end flex-1 lg:hidden">
        <div className="flex  relative">
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
              <IoIosSearch className="my-auto" size="30px" />
            </button>
          )}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <FiMenu size={"30px"} />
            </div>

            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content rounded-b z-[2] shadow bg-neutral-800  w-screen"
            >
              <li>
                <a href="/areas">AREAS</a>
              </li>
              <li>
                <a href={user ? "/video-uploader" : "/contributors"}>
                  CONTRIBUTORS
                </a>
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
                  <div className="divider divider-warning my-0 "></div>
                  <li className="rounded">
                    <Link href="/profile">PROFILE</Link>
                  </li>
                  <li className="rounded">
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

// "use client";
// import React from "react";
// import Link from "next/link";
// import { IoIosSearch } from "react-icons/io";
// import { useEffect, useState } from "react";
// import { useAuth } from "../lib/context/AuthProvider";
// import { useRouter } from "next/navigation";
// import { FiMenu } from "react-icons/fi";

// export default function Navbar() {
//   const [isSearchActive, setIsSearchActive] = useState(false);
//   const [isLogged, setIsLogged] = useState(false);
//   const { logOut, getUser } = useAuth();
//   const router = useRouter();
//   const user = getUser();
//   useEffect(() => {
//     if (user) {
//       setIsLogged(true);
//     } else {
//       setIsLogged(false);
//     }
//   }, [user]);
//   const activeSearch = () => {
//     setIsSearchActive((prev) => !prev);
//   };

//   return (
//     <div className="navbar bg-neutral-800 text-white lg:flex lg:justify-between px-0">
//       <div className="lg:w-[160px]">
//         <Link href="/">
//           <img
//             src="/logo/logo-menu.webp"
//             alt="madboulder logo"
//             className="w-10 ms-4"
//           />
//         </Link>
//       </div>
//       {/* Desktop: */}
//       <div className="navbar-center hidden pr-4 lg:flex lg:w-6/8">
//         <ul className="menu menu-horizontal px-1">
//           <li className="hover:text-yellow-400">
//             <a href="/areas">AREAS</a>
//           </li>
//           <li className="hover:text-yellow-400">
//             <Link href={user ? "/profile" : "/contributors"}>CONTRIBUTORS</Link>
//           </li>
//           <li className="hover:text-yellow-400">
//             <a href="https://www.blog.madboulder.org/" target="_blank">
//               BLOG
//             </a>
//           </li>
//           <li className="hover:text-yellow-400">
//             <a href="https://shop.madboulder.org/" target="_blank">
//               SHOP
//             </a>
//           </li>
//           <li className="hover:text-yellow-400">
//             <a href="/about-us">ABOUT US</a>
//           </li>
//         </ul>
//       </div>
//       {isLogged ? (
//         <div className="dropdown dropdown-end hidden lg:block lg:w-1/8">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost flex lg:w-[160px]"
//           >
//             <p>Welcome {user?.displayName}!</p>
//           </div>

//           <ul
//             tabIndex={0}
//             className="menu menu-md dropdown-content text-black  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link href="/profile">PROFILE</Link>
//             </li>
//             <li>
//               <button onClick={() => logOut(router)}>LOG OUT</button>
//             </li>
//           </ul>
//         </div>
//       ) : (
//         <div className="lg:w-[140px]"></div>
//       )}
//       {/* Mobile */}
//       <div className="flex justify-end flex-1 lg:hidden">
//         <div className="flex  relative">
//           {isSearchActive ? (
//             <div className="my-auto">
//               <label className="relative block">
//                 <span className="absolute inset-y-0 right-0 flex items-center pr-2">
//                   <img src="/lupa.svg" alt="" className="w-4" />
//                 </span>
//                 <input
//                   className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border text-black border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none  sm:text-sm"
//                   placeholder="Search"
//                   type="text"
//                   name="search"
//                   //onChange={(event) => setQuery(event.target.value)}
//                 />
//               </label>
//             </div>
//           ) : (
//             <button onClick={activeSearch}>
//               <IoIosSearch className="my-auto" size="30px" />
//             </button>
//           )}
//           <div className="dropdown dropdown-end">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost rounded-btn"
//             >
//               <FiMenu size={"30px"} />
//             </div>

//             <ul
//               tabIndex={0}
//               className="menu menu-md dropdown-content rounded-b z-[1] shadow bg-neutral-800  w-screen"
//             >
//               <li>
//                 <a href="/areas">AREAS</a>
//               </li>
//               <li>
//                 <a href={user ? "/video-uploader" : "/contributors"}>
//                   CONTRIBUTORS
//                 </a>
//               </li>
//               <li>
//                 <a href="https://www.blog.madboulder.org/" target="_blank">
//                   BLOG
//                 </a>
//               </li>
//               <li>
//                 <a href="https://shop.madboulder.org/" target="_blank">
//                   SHOP
//                 </a>
//               </li>
//               <li>
//                 <a href="/about-us">ABOUT US</a>
//               </li>
//               {isLogged ? (
//                 <>
//                   <div className="divider divider-warning my-0 "></div>
//                   <li className="rounded">
//                     <Link href="/profile">PROFILE</Link>
//                   </li>
//                   <li className="rounded">
//                     <button onClick={() => logOut(router)}>LOG OUT</button>
//                   </li>
//                 </>
//               ) : (
//                 <></>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
