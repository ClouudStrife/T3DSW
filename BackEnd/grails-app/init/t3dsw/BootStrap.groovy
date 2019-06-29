package t3dsw

import br.ufscar.dc.dsw.*

class BootStrap {

    def init = { servletContext ->

        new File('clientes.txt').eachLine { line ->
            def tokens = line.tokenize(",")
            def cliente = new Cliente(cpf: tokens[0], nome: tokens[1], email: tokens[2], senha: tokens[3], telefone: tokens[4], sexo: tokens[5], data_nascimento: tokens[6]);
            cliente.save flush: true
            if (cliente.hasErrors()) {
                println cliente.errors
            }
        }

        new File('locadora.txt').eachLine { line ->
            def tokens = line.tokenize(",")
            def locadora = new Locadora(cnpj: tokens[0], nome: tokens[1], email: tokens[2], senha: tokens[3], cidade: tokens[4]);
            locadora.save flush: true
            if (locadora.hasErrors()) {
                println locadora.errors
            }
        }
    }

    def destroy = {
		// Cliente.getAll().each { cliente ->
		// 	println cliente
		// }
    }
}
