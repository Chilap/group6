import React, { useState } from "react";
import grades from "./grades.json";
export const GRADES = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'] as const;
export type GradeType = typeof GRADES[number];
export const course = ['COM3102', 'COM3103', 'AMS1360', 'AMS2640'] as const;
export type module = typeof course[number];

type Item = {
    Programme_code: string;
    grade: string;
  };
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

    function clear() {
        localStorage.removeItem("data");
        console.log("Data is cleared");
    }

export const GradeToGPA: Record<GradeType, number> = {
    ['A']: 4,
    ['A-']: 3.7,
    ['B+']: 3.3,
    ['B']: 3,
    ['B-']: 2.7,
    ['C+']: 2.3,
    ['C']: 2,
    ['C-']: 1.7,
    ['D+']: 1.3,
    ['D']: 1,
    ['F']: 0,
  }

export const GradeDatabase: Record<module, string> = {
    ['COM3102']:'B+',
    ['COM3103']:'B-',
    ['AMS1360']:'A-',
    ['AMS2640']:'B',
}  
export interface StudentTransscript {
    Programme: string; 
    results: string;
  }  

function calculate(x:string) {
    if (x === GradeDatabase[x]){
        let results = 0;
        let average = 0
        results = GradeToGPA[GradeDatabase[x]]+GradeToGPA[x]
        average = results / 2
        return average;
    }

  
  return (
    <div>
      {initiated ? (
        <div>
          Programme Code:{" "}
          <input
            value={data.Programme_code}
            onChange={(x) => setData({ ...data, Programme_code: x.target.value })}
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
        </div>
      ) : (
        <button
          className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          onClick={() => {
            calculate(data.Programme_code);
          }}
        >
          Initiate
        </button>

      )}
    </div>
  );
};

export default calculate;