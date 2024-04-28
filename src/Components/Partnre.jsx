const Partnre = () => {
  return (
    <div className="my-32">
      <h2 className="text-4xl underline font-bold text-center">Our partners</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        <img className="mx-auto" src="/p1.png" alt="" />
        <img className="mx-auto" src="/p2.png" alt="" />
        <img className="mx-auto" src="/p3.png" alt="" />
        <img className="mx-auto" src="/p4.png" alt="" />
      </div>
      <div className="bg-[#F3F6FD]  flex flex-col lg:flex-row gap-5 items-center justify-between px-6 py-6 md:py-12 lg:py-20">
        <div className="flex flex-1 flex-col lg:flex-row items-center gap-4">
          <img className="lg:h-[100px] lg:w-[100px]" src="/msg.png" alt="" />
          <div>
            <h2 className="text-lg md:text-xl font-medium">
              Get the latest news and offers
            </h2>
            <h2 className="text-xl md:text-3xl font-bold">Subscribe to our newsletter</h2>
          </div>
        </div>
        <div className="join flex-1">
          <input
            className="input input-bordered join-item w-full"
            placeholder="Email"
          />
          <button className="btn btn-primary  join-item rounded-r-full">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Partnre;
