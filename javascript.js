// .........coupon Code ............

let popupCloseButton=document.querySelector('#popupClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#coupon').style.display='none';
})

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }