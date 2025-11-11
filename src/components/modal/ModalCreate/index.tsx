import { useState } from "react";
import type { ModalCreateProps } from "../../../shared/types";
import Button from "../../Button";
import InputText from "../../inputs/InputText";
import ModalBase from "../../modalBase";

const ModalCreate = (props: ModalCreateProps) => {
    const { switchModal, addTask } = props;
    const [inputValue, setInputValue] = useState<string>("");

    const confirmAdd = () => {
        addTask(inputValue);
        setInputValue("");
        switchModal();
    };

    return (
        <>
            <ModalBase
                title="Создать задачу"
                onCloseModal={switchModal}
                size="default"
                footer={
                    <>
                        <Button btnType="white" onClick={switchModal}>
                            Закрыть
                        </Button>
                        <Button btnType="default" onClick={confirmAdd} disabled={inputValue.trim().length === 0}>
                            Подтвердить
                        </Button>
                    </>
                }
            >
                <InputText label="Наименование задачи" id="task" onChange={setInputValue} />
            </ModalBase>
        </>
    );
};
export default ModalCreate;
