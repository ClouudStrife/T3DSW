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
}
