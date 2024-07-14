export type UserDataTypes = {
  id: string;
  name: string;
  email: string;
  tasksInfo: {
    total: number;
    completed: number;
    pending: number;
    late: number;
  };
};
