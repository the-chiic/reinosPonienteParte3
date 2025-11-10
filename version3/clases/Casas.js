import Personajes from './Personajes.js';
import Guerreros from './personajesEspeciales/Guerreros.js';

class Casas{

    #nombre;
    #lema;
    #miembros;

    /**
     * Constructor de la Clase Casas
     * 
     * @param nombre --> Nombre de la Casa
     * @param lema --> Lema de la casa
     * miembros --> Miembros de la casa
     * 
     */

    constructor(nombre, lema){
        this.#nombre=nombre;
        this.#lema=lema;
        this.#miembros=[];
    }


/*-------------------------------------------------------------------------------*/

    /**
     * Función insertarMiembro de las casas
     * 
     * @param personaje -> El objeto de personaje con sus datos lo metemos en miembros[]
     * 
     */

    insertarMiembro(personaje){
        if(personaje instanceof Personajes){
            if(personaje.getCasa().getNombre()==this.#nombre){
                if(!this.#miembros.includes(personaje)){
                    this.#miembros.push(personaje);
                }else{
                    console.log("Miembro Ya Incluido");
                }
            }else{
                console.log("Casa No Existente");
            }
        }else{
            console.log("Miembro Inválido");
        }
    }

    /**
     * Función leerMiembrosCasa de las casas
     * 
     * Muestra todos los miembros de una casa
     * 
     */

    leerMiembrosCasa(){
        let sw=0;
        console.log("Miembros de la "+this.getNombre());
        this.#miembros.forEach(miembro => {
            if(miembro.getCasa().getNombre()==this.getNombre()){
                sw=1;
                console.log("- "+miembro.getNombre());
            }
        });

        if(sw==0){
            console.log("Casa No Existente");
        }
    }

    /**
     * Función leerMiembrosCasaGuerreros de las casas
     * 
     * Muestra todos los miembros de una casa que son guerreros
     * 
     */

    leerMiembrosCasaGuerreros(){
        console.log("Miembros de la "+this.getNombre());
        this.#miembros.forEach(miembro => {
            if(miembro instanceof Guerreros){
                console.log("- "+miembro.getNombre());
            }
        });
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

    getLema(){
        return this.#lema;
    }

    setLema(lema){
        this.#lema=lema;
    }

}

export default Casas;