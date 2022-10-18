function mudarkpi() {
    setInterval(() => {
        setTimeout(() => {
            tempreal.innerHTML=`22.6°C`
        }, 2000);
        setTimeout(() => {
            tempreal.innerHTML=`22.8°C`
        }, 4000);
        setTimeout(() => {
            tempreal.innerHTML=`23.2°C`
        }, 6000);
        setTimeout(() => {
            tempreal.innerHTML=`23.1°C`
        }, 8000);
        setTimeout(() => {
            tempreal.innerHTML=`22.7°C`
        }, 10000);
        setTimeout(() => {
            tempreal.innerHTML=`22.6°C`
        }, 5000);
    }, 8000);
    setInterval(() => {

        setTimeout(() => {
            p1.innerHTML = `18.0°C`
            p2.innerHTML = `19.5°C`
            p3.innerHTML = `22.5°C`
            
            p4.innerHTML = `25.5°C`
            p5.innerHTML = `27.0°C`

        }, 0);

        

        setTimeout(() => {
            p1.innerHTML = `46%`
            p2.innerHTML = `47%`
            p3.innerHTML = `50%`
            p4.innerHTML = `53%`
            p5.innerHTML = `54%`

        }, 9000);

    }, 18000);

    

}

// ANIMAÇÃO VALORES 


function fechar(){
    var x = document.querySelector(".bluralert");
    x.style.display = 'none'
    
}

function abrir(){
    var x = document.querySelector(".bluralert");
    x.style.display = 'flex'
    
}

