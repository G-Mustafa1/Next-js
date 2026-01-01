import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { googleAuth } from '@/app/actions/googleAuth'

const GoogleAuthButton = () => {
    return (
        <form action={googleAuth}
        >
            <Button type="submit"
                variant="outline"
                className="w-full flex gap-2">
                <FcGoogle />
                Signin with Google</Button>
        </form>

    )
}

export default GoogleAuthButton
