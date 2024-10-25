import type { HttpContext } from '@adonisjs/core/http'
import { CreateUserHandler } from '../../src/application/handlers/create-user-handler.js'
import { CreateUserCommand } from '../../src/application/commands/create-user-command.js'
import { inject } from '@adonisjs/core'

@inject()
export default class UsersController {

    constructor(private createUserHandler: CreateUserHandler) { }

    public async store({ request, response }: HttpContext) {
        const { username, email, password } = request.only(['username', 'email', 'password'])

        const command = new CreateUserCommand(username, email, password);

        try {
            await this.createUserHandler.handle(command)
            return response.status(201).json({ username, email, password })
        } catch (error: any) {
            if (error.code === "E_INVALID_EMAIL") {
                return response.status(400).json({ message: error.message })
            }
            if (error.code === "E_USER_ALREADY_EXISTS") {
                return response.status(400).json({ message: error.message })
            }
            return response.status(500).json({ message: error.message })
        }
    }
}