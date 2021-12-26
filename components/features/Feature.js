export default function Feature({ alt, src, info }) {
    return (
        <>
            <div className="relative group">
                <img
                    alt={alt}
                    src={src}
                    className="w-full h-full rounded group-hover:shadow-2xl feature-image object-cover object-center"
                />
                <div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                    <p
                        className="bottom-0 opacity-100 text-gray-100 md:text-lg group-hover:text-sm transition-all ease-in-out duration-200"
                    >
                        {info}
                    </p>
                </div>
            </div>
        </>
    )
}