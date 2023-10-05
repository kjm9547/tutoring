import React, { useEffect } from "react";
import '../css/main.css'
import { useNavigate } from "react-router-dom";
import { data } from "../data/data";
export default function Main(){
    const naviagte = useNavigate()
    const Button = ({title,onClick}) => {
        return(
            <button className="btnStyle"
                onClick={()=>{onClick()}}
            >
                {title}
            </button>
        )
    }
    const onClickSignIn = () => {
        naviagte('/signin')
    }
    const onClickSignUp = () => {
        naviagte('/signup')
    }
    return(
        <div className="container">
              
            <div className="logoContainer">
                <img src="https://ichef.bbci.co.uk/news/660/cpsprodpb/DCE1/production/_104454565_mary-mcgowan_caught-in-the-act_00001294.jpg"/>

                <p className="text">안녕하세용</p>
            </div>
            <div className="btnContainer">
                
                <Button title={'로그인'} onClick={onClickSignIn}></Button>
                <Button title={'회원가입'}onClick={onClickSignUp}></Button>
            </div>
        </div>
    )

}