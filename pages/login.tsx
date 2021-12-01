import React, { useState } from "react";
import credentials from "./credentials.json";
<script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>;

interface Item {
  ID: string;
  Programme: string;
  Year: number;
}

const downloadTxtFile = (prop) => {
  const element = document.createElement("a");
  const file = new Blob([prop], { type: "text/xml" });
  element.href = URL.createObjectURL(file);
  element.download = "users.xml";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

const generateXML = () => {
  const ReactDomServer = require("react-dom/server");
  const xml = [];
  for (const x in JSON.parse(localStorage.getItem("credentials"))) {
    const elementXML = ReactDomServer.renderToStaticMarkup(
      <user>
        <id>{JSON.parse(localStorage.getItem("credentials"))[x].ID}</id>
        <programme>
          {JSON.parse(localStorage.getItem("credentials"))[x].Programme}
        </programme>
        <year>{JSON.parse(localStorage.getItem("credentials"))[x].Year}</year>
      </user>
    );
    xml.push(elementXML);
  }

  xml.unshift("<users>");
  xml.unshift("<?xml version='1.0' encoding='UTF-8'?>");
  xml.push("</users>");
  console.log(xml.join(""));
  // const file = new File([xml.join("")], "users.xml", { type: "text/xml" });
  // console.log(file);
  return xml.join("");
};

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
    if (input.ID[0] !== "s" && input.ID.length != 7){
        alert("Invalid Student ID");
        return;
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
              onClick={() => downloadTxtFile(generateXML())}
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
      <div className='bg-white p-2 rounded '>
        <p className='font-semibold text-lg text-gray-500'>Login tips:</p>
        <p>- Students <span className='font-bold'>cannot</span> download XML, only doctors can. </p>
        <hr/>
        <p className='font-semibold text-lg text-gray-500'>Login Credentials:</p>
        <p className='font-light text-sm text-gray-300'>(ID // programme // year)</p>
        <p>student: s198096 // DSBI // 2019</p>
        <p>doctor: doctor // doctor // 2019</p>
      </div>
    </div>
  );
};

export default LoginBlock;
