import React, { useEffect } from "react";
import { jwtDecode } from 'jwt-decode'
import { useSelector, useDispatch } from 'react-redux'
import { EditUser, GetUser } from '../reduser/counterSlice'

const MyAccount = () => {
  const { user } = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  let token = localStorage.getItem("accessToken")
  console.log(jwtDecode(token));

  let { sid } = jwtDecode(token)


  async function Put(event) {
    event.preventDefault
    let fordata = new FormData()
    fordata.append("Image", event.target.file[0])
    fordata.append("FirstName", event.target.file[0])
    fordata.append("LastName", event.target.file[0])
    fordata.append("Email", event.target.file[0])
    fordata.append("PhoneNumber", event.target.file[0])
    fordata.append("Dob", event.target.file[0])
    EditUser(fordata)
  }



  useEffect(() => {
    dispatch(GetUser(sid))
  }, [])
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Account</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-2 border-r pr-4">
          <p className="font-semibold">Manage My Account</p>
          <ul className="space-y-1 text-gray-600">
            <li>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>

          <p className="font-semibold pt-4">My Orders</p>
          <ul className="space-y-1 text-gray-600">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>

          <p className="font-semibold pt-4">My Wishlist</p>
        </div>

        <div className="space-y-4">
          <form onSubmit={(e) => Put(e)} action="" className="space-y-4">

            <h3 className="text-lg font-semibold">Profile</h3>
            <input name="image" type="File" />

            <input
              type="text"
              placeholder="First name"
              defaultValue={user.userName}
              name="Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last name"
              defaultValue={user.lastName}
              name="lastName"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email address"
              name="Email"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number"
              defaultValue={user.phoneNumber}
              name="Phone"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Dob"
              defaultValue={user.dob}
              name="Dob"
              className="w-full border p-2 rounded"
            />

            <h3 className="text-lg font-semibold pt-4">Password Changes</h3>
            <input
              type="password"

              placeholder="Current password"
              className="w-full border p-2 rounded"
            />

            <div className="flex gap-4">
              <button className="bg-gray-200 px-4 py-2 rounded">Cancel</button>
              <button className="bg-red-500 text-white px-4 py-2 rounded" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
