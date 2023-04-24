const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const DIARIO = document.getElementById('diario');



CALCULAR.addEventListener('click', () => {
    const INPUT = document.getElementById('peso')
    const PESO = INPUT.value

    if (PESO == 0) {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
        DIARIO.style.display = 'none';
        }
    else if (PESO > 0){
        
        if (PESO <= 30) {
        ERROR.style.display = 'none'
        let flujo = calcFlujo(PESO);
        let mantenimiento = flujo*1.5;
        let diario = calcFlujo(PESO) * 24;
        DIARIO.innerHTML = 'Diario = ' + diario + ' cc/hr';
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 = ' + mantenimiento + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIARIO.style.display = 'block';
        } 

        else if (PESO > 30) {
        calSupCorporal(PESO)
       }
    }

    function calcFlujo(peso){
        let resto = peso;
        let flujo = 0;
        if (resto>20){
            let aux = resto-20;
            flujo += aux*1;
            resto -= aux;
        } 
        if (resto>10){
            let aux = resto-10;
            flujo += aux*2;
            resto -= aux;
        }
        flujo += resto*4;
        return flujo;
    }

    function calSupCorporal (peso) {
        let pesoReal = peso * 1
        let flujo = 0;
        flujo = ((pesoReal* 4) + 7) / (pesoReal + 90)
        let diario = flujo * 1500
        let flujoHora = ((flujo * 1500) / 24)
        let mantenimiento = ((flujo * 2000) / 24);
        FLU.innerHTML = flujoHora + ' cc/hr';
        MAN.innerHTML = 'm+m/2 = ' + mantenimiento + ' cc/hr';
        DIARIO.innerHTML = 'Diario = ' + diario + ' cc/hr';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
        DIARIO.style.display = 'block';
    }

}) 