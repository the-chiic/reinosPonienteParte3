import Casas from './Casas.js';
import Rey from './personajesEspeciales/Rey.js';

class Reinos{

    #nombre;
    #casas;
    #rey;

    /**
     * Constructor de la Clase Reinos
     * 
     * @param nombre --> Nombre del Personaje
     * 
     */

    constructor(nombre){
        this.#nombre=nombre;
        this.#casas=[];
        this.#rey=null;
    }


/*-------------------------------------------------------------------------------*/


    /**
     * Función insertarCasa de los reinos
     * 
     * @param casa -> El objeto de Casas, con sus datos lo metemos en casas[]
     * 
     */

    agregarCasa(casa){
        if(casa instanceof Casas){
            if(!this.#casas.includes(casa)){
                this.#casas.push(casa);
                console.log("La "+casa.getNombre()+" ha sido añadida al Reino de "+this.#nombre);
            }else{
                console.log("Casa Ya Introducida");
            }
        }else{
            console.log("Casa Inválida");    
        }
    }

    /**
     * Función listarCasas de los reinos
     * 
     * Muestra todas las casas de un reino
     * 
     */

    listarCasas(){
        console.log("Casas del Reino de "+this.#nombre);
        this.#casas.forEach(casa => {
            console.log("- "+casa.getNombre());
        });
    }

    /**
     * Función agregarRey de los reinos
     * 
     * @param rey --> Objeto de Personajes, lle introduce un rey al reino
     * 
     */

    agregarRey(rey){
        if(rey instanceof Rey){
            if(this.#rey==null){
                this.#rey=rey;
                console.log(this.#rey.getNombre()+" ha sido proclamado rey de "+this.#nombre);
            }else{
                console.log("Rey Ya Introducido");
            }
        }else{
            console.log("Rey Inválido");
        }
    }

    /**
     * Función verInformacionRey de los reinos
     * 
     * Muestra información del rey si existe
     * 
     */

    verInformacionRey(){
        console.log("Rey actual: ");
        if(this.#rey!=null){
            console.log("El rey actual es "+this.#rey.getNombre()+" de la "+this.#rey.getCasa().getNombre());
        }else{
            console.log("Rey Inexistente");
        }
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

    getNombre(){
        return this.#nombre;
    }

    setNombre(nombre){
        this.#nombre=nombre;
    }

    getRey(){
        return this.#rey;
    }

    setRey(rey){
        this.#rey=rey;
    }

}

export default Reinos;