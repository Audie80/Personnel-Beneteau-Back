<?php header("Access-Control-Allow-Origin: *"); ?>

<aside>
    Filtrer par :
    <!-- Liste déroulante -->
</aside>

<section>
    <h1>Liste du personnel</h1>

    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>Afficher</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody id="employees"></tbody>
    </table>
</section>

<script src="config/common.js"></script>
<script src="js/employees.js"></script>