import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data";

export default function SignUp(){
    const [id,setId] =useState('');
    const [pw,setPw] =useState('');
    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    
    const navigate = useNavigate()
    const onPressClear = ({id,pw,name,age}) =>{
        const {addUser} = data()
        const newUserData={
            id:id,
            pw:pw,
            name:name,
            age:age
        }
        console.log(newUserData)
        addUser(newUserData)
        navigate('/')
    }
    const onChangeId = (event) => {
        setId(event.target.value)
    }
    const onChangePw = (event) => {
        setPw(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeAge = (event) => {
        setAge(event.target.value)
    }
    return(
        <div 
            className="container">
            <h1>
                회원가입
            </h1>
            <input 
            title="id"
                className="inputStyle"
                placeholder="id"
                value={id}
                onChange={onChangeId}
                />
            <input 
            title="pw"
                className="inputStyle"
                placeholder="pw"
                value={pw}
                onChange={onChangePw}
                />
            <input 
            title="name"
            className="inputStyle"
            placeholder="name"
            value={name}
                onChange={onChangeName}
            />
            <input 
            title="age"
            className="inputStyle"
            placeholder="age"
            
            value={age}
            onChange={onChangeAge}
            />
            <div className="btnContainer">
            <button className="btnStyle"
                onClick={() => { onPressClear({id,pw,name,age}) }}
            >
                {"완료"}
            </button>
            </div>
        </div>
    )

}