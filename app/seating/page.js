export default function Seating() {
  return (
    <>
      <div className="flex items-center justify-center bg-black min-h-screen">
        <div className=" flex flex-col w-80 h-100 bg-gray-300 items-center justify-between rounded-full overflow-hidden">
          <div className="flex w-full translate-y-20 justify-between items-center">
            <div className="flex flex-col">
              <div className="flex w-20">
                <button className="w-10 h-20 justify-center items-center bg-gray-500 text-xs hover:bg-gray-200">
                  CAT8A
                </button>
                <button className="w-10 h-20 justify-center items-center bg-lime-300 text-xs hover:bg-gray-200">
                  CAT7A
                </button>
              </div>
              <button className="w-20 h-40 justify-center items-center bg-green-500  hover:bg-gray-200">
                CAT4A
              </button>
            </div>
            <div className="flex flex-col">
              <div className="bg-white text-center">Stage</div>
              <button className="w-36 h-44 justify-center items-center bg-pink-500  hover:bg-gray-200">
                Festival
              </button>
            </div>
            <div className="flex flex-col">
              <div className="flex w-20">
                <button className="w-10 h-20 justify-center items-center bg-gray-500 text-xs hover:bg-gray-200">
                  CAT8B
                </button>
                <button className="w-10 h-20 justify-center items-center bg-lime-300 text-xs hover:bg-gray-200">
                  CAT7B
                </button>
              </div>
              <button className="w-20 h-40 justify-center items-center bg-green-500  hover:bg-gray-200">
                CAT4B
              </button>
            </div>
          </div>
          <div className="w-80 h-40 justify-center  translate-y-7">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center w-48 h-16 bg-purple-500 hover:bg-gray-200">
                CAT3
              </div>
              <div className="flex flex-row w-80 h-20 justify-between">
                <div className="w-1/3 bg-blue-500 hover:bg-gray-200 text-end">
                  5A
                </div>
                <div className="w-1/3 bg-rose-500 hover:bg-gray-200 text-center">
                  6
                </div>
                <div className="w-1/3 bg-blue-500 hover:bg-gray-200 ">5B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
