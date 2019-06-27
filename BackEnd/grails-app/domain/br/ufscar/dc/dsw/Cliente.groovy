package br.ufscar.dc.dsw

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Cliente {
	String cpf
	String nome
	String email
	String senha
	String telefone
	String sexo
	String data_nascimento
}