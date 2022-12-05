
function darkmode(){
    sessionStorage.MODE_COLOR = 'light' ;

        if(sessionStorage.MODE_COLOR == 'light'){
            document.querySelector('body').style.backgroundColor = 'rgb(0 0 0 / 94%)';
            sessionStorage.MODE_COLOR = 'dark' ;
        }else{
            document.querySelector('body').style.backgroundColor = 'rgb(230, 230, 230)';
            sessionStorage.MODE_COLOR == 'light'
        }


}