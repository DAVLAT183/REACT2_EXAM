import React from 'react'
import Layout from '../layout/layout'
import Side from '../assets/Side Image.png'
import Vector2 from '../assets/Services (3).png'
import Computer from '../assets/Services (4).png'
import Smart from '../assets/Services (5).png'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import p1 from '../assets/Frame 874.png'
import p2 from '../assets/Frame 875.png'
import p3 from '../assets/Frame 876.png'
import img from '../assets/Frame 877.png'
import Footer from './Footer'
import s1 from '../assets/Services.png'
import s2 from '../assets/Services (1).png'
import s3 from '../assets/Services (2).png'

function about() {
  return (
    <div>
      <br />
      <p className='ml-[72px]'>Home / About</p><br /><br />
      <div className='flex justify-center gap-[60px]'>
        <div className='w-[400px]'>
          <p className='text-[54px]'>Our Story</p><br />
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p><br />
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div>
          <img src={Side} alt="" />
        </div>
      </div><br /><br />
      <div className='flex justify-center gap-[30px]'>
        <div className='hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Vector2} alt="" />
            <p className='text-[32px]'>10.5k </p>
            <p>Sallers active our site</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <MonetizationOnIcon fontSize='large' />
            <p className='text-[32px]'>33k</p>
            <p>Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[270px] h-[230px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Computer} alt="" />
            <p className='text-[32px]'>45.5k</p>
            <p>Customer active in our site</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] w-[270px] h-[230px] flex items-center border-[2px] justify-around rounded-[6px] text-center hover:text-white'>
          <div>
            <img src={Smart} alt="" className='m-auto' />
            <p className='text-[32px]'>25k</p>
            <p>Anual gross sale in our site</p>
          </div>
        </div><br /><br />
      </div><br /><br /><br /><br />
      <div className='flex justify-center gap-[50px]'>
        <div>
          <img src={p1} alt="" />
          <p className='text-[32px]'>Tom Cruise </p>
          <p>Founder & Chairman</p>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={p2} alt="" />
          <p className='text-[32px]'>Emma Watson</p>
          <p>Managing Director</p>
          <img src={img} alt="" />
        </div>
        <div>
          <img src={p3} alt="" />
          <p className='text-[32px]'>Will Smith</p>
          <p>Product Designer</p>
          <img src={img} alt="" />
        </div>
      </div><br /><br /><br /><br />
      <div className='flex justify-center gap-[30px]'>
        <div className='text-center w-[259px] h-[161px]'>
          <img src={s1} alt="" className='m-auto' />
          <p className='text-[20px] font-bold'>FREE AND FAST DELIVERY</p>
          <p className='text-[14px]'>Free delivery for all orders over $140</p>
        </div>
        <div className='text-center w-[259px] h-[161px]'>
          <img src={s2} alt="" className='m-auto' />
          <p className='text-[20px] font-bold'>24/7 CUSTOMER SERVICE</p>
          <p className='text-[14px]'>Friendly 24/7 customer support</p>
        </div>
        <div className='text-center w-[259px] h-[161px]'>
          <img src={s3} alt="" className='m-auto' />
          <p className='text-[20px] font-bold'>MONEY BACK GUARANTEE</p>
          <p className='text-[14px]'>We reurn money within 30 days</p>
        </div>
      </div><br /><br /><br />
    </div>
  )
}

export default about