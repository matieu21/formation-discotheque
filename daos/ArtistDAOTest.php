<?php

require_once '../entities/Artists.php';
require_once './ArtistDAO.php';

try {
    $pdo = new PDO("mysql:host=127.0.0.1;port=3306;dbname=discotheque;", "web", "123");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->exec("SET NAMES 'UTF8'");

    
} catch (PDOException $e) {
    echo $e->getMessage();
}




/**
 * Insert
 */
    echo "<hr>INSERT<br>";
    $artist = new Artists("Joseph Arthur ", "1996", "www.josepharthur.com", "jo.jpg");
    $dao = new ArtistDAO($pdo);
    $affected = $dao->insert($artist);

    echo $affected;




/*
* SELECT ALL
*/
echo "<hr>SELECT ALL<br>";
$t = $dao->selectAll();
foreach ($t as $objet) {
    echo  $objet->getNameArtist() . "<br>" . $objet->getYearsActivityArtist() . "<br>". $objet->getSiteWebArtist() . "<br>". $objet->getPhotoArtist() . "<br>" ;
}



/**
 * DELETE
 */
echo "<hr>DELETE<br>";
$artist->setIdArtist(75);

$affected = $dao->delete($artist);
echo "Delete ? $affected<br>";


/*
* SELECT ONE
*/
echo "<hr>SELECT ONE<br>";
$p = $dao->selectOne(34);
echo $p->getNameArtist() . ":" . $p->getYearsActivityArtist(). ":" . $p->getSiteWebArtist(). ":" . $p->getPhotoArtist(). ":". $p->getIdArtist();



/*
* UPDATE
*/
echo "<hr>UPDATE<br>";
$artist->setIdArtist(129);
$artist->setNameArtist("Morcheeba");
//$artist->setYearsActivityArtist("Depuis 1995");
//$artist->setSiteWebArtist("www.Morcheeba.com");
//$artist->setPhotoArtist("Morcheeba.jpeg");
$affected = $dao->update($artist);
echo "Update ? $affected<br>";