import Casas from "./Casas.js";

class Batallas{

    #muertos;

    /**
     * Constructor de la Clase Reinos
     * 
     * muertos --> Muertos en batalla
     * 
     */

    constructor(){
        this.#muertos=[];
    }


/*-------------------------------------------------------------------------------*/


    /**
     * Función iniciarBatalla de las batallas
     * 
     * @param casa1 -> El objeto de Casas, para iniciar guerra con otra casa
     * @param casa2 -> El objeto de Casas, para iniciar guerra con la casa anterior
     * 
     */

    iniciarBatalla(casa1, casa2){
        if(casa1 && casa2 instanceof Casas){
            console.log("Batalla iniciada entre la "+casa1.getNombre()+" y la "+casa2.getNombre());
        }
    }

    /**
     * Función mostrarGuerrerosMuertosEnCombate de las batallas
     * 
     * El objeto de Casas, para iniciar guerra con otra casa
     * 
     */

    mostrarGuerrerosMuertosEnCombate(){
        this.#muertos.forEach(muerto => {
            console.log(muerto.getNombre());
        });
    }

    /**
     * Función registrarMuerte de las batallas
     * 
     * El objeto de Casas, para iniciar guerra con otra casa
     * 
     */

    registrarMuerte(miembro){
        if(!this.#muertos.includes(miembro)){
            this.#muertos.push(miembro);
        }
    }


/*-------------------------------------------------------------------------------*/

}

export default Batallas;