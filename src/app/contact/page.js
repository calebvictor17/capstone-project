import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <section>
      <div>
      <div
        style={{
          backgroundImage: "url('/background 4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          transition: "all 1s",
        }}
      >
        <h1 className="text-center text-white text-5xl font-extrabold pt-60">
          CONTACT US
        </h1>
        <hr className="w-20 mx-auto border-2 border-red-600 mt-2" />
      </div>
      <section className="container mx-auto px-4 my-10 py-12">
        <div className="grid md:grid-cols-2 w-full gap-10 items-center">
          <div className="relative">
            <Image
              src="/soccer 1.avif"
              alt="Football Player"
              width={900}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="">
              <div className="absolute top-10 left-10 bg-white p-4 rounded-lg shadow-md flex justify-center items-center gap-4">
                <p className="font-semibold text-gray-700">
                  🏢VICTORIA ISLAND,LAGOS NIGERIA
                </p>
              </div>
              <div className="absolute top-32 left-14 bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
                <p className="font-semibold text-gray-700">
                  📧 Usmanfcbusiness@gmail.com
                </p>
              </div>
              <div className="absolute top-56 left-20 bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
                <p className="font-semibold text-gray-700">📞 (800) 555-0XX5</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border text-black border-gray-500 rounded-lg  focus:ring-red-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border text-black border-gray-500 rounded-lg  focus:ring-red-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border text-black border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <textarea
                placeholder="Your Message Here"
                className="w-full p-3 border text-black border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-black transition"
              >
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Find Us Here
        </h2>
        {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} />
        </LoadScript> */}
      </div>
    </div>
    </section>
  )
}

export default page