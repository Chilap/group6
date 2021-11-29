import styles from "../styles/Home.module.css";
import React, { useState } from "react";

interface Item {
  Programme: string;
  ID: string;
  Year: number;
}

const GRADES = [
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "F",
] as const;
type GradeType = typeof GRADES[number];

interface Grade {
  Programme_code: string;
  Grade: GradeType;
}

const COMdetail: Grade[] = [
  {
    Programme_code: "COM3102",
    Grade: "A-",
  },
  {
    Programme_code: "COM3103",
    Grade: "A",
  },
  {
    Programme_code: "COM2005",
    Grade: "A",
  },
];

const Item: React.FC<{
  item: Grade;
}> = function ({ item }) {
  const { Programme_code, Grade } = item;
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{Programme_code}</td>
      <td className={styles.td}> {Grade}</td>
    </tr>
  );
};

const COM = () => {
  return (
    <div>
      <table className={styles.table}>
        <tr className={styles.tr}>
          <th className={styles.th}>Progremme Code</th>
          <th className={styles.th}>Grade</th>
        </tr>
        {COMdetail.map((item) => (
          <Item key={item.Programme_code} item={item} />
        ))}
      </table>
    </div>
  );
};

export default COM;
