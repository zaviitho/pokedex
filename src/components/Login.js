import React from 'react';
import {useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [userName , setUserName] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const submit=(e)=>{
        e.preventDefault()
        console.log(userName)
        dispatch({
            type:'GET_USERNAME',
            payload: userName
        })
        setUserName('')
        navigate('/pokemons')
    }
    return (
        <div className="login">
            <img src="https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1649635200&Signature=f84HN~f-tP2wNzbt0CMj6HhreLtJoDS~U-WerAGnu-YJ~EO9DQ2IfEmeRoJMHjUT4L48BEPmFPbun7qs8esA9twb-eh2B~sxaTCYxvoQkpAr65zdmvLQiS2bnLn4LUCMM8Evp7P2ojfHUSinHCcnCmnW1F7HCbeHC-OYgjBK6iHhhCcwQ~bps-rBdimUv4x9EVyj5J30u7MXhoorBLlHnvU7wHwUztH5qbMywfNja1wTl4cY-3MnyEtF-MduSiPydwZfrR1K4cqL6iHoeVklsAX6QXgbexjzWhafNNJ0-bjAE3R62G5DUIq03GDar3MdYqXlOyzjNT1lsuOuoWK3OQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
            <form action="" onSubmit={submit}>
            <p className="login__welcome">Hi trainer!</p>
            <p>Para poder comenzar, dame tu nombre</p>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Escribe tu nombre"
            />
            <button>Log in</button>
            </form>
         <footer className='footer-login'>
             <div className='footer__red'></div>
             <div className='pokeball'>
                 <div className='detail'>
                 </div>
             </div>
             <div className='footer__black'></div>
         </footer>

        </div>
    );
};

export default Login;