"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import GoogleAuthButton from "../GoogleAuthButton/GoogleAuthButton";
import Link from "next/link";

export default function SignupForm() {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 1500);
    };


    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <Card className="w-full max-w-md shadow-xl rounded-2xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">
                        Create Account
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Sign up to get started
                    </p>
                </CardHeader>

                <CardContent>
                    {/* Google Signup */}
                    <GoogleAuthButton />

                    <div className="relative my-4">
                        <Separator />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs text-muted-foreground">
                            OR
                        </span>
                    </div>

                    {/* Signup Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label>Full Name</Label>
                            <Input placeholder="Enter your name" required />
                        </div>

                        <div>
                            <Label>Email</Label>
                            <Input type="email" placeholder="Enter your email" required />
                        </div>

                        <div>
                            <Label>Password</Label>
                            <Input type="password" placeholder="Create password" required />
                        </div>

                        <Button
                            type="submit"
                            className="w-full rounded-xl"
                            disabled={loading}
                        >
                            {loading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="text-center text-sm mt-4 text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
