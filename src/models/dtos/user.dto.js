class UserDto {
  constructor({ _id, name, lastname, email }) {
    this.fullname = `${name} ${lastname}`;
    this.email = `${email}`;
  }
}

export const convertUserToDto = (users) => {
  if (Array.isArray(users)) {
    return users.map((user) => new UserDto(user));
  } else {
    return new UserDto(users);
  }
};

export { UserDto };
