package clases;


public class Escudo extends ElementoConNombre {
	
	private byte proteccion;

	public Escudo(String nombre, byte proteccion) {
		super(nombre);
		this.proteccion=proteccion;
	}

	public byte getProteccion() {
		return proteccion;
	}

	public void setProteccion(byte proteccion) {
		this.proteccion = proteccion;
	}

	@Override
	public String toString() {
		return "Escudo [proteccion=" + proteccion + "]";
	}
	

}
