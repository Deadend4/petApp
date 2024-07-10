import { createContext } from "react";

export const MenuContext = createContext<{isMenu: boolean, setIsMenu?: React.Dispatch<React.SetStateAction<boolean>>}>({isMenu: false});