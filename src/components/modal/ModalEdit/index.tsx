import { useState } from "react";
import type { ModalEditProps } from "../../../shared/types";
import Button from "../../Button";
import InputText from "../../inputs/InputText";
import ModalBase from "../../modalBase";
import styles from "./index.module.scss";

const ModalEdit = (props: ModalEditProps) => {
    const { switchModal, onConfirm, defaultValue } = props;
    const [inputValue, setInputValue] = useState<string>(defaultValue);

    return (
        <>
            <ModalBase
                title="Изменить задачу"
                onCloseModal={switchModal}
                size="default"
                footer={
                    <>
                        <Button btnType="white" onClick={switchModal}>
                            Закрыть
                        </Button>
                        <Button btnType="default" onClick={() => onConfirm(inputValue)} disabled={inputValue.trim().length === 0}>
                            Подтвердить
                        </Button>
                    </>
                }
            >
                <div className={styles["text"]}>
                    <InputText label="Наименование задачи" id="task" onChange={setInputValue} value={inputValue} />
                </div>
            </ModalBase>
        </>
    );
};
export default ModalEdit;
