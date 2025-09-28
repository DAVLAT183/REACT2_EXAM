import React from 'react'
import Layout from '../layout/layout'
import pochta from '../assets/icons-mail.png'
import tel from '../assets/icons-phone.png'
import Footer from './Footer'

function contact() {
    return (
        <div>
            <p className='ml-[72px]'>Home / Cantact</p><br /><br />
            <div className='flex justify-center gap-[40px]'>
                <div className='p-[20px] shadow-lg w-[350px] rounded-[10px]'>
                    <div>
                        <div className='flex gap-[20px] items-center'>
                            <img src={tel} alt="" />
                            <p className='text-[20px]'>Call To Us</p>
                        </div><br />
                        <p className='text-[14px]'>We are available 24/7, 7 days a week.</p>
                        <p className='text-[14px]'>Phone: +8801611112222</p>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div>
                        <div className='flex gap-[20px] items-center'>
                            <img src={pochta} alt="" />
                            <p className='text-[20px]'>Write To US</p>
                        </div><br />
                        <p className='text-[14px]'>Fill out our form and we will contact</p>
                        <p className='text-[14px] mb-[10px]'> you within 24 hours.</p>
                        <p className='text-[14px]'>Emails: customer@exclusive.com</p>
                        <p className='text-[14px]'>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <div className='p-[20px] shadow-lg w-[740px] h-[402px] pl-[20px] rounded-[10px]'>
                    <br />
                    <div className='flex gap-[20px]'>
                        <input type="text" className='w-[220px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded pl-[15px]' placeholder='Name' />
                        <input type="text" className='w-[220px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded pl-[15px]' placeholder='Email' />
                        <input type="text" className='w-[220px] h-[56px] border-[2px] border-solid border-[#0000003B] rounded pl-[15px]' placeholder='Phone' />
                    </div><br />
                    <input type="text" className='w-[700px] h-[176px] rounded border-[2px] border-solid border-[#0000003B] rounded pl-[15px] pb-[120px]' placeholder='Your Massage' /><br /><br />
                    <button className='text-white w-[215px] h-[56px] bg-[#DB4444] rounded ml-[483px]'>Send Massage</button>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default contact