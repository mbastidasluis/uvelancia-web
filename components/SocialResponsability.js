
export default function SocialResponsability() {
    const features = [
        {
            alt: 'acnilo',
            info: {
                title: 'ECO-ESCUELA CAMPAMENTO TURÍSTICO ',
                content: 'Promueve la educación y la práctica del turismo sustentable en familias indígenas, a través del programa de formación NILO como un instrumento para mitigar la pobreza en Venezuela.',
            },
            src: 'https://www.acnilo.org/escuelasnilo/wp-content/uploads/2020/04/logo_NILO.jpg',
        },
    ]

    const { alt, src, info: { title, content }, } = features[0]
    return (
        <div className="bg-ocean-100 overflow-hidden w-screen px-4 md:px-6 lg:px-8 xl:px-0 min-h-max">
            <div id="features" className="flex items-center justify-center">
                <h1 className="font-bold mt-8 text-2xl text-ocean-600">Nuestras Causas</h1>
            </div>
            <div className="max-w-screen-xl mx-auto text-center grid gap-10 py-10 lg:grid-cols-2 items-center text-gray-800 font-semibold min-h-screen">
                <div className="relative group">
                    <img
                        alt={alt}
                        src={src}
                        className="w-full h-full rounded group-hover:shadow-2xl object-cover object-center"
                    />
                    <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    >
                        <p
                            className="bottom-0 opacity-100 text-gray-100 md:text-lg group-hover:text-sm transition-all ease-in-out duration-200"
                        >

                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly text-gray-700">
                    <div className="text-2xl mb-4">
                        {title}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}