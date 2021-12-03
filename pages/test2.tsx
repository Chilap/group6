import React, { useState } from "react";
import grades from "./grades.json";

type Item = {
  item: string;
  item2: string;
};
const load = () => {
  if (localStorage.getItem("grades") == null) {
    localStorage.setItem("grades", JSON.stringify(grades));
  }
}
const SubmitScore = () => {
  const [data, setData] = useState<Item>({ item: "", item2: "" });

  function save() {
    localStorage.setItem("data", JSON.stringify(data));
    console.log("Data is saved");
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
      Course Code:{" "}
      <input
        value={data.item}
        onChange={(x) => setData({ ...data, item: x.target.value })}
        className="inline-block mr-4"
      />
      {/* <br className="my-4"/> */}
      Grade you've got:{" "}
      <input
        value={data.item2}
        onChange={(x) => setData({ ...data, item2: x.target.value })}
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
        onClick={load}
        className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
      >
        Load from local storage
      </button>
      <button
        onClick={clear}
        className="bg-blue-200 mx-2 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
      >
        Clear local storage
      </button>
    </div>
  );
};

export default SubmitScore;
