/* This example requires Tailwind CSS v2.0+ */
import ContactButton from './ContactButton'

export default function HeroSection() {
  return (
    <div className="bg-ocean-100 overflow-hidden px-4 md:px-6 lg:px-8 xl:px-0 min-h-max">
      <div className="relative max-w-screen-xl mx-auto flex flex-col items-center lg:items-baseline justify-center h-full space-y-20 md:space-y-0">
        <div className="max-w-7xl mx-auto lg:mx-0">
          <div className="relative lg:pl-8 z-10 bg-ocean-100 lg:bg-white lg:max-w-2xl lg:w-full lg:pb-28 lg:ml-0 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-ocean-100 lg:text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>


            <main className="lg:my-auto max-w-6xl px-4">
              <div className="sm:text-center lg:text-left pt-10">
                <h1 className="text-4xl tracking-tight font-extrabold text-ocean-900 sm:text-5xl md:text-6xl xl:py-8">
                  <span className="block my-8">Llegamos a donde estés</span>{' '}
                  <span className="block text-ocean-600 my-8">Te llevamos a donde necesites</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 relative z-20">
                  Las emergencias médicas  y accidentes graves no avisan. Con üvelancia estas a un clik de tener un traslado en ambulancia de forma inmediata.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <ContactButton name="Contáctanos" />
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3">
          <img
            className="w-full h-full object-cover object-bottom sm:h-2/3 lg:h-full lg:object-center xl:object-right "
            src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
