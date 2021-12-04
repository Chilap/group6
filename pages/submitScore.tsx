import React, { useState, useEffect } from "react";
import gradesjson from "./grades.json";
import styles from "../styles/Home.module.css";

type Item = {
  Programme_code: string;
  gpa: string;
};

interface Grade {
  Programme_code: string;
  // Grade: GradeType;
  avgGPAandVoted: [averageGPA: number, voted: number];
}

const COMdetail: Grade[] = require("./grades.json");

var data

const initiate = () => {
  if (localStorage.getItem("grades") == null || true) {
    localStorage.setItem("grades", JSON.stringify(gradesjson));
  }
  JSON.parse(localStorage.getItem("grades")).forEach((element) => {
    localStorage.setItem(
      element.Programme_code,
      [element.avgGPAandVoted[0], element.avgGPAandVoted[1]].toString()
    );
  });
  data = localStorage.getItem("grades") 
  
  // return localStorage.getItem("grades");
};

const save = (course: string, gpa) => {
  // New GPA
  const oldGPA = Number(localStorage.getItem(course).split(",")[0]);
  const inputGPA = Number(gpa);
  const votedCount = Number(localStorage.getItem(course).split(",")[1]);
  const newGPA = (
    (oldGPA * votedCount + inputGPA) /
    (votedCount + 1)
  ).toString();
  if (localStorage.getItem(course) || true) {
    // localStorage.setItem(course, localStorage.getItem(course) + grade)
    localStorage.setItem(course, [newGPA, votedCount + 1].toString());
  }
  // New List
  const grades = JSON.parse(localStorage.getItem("grades"));
  grades.forEach((element) => {
    if (element.Programme_code === course) {
      element.avgGPAandVoted[0] = Number(newGPA);
      element.avgGPAandVoted[1] = votedCount + 1;
    }
  });
  console.log(JSON.stringify(grades));
  localStorage.setItem("grades", JSON.stringify(grades));
};

// -------------------------------------------------
// --------------------- Table ---------------------
// -------------------------------------------------
const Item: React.FC<{ item: Grade }> = ({ item }) => {
  const { Programme_code, avgGPAandVoted } = item;
  // const [data, setData] = useState(localStorage.getItem("grades"));
  // console.log('pp', JSON.parse(data))
  // setData(data = localStorage.getItem(grades))
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{Programme_code}</td>
      <td className={styles.td}> {avgGPAandVoted[0]}</td>
      <td className={styles.td}> {avgGPAandVoted[1]}</td>
      {/* <td className={styles.td}> {data}</td> */}
      {/* <td className={styles.td}> {Programme_code} </td>
        <td className={styles.td}> {localStorage.getItem("COM3103")}</td>
        <td className={styles.td}> {avgGPAandVoted[1]}</td> */}
    </tr>
  );
};
// -------------------------------------------------
// ------------------- Table End -------------------
// -------------------------------------------------

const SubmitScore = () => {
  const [input, setInput] = useState<Item>({ Programme_code: "", gpa: "" });
  const [initiated, setInitiated] = useState<boolean>(false);
  return (
    <div>
      <button className="border p-2 border-black" onClick={() => initiate()}>
        reset{" "}
      </button>
      {!initiated ? (
        <button
          className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          onClick={() => {
            initiate();
            setInitiated(true);
          }}
        >
          Initiate
        </button>
      ) : (
        <div>
          Programme Code:{" "}
          <input
            value={input.Programme_code}
            onChange={(x) =>
              setInput({ ...input, Programme_code: x.target.value })
            }
            className="inline-block mr-4"
          />
          GPA:{" "}
          <input
            value={input.gpa}
            onChange={(x) => setInput({ ...input, gpa: x.target.value })}
            className="inline-block"
          />
          <br />
          <button
            onClick={() => {
              save(input.Programme_code, input.gpa);
            }}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            Calculate Average Score
          </button>
          <table className={styles.table}>
            {/* 1st row */}
            <tr className={styles.tr}>
              <th className={styles.th}>Programme Code</th>
              <th className={styles.th}>gpa</th>
              <th className={styles.th}>Vote Count</th>
            </tr>
            {/* Content */}
            {COMdetail.map((item) => (
              <Item key={item.Programme_code} item={item} />
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default SubmitScore;
