import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-naver-v2';

export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
  constructor() {
    super({
      clientID: '네이버ID',
      clientSecret: '네이버시크릿',
      callbackURL: 'http://localhost:3000/login/naver',
      scope: ['email', 'name'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      name: profile.name,
      email: profile.email,
      password: '1234',
      age: 0,
    };
  }
}
