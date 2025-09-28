import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, GetByid, GetCategory, Add } from '../reduser/counterSlice'
import Layout from '../layout/layout'
import { Swiper, SwiperSlide } from 'swiper/react';
import CountdownTimer from "../pages/CountdownTimer";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Five from "../assets/Five star.png"
import Vector2 from '../assets/Vector (2).png'
import Computer from '../assets/Category-Computer.png'
import Smart from '../assets/Category-SmartWatch.png'
import Gamepad from '../assets/Category-Gamepad.png'
import Headphone from '../assets/Category-Headphone.png'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Calonca from '../assets/Frame 694.png'
import s1 from '../assets/Services.png'
import s2 from '../assets/Services (1).png'
import s3 from '../assets/Services (2).png'
import Footer from './Footer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { BaseApi } from '../utils/token';

import Apple from '../assets/1200px-Apple_gray_logo 1.png'
import Vector from '../assets/Vector (1).png'
import Phone from '../assets/hero_endframe__cvklg0xk3w6e_large 2.png'
import { sliderClasses } from '@mui/material/Slider';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';



function Home({ wish, setWish }) {
  const { product, category, search } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(GetCategory())
  }, [])

  return (
    <div>
      <div className='flex justify-around gap-[20px]'>
        <div>
          {category.map((e) => (
            <div key={e.id}>
              <p>{e.categoryName}</p>
            </div>
          ))}
        </div>
        <div>
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: true,
            }}
            navigation={true}
            modules={[Autoplay, Scrollbar]}
            className="mySwiper w-[900px] bg-[#000000] text-[white] h-[400px] rounded"
          >
            <SwiperSlide>
              <div className='flex justify-around items-center pt-[20px]'>
                <div>
                  <div className='flex gap-[20px] items-center'>
                    <img src={Apple} alt="" />
                    <p>iPhone 14 Series</p>
                  </div><br />
                  <p className='text-[48px]'>Up to 10%</p>
                  <p className='text-[48px]'>off Voucher</p><br />
                  <p className='flex gap-[10px] items-center decoration-from-font'>Shop Now <img src={Vector} alt="" /></p>
                </div>
                <img src={Phone} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide> <div className='flex justify-around items-center pt-[20px]'>
              <div>
                <div className='flex gap-[20px] items-center'>
                  <img src={Apple} alt="" />
                  <p>iPhone 14 Series</p>
                </div><br />
                <p className='text-[48px]'>Up to 10%</p>
                <p className='text-[48px]'>off Voucher</p><br />
                <p className='flex gap-[10px] items-center decoration-from-font'>Shop Now <img src={Vector} alt="" /></p>
              </div>
              <img src={Phone} alt="" />
            </div></SwiperSlide>
            <SwiperSlide> <div className='flex justify-around items-center pt-[20px]'>
              <div>
                <div className='flex gap-[20px] items-center'>
                  <img src={Apple} alt="" />
                  <p>iPhone 14 Series</p>
                </div><br />
                <p className='text-[48px]'>Up to 10%</p>
                <p className='text-[48px]'>off Voucher</p><br />
                <p className='flex gap-[10px] items-center decoration-from-font'>Shop Now <img src={Vector} alt="" /></p>
              </div>
              <img src={Phone} alt="" />
            </div></SwiperSlide>
            <SwiperSlide> <div className='flex justify-around items-center pt-[20px]'>
              <div>
                <div className='flex gap-[20px] items-center'>
                  <img src={Apple} alt="" />
                  <p>iPhone 14 Series</p>
                </div><br />
                <p className='text-[48px]'>Up to 10%</p>
                <p className='text-[48px]'>off Voucher</p><br />
                <p className='flex gap-[10px] items-center decoration-from-font'>Shop Now <img src={Vector} alt="" /></p>
              </div>
              <img src={Phone} alt="" />
            </div></SwiperSlide>
            <SwiperSlide> <div className='flex justify-around items-center pt-[20px]'>
              <div>
                <div className='flex gap-[20px] items-center'>
                  <img src={Apple} alt="" />
                  <p>iPhone 14 Series</p>
                </div><br />
                <p className='text-[48px]'>Up to 10%</p>
                <p className='text-[48px]'>off Voucher</p><br />
                <p className='flex gap-[10px] items-center decoration-from-font'>Shop Now <img src={Vector} alt="" /></p>
              </div>
              <img src={Phone} alt="" />
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div><br /><br />
      <div className='flex items-center gap-[10px] ml-[72px]'>
        <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
        <p className='text-[#DB4444]'>Today’s</p>
      </div><br /><br />
      <div className='flex gap-[100px] ml-[72px]'>
        <div>
          <p className='text-[36px]'>
            Flash Sales
          </p>
        </div>
        <CountdownTimer />
      </div><br /><br />
      <div>
        <div className='flex justify-around'>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper w-[1250px]"
          >
            {
              product?.products?.filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim()))
                .map((e) => {
                  return (
                    <SwiperSlide key={e.id} className=' w-[380px] h-[250px]'>
                      <img src={`http://37.27.29.18:8002/images/${e.image}`} className='w-[270px] h-[200px] hover ' alt="" />
                      <div onClick={() => dispatch(Add(e.id))} className="w-[270px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
                        <ShoppingCart />
                        <span>Add To Cart</span>
                      </div>
                      <p>
                        {e.productName}
                      </p>
                      <div className='flex gap-[20px]'>
                        <p className='text-[#DB4444]'>
                          ${e.price}
                        </p>
                        <p className='text-[grey] line-through'>
                          ${e.price + 600}
                        </p><br />
                      </div>
                      <div className='flex gap-[10px] items-center text-[grey]'>
                        <img src={Five} alt="" />
                        <p>(88)</p>
                      </div><br />
                      <Link to={`/ById/${e.id}`} >
                        <RemoveRedEyeIcon className='absolute bottom-[310px] left-[240px]' />
                      </Link>
                      <FavoriteBorderIcon onClick={() => {


                        const have = wish.filter(v => v.id == e.id).length > 0

                        if (have) {
                          localStorage.setItem('wish', JSON.stringify(wish.filter(v => v.id === e.id)))
                          setWish(wish.filter(v => v.id === e.id))

                        } else {

                          localStorage.setItem('wish', JSON.stringify([...wish, e]))
                          setWish([...wish, e])
                        }

                      }} className='absolute bottom-[280px] left-[240px] ' />
                    </SwiperSlide>
                  )
                })
            }
          </Swiper><br /><br />
        </div>
        <div className='text-center'>
          <Link to='/product'>
            <button className='bg-[#DB4444] p-[10px] text-[white] rounded'>View All Products</button>
          </Link>
        </div>
        <br /><br />
        <div className='m-auto'>
          <hr className='w-[90%] ml-15' />
        </div>
      </div><br /><br />
      <div className='flex items-center gap-[10px] ml-[72px]'>
        <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
        <p className='text-[#DB4444]'>Categories</p>
      </div><br />
      <p className='text-[36px] ml-[72px]'>Browse By Category</p><br />
      <div className='flex justify-around'>
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Vector2} alt="" />
            <p>Смартфоны и планшеты</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Computer} alt="" />
            <p>Компьютерная техника</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] flex items-center justify-around border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Smart} alt="" />
            <p>Мелкая бытовая техника</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] w-[170px] h-[145px]  flex items-center border-[2px] justify-around rounded-[6px] text-center hover:text-white'>
          <div>
            <CameraAltIcon fontSize='large' />
            <p>Бытовая техника
            </p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px]  flex items-center justify-around  border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Headphone} alt="" />
            <p>Наушники и аксессуары</p>
          </div>
        </div>
        <div className='hover:bg-[#DB4444] hover:text-white w-[170px] h-[145px] flex items-center justify-around  border-[2px] rounded-[6px] text-center'>
          <div>
            <img className='m-auto' src={Gamepad} alt="" />
            <p>Детские товары</p>
          </div>
        </div>
      </div><br /><br />
      <div className='m-auto'>
        <hr className='w-[90%] ml-15' />
      </div>
      <br />
      <br />
      <div className='flex items-center gap-[10px] ml-[72px]'>
        <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
        <p className='text-[#DB4444]'>This Month</p>
      </div><br />
      <p className='text-[36px] ml-[72px]'>Best Selling Products</p><br />
      <div className='flex justify-around'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper w-[1250px]"
        >
          {
            product?.products
              ?.filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim()))
              .map((e) => {
                return (
                  <SwiperSlide key={e.id} className=' w-[380px] h-[200px]'>
                    <img src={`https://store-api.softclub.tj/images/${e.image}`} className='w-[270px] h-[200px] hover ' alt="" />
                    <div onClick={() => dispatch(Add(e.id))} className="w-[270px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
                      <ShoppingCart />
                      <span>Add To Cart</span>
                    </div>
                    <p>
                      {e.productName}
                    </p>
                    <div className='flex gap-[20px]'>
                      <p className='text-[#DB4444]'>
                        ${e.price}
                      </p>
                      <p className='text-[grey] line-through'>
                        ${e.price + 600}
                      </p><br />
                    </div>
                    <div className='flex gap-[10px] items-center text-[grey]'>
                      <img src={Five} alt="" />
                      <p>(88)</p>
                    </div><br />
                    <Link to={`/ById/${e.id}`}>
                      <RemoveRedEyeIcon className='absolute bottom-[310px] left-[240px] ' />
                    </Link>
                    <FavoriteBorderIcon onClick={() => {


                      const have = wish.filter(v => v.id == e.id).length > 0

                      if (have) {
                        localStorage.setItem('wish', JSON.stringify(wish.filter(v => v.id === e.id)))
                        setWish(wish.filter(v => v.id === e.id))

                      } else {

                        localStorage.setItem('wish', JSON.stringify([...wish, e]))
                        setWish([...wish, e])
                      }

                    }} className='absolute bottom-[280px] left-[240px] ' />
                  </SwiperSlide>
                )
              })
          }
        </Swiper><br />
      </div>
      <br /><br />
      <div className='bg-[black] w-[1170px] h-[500px] m-auto rounded text-white flex justify-around items-center'>
        <div>
          <div>
            <p className='text-[#00FF66]'>Categories</p><br />
            <p className='text-[48px]'>Enhance Your</p>
            <p className='text-[48px]'>Music Experience</p>
          </div><br />
          <div className='flex gap-[20px]'>
            <div className='bg-[white] w-[62px] h-[62px] text-black text-center rounded-[100%] p-[5px]'>
              <p className='font-bold'>23</p>
              <p className='text-[11px]'>Hours</p>
            </div>
            <div className='bg-[white] w-[62px] h-[62px] text-black text-center rounded-[100%] p-[5px]'>
              <p className='font-bold'>05</p>
              <p className='text-[11px]'>Days</p>
            </div>
            <div className='bg-[white] w-[62px] h-[62px] text-black text-center rounded-[100%] p-[5px]'>
              <p className='font-bold'>59</p>
              <p className='text-[11px]'>Minutes</p>
            </div>
            <div className='bg-[white] w-[62px] h-[62px] text-black text-center rounded-[100%] p-[5px]'>
              <p className='font-bold'>35</p>
              <p className='text-[11px]'>Seconds</p>
            </div>
          </div><br />
          <button className='rounded px-[35px] py-[15px] bg-[#00FF66] text-[black]'>Buy Now!</button>
        </div>
        <div>
          <img src={Calonca} alt="" />
        </div>
      </div><br /><br /><br />
      <div className='flex items-center gap-[10px] ml-[72px]'>
        <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
        <p className='text-[#DB4444]'>Our Products</p>
      </div><br />
      <p className='text-[36px] ml-[72px]'>Explore Our Products</p><br />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper w-[1250px]"
      >
        {
          product?.products
           ?.filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim()))
            .map((e) => {
              return (
                <SwiperSlide key={e.id} className=' w-[380px] h-[200px]'>
                  <img src={`https://store-api.softclub.tj/images/${e.image}`} className='w-[270px] h-[200px] hover ' alt="" />
                  <div onClick={() => dispatch(Add(e.id))} className="w-[270px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
                    <ShoppingCart />
                    <span>Add To Cart</span>
                  </div>
                  <p>
                    {e.productName}
                  </p>
                  <div className='flex gap-[20px]'>
                    <p className='text-[#DB4444]'>
                      ${e.price}
                    </p>
                    <p className='text-[grey] line-through'>
                      ${e.price + 600}
                    </p><br />
                  </div>
                  <div className='flex gap-[10px] items-center text-[grey]'>
                    <img src={Five} alt="" />
                    <p>(88)</p>
                  </div><br />
                  <Link to={`/ById/${e.id}`}>
                    <RemoveRedEyeIcon className='absolute bottom-[310px] left-[240px] ' />
                  </Link>
                  <FavoriteBorderIcon onClick={() => {


                    const have = wish.filter(v => v.id == e.id).length > 0

                    if (have) {
                      localStorage.setItem('wish', JSON.stringify(wish.filter(v => v.id === e.id)))
                      setWish(wish.filter(v => v.id === e.id))

                    } else {

                      localStorage.setItem('wish', JSON.stringify([...wish, e]))
                      setWish([...wish, e])
                    }

                  }} className='absolute bottom-[280px] left-[240px] ' />
                </SwiperSlide>
              )
            })
        }
      </Swiper><br /><br />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper w-[1250px]"
      >
        {
          product?.products
           ?.filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim())) 
            .map((e) => {
              return (
                <SwiperSlide key={e.id} className=' w-[380px] h-[250px]'>
                  <img src={`https://store-api.softclub.tj/images/${e.image}`} className='w-[270px] h-[200px] hover ' alt="" />
                  <div onClick={() => dispatch(Add(e.id))} className="w-[270px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
                    <ShoppingCart />
                    <span>Add To Cart</span>
                  </div>
                  <p>
                    {e.productName}
                  </p>
                  <div className='flex gap-[20px]'>
                    <p className='text-[#DB4444]'>
                      ${e.price}
                    </p>
                    <p className='text-[grey] line-through'>
                      ${e.price + 600}
                    </p><br />
                  </div>
                  <div className='flex gap-[10px] items-center text-[grey]'>
                    <img src={Five} alt="" />
                    <p>(88)</p>
                  </div><br />
                  <Link to={`/ById/${e.id}`}>
                    <RemoveRedEyeIcon className='absolute bottom-[310px] left-[240px] ' />
                  </Link>
                  <FavoriteBorderIcon onClick={() => {


                    const have = wish.filter(v => v.id == e.id).length > 0

                    if (have) {
                      localStorage.setItem('wish', JSON.stringify(wish.filter(v => v.id === e.id)))
                      setWish(wish.filter(v => v.id === e.id))

                    } else {

                      localStorage.setItem('wish', JSON.stringify([...wish, e]))
                      setWish([...wish, e])
                    }

                  }} className='absolute bottom-[280px] left-[240px] ' />
                </SwiperSlide>
              )
            })
        }
      </Swiper><br />
      <div className='text-center'>
        <Link to='/product'>
          <button className='bg-[#DB4444] p-[10px] text-[white] rounded'>View All Products</button>
        </Link>
      </div>
      <br /><br />
      <div className='flex items-center gap-[10px] ml-[72px]'>
        <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
        <p className='text-[#DB4444]'>Featured</p>
      </div><br />
      <p className='text-[36px] ml-[72px]'>New Arrival  </p><br /><br />
      <div className='flex justufy-center ml-[72px] gap-[30px]'>
        <div className='ps5  w-[570px] h-[600px] bg-[black] pt-115 pl-5 text-white rounded'>
          <p className='text-[24px]'>PlayStation 5</p>
          <p>Black and White version of the PS5</p>
          <p> coming out on sale.</p><br />
          <p>Shop Now</p>
        </div>
        <div>
          <div className='woman flex items-end pb-[20px] bg-[#0D0D0D] text-white w-[570px] h-[284px] p-[20px] rounded mb-[30px]'>
            <div>
              <p>Women’s Collections</p>
              <p className='text-[14px]'>Featured woman collections that</p>
              <p>give you another vibe.</p><br />
              <p>Shop Now</p>
            </div>
          </div>
          <div className='flex gap-[30px]'>
            <div className='flex items-end pb-[20px] p-[10px] kalonka bg-[black] w-[270px] h-[284px] rounded text-white'>
              <div className=''>
                <p>Speakers</p>
                <p className='text-[14px]'>Amazon wireless speakers</p><br />
                <p>Shop Now</p>
              </div>
            </div>
            <div className='flex items-end pb-[20px] p-[10px] duhi bg-[black] w-[270px] h-[284px] rounded text-white'>
              <div className=''>
                <p>Perfume</p>
                <p className='text-[14px]'>GUCCI INTENSE OUD EDP</p><br />
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br /><br /><br /><br /><br />
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

export default Home