package java.Leccion02.BloquesInicializacion;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;


    static{ // Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersonas;
    }

    { //Bloque de inicializacion NO estatico (contexto dinamico)
        System.out.println("ejecucion del bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++; // incrementamos el atributo
    }

    //Los bloques de inicializacion se ejecutan antes del constructor

    public Persona(){
        System.out.println("Ejecucion del constructor");
    }

    public int getidPersona(){
        return this.idPersona;
    }
    
}
