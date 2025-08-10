export interface SubjectResult {
  code: string
  name: string
  outOf: number
  internal: number
  semester: number
  total: number
  credits: number
  marksObtained: {
    internal: number
    semester: number
    total: number
  }
  grade: string
  gradePoints: number
  gpa: number
}

export interface SemesterResult {
  semester: string
  subjects: SubjectResult[]
  sgpa?: number
}

export interface MarksheetData {
  examination: string
  seatNo: string
  studentName: string
  gender: string
  prn: string
  examCenter: string
  course: string
  resultDate: string
  semesters: SemesterResult[]
  totalMarks?: number
  totalObtained?: number
  cgpa?: number
  finalGrade?: string
  percentage?: number
}

export const marksheetData: Record<string, MarksheetData> = {
  "June-2025": {
    examination: "BACHELOR OF COMPUTER APPLICATIONS- R- THIRD YEAR EXAMINATION JUNE-2025",
    seatNo: "044RES4004",
    studentName: "ASHWINKUMAR KASHINATH CHAVAN",
    gender: "M",
    prn: "04422000371",
    examCenter: "001 TILAK MAHARASHTRA VIDYAPEETH, PUNE",
    course: "Bachelor of Computer Applications- R- Third Year",
    resultDate: "08/08/2025",
    totalMarks: 3000,
    totalObtained: 1879,
    cgpa: 6.53,
    finalGrade: "A",
    percentage: 62.63,
    semesters: [
      {
        semester: "SEMESTER I",
        subjects: [
          {
            code: "BCA-140-20",
            name: "COMPUTER FUNDAMENTALS NETWORKING",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 27, semester: 24, total: 51 },
            grade: "B",
            gradePoints: 5,
            gpa: 20,
          },
          {
            code: "BCA-141-20",
            name: "C PROGRAMMING",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 20, semester: 38, total: 58 },
            grade: "B+",
            gradePoints: 6,
            gpa: 24,
          },
          {
            code: "BCA-142-20",
            name: "MATHEMATICS",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 25, semester: 49, total: 74 },
            grade: "A+",
            gradePoints: 8,
            gpa: 32,
          },
          {
            code: "BCA-143-20",
            name: "ENGLISH",
            outOf: 50,
            internal: 20,
            semester: 30,
            total: 50,
            credits: 2,
            marksObtained: { internal: 11, semester: 22, total: 33 },
            grade: "A",
            gradePoints: 7,
            gpa: 14,
          },
          {
            code: "BCA-146-20",
            name: "OPERATING SYSTEM",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 22, semester: 24, total: 46 },
            grade: "C",
            gradePoints: 4,
            gpa: 16,
          },
          {
            code: "BCA-147-20",
            name: "LAB- C - PROGRAMMING",
            outOf: 50,
            internal: 20,
            semester: 30,
            total: 50,
            credits: 2,
            marksObtained: { internal: 20, semester: 30, total: 50 },
            grade: "O+",
            gradePoints: 10,
            gpa: 20,
          },
        ],
        sgpa: 6.3,
      },
      {
        semester: "SEMESTER II",
        subjects: [
          {
            code: "BCA-240-20",
            name: "STATISTICS",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 31, semester: 34, total: 65 },
            grade: "A",
            gradePoints: 7,
            gpa: 28,
          },
          {
            code: "BCA-241-20",
            name: "COMMUNICATION SKILLS",
            outOf: 50,
            internal: 20,
            semester: 30,
            total: 50,
            credits: 2,
            marksObtained: { internal: 13, semester: 25, total: 38 },
            grade: "A+",
            gradePoints: 8,
            gpa: 16,
          },
          {
            code: "BCA-242-20",
            name: "OBJECT ORIENTED PROGRAMMING USING C++",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 35, semester: 52, total: 87 },
            grade: "O",
            gradePoints: 9,
            gpa: 36,
          },
          {
            code: "BCA-243-20",
            name: "STRUCTURED SYSTEM ANALYSIS AND DESIGN",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 36, semester: 26, total: 62 },
            grade: "A",
            gradePoints: 7,
            gpa: 28,
          },
          {
            code: "BCA-244-20",
            name: "PRINCIPLES AND PRACTICES OF MANAGEMENT- I",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 32, semester: 31, total: 63 },
            grade: "A",
            gradePoints: 7,
            gpa: 28,
          },
          {
            code: "BCA-247-20",
            name: "LAB-OBJECT ORIENTED PROGRAMMING USING C++",
            outOf: 50,
            internal: 20,
            semester: 30,
            total: 50,
            credits: 2,
            marksObtained: { internal: 20, semester: 12, total: 32 },
            grade: "A",
            gradePoints: 7,
            gpa: 14,
          },
        ],
        sgpa: 7.5,
      },
      // Additional semesters would be added here...
    ],
  },
  "December-2024": {
    examination: "BACHELOR OF COMPUTER APPLICATIONS- R- THIRD YEAR EXAMINATION DECEMBER-2024",
    seatNo: "044RET4003",
    studentName: "ASHWINKUMAR KASHINATH CHAVAN",
    gender: "M",
    prn: "04422000371",
    examCenter: "001 TILAK MAHARASHTRA VIDYAPEETH, PUNE",
    course: "Bachelor of Computer Applications- R- Third Year",
    resultDate: "27/01/2025",
    semesters: [
      {
        semester: "SEMESTER I",
        subjects: [
          {
            code: "BCA-140-20",
            name: "COMPUTER FUNDAMENTALS NETWORKING",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 27, semester: 24, total: 51 },
            grade: "B",
            gradePoints: 5,
            gpa: 20,
          },
          {
            code: "BCA-141-20",
            name: "C PROGRAMMING",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 20, semester: 38, total: 58 },
            grade: "B+",
            gradePoints: 6,
            gpa: 24,
          },
          {
            code: "BCA-142-20",
            name: "MATHEMATICS",
            outOf: 100,
            internal: 40,
            semester: 60,
            total: 100,
            credits: 4,
            marksObtained: { internal: 25, semester: 0, total: 74 },
            grade: "F",
            gradePoints: 8,
            gpa: 32,
          },
        ],
      },
    ],
  },
}
