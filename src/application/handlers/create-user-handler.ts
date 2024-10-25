import { CreateUserCommand } from '../commands/create-user-command.js'
import UserEntity from '#src/domain/entities/User'
import User from '#models/user';
import { inject } from '@adonisjs/core';
import { LucidUserRepository } from '../../infrastructure/repositories/user-repository.js';
import UserAlreadyExistsException from '#src/domain/exceptions/user-already-exists-exception';
import InvalidEmailException from '#src/domain/exceptions/invalid-email-exception';

@inject()
export class CreateUserHandler {

    constructor(private readonly userRepository: LucidUserRepository) { }

    public async handle(command: CreateUserCommand): Promise<User> {
        const user = new UserEntity(command.username, command.email, command.password)

        if (await this.userRepository.findByEmail(user.email)) throw new UserAlreadyExistsException();

        if (user.isValidEmail() === false) throw new InvalidEmailException();

        return await this.userRepository.create(user);
    }
}
