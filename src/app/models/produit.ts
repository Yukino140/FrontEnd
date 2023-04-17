export class Produit {
    constructor(
        public id:number,
        public refprod:String,
        public nomProd:String,
        public idCateg:number,
        public image:String,
        public description:String,
        public prixAncient:number,
        public prix:number
      ){}
}
