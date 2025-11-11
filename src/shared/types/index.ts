export interface InputTextProps {
    onChange: (value: string) => void;
    placeholder?: string;
    style?: React.CSSProperties;
    delay?: number;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    label?: string;
    id?: string;
    value?: string;
}

export interface SortOptions {
    all: string;
    completed: string;
    uncompleted: string;
}

export interface InputDropdownProps {
    options: SortOptions;
    value: keyof SortOptions;
    onChange: (value: keyof SortOptions) => void;
    style?: React.CSSProperties;
}

export interface IButtonFavorite extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    btnType?: "img" | "default" | "white" | "img-transparent";
    style?: React.CSSProperties;
}

export interface ToDoItemProps {
    children: React.ReactNode;
    completed: boolean;
    onEdit: () => void;
    onDelete: () => void;
    onToggle: () => void;
}

export interface ModalCreateProps {
    switchModal: () => void;
    addTask: (val: string) => void;
}

export interface ModalEditProps {
    switchModal: () => void;
    onConfirm: (val: string) => void;
    defaultValue: string;
}

export interface ToDoItemType {
    id: string;
    text: string;
    completed: boolean;
}

export interface ToDoListProps {
    typeSort: keyof SortOptions;
    tasks: ToDoItemType[];
    valueSearch: string;
    deleteTask: (id: string) => void;
    toggleComplete: (id: string) => void;
    editTask: (id: string, text: string) => void;
}
