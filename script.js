let btns = document.querySelectorAll('.tab_btn');
let infoTexts = document.querySelectorAll('.info_text');
let about = document.querySelector('.about_content');
let images = document.querySelectorAll(".image");


about.addEventListener('click', function(e) {
    
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
           
        });
         e.target.classList.add("active")

        infoTexts.forEach(function (item) {
            item.classList.remove("active");
        });

        images.forEach(function(item){
            item.classList.remove("active")
        });

        const element = document.getElementsByClassName(id);
       /* console.log(element)*/
        arrOfElement = Array.from(element);
        console.log(arrOfElement)

        arrOfElement.forEach(function (item) {
            item.classList.add("active")
        });
    };
});