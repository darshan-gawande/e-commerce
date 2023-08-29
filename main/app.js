const item = document.querySelectorAll(".Item");
const wrapper = document.querySelector(".sliderWrapper");

const products = [
{
    id : 1,
    title: "Air-Force",
    price: 12000 ,
    colors : [
    {
        code:"black",
        img: "/images/air.png",
    },
    {
        code:"blue",
        img: "/images/air2.png",
    },
    ],
},
{
    id : 2,
    title: "Air-Jordan",
    price: 18000 ,
    colors : [
    {
        code:"gray",
        img: "/images/jordan.png",
    },
    {
        code:"green",
        img: "/images/jordan2.png",
    },
    ],
},

{
    id : 3,
    title: "blazer",
    price: 10000 ,
    colors : [
    {
        code:"rgb(255, 221, 221)",
        img: "/images/blazer.png",
    },
    {
        code:"green",
        img: "/images/blazer2.png",
    },
    ],
},

{
    id : 4,
    title: "Crater",
    price: 11000 ,
    colors : [
    {
        code:"black",
        img: "/images/crater.png",
    },
    {
        code:"rgb(188, 255, 4)",
        img: "/images/crater2.png",
    },
    ],
},


{
    id : 5,
    title: "Hippie",
    price: 15000 ,
    colors : [
    {
        code:"pink",
        img:  "/images/hippie.png",
    },
    {
        code:"rgb(62, 56, 56)",
        img: "/images/hippie2.png",
    },
    ],
},
];

const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColor = document.querySelectorAll(".color");
const productImg = document.querySelector(".productImg");


let choosenProduct = products[0];


item.forEach((items, index) => {
    items.addEventListener("click", () => {
        // choose slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // get details of that slide
        choosenProduct = products[index];

        // change the slide name, color and price
        productTitle.textContent = choosenProduct.title;
        productPrice.textContent = "₹" +choosenProduct.price;
        productImg.src = choosenProduct.colors[0].img;

        productColor.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

productColor.forEach((color, index) => {
    color.addEventListener("click", ()=> {
        productImg.src = choosenProduct.colors[index].img;
    });
});
