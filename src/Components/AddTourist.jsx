const AddTourist = () => {
  const handleAddTourist = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const spotname = form.spotname.value;
    const country = form.country.value;
    const short = form.short.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const email = form.email.value;
    const addTourist = {
       photo, spotname, country, short, location, cost, season, time, visitor, email,
    };
    console.log(addTourist)
  };

  return (
    <div className="bg-base-200 px-8 py-12 mb-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Add Tourists Spots
      </h2>
      <form onSubmit={handleAddTourist} className="grid grid-cols-2 gap-6">
        {/* 1 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">Photo : </span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo Url"
            className="input input-bordered"
            required
          />
        </div>

        {/* 2 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Tourists Spot Name :{" "}
            </span>
          </label>
          <input
            type="text"
            name="spotname"
            placeholder="Tourists Spot Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* 3 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Country Name :{" "}
            </span>
          </label>
          <input
            type="text"
            name="country"
            placeholder="Country"
            className="input input-bordered"
            required
          />
        </div>

        {/* 4 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Short Description :{" "}
            </span>
          </label>
          <input
            type="text"
            name="short"
            placeholder="Description"
            className="input input-bordered"
            required
          />
        </div>

        {/* 5 */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Location :{" "}
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* 6  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Average Cost :{" "}
            </span>
          </label>
          <input
            type="text"
            name="cost"
            placeholder="Average Cost"
            className="input input-bordered"
            required
          />
        </div>

        {/* 7  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Seasonality :{" "}
            </span>
          </label>
          <input
            type="text"
            name="season"
            placeholder="Seasonality"
            className="input input-bordered"
            required
          />
        </div>

        {/* 8  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Travel Time :{" "}
            </span>
          </label>
          <input
            type="text"
            name="time"
            placeholder="Average Cost"
            className="input input-bordered"
            required
          />
        </div>

        {/* 9  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              Total Visitors Per Year :{" "}
            </span>
          </label>
          <input
            type="text"
            name="visitor"
            placeholder="Average Cost"
            className="input input-bordered"
            required
          />
        </div>

        {/* 10  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold">
              User Email:{" "}
            </span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="col-span-2 btn text-white text-xl bg-[#4A33FB]">
          <input className="w-full  " type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddTourist;
