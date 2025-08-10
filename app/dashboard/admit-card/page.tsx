"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { admitCardData } from "@/lib/admit-card-data"
import { generateAdmitCardPDF } from "@/lib/pdf-generator"

export default function AdmitCardPage() {
  const [selectedYear, setSelectedYear] = useState("")

  const examYears = ["December-2024", "May-2024", "May-2023", "December-2023", "June-2025", "January-2023"]

  const handleDownload = () => {
    if (selectedYear && admitCardData[selectedYear]) {
      const cardData = admitCardData[selectedYear]
      generateAdmitCardPDF(cardData)

      // Add activity log (in a real app, this would be sent to backend)
      const currentTime = new Date().toLocaleString()
      console.log(`Activity: Downloaded Admit Card for ${selectedYear} at ${currentTime}`)
    } else {
      alert("Please select a valid examination year")
    }
  }

  const selectedCardData = selectedYear ? admitCardData[selectedYear] : null

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
              <span>Admit Card Download</span>
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

              {selectedCardData && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-800">Admit Card Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="font-semibold">Examination:</span>
                          <p>{selectedCardData.examination}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Seat No:</span>
                          <p>{selectedCardData.seatNo}</p>
                        </div>
                        <div>
                          <span className="font-semibold">Student Name:</span>
                          <p>{selectedCardData.studentName}</p>
                        </div>
                        <div>
                          <span className="font-semibold">PRN:</span>
                          <p>{selectedCardData.prn}</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold">Course:</span>
                        <p>{selectedCardData.course}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Exam Center:</span>
                        <p>{selectedCardData.examCenter}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Subjects ({selectedCardData.subjects.length}):</span>
                        <div className="mt-2 space-y-1">
                          {selectedCardData.subjects.map((subject, index) => (
                            <div key={index} className="bg-white p-2 rounded border">
                              <div className="font-medium">
                                {subject.code} - {subject.name}
                              </div>
                              <div className="text-xs text-gray-600">
                                {subject.date} {subject.time}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <Button onClick={handleDownload} disabled={!selectedYear} className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Download Admit Card
              </Button>

              {selectedYear && !selectedCardData && (
                <div className="text-center text-red-600 text-sm">
                  No admit card available for the selected examination year.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
