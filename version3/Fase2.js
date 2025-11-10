//import Personajes from './clases/Personajes.js';
import Casas from './clases/Casas.js';
import Reinos from './clases/Reinos.js';
import Armas from './clases/Armas.js';
import Guerreros from './clases/personajesEspeciales/Guerreros.js';
import Consejeros from './clases/personajesEspeciales/Consejeros.js';
import Rey from './clases/personajesEspeciales/Rey.js';

let reinoPoniente=new Reinos("Poniente");

let casaStark=new Casas("Casa Stark", "A caballo regalado no se le mira el diente.");
let casaLannister=new Casas("Casa Lannister", "No hay mal que por bien no venga.");

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);
console.log("");

let armaGarra=new Armas("Garra", 25, "Espada");
let armaAguja=new Armas("Aguja", 15, "Espada");

//let ariaStark=new Personajes("Aria Stark", 24, casaStark);
console.log("");

let jonSnow=new Guerreros("Jon Snow", 20, casaStark);
jonSnow.frase();
jonSnow.insertarArma(armaGarra);
jonSnow.luchar();
jonSnow.entrenar();
console.log("");

let robertbaratheon=new Rey("Robert Barateon", 35, casaLannister, 15);
robertbaratheon.frase();
robertbaratheon.gobernar();
robertbaratheon.luchar();
console.log("");

let tyrionlannister=new Consejeros("Tyrion Lannister", 25, casaLannister, "Fútbol");
tyrionlannister.frase();
tyrionlannister.aconsejar(robertbaratheon);
console.log("");