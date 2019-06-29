import { Usuario } from './usuario';

export interface Autenticacao {
    usuario: Usuario;
    papel: string[];
    when: Date;
}
