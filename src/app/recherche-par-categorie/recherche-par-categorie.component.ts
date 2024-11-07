import { Component } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  templateUrl: './recherche-par-categorie.component.html',
  
})
export class RechercheParCategorieComponent {
categories: any;

IdCategorie: any;

produits : Produit[] | undefined;
catigories : Categorie[] | undefined;
constructor(private produitService: ProduitService){
  
}
ngOnInit(): void {
 // this.categories=this.produitService.listeCategories();
  this.produits=this.produitService.listeProduits();

}
onChange() {
  //this.produits=
 // this.produitService.rechercherParCategorie(this.IdCategorie);
  }
/* supprimerProduit(p: Produit)
  {
  //console.log(p);
 let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.produitService.supprimerProduit(p);
  } */


}
