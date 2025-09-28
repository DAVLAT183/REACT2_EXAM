import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Add, GetByid, fetchProducts } from '../reduser/counterSlice'
import Layout from '../layout/layout'
import { Link, useParams } from 'react-router-dom'
import Five from '../assets/Five star.png'
import p1 from '../assets/Icon-return (1).png'
import p2 from '../assets/icon-delivery.png'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ShoppingCart } from 'lucide-react'


function ById({ wish, setWish }) {
  const { productByid, product,search } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const { id } = useParams()
  const [stat, setState] = useState("")

  console.log(product);

  useEffect(() => {
    dispatch(GetByid(id))
    dispatch(fetchProducts())
  }, [])

  return (
    <div>
      <p className='ml-[72px]'>Account / Gaming / {productByid?.productName}</p><br />
      <div className='flex justify-center gap-[50px]'>
        {productByid?.images?.length > 0 && (
          <img
            src={`http://37.27.29.18:8002/images/${productByid.images[0].images}`}
            alt=""
            className="h-[600px] max-w-[680px] object-cover rounded"
          />
        )}
        <div>
          <p className='text-[24px] mb-[10px]'>{productByid.productName}</p>
          <div className='flex gap-[10px] items-center text-[grey] mb-[20px]'>
            <img src={Five} alt="" />
            <p>(150 Reviews) |</p>
            <p className='text-[#12CA5B]'>In Stock</p>
          </div>
          <p className='text-[24px] mb-[20px]'>${productByid.price}.00</p>
          <p className='text-[grey]'>{productByid.description}</p><br />
          <hr />
          <br />
          <div className='flex items-center gap-[10px]'>
            <p className='text-[20px]'>Colors : </p>
            <div style={{ backgroundColor: productByid.color }} className={`w-[20px] h-[20px] rounded-[100px]`}></div>
          </div><br />
          <div className='flex items-center gap-[10px]'>
            <p className='text-[20px]'>Size:</p>
            <div className='flex gap-[5px]'>
              <button style={{ backgroundColor: stat == "XS" ? "#DB4444" : null, color: stat == "XS" ? "white" : null, }} className='border-[2px] w-[40px] h-[32px] rounded-[5px]' onClick={() => setState("XS")}>XS</button>
              <button style={{ backgroundColor: stat == "S" ? "#DB4444" : null, color: stat == "S" ? "white" : null, }} className='border-[2px] w-[40px] h-[32px] rounded-[5px]' onClick={() => setState("S")} >S</button>
              <button style={{ backgroundColor: stat == "M" ? "#DB4444" : null, color: stat == "M" ? "white" : null, }} className='border-[2px] w-[40px] h-[32px] rounded-[5px]' onClick={() => setState("M")}>M</button>
              <button style={{ backgroundColor: stat == "L" ? "#DB4444" : null, color: stat == "L" ? "white" : null, }} className='border-[2px] w-[40px] h-[32px] rounded-[5px]' onClick={() => setState("L")}>L</button>
              <button style={{ backgroundColor: stat == "XL" ? "#DB4444" : null, color: stat == "XL" ? "white" : null, }} className='border-[2px] w-[40px] h-[32px] rounded-[5px]' onClick={() => setState("XL")}>XL</button>
            </div>
          </div><br />
          <div className='flex gap-[20px] items-center '>
            <button className='w-[165px] h-[44px] text-[white] bg-[#DB4444] rounded '>Buy Now</button>
            <FavoriteBorderIcon
              onClick={() => {
                const have = wish.some(v => v.id === e.id)
                const updated = have
                  ? wish.filter(v => v.id !== e.id)
                  : [...wish, e]

                setWish(updated)
                localStorage.setItem("wish", JSON.stringify(updated))
              }}

            />
          </div><br /><br />
          <div>
            <div className='flex gap-[10px] p-[15px] border-[2px] border-solid border-[#00000080] rounded-t-[10px]'>
              <img src={p2} alt="" />
              <div>
                <p>Free Delivery</p>
                <p className='text-[12px]'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex gap-[10px] p-[15px] border-[2px] border-solid border-[#00000080] rounded-b-[10px]'>
              <img src={p1} alt="" />
              <div>
                <p>Return Delivery</p>
                <p className='text-[12px]'>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div><br /><br />
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
           .filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim()))
          .map((e) => {
            console.log(e);
            return (
              <SwiperSlide key={e.id} className=' w-[380px] h-[250px]'>
                <img src={`http://37.27.29.18:8002/images/${e.image}`} className='w-[270px] h-[200px] hover object-cover ' alt="" />
                <div onClick={() => dispatch(Add(e.id))}  className="w-[270px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
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
                  <RemoveRedEyeIcon className='absolute bottom-[230px] left-[240px] ' />
                </Link>
                <FavoriteBorderIcon className='absolute bottom-[260px] left-[240px] ' />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <br /><br />
    </div>
  )
}

export default ById