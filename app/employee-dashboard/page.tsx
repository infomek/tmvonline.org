"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, FileText, Users, Settings, LogOut, CheckCircle } from "lucide-react"

interface EmployeeData {
  name: string
  employeeId: string
  loginTime: string
}

export default function EmployeeDashboardPage() {
  const [employeeData, setEmployeeData] = useState<EmployeeData | null>(null)
  const [currentDateTime, setCurrentDateTime] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Check if employee is logged in
    const data = localStorage.getItem("employeeData")
    if (!data) {
      router.push("/employee-login")
      return
    }

    setEmployeeData(JSON.parse(data))

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
    localStorage.removeItem("employeeData")
    router.push("/")
  }

  if (!employeeData) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
                <h1 className="text-xl font-bold text-blue-600">TMV Employee Portal</h1>
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
          <div className="lg:col-span-3">
            {/* Welcome Section */}
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-blue-600" />
                  <CardTitle>Employee Dashboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <h2 className="text-xl font-semibold text-green-600 mb-2">Welcome {employeeData.name}</h2>
                <p className="text-gray-600">Current Date & Time: {currentDateTime}</p>
                <p className="text-gray-600">Employee ID: {employeeData.employeeId}</p>
              </CardContent>
            </Card>

            {/* Employee Functions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Examination Management */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Examination Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Verify Examination Forms</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Generate Seat Numbers</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Marks Entry</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Results Management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Student Management */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-green-600" />
                    <span>Student Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Student Records</span>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Admission Verification</span>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Course Management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reports */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    <span>Reports & Analytics</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Examination Reports</span>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Student Analytics</span>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Performance Metrics</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Settings */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="w-5 h-5 text-purple-600" />
                    <span>System Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">User Management</span>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">System Configuration</span>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">Backup & Maintenance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <FileText className="w-4 h-4 mr-2" />
                    New Examination
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <Users className="w-4 h-4 mr-2" />
                    Student Search
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <Badge variant="default" className="bg-green-500">
                      Online
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Backup</span>
                    <Badge variant="default" className="bg-green-500">
                      Updated
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Server</span>
                    <Badge variant="default" className="bg-green-500">
                      Active
                    </Badge>
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
