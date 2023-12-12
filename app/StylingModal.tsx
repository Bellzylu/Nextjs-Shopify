import { FC, useEffect, useRef } from "react";

type StylingModalProps = {
  libraryName: string;
  code: string;
  link: string;
  buttonText: string;
  className?: string;
};

export const StylingModal: FC<StylingModalProps> = ({
  libraryName,
  code,
  link,
  buttonText,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && modalRef.current?.open) {
        modalRef.current.close();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleButtonClick = () => {
    modalRef.current?.showModal();
  };

  const handleCloseClick = () => {
    modalRef.current?.close();
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="w-full">
      <button onClick={handleButtonClick} className="btn btn-primary w-full">
        {buttonText}
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="flex flex-col justify-between bg-base-100 p-5 rounded-xl">
          <h2 className="text-purple-400 font-semibold mb-5 text-lg">
            {libraryName}
          </h2>
          <div className="mockup-code text-left">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
          <div className="modal-action">
            <a
              className="btn"
              href={link}
              target="_blank"
              rel="noopener noreferrer">
              Docs
            </a>

            <button onClick={handleCopyClick} className="btn">
              Copy Code
            </button>

            <form method="dialog">
              <button className="btn" onClick={handleCloseClick}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
