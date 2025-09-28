import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { AxiosDavlat, BaseApi, GetToken, SaveToken } from "../utils/token";

export const fetchProducts = createAsyncThunk(
  'users/fetchProducts',
  async () => {
    const { data } = await axios.get(`${BaseApi}/Product/get-products`)
    return data.data
  },
)
export const GetByid = createAsyncThunk(
  'users/GetByid',
  async (id) => {
    const { data } = await axios.get(`${BaseApi}/Product/get-product-by-id?id=${id}`)
    return data.data
  },
)
export const GetCategory = createAsyncThunk(
  'users/GetCategory',
  async () => {
    const { data } = await axios.get(`${BaseApi}/Category/get-categories`)
    return data.data
  },
)
export const GetBrand = createAsyncThunk(
  'users/GetBrand',
  async () => {
    const { data } = await axios.get(`${BaseApi}/Brand/get-brands`)
    return data.data
  },
)
export const Cart = createAsyncThunk(
  'users/Cart',
  async () => {
    const { data } = await AxiosDavlat.get(`${BaseApi}/Cart/get-products-from-cart`)
    return data.data
  },
)

export const Add = createAsyncThunk(
  'users/Add',
  async (id,{dispatch}) => {
    const { data } = await AxiosDavlat.post(`${BaseApi}/Cart/add-product-to-cart?id=${id}`)
    dispatch(Cart)
    return data.data
  },
)
export const Delete = createAsyncThunk(
  'users/Add',
  async (id,{dispatch}) => {
    const { data } = await AxiosDavlat.delete(`${BaseApi}/Cart/delete-product-from-cart?id=${id}`)
    dispatch(Cart())
    return data.data
  },
)
export const ClearCard = createAsyncThunk(
  'users/ClearCard',
  async (_, thunkAPI) => {
    const { data } = await AxiosDavlat.delete(`${BaseApi}/Cart/clear-cart`)
    thunkAPI.dispatch(Cart())
    return data.data
  }
)
export const GetUser = createAsyncThunk(
  'users/GetUser',
  async (id) => {
    const { data } = await AxiosDavlat.get(`${BaseApi}/UserProfile/get-user-profile-by-id?id=${id}`)
    return data.data
  }
)
export const EditUser = createAsyncThunk(
  'users/EditUser',
   async (user) => {
    const { data } = await AxiosDavlat.put(`${BaseApi}/UserProfile/${user}`)
    return data.data
  }
) 


const initialState = {
  search:'',
  product: [],
  productByid: {},
  category: [],
  brand: [],
  cart:[],
  user:"",
  Loading: false,
  loadingProductById: false,
  LoadingCategory: false,
  LoadingBrand: false,
  LoadingCart:false,
  LoadingUser:false,
  error: null,
  errorProductById: null,
  errorCategory: null,
  errorBrand: null,
  errorCart:null,
  errorUser:null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     setSearch: (state, action) => {
      state.search = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchProducts.pending, (state) => {
        state.Loading = true
        state.error = null
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.product = action.payload
        state.Loading = false
        state.error = null
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.Loading = false
        state.error = action.error.message
      })

      .addCase(GetByid.pending, (state) => {
        state.loadingProductById = true
        state.errorProductById = null
      })
      .addCase(GetByid.fulfilled, (state, action) => {
        state.productByid = action.payload
        state.loadingProductById = false
      })
      .addCase(GetByid.rejected, (state, action) => {
        state.loadingProductById = false
        state.errorProductById = action.error.message
      })

      .addCase(GetCategory.pending, (state) => {
        state.LoadingCategory = true
        state.errorCategory = null
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        state.category = action.payload
        state.LoadingCategory = false
        state.errorCategory = null
      })
      .addCase(GetCategory.rejected, (state, action) => {
        state.LoadingCategory = false
        state.errorCategory = action.error.message
      })

      .addCase(GetBrand.pending, (state) => {
        state.LoadingBrand = true
        state.errorBrand = null
      })
      .addCase(GetBrand.fulfilled, (state, action) => {
        state.brand = action.payload
        state.LoadingCategory = false
        state.errorBrand = null
      })
      .addCase(GetBrand.rejected, (state, action) => {
        state.LoadingBrand = false
        state.errorBrand = action.error.message
      })

       .addCase(Cart.pending, (state) => {
        state.LoadingCart = true
        state.errorCart = null
      })
      .addCase(Cart.fulfilled, (state, action) => {
        state.cart = action.payload
        state.LoadingCart = false
        state.errorCart = null
      })
      .addCase(Cart.rejected, (state, action) => {
        state.LoadingCart = false
        state.errorCart = action.error.message
      })
      
      .addCase(GetUser.pending, (state) => {
        state.LoadingUser = true
        state.errorUser = null
      })
      .addCase(GetUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.LoadingUser = false
        state.errorUser = null
      })
      .addCase(GetUser.rejected, (state, action) => {
        state.LoadingUser = false
        state.errorUser = action.error.message
      })
  }

})

export const {setSearch} = counterSlice.actions

export default counterSlice.reducer