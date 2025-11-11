import styles from "./index.module.scss";
import type { IButtonFavorite } from "../../shared/types";
import clsx from "clsx";

const Button = (props: IButtonFavorite) => {
    const { onClick, children, disabled, icon, btnType = "default", style, ...rest } = props;
    return (
        <button className={clsx(styles["btn"], styles[`btn_${btnType}`])} onClick={onClick} disabled={disabled} style={style} {...rest}>
            {icon && <span className={styles["btn__icon"]}>{icon}</span>}
            <span className={styles["btn__text"]}>{children}</span>
        </button>
    );
};

export default Button;
