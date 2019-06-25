package br.ufscar.dc.dsw

import grails.rest.*

@Resource(uri = '/cidades', readOnly = false, formats = ['json', 'xml'])
class Cidade {
    String nome
    String estado
}
