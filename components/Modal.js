import React from "react";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 h-full w-full" id="my-modal">
            <div className="relative top-[30vh] mx-auto p-5 border w-2/3 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Modal Title</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">Your modal content goes here</p>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button id="ok-btn" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
