package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*

class ClienteController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ClienteController() {
        super(Cliente)
    }
}
