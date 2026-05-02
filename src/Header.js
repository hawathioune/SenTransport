import './Header.css';
import React from "react";
function Header () {
    const dateDuJour = new Date().toLocaleDateString("fr-FR");
return (
    <header className =" header ">
<h1 className =" header - titre ">SenTransport </h1 >
<p className =" header - soustitre ">
Votre guide du transport en commun a Dakar
</p>

    <h2>Application de gestion du réseau DDD</h2>
    <p>{dateDuJour}</p>
</ header >
);
}


export default Header ;