import React from 'react'
import { useDispatch } from 'react-redux'
import {logout} from "../../../services/operations/authApi";
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler =  () => {
      dispatch(logout(navigate));
  }
  return (
    <div>
      <button onClick={logoutHandler}>
        Logout
      </button>
    </div>
  )
}

export default ProfileDropDown