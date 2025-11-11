import type { ToDoItemType } from "../shared/types";

export const filterTasks = (tasks: ToDoItemType[], typeSort: string, valueSearch: string): ToDoItemType[] => {
    let result = tasks.reverse();
    if (valueSearch) {
        result = result.filter((el) => el.text.toLowerCase().includes(valueSearch.toLowerCase()));
    }
    if (typeSort === "completed") return result.filter((el) => el.completed);
    if (typeSort === "uncompleted") return result.filter((el) => !el.completed);
    return result;
};

export const countActiveTasks = (tasks: ToDoItemType[]): number => tasks.filter((el) => !el.completed).length;
