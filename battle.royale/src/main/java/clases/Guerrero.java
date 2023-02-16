package clases;

public class Guerrero extends Luchador{
	
	private Escudo segundoEscudo;

	public Guerrero(String nombre, Arma arma, Escudo escudo) {
		super(nombre, arma, escudo);
		this.segundoEscudo=segundoEscudo;
	}

	public Escudo getSegundoEscudo() {
		return segundoEscudo;
	}

	public void setSegundoEscudo(Escudo segundoEscudo) {
		this.segundoEscudo = segundoEscudo;
	}

	@Override
	public String toString() {
		return "Guerrero [segundoEscudo=" + segundoEscudo + "]";
	}
	
}
