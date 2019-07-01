import { Usuario } from './usuario';

export interface Autenticacao {
    usuario: Usuario;
    papel: string[];
    access_token: string;
    expires_in: number;
    refresh_token: string;
    when: Date;
}
