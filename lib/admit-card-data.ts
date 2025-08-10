export interface Subject {
  code: string
  name: string
  date: string
  time: string
}

export interface AdmitCardData {
  examination: string
  seatNo: string
  studentName: string
  examCenter: string
  prn: string
  course: string
  subjects: Subject[]
}

export const admitCardData: Record<string, AdmitCardData> = {
  "December-2024": {
    examination: "December-2024",
    seatNo: "044RET4003",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- Second Year",
    subjects: [
      {
        code: "BCA-142-20",
        name: "MATHEMATICS",
        date: "12/26/2024",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
  "May-2024": {
    examination: "May-2024",
    seatNo: "044RES4021",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- Second Year",
    subjects: [
      {
        code: "BCA-247-20",
        name: "LAB-OBJECT ORIENTED PROGRAMMING USING C++",
        date: "05/22/2024",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-142-20",
        name: "MATHEMATICS",
        date: "05/24/2024",
        time: "02.00 PM To 04.30 PM",
      },
      {
        code: "BCA-440-20",
        name: "JAVA PROGRAMMING",
        date: "05/28/2024",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-441-20",
        name: "PRINCIPLES & PRACTICES OF MANAGEMENT-II",
        date: "05/29/2024",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-444-20",
        name: "ADVANCED DATABASE MANAGEMENT SYSTEM",
        date: "05/30/2024",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-445-20",
        name: "ENVIRONMENTAL STUDIES",
        date: "05/31/2024",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
  "December-2023": {
    examination: "December-2023",
    seatNo: "044RES3013",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- Second Year",
    subjects: [
      {
        code: "BCA-340-20",
        name: "ADVANCED WEB DESIGNING",
        date: "12/19/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-341-20",
        name: "DATABASE MANAGEMENT SYSTEM (DBMS)",
        date: "12/20/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-342-20",
        name: "E-COMMERCE",
        date: "12/21/2023",
        time: "10.00 AM To 11.30 AM",
      },
      {
        code: "BCA-344-20",
        name: "ENTERPRISE RESOURCE PLANNING",
        date: "12/22/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-345-20",
        name: "SOFTWARE TESTING & QUALITY ASSURANCE",
        date: "12/23/2023",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
  "June-2025": {
    examination: "June-2025",
    seatNo: "044RES4004",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- Second Year",
    subjects: [
      {
        code: "BCA-440-20",
        name: "JAVA PROGRAMMING",
        date: "06/03/2025",
        time: "02.00 PM To 04.30 PM",
      },
      {
        code: "BCA-444-20",
        name: "ADVANCED DATABASE MANAGEMENT SYSTEM",
        date: "06/05/2025",
        time: "02.00 PM To 04.30 PM",
      },
      {
        code: "BCA-142-20",
        name: "MATHEMATICS",
        date: "06/12/2025",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
  "January-2023": {
    examination: "January-2023",
    seatNo: "044REF1021",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- First Year",
    subjects: [
      {
        code: "BCA-140-20",
        name: "COMPUTER FUNDAMENTALS NETWORKING",
        date: "01/03/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-141-20",
        name: "C PROGRAMMING",
        date: "01/04/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-142-20",
        name: "MATHEMATICS",
        date: "01/05/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-143-20",
        name: "ENGLISH",
        date: "01/06/2023",
        time: "10.00 AM To 11.30 AM",
      },
      {
        code: "BCA-146-20",
        name: "OPERATING SYSTEM",
        date: "01/09/2023",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
  "May-2023": {
    examination: "May-2023",
    seatNo: "044REF2018",
    studentName: "CHAVAN ASHWINKUMAR KASHINATH",
    examCenter: "001 - Tilak Maharashtra Vidyapeeth, Pune",
    prn: "04422000371",
    course: "Bachelor of Computer Applications- R- First Year",
    subjects: [
      {
        code: "BCA-240-20",
        name: "STATISTICS",
        date: "06/07/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-241-20",
        name: "COMMUNICATION SKILLS",
        date: "06/08/2023",
        time: "10.00 AM To 11.30 AM",
      },
      {
        code: "BCA-142-20",
        name: "MATHEMATICS",
        date: "06/09/2023",
        time: "02.00 PM To 04.30 PM",
      },
      {
        code: "BCA-242-20",
        name: "OBJECT ORIENTED PROGRAMMING USING C++",
        date: "06/09/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-243-20",
        name: "STRUCTURED SYSTEM ANALYSIS AND DESIGN",
        date: "06/10/2023",
        time: "10:00 AM - 12:30 PM",
      },
      {
        code: "BCA-244-20",
        name: "PRINCIPLES AND PRACTICES OF MANAGEMENT- I",
        date: "06/12/2023",
        time: "10:00 AM - 12:30 PM",
      },
    ],
  },
}
