import React, { useState } from "react";
import grades from "./grades.json";
import styles from "../styles/Home.module.css";

type Item = {
  Programme_code: string;
  gpa: string;
};

interface Grade {
  Programme_code: string;
  // Grade: GradeType;
  avgGPAandVoted: [averageGPA:number, voted:number]
  // averageGPA: number;
  // voted: number;
}

// const GRADES = [
//   "A", // 10
//   "A-", // 9
//   "B+", // 8
//   "B", // 7
//   "B-", // 6
//   "C+", // 5
//   "C", // 4
//   "C-", // 3
//   "D+", // 2
//   "D", // 1
//   "F", // 0
// ] as const;
// type GradeType = typeof GRADES[number];
const COMdetail: Grade[] = require("./grades.json");
const initiate = () => {
  if (localStorage.getItem("grades") == null || true) {
    localStorage.setItem("grades", JSON.stringify(grades));
  }
  JSON.parse(localStorage.getItem("grades")).forEach((element) => {
    localStorage.setItem(
      element.Programme_code,
      [element.avgGPAandVoted[0], element.avgGPAandVoted[1]].toString()
    );
  });
};
const load = () => {
  if (localStorage.getItem("grades") == null) {
    localStorage.setItem("grades", JSON.stringify(grades));
  }
};
const save = (course: string, gpa) => {
  // New GPA
  const oldGPA = Number(localStorage.getItem(course).split(",")[0]);
  const inputGPA = Number(gpa);
  const votedCount = Number(localStorage.getItem(course).split(",")[1]);
  const newGPA = (((oldGPA*votedCount) + inputGPA) / (votedCount + 1)).toString();
  if (localStorage.getItem(course) || true) {
    // localStorage.setItem(course, localStorage.getItem(course) + grade)
    localStorage.setItem(course, [newGPA, votedCount + 1].toString());
  }
  // New List
  const grades = JSON.parse(localStorage.getItem("grades"));
  grades.forEach((element) => {
    if (element.Programme_code === course) {
      element.avgGPAandVoted[0] = Number(newGPA);
      element.avgGPAandVoted[1] = votedCount+1;
    }
  });
  console.log(JSON.stringify(grades))
  // localStorage.setItem("grades", grades)
  localStorage.setItem("grades", JSON.stringify(grades))
  // const oScore = localStorage.getItem(course);
};







const SubmitScore = () => {
  const [data, setData] = useState<Item>({ Programme_code: "", gpa: "" });
  const [initiated, setInitiated] = useState<boolean>(false);

  // function load() {
  //   const read = localStorage.getItem("data");
  //   if (read) {
  //     const obj = JSON.parse(read) as Item;
  //     setData(obj);
  //     console.log("Loading is done");
  //   } else {
  //     console.log("No data is found");
  //   }
  // }

  function clear() {
    localStorage.removeItem("data");
    console.log("Data is cleared");
  }
  const Item: React.FC<{
    item: Grade;
  }> = function ({ item }) {
    const { Programme_code, avgGPAandVoted} = item;
    return (
      <tr className={styles.tr}>
        <td className={styles.td}>{Programme_code}</td>
        <td className={styles.td}> {avgGPAandVoted[0]}</td>
        <td className={styles.td}> {avgGPAandVoted[1]}</td>
      </tr>
    );
  };
  return (
    <div>
      <button className="border p-2 border-black"onClick={() => initiate()}>reset </button>
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
            value={data.Programme_code}
            onChange={(x) =>
              setData({ ...data, Programme_code: x.target.value })
            }
            className="inline-block mr-4"
          />
          {/* <br className="my-4"/> */}
          GPA:{" "}
          <input
            value={data.gpa}
            onChange={(x) => setData({ ...data, gpa: x.target.value })}
            className="inline-block"
          />
          <br />
          <button
            onClick={() => {
              save(data.Programme_code, data.gpa);
            }}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            Calculate Average Score
          </button>
          {/* <button
            onClick={initiate}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            JSON → LocalStorage
          </button>
          <button
            onClick={clear}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            Clear local storage
          </button> */}
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
