<?php include('header.php'); ?>

<aside>
    <button>Retour à la fiche personnel</button>
</aside>

<section>
    <h1 id="titleForm">Création d'un personnel</h1>

    <form id="addEmployeeForm">
        <div>
            <label for="lastname">Nom </label>
            <input type="text" name="lastname" id="lastname">
        </div>
        <div>
            <label for="firstname">Prénom </label>
            <input type="text" name="firstname" id="firstname">
        </div>
        <div>
            <label for="birthdate">Date de naissance </label>
            <input type="date" name="birthdate" id="birthdate">
        </div>
        <input type="submit" value="Valider">
    </form>
</section>

<?php include('footer.php'); ?>

<script src="config/common.js"></script>
<script src="js/crud-employee.js"></script>