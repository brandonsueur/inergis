"use client";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import { Modal } from "@/components";

import ModalContext, { ModalInitParams } from "./context";

type ModalEntry = {
  initParams: ModalInitParams<any>;
};

const ModalProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [modalStack, setModalStack] = useState<ModalEntry[]>([]);

  const addModal = (params: ModalInitParams<any>) => {
    if (!!params.key && modalStack.find((v) => v.initParams.key === params.key))
      return;

    setModalStack([...modalStack, { initParams: params }]);
  };

  const closeModalByKey = (key: string) => {
    setModalStack(modalStack.filter((v) => v.initParams.key !== key));
  };

  const closeAllModals = () => {
    setModalStack([]);
  };

  const allModals = modalStack.map((m) => {
    const {
      component: Component,
      key,
      modalProps,
      componentProps,
    } = m.initParams;

    const closeEvent = () => {
      closeModalByKey(m.initParams.key);
      m.initParams.onClose?.();
    };

    return (
      <Modal key={key} open {...modalProps} onClose={closeEvent}>
        <Component onRequestClose={closeEvent} {...componentProps} />
      </Modal>
    );
  });

  return (
    <ModalContext.Provider
      value={{ addModal, closeAllModals, closeModalByKey }}
    >
      {children}
      {allModals}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
