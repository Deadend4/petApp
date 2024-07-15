import { createContext,  useContext, useState } from "react";

export const MenuContext = createContext<{isMenuShown: boolean, setIsMenuShown: React.Dispatch<React.SetStateAction<boolean>>}>({isMenuShown: true, setIsMenuShown: () => {}});
export const useMenuContext = () => useContext(MenuContext);

interface MenuProviderProps {
    children: React.ReactNode[] | React.ReactNode;
}
export function MenuProvider({children}: MenuProviderProps):JSX.Element {
    const [isMenuShown, setIsMenuShown] = useState(false);
    
    return (<MenuContext.Provider value={{isMenuShown, setIsMenuShown}}>
        {children}
    </MenuContext.Provider>);
}