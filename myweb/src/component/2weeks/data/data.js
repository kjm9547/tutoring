import { useState } from "react"
import { useNavigate } from "react-router-dom"
const userData = [

    {
        name: "김재민",
        id: '1',
        pw: 1234,
        age:24
    },
    {
        name: "현지훈",
        id: 2,
        pw: 1234,
        age:24
    },
    {
        name: "조우주",
        id: 3,
        pw: 1234,
        age:24
    },
    {
        name: "이승훈",
        id: 4,
        pw: 1234,
        age:24
    },
    {
        name: "강두식",
        id: 5,
        pw: 1234,
        age:24
    }
]
export const data = () => {

    

    const addUser = (data) =>
    {
        userData.push(data)
        console.log(userData)
        
    }

    const onClickSignIn = (id) => {
        console.log(userData,'userdata')
        const result =userData.find(function(item){return item.id==id})
        return result
        
    }




    return {
        userData,
        addUser,
        onClickSignIn
    }
}