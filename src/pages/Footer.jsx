import React from 'react'
import IMG from '../assets/Frame 741.png'

function Footer() {
    return (
        <div className='bg-[black] w-[100%]'>
            <div className='flex justify-around p-[20px]'>
                <div className='text-white'>
                    <p className='text-[24px]'>Exclusive</p>
                    <p className='text-[20px]'>Subscribe</p>
                    <p>Get 10% off your first order</p><br />
                    <input type="text" className='bg-[black] border-[2px] border-solid border-[white] text-white rounded p-[4px]' placeholder='Enter your email' />
                </div>
                <div className='text-white'>
                    <p>Support</p><br />
                    <p>111 Bijoy sarani, Dhaka,</p>
                    <p>DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div className='text-white'>
                    <p>Account</p><br />
                    <p>My Account</p>
                    <p>Cart</p>
                    <p>Wishlist</p>
                    <p>Shop</p>
                </div>
                <div className='text-white'>
                    <p>Quick Link</p><br />
                    <p>Privacy Policy</p>
                    <p>Terms Of Use</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='text-white'>
                    <p>Social</p><br />
                    <img src={IMG} alt="" />
                </div>
            </div><br /><br />
            <p className='text-[#FFFFFF] text-center'>Copyright Rimel 2022. All right reserved</p>
        </div>
    )
}

export default Footer