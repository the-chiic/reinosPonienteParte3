import Personajes from '../Personajes.js';
import Rey from './Rey.js';

class Consejeros extends Personajes{

    #especializacion;

    constructor(nombre, age, casa, especializacion){
        super(nombre, age, casa);
        this.#especializacion=especializacion;
    }


/*-------------------------------------------------------------------------------*/

    /**
     * Función aconsejar del personaje
     * 
     * @param rey --> Objeto de Rey, si esta bien se le asigna se aconseja
     * 
     */

    aconsejar(rey){
        if(rey instanceof Rey){
            console.log(this.getNombre()+" ha aconsejado a "+rey.getNombre()+" sobre "+this.#especializacion);
        }else{
            console.log("Rey Inválido");
        }
    }

    /**
     * Función luchar del personaje
     * 
     * String de información sobre como lucha el consejero
     * 
     */

    luchar(){
        console.log(this.getNombre()+" ataca con su inteligencia");
    }


/*-------------------------------------------------------------------------------*/


    /**
     * Getters y Setters
     * 
     * Getters:
     * 
     * @return variable --> Para coger el valor
     * 
     * Setters:
     * 
     * @param variable --> Para darle un nuevo valor
     * 
     */

    getEspecializacion(){
        return this.#especializacion;
    }

    setEspecializacion(especializacion){
        this.#especializacion=especializacion;
    }

}

export default Consejeros;