package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Cliente {
	String cpf
	String nome
	String email
	String telefone
	String password
	String sexo
	String data_nascimento

	Cliente(String c, String n, String e, String p, String u, String t, String s, String d) {
		this.cpf = c;
		this.nome = n;
		this.email = e;
		this.telefone = t;
		this.password = p;
		this.sexo = s;
		this.data_nascimento = d;

		createUser(c, p);
	}

	def createUser(String u, String p) {
		User us = new User(username: u, password: p);
		us.save();
		UserRole.create(us, Role.get(2), true);
	}
}