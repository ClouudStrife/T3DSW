import { Usuario } from './usuario';

export class Cliente extends Usuario {
    id:String;
    nome:String;
    cpf:String;
    email:String;
    senha:String;
    telefone:String;
    sexo:String;
    data_nascimento:String;
}