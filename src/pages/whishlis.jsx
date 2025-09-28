import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSelector, useDispatch } from 'react-redux'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Trash2, ShoppingCart } from 'lucide-react'
import { Add, fetchProducts } from '../reduser/counterSlice'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Five from "../assets/Five star.png"
import Footer from './Footer';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Link } from 'react-router-dom'


function Whishlis({ wish, setWish }) {
    const { product, search } = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="p-5">
            <div className="flex justify-between items-center">
                <p className="ml-[72px]">Wishlist ({wish.length})</p>
                <button className="w-[223px] h-[56px] border-[2px] border-solid border-[#00000080] rounded">
                    Move All To Bag
                </button>
            </div>

            <div className="mt-[40px]">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1.1, spaceBetween: 10 },
                        480: { slidesPerView: 1.5, spaceBetween: 15 },
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 30 },
                    }}
                    className="mySwiper w-[90%] mx-auto mt-10"
                >
                    {wish?.slice(0, 5)?.map((el) => (
                        <SwiperSlide key={el.id}>
                            <div className="relative w-[250px] bg-white rounded-[5px] shadow-md p-4 h-[235px] transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="absolute top-2 left-2 bg-[#DB4444] text-white px-3 py-1 rounded text-sm">
                                    -40%
                                </div>

                                <div className="flex justify-center mt-6 relative">
                                    <img
                                        src={`http://37.27.29.18:8002/images/${el.image}`}
                                        alt={el.productName}
                                        className="w-[160px] h-[120px] mb-3 mt-[10px]"
                                        onError={(e) => {
                                            e.target.src = '/default-product.png'
                                        }}
                                    />

                                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                                        <button
                                            onClick={() => {
                                                const update = wish.filter(
                                                    (v) => v.id !== el.id
                                                )
                                                localStorage.setItem(
                                                    'wish',
                                                    JSON.stringify(update)
                                                )
                                                setWish(update)
                                            }}
                                        >
                                            <Trash2 className="cursor-pointer w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                <div onClick={() => dispatch(Add(el.id))} className="w-[248px] ml-[-15px] mt-[13px] bg-black text-white py-2 px-4 rounded-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]">
                                    <ShoppingCart />
                                    <span>Add To Cart</span>
                                </div>
                            </div>

                            <h2 className="text-lg font-bold mt-4">
                                {el.productName}
                            </h2>

                            <div className="flex items-center gap-3 mt-2">
                                <p className="text-red-500 font-bold">${el.price}</p>
                                <p className="text-gray-400 line-through">$160</p>
                            </div>

                            <div className="flex items-center gap-1 mt-2 text-yellow-400 text-lg">
                                ★★★★☆
                                <span className="text-gray-500 text-sm ml-2">
                                    ({el.quantity})
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div><br /> <br />
            <div className='flex items-center gap-[10px] ml-[72px]'>
                <div className='bg-[#DB4444] w-[20px] h-[40px] rounded-l-[5px]'></div>
                <p className='text-[#DB4444]'>Just For You</p>
            </div><br />
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
                            return (
                                <SwiperSlide key={e.id} className=' w-[380px] h-[200px]'>
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
                                    <Link to={`/ById/${e.id}`}>
                                        <RemoveRedEyeIcon className='absolute bottom-[230px] left-[240px] ' />
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

                                    }} className='absolute bottom-[260px] left-[240px] ' />
                                </SwiperSlide>
                            )
                        })
                }
            </Swiper><br /><br /><br />
        </div>
    )
}

export default Whishlis
