var togglCount = 0;
var mobilebtn = document.querySelector('.toggle-btn');

var mobilemenu = document.querySelector('.mobile-menu');

var mobilemenulinks = document.querySelectorAll('.mobile-menu a');
// console.log(mobilemenulinks);



for( let i of mobilemenulinks){    //to handle clicking of links in mobile mode, putting event listeners on all links of mobile menu  
    i.addEventListener('click', function(){
        console.log('clicked');
        mobilebtn.innerHTML = `<i class="far fa-laugh-beam"></i>`;
        mobilemenu.style.display = 'none';
        togglCount++;
    })
}



//************************************ Toggle button handling****************************************************** */
function togglebar(element){
    console.log('toggled');
    if(togglCount % 2 === 0){
        //opentoggle
        element.innerHTML = '';
        element.innerHTML = `<i class="far fa-times-circle"></i>`;
        mobilemenu.style.display = 'flex';
        mobilemenu.style.transition = "all ease-in-out 2s";

        togglCount++;

    }
    else{
        //closetoggle
        element.innerHTML = '';
        element.innerHTML = `<i class="far fa-laugh-beam"></i>`;
        mobilemenu.style.display = 'none';
        togglCount++;
    }
}