import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../auth/guard";
import { GetUser } from "../auth/decorator";
import { User } from "@prisma/client";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  @Get("me")
  getMe(@GetUser() user: User, @GetUser("email") email: string) {
    // console.log({
    //   user: req.user,
    // });
    console.log(email);
    return user;
  }
}
