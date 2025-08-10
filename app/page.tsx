import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
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
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <div className="text-center flex-1">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-600">Tilak Maharashtra Vidyapeeth</h1>
              <p className="text-sm text-gray-600 mt-1">
                (Declared as Deemed to be a University Under Section - 3 of UGC Act 1956 vide Notification No.
                F9-15/85-U 3 dated 24th April 1987 by the Government of India)
              </p>
              <p className="text-sm font-semibold text-blue-700 mt-1">Accredited by NAAC with "B++" Grade</p>
            </div>
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmvlogo-oUqkRVW3nXxREA2BVzQsP1i7zP8G8K.png"
                alt="University Seal"
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Important Notices */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-semibold">Important Notices</h2>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg mx-4 mt-4 p-4">
        <p className="text-sm text-blue-800">
          Student please{" "}
          <Link href="#" className="text-blue-600 underline">
            click here
          </Link>{" "}
          for Summer 2024 Theory Examination Schedule.
        </p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Please choose from the following services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Hall Ticket Download */}
          <Card className="bg-gradient-to-br from-yellow-100 to-orange-200 border-orange-300 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-orange-400 text-white rounded-t-lg">
              <CardTitle className="text-center">Hall Ticket Download</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm mb-4">1. Click to Download Hall Ticket for 2023-24 examination.</p>
            </CardContent>
          </Card>

          {/* Online Theory Examination */}
          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-center text-sm">
                Online Theory Examination Session (Internal/External)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm mb-2">
                This section provides link to students for attempting online examinations for various programs for A.Y
                2021-2024
              </p>
              <p className="text-sm">
                1. Student please{" "}
                <a
                  href="https://tmvonline.org/onlexam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  click here
                </a>{" "}
                to register and give online exam (Internal)- Examination 2023-24.
              </p>
            </CardContent>
          </Card>

          {/* Online Admission Section */}
          <Card className="bg-gradient-to-br from-teal-100 to-teal-200 border-teal-300 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-center">Online Admission Section</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm mb-4 text-red-600">
                Use of this section:- This section is used for taking admission online in TMV.
              </p>
              <p className="text-sm mb-2">
                1.{" "}
                <a
                  href="https://tmv.academydesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Link 1
                </a>{" "}
                <a
                  href="https://tmv.academydesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Link 2
                </a>{" "}
                to take admission directly in TMV, in regular courses.
              </p>
              <p className="text-sm">
                2. Information center should{" "}
                <Link href="#" className="text-blue-600 underline">
                  Link1
                </Link>{" "}
                <Link href="#" className="text-blue-600 underline">
                  Link2
                </Link>{" "}
                to register their students in TMV for external courses.
              </p>
            </CardContent>
          </Card>

          {/* Exam Application Portal */}
          <Card className="bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-400 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-yellow-600 text-white rounded-t-lg">
              <CardTitle className="text-center">Exam Application Portal (Regular Student)</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-sm mb-4">
                This section provides links for applying for Examination forms, backlog forms, Revaluation Forms,
                download hall ticket etc.
              </p>
              <p className="text-sm mb-2">Note: Applicable to students registered since academic year 2018-2019</p>
              <div className="space-y-2 text-sm">
                <p>1. Student Login :</p>
                <p className="ml-4">
                  Click on{" "}
                  <Link href="/student-login" className="text-blue-600 underline font-semibold">
                    Link1
                  </Link>{" "}
                  <Link href="/student-login" className="text-blue-600 underline font-semibold">
                    Link2
                  </Link>{" "}
                  for applying for examination form.
                </p>
                <p>2. TMV Employee Login:</p>
                <p className="ml-4">
                  Click on{" "}
                  <Link href="/employee-login" className="text-blue-600 underline">
                    Link1
                  </Link>{" "}
                  <Link href="/employee-login" className="text-blue-600 underline">
                    Link2
                  </Link>{" "}
                  for verification of examination forms, Generation of Seat Number, Marks Entry and Results.
                </p>
                <p>
                  3.{" "}
                  <a
                    href="https://tmvonline.org/onlexam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Click Here for Student Exam Portal Manual
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
