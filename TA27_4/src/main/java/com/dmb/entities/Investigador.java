package com.dmb.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "investigadores")
public class Investigador {

	@Id
	@Column(name = "dni")
	private String DNI;

	private String fullname;

	@ManyToOne
	@JoinColumn(name = "facultad")
	@JsonIgnore
	private Facultad facultad;

	@OneToMany(mappedBy = "investigador")
	@JsonIgnore
	private List<Reserva> reservas;

	public Investigador() {
	}

	public Investigador(String DNI, String nomApels, Facultad facultad) {
		this.DNI = DNI;
		this.fullname = nomApels;
		this.facultad = facultad;
	}

	public String getDNI() {
		return DNI;
	}

	public void setDNI(String dNI) {
		DNI = dNI;
	}

	public String getNomApels() {
		return fullname;
	}

	public void setNomApels(String nomApels) {
		this.fullname = nomApels;
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
