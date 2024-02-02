import { Injectable, ForbiddenException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as argon from 'argon2';
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable({})
export class AuthService{
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
        ){}

    signup(dto: AuthDto){
        return {msg: "i have signed up"};
    }

    /**
     * 
     * @returns jwt access token
     */
    async signin(dto: AuthDto){
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email,
            },
        });
        if(!user){
            throw new ForbiddenException('Credentials incorrect')
        }

        const pwMatches = await argon.verify(user.hash, dto.password);

        if(!pwMatches){
            throw new ForbiddenException('Credentials Incorrect');
        }

        delete user.hash;

        return {msg: "i have signed in"};
    }
}