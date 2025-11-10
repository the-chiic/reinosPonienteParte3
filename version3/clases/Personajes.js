import Casas from './Casas.js';

class Personajes{

    #nombre;
    #age;
    #estado;
    #casa;

    /**
     * Constructor de la Clase Personajes
     * 
     * @param nombre --> Nombre del Personaje
     * @param age --> Edad del Personaje
     * @param estado --> Saber si esta vivo o muerto el Personaje
     * @param casa --> Casa a la que pertenece el Personaje
     * 
     */

    constructor(nombre, age, casa){
        this.#nombre=nombre;
        this.#age=age;
        this.#estado=true;
        this.#casa=null;
        this.insertarCasa(casa);
    }


/*-------------------------------------------------------------------------------*/


    /**
     * Función frase del personaje
     * 
     * Muestra una descripción del personaje
     * 
     */

    frase(){
        console.log("Soy "+this.#nombre+" de la casa "+this.#casa.getNombre());
    }

    /**
     * Función muerte del personaje
     * 
     * Muestra que el personaje ha muerto
     * 
     */

    muerte(){
        if(this.#estado){
            this.#estado=false;
            console.log(this.#nombre+" ha muerto");
        }else{
            console.log("Error porque ya esta muerto");
        }
    }

    /**
     * Función insertarCasa del personaje
     * 
     * @param casa --> Objeto de Casas, si esta bien se le asigna y si no se le asigna null
     * 
     */

    insertarCasa(casa){
        if(this.#casa!=null){
            console.log("El Miembro Ya Tiene Casa Asignada");
        }else{
            if(casa instanceof Casas){
                this.#casa=casa;
                casa.insertarMiembro(this);
                console.log(this.#nombre+" ha sido añadido a la "+this.#casa.getNombre());
            }else{
                this.#casa=null;
                console.log("Casa Introducida Inválida");
            }
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

    getAge(){
        return this.#age;
    }

    setAge(age){
        this.#age=age;
    }

    getCasa(){
        return this.#casa;
    }

    setCasa(casa){
        this.#casa=casa;
    }

    getEstado(){
        return this.#casa;
    }

    setEstado(estado){
        this.#estado=estado;
    }

}

export default Personajes;