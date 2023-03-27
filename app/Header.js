"use client"
import { Fragment, useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Modal from "../components/Modal";
import RegisterModal from "../components/RegisterModal";
import LogonModal from "../components/LogonModal";


//import { currencyFormatter } from "@/lib/utils";

import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useSession, signOut } from "next-auth/react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Entertainment",
    color: "#000",
    total: 500,
  },
  {
    id: 2,
    title: "Gass",
    color: "#009",
    total: 200,
  },
  {
    id: 3,
    title: "Fuel",
    color: "#000",
    total: 1200,
  },
  {
    id: 4,
    title: "Movies",
    color: "#000",
    total: 800,
  },
  {
    id: 5,
    title: "Holiday",
    color: "#000",
    total: 2000,
  },
];

export default function Header() {
  const { data } = useSession();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLogonModal, setShowLogonModal] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  // HANDLER FUNCTIONS
  const logonHandler = async (e) => {
    e.preventDefault();

    const logonUser = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      createdAt: new Date(),
    };
    console.log(logonUser);
  };
  //   const collectionRef = collection(db, "user");

  return (
    <>
      <header className="sticky top-0">
        <div className="flex flex-grow items-center bg-amazon_blue p-1 py-2">
          <div className="mt-2 flex flex-grow items-center px-2 sm:flex-grow-0">
            {/* <div className="link">
          <p className="font-extrabold md:text-sm text-white">Panama City</p>
          <p className="font-extrabold md:text-sm text-white">Beach </p>
          </div> */}
            {/* <img src="pcb.png" width={50} height={50} alt="PCB" /> */}

            <Image
              onClick={() => router.push("/")}
              src="/images/logo.png"
              width={130}
              height={25}
              objectFit="contain"
              className="cursor-pointer"
            />
            {/* <Image
          onClick={() => router.push("/")}
          src="https://links.papareact.com/f90"
          width={130}
          height={25}
          objectFit="contain"
          className="cursor-pointer"
        /> */}
            {/* <div className="flex space-x-4">
                    <a href="#" className=" text-white px-3 py-2  text-lg font-medium">
                      YO Rooms!
                    </a>
          </div> */}
          </div>

          {/* SEARCH */}
          <div className="hidden h-10 flex-grow cursor-pointer items-center rounded-md bg-yellow-400 hover:bg-yellow-500 sm:flex">
            <input
              className="h-full w-6 flex-shrink flex-grow rounded-l-md p-2 px-4 focus:outline-none"
              type="text"
            />
            <SearchIcon className="h-12 p-4" />
          </div>

          {/* RIGHT */}
          <div className="mx-6 flex items-center space-x-6 whitespace-nowrap text-xs text-white">
            <div className="link">
              <button
                className="font-extrabold md:text-sm"
                onClick={() => {
                  //setModalIsOpen(true);
                  setShowLogonModal(true)
                }}
              >
                Logon &<p className="font-extrabold md:text-sm">Register</p>
              </button>
            </div>
            <div className="link">
              <p className="font-extrabold md:text-sm">Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            <div className="link relative flex items-center">
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-yellow-400 text-center font-bold text-black md:right-10">
                {/* {items.length}  */}
                10
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="mt-2 hidden font-extrabold md:inline md:text-sm">
                Basket
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV */}
        <div className="flex items-center space-x-3 bg-amazon_blue p-2 pl-6 text-sm text-white">
          <p className="link flex items-center">
            <MenuIcon className="mr-1 h-6" /> All
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        </div>

  {/* Add Logon Modal */}
  <Modal show={showLogonModal} onClose={setShowLogonModal}>
        <form onSubmit={logonHandler} className="flex flex-col gap-4">
        <div className="text-white-600 mb-3 flex w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
              <h3>Logon</h3>
              </div>
          <div className="input-group">
            {/* <label htmlFor="logon">Logon</label> */}
            <input
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Enter email address"
                required
              />
          </div>

          <div className="input-group">
            {/* <label htmlFor="password">Password</label> */}
            <input
                name="password"
                ref={passwordRef}
                type="text"
                placeholder="Enter password"
                required
              />
          </div>
          <div className="flex w-full items-center justify-start">
              <button
                type="submit"
                className="rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
              >
                Logon
              </button>
    
              <section 
              className="m-4 rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2">
                <button
                  onClick={() => {
                    setShowRegisterModal(true);
                  }}
                >
                  Register
                </button>
              </section>
            </div>
        </form>
      </Modal>

      
      </header>
    </>
  );
}

// export default Header;
