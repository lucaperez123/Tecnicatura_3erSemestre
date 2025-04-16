package java.Leccion02.Enumeraciones; 

public enum Continentes {
    AFRICA(53, "1.2 billones"),
    ASIA(46, "1.1 billones"),
    EUROPA(44, "1.1 billones"),
    OCEANIA(14, "1.1 billones"),
    AMERICA(34, "1.1 billones");


    private final int paises; 
    private String habitantes;

    Continentes(int paises){
        this.paises = paises;
        this.habitantes = habitantes;
    }

    //Metodo get
    public int getPaises(){
        return this.paises;

    }

    public String gethabitantes(){
        return this.habitantes;
    }
}