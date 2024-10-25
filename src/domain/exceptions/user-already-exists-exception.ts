import { Exception } from '@poppinss/utils'

export default class UserAlreadyExistsException extends Exception {
    constructor() {
        super('El usuario ya está registrado', {
            status: 409,
            code: 'E_USER_ALREADY_EXISTS'
        });
    }
}
