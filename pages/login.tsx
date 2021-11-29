import styles from '../styles/Home.module.css'
import React, { useState } from "react";


interface Item {
    Programme: string,
    ID: string,
    Year: number,
}

const IDPW: Item[] = [
    {
        Programme: "a",
        ID: 'a',
        Year: 1,
    },
    {
        Programme: "AHCC",
        ID: 'z',
        Year: 1,
    },
    {
        Programme: "DSBI",
        ID: 'a',
        Year: 1,
    }
];



  

function login () {
    const [input, setInput] = useState<Item>({
        Programme:"",
        ID: '',
        Year: null,
      });
      const [result, setResult] = useState<string>('');
      const { Programme ,ID, Year} = input;
    
      function check() {
        for(const x in IDPW){
  
            if(ID==IDPW[x].ID && Programme==IDPW[x].Programme && Year==IDPW[x].Year){
            {return(1)}
            }   
  
            if(ID==IDPW[x].ID || Programme==IDPW[x].Programme || Year==IDPW[x].Year){
            {return(0)}
            }   
    
        }
    }
  
    function popup() {
        if(check()==1){
            {return(alert("OK"))}
        }
        else{
            {return(alert("Sorry, worng ID or password"))}
        }
        
    }

    function checklogin() {
        let checklogin = []
        checklogin.unshift(0)
      
        if(check()==1){
            checklogin.unshift(1)
            return(checklogin[0])
        }


        
    }
    return(
        
        <div>
        <form>
        <p><label>Student ID</label>
        <input value={ID}onChange={x => setInput({...input, ID:(x.target.value)})} type="text"  required/>
        </p>
        <p><label>Programme</label>
        <input value={Programme}onChange={x => setInput({...input, Programme:(x.target.value)})} type="text"  required/>
        </p>
        <p><label>Year   </label><br/>
        <input value={Year}onChange={x => setInput({...input, Year:parseInt(x.target.value)})}
            type="number"  min="1" max="5"/>
        </p>
        <p>
        <button  className={styles.button}type = "submit" onClick={popup}>Log in </button></p>
        </form>
        </div>)
 
}
  
 function logined() {
    return(
        
        <div>
            Welcome!
        </div>)


    
}












export default login
  
  
