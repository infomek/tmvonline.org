import type { AdmitCardData } from "./admit-card-data"

export function generateAdmitCardPDF(data: AdmitCardData): void {
  // Create a new window for the admit card
  const printWindow = window.open("", "_blank")

  if (!printWindow) {
    alert("Please allow popups to download the admit card")
    return
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Admit Card - ${data.examination}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 20px;
          line-height: 1.4;
        }
        .header {
          text-align: center;
          margin-bottom: 20px;
        }
        .university-name {
          font-size: 24px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 5px;
        }
        .university-subtitle {
          font-size: 12px;
          margin-bottom: 10px;
        }
        .admit-card-title {
          font-size: 20px;
          font-weight: bold;
          margin: 20px 0;
          text-decoration: underline;
        }
        .student-info {
          margin: 20px 0;
        }
        .info-row {
          display: flex;
          margin: 8px 0;
        }
        .info-label {
          font-weight: bold;
          width: 200px;
        }
        .subjects-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }
        .subjects-table th,
        .subjects-table td {
          border: 1px solid #000;
          padding: 8px;
          text-align: left;
        }
        .subjects-table th {
          background-color: #f0f0f0;
          font-weight: bold;
        }
        .notes {
          margin-top: 30px;
          font-size: 12px;
        }
        .signature-section {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
        }
        .signature-box {
          text-align: center;
          width: 200px;
        }
        @media print {
          body { margin: 0; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="university-name">Tilak Maharashtra Vidyapeeth, Pune</div>
        <div class="university-subtitle">
          (Declared as 'Deemed University' Under Section - 3 of UGC Act 1956 vide Notification No.<br>
          F9-19/85-U-3 dated 24th April 1987 by the Government of India.)
        </div>
        <div class="admit-card-title">Admit Card</div>
      </div>

      <div class="student-info">
        <div class="info-row">
          <span class="info-label">Examination:</span>
          <span>${data.examination}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Seat No:</span>
          <span>${data.seatNo}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Student Name:</span>
          <span>${data.studentName}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Exam Center Name:</span>
          <span>${data.examCenter}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Permanent Reg Number:</span>
          <span>${data.prn}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Course:</span>
          <span>${data.course}</span>
        </div>
      </div>

      <table class="subjects-table">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          ${data.subjects
            .map(
              (subject) => `
            <tr>
              <td>${subject.code}</td>
              <td>${subject.name}</td>
              <td>${subject.date} ${subject.time}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>

      <div class="signature-section">
        <div class="signature-box">
          <div style="height: 60px; border-bottom: 1px solid #000; margin-bottom: 5px;"></div>
          <div>Seat & Signature of the H.O.D.</div>
        </div>
        <div class="signature-box">
          <div style="height: 60px; border-bottom: 1px solid #000; margin-bottom: 5px;"></div>
          <div>Signature of Candidate</div>
        </div>
      </div>

      <div class="notes">
        <strong>Note:</strong><br>
        • While appearing for the Examination bring this admit Card along with the Identity Card.<br>
        • Candidate will not be allowed to enter the examination Hall without this Admit Card.<br>
        • Candidate is requested to note that the name printed on this Admit Card will appear in Vidyapeeth record permanently.<br>
        • If there is any change, kindly contact the Vidyapeeth office within 7 days of receipt of this admit card.<br>
        • Candidate should be present in the examination hall 15 minutes prior to the schedule exam time.
      </div>
    </body>
    </html>
  `

  printWindow.document.write(htmlContent)
  printWindow.document.close()

  // Wait for content to load then print
  printWindow.onload = () => {
    printWindow.print()
    printWindow.close()
  }
}
