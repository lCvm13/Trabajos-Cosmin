package clases;

public class Berserker extends Luchador {
	
	private Arma segundoArma;

	public Berserker(String nombre, Arma arma, Escudo escudo) {
		super(nombre, arma, escudo);
		this.segundoArma=segundoArma;
		
	}

	public Arma getSegundoArma() {
		return segundoArma;
	}

	public void setSegundoArma(Arma segundoArma) {
		this.segundoArma = segundoArma;
	}

	@Override
	public String toString() {
		return "Berserker [segundoArma=" + segundoArma + "]";
	}
	
	
}
