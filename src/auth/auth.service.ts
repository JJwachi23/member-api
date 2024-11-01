import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/services/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly _users: UsersService,
        private readonly _jwt: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any>{
        const user = await this._users
    }

}
