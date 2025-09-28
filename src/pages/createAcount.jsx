import React from 'react'
import { BaseApi, SaveToken, GetToken, AxiosDavlat, } from '../utils/token';
import axios from 'axios';
import { Link } from 'react-router-dom';


function createAcount() {
    async function Login(user) {
        try {
            const { data } = await AxiosDavlat.post(`${BaseApi}/Account/register`, user);
            SaveToken(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            userName: e.target[0].value,
            phoneNumber: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            confirmPassword: e.target[3].value,
        };
        Login(user);
    };
    return (
        <div className='text-center'>
            <br /><br /><br />
            <div className='block'>
                <p className='text-[36px]'>Create an account</p>
                <p>Enter your details below</p>
            </div><br />
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" className=' pl-[20px] w-[290px] h-[56px]  border-[2px] border-solid border-[#0000003B] rounded' placeholder='Name...' /><br /><br />
                    <input type="text" className=' pl-[20px] w-[290px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded' placeholder='Phone...' /><br /><br />
                    <input type="email" className=' pl-[20px] w-[290px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded' placeholder='Email...' /><br /><br />
                    <input type="password" className=' pl-[20px] w-[290px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded' placeholder='Pasword...' />
                </div><br />
                <div>
                    <button className='text-white w-[290px] h-[56px] bg-[#DB4444] rounded' type='submit'>Create Account</button>
                </div><br />
                <p className='text-[#000000]'>Already have account?</p>
                <br /><br /><br /><br />
            </form>
        </div>
    )
}

export default createAcount