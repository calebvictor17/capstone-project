import React from 'react'

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
      </div>
    </section>
  )
}

export default page