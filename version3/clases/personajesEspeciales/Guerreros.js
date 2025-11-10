import Personajes from '../Personajes.js';
import Armas from '../Armas.js';
import Batallas from '../Batallas.js';

class Guerreros extends Personajes{

    #arma;
    #vida;
    #batalla;

    constructor(nombre, age, casa){
        super(nombre, age, casa);
        this.#vida=100;
        this.#arma=null;
        this.#batalla=null;
    }


/*-------------------------------------------------------------------------------*/


    /**
     * Función insertarArma del guerrero
     * 
     * @param arma --> Objeto de Armas, si esta bien se le asigna y si no se le asigna null
     * 
     */

    insertarArma(arma){
        if(this.#arma!=null){
            console.log("El Miembro Ya Tiene Arma Asignada");
        }else{
            if(arma instanceof Armas){
                this.#arma=arma;
                console.log(this.getNombre()+" ha equipado el arma "+this.#arma.getNombre());
            }else{
                this.#arma=null;
                console.log("Arma Introducida Inválida");
            }
        }
    }

    /**
     * Función entrenar del guerrero
     * 
     * String de información sobre como entrena el guerrero
     * 
     */

    entrenar(){
        console.log(this.getNombre()+" entrena sin descanso");
    }

    /**
     * Función luchar del guerrero
     * 
     * String de información sobre como lucha el guerrero
     * 
     */

    luchar(){
        console.log(this.getNombre()+" ataca con "+this.#arma.getNombre()+" haciendo "+this.#arma.getDaño()+" de daño");
    }

    /**
     * Función recibirDaño del guerrero
     * 
     * @param dañoRecibido --> Daño que se le restará a la vida del guerrero
     * 
     */

    recibirDaño(dañoRecibido){
        this.#vida-=dañoRecibido;
        if(this.#vida<=0){
            this.#vida=0;
            this.muerte();
            this.#batalla.registrarMuerte(this);
            console.log("Ha muerto "+this.getNombre());
        }
    }

    /**
     * Función asignarBatalla del guerrero
     * 
     * @param batalla --> Objeto de Batallas, para comprobar que esta en una batalla
     * 
     */

    comprobarBatalla(batalla){
        if(batalla instanceof Batallas){
            this.#batalla=batalla;
        }
    }

    /**
     * Función atacar del guerrero
     * 
     * @param enemigo --> Enemigo al que se le atacará
     * 
     */

    atacar(enemigo){
        if(enemigo instanceof Guerreros){
            let daño=Math.floor(this.#arma.getDaño()*(0.7+Math.random()*0.6));
            console.log(this.getNombre()+" ataca a "+enemigo.getNombre()+" recibio "+daño+" de daño");
            enemigo.recibirDaño(daño);
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

    getArma(){
        return this.#arma;
    }

    setArma(arma){
        this.#arma=arma;
    }

    getVida(){
        return this.#vida;
    }

    setVida(vida){
        this.#vida=vida;
    }

}

export default Guerreros;