import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] | undefined;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.chargerProduits();
  }

  // Load products from the backend
  chargerProduits() {
    this.produitService.listeProduit().subscribe(
      prods => {
        console.log("Products loaded:", prods);
        this.produits = prods;
      },
      error => console.error("Error loading products:", error)
    );
  }

  // Delete a product and refresh the list
  supprimerProduit(p: Produit) {
    const conf = confirm("Etes-vous sûr ?");
    if (conf && p.idProduit) {
      this.produitService.supprimerProduit(p.idProduit).subscribe(
        () => {
          console.log("Produit supprimé:", p.nomProduit);
          this.chargerProduits();
        },
        error => console.error("Error deleting product:", error)
      );
    }
  }
}
