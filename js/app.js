// js/app.js

document.addEventListener('DOMContentLoaded', () => {
  const totalEcheances = 24;
  const montantEcheance = 76.38;
  const montantTotal = 1756.74;

  const lignesPaiements = document.querySelectorAll('tbody tr');
  let echeancesPayees = 0;
  let montantPaye = 0;

  lignesPaiements.forEach(row => {
    const statut = row.querySelector('.badge');
    const montant = parseFloat(row.children[2].textContent.replace('€', '').trim().replace(',', '.'));

    if (statut && (statut.classList.contains('paye') || statut.classList.contains('retar'))) {
      echeancesPayees++;
      montantPaye += montant;
    }
  });

  const echeancesRestantes = totalEcheances - echeancesPayees;
  const pourcentage = ((echeancesPayees / totalEcheances) * 100).toFixed(1);

  // Mise à jour du texte dans les éléments HTML
  //document.querySelector('.credit-info .info-grid').innerHTML += `
  //  <div><strong>Montant payé :</strong> ${montantPaye.toFixed(2)} €</div>
//  `;

  // Mise à jour barre de progression
  const progress = document.querySelector('.progress');
  if (progress) {
    progress.style.width = `${pourcentage}%`;
  }
});
