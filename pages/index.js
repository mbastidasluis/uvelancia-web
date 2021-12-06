import Head from 'next/head'
import ContactModal from '../components/ContactModal'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Uvelancia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {/* <!-- content --> */}
      <div className="">
        <div className="info-content max-w-screen-xl pt-10 sm:pt-0">
          <div
            className="info-content text-center relative items-center p-10 bg-green-100">
            {/* <!-- description --> */}
            <div className="info-container info-content sticky flex flex-col z-10 p-2 rounded items-center justify-center">
              <div className="text-green-400 text-2xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-black">
                <h1>
                  <span className="block py-1">
                    Las emergencias no esperan
                  </span>
                  <span className="block py-1 text-gray-100 my-4 md:my-8">
                    No esperes tú
                  </span>
                  <span className="block py-1">
                    Consigue una ambulancia
                  </span>
                </h1>
              </div>
              <h2 className="text-md text-gray-100 mt-2 md:mt-4 lg:mt-8 font-semibold">
                <span className="inline-block">
                  Llegamos hasta donde estés.
                </span>
                {' '}
                <span className="inline-block">
                  Te llevamos a donde necesites
                </span>
              </h2>
              <div
                className="my-3 py-2 px-4 bg-yellow-400 w-40 mx-auto text-yellow-700 hover:bg-yellow-300 rounded transition duration-150 ease-in-out font-black shadow-lg"
              >
                <ContactModal name="Contáctanos" />
              </div>
            </div>

            {/* <!-- hero image --> */}
            <div className="p-10 absolute inset-0">
              <img
                alt="ambulance"
                className="rounded shadow-xl z-5 w-full h-full object-cover object-right"
                src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
            </div>

          </div>
          {/* <!-- end description --> */}

          {/* <!-- features --> */}
          <div
            id="features"
            className="text-center grid lg:grid-cols-2 items-center px-8 py-12 bg-green-400 text-gray-800 font-semibold text-sm lg:text-lg min-h-screen"
          >
            <div className="group relative m-2 sm:my-4 ">
              <img
                alt="ambulance"
                className="w-full rounded shadow hover:shadow-2xl"
                src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p
                  className="bottom-0 opacity-100 text-gray-100 px-2 py-1 group-hover:text-sm  transition-all ease-in-out duration-200"
                >
                  Atención las 24h
                </p>
              </div>
            </div>
            <div className="relative m-2 sm:my-4 sm:top-4 sm:pt-4 group">
              <img
                alt="ambulance"
                className="w-full rounded shadow hover:shadow-2xl"
                src="https://images.unsplash.com/photo-1630964046403-8b745c1e3c69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1420&q=80"
              />
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p
                  className="bottom-0 opacity-100 text-gray-100 px-2 py-1 group-hover:text-sm  transition-all ease-in-out duration-200"
                >
                  Personal calificado
                </p>
              </div>
            </div>
            <div className="relative m-2 sm:my-4 group">
              <img
                alt="ambulance"
                className="w-full rounded shadow hover:shadow-2xl"
                src="https://images.unsplash.com/photo-1606327054476-256fc9690fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              />
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p
                  className="bottom-0 opacity-100 text-gray-100 px-2 py-1 group-hover:text-sm  transition-all ease-in-out duration-200"
                >
                  Traslados programados
                </p>
              </div>
            </div>
            <div className="relative m-2 sm:my-4 sm:top-4 sm:pt-4 group">
              <img
                alt="ambulance"
                className="w-full rounded group-hover:shadow-2xl"
                src="https://images.unsplash.com/photo-1606206591513-adbfbdd7a177?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              />
              <div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
              >
                <p
                  className="bottom-0 opacity-100 text-gray-100 px-2 py-1 group-hover:text-sm  transition-all ease-in-out duration-200"
                >
                  Exámenes a domicilio
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end features --> */}
      </div>


      <Footer />


    </div>
  )
}
