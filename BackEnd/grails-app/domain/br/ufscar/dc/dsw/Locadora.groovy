package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Locadora {
	String cnpj
	String nome
	String email
	String password
	String cidade

	Locadora(String c, String n, String e, String p, String ci) {
		this.cnpj = c;
		this.nome = n;
		this.email = e;
		this.password = p;
		this.cidade = ci;

		createUser(c, p);
	}

	def createUser(String u, String p) {
		User us = new User(username: u, password: p);
		us.save();
		UserRole.create(us, Role.get(3), true);
	}
}