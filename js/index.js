/* const audio = document.querySelector("#audio1");
let numero_del_teclado_4 =4; 
const numero_del_teclado_5 =5; 
const numero_del_teclado_6 =6; 





document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.code;
  
/*  console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue); 
 
    if(keyValue == 4){
        
        audio.play();
    }
    if(keyValue == 5){
        
        audio.pause();
    }
  }, false);

  */

const audio_ez4ence = document.querySelector("#audio_ez4ence");
const archivo_de_audio_ez4ence =document.querySelector("#archivo_de_audio_en4ence");

const audio_podes_ser_tan_pelotudo= document.querySelector("#audio_podes_ser_tan_pelotuo");
const archivo_de_audio_podes_ser_tan_pelotudo =document.querySelector("#archivo_de_audio_podes_ser_tan_pelotudo")

const audio_siuu_cristiano= document.querySelector("#siu_cristiano");
const archivo_siu_cristiano =document.querySelector("#archivo_de_audio_siu_critiano")

const audio_stax = document.querySelector("#audio_stax");
const archivo_de_audio_stax =document.querySelector("#archivo_de_audio_stax");

audio_ez4ence.addEventListener("click", () =>{

   archivo_de_audio_ez4ence.play();
})

audio_podes_ser_tan_pelotudo.addEventListener("click", () =>{

    archivo_de_audio_podes_ser_tan_pelotudo.play()
 })
 
 audio_siuu_cristiano.addEventListener("click", () =>{

   archivo_siu_cristiano.play()
 })

 audio_stax.addEventListener("click", () =>{

  archivo_de_audio_stax.play();
})