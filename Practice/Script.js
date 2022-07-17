let menu = [{
    id: 1,
    category: 'breakfast',
    image: '/images/butter_pancake_double.png',
    dish: 'Butter Pancake Double',
    price: '1,200/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 2,
    category: 'lunch',
    image: '/images/chicken_shahi_biriyani.png',
    dish: 'Chicken Shahi Biriyani',
    price: '900/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 3,
    category: 'lunch',
    image: '/images/pannier_shahi_rice.png',
    dish: 'Pannier Shahi Rice',
    price: '860/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 4,
    category: 'starter',
    image: '/images/chicken_kebab.png',
    dish: 'Chicken Kebab',
    price: '920/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 5,
    category: 'starter',
    image: '/images/pannier_kofta.png',
    dish: 'Pannier Koftha',
    price: '560/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 6,
    category: 'starter',
    image: '/images/pannier_kebab.png',
    dish: 'Pannier Kabab',
    price: '680/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 7,
    category: 'breakfast',
    image: '/images/french_pancake.png',
    dish: 'French Pancake',
    price: '1,600/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 8,
    category: 'breakfast',
    image: '/images/french_sandwich.png',
    dish: 'French Sandwich',
    price: '960/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 9,
    category: 'lunch',
    image: '/images/classic_burger_fries.png',
    dish: 'Classic Burger/Fries',
    price: '1,800/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 10,
    category: 'lunch',
    image: '/images/ratoutille_cake.png',
    dish: 'Ratoutille cake',
    price: '900/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 11,
    category: 'starter',
    image: '/images/frost_gaint_icecream.png',
    dish: 'Frost Gaint Icecream',
    price: '500/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 12,
    category: 'breakfast',
    image: '/images/becan_classic_pancake.png',
    dish: 'Becan Classic pancake',
    price: '1,300/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 13,
    category: 'starter',
    image: '/images/venela_forest.png',
    dish: 'Venela Forest',
    price: '600/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},

{
    id: 14,
    category: 'lunch',
    image: '/images/honey_comb_cake.png',
    dish: 'Honey Comb Cake',
    price: '800/-',
    description: 'Lorem ipsum, consectetur adipiscing elit. Proin tincidunt congue tellus non ultricies. Nam sagittis vestibu lum molestie. Duis aliquet pretium erat. Aene mi odio, iaculis sed tellus sit amet.'
},


]

let menuSection = document.querySelector('.menu_section');

window.addEventListener('DOMContentLoad',function(){
    allmenu(menu);
})

function allmenu(array){
    let menuItems = array.map(function(item){
    return `<div class="item">
            <img class="item_image" src="${item.image}" alt="">
            <div class="item_info">
                <div class="item_info_head">
                    <p class="dish">${item.dish}</p>
                    <p class="price">${item.price}</p>
                </div>
                <div class="line"></div>
                <p class="description">
                ${item.description} </p>
            </div>
        </div>`
})
menuItems=menuItems.join('');
menuSection.innerHTML=menuItems;
}



var btn=document.querySelector(".all");
btn.addEventListener('click',()=>{
    allmenu(menu);
});
var btn1=document.querySelector(".breakfast");
btn1.addEventListener('click',()=>{
   var breakfast = menu.filter((item)=>{
        if(item.category==='breakfast'){
            return item;
        }
   });
   allmenu(breakfast);

});
var btn2=document.querySelector(".lunch");
btn2.addEventListener('click',()=>{
   var lunch = menu.filter((item)=>{
        if(item.category==='lunch'){
            return item;
        }
   });
   allmenu(lunch);

})
var btn3=document.querySelector(".starters");
btn3.addEventListener('click',()=>{
   var starters = menu.filter((item)=>{
        if(item.category==='starter'){
            return item;
        }
   });
   allmenu(starters);

})