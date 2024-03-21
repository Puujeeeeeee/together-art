function Page6() {
  return (
    <div className="min-h-screen bg-white p-[100px]">
      <div className="flex    h-[100vh]  justify-center items-center gap-[100px]">
        <div className="border-4 rounded-3xl border-blue-300 w-[55%] h-[90%] p-[30px]">
          <div className="flex flex-col gap-[20px] ">
            <p className="text-5xl text-black font-bold">Join the Presale 🛒</p>
            <p className="text-black text-lg">
              We’re offering exclusive early-bird pricing to our first students
              for a limited time as a presale.
            </p>
            <div className="w-[auto] bg-gray-100 h-[60px]  rounded-3xl flex items-center justify-between p-[20px] hover:scale-105 duration-300">
              <p className="text-2xl text-gray-400 font-medium">
                {" "}
                Super Early Bird (25 spots - Sold Out)
              </p>
              <p className="text-2xl">$49.99</p>
            </div>
            <div className="w-[auto] h-[60px] bg-gray-100  rounded-3xl flex items-center justify-between p-[20px] hover:scale-105 duration-300">
              <p className="text-2xl text-gray-400 font-medium">
                {" "}
                Early Bird (25 spots - Sold Out)
              </p>
              <p className="text-2xl text-gray-400 font-medium">$24.99</p>
            </div>
            <div className="w-[auto] h-[60px]  bg-gray-100 rounded-3xl flex items-center justify-between p-[20px] hover:scale-105 duration-300">
              <p className="text-2xl text-gray-400 font-medium">
                {" "}
                Love Birds (50 spots - Sold Out)
              </p>
              <p className="text-2xl">$74.99</p>
            </div>
            <div className="w-[auto] h-[60px] bg-[#ffafe9]  rounded-3xl flex items-center justify-between p-[20px] hover:scale-105 duration-300">
              <p className="text-2xl text-black font-medium">
                {" "}
                Love Birds 2 (100 spots)
              </p>
              <p className="text-2xl text-black">$99.99</p>
            </div>
            <button className="btn h-[60px] rounded-3xl bg-purple-600 text-white text-xl hover:-translate-y-1 hover:bg-purple-500 hover:shadow-2xl hover:shadow-slate-500 ">
              Join Please Now
            </button>
            <p className="text-black text-lg">
              The first course sections will be live in March 4th. New lessons
              will be shared every week after that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page6;
