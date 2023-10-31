const Checkout = () => {
  return (
    <div className=" min-h-screen bg-base-200 flex-col lg:flex-row-reverse">
      <h1 className="text-xl font-bold text-center py-6">Checkout Product</h1>
      <div className=" mx-32 ">
        <div className="card flex-shrink-0 shadow-2xl bg-base-100">
          <form className="card-body w-full">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">First name</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="name"
                    />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                    name="lastName"
                  />

                </div>
              </div>
              <div className="flex gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Phone</span>
                  </label>
                  <input
                    type="phone"
                    placeholder=" Phone"
                    className="input input-bordered"
                    required
                    name="phone"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
                <textarea className="border boarder-base-100  rounded-lg w-full" placeholder="Your message here" name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="flex justify-center">
                <button className="bg-red-500 rounded-md text-white w-fit px-4 py-2">Order Confirm</button>
            </div>
         
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
