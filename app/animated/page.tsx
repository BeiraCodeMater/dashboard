export default function animateted() {
  return (
    <div className="flex xl:grid-cols-1 place-content-center mt-60">
      <div className="absolute blur-3xl z-10 bg-red-400 animate-pulse w-60 h-60 rounded-full ms-40 "></div>
      <div className="absolute blur-3xl z-10 bg-purple-400 w-60 h-60 animate-pulse rounded-full me-40 "></div>
      <div className="absolute blur-3xl z-10 bg-yellow-400 w-60 h-60 animate-pulse rounded-full mt-10 "></div>

      <div className="bg-gray-800 z-20 rounded-md  w-[500px] h-[180px] shadow-m p-5">
        <div className=" animate-pulse flex gap-5 ">
          <div className="bg-gray-200 w-[300px] h-8  rounded-md"></div>
          <div className="bg-cyan-500 w-[100px] h-8  rounded-md"></div>
        </div>
        <div className=" animate-pulse flex gap-5 mt-4">
          <div className="bg-gray-200 w-[300px] h-8 rounded-md"></div>
          <div className="bg-yellow-500 w-[100px] h-8  rounded-md"></div>
        </div>
        <div className=" animate-pulse flex gap-5 mt-4">
          <div className="bg-gray-200 w-[300px] h-8 rounded-md"></div>
          <div className="bg-green-500 w-[100px] h-8 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
