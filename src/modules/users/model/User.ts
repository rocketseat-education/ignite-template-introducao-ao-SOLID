import { v4 as uuidV4 } from "uuid";

class User {
  readonly id?: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
    if (!this.admin) this.admin = false;
  }
}

export { User };
