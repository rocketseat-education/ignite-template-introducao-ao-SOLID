import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "../../../modules/users/useCases/createUser/CreateUserUseCase";

describe("CreateUserUseCase", () => {
  let createUserUseCase: CreateUserUseCase;
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    createUserUseCase = new CreateUserUseCase(usersRepository);
  });

  it("should be able to create new users", () => {
    const user = createUserUseCase.execute({
      name: "Danilo Vieira",
      email: "danilo@rocketseat.com",
    });

    expect(usersRepository.list()).toStrictEqual([user]);
  });

  it("should not be able to create new users when email is already taken", () => {
    expect(() => {
      createUserUseCase.execute({
        name: "Danilo Vieira",
        email: "danilo@rocketseat.com",
      });
    }).toThrow();
  });
});
