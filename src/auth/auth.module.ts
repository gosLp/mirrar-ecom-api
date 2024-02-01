import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controler";
import { AuthService } from "./auth.service";


@Module({
    imports:[],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule{}