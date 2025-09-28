import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/about';
import ById from './pages/ById';
import Contact from './pages/contact';
import Whishlis from './pages/whishlis';
import Layout from './layout/layout';
import { useState } from 'react';
import Product from './pages/product';
import Cart from './pages/cart'
import Login from './pages/Login';
import CreateAcount from './pages/createAcount';
import Checkout from './pages/Checkout';
import Acount from './pages/Acount';

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const local = JSON.parse(localStorage.getItem('wish')) || []
  const [wish, setWish] = useState(local)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout wish={wish} setWish={setWish} />}>
          <Route index element={<Home wish={wish} setWish={setWish} />} />
          <Route path="/about" element={<About />} />
          <Route path="/ById/:id" element={<ById wish={wish} setWish={setWish}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/wishlist' element={<Whishlis wish={wish} setWish={setWish} />} />
          <Route path='/product' element={<Product wish={wish} setWish={setWish}/>} />
          <Route path='/login' element={<Login wish={wish} setWish={setWish}/>} />
          <Route path='/CreateNew' element={<CreateAcount wish={wish} setWish={setWish}/>} />
          <Route path='/Checkout' element={<Checkout wish={wish} setWish={setWish}/>} />
          <Route path='/Acount' element={<Acount wish={wish} setWish={setWish}/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>

    </div>
  )
}

export default App