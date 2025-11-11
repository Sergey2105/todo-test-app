import { useCallback, useMemo, useState } from "react";
import ModalEdit from "../modal/ModalEdit";
import ToDoItem from "../ToDoItem";
import styles from "./index.module.scss";
import type { ToDoListProps } from "../../shared/types";
import { usePluralize } from "../../hooks/usePluralize";
import { countActiveTasks, filterTasks } from "../../utils/todoHelpers";

export default function ToDoList(props: ToDoListProps) {
    const { typeSort, tasks, valueSearch, deleteTask, toggleComplete, editTask } = props;
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const pluralize = usePluralize();

    const confirmEdit = (text: string) => {
        if (editingId) {
            editTask(editingId, text);
            setOpenModal(false);
            setEditingId(null);
        }
    };

    const handleEdit = useCallback((id: string) => {
        setEditingId(id);
        setOpenModal(true);
    }, []);

    const handleDelete = useCallback((id: string) => deleteTask(id), [deleteTask]);
    const handleToggle = useCallback((id: string) => toggleComplete(id), [toggleComplete]);

    const filteredTasks = useMemo(() => filterTasks(tasks, typeSort, valueSearch), [tasks, typeSort, valueSearch]);

    const activeCount = useMemo(() => countActiveTasks(tasks), [tasks]);

    return (
        <>
            {openModal && (
                <ModalEdit switchModal={() => setOpenModal((prev) => !prev)} onConfirm={confirmEdit} defaultValue={tasks.find((task) => task.id === editingId)?.text || ""} />
            )}

            {filteredTasks && filteredTasks.length > 0 && (
                <div className={styles["header"]}>
                    Осталось {activeCount} {pluralize(activeCount, ["задача", "задачи", "задач"])}
                </div>
            )}

            <div className={styles["list"]}>
                {filteredTasks && filteredTasks.length > 0 ? (
                    filteredTasks?.map((task) => (
                        <ToDoItem
                            key={task.id}
                            completed={task.completed}
                            onEdit={() => handleEdit(task.id)}
                            onDelete={() => handleDelete(task.id)}
                            onToggle={() => handleToggle(task.id)}
                        >
                            {task.text}
                        </ToDoItem>
                    ))
                ) : (
                    <div className={styles["list_empty"]}>Список задач пуст</div>
                )}
            </div>
        </>
    );
}
