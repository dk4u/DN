let burger = document.querySelector('.burger')
let header = document.querySelector('.mobile-nav')

burger.addEventListener('click', () => {
    if(header.classList.contains('active')){
        header.classList.remove("active");
        burger.classList.remove("active");
    } else {
        header.classList.add("active");
        burger.classList.add("active");
    }
})
