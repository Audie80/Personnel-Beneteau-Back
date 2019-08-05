<?php header("Access-Control-Allow-Origin: *"); ?>
<?php include('header.php'); ?>

<aside>
    Filtrer par :
    <!-- Liste déroulante -->
</aside>

<section>
    <h1>Liste du personnel</h1>

    <button><a href="crud-employee.php">Création d'un personnel</a></button>

    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date de naissance</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>
        </thead>
        <tbody id="employees"></tbody>
    </table>
</section>

<?php include('footer.php'); ?>

<script src="config/common.js"></script>
<script src="js/employees.js"></script>