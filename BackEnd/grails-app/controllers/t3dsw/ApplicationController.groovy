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
		Cliente cl = Cliente.find { cpf == params.documento && senha == params.senha }

		if (cl) {
			render cl
		} else {
			Locadora lo = Locadora.find { cnpj == params.documento && senha == params.senha }
			
			if (cl) {
				render lo
			} else {
				render "Nenhum usuário encontrado ou senha inválida"
			}
		}
	}
}
