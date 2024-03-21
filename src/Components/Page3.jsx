function Page3() {
  return (
    <div className="min-h-screen bg-white p-[100px]">
      <div className="flex  flex-col  h-[140vh] gap-[50px]">
        <div>
          <h1 className="text-black text-5xl font-semibold">
            What will you learn? 🎓
          </h1>
        </div>
        <div className="w-[100%] h-[60%] flex gap-[20px] ">
          <div className="grid  grid-row    w-[50%] h-[100%] relative">
            <div className="overflow-hidden">
              <img
                className="hover:rotate-2  hover:scale-105 duration-200"
                src="foundation.webp"
                alt=""
              />
            </div>
            <div className="absolute text-5xl text-black font-medium p-[30px]">
              UI Foundation
            </div>
          </div>
          <div className="w-[50%]  h-[100%] flex flex-wrap gap-[2%] relative">
            <div className="w-[49%] h-[49%]  relative overflow-hidden">
              <div className="overflow-hidden">
                <div className="absolute text-2xl font-medium text-black p-[20px]"></div>
                <img
                  className="hover:scale-105 hover:rotate-2 duration-200"
                  src="typograph.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="w-[49%] h-[49%]  relative  overflow-hidden">
              <p className="absolute text-2xl font-medium text-black p-[20px]"></p>
              <img
                className="hover:scale-105 hover:rotate-2 duration-200"
                src="power.webp"
                alt=""
              />
            </div>
            <div className="w-[49%] h-[49%]  relative overflow-hidden">
              <p className="absolute text-2xl font-medium text-black p-[20px]"></p>
              <img
                className="hover:scale-105 hover:rotate-2 duration-200"
                src="colors.webp"
                alt=""
              />
            </div>
            <div className="w-[49%] h-[49%]  relative overflow-hidden">
              <p className="absolute text-2xl font-medium text-black p-[20px]"></p>
              <img
                className="hover:scale-105 hover:rotate-2 duration-200"
                src="style.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[360px] flex gap-[10px]">
          <div className="w-[25%]  relative ">
            <p className="absolute text-2xl font-medium text-black p-[20px]">
              Adding your Style and Voice
            </p>
            <img className=" shadow-2xl " src="visual.webp" alt="" />
          </div>
          <div className="w-[25%]  relative ">
            <p className="absolute text-2xl font-medium text-black p-[20px]">
              Adding your Style and Voice
            </p>
            <img className=" shadow-2xl  " src="weird.webp" alt="" />
          </div>
          <div className="w-[25%]  relative">
            <p className="absolute text-2xl font-medium text-black p-[20px]">
              Adding your Style and Voice
            </p>
            <img className=" shadow-2xl " src="become.webp" alt="" />
          </div>

          <div className="w-[25%]  relative">
            <p className="absolute text-2xl font-medium text-black p-[20px]">
              Adding your Style and Voice
            </p>
            <img className=" shadow-2xl " src="weird.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
