"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronRight, Home, FileText, Clock, RotateCcw, Plane, LogOut } from "lucide-react"

interface StudentData {
  name: string
  prn: string
  loginTime: string
}

export default function DashboardPage() {
  const [studentData, setStudentData] = useState<StudentData | null>(null)
  const [currentDateTime, setCurrentDateTime] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const data = localStorage.getItem("studentData")
    if (!data) {
      router.push("/student-login")
      return
    }

    setStudentData(JSON.parse(data))

    // Update current date and time
    const updateDateTime = () => {
      const now = new Date()
      setCurrentDateTime(now.toLocaleString())
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("studentData")
    router.push("/")
  }

  if (!studentData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip Navigation Links */}
      <div className="bg-blue-600 text-white py-1">
        <div className="container mx-auto px-4">
          <Link href="#main-content" className="text-xs hover:underline">
            Skip Navigation Links
          </Link>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png"
                alt="TMV Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-blue-600">TMV Student Portal</h1>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3" id="main-content">
            {/* Welcome Section */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  <CardTitle>Home</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-semibold text-green-600 mb-2">Welcome {studentData.name}</h2>
                <p className="text-gray-600">Current Date & Time: {currentDateTime}</p>
              </CardContent>
            </Card>

            {/* Current Activities */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Current Activities</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">1/10/2025 09:15:00 AM</span>
                      </div>
                      <span className="text-sm text-gray-600">1/10/2025 09:15:00 AM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Downloaded Admit Card for December-2024 Examination</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">1/8/2025 02:30:00 PM</span>
                      </div>
                      <span className="text-sm text-gray-600">1/8/2025 02:30:00 PM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Viewed Examination Form Status</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">1/5/2025 11:45:00 AM</span>
                      </div>
                      <span className="text-sm text-gray-600">1/5/2025 11:45:00 AM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Downloaded Marksheet for May-2024 Examination</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">12/28/2024 04:20:00 PM</span>
                      </div>
                      <span className="text-sm text-gray-600">12/28/2024 04:20:00 PM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Applied for Revaluation - Database Management System</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">12/15/2024 10:30:00 AM</span>
                      </div>
                      <span className="text-sm text-gray-600">12/15/2024 10:30:00 AM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Submitted Examination Form for December-2024</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">8/5/2025 12:11:00 PM</span>
                      </div>
                      <span className="text-sm text-gray-600">8/5/2025 12:11:00 PM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Login In System with the OTP - ashwin1245</p>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-sm">8/5/2025 11:44:43 AM</span>
                      </div>
                      <span className="text-sm text-gray-600">8/5/2025 11:44:43 AM</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-3 bg-blue-50 rounded-b-lg">
                      <p className="text-sm">Login In System with the OTP - ashwin1245</p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Examination */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Examination</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Link
                      href="/dashboard/examination-form"
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-sm font-medium">Examination Form</span>
                    </Link>
                    <Link
                      href="/dashboard/backlog-form"
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-sm font-medium">Backlog Form</span>
                    </Link>
                    <Link
                      href="/dashboard/admit-card"
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-sm font-medium">Admit Card</span>
                    </Link>
                    <Link
                      href="/dashboard/marksheet"
                      className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="text-sm font-medium">Marksheet</span>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Time Table */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span>Time Table</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/dashboard/timetable"
                    className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <span className="text-sm font-medium">View Time Table</span>
                  </Link>
                </CardContent>
              </Card>

              {/* Revaluation */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <RotateCcw className="w-5 h-5 text-orange-600" />
                    <span>Revaluation</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href="/dashboard/revaluation"
                    className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                  >
                    <span className="text-sm font-medium">Application For Verification Of Marks</span>
                  </Link>
                </CardContent>
              </Card>

              {/* Migration */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Plane className="w-5 h-5 text-purple-600" />
                    <span>Migration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-purple-700">I will Declare soon</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar - Removed Quick Links, Updated Latest Updates */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="text-xs font-semibold text-red-700 mb-1">Aug 08, 2025</div>
                    <p className="text-xs text-gray-700">Result of the Backlog paper examination has been declared</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      New
                    </Badge>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-xs font-semibold text-blue-700 mb-1">Aug 01, 2025</div>
                    <p className="text-xs text-gray-700">New admission process guidelines</p>
                  </div>
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="text-xs font-semibold text-green-700 mb-1">July 27, 2025</div>
                    <p className="text-xs text-gray-700">Result of the examination has been declared</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
