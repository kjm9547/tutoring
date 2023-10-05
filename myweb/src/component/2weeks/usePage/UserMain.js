import React from "react";
import { useLocation } from "react-router-dom";

export default function UserMain(){
    const location = useLocation();
    const userName = location.state.name
    const userAge = location.state.age
    
    return(
        <div>
            <h1>
                {userName}
                {userAge}
            </h1>
        </div>
    )

}