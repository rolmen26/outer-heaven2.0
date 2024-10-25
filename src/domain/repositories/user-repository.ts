import User from '#models/user';
import UserEntity from '../entities/User.js';

export interface UserRepository {
    create(user: UserEntity): Promise<User>
    findByEmail(email: string): Promise<User | null>
}