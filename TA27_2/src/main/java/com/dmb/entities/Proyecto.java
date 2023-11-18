package com.dmb.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Entity
@Table(name = "proyectos")
public class Proyecto {


	@Id
	private String id;

	private String nombre;

	private int horas;

	@ManyToMany(mappedBy  = "proyectos")
	@JsonIgnoreProperties("proyectos")
	private List<Cientifico> cientificos;


	public Proyecto() {
	}


	public Proyecto(String id, String nombre, int horas, List<Cientifico> cientificos) {

		this.id = id;
		this.nombre = nombre;
		this.horas = horas;
		this.cientificos = cientificos;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public int getHoras() {
		return horas;
	}


	public void setHoras(int horas) {
		this.horas = horas;
	}


	public List<Cientifico> getCientificos() {
		return cientificos;
	}


	public void setCientificos(List<Cientifico> cientificos) {
		this.cientificos = cientificos;
	}


}