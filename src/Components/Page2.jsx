function Page2() {
  return (
    <div className="min-h-screen bg-white p-[100px]">
      <div className="flex  flex-col  h-[130vh] gap-[100px]">
        <div className="flex flex-col  items-center">
          <p className="text-purple-600 font-semibold">Our Mission</p>
          <div className="flex flex-col text-4xl text-black font-bold ">
            <p>Together, we aim to empower and inspire</p>
            <p>people to unlock their creative potential,</p>
            <p>making design accessible and impactful</p>

            <p>for everyone. 👻</p>
          </div>
        </div>
        <div className="flex h-[auto]  bg-gray-100">
          <div className=" py-[50px] pl-[40px]  h-[100%] w-[50%] flex flex-col gap-[20px] overflow-hidden">
            <div className="text-purple-600 font-semibold">
              Meet Your Instructor
            </div>
            <div className=" leading-none ">
              <p className="text-[60px] font-black text-black">Who is Pablo</p>
              <p className="text-[60px] font-black text-black">Stanley?</p>
            </div>
            <div className="text-xl text-black">
              As your guide in this course, Pablo Stanley combines his
              entrepreneurial spirit and design expertise from co-founding
              Carbon Health and Blush Design, to his roles at Udemy, Lyft, and
              Invision. Celebrated for his Open Source Doodles and Robotos NFTs,
              Pablo's real passion lies in empowering emerging designers through
              practical insights and fostering a creative community. Join him to
              explore the depths of design and unlock your creative potential.
            </div>
            <div className="flex w-[40px] gap-[20px]">
              <img src="cute.png" alt="" />
              <img src="robot.webp" alt="" />
              <img src="in.png" alt="" />
              <img src="dots.png" alt="" />
              <img src="lya.png" alt="" />
            </div>
          </div>

          <img className="w-[600px] h-[635px]" src="Pablo.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Page2;
