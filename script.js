const textArea = document.querySelector('#textoingreso');
const resultArea = document.querySelector('#resultado');

const maps = {
  encryption: { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" },
  decryption: { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u" }
};

const replaceText = (text, map) => text.replace(new RegExp(Object.keys(map).join('|'), 'g'), match => map[match]);

const handleTextChange = event => {
  event.target.value = event.target.value.toLowerCase().replace(/[^a-z\s]/g, '');
};

const copiarContenido = () => navigator.clipboard.writeText(resultArea.value).then(() => alert('Tu texto fue copiado'));

const pegarContenido = () => navigator.clipboard.readText().then(texto => textArea.value = texto);

const borrarContenido = () => textArea.value = resultArea.value = "";

textArea.addEventListener('input', handleTextChange);
document.querySelector('#encriptar').addEventListener('click', () => resultArea.value = replaceText(textArea.value, maps.encryption));
document.querySelector('#desencriptar').addEventListener('click', () => resultArea.value = replaceText(textArea.value, maps.decryption));
document.querySelector('#copiar').addEventListener('click', copiarContenido);
document.querySelector('#pegar').addEventListener('click', pegarContenido);
document.querySelector('#borrar').addEventListener('click', borrarContenido);


/*Podrías hacer que: 
1.toda la interfaz ocupe más espacio en la pantalla (dime con porcentaje que tanto lo incrementaste)
2. que el footer tenga texto diciendo "Hecho por Alejandro Cuello"
3. Que los cuadrados donde se ingresan las palabras sean más rectangulares
*/
