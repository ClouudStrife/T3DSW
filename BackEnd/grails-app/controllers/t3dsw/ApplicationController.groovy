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
		if (params.documento == "admin@admin" && params.senha == "admin") {
			render "{'papel': 'admin'}"
		} else {
			Cliente cl = Cliente.find { cpf == params.documento && senha == params.senha }

			if (cl) {
				render cl
			} else {
				Locadora lo = Locadora.find { cnpj == params.documento && senha == params.senha }
				
				if (lo) {
					render lo
				} else {
					render "{'erro': 'Usuário ou senha não encontrados'}"
				}
			}
		}
	}
}
