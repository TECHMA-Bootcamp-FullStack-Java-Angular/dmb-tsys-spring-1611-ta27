package com.dmb.service;

import static java.util.Collections.emptyList;

import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.dmb.entities.Usuario;
import com.dmb.repository.UsuarioDAO;

@Service
public class UsuarioDetailsServiceImpl implements UserDetailsService {

	private UsuarioDAO iUsuarioDAO;

	public UsuarioDetailsServiceImpl(UsuarioDAO iUsuarioDAO) {
		this.iUsuarioDAO = iUsuarioDAO;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<Usuario> usuario = iUsuarioDAO.findByUsername(username);
		if (usuario.isEmpty()) {
			throw new UsernameNotFoundException(username);
		}
		return new User(usuario.get().getUsername(), usuario.get().getPassword(), emptyList());
	}
	
}
