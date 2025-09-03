"use client";

import { ModalProps } from "@/components/modal";
import { FunctionComponent, createContext, useContext } from "react";

export type ModalInitParams<SubComponentProps> = {
  key: string;
  component: FunctionComponent<
    SubComponentProps & { onRequestClose: () => void }
  >;
  componentProps?: SubComponentProps;
  modalProps?: Partial<ModalProps>;
  onClose?: () => void;
};

type ModalContextData = {
  addModal: <SubComponentProps>(
    params: ModalInitParams<SubComponentProps>,
  ) => void;
  closeModalByKey?: (key: string) => void;
  closeAllModals?: () => void;
};

const ModalContext = createContext<ModalContextData>({
  addModal: () => {},
});

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export default ModalContext;
