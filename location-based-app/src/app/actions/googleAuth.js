"use server"

import { signIn } from "../../../auth"

export async function googleAuth() {
    await signIn("google")
}