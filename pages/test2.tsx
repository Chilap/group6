import React, { useState } from "react";
import grades from "./grades.json";
import styles from "../styles/Home.module.css";
import { ListFormat } from "typescript";

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
const Modules = [
  'AMS1001',
  'AMS1301',
  'AMS1302',
  'AMS1360',
  'AMS2640',
  'AMS2002',
  'AMS3323',
  'AMS2320',
  'AMS3301',
  'AMS4322',
  'CHN1000',
  'CHN1002',
  'ENG1010',
  'ENG2010',
  'COM2005',
  'COM2007',
  'COM3102',
  'COM3103',
  'COM3104',
  'ACY2001',
  'ECO1000',
  'MGT1002',
  'BUS2001',
  'AIN1320',
  'FIN2001',
  'GEN1000',
  'SCM2202',
] as const;
type Modules = typeof Modules[number];
type List = typeof Modules[number];
export const ModuleList: Record<List, string> = {
  ['AMS1001']:'AMS1001',
  ['AMS1301']:'AMS1301',
  ['AMS1302']:'AMS1302',
  ['AMS1360']:'AMS1360',
  ['AMS2640']:'AMS2640',
  ['AMS2002']:'AMS2002',
  ['AMS3323']:'AMS3323',
  ['AMS2320']:'AMS2320',
  ['AMS3301']:'AMS3301',
  ['AMS4322']:'AMS4322',
  ['CHN1000']:'CHN1000',
  ['CHN1002']:'CHN1002',
  ['ENG1010']:'ENG1010',
  ['ENG2010']:'ENG2010',
  ['COM2007']:'COM2007',
  ['COM3102']:'COM3102',
  ['COM3103']:'COM3103',
  ['COM2005']:'COM2005',
  ['COM3104']:'COM3104',
  ['ACY2001']:'ACY2001',
  ['ECO1000']:'ECO1000',
  ['MGT1002']:'MGT1002',
  ['BUS2001']:'BUS2001',
  ['AIN1320']:'AIN1320',
  ['FIN2001']:'FIN2001',
  ['GEN1000']:'GEN1000',
  ['SCM2202']:'SCM2202',
  
}
export const GradeDatabase: Record<Modules, string> = {
  ['AMS1001']:'B+',
  ['AMS1301']:'B+',
  ['AMS1302']:'B+',
  ['AMS1360']:'A-',
  ['AMS2640']:'B',
  ['AMS2002']:'B+',
  ['AMS3323']:'B',
  ['AMS2320']:'B+',
  ['AMS3301']:'B-',
  ['AMS4322']:'B-',
  ['CHN1000']:'C',
  ['CHN1002']:'B-',
  ['ENG1010']:'B',
  ['ENG2010']:'B-',
  ['COM2007']:'B+',
  ['COM3102']:'B',
  ['COM3103']:'B',
  ['COM2005']:'B+',
  ['COM3104']:'C',
  ['ACY2001']:'B+',
  ['ECO1000']:'B',
  ['MGT1002']:'B+',
  ['BUS2001']:'B',
  ['AIN1320']:'A-',
  ['FIN2001']:'B',
  ['GEN1000']:'B-',
  ['SCM2202']:'B+',
  
  
}  
export interface StudentTransscript {
  Programme: string; 
  results: string;
}  

function calculate(x:string, z:string) {
  if (x === ModuleList[x]) {
      let results = 0;
      let average = 0
      var y:string;
      results = GradeToGPA[GradeDatabase[x]]+GradeToGPA[z]
      average = results / 2
      if (average <= 4 && average > 3.7){
        y = 'A'
      } else if (average <= 3.7 && average > 3.3){
        y = 'A-'
      } else if (average <= 3.3 && average > 3){
        y = 'B+'
      } else if (average <= 3 && average > 2.7){
        y = 'B'
      } else if (average <= 2.7 && average > 2.3){
        y = 'B-'
      } else if (average <= 2.3 && average > 2){
        y = 'C+'
      } else if (average <= 2 && average > 2.7){
        y = 'C'
      } else if (average <= 2.7 && average > 2.3){
        y = 'C-'
      } else if (average <= 2.3 && average > 1){
        y = 'D+'
      } else if (average = 1){
        y = 'D'
      } else {
        y = 'F'
      }
      return y;
  }
  console.log(`The average grade of ${x} is ${y}`)
}
const SubmitScore2 = () => {
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


  function printans(){
    if (data.Programme_code.length === 7){
      return(alert(`The average grade of ${data.Programme_code} is ${calculate(data.Programme_code, data.grade)}.`))
    } else {
      return(alert('Incorrect Programme code.'))
    }
    


  }
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
          Grade :{" "}
          <select
            value={data.grade}
            onChange={(x) => setData({ ...data, grade: x.target.value })}
            className="inline-block"
          >
            
            <option value="" >please input your grade</option>
            <option value="A" >A</option>
            <option value="A-" >A-</option>
            <option value="B+" >B+</option>
            <option value="B" >B</option>
            <option value="B-" >B-</option>
            <option value="C+" >C+</option>
            <option value="C" >C</option>
            <option value="C-" >C-</option>
            <option value="D+" >D+</option>
            <option value="D" >D</option>
            <option value="F" >F</option>
          </select>
          <br />
 


          <button
            onClick={printans}
            className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
          >
            Calculate Average Grade
          </button>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>Programme Code</th>
              <th className={styles.th}>Grade</th>
              <th className={styles.th}>Vote Count</th>
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

export default SubmitScore2;
