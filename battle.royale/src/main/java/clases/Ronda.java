package clases;

import java.util.Arrays;

public class Ronda extends ElementoConNombre {
	
	private Combate [] combate;
	public Ronda(String nombre) {
		super(nombre);
		this.combate=combate;
	}
	public Combate[] getCombate() {
		return combate;
	}
	public void setCombate(Combate[] combate) {
		this.combate = combate;
	}
	@Override
	public String toString() {
		return "Ronda [combate=" + Arrays.toString(combate) + "]";
	}
	
	
}
