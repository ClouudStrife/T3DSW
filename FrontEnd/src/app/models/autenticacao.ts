import { Usuario } from './usuario';

export interface Autenticacao {
    username: Usuario;
    roles: string[];
    access_token: string;
    expires_in: number;
    refresh_token: string;
    when: Date;
}
