<?php
declare(strict_types=1);

require_once '../php/Artists.php';

class ArtistDAO {

    private $pdo;

    function __construct(PDO $pdo){
        $this->pdo = $pdo;
    }





    ////////////////////////Function Insert/////////////////////////////////////////
    public function insert(Artists $artist): int{
        $affected =0;

        try{
            $cmd = $this->pdo->prepare("INSERT INTO artists (name_artist, years_activity_artist, site_web_artist, photo_artist) VALUES(?,?,?,?)");
            $cmd->bindValue(1, $artist->getNameArtist());
            $cmd->bindValue(2, $artist->getYearsActivityArtist());
            $cmd->bindValue(3, $artist->getSiteWebArtist());
            $cmd->bindValue(4, $artist->getPhotoArtist());

            $cmd->execute();
            $affected =$cmd->rowCount();

        } catch (Exception $exc){
            $affected =-1;
        }

        return $affected;
    }
    ////////////////////////////////Fonction Select All////////////////////////////////////////
    /**
     *
     * @return array
     */
    public function selectAll(): array {

       
                try {
                    // Les noms des colonnes doivent avoir des alias identiques aux noms des attributs
                    $cursor = $this->pdo->query("SELECT name_artist AS nameArtist, years_activity_artist AS yearsActivityArtist, site_web_artist as siteWebArtist, photo_artist as photoArtist FROM artists");
                    
                    $tArtist = $cursor->fetchAll(PDO::FETCH_CLASS | PDO::FETCH_PROPS_LATE, "Artists");
                    
                    $cursor->closeCursor();
                } catch (Exception $exc) {
                    $tArtist = array();
                    $tArtist[] = new Artists("-1", $exc->getMessage());
                }
                return $tArtist;
            }


    ////////////////////////////////Fonction Delete////////////////////////////////////////
            /**
     *
     * @param Pays $pays
     * @return int
     */
    public function delete(Artists $artist): int {
        $affected = 0;

        try {
            $lcmd = $this->pdo->prepare("DELETE FROM artists WHERE id_artist = ?");
            $lcmd->bindValue(1, $artist->getIdArtist());
            $lcmd->execute();
            $affected = $lcmd->rowCount();
        } catch (Exception $exc) {
            $affected = -1;
        }
        return $affected;
    }



    ////////////////////////////////Fonction Select One////////////////////////////////////////
    /**
     *
     * @param type $pk
     * @return \Pays
     */
    public function selectOne($pk): Artists {

        try {
            $cursor = $this->pdo->prepare("SELECT * FROM artists WHERE id_artist = ?");
            $cursor->bindParam(1, $pk);
            $cursor->execute();
            $record = $cursor->fetch();
            if ($record != null) {
                $artist = new Artists($record[1], $record[2], $record[3], $record[4], intval($record[0]));
            } else {
                $artist = new Artists("0", "Introuvable");
            }
            $cursor->closeCursor();
        } catch (Exception $exc) {
            $artist = new Artists("-1", $exc->getMessage());
        }
        return $artist;
    }



    ////////////////////////////////Fonction Update////////////////////////////////////////

    /**
     *
     * @param Pays $pays
     * @return int
     */
    public function update(Artists $artist): int {
        $affected = 0;

        try {
            $lcmd = $this->pdo->prepare("UPDATE artists SET name_artist = ?, years_activity_artist= ?, site_web_artist=?, photo_artist=? WHERE id_artist = ?");
            $lcmd->bindValue(1, $artist->getNameArtist());
            $lcmd->bindValue(2, $artist->getYearsActivityArtist());
            $lcmd->bindValue(3, $artist->getSiteWebArtist());
            $lcmd->bindValue(4, $artist->getPhotoArtist());
            $lcmd->bindValue(5, $artist->getIdArtist());
            $lcmd->execute();
            $affected = $lcmd->rowCount();
        } catch (Exception $exc) {
            $affected = -1;
        }
        return $affected;
    }




}
