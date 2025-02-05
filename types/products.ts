export interface Product {
    _id : string;
    category:string;
    _type : "product";
    image? : {
        asset : ({
            _ref : string;
            _type : "image";
        })
    };
    price:number;
    description:string;
    quantity:number;
    deminsion:object



}