package com.dmb.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "maquinas_registradoras")
public class Maquina_Registradora {




	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long codigo;
	private int piso;

    @JsonIgnore
	@OneToMany(mappedBy = "maquinaRegistradora" , cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Venta> ventas;
    
    public Maquina_Registradora() {

	}
    
	public Maquina_Registradora(Long codigo, int piso, List<Venta> ventas) {

		this.codigo = codigo;
		this.piso = piso;
		this.ventas = ventas;
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public int getPiso() {
		return piso;
	}

	public void setPiso(int piso) {
		this.piso = piso;
	}

	public List<Venta> getVentas() {
		return ventas;
	}

	public void setVentas(List<Venta> ventas) {
		this.ventas = ventas;
	}

}
