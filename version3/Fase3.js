import Casas from './clases/Casas.js';
import Reinos from './clases/Reinos.js';
import Armas from './clases/Armas.js';
import Guerreros from './clases/personajesEspeciales/Guerreros.js';
import Batallas from './clases/Batallas.js';

let reinoPoniente=new Reinos("Poniente");

let casaStark=new Casas("Casa Stark", "A caballo regalado no se le mira el diente.");
let casaLannister=new Casas("Casa Lannister", "No hay mal que por bien no venga.");

reinoPoniente.agregarCasa(casaStark);
reinoPoniente.agregarCasa(casaLannister);
console.log("");

const garra = new Armas("Garra", 90);
const aguja = new Armas("Aguja", 70);
const hacha = new Armas("Hacha del Norte", 80);
const espadaLarga = new Armas("Espada Larga", 85);
const ballesta = new Armas("Ballesta", 75);
const filoRojo = new Armas("Filo Rojo", 88);
const lanzaDeCaza = new Armas("Lanza de Caza", 60);

// === GUERREROS DE LA CASA STARK ===
const jon = new Guerreros("Jon Snow", 25, casaStark);
jon.insertarArma(garra);
const arya = new Guerreros("Arya Stark", 18, casaStark);
arya.insertarArma(aguja);
const robb = new Guerreros("Robb Stark", 22, casaStark);
robb.insertarArma(hacha);
const brienne = new Guerreros("Brienne de Tarth", 30, casaStark);
brienne.insertarArma(espadaLarga);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerreros("Jaime Lannister", 32, casaLannister);
jaime.insertarArma(ballesta);
const cersei = new Guerreros("Cersei Lannister", 34, casaLannister);
cersei.insertarArma(filoRojo);
const tyrion = new Guerreros("Tyrion Lannister", 30, casaLannister);
tyrion.insertarArma(lanzaDeCaza);
const gregor = new Guerreros("Gregor Clegane", 38, casaLannister);
gregor.insertarArma(garra);

casaStark.leerMiembrosCasaGuerreros();
casaLannister.leerMiembrosCasaGuerreros();


const batallaBastardos = new Batallas();
batallaBastardos.iniciarBatalla(casaStark,casaLannister);

// Asignar la batalla a cada guerrero
[jon, arya, robb, brienne].forEach(guerrero => guerrero.comprobarBatalla(batallaBastardos));
[jaime, cersei, tyrion, gregor].forEach(guerrero => guerrero.comprobarBatalla(batallaBastardos));

// Definir listas para los bucles
let stark=[jon, arya, robb, brienne];
let lannister=[jaime, cersei, tyrion, gregor];

let turno=1;

// Mientras haya guerreros vivos en ambas casas
while(stark.some(guerrero => guerrero.getVida()>0) && lannister.some(guerrero => guerrero.getVida()>0)){

    console.log("--- Turno "+turno+" ---");

    // Cada guerrero de Stark ataca al primero vivo de Lannister
    stark.forEach(guerrero => {
        if(guerrero.getVida()>0) {
            let enemigo=lannister.find(enemigo => enemigo.getVida()>0);
            if(enemigo){
                guerrero.atacar(enemigo);
            }
        }
    });

    // Cada guerrero de Lannister ataca al primero vivo de Stark
    lannister.forEach(guerrero => {
        if(guerrero.getVida()>0){
            let enemigo=stark.find(enemigo => enemigo.getVida()>0);
            if(enemigo){
                guerrero.atacar(enemigo);
            }
        }
    });

    // Mostrar vida después del turno
    console.log("Estado después del turno:");
    console.log("Casa Stark:");
    stark.forEach(guerrero => console.log(guerrero.getNombre()+": "+guerrero.getVida()+" de vida"));
    console.log("Casa Lannister:");
    lannister.forEach(guerrero => console.log(guerrero.getNombre()+": "+guerrero.getVida()+" de vida"));

    turno++;
}

// Mostrar ganador
if(stark.some(guerrero => guerrero.getVida()>0)){
    console.log("¡La Casa Stark ha ganado la batalla!");
}else if(lannister.some(guerrero => guerrero.getVida()>0)){
    console.log("¡La Casa Lannister ha ganado la batalla!");
}else{
    console.log("¡Todos los guerreros han caído, es un empate!");
}