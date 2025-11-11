import styles from "./index.module.scss";
import React from "react";
import { clsx } from "clsx";
import Cross from "../../shared/assets/icons/cross.svg";

export interface modal {
    children: React.ReactNode;
    footer?: React.ReactNode;
    title?: string;
    onCloseModal?: () => void;
    size?: "default" | "small" | "large";
    zIndex?: string;
}

const ModalBase = (props: modal) => {
    const { children, title, onCloseModal, footer, size = "default", zIndex = "50" } = props;

    let footerLength = 0;

    if (React.isValidElement(footer)) {
        const element = footer as React.ReactElement<{ children?: React.ReactNode }>;
        footerLength = React.Children.count(element.props.children);
    }
    return (
        <div className={clsx(styles["modal"], styles[`modal__${size}`])} onClick={onCloseModal} style={{ zIndex: zIndex }}>
            <div className={clsx(styles["modal__windows"], styles[`modal__${size}__windows`])} onClick={(e) => e.stopPropagation()}>
                <div className={clsx(styles["modal__header"], styles[`modal__${size}__header`])}>
                    <div className={clsx(styles["modal__header__title"], styles[`modal__${size}__header__title`])}>{title}</div>
                    <div className={clsx(styles["modal__header__icon"], styles[`modal__${size}__header__icon`])} onClick={onCloseModal}>
                        <Cross />
                    </div>
                </div>
                <div className={clsx(styles["modal__body"], styles[`modal__${size}__body`])}>{children}</div>
                <div className={clsx(styles["modal__footer"], styles[`modal__${size}__footer`])} style={{ gridTemplateColumns: `repeat(${footerLength}, 1fr)` }}>
                    {footer}
                </div>
            </div>
        </div>
    );
};
export default ModalBase;
