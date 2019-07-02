package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Cliente extends User {
	String cpf
	String nome
	String email
	String telefone
	String sexo
	String data_nascimento
	
	Cliente(String c, String n, String e, String p, String u, String t, String s, String d) {
		this.cpf = c;
		this.nome = n;
		this.email = e;
		this.password = p;
		this.username = c; // login por cpf
		this.telefone = t;
		this.sexo = s;
		this.data_nascimento = d;
		save()
		UserRole.create(this, Role.get(2), true)
	}

	String toString(){
		return '{"cpf": "' + cpf + '", "nome": "' + nome + '", "email": "' + email + '", "telefone": "' + telefone + '", "sexo": "' + sexo + '", "data_nascimento": "' + data_nascimento + '"}'
    }
}