import type { MarksheetData } from "./marksheet-data"

export function generateMarksheetPDF(data: MarksheetData): void {
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to download the marksheet")
    return
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Marksheet - ${data.examination}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 10px;
          line-height: 1.2;
          font-size: 12px;
        }
        .header {
          text-align: center;
          margin-bottom: 15px;
        }
        .university-name {
          font-size: 18px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 10px;
        }
        .exam-title {
          font-size: 14px;
          font-weight: bold;
          margin: 10px 0;
        }
        .student-info {
          display: flex;
          justify-content: space-between;
          margin: 15px 0;
          font-size: 11px;
        }
        .info-section {
          flex: 1;
        }
        .marks-table {
          width: 100%;
          border-collapse: collapse;
          margin: 10px 0;
          font-size: 10px;
        }
        .marks-table th,
        .marks-table td {
          border: 1px solid #000;
          padding: 3px;
          text-align: center;
        }
        .marks-table th {
          background-color: #f0f0f0;
          font-weight: bold;
          font-size: 9px;
        }
        .semester-header {
          background-color: #e0e0e0;
          font-weight: bold;
          text-align: left;
          padding: 5px;
        }
        .subject-row td {
          text-align: left;
        }
        .subject-row td:first-child {
          width: 80px;
        }
        .subject-row td:nth-child(2) {
          width: 200px;
        }
        .grade-info {
          font-size: 9px;
          margin: 10px 0;
          line-height: 1.3;
        }
        .final-result {
          margin: 15px 0;
          font-weight: bold;
          text-align: center;
        }
        .disclaimer {
          font-size: 9px;
          margin-top: 20px;
          font-style: italic;
        }
        @media print {
          body { margin: 0; font-size: 10px; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="university-name">TILAK MAHARASHTRA VIDYAPEETH, PUNE</div>
        <div class="exam-title">${data.examination}</div>
      </div>

      <div class="student-info">
        <div class="info-section">
          <div><strong>SEAT NO:</strong> ${data.seatNo}</div>
          <div><strong>NAME OF CANDIDATE:</strong> ${data.studentName}</div>
          <div><strong>GENDER:</strong> ${data.gender}</div>
        </div>
        <div class="info-section">
          <div><strong>PRN:</strong> ${data.prn}</div>
          <div><strong>Result Date:</strong> ${data.resultDate}</div>
        </div>
      </div>

      <div class="grade-info">
        <div><strong>* = Appearing / A - Absent / F - Fail / Passing : 40% in each head of passing</strong></div>
        <div><strong>[FINAL GRADE POINT: 9.00-10.0 "O+" 8.00-8.99 "O" 7.00-7.99 "A+" 6.00-6.99 "A" 5.50-5.99 "B+" 5.00-5.49 "B" 4.50-4.99 "C" 4.00-4.49 "D" 0.00-3.99 "F"]</strong></div>
        <div><strong>[COURSE GRADE POINT:90-100%"O+"10/80-89.99%"O"9/70-79.99%"A+"8/60-69.99%"A"7/55-59.99%"B+"6/50-54.99%"B"5/45-49.99%"C"4/40-44.99%"P"3/0-39.99%"F"0/]</strong></div>
      </div>

      <table class="marks-table">
        <thead>
          <tr>
            <th>SUB CODE</th>
            <th>SUB NAME</th>
            <th colspan="4">--OUT OF--</th>
            <th>CREDITS</th>
            <th colspan="4">--MARKS OBT--</th>
            <th>GRADE</th>
            <th>GRADE POINTS</th>
            <th>GPA</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>INT</th>
            <th>SEM</th>
            <th>END</th>
            <th>TOT</th>
            <th>CRS</th>
            <th>INT</th>
            <th>SEM</th>
            <th>END</th>
            <th>TOT</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${data.semesters
            .map(
              (semester) => `
            <tr class="semester-header">
              <td colspan="13">${semester.semester}</td>
            </tr>
            ${semester.subjects
              .map(
                (subject) => `
              <tr class="subject-row">
                <td>${subject.code}</td>
                <td>${subject.name}</td>
                <td>${subject.internal}</td>
                <td>${subject.semester}</td>
                <td>${subject.outOf}</td>
                <td>${subject.total}</td>
                <td>${subject.credits}</td>
                <td>${subject.marksObtained.internal}</td>
                <td>${subject.marksObtained.semester}</td>
                <td>${subject.marksObtained.total}</td>
                <td>${subject.marksObtained.total}</td>
                <td>${subject.grade}</td>
                <td>${subject.gradePoints}</td>
                <td>${subject.gpa}</td>
              </tr>
            `,
              )
              .join("")}
          `,
            )
            .join("")}
        </tbody>
      </table>

      ${
        data.cgpa
          ? `
        <div class="final-result">
          <div><strong>CGPA: ${data.cgpa}</strong></div>
          <div><strong>FINAL GRADE: ${data.finalGrade} (${data.percentage}%)</strong></div>
          ${data.totalMarks ? `<div><strong>Total Marks: ${data.totalObtained}/${data.totalMarks}</strong></div>` : ""}
        </div>
      `
          : ""
      }

      <div class="disclaimer">
        * The statement of mark displayed here cannot be used for any official purpose. It is just for the students information.
      </div>
    </body>
    </html>
  `

  printWindow.document.write(htmlContent)
  printWindow.document.close()

  printWindow.onload = () => {
    printWindow.print()
    printWindow.close()
  }
}
