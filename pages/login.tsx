import React, { useState } from "react";
import credentials from "./credentials.json";

interface Item {
  ID: string;
  Programme: string;
  Year: number;
}
// if (localStorage.getItem("credentials") == null) {
// localStorage.setItem("credentials", JSON.stringify(credentials));
// }
const LoginBlock = () => {
  const [loggedin, setLogin] = useState<boolean>(false);
  const [input, setInput] = useState<Item>({
    ID: "",
    Programme: "",
    Year: null,
  });
  const { ID, Programme, Year } = input;

  const check = () => {
    if (localStorage.getItem("credentials") == null) {
      localStorage.setItem("credentials", JSON.stringify(credentials));
    }
    for (const x in JSON.parse(localStorage.getItem("credentials"))) {
      // console.log(JSON.parse(credentialsShorthand));
      console.log("0:", JSON.parse(localStorage.getItem("credentials"))[0].ID);
      if (
        ID == JSON.parse(localStorage.getItem("credentials"))[x].ID &&
        Programme ==
          JSON.parse(localStorage.getItem("credentials"))[x].Programme &&
        Year == JSON.parse(localStorage.getItem("credentials"))[x].Year
      ) {
        setLogin(true);
        console.log(input);
        console.log("hello");
        return true;
      } else {
        setLogin(false);
        console.log("now: ", x);
        console.log(credentials[x]);

      }
    }
  };

  const register = () => {
    if (localStorage.getItem("credentials") == null) {
      localStorage.setItem("credentials", JSON.stringify(credentials));
    }
    for (const x in JSON.parse(localStorage.getItem("credentials"))) {
      if (input.ID == JSON.parse(localStorage.getItem("credentials"))[x].ID) {
        alert("ID already exists");
        return;
      }
    }
    const ls = JSON.parse(localStorage.getItem("credentials"));
    ls.push(input);
    localStorage.setItem("credentials", JSON.stringify(ls));

    // localStorage.setItem("credentials", JSON.stringify([credentials, input]));
    console.log(ID, Programme, Year);
  };
  return (
    <div>
      {/* {localStorage.setItem("credentials", JSON.stringify(credentials))} */}

      {loggedin ? (
        <div>
          <p>Welcome! {input.ID}</p>
          <button
            className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm my-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>
          {input.ID == "doctor" ? (
            <button
              className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm m-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
              onClick={() => setLogin(false)}
            >
              Generate XML
            </button>
          ) : (
            <> </>
          )}
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
            <label>Year of entrance</label>
            <br />
            <input
              value={Year}
              placeholder="2019"
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
            <button
              className="bg-blue-200 text-gray-600 inline-block rounded-md px-4 py-2 text-sm m-2 hover:bg-blue-300 hover:text-black hover:shadow-xl transition duration-200"
              type="submit"
              onClick={() => {
                register();
              }}
            >
              Register{" "}
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginBlock;
