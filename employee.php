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

    <button><a href="crud-leave.php">Ajouter un congé</a></button>

    <!-- modifier le tableau pour afficher un calendrier d'une année -->
    <table>
        <thead>
            <tr>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <tr id="leaves"></tr>
        </tbody>
    </table>

    <!-- Popup de modification d'un congé -->
    <div class="form-popup" id="formLeave">
        <form>
            <input type="submit" value="Modifier"> <!-- ajouter une méthode qui stocke l'ID_LEAVE dans le sessionStorage et qui redirige vers crud-leave -->
            <input type="submit" value="Supprimer"><!-- ajouter une méthode qui supprime l'ID_LEAVE -->
        </form>
    </div>

</section>

<?php include('footer.php'); ?>

<script src="config/common.js"></script>
<script src="js/employee.js"></script>