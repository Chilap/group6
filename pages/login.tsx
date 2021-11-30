import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import credentials from "./credentials.json";

interface Item {
  ID: string;
  Programme: string;
  Year: number;
}

const LoginBlock = () => {
  const [loggedin, setLogin] = useState<boolean>(false);
  const [input, setInput] = useState<Item>({
    ID: "",
    Programme: "",
    Year: null,
  });
  const { ID, Programme, Year } = input;

  const check = () => {
    for (const x in credentials) {
      if (
        ID == credentials[x].ID &&
        Programme == credentials[x].Programme &&
        Year == credentials[x].Year
      ) {
        setLogin(true);
        console.log(loggedin);
        return true;
      } else {
        setLogin(false);
        console.log(loggedin);
        return false;
      }
    }
  };
  return (
    <div>
      {loggedin ? (
        <div>
          <p>Welcome!</p>
          <button
            className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>
            <label>Student ID</label>
            <input
              value={ID}
              onChange={(x) => setInput({ ...input, ID: x.target.value })}
              type="text"
              placeholder="a"
              required
              className="w-5/6 border rounded-md p-1"
            />
          </p>
          <p>
            <label>Programme</label>
            <input
              value={Programme}
              onChange={(x) =>
                setInput({ ...input, Programme: x.target.value })
              }
              type="text"
              placeholder="z"
              required
              className="w-5/6 border rounded-md p-1"
            />
          </p>
          <p>
            <label>Year </label>
            <br />
            <input
              value={Year}
              placeholder="1"
              onChange={(x) =>
                setInput({ ...input, Year: parseInt(x.target.value) })
              }
              type="number"
              min="1"
              max="5"
              className="w-5/6 border rounded-md p-1"
            />
          </p>
          <p>
            <button
              className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
              type="submit"
              onClick={() => {
                check();
                console.log(loggedin);
              }}
            >
              Log in{" "}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginBlock;
