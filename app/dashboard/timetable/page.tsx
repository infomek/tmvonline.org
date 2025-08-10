import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, AlertCircle } from "lucide-react"

export default function TimetablePage() {
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
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <span>Time Table</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 max-w-md mx-auto">
                <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-orange-700 mb-2">No Time Table Available</h2>
                <p className="text-orange-600">Next Examination Not Declare For Your Course..!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
