import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = UsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
