import { useCallback, useState } from "react";
import InputText from "../../inputs/InputText";
import styles from "./index.module.scss";
import InputDropdown from "../../inputs/InputDropdown";
import type { SortOptions, ToDoItemType } from "../../../shared/types";
import Button from "../../Button";
import Plus from "../../../shared/assets/icons/plus.svg";
import ToDoList from "../../ToDoList";
import ModalCreate from "../../modal/ModalCreate";
import Search from "../../../shared/assets/icons/search.svg";
import { valueSort } from "../../../shared/constants/todo";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function ToDo() {
    const [inputValue, setInputValue] = useState<string>("");
    const [typeSort, setTypeSort] = useState<keyof SortOptions>("all");
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [tasks, setTasks] = useLocalStorage<ToDoItemType[]>("tasks", []);

    const addTask = useCallback(
        (text: string) => {
            if (text.trim().length === 0) return;
            const newTask: ToDoItemType = {
                id: crypto.randomUUID(),
                text: text,
                completed: false,
            };
            setTasks((prev) => [...prev, newTask]);
        },
        [setTasks],
    );
    const deleteTask = useCallback(
        (id: string) => {
            setTasks((prev) => prev.filter((task) => task.id !== id));
        },
        [setTasks],
    );

    const toggleComplete = useCallback(
        (id: string) => {
            setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
        },
        [setTasks],
    );

    const editTask = useCallback(
        (id: string, text: string) => {
            setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, text } : task)));
        },
        [setTasks],
    );

    return (
        <>
            {openModal && <ModalCreate switchModal={() => setOpenModal((prev) => !prev)} addTask={addTask} />}
            <main className={styles["main"]}>
                <h1 className={styles["text"]}>TODO LIST</h1>
                <div className={styles["controls"]}>
                    <InputText placeholder="Поиск" onChange={setInputValue} delay={300} icon={<Search />} iconPosition="right" />
                    <div className={styles["controls_switches"]}>
                        <InputDropdown options={valueSort} value={typeSort} onChange={setTypeSort} />
                        <Button onClick={() => setOpenModal(true)} btnType="img">
                            <Plus />
                        </Button>
                    </div>
                </div>
                <div className={styles["list"]}>
                    <ToDoList typeSort={typeSort} valueSearch={inputValue} tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} editTask={editTask} />
                </div>
            </main>
        </>
    );
}
