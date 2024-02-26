
let buttonEncriptar = document.getElementsByClassName('encriptar');
let buttonDescifrar = document.getElementsByClassName('desencriptar');
let buttonCopiar = document.querySelector('.copiar');
let textoPlano = document.querySelector('.texto');
let sinTexto = document.querySelector('.box03-1'); 
let resultado = document.querySelector('.resultado');
let textoEncriptar = [];
let textoDesencriptar =[];
let textoError ;
let contadorVacio = 0;
let textoInvalido = 0;
let textoValido = 0;

function initial ()    {
        buttonDescifrar[0].disabled = true; 
        buttonCopiar.style.visibility = 'hidden'; 
        textoPlano.value = ""; 
        resultado.style.visibility = 'hidden'; 
        sinTexto.style.display = 'flex'; 
        resultado.readOnly = true; 
        buttonDescifrar[0].style.background = "#a5a5a53a";
        transformacion.disabled = true;
        
        return;
}

function restriccionTexto(event){
        if((event.charCode == 13) || (event.charCode == 32) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 241)){
                
                return true;
        }
        else{
                alert("Solo letras minúsculus y sin acento");
                return false;
                
        }
        
}

function botonEncriptar () {
        
        
        if(textoPlano.value === "" ){ 
                initial();
                resultado.innerHTML = '';
                buttonDescifrar[0].disabled = true;
        }
        else    {
        resultado.style.visibility = 'visible';
        sinTexto.style.display = "none"; 
        buttonCopiar.style.visibility = 'visible'; 
        buttonDescifrar[0].disabled = false; 
        buttonDescifrar[0].style.background = "none"; 
        textoEncriptar = textoPlano.value;
        resultado.innerHTML = algoritmoEncriptar(textoEncriptar);

        }
        
        return;

}

function algoritmoEncriptar(palabra) {

        palabra = palabra.split(''); 
        contadorVacio = 0;
        contadorEspacioBlanco = 0;
        textoInvalido = 0;
        textoValido = 0;
        for (let j=0; j < palabra.length; ++j){
                textoError = palabra.join('').charCodeAt(j);
                
                if((textoError == 10) || (textoError == 32) || (textoError >= 97) && (textoError <= 122) || (textoError == 241)){
                        
                        textoValido++;
                }
                else {
                        textoInvalido++;
                }
                
        }
        for(let i=0; i < palabra.length; ++i){
                switch(palabra[i]){
                        case "a":
                        palabra[i] = 'ai';
                        break;

                        case 'e':
                        palabra[i] = 'enter';
                        break;

                        case 'i':
                        palabra[i] = 'imes';
                        break;

                        case "o":
                        palabra[i] = 'ober';
                        break;

                        case 'u':
                        palabra[i] = 'ufat';
                        break;


                        case '\n':
                        contadorVacio++;
                        break;

                        case ' ':
                        contadorEspacioBlanco++;
                        break;

                }

               
        }
        suma = contadorVacio + contadorEspacioBlanco;
        
        if(contadorVacio === palabra.length || contadorEspacioBlanco === palabra.length || suma === palabra.length ){
                initial();
                buttonDescifrar[0].style.background = "#a5a5a53a";
                return palabra.join('');

                                        }
        if(textoInvalido>=1){
                alert("Solo letras minúsculus y sin acento");
                buttonDescifrar[0].style.background = "#a5a5a53a";
                textoIncorrecto();
                return palabra.join('');

        }
        else {
                return palabra.join('');
                
        }
       


}


function textoIncorrecto() {
        buttonDescifrar[0].disabled = true; 
        buttonCopiar.style.visibility = 'hidden'; 
        
        resultado.style.visibility = 'hidden'; 
        sinTexto.style.display = 'flex'; 
        resultado.readOnly = true; 
        return;
}


function botonCopiar()  {
        
        
        navigator.clipboard.writeText(resultado.innerHTML); 
        alert('Contenido copiado'); 
}

function algoritmoDesencriptar() {

        textoDesencriptar = textoPlano.value; 
        resultado.innerHTML = textoDesencriptar.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        console.log( resultado.innerHTML);
        return;
}

function verificarTextoVacio(palabra) {

        palabra = palabra.split('');
        contadorVacio = 0;
        contadorEspacioBlanco = 0;
        textoInvalido = 0;
        textoValido = 0;

        for (let j=0; j < palabra.length; ++j){
                textoError = palabra.join('').charCodeAt(j);
                
                if((textoError == 10) || (textoError == 32) || (textoError >= 97) && (textoError <= 122) || (textoError == 241)){
                        
                        textoValido++;
                }
                else {
                        textoInvalido++;
                }
                
        }

        for(let i=0; i < palabra.length; ++i){
                switch(palabra[i]){
                        case '\n':
                        contadorVacio++;
                        break;

                        case ' ':
                        contadorEspacioBlanco++;
                        break;
                        
                }



               
        }

         suma = contadorVacio + contadorEspacioBlanco;

        if(contadorVacio === palabra.length || contadorEspacioBlanco === palabra.length || suma === palabra.length  ){
                initial();
                buttonDescifrar[0].style.background = "#a5a5a53a";
                return palabra.join('');

                                        }
        if(textoInvalido>=1){
                alert("Solo letras minúsculus y sin acento");
                buttonDescifrar[0].style.background = "#a5a5a53a";
                textoIncorrecto();
                return palabra.join('');

        }
        else{
                algoritmoDesencriptar();
                return palabra.join('');
                
        }
}

function botonDesencriptar (){

        textoDesencriptar = textoPlano.value; 
        verificarTextoVacio(textoDesencriptar);

        return;
}


initial();


