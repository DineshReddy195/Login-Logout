import { createContext, useState } from "react";
 export const Context=createContext();

 function CustomProvider({children}){
    const [user,setUser]=useState({
        name:'',
        password:''
    })
    const[login,setLogin]=useState(false)
    return(
        <Context.Provider value={{login,user,setUser,setLogin}}>
            {children}
        </Context.Provider>
    )
 }

 export default CustomProvider;