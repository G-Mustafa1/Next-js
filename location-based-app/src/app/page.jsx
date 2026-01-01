import React from 'react'
import { auth, signOut } from '../../auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Home = async () => {
  const session = await auth()

  return (
    <div>
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-20 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold">Logo</h1>

          {/* Menu */}
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer hover:text-primary">Home</li>
            <li className="cursor-pointer hover:text-primary">Profile</li>

            <li>
              {
                session ? (
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <Button type="submit" variant="destructive">
                      Sign Out
                    </Button>
                  </form>
                ) : (
                  <Link href="/login">
                    <Button variant="default">Log In</Button>
                  </Link>
                )
              }
            </li>
          </ul>
        </div>
      </nav>
      <h1 className='text-3xl text-center animate-bounce'>Find Your Friends</h1>
    </div>
  )
}

export default Home
