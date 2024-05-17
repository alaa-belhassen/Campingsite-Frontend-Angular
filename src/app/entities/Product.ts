import { CategoriesProduct } from "./CategoriesProduct";


export class Product {
  id_Product: number;
  nom_Product: string;
  description: string;
  Product_Type: string;
  quantiter: number;
  prix: number;
  id_Categorie: CategoriesProduct;


  constructor(
    id_Product: number,
    nom_Product: string,
    description: string,
    Product_Type: string,
    quantiter: number,
    prix: number,
    id_Categorie: CategoriesProduct,
   
  ) {
    this.id_Product = id_Product;
    this.nom_Product = nom_Product;
    this.description = description;
    this.Product_Type = Product_Type;
    this.quantiter = quantiter;
    this.prix = prix;
    this.id_Categorie = id_Categorie;
  }
}