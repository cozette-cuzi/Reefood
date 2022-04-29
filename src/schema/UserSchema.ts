import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: 'username is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - 6 charachters minimum'),
    type: string({
      required_error: 'Type is required',
    }),
  }),
});

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, 'body.passwordConfirmation'>;
