import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, beforeSave, column } from '@adonisjs/lucid/orm'
import { v4 as uuidv4 } from 'uuid'
import hash from '@adonisjs/core/services/hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id?: number

  @column()
  public uuid?: string

  @column()
  public username?: string

  @column()
  public email?: string

  @column({ serializeAs: null })
  public password?: string

  @column.dateTime({ autoCreate: true })
  public createdAt?: DateTime

  @column.dateTime()
  public updatedAt?: DateTime | null

  @column.dateTime()
  public deletedAt?: DateTime | null

  @beforeCreate()
  public static generateUuid(user: User) {
    user.uuid = uuidv4();
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await hash.make(user.password as string);
    }
  }
}
