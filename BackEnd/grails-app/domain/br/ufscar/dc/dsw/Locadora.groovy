package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Locadora {
	String cnpj
	String nome
	String email
	String senha
	String cidade

	String toString(){
		return "{cnpj: '$cnpj', 'nome': '$nome', 'email': '$email', 'senha': '$senha', 'cidade': '$cidade', 'papel': 'locadora'}"
    }	
}