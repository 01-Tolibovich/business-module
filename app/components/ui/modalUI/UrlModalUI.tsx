"use client";

import "./styles.scss";

interface ModalUIProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const UrlModalUI: React.FC<ModalUIProps> = ({header, children, footer}) => {

  return (
      <div
        // onClick={handleCloseModal}
        className={`modal-ui-background anim`}
      >
        <div className="modal-window" onClick={e => e.stopPropagation()}>
          <header>{header}</header>
          <section className="section">{children}</section>
          <footer>{footer}</footer>
        </div>
      </div>
  );
};
