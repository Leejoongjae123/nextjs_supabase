import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold">Modal Title</h4>
          <button onClick={onClose} className="text-black font-bold">X</button>
        </div>
        <div className="mt-2">
          {children}
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;