import SignupForm from '@/components/signup-form/SignupForm'
import React from 'react'
import { auth } from '../../../auth';
import { redirect } from 'next/navigation';

const Signup = async () => {
  const session = await auth()
  console.log("session", session);
  if (session) {
    // if (session?.user?.role === "user") redirect('/');
    if (session?.user?.role === "admin") redirect('/admin');
  }
  return (
    // <h1>Signup</h1>
    <SignupForm />
  )
}

export default Signup
