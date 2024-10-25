import { UserRepository } from '../../domain/repositories/user-repository.js'
import UserEntity from '../../domain/entities/User.js';
import User from '#models/user';

export class LucidUserRepository implements UserRepository {

  public async create(userEntity: UserEntity): Promise<User> {
    const userData = {
      username: userEntity.username,
      email: userEntity.email,
      password: userEntity.password,
    };

    return await User.create(userData);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await User.findBy('email', email)
  }
}
