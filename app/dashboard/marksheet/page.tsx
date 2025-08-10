"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Download, FileText, AlertCircle } from "lucide-react"
import { marksheetData } from "@/lib/marksheet-data"
import { generateMarksheetPDF } from "@/lib/marksheet-pdf-generator"

export default function MarksheetPage() {
  const [selectedYear, setSelectedYear] = useState("")

  const examYears = ["December-2024", "May-2024", "May-2023", "December-2023", "June-2025", "January-2023"]

  const handleDownload = () => {
    if (selectedYear && marksheetData[selectedYear]) {
      const sheetData = marksheetData[selectedYear]
      generateMarksheetPDF(sheetData)

      // Add activity log
      const currentTime = new Date().toLocaleString()
      console.log(`Activity: Downloaded Marksheet for ${selectedYear} at ${currentTime}`)
    } else if (selectedYear) {
      // Show message for unavailable marksheet
      return
    } else {
      alert("Please select an examination year")
    }
  }

  const selectedMarksheetData = selectedYear ? marksheetData[selectedYear] : null
  const isMarksheetAvailable = selectedYear ? !!marksheetData[selectedYear] : true

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>Marksheet Download</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Examination Year</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {examYears.map((year) => (
                      <SelectItem key={year} value={year}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedYear && !isMarksheetAvailable && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-red-700">
                    Marksheet is not recorded. Contact to{" "}
                    <a href="mailto:tmvexam@tmv.edu.in" className="text-blue-600 underline">
                      tmvexam@tmv.edu.in
                    </a>
                  </AlertDescription>
                </Alert>
              )}

              {selectedMarksheetData && (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">Marksheet Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-semibold">Examination:</span>
                          <p className="text-xs">{selectedMarksheetData.examination}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Seat No:</span>
                          <p>{selectedMarksheetData.seatNo}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Student Name:</span>
                          <p>{selectedMarksheetData.studentName}</p>
                        </div>
                        <div>
                          <span className="font-semibold">PRN:</span>
                          <p>{selectedMarksheetData.prn}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Result Date:</span>
                          <p>{selectedMarksheetData.resultDate}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Gender:</span>
                          <p>{selectedMarksheetData.gender}</p>
                        </div>
                      </div>

                      {selectedMarksheetData.cgpa && (
                        <div className="bg-white p-3 rounded border">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-semibold">CGPA:</span>
                              <span className="ml-2 text-lg font-bold text-green-600">
                                {selectedMarksheetData.cgpa}
                              </span>
                            </div>
                            <div>
                              <span className="font-semibold">Final Grade:</span>
                              <span className="ml-2 text-lg font-bold text-green-600">
                                {selectedMarksheetData.finalGrade} ({selectedMarksheetData.percentage}%)
                              </span>
                            </div>
                          </div>
                          {selectedMarksheetData.totalMarks && (
                            <div className="mt-2">
                              <span className="font-semibold">Total Marks:</span>
                              <span className="ml-2">
                                {selectedMarksheetData.totalObtained}/{selectedMarksheetData.totalMarks}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <div>
                        <span className="font-semibold">Semesters ({selectedMarksheetData.semesters.length}):</span>
                        <div className="mt-2 space-y-2">
                          {selectedMarksheetData.semesters.map((semester, index) => (
                            <div key={index} className="bg-white p-2 rounded border">
                              <div className="font-medium text-blue-700">{semester.semester}</div>
                              <div className="text-xs text-gray-600 mt-1">
                                {semester.subjects.length} subjects
                                {semester.sgpa && <span className="ml-2 font-semibold">SGPA: {semester.sgpa}</span>}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button onClick={handleDownload} disabled={!selectedYear || !isMarksheetAvailable} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Marksheet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
