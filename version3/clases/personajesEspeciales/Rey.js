import Personajes from '../Personajes.js';

class Rey extends Personajes{

    #años;

    constructor(nombre, age, casa, años){
        super(nombre, age, casa);
        this.#años=años;
    }


/*-------------------------------------------------------------------------------*/

    /**
     * Función gobernar del personaje
     * 
     * String de información sobre como gobierna el rey
     * 
     */

    gobernar(){
        console.log(this.getNombre()+" gobierna con sabiduría desde hace "+this.#años+" años");
    }

    /**
     * Función luchar del personaje
     * 
     * String de información sobre como lucha el rey
     * 
     */

    luchar(){
        console.log(this.getNombre()+" destroza a sus enemigos");
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

    getAños(){
        return this.#años;
    }

    setAños(años){
        this.#años=años;
    }

}

export default Rey;