import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, Cart } from '../reduser/counterSlice'


function Checkout() {
    const { cart } = useSelector((state) => state.counter)
    const dispatch = useDispatch()


    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const productsInCart = cart.length > 0 ? cart[0]?.productsInCart || [] : []


    const subtotal = productsInCart.reduce((sum, e) => {
        const qty = e.quantity || 1
        return sum + e.product.price * qty
    }, 0)
    useEffect(() => {
        dispatch(Cart())
    },[] )

    return (
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
                <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
                <form className="space-y-4">
                    <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="w-full border px-4 py-2 rounded" />
                    <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="w-full border px-4 py-2 rounded" />
                    <input name="address" value={form.address} onChange={handleChange} placeholder="Street address" className="w-full border px-4 py-2 rounded" />
                    <input name="city" value={form.city} onChange={handleChange} placeholder="Town/City" className="w-full border px-4 py-2 rounded" />
                    <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="w-full border px-4 py-2 rounded" />
                    <input name="zip" value={form.zip} onChange={handleChange} placeholder="Postcode / ZIP" className="w-full border px-4 py-2 rounded" />
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full border px-4 py-2 rounded" />
                    <input name="email" value={form.email} onChange={handleChange} placeholder="Email address" className="w-full border px-4 py-2 rounded" />
                    <div className="flex items-center gap-2">
                        <input type="checkbox" id="save" />
                        <label htmlFor="save" className="text-sm">Save this information for faster check-out next time</label>
                    </div>
                </form>
            </div>

            <div className="border rounded p-6 shadow">
                <h2 className="text-2xl font-bold mb-6">Your Order</h2>
                <div className="space-y-3">
                    {productsInCart.map((e) => (
                        <div key={e.id} className="flex justify-between">
                            <img src={`http://37.27.29.18:8002/images/${e.product.image}`} className="w-12 h-12" alt="" />
                            <span>{e.product.productName} x{e.quantity || 1}</span>
                            <span>${(e.product.price * (e.quantity || 1)).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-4">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                        <input type="radio" name="payment" id="bank" defaultChecked />
                        <label htmlFor="bank">Bank Transfer</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="payment" id="cod" />
                        <label htmlFor="cod">Cash on Delivery</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" name="payment" id="card" />
                        <label htmlFor="card">Credit/Debit Card</label>
                    </div>
                </div>

                <div className="flex gap-2 mt-6">
                    <input placeholder="Coupon Code" className="border rounded px-4 py-2 w-full" />
                    <button className="bg-red-500 text-white px-6 py-2 rounded">Apply</button>
                </div>

                <button className="bg-red-500 text-white w-full py-3 mt-6 rounded">
                    Place Order
                </button>
            </div>
        </div>
    )
}

export default Checkout
