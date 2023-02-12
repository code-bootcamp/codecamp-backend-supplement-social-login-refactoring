import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-kakao';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  constructor() {
    super({
      clientID: '32eb310de4573d866721bd4edde9109c',
      clientSecret: 'wwCj2nWHSLKSnM2VdGOD5BQc8ZPxOUEH',
      callbackURL: 'http://localhost:3000/login/kakao',
      scope: ['account_email', 'profile_nickname'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile._json);

    return {
      name: profile.displayName,
      email: profile._json.kakao_account.email,
      password: '1234',
      age: 0,
    };
  }
}
