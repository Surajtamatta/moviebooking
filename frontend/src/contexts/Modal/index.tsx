import { createContext } from "react";

interface ModalContext {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  
}
export const ShowModal = createContext<ModalContext>({
  isModalOpen: true,
  setModalOpen: () => {},
});
