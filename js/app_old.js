// app.js

document.addEventListener("DOMContentLoaded", () => {
  const payments = [
    { date: "10/06/2024", status: "Payé", montant: "76,38 €", prelevement: "12/06/2024" },
    { date: "01/07/2024", status: "Payé", montant: "76,38 €", prelevement: "08/07/2024" },
    { date: "05/08/2024", status: "Payé", montant: "76,38 €", prelevement: "07/08/2024" },
    { date: "05/09/2024", status: "Payé", montant: "76,38 €", prelevement: "06/09/2024" },
    { date: "05/10/2024", status: "Payé", montant: "76,38 €", prelevement: "07/10/2024" },
    { date: "06/11/2024", status: "Payé avec retard", montant: "76,38 €", prelevement: "07/11/2027" },
    { date: "16/12/2024", status: "Payé avec retard", montant: "76,38 €", prelevement: "09/12/2024" },
    { date: "10/01/2025", status: "Payé", montant: "76,38 €", prelevement: "07/01/2025" },
    { date: "05/02/2025", status: "Payé", montant: "76,38 €", prelevement: "07/02/2025" },
    { date: "07/03/2025", status: "Non payé", montant: "76,38 €", prelevement: "07/03/2025" },
    { date: "04/04/2025", status: "Non payé", montant: "76,38 €", prelevement: "04/04/2025" }
  ];

  const tableBody = document.getElementById("payment-table");

  payments.forEach(p => {
    const row = document.createElement("tr");

    const statusClass = p.status.includes("Non") ? "non" : p.status.includes("retard") ? "retar" : "paye";

    row.innerHTML = `
      <td>${p.date}</td>
      <td><span class="badge ${statusClass}">${p.status}</span></td>
      <td>${p.montant}</td>
      <td>${p.prelevement}</td>
    `;

    tableBody.appendChild(row);
  });
});
