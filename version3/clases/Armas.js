class Armas{

    #nombre;
    #daño;
    #tipo;

    /**
     * Constructor de la Clase Armas
     * 
     * @param nombre --> Nombre del arma
     * @param daño --> Cantidad de daño que inflige el arma
     * @param tipo --> Tipo de daño de la arma
     * 
     */

    constructor(nombre, daño, tipo){
        this.#nombre=nombre;
        this.#daño=daño;
        this.#tipo=tipo;
    }


/*-------------------------------------------------------------------------------*/

    /**
     * Función descripcion de las armas
     * 
     * Muestra una descripción del arma
     * 
     */

    descripcion(){
        console.log(this.#nombre+" ("+this.#tipo+") - daño: "+this.#daño);
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

    getDaño(){
        return this.#daño;
    }

    setDaño(daño){
        this.#daño=daño;
    }

    getTipo(){
        return this.#tipo;
    }

    setTipo(tipo){
        this.#tipo=tipo;
    }

}

export default Armas;