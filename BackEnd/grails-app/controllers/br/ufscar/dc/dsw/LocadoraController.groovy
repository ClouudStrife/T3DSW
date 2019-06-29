package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*

class LocadoraController extends RestfulController {
    static responseFormats = ['json', 'xml']
    LocadoraController() {
        super(Locadora)
    }
}
