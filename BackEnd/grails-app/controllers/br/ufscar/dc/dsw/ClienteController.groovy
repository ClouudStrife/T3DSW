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

	def save(Cliente c) {
		super.save();
		c.createUser(c.cpf, c.password);
	}

}
