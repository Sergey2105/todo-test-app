import styles from "./index.module.scss";
import type { ToDoItemProps } from "../../shared/types";
import Button from "../Button";
import Pen from "../../shared/assets/icons/pen.svg";
import Trash from "../../shared/assets/icons/trash.svg";
import { memo, useId } from "react";
import clsx from "clsx";

function ToDoItem(props: ToDoItemProps) {
    const { children, onEdit, onDelete, completed, onToggle } = props;
    const id = useId();

    return (
        <>
            <div className={styles["main"]}>
                <div className={styles["main__info"]}>
                    <input className={styles["main__input"]} type="checkbox" id={id} checked={completed} onChange={onToggle} />
                    <label htmlFor={id} className={clsx(styles["main__text"], completed && styles["main__text-completed"])}>
                        {children}
                    </label>
                </div>
                <div className={styles["main__controls"]}>
                    <Button onClick={onEdit} btnType="img-transparent">
                        <Pen />
                    </Button>
                    <Button onClick={onDelete} btnType="img-transparent">
                        <Trash />
                    </Button>
                </div>
            </div>
        </>
    );
}
export default memo(ToDoItem);
