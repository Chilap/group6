import React, { useState } from "react";
import grades from "./grades.json";

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
            initiate();
            setInitiated(true);
          }}
        >
          Initiate
        </button>
      )}
    </div>
  );
};

export default SubmitScore;
