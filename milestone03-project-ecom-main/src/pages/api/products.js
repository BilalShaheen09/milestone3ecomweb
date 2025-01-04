export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name:" Baby Girls Dresses",
            price: 4500,
            image:"https://shopatziva.com/cdn/shop/files/DSC04148.jpg?v=1715158696&width=600"
        },

        {
            id: 2 ,
            name:"Baba Boy Dresses",
            price: 4500,
            image:"https://www.nihalfashions.com/media/catalog/product/cache/441933f201159ac6aa81e856d506a0a3/b/l/black-imported-boys-indo-western-nkk-805.jpg"
        },
        {
            id: 3,
            name:"Ladies Bag",
            price: 850,
            image:"https://m.media-amazon.com/images/I/61GpT8+nFXL._AC_SL1008_.jpg"
        },
        {
            id: 4,
            name:"Mens Items",
            price: 7500,
            image:"https://cdn.shopify.com/s/files/1/0075/3929/4305/files/EASTER_OUTFIT_045-1167x1201-f9b9207_350x350.jpg?v=1647313755"
        },
        {
            id: 5,
            name:"Kids Shoes",
            price: 3000,
            image:"https://shoezero.com/cdn/shop/articles/stylish_kids_shoes_with_background_playground.webp?v=1694215917&width=2048"
        },
        {
            id: 6,
            name:"Shoes",
            price: 5000,
            image:"https://baccabucci.com/cdn/shop/products/MG_5242.jpg?v=1633514122"
        },
    ];

    res.status(200).json(products);
}