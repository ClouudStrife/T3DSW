package br.ufscar.dc.dsw


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Locacao {
	String cpfCliente
	String cnpjLocadora
	String data
}