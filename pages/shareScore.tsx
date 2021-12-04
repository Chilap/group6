import React, { useState } from "react";
import grades from "./grades.json";
import styles from "../styles/Home.module.css";

type Item = {
  Programme_code: string;
  grade: string;
};

interface Grade {
  Programme_code: string;
  Grade: GradeType;
  voted: number;
}

const GRADES = [
  "A", // 10
  "A-", // 9
  "B+", // 8
  "B", // 7
  "B-", // 6
  "C+", // 5
  "C", // 4
  "C-", // 3
  "D+", // 2
  "D", // 1
  "F", // 0
] as const;
type GradeType = typeof GRADES[number];
const COMdetail: Grade[] = require("./grades.json");
const initiate = () => {
  if (localStorage.getItem("grades") == null) {
    localStorage.setItem("grades", JSON.stringify(grades));
  }
};
const load = () => {
  if (localStorage.getItem("grades") == null) {
    localStorage.setItem("grades", JSON.stringify(grades));
  }
};
const SubmitScore = () => {
  const [data, setData] = useState<Item>({ Programme_code: "", grade: "" });
  const [initiated, setInitiated] = useState<boolean>(false);

  function save() {
    localStorage.setItem("data", JSON.stringify(data));
    console.log("Data is saved", data);
  }

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
    const { Programme_code, Grade, voted } = item;
    return (
      <tr className={styles.tr}>
        <td className={styles.td}>{Programme_code}</td>
        <td className={styles.td}> {Grade}</td>
        <td className={styles.td}> {voted}</td>
      </tr>
    );
  };
  return (
    <div>
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
          Grade you've got:{" "}
          <input
            value={data.grade}
            onChange={(x) => setData({ ...data, grade: x.target.value })}
            className="inline-block"
          />
          <br />
          <button
            onClick={save}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            Save to local storage
          </button>
          <button
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
          </button>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>Programme Code</th>
              <th className={styles.th}>Grade</th>
            </tr>
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