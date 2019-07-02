package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*
import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN'])
class ClienteController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ClienteController() {
        super(Cliente)
    }

	def save() {
		super.save();
		def c = Cliente.last()
		c.createUser(c.cpf, c.password);
	}
}