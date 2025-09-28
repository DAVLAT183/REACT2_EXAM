import React from 'react'
import { BaseApi, SaveToken, GetToken, AxiosDavlat, } from '../utils/token';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Login() {
    async function Login(user) {
        try {
            const { data } = await AxiosDavlat.post(`${BaseApi}/Account/login`, user);
            SaveToken(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            userName: e.target[0].value,
            password: e.target[1].value,
        };
        Login(user);
    };
    return (
        <div className='text-center'>
            <br /><br /><br />
            <div className='block'>
                <p className='text-[36px]'>Log in to Exclusive</p>
                <p>Enter your details below</p>
            </div><br />
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" className=' pl-[20px] w-[290px] h-[56px]  border-[2px] border-solid border-[#0000003B] rounded' placeholder='Email...' /><br /><br />
                    <input type="password" className=' pl-[20px] w-[290px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded' placeholder='Pasword...' />
                </div><br />
                <div>
                    <Link to="/CreateNew">
                        <button className='w-[290px] text-[#DB4444]'>Forget Password?</button><br /><br />
                    </Link>
                    <button className='text-white w-[290px] h-[56px] bg-[#DB4444] rounded' type='submit'>Log In</button>
                </div><br /><br /><br /><br /><br />
            </form>
        </div>
    )
}

export default Login