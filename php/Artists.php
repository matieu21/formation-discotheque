<?php

/**
 * 
 * Creation de la class Artists à partir de la table artists
 */

declare (strict_types = 1);

class Artists {

    private $idArtist;
    private $nameArtist;
    private $yearsActivityArtist;
    private $siteWebArtist;
    private $photoArtist;

    public function __construct(string $nameArtist="", string $yearsActivityArtist="",  string $siteWebArtist="",  string $photoArtist="", int $idArtist= 0)
    {
      $this->idArtist = $idArtist;
      $this->nameArtist = $nameArtist;
      $this->yearsActivityArtist= $yearsActivityArtist;
      $this->siteWebArtist = $siteWebArtist;
      $this->photoArtist = $photoArtist;
      
    }
    
    public function getIdArtist(): int {
        return $this->idArtist;
    }
    public function getNameArtist(): string{
       return $this->nameArtist;
    }
    public function getYearsActivityArtist():string{
        return $this->yearsActivityArtist;  
    }
    public function getSiteWebArtist(): string{
       return $this->siteWebArtist;
    }
    public function getPhotoArtist(): string{
       return $this->photoArtist;
    }
    

    public function setIdArtist(int $idArtist): void{
       $this->idArtist= $idArtist;
    }
    public function setNameArtist(string $nameArtist): void{
       $this->nameArtist = $nameArtist;
    }
    public function setYearsActivityArtist(string $yearsActivityArtist): void {
       $this->yearsActivityArtist = $yearsActivityArtist;
    }
    public function setSiteWebArtist(string $siteWebArtist): void {
       $this->siteWebArtist = $siteWebArtist;
    }
    public function setPhotoArtist(string $photoArtist): void {
      $this->photoArtist = $photoArtist;
    }



}
