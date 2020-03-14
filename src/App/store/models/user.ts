import { Base } from '@drieam/api';

export class User extends Base {
  // The ID of the user.
  public id: number;

  // The name of the user.
  public name: string;

  public  avatarUrl: string;
}
