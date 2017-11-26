import {Comment} from './comment';

export class Consultant {
  id: Number;
  comments: Array<Comment>;
  created: Date;
  modified: Date;
  uuid: String;
  email: String;
  short_name: String;
  full_name: String;
  date_joined: Date;
  status: String;
  gender: String;
  short_me: String;
  location: String;
  profile_picture: String;
}
