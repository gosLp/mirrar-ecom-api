import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controler";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";


@Module({
    imports:[JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule{}