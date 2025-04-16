package java.Leccion02.Enumeraciones;

public class testEnumeraciones {
    public static void main(String[] args){
        System.out.println("Dia 1: "+ Dias.LUNES);
        indicarDiaSemana(Dias.LUNES); // Las enumeraciones se tratan como cadenas
        // ahora se deben utilizar comillas , se accede a traves de el operador de punto
    }



    private static void indicarDiaSemana(Dias Dias){
        switch(Dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
                //agregar el resto de los dias de la semana
                //agregar default
        }

    }
    
}
