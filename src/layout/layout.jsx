import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Group1222 from '../assets/Group1222.png'
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Footer from '../pages/Footer';
import { GetToken } from '../utils/token';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../reduser/counterSlice';


function Layout({ wish }) {
    const dispatch = useDispatch();
  const { search } = useSelector(state => state.counter);


  return (
    <div>
      <div className="flex p-[20px]">
        <div className='flex items-center justify-around w-[700px]'>
          <Link to='/'>
            <img src={Group1222} alt="" />
          </Link>
          <div>
            <Link className='pr-[20px]' to="/">Home</Link>
            <Link className='pr-[20px]' to="/contact">Contact</Link>
            <Link className='pr-[20px]' to="/about">About</Link>
            <Link className='pr-[20px]' to="/product">Product </Link>
          </div>
        </div>

        <div className='flex items-center justify-around w-[700px] '>
          <div className='flex items-center gap-[30px]'>
            <div className='flex'>
              <input
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                placeholder="Поиск"
              />
              <SearchIcon
                onClick={() => Search(_, search)}
                fontSize='large'
                sx={{ backgroundColor: "#F5F5F5", borderTopRightRadius: "5px", borderBottomRightRadius: '5px' }}
              />
            </div>

            <Link to='/wishlist' className='md:none'>
              <FavoriteBorderIcon fontSize='medium' />
            </Link>
            <Link to='/cart'>
              <ShoppingCartIcon fontSize='medium' />
            </Link>
            {
              !GetToken() ? (
                <Link to={"/login"}>
                  <button >Log in</button>
                </Link>
              ) : <Dropdown>
                <MenuButton sx={{ border: "none", minWidth: "auto", marginRight: "20px" }}>
                  <PermIdentityIcon />
                </MenuButton>
                <Menu
                  slotProps={{
                    listbox: {
                      sx: {
                        backgroundColor: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        borderRadius: "8px",
                      },
                    },
                  }}
                >

                  <MenuItem>
                    <Link to="/Acount">
                      Account
                    </Link>
                  </MenuItem>
                  <MenuItem>My Order</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </Dropdown>
            }
          </div>
        </div>
      </div>

      <div className='p-[20px]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
