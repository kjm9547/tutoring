import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/data";

export default function SignIn() {
    const naviagte = useNavigate()
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const onChangeId = (event) => {
        setId(event.target.value)
    }
    const onChangePw = (event) => {
        setPw(event.target.value)
    }
   
   const onPressLogin = (id) =>{
    const {onClickSignIn} = data()
    const result = onClickSignIn(id)
    
    if(result){
        console.log(result)
        return naviagte('/usermain',{
            state:{
                name:result.name,
                age:result.age
            }
        })
    }
    else{
        
        return null
    }
   }

    const Button = ({ title, onClick }) => {
        return (
            <button className="btnStyle"
                onClick={() => { onClick() }}
            >
                {title}
            </button>
        )
    }
    
    return (
        <div className="container">
            <h1 style={{marginTop:50}}>
                로그인
            </h1>
            <div className="inputContainer">
            <input
                className="inputStyle"
                placeholder="id"
                    value={id}
                    onChange={onChangeId} />
                <input
                placeholder="pw"
                className="inputStyle"
                    value={pw}
                    onChange={onChangePw} />
            </div>
            <div className="btnContainer">
                <Button title={'로그인'} onClick={()=>{onPressLogin(id)}}></Button>

            </div>
        </div>
    )

}