import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schemas/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService : JwtService
    ) {}
    

    async signUp


}
