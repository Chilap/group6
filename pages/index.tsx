import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import LoginBlock from "./login";
import Exercise from "./test";
import COM from "./COM";
import Demo from "./test2";

const Home: React.FC = function () {
  return (
    <div className="grid grid-cols-6 p-4">
      <div className="col-span-1">
        <img
          className={styles.img}
          src="https://www.hsu.edu.hk/wp-content/uploads/2018/11/20181031_Logo_HSU_262x90px.png"
        ></img>
        <LoginBlock />
        <a
          href="#Share"
          className="block text-center bg-white p-2 my-2 border rounded-md hover:shadow-xl transistion duration-150"
        >
          Share Your Score
        </a>

        <a
          href="#AMS"
          className="block text-center bg-white p-2 my-2 border rounded-md hover:shadow-xl transistion duration-150"
        >
          AMS
        </a>

        <a
          href="#COM"
          className="block text-center bg-white p-2 my-2 border rounded-md hover:shadow-xl transistion duration-150"
        >
          COM
        </a>

        <a
          href="#FLA"
          className="block text-center bg-white p-2 my-2 border rounded-md hover:shadow-xl transistion duration-150"
        >
          FLA
        </a>
      </div>
      {/* <div className='col-span-1'></div> */}
      <div className="col-span-5 p-4">
        <h2 id="Share">Share Your Score</h2>
        <h2 id="AMS">AMS</h2>
        <Demo />

        <h2>COM</h2>
        <COM />
        <h2>FLA</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          luctus massa a felis dapibus semper. Vivamus justo nisl, viverra
          eleifend justo ac, porttitor bibendum dolor. Nullam semper arcu id
          diam placerat tincidunt. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Suspendisse potenti.
        </p>
      </div>
    </div>
  );
};

export default Home;
