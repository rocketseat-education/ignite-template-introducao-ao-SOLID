import { v4 } from "uuid";

import { UsersRepository } from "../../../modules/users/repositories/implementations/UsersRepository";
import { ShowUserProfileUseCase } from "../../../modules/users/useCases/showUserProfile/ShowUserProfileUseCase";

describe("ShowUserProfileUseCase", () => {
  let usersRepository: UsersRepository;
  let showUserProfileUseCase: ShowUserProfileUseCase;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    showUserProfileUseCase = new ShowUserProfileUseCase(usersRepository);
  });

  it("should be able to get user profile by ID", () => {
    const user = usersRepository.create({
      name: "Danilo Vieira",
      email: "danilo@rocketseat.com",
    });

    const findUser = showUserProfileUseCase.execute({ user_id: user.id });

    expect(findUser).toMatchObject(user);
  });

  it("should not be able to show profile of a non existing user", () => {
    expect(() => {
      showUserProfileUseCase.execute({ user_id: v4() });
    }).toThrow();
  });
});
