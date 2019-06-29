package br.ufscar.dc.dsw


import grails.rest.*
import grails.converters.*

class LocacaoController extends RestfulController {
    static responseFormats = ['json', 'xml']
    LocacaoController() {
        super(Locacao)
    }
}
