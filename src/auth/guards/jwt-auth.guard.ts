import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {

    // ACA SE GENERA LA VALIDACION DE ROLES O TIPOS DE PERMISOS
}
 