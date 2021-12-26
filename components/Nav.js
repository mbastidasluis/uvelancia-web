import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment, useEffect, useRef, useState } from "react";
import { useScrollData } from "scroll-data-hook";

export default function Nav() {
    const navigation = [
        { name: 'Inicio', href: '#' },
        { name: 'Ventajas', href: '#features' },
        { name: 'Conócenos', href: '#social-media' },
    ]
    const { position } = useScrollData()

    return (
        <div className={`${position.y > 150 ? 'fixed top-0' : ''} z-50 bg-gray-100 w-full`}>
            <Popover>
                <div className="relative flex items-center py-4  px-10 shadow-lg">
                    <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <a href="#">
                                    <span className="sr-only">Uvelancia</span>
                                    <img
                                        src="./logotipo.png"
                                        className="h-8 w-auto sm:h-10"
                                    />
                                </a>
                                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-ocean-700 border-gray-100 hover:border-ocean-600 border-2 px-4 py-2 rounded-md">
                                            {item.name}
                                        </a>
                                    ))}
                                    {/* <a href="#" className="font-medium text-ocean-600 hover:text-ocean-500">
                                        Log in
                                    </a> */}
                                </div>
                                <div className="mr-4 flex items-center md:hidden fixed right-0">
                                    <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500">
                                        <span className="sr-only">Open main menu</span>
                                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="px-5 pt-4 flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="./logotipo.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-ocean-500">
                                        <span className="sr-only">Close main menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block font-medium text-gray-500 hover:bg-gray-200  hover:text-ocean-700 px-4 py-2 rounded-md"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            {/* <a
                                href="#"
                                className="block w-full px-5 py-3 text-center font-medium text-ocean-600 bg-gray-50 hover:bg-gray-100"
                            >
                                Log in
                            </a> */}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}