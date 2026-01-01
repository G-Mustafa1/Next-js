import LoginForm from '@/components/LoginForm/LoginForm'
import React from 'react'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'

const Login = async () => {
  const session = await auth()
  console.log("session", session);
  if(session){
    if(session?.user?.role === "user") redirect('/');
    if(session?.user?.role === "admin") redirect('/admin');
  }
  return (
    // <h1>Login</h1>
    <LoginForm />
  )
}

export default Login
