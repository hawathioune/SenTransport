function StatReseau({ lignes }) {
    const totalLignes = lignes.length;

    const totalArrets = lignes.reduce(
        (total, ligne) => total + ligne.arrets,
        0
    );

    const ligneMax = lignes.reduce((max, ligne) =>
        ligne.arrets > max.arrets ? ligne : max
    );

    return (
        <div className="stats">
        <p>Total lignes : {totalLignes}</p>
        <p>Total arrêts : {totalArrets}</p>
        <p>
            Ligne avec le plus d'arrêts : {ligneMax.numero} ({ligneMax.arrets} arrêts)
        </p>
        </div>
    );
    }

export default StatReseau;