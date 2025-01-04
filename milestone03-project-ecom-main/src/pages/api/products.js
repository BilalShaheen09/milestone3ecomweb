export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name:" Audionic Earbuds",
            price: 5000,
            image:"https://audionic.co/cdn/shop/files/AirbudSignatureS680-Image-2_4_copy_255x255.png?v=1731418186"
        },

        {
            id: 2 ,
            name:"Airbud 590",
            price: 3900,
            image:"https://audionic.co/cdn/shop/files/AirBud-590Image-3_copy_255x255.png?v=1731502011"
        },
        {
            id: 3,
            name:"Masti Bluetooth Speaker",
            price: 8500,
            image:"https://audionic.co/cdn/shop/files/audionic-default-title-classic-masti-85-bluetooth-speaker-34651855650972_3_copy_1_copy_255x255.png?v=1732624005"
        },
        {
            id: 4,
            name:"Solo x110",
            price: 7500,
            image:"https://audionic.co/cdn/shop/files/SoloX110-1_255x255.png?v=1732873934"
        },
        {
            id: 5,
            name:"PlayStation®5 Digital Edition (slim)",
            price: 30000,
            image:"https://m.media-amazon.com/images/I/51fM0CKG+HL._SX522_.jpg"
        },
        {
            id: 6,
            name:"DEWALT 20V MAX Cordless Drill",
            price: 50000,
            image:"https://m.media-amazon.com/images/I/61oeYCtViNL._AC_SX679_.jpg"
        },
    ];

    res.status(200).json(products);
}