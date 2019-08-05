<?php include('header.php'); ?>

<aside>
    Filtrer par :
    <!-- Liste déroulante -->
</aside>

<section>
    <h1>Fiche personnel</h1>

    <h2 id="nameInfo"></h2>
    <span id="birthDateInfo"></span>

    <h2>Planning de ses congés</h2>

    <button>Ajouter un congé</button>

    <table>
        <thead>
            <tr>
                <th>Date</th>
            </tr>
        </thead>
        <tbody id="leaves"></tbody>
    </table>
</section>

<?php include('footer.php'); ?>

<script src="config/common.js"></script>
<script src="js/employee.js"></script>