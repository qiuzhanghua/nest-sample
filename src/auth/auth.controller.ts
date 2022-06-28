import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup() {
    return "I am Sign up";
  }

  @Post("signin")
  signin() {
    return "I'm Sign in";
  }
}
