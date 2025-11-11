import styles from "./index.module.scss";
import React, { useCallback, useState } from "react";
import clsx from "clsx";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import Arrow from "../../../shared/assets/icons/arrow.svg";
import type { InputDropdownProps, SortOptions } from "../../../shared/types";

const InputDropdown = (props: InputDropdownProps) => {
    const { options, value, onChange, style } = props;
    const [isOpened, setIsOpened] = useState(false);

    const switchOpened = useCallback(() => {
        setIsOpened((prev) => !prev);
    }, []);

    const selectOption = useCallback(
        (value: keyof SortOptions) => {
            onChange(value);
            setIsOpened(false);
        },
        [onChange],
    );

    const refOutside = useOutsideClick(() => {
        setIsOpened(false);
    });

    return (
        <div ref={refOutside} className={styles["input"]} style={style}>
            <div className={styles["input__control"]} onClick={switchOpened}>
                <span className={styles["input__title"]}>{options[value]}</span>
                <div className={clsx(styles["input__arrow"], isOpened && styles["input__arrow_opened"])}>
                    <Arrow />
                </div>
            </div>

            {isOpened && (
                <div className={styles["input__dropdown"]}>
                    {Object.entries(options).map(([key, val]) => (
                        <span key={key} onClick={() => selectOption(key as keyof SortOptions)}>
                            {val}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InputDropdown;
