package com.dmb.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    private String id;

    @ManyToOne
    @JoinColumn(name = "FK_facultad_investigador")
    private Investigador investigador;

    @ManyToOne
    @JoinColumn(name = "FK_facultad_equipo")
    private Equipo equipo;

    @Column(name = "fechaInicio")
    private String fechaInicio;

    @Column(name = "fechaFin")
    private String fechaFin;

    public Reserva() {
    }

    public Reserva(Investigador investigador, Equipo equipo, String fechaInicio, String fechaFin) {
        this.id = investigador.getDNI() + "-" + equipo.getNumSerie();
        this.investigador = investigador;
        this.equipo = equipo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }

    @JsonIgnore
    public Investigador getInvestigador() {
        return investigador;
    }

    public void setInvestigador(Investigador investigador) {
        this.investigador = investigador;
    }

    @JsonIgnore
    public Equipo getEquipo() {
        return equipo;
    }

    public void setEquipo(Equipo equipo) {
        this.equipo = equipo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(String fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public String getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(String fechaFin) {
        this.fechaFin = fechaFin;
    }
}

