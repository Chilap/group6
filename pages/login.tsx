import styles from "../styles/Home.module.css";
import React, { useState } from "react";

interface Item {
  Programme: string;
  ID: string;
  Year: number;
}

const IDPW: Item[] = [
  { ID: "a", Programme: "a", Year: 1 },
  { ID: "z", Programme: "AHCC", Year: 1 },
  { ID: "a", Programme: "DSBI", Year: 1 },
];

const LoginBlock = () => {
  const [loggedin, setLogin] = useState<boolean>(false);
  const [input, setInput] = useState<Item>({
    Programme: "",
    ID: "",
    Year: null,
  });
  //   const [result, setResult] = useState<string>("");
  const { Programme, ID, Year } = input;

  function check() {
    for (const x in IDPW) {
      if (
        ID == IDPW[x].ID &&
        Programme == IDPW[x].Programme &&
        Year == IDPW[x].Year
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
  }

  //   function popup() {
  //     if (loggedin) {
  //       {
  //         console.log(loggedin);
  //         return alert("OK");
  //       }
  //     } else {
  //       {
  //         console.log(loggedin);
  //         return alert("Sorry, worng ID or password");
  //       }
  //     }
  //   }

  //   function checklogin() {
  //     let checklogin = [];
  //     checklogin.unshift(0);

  //     if (loggedin) {
  //       checklogin.unshift(1);
  //       return checklogin[0];
  //     }
  //   }
  return (
    <div>
      {loggedin ? (
        <div>
          <p>Welcome!</p>
          <button
            className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-white hover:shadow-xl transition duration-200"
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
              required
              className="w-5/6 border rounded-md p-1 my-2"
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
              required
              className="w-5/6 border rounded-md p-1 my-2"
            />
          </p>
          <p>
            <label>Year </label>
            <br />
            <input
              value={Year}
              onChange={(x) =>
                setInput({ ...input, Year: parseInt(x.target.value) })
              }
              type="number"
              min="1"
              max="5"
              className="w-5/6 border rounded-md p-1 my-2"
            />
          </p>
          <p>
            <button
              className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-white hover:shadow-xl transition duration-200"
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

// function logined() {
//   return <div>Welcome!</div>;
// }

export default LoginBlock;
