import { RssIcon } from '@heroicons/react/outline'
export default function Footer() {
    return (
        <div
            id="social-media"
            className="flex flex-col gap-4 items-center justify-center bg-gray-100 text-green-800 text-sm md:text-lg p-4 text-center font-semibold shadow-inner w-screen min-h-1/4"
        >
            <div className="flex items-center justify-center w-screen space-x-8 text-white">
                <div>
                    <a href="https://www.instagram.com/uvelancia_2021/" target="_blank">
                        <img src="./img/instagram.svg" className="w-14 h-14" />
                    </a>
                </div>
            </div>
            <div className="flex items-center justify-center w-screen">
                Uvelancia &copy; - Caracas, Venezuela - 2021
            </div>
        </div>)
}