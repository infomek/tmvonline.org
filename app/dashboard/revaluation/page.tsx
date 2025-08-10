import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileCheck } from "lucide-react"

export default function RevaluationPage() {
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
              <FileCheck className="w-5 h-5 text-blue-600" />
              <span>Application For Verification Of Marks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-4">Course Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">CENTER:</span>
                    <p className="text-gray-700">Tilak Maharashtra Vidyapeeth, Pune</p>
                  </div>
                  <div>
                    <span className="font-medium">EXAM CENTER:</span>
                    <p className="text-gray-700">Tilak Maharashtra Vidyapeeth, Pune</p>
                  </div>
                  <div>
                    <span className="font-medium">COURSE:</span>
                    <p className="text-gray-700">Bachelor of Computer Applications- R- Third Year</p>
                  </div>
                  <div>
                    <span className="font-medium">ACADEMIC YEAR:</span>
                    <p className="text-gray-700">June 2023 - May 2024</p>
                  </div>
                  <div>
                    <span className="font-medium">BATCH YEAR:</span>
                    <p className="text-gray-700">June 2022 - May 2023</p>
                  </div>
                  <div>
                    <span className="font-medium">STATUS:</span>
                    <p className="text-gray-700">Regular</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-blue-600 hover:bg-blue-700">Submit Application</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
