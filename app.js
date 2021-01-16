const theme= document.querySelectorAll('.theme');
const body = document.querySelector('body');

theme.forEach(function(theme){
    theme.addEventListener('click', function(e){
        if(e.target.id === 'dark' ){
            body.style.backgroundColor = '#212121';
            body.style.color = '#777';
        }
        if(e.target.id === 'light' ){
            body.style.backgroundColor = '#FFF';
            body.style.color = '#000';
        }
        if(e.target.id === 'crazy' ){
            body.style.backgroundColor = '#F4043D';
            body.style.color = '#FFF';
        }
    })
})