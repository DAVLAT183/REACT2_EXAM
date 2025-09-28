import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, GetBrand, GetCategory, Add } from '../reduser/counterSlice'
import { Link } from 'react-router-dom'
import Five from "../assets/Five star.png"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { ShoppingCart } from 'lucide-react';


function Product({ wish, setWish }) {
    const { product, brand,search } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(10000)
    const [filtered, setFiltered] = useState([])

    const handleApply = () => {

    }

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(GetCategory())
        dispatch(GetBrand())
    }, [dispatch])

    useEffect(() => {
        if (product?.products) {
            const result = product.products.filter(
                (p) => p.price >= min && p.price <= max
            )
            setFiltered(result)
        }
    }, [product, min, max])

    return (
        <div>
            <p className="ml-[72px]">Home / Explore Our Products</p>
            <br />
            <br />
            <br />
            <div className="flex gap-[40px]">
                <div className="w-[240px] ">
                    <p className='font-bold'>Category</p>
                    <p className="text-[#DB4444]">All products</p>
                    <p>Electronics</p>
                    <p>Home & Lifestyle</p>
                    <p>Medicine</p>
                    <p>Sports & Outdoor</p>
                    <p className="text-[#DB4444]">See all</p>
                    <br />
                    <hr />
                    <br />

                    <p className='font-bold'>Brands</p>
                    {brand.map((e) => (
                        <div key={e.id}>
                            <p>{e.brandName}</p>
                        </div>
                    ))}
                    <br />
                    <hr />
                    <br />

                    <p className='font-bold'>Features</p>
                    <p>Metallic</p>
                    <p>Plastic cover</p>
                    <p>8GB Ram</p>
                    <p>Super power</p>
                    <p>Large Memory</p>
                    <p className="text-[#DB4444]">See all</p>
                    <br />

                    <div className=" ">
                        <div className="w-[240px] ">
                            <p className='font-bold'>Price range</p>

                            <input
                                type="range"
                                min="0"
                                max="10000"
                                value={min}
                                onChange={(e) => setMin(Number(e.target.value))}
                                className="w-full accent-red-500"
                            />
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                value={max}
                                onChange={(e) => setMax(Number(e.target.value))}
                                className="w-full accent-red-500 -mt-2"
                            />

                            <div className="flex gap-2 my-3">
                                <input
                                    type="number"
                                    value={min}
                                    onChange={(e) => setMin(Number(e.target.value))}
                                    className="w-full border rounded p-1 text-sm"
                                    placeholder="Min"
                                />
                                <input
                                    type="number"
                                    value={max}
                                    onChange={(e) => setMax(Number(e.target.value))}
                                    className="w-full border rounded p-1 text-sm"
                                    placeholder="Max"
                                />
                            </div>
                        </div><br /><br />
                        <button
                            onClick={handleApply}
                            className="w-full bg-white text-[#DB4444] border-[2px] border-[solid] border-[#DB4444]   py-2 rounded hover:bg-[#DB4444] hover:text-[white]"
                        >
                            Apply
                        </button>
                    </div><br />
                    <div>
                        <p className='font-bold'>Condition</p>
                        <div className='flex gap-[6px]'><input type="checkbox" /> <p>Any</p></div>
                        <div className='flex gap-[6px]'><input type="checkbox" /> <p>Refurbished</p></div>
                        <div className='flex gap-[6px]'><input type="checkbox" /> <p>Brand new</p></div>
                        <div className='flex gap-[6px]'><input type="checkbox" /> <p>Old items</p></div>
                    </div>
                </div>

                <div className="w-[1100px]">
                    <div className='flex flex-wrap gap-[100px]'>
                        {filtered
                        .filter((e) => e.productName.toLowerCase().includes(search.toLowerCase().trim()))
                        .map((e) => (
                            <div key={e.id} className="w-[380px] h-[250px] relative">
                                <img
                                    src={`https://store-api.softclub.tj/images/${e.image}`}
                                    className="w-[220px] h-[200px] object-fit"
                                    alt={e.productName}
                                />
                                <div
                                    onClick={() => dispatch(Add(e.id))}
                                    className="w-[220px] bg-black text-white py-2 px-4 rounded-b-[3px] cursor-pointer transition duration-300 text-center flex items-center justify-center gap-[10px]"
                                >
                                    <ShoppingCart />
                                    <span>Add To Cart</span>
                                </div>
                                <p>{e.productName}</p>
                                <div className="flex gap-[20px]">
                                    <p className="text-[#DB4444]">${e.price}</p>
                                    <p className="text-[grey] line-through">${e.price + 600}</p>
                                </div>
                                <div className="flex gap-[10px] items-center text-[grey]">
                                    <img src={Five} alt="rating" />
                                    <p>(88)</p>
                                </div>

                                <Link to={`/ById/${e.id}`}>
                                    <RemoveRedEyeIcon className="absolute bottom-[200px] left-[240px]" />
                                </Link>

                                <FavoriteBorderIcon
                                    onClick={() => {
                                        const have = wish.some((v) => v.id === e.id)
                                        const updated = have
                                            ? wish.filter((v) => v.id !== e.id)
                                            : [...wish, e]

                                        setWish(updated)
                                        localStorage.setItem("wish", JSON.stringify(updated))
                                    }}
                                    className="absolute bottom-[230px] left-[240px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className='text-center'>
                <button className='bg-[#DB4444] w-[212px] h-[56px] text-[white] rounded'>More Products</button>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Product
