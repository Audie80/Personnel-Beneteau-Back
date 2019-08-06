<?php include('header.php'); ?>

<aside>
    <button>Retour à la fiche personnel</button>
</aside>

<section>
    <h1 id="titleFormLeave">Création d'un congé</h1>

    <form id="addLeaveForm">
        <div>
            <label for="beginningdate">Date de début </label>
            <input type="date" name="beginningdate" id="beginningdate">
        </div>
        <div>
            <label for="endingdate">Date de fin </label>
            <input type="date" name="endingdate" id="endingdate">
        </div>
        <input type="submit" value="Valider">
    </form>
</section>

<?php include('footer.php'); ?>

<script src="config/common.js"></script>
<script src="js/crud-leave.js"></script>