package battle.royale;

import clases.Arma;
import clases.Escudo;
import clases.Luchador;

public class Main {

	public static void main(String[] args) {
		
	Arma espadaDeCorchopan= new Arma("Espada de corchopan",(byte)(5));
	System.out.println(espadaDeCorchopan);
	Escudo escudoDePlastico=new Escudo("Escudo de plástico",(byte)(2));
	 Luchador pepe=new Luchador("Pepe",espadaDeCorchopan,escudoDePlastico);
	 System.out.println(pepe);
	}

}
