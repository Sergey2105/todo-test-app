import clsx from "clsx";
import useDebounce from "../../../hooks/useDebounce";
import type { InputTextProps } from "../../../shared/types";
import styles from "./index.module.scss";

export default function InputText(props: InputTextProps) {
    const { placeholder, onChange, delay, style, icon, iconPosition = "right", label, id, value } = props;

    const valueOnChange = useDebounce((value: string) => {
        onChange(value);
    }, delay ?? 0);

    return (
        <div className={styles["wrapper"]}>
            {label && (
                <label className={styles["label"]} htmlFor={id}>
                    {label}
                </label>
            )}
            {icon && <span className={clsx(styles["icon"], styles[`icon_${iconPosition}`])}>{icon}</span>}
            <input
                id={id}
                className={clsx(styles["input"], styles[`input_${iconPosition}`])}
                placeholder={placeholder}
                onChange={(e) => valueOnChange(e.target.value)}
                style={style}
                value={value}
            />
        </div>
    );
}
