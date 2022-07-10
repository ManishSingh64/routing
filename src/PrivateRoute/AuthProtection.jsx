import React from 'react'
import { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const AuthProtection = ({children}) => {
    const {state} = useContext(AuthContext)
    const navigate = useNavigate();

   if(!state.isAuth) return <Navigate to='/login'/>
  return (
    <div>{children}</div>
  )
}
