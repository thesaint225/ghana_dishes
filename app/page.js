import Image from "next/image";
import photo from "@/public/b1.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="flex flex-wrap justify-around">
        {/* <!-- First Card --> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <Image className="w-full" src={photo} alt="Product Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* <!-- Second Card --> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <Image className="w-full" src={photo} alt="Product Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>

        {/* <!-- Third Card --> */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
          <Image className="w-full" src={photo} alt="Product Image" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Product Title</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
