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

	String toString(){
		return "{cpf: '$cpf', nome: '$nome', email: '$email', senha: '$senha', telefone: '$telefone', sexo: '$sexo', data_nascimento: '$data_nascimento'}"
    }
}