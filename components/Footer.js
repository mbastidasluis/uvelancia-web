import { RssIcon } from '@heroicons/react/outline'
export default function Footer() {
    return (
        <div
            id="social-media"
            className="flex flex-col gap-4 items-center justify-center bg-gray-100 text-green-800 text-sm md:text-lg p-4 text-center font-semibold shadow w-screen min-h-1/4"
        >
            <div className="flex items-center justify-center w-screen space-x-8 text-white">

                <div>
                    <a href="https://www.instagram.com/uvelancia_2021/" target="_blank">
                        <img src="https://zqydgybqkwwurtdngkjc.supabase.in/storage/v1/object/sign/storage/images/instagram.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yYWdlL2ltYWdlcy9pbnN0YWdyYW0uc3ZnIiwiaWF0IjoxNjM4ODA3MzQ0LCJleHAiOjE5NTQxNjczNDR9.zHa9p5HSwAfXt9AT7A-pMjnBZPct81LU_fmQpeitfM8" className="w-14 h-14" />
                        </a>
                        </div>
            </div>
            <div className="flex items-center justify-center w-screen">
                Uvelancia &copy; - Caracas, Venezuela - 2021
            </div>
        </div>)
}