import Personajes from './clases/Personajes.js';
import Casas from './clases/Casas.js';
import Reinos from './clases/Reinos.js';
import Armas from './clases/Armas.js';

let reinoPoniente=new Reinos("Poniente");

let casaStark=new Casas("Casa Stark", "A caballo regalado no se le mira el diente.");
let casaLannister=new Casas("Casa Lannister", "No hay mal que por bien no venga.");

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);
console.log("");

let armaGarra=new Armas("Garra", 25, "Espada");
let armaAguja=new Armas("Aguja", 15, "Espada");
console.log("");

let jonSnow=new Personajes("Jon Snow", 20, casaStark);
let ariaStark=new Personajes("Aria Stark", 24, casaStark);
console.log("");

jonSnow.insertarArma(armaGarra);
ariaStark.insertarArma(armaAguja);
console.log("");

let jaimeLannister=new Personajes("Jaime Lannister", 35, casaLannister);
console.log("");

reinoPoniente.agregarRey(jaimeLannister);
console.log("");

reinoPoniente.listarCasas();
console.log("");

reinoPoniente.verInformacionRey();
console.log("");

casaStark.leerMiembrosCasa();
console.log("");

jonSnow.frase();
ariaStark.frase();
jaimeLannister.frase();
console.log("");

armaGarra.descripcion();
armaAguja.descripcion();