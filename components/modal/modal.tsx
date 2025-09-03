"use client";
import React, { useRef, useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import classNames from "clsx";
import { useOnClickOutside } from "@/hooks";
import { XMarkIcon } from "@heroicons/react/24/outline";

export interface ModalProps {
  open: boolean;
  type?: "modal" | "dialog";
  children: React.ReactNode;
  onClose?: (e: Event) => void;
  hideClose?: boolean;
  allowOutsideClick?: boolean;
}

export const Modal = ({
  open,
  type = "modal",
  children,
  onClose,
  hideClose = false,
  allowOutsideClick = true,
}: ModalProps) => {
  const modalRef = useRef<any>(null);
  const outsideClick = allowOutsideClick || type === "modal";
  const [modalMaxHeight, setModalMaxHeight] = useState("90vh");

  useOnClickOutside(modalRef, () => {
    if (open && outsideClick) onClose?.(new Event("click outside closed"));
  });

  const escFunction = useCallback(
    (event: KeyboardEvent) => event.keyCode === 27 && onClose?.(event),
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", escFunction);
    }
    return () => document.removeEventListener("keydown", escFunction);
  }, [escFunction, open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden" as any;
    return () => (document.body.style.overflow = "unset") as any;
  }, [open]);

  useEffect(() => {
    function updateMaxHeight() {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const safeBottom = window.innerHeight - viewportHeight;
        const maxHeightPx = viewportHeight * 0.9 - safeBottom;

        setModalMaxHeight(`${maxHeightPx}px`);
      } else {
        setModalMaxHeight("90vh");
      }
    }
    window.addEventListener("resize", updateMaxHeight);
    updateMaxHeight();
    return () => window.removeEventListener("resize", updateMaxHeight);
  }, []);

  if (!open) return null;

  return createPortal(
    <div
      role={type === "modal" ? "dialog" : "alertdialog"}
      aria-describedby="dialog_desc"
      className={`${open ? "visible" : "invisible"}`}
    >
      <div className="fixed z-30 px-4  min-h-screen top-0 bottom-0 left-0 right-0 md:flex md:items-center md:justify-center">
        <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />

        <div
          ref={modalRef}
          className={classNames(
            "relative p-4 overflow-y-auto overflow-x-hidden my-4 z-50",
            "w-full md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-2/5"
          )}
        >
          {(type == "modal" || !hideClose) && (
            <button
              className="flex absolute z-50 top-0 right-0 justify-center items-center bg-red-200 rounded-full shadow-xl w-10 h-10 transition ease-linear duration-75 hover:opacity-75"
              onClick={(e: any) => onClose?.(e)}
            >
              <div className="float-right cursor-pointer">
                <XMarkIcon
                  aria-hidden="true"
                  className="h-6 w-6 text-red-700"
                />
              </div>
            </button>
          )}

          <div
            className={classNames(
              "rounded-lg h-full w-full overflow-y-auto bg-white min-h-16 shadow-lg"
            )}
            style={{ maxHeight: modalMaxHeight }}
          >
            <div className="h-full">
              <div
                id="dialog_desc"
                className="p-4 min-h-full h-full text-left overflow-y-auto scroll-thin"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
