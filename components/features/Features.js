import Feature from "../Feature"

export default function Features() {
    const features = [
        {
            alt: 'paramedics',
            info: 'Atención las 24h',
            src: 'https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=fill&w=1470&q=80',
        },
        {
            alt: 'paramedics practicing',
            info: 'Personal calificado',
            src: 'https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=fill&w=1470&q=80',
        },
        {
            alt: 'calendar',
            info: 'Traslados programados',
            src: 'https://images.unsplash.com/photo-1606327054476-256fc9690fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=fill&w=1470&q=80',
        },
        {
            alt: 'blood tests',
            info: 'Exámenes a domicilio',
            src: 'https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=fill&w=1470&q=80',
        },
    ]
    return (
        <div className="bg-white overflow-hidden w-screen px-4 md:px-6 lg:px-8 xl:px-0 min-h-full">
            <div id="features"  className="flex items-center justify-center">
                <h1 className="font-bold mt-8 text-2xl text-ocean-600">Características</h1>
                </div>
            <div className="max-w-screen-xl mx-auto text-center grid gap-10 py-10 lg:grid-cols-2 items-center text-gray-800 font-semibold min-h-screen">
                {features.map((feature, i) =>
                    <Feature key={i} {...feature} />
                )}
            </div>
        </div>
    )
}