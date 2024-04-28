const Why = () => {
  return (
   <div className="my-32 px-2 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Latest Travel News</h2>
 <div className="flex flex-col-reverse lg:flex-row-reverse gap-3 ">
     {/* 1st */}
  <div className="space-y-5 flex-1">
  <div className="flex items-center gap-5">
        <div>
            <img className="w-[150px] h-[100px]" src="/t1.png" alt="" />
        </div>
        <div>
            <h2 className="text-lg md:text-2xl font-medium">Revolutionising the travel industry, one partnership at a time</h2>
            <p className="text-blue-500">26 Oct 2021</p>
            <p>5min read</p>
        </div>
    </div>
    <div className="flex items-center gap-5">
        <div>
            <img className="w-[150px] h-[100px]" src="/t2.png" alt="" />
        </div>
        <div>
            <h2 className="text-lg md:text-2xl font-medium">There are many variations of passages of sum available</h2>
            <p className="text-blue-500">30 jan 2023</p>
            <p>15min read</p>
        </div>
    </div>
    <div className="flex items-center gap-5">
        <div>
            <img className="w-[150px] h-[100px]" src="/t3.png" alt="" />
        </div>
        <div>
            <h2 className="text-lg md:text-2xl font-medium">Contrary to popular belief, Lorem Ipsum is not simply.</h2>
            <p className="text-blue-500">26 Oct 2021</p>
            <p>5min read</p>
        </div>
    </div>
  </div>
  {/* 2nd */}
  <div className="flex-1">
    <div>
        <img src="/t4.png" alt="" />

        
    </div>
    <h2 className="text-2xl font-semibold my-3"> Personalized Travel Experiences</h2>
        <p className="text-slate-600 ">Plan your perfect getaway with ease using our Interactive Travel Planner. Tailor your itinerary to suit your interests, budget, and schedule, and let us take care of the rest. </p>
  </div>
 </div>
   </div>
  );
};

export default Why;
