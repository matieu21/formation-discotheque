<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
    <!-- CSS only
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script src="../libs/react.development.js"></script>
    <script src="../libs/react-dom.development.js"></script>
    <script src="../libs/babel.min.js"></script>
    <script src="../js/jquery-3.6.0.min.js"></script>
    <script src="../js/disco.js"></script>
    <script src="../js/searchResult.js"></script>
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <link rel="stylesheet" href="../css/style.css" id="theme">
</head>

<body id="body_accueil">


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Discotheque
                        </a>
                        <ul class="dropdown-menu  bg-dark" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item text-light" href="disco.html">My Library</a></li>
                            <li><a class="dropdown-item  text-light" href="updateIHM.php">Update</a></li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="wantlist.html">Wantlist</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Insert
                        </a>
                        <ul class="dropdown-menu  bg-dark " aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item text-light " href="insert_artist.html">New Artist</a></li>
                            <li><a class="dropdown-item text-light " href="insert_album.html">New Album</a></li>

                            <li><a class="dropdown-item text-light " href="insert_tracks.html">New Track</a></li>
                        </ul>
                    </li>

                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Artist, song..." aria-label="Search">
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


    <form method='POST' action="./updateCTRL.php">
        <label for="id_artist" class="text-light">Choose your artist :</label>
        <!--            La liste déroulante-->
        <select name="id_artist" class="form-select" aria-label="Default select example">
            <option value="0">--Artist-- ?</option>
            <?php
            // L'affichage des options de la liste déroulante
            echo $contentSelectAllArtists;
            ?>
            <input type="submit" name='bt' value="Valider" />
        </select>
    </form>
    <form method="POST" action="./updateCTRL.php">
        <label class="text-light">Artist Name</label>

        <input value='<?php echo $artistName ?>' name='name' type='text' class="form-control  bg-dark mb-1 text-light"><br><br>

        <label class="text-light">URL Photo</label>

        <input value='<?php echo $photoArtist ?>' name='photo' type='text' class="form-control  bg-dark mb-1 text-light"><br><br>
        
        <label class="text-light">Web Name</label>
        <input value='<?php echo $artistWeb ?>' name='web' type='text' class="form-control  bg-dark mb-1 text-light">

        <!-- input caché qui nous permet de récuperer l'id_artist de la selection
            pour valider les modifications (j'imagine) -->
        <input type='hidden' value=<?php echo $modifArtist ?> name='artistHidden'>


        <input type="submit" name="btModif" value="modifier">
    </form>
    <?php
    if (isset($message) && $message != "") {
        echo $message;
    }
    ?>

</body>

</html>