function Modal({ show, onClose, children }) {
    return (
      <div
        style={{
          transform: show ? "translateX(0%)" : "translateX(-200%)",
        }}
        className="top-0 z-0 left-0 w-full h-full stransition-all duration-500"
      >
        <div className="container mx-auto max-w-2xl h-[80vh] rounded-3xl bg-amazon_blue py-6 px-4">
          <button
            onClick={() => {
              onClose(false);
            }}
            className="w-10 h-10 mb-4 font-bold rounded-full bg-amazon_blue"
          >
            X
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;