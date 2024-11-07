import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listeProduits(): Produit[] | undefined {
    throw new Error('Method not implemented.');
  }
  apiURL: string = 'http://localhost:8090/produits/api';

  produits: Produit[];  // Initialize the products array
  produit!: Produit;
  /* categories: { idCat: number; nomCat: string }[]; */
  produitsRecherche!: Produit[];

  constructor(private http: HttpClient) {  // Inject HttpClient
 /*    this.categories = [
      { idCat: 1, nomCat: "PC" },
      { idCat: 2, nomCat: "Imprimante" }
    ]; */

    this.produits = [  // Uncomment and initialize products array
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.60, dateCreation: new Date("01/14/2011"), categorie: { idCat: 1, nomCat: "PC" } },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010"), categorie: { idCat: 2, nomCat: "Imprimante" } },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.123, dateCreation: new Date("02/20/2020"), categorie: { idCat: 1, nomCat: "PC" } }
    ];
  }

  listeProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL, httpOptions);
  }
  
  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
    }

    supprimerProduit(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }

    consulterProduit(id: number): Observable<Produit> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Produit>(url);
        }
        

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(prod :Produit) : Observable<Produit>
  {
  return this.http.put<Produit>(this.apiURL, prod, httpOptions);
  }
  

 /* listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find(cat => cat.idCat == id)!;
  }

  rechercherParCategorie(idCat: number): Produit[] {
    this.produitsRecherche = [];
    this.produits.forEach((cur) => {
      if (idCat == cur.categorie.idCat) {
        this.produitsRecherche.push(cur);
      }
    });
    return this.produitsRecherche;
  }*/
}
