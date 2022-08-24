import SideNavBar from "./sidenavbar";
import React, { useState, useEffect } from 'react';
import Header from "./header";

const Todolist = ()=>{

    // const [todo, setTodo] = useState([]);
    // const authToken = localStorage.getItem("authorization");

    //     useEffect(() => {
    //         async function fetchData() {
    //         const response = await fetch("https://localhost:3010/todolist",{
    //             headers: {
    //                 authorization: authToken
    //             }}); 
    //         // console.log(response)
    //         const data = await response.json(); 
    //         setTodo(data);
    //         // console.log(data);
    //         }
    //         fetchData()
    //     }, [authToken])
        
        // console.log(todolist)

    return(

        <div>
            < SideNavBar/>
        </div>
        
      
    )
}
export default Todolist;