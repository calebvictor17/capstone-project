import React from "react";
import Button from "./button";
import Image from "next/image";
const Matches = () => {
  return (
    <>
      <section className="bg-gray-200 py-12">
        <div className="items-center flex justify-center max-sm:flex-col gap-12 mt-6 mx-auto">
          <div className="text-gray-900 bg-white shadow-lg w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white font-bold">
              <p>CUP</p>
            </div>
            <div className="flex items-center justify-center gap-3 my-9">
              <Image
                src="/ops1-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-gray-900 text-white justify-center flex items-center h-7 w-9">
                <p>2</p>
              </div>
              -
              <div className="bg-gray-900  text-white justify-center flex items-center h-7 w-9">
                <p>1</p>
              </div>
              <Image
                src="/ops3-removebg-preview.png"
                alt="logo"
                width={50}
                height={40}
              />
            </div>
            <div className="text-gray-900 hover:text-red-500  flex items-center justify-center flex-col font-bold">
              <p>Marina Stadium</p>
              <p>April 1, 2025 9:00 pm</p>
            </div>
          </div>

          <div className="text-gray-900 bg-white w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white">
              <p>CUP</p>
            </div>
            <div className="flex items-center justify-center gap-3 my-9">
              <Image
                src="/ops5-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-gray-900 text-white justify-center flex items-center h-7 w-9">
                <p>2</p>
              </div>
              -
              <div className="bg-gray-900  text-white justify-center flex items-center h-7 w-9">
                <p>4</p>
              </div>
              <Image
                src="/ops1-removebg-preview.png"
                alt="logo"
                width={50}
                height={40}
              />
            </div>
            <div className="text-gray-900 hover:text-red-500  flex items-center justify-center flex-col font-bold">
              <p>Godswil Stadium</p>
              <p>June 17, 2025 5:00 pm</p>
            </div>
          </div>
          <div className="text-gray-900 bg-white w-95 h-50 mt-15">
            <div className="flex justify-center items-center w-20 mx-40 bg-red-500 text-white">
              <p>CUP</p>
            </div>
            <div className="flex items-center justify-center gap-3 my-9">
              <Image
                src="/ops3-removebg-preview.png"
                alt="logo"
                width={50}
                height={50}
              />
              <div className="bg-gray-900 text-white justify-center flex items-center h-7 w-9">
                <p>5</p>
              </div>
              -
              <div className="bg-gray-900  text-white justify-center flex items-center h-7 w-9">
                <p>3</p>
              </div>
              <Image
                src="/ops5-removebg-preview.png"
                alt="logo"
                width={50}
                height={40}
              />
            </div>
            <div className="text-gray-900 hover:text-red-500  flex items-center justify-center flex-col font-bold">
              <p>Utako Stadium</p>
              <p>April 30, 2025 2:00 pm</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-12">
          <Button />
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <div className="text-center">
          <h3 className="text-red-500 uppercase font-semibold tracking-wider">
            Table
          </h3>
          <h2 className="text-3xl font-bold uppercase text-black">
            League Table 
          </h2>
        </div>

        <div className="overflow-x-auto mt-6 max-sm:overflow-x-hidden">
          <table className="w-full border-collapse border border-gray-200 ">
            <thead>
              <tr className="bg-red-600 text-white text-sm uppercase">
                <th className="p-3">POS</th>
                <th className="p-3 text-left">TEAM</th>
                <th className="p-3">P</th>
                <th className="p-3">W</th>
                <th className="p-3">D</th>
                <th className="p-3">L</th>
                <th className="p-3">F:A</th>
                <th className="p-3">GD</th>
                <th className="p-3">PTS</th>
              </tr>
            </thead>

            <tbody className="">
              <tr className="border-b border-gray-200 text-center hover:bg-gray-200 text-black">
                <td className="p-3">1</td>
                <td className="p-3 text-left font-bold">El kanemi FC</td>
                <td className="p-3">10</td>
                <td className="p-3">9</td>
                <td className="p-3">1</td>
                <td className="p-3">0</td>
                <td className="p-3">46:5</td>
                <td className="p-3">41</td>
                <td className="p-3 font-bold">28</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">2</td>
                <td className="p-3 text-left font-bold">Enugu Rangers FC</td>
                <td className="p-3">9</td>
                <td className="p-3">8</td>
                <td className="p-3">1</td>
                <td className="p-3">0</td>
                <td className="p-3">38:2</td>
                <td className="p-3">36</td>
                <td className="p-3 font-bold">25</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">3</td>
                <td className="p-3 text-left font-bold">Heartland Fc</td>
                <td className="p-3">10</td>
                <td className="p-3">7</td>
                <td className="p-3">1</td>
                <td className="p-3">2</td>
                <td className="p-3">34:8</td>
                <td className="p-3">26</td>
                <td className="p-3 font-bold">22</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">4</td>
                <td className="p-3 text-left font-bold">Kano pillers</td>
                <td className="p-3">10</td>
                <td className="p-3">5</td>
                <td className="p-3">4</td>
                <td className="p-3">1</td>
                <td className="p-3">34:4</td>
                <td className="p-3">30</td>
                <td className="p-3 font-bold">19</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">5</td>
                <td className="p-3 text-left font-bold">Lobi Stars</td>
                <td className="p-3">10</td>
                <td className="p-3">5</td>
                <td className="p-3">2</td>
                <td className="p-3">3</td>
                <td className="p-3">28:15</td>
                <td className="p-3">113</td>
                <td className="p-3 font-bold">17</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">6</td>
                <td className="p-3 text-left font-bold">Sunshine Fc</td>
                <td className="p-3">9</td>
                <td className="p-3">5</td>
                <td className="p-3">1</td>
                <td className="p-3">3</td>
                <td className="p-3">25:17</td>
                <td className="p-3">12</td>
                <td className="p-3 font-bold">16</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">7</td>
                <td className="p-3 text-left font-bold">Enyimba Fc</td>
                <td className="p-3">10</td>
                <td className="p-3">4</td>
                <td className="p-3">2</td>
                <td className="p-3">4</td>
                <td className="p-3">22:24</td>
                <td className="p-3">-2</td>
                <td className="p-3 font-bold">14</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">8</td>
                <td className="p-3 text-left font-bold">Remo Stars</td>
                <td className="p-3">10</td>
                <td className="p-3">3</td>
                <td className="p-3">2</td>
                <td className="p-3">5</td>
                <td className="p-3">13:31</td>
                <td className="p-3">-17</td>
                <td className="p-3 font-bold">11</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">9</td>
                <td className="p-3 text-left font-bold">Dundee FC</td>
                <td className="p-3">10</td>
                <td className="p-3">2</td>
                <td className="p-3">5</td>
                <td className="p-3">3</td>
                <td className="p-3">8:39</td>
                <td className="p-3">-31</td>
                <td className="p-3 font-bold">11</td>
              </tr>

              <tr className="border-b border-gray-200 text-center hover:bg-gray-100 text-black">
                <td className="p-3">10</td>
                <td className="p-3 text-left font-bold">Ikorodu fc</td>
                <td className="p-3">10</td>
                <td className="p-3">1</td>
                <td className="p-3">2</td>
                <td className="p-3">7</td>
                <td className="p-3">5:44</td>
                <td className="p-3">-39</td>
                <td className="p-3 font-bold">5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Matches;
