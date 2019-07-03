package t3dsw

import br.ufscar.dc.dsw.*

class BootStrap {

    def init = { servletContext ->

        Role adminRole = new Role(authority: 'ROLE_ADMIN').save()
        Role clienteRole = new Role(authority: 'ROLE_CLIENTE').save()
        Role locadoraRole = new Role(authority: 'ROLE_LOCADORA').save()

        new File('clientes.txt').eachLine { line ->
            def tokens = line.tokenize(",")
			
			def cliente = new Cliente(tokens[0], tokens[1], tokens[2], tokens[3], tokens[2], tokens[4], tokens[5], tokens[6]);

            cliente.save flush: true
            if (cliente.hasErrors()) {
                println cliente.errors
            }
        }

        new File('locadora.txt').eachLine { line ->
            def tokens = line.tokenize(",")

            def locadora = new Locadora(tokens[0], tokens[1], tokens[2], tokens[3], tokens[4]);

            locadora.save flush: true
            if (locadora.hasErrors()) {
                println locadora.errors
            }
        }

        User user = new User(username: "admin@admin", password: "admin").save()
        UserRole.create(user, adminRole, true)

    }

    def destroy = {
    }
}
