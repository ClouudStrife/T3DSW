package cidadesrest

import br.ufscar.dc.dsw.Cidade
import br.ufscar.dc.dsw.Cliente

class BootStrap {

    def init = { servletContext ->

        new File('cidades.txt').eachLine { line ->
            def tokens = line.tokenize(",")
            def cidade = new Cidade(nome: tokens[1], estado: tokens[0]);
            cidade.save flush: true
            if (cidade.hasErrors()) {
                println cidade.errors
            }
        }

        new File('clientes.txt').eachLine { line ->
            def tokens = line.tokenize(",")
            def cliente = new Cliente(cpf: tokens[0], nome: tokens[1], email: tokens[2], senha: tokens[3], telefone: tokens[4], sexo: tokens[5], data_nascimento: tokens[6]);
            cliente.save flush: true
            if (cliente.hasErrors()) {
                println cliente.errors
            }
        }
    }

    def destroy = {
    }
}
