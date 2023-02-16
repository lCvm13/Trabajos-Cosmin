package clases;

public class Luchador extends ElementoConNombre {
	
	private Arma arma;
	private Escudo escudo;

	public Luchador(String nombre,Arma arma, Escudo escudo) {
		super(nombre);
		this.arma=arma;
		this.escudo=escudo;
	}

	public Arma getArma() {
		return arma;
	}

	public void setArma(Arma arma) {
		this.arma = arma;
	}

	public Escudo getEscudo() {
		return escudo;
	}

	public void setEscudo(Escudo escudo) {
		this.escudo = escudo;
	}

	@Override
	public String toString() {
		return "Luchador (arma= " + arma + ", escudo= " + escudo + ")";
	}

	
	

}
