package com.dmb.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="equipos")
public class Equipo {
	
	@Id
	private String numSerie;

	@ManyToOne
	@JoinColumn(name = "facultades")
	@JsonIgnore
	private Facultad facultad;

	@OneToMany(mappedBy = "equipo")
	@JsonIgnore
	private List<Reserva> reservas;

	public Equipo() {
	}

	public Equipo(String numSerie, Facultad facultad) {

		this.numSerie = numSerie;
		this.facultad = facultad;
	}

	public String getNumSerie() {
		return numSerie;
	}

	public void setNumSerie(String numSerie) {
		this.numSerie = numSerie;
	}


	public Facultad getFacultad() {
		return facultad;
	}

	public void setFacultad(Facultad facultad) {
		this.facultad = facultad;
	}

	public List<Reserva> getReservas() {
		return reservas;
	}

	public void setReservas(List<Reserva> reservas) {
		this.reservas = reservas;
	}



	
}