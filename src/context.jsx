import React, {useState} from 'react'


const AppContext = React.createContext();


const AppProvider = ({children}) =>{

    const [userInfo,setUserInfo] = useState({
        address : "",
        city : "",
        state: "",
        zipCode : "",
        email : ""
    })
    return (
        <AppContext.Provider value={{userInfo, setUserInfo}} >
            {children}
        </AppContext.Provider>
    )
    
}

export {AppContext,AppProvider}