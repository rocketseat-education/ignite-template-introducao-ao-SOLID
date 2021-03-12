import { validate } from "uuid";

import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";

describe("UsersRepository", () => {
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
  });

  it("should be able to create new users", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    expect(user).toMatchObject({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
      admin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });

  it("should be able to list all users", () => {
    const user = usersRepository.create({
      name: "Danilo Vieira",
      email: "danilo@rocketseat.com",
    });

    const users = usersRepository.list();

    expect(users).toStrictEqual(expect.arrayContaining([user]));
  });

  it("should be able to find user by ID", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const findUser = usersRepository.findById(user.id);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      admin: false,
    });
    expect(validate(findUser.id)).toBe(true);
    expect(findUser.created_at).toBeInstanceOf(Date);
    expect(findUser.updated_at).toBeInstanceOf(Date);
  });

  it("should be able to find user by e-mail address", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const findUser = usersRepository.findByEmail(user.email);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      admin: false,
    });
    expect(validate(findUser.id)).toBe(true);
    expect(findUser.created_at).toBeInstanceOf(Date);
    expect(findUser.updated_at).toBeInstanceOf(Date);
  });

  it("should be able to turn an user as admin", () => {
    const user = usersRepository.create({
      name: "Vinicius Fraga",
      email: "vinifraga@rocketseat.com",
    });

    const admin = usersRepository.turnAdmin(user);

    expect(admin).toMatchObject({
      name: user.name,
      email: user.email,
      admin: true,
    });
    expect(validate(admin.id)).toBe(true);
    expect(admin.created_at).toBeInstanceOf(Date);
    expect(admin.updated_at).toBeInstanceOf(Date);
  });
});
