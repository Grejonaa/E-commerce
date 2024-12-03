const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

/*My cart*/
const cartIcon = document.getElementById("lg-bag");
const sidebar = document.querySelector(".sidebar");
const closeButton = document.getElementById("closeSidebar");

//Open sidebar when cart icon clicked
cartIcon.addEventListener("click", function(){
    sidebar.style.display = "block";
});

//Close sidebar when x icon is clicked
closeButton.addEventListener("click", function(){
    sidebar.style.display = "none";
});
