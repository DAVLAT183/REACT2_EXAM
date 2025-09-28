import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, Cart, Delete, ClearCard } from '../reduser/counterSlice'
import Chanel from '../assets/icon-cancel (1).png'
import { Link } from 'react-router-dom'

function CartPage() {
    const { cart } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        dispatch(fetchProducts())
        dispatch(Cart())
    }, [dispatch])

    const handleQuantityChange = (id, value) => {
        if (value < 1) return
        setQuantities((prev) => ({
            ...prev,
            [id]: value
        }))
    }

    const subtotal = cart[0]?.productsInCart?.reduce((sum, e) => {
        const qty = quantities[e.id] || 1
        return sum + e.product.price * qty
    }, 0) || 0

    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="py-3">Product</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 && cart[0]?.productsInCart?.map((e) => {
                            const qty = quantities[e.id] || 1
                            return (
                                <tr key={e.id} className="border-b">
                                    <td className="flex items-center gap-3 py-3">
                                        <img src={`https://store-api.softclub.tj/images/${e.product.image}`} className="w-12 h-12" alt="" />
                                        <span>{e.product.productName}</span>
                                    </td>
                                    <td>${e.product.price}</td>
                                    <td>
                                        <input
                                            type="number"
                                            min={1}
                                            value={qty}
                                            onChange={(ev) => handleQuantityChange(e.id, +ev.target.value)}
                                            className="w-16 border rounded text-center"
                                        />
                                    </td>
                                    <td>${(e.product.price * qty).toFixed(2)}</td>
                                    <td>
                                        <img src={Chanel} onClick={() => dispatch(Delete(e.id))} alt="remove" className="w-5 h-5 cursor-pointer" />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-6">
                <Link to='/'>
                    <button className="border px-6 py-2 rounded">Return To Shop</button>
                </Link>
                <div className="flex gap-4">
                    <button className="border px-6 py-2 rounded">Update Cart</button>
                    <button className="border px-6 py-2 rounded text-red-600" onClick={() => dispatch(ClearCard())}>Remove all</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-25 mt-10">
                <div className="flex gap-5">
                    <input type="text" placeholder="Coupon Code" className="border rounded px-4 py-2 w-full h-[56px]" />
                    <button className="bg-red-500 text-white px-6 py-2 rounded h-[56px]">Apply</button>
                </div>

                <div className="border rounded p-6 shadow w-[456px]">
                    <h2 className="text-lg font-bold mb-4">Cart Total</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-2">
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <Link to="/Checkout">
                        <button className="bg-red-500 text-white w-full py-3 mt-4 rounded">
                            Proceed to checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartPage
