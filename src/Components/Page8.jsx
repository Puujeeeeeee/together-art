function Page8() {
  return (
    <div className="h-[70vh] bg-white p-[100px]">
      <div className="flex    h-[50vh]  justify-center items-center gap-[100px]">
        <div className="flex flex-col items-center gap-[30px]">
          <p className="text-6xl text-black font-semibold ">Together Team</p>

          <button className="btn  w-[70%] h-[70px] rounded-3xl bg-purple-600 text-white text-2xl hover:-translate-y-1 hover:bg-purple-400 hover:shadow-2xl hover:shadow-slate-500">
            Join Presale Now
          </button>
          <div className="flex gap-[30px] text-black font-semibold cursor-pointer ">
            <a className="hover:underline" href="https://discover.gumroad.com/">
              Gumroad
            </a>
            <a className="hover:underline" href="https://twitter.com/">
              Twitter
            </a>
            <a className="hover:underline" href="https://instagram.com/">
              Instagram
            </a>
          </div>
          <div className="flex gap-[20px] text-black">
            <p className="hover:underline">
              Humankind Industries,Inc.All rights reserve2024
            </p>
            <p className="hover:underline">Privacy Policy</p>
            <p className="hover:underline">Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page8;
