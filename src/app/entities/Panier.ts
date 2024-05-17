export class Panier {
    quantiter: number;
    produit: {
        idProduct: number;
    };

    constructor(quantiter: number, idProduct: number) {
        this.quantiter = quantiter;
        this.produit = {
            idProduct: idProduct
        };
    }
}