export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  user: User | undefined;
};

export type ServerTodo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};
