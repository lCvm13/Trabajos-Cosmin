package clases;

public class Arma extends ElementoConNombre{
	
	private byte daño;

	public Arma(String nombre, byte daño) {
		super(nombre);
		this.daño = daño;
	}

	public byte getDaño() {
		return daño;
	}

	public void setDaño(byte daño) {
		this.daño = daño;
	}

	@Override
	public String toString() {
		return super.toString()+" [daño=" + daño + "]";
	}
	

}
