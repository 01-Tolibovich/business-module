"use client";

import { CancelIcon } from "../icons";
import "./styles.scss";

interface ModalUIProps {
  active: boolean;
  anim: boolean;
  handleCloseModal: () => void;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  width?: string
}

export const ModalUI: React.FC<ModalUIProps> = ({
  children,
  active,
  anim,
  handleCloseModal,
  header,
  footer,
  width = "100%"
}) => {
  return (
    active && (
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleCloseModal();
        }}
        className={`modal-ui-background ${anim ? "anim" : ""}`}
      >
        <div className="modal-window" onClick={(e) => e.stopPropagation()} style={{width}}>
          <header className={header ? "is-header" : ""}>
            <div className="close">
              <div className="close-button" role="button" onClick={() => handleCloseModal()}><CancelIcon /></div>
            </div>
            {header}
            </header>
          <section className="section">{children}</section>
          {footer && <footer>{footer}</footer>}
        </div>
      </div>
    )
  );
};
