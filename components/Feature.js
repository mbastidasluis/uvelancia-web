import Image from 'next/image'

// export default function Feature({ image }) {
export default function Feature() {
    return (
        <div className="relative w-auto h-full">
            <Image
                // alt={image.alt}
                // src={image.src}
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                className=" w-full h-full object-contain rounded shadow hover:shadow-2xl"
            />
            <div
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5);' }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
            >
                <span
                    className="text-gray-100 px-2 py-1 group-hover:text-sm  transition-all ease-in-out duration-200"
                >
                    Personal calificado
                </span>
            </div>
        </div >
    )
}