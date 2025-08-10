"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [prn, setPrn] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
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
              <CardTitle className="text-2xl font-bold text-blue-600">Forgot Password</CardTitle>
              <CardDescription className="text-gray-600 mt-2">Tilak Maharashtra Vidyapeeth</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Reset Instructions
                </Button>
              </form>
            ) : (
              <Alert className="border-green-200 bg-green-50">
                <Mail className="h-4 w-4" />
                <AlertDescription className="text-green-700">
                  Password reset instructions have been sent to your registered email address. Please check your inbox
                  and follow the instructions to reset your password.
                </AlertDescription>
              </Alert>
            )}

            <div className="mt-6 text-center">
              <Link href="/student-login" className="inline-flex items-center text-blue-600 hover:underline text-sm">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Login
              </Link>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-gray-700">
                <strong>Note:</strong> If you don't receive the email within 10 minutes, please check your spam folder
                or contact support.
              </p>
              <p className="text-xs text-blue-600 mt-2">
                <strong>Support Email:</strong> tmvexam@tmv.edu.in
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
