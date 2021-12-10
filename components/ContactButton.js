import { Dialog, Transition } from '@headlessui/react'
import { MailIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'

export default function ContactButton({ name }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="my-3 py-2 px-4 bg-ocean-500 w-40 mx-auto text-white hover:bg-ocean-400 rounded transition duration-150 ease-in-out  shadow hover:shadow-lg"
            >
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full h-full"
                >
                    {name}
                </button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay
                                className="fixed inset-0 bg-black opacity-30" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="leading-6 text-gray-900 relative flex items-center justify-center"
                                >
                                    <img
                                        src="./logotipo.png"
                                        className="h-8 w-auto sm:h-10"
                                    />
                                    <button
                                        type="button"
                                        className=" absolute top-0 right-0 justify-center p-2 text-sm text-ocean-600 bg-gray-200 border border-transparent rounded-md hover:bg-ocean-600 hover:text-white shadow hover:shadow-lg"
                                        onClick={closeModal}
                                    >
                                        <XIcon className="w-6 h-6" />
                                    </button>
                                </Dialog.Title>
                                <div className="mt-2 text-2xl font-medium text-ocean-800">
                                    <div>
                                        <div className="flex items-center space-x-4 my-4">
                                            <PhoneIcon className="w-6 h-6" />
                                            <div>(+58) 212 000 00 00</div>
                                        </div>
                                        <div className="flex items-center space-x-4 my-4">
                                            <MailIcon className="w-6 h-6" />
                                            <div>Uvelancia@gmail.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">

                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
