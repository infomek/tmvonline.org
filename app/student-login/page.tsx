"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function StudentLoginPage() {
  const [prn, setPrn] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (prn === "04422000371" && password === "ashwin1245") {
      // Store user data in localStorage for demo purposes
      localStorage.setItem(
        "studentData",
        JSON.stringify({
          name: "CHAVAN ASHWINKUMAR KASHINATH",
          prn: prn,
          loginTime: new Date().toISOString(),
        }),
      )
      router.push("/dashboard")
    } else {
      setError("Invalid PRN or Password. Please try again.")
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg1-GHzYrsjV72prXkjmK5eTANDoacjMAH.png')`,
      }}
    >
      <div className="w-full max-w-md p-6">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png"
                alt="TMV Logo"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-blue-600">Student Login</CardTitle>
              <CardDescription className="text-gray-600 mt-2">Tilak Maharashtra Vidyapeeth</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="prn">PRN</Label>
                <Input
                  id="prn"
                  type="text"
                  placeholder="Enter your PRN"
                  value={prn}
                  onChange={(e) => setPrn(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
            </form>

            <div className="mt-6 space-y-3 text-center">
              <div className="flex justify-center space-x-4 text-sm">
                <Link href="/forgot-password" className="text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <div>
                <Link href="#" className="text-blue-600 hover:underline text-sm">
                  Student User Manual
                </Link>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Note:</strong> Email should contain following Subject: Problem statement with from name. Detail
                mail: PRN and Detail query/issue and screenshot must be there.
              </p>
              <p className="text-xs text-blue-600 mt-2">
                <strong>Our Email:</strong> tmvexam@tmv.edu.in
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
