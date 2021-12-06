import { Menu, Transition } from "@headlessui/react";
import { DotsHorizontalIcon, HeartIcon, RssIcon } from '@heroicons/react/outline'
import Image from "next/dist/client/image";

export default function Nav() {
    const menuItems = [
        'Inicio',
        'Ventajas',
        'Conócenos',
        // 'Ingresa',
        // 'Regístrate',
    ]

    return (
        <>
            {/* <!-- nav --> */}
            <div
                className="bg-gray-100 hidden md:flex shadow items-center font-bold justify-between z-50 sticky top-0 w-screen"
            >
                {/* <!-- left elements --> */}
                <div className="flex items-center ml-10">
                    {/* <!-- logo --> */}
                    <img src="/logo.png" className="h-12 w-12 my-2" />


                    {/* <!-- name --> */}
                    <a
                        href="#"
                        className="p-2 ml-2 text-green-500 hover:text-green-500 hover:bg-gray-200 rounded"
                    >
                        Uvelancia
                    </a>

                    {/* <!-- nav links --> */}
                    <div className="hidden md:flex px-4">
                        <a
                            href="#"
                            className="py-2 px-4 text-green-500 hover:bg-gray-200 rounded"
                        >
                            Inicio
                        </a>
                        <a
                            href="#features"
                            className="py-2 px-4 text-green-500 hover:bg-gray-200 rounded"
                        >
                            Ventajas
                        </a>
                        <a
                            href="#social-media"
                            className="py-2 px-4 text-green-500 hover:bg-gray-200 rounded"
                        >
                            Conócenos
                        </a>
                    </div>
                </div>

                {/* <!-- right elements --> */}
                {/* <div className="hidden absolute md:block mr-10 right-0">
                    <a href="#" className="py-2 px-4 text-green-500 hover:bg-gray-200 rounded">
                        Ingresa
                    </a>
                    <a
                        href="#"
                        className="py-2 px-4 bg-yellow-400 text-yellow-700 hover:bg-yellow-300 rounded transition duration-150 ease-in-out"
                    >
                        Regístrate
                    </a>
                </div> */}
            </div>
            {/* <!-- end nav --> */}

            {/* <!-- mobile nav --> */}

            <div className="md:hidden fixed top-0 z-20 bg-gray-100 w-screen shadow-lg flex flex-col justify-center">
                <Menu>
                    <Menu.Button className="flex flex-col justify-center items-center">
                        <img src="/logo.png" className="h-12 w-12" />
                        <DotsHorizontalIcon
                            className="w-5 h-5 mx-auto"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                    <Transition
                        as="div"
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-200"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        {menuItems.map((menuItem, i) =>
                            <Menu.Items key={i}>
                                <div className="py-2">
                                    <Menu.Item>
                                        <button
                                            className="py-2 px-4 hover:bg-gray-200 rounded w-screen"
                                        >
                                            <span className="text-green-500  font-semibold" >
                                                {menuItem}
                                            </span>
                                        </button>
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        )}
                    </Transition>
                </Menu>
            </div>
        </>
    )
}