import { Exception } from '@poppinss/utils'

export default class InvalidEmailException extends Exception {
    constructor() {
        super('El formato del email es inválido', {
            status: 400,
            code: 'E_INVALID_EMAIL'
        })
    }
}
