"use client";

import "./styles.scss";

interface ModalUIProps {
  active: boolean;
  anim: boolean;
  handleCloseModal: () => void;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const ModalUI: React.FC<ModalUIProps> = ({
  children,
  active,
  anim,
  handleCloseModal,
  header,
  footer,
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
        <div className="modal-window" onClick={(e) => e.stopPropagation()}>
          <header>{header}</header>
          <section className="section">{children}</section>
          <footer>{footer}</footer>
        </div>
      </div>
    )
  );
};
