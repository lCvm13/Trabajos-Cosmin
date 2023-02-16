package clases;

import java.util.Arrays;

public class Torneo extends ElementoConNombre {
	
	private Ronda[] ronda;

	public Torneo(String nombre) {
		super(nombre);
		this.ronda=ronda;
		
	}

	public Ronda[] getRonda() {
		return ronda;
	}

	public void setRonda(Ronda[] ronda) {
		this.ronda = ronda;
	}

	@Override
	public String toString() {
		return "Torneo [ronda=" + Arrays.toString(ronda) + "]";
	}
	
	
}
