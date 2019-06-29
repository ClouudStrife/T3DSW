package t3dsw

import grails.core.GrailsApplication
import grails.plugins.*
import br.ufscar.dc.dsw.*

class ApplicationController implements PluginManagerAware {

    GrailsApplication grailsApplication
    GrailsPluginManager pluginManager

    def index() {
        [grailsApplication: grailsApplication, pluginManager: pluginManager]
    }

	def login() {
		if (request.JSON.documento == "admin@admin" && request.JSON.senha == "admin") {
			render '{"papel": ["admin"]}'
		} else {
			Cliente cl = Cliente.find { cpf == request.JSON.documento && senha == request.JSON.senha }

			if (cl) {
				render '{"papel": ["cliente"], "usuario": '+cl+'}'
			} else {
				Locadora lo = Locadora.find { cnpj == request.JSON.documento && senha == request.JSON.senha }
				
				if (lo) {
					render '{"papel": ["locadora"], "usuario": '+lo+'}'
				} else {
					render '{"erro": true, "mensagem": "Usuário ou senha não encontrados"}'
				}
			}
		}
	}
}
