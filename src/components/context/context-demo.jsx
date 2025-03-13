import React, { useContext } from "react";

let UserDetailsContext=React.createContext(null);

export function ContextDemo(){
    return(
        <div className="container-fluid bg-black text-light p-4">
           <UserDetailsContext.Provider value={{UserName:'John'}}>
                <h2>Parent Commponent</h2>
                <Home/>
           </UserDetailsContext.Provider>
        </div>
    )
}

export function Home(){
    const context=useContext(UserDetailsContext);
    return(
        <div className="bg-danger p-4">
            <h2>Home Component-{context.UserName}</h2>
            <VideoComponent/>
        </div>
    )
}

export function VideoComponent(){
    const context=useContext(UserDetailsContext);
    return(
        <div className="bg-warning p-3">
            <h2>Video Component-{context.UserName}</h2>
        </div>
    )
}