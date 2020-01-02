import { v1 } from "uuid";
let todoItems = [];

export const resolvers = {
  Query: {
    totalTodoItems: () => todoItems.length,
    allTodoItems: () => todoItems
  },
  Mutation: {
    postTodoItem(parent, args) {
      const newItem = {
        id: v1(),
        ...args
      };
      todoItems.push(newItem);
      return newItem;
    }
  }
};
