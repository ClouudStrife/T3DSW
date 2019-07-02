package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Locadora {
	String cnpj
	String nome
	String email
	String username
	String password
	String cidade

	Locadora(String c, String n, String e, String p, String ci) {
		this.cnpj = c;
		this.nome = n;
		this.email = e;
		this.password = p;
		this.username = c; //login por cnpj
		this.cidade = ci;
		
		def us = new User(username: c, password: p);
		us.save();
		UserRole.create(us, Role.get(3), true);
	}

	String toString(){
		return '{"cnpj": "' + cnpj + '", "nome": "' + nome + '", "email": "' + email + '", "password": "' + password + '", "cidade": "' + cidade + '"}'
    }
}