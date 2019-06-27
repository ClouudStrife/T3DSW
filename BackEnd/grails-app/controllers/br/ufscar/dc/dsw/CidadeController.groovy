
package br.ufscar.dc.dsw

import grails.rest.*
import grails.converters.*

class CidadeController extends RestfulController {
    static responseFormats = ['json', 'xml']
    CidadeController() {
        super(Cidade)
    }

    /* 
        def List<Cidade> index() {
        respond Cidade.list(), view: 'index'
    } 
    */

    def List<Cidade> getByEstado(params) {
        respond Cidade.findAllByEstado(params.estado), view: 'index'
    }
}
