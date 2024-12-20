"use client";

import "./styles.scss";

interface ModalUIProps {
  modalShow: boolean;
  handleCloseModal: () => void;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ModalUI: React.FC<ModalUIProps> = ({
  children,
  modalShow,
  handleCloseModal,
  header,
  footer,
}) => {

  return (
    modalShow && (
      <div
        onClick={handleCloseModal}
        className={`modal-ui-background`}
      >
        <div className="modal-window" onClick={e => e.stopPropagation()}>
          <header>{header}</header>
          <section className="section">{children}</section>
          <footer>{footer}</footer>
        </div>
      </div>
    )
  );
};
