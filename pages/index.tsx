import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import LoginBlock from "./login";
import SubmitScore2 from "./test2";
import SubmitScore from "./submitScore";
import GradeTable from "./Archive/gradeTable";
<script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>;




const Home: React.FC = function () {
  return (
    <div className="grid grid-cols-6 p-4">
      <div className="col-span-1">
        <img
          className={styles.img}
          src="https://www.hsu.edu.hk/wp-content/uploads/2018/11/20181031_Logo_HSU_262x90px.png"
        ></img>
        <LoginBlock />
        <p></p>
        <a
          href="#Share"
          className="block text-center bg-white p-2 my-2 border rounded-md hover:shadow-xl transistion duration-150"
        >
          Input Your Score
        </a>
      </div>
      {/* <div className='col-span-1'></div> */}
      <div className="col-span-5 p-4">
        <h2 className="text-xl my-2 font-medium">Input Your Score</h2>

        <SubmitScore />
        {/* <SubmitScore2 /> */}
        {/* <GradeTable /> */}
      </div>
    </div>
  );
};

export default Home;
