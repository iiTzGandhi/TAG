burger = document.querySelector('.burger')
navBar = document.querySelector('.navbar')
navList = document.querySelector('.nav_List')
rightNav = document.querySelector('.right_nav')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class');
    rightNav.classList.toggle('v-class');
    navBar.classList.toggle('h-nav');
})