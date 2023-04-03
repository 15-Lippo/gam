import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onTransfer: (walletAddress: string) => void;
  title: string;
  description: string;
  action: string;
};

const Modal = ({ isOpen, onClose, onTransfer, title, description, action }: ModalProps) => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleTransfer = () => {
    onTransfer(walletAddress);
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden bg-[#171923] text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                onClick={onClose}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Dialog.Title
              as="h3"
              className="text-xl font-semibold leading-6 text-white mb-4"
            >
              {title}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-gray-500 mt-4">
                {description}
              </p>
              <label
                htmlFor="walletAddress"
                className="font-semibold text-neutral-300"
              >
                Enter Wallet Address:
              </label>
              <input
                type="text"
                name="walletAddress"
                id="walletAddress"
                placeholder="0x0"
                className="w-full mt-3 border border-gray-500 text-white bg-transparent rounded-xl p-3 font-medium placeholder:text-gray-500"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <button
                type="button"
                className="bg-white text-black border-0 py-2.5 px-7 rounded-lg font-normal leading-6 mt-5 w-full"
                onClick={handleTransfer}
              >
                {action}
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;