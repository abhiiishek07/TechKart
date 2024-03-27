import { useState } from "react";

const Login = () => {
  const [gender, setGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");

  return (
    <div className="w-full h-full p-4">
      <div className="w-full max-w-lg p-4 gap-4 rounded-md shadow-md mt-10 lg:mt-20 mx-auto flex flex-col items-center justify-center border">
        <h1 className="text-3xl font-bold">Login</h1>
        <label className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text">Gender</span>
          </div>
          <select
            className="select select-bordered"
            value={gender || "Select Gender"}
            onChange={(e) => setGender(e.target.value)}
          >
            <option disabled selected>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="form-control w-full max-w-md">
          <label>Date of birth</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-md"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <p>Already Signed in once</p>

        <button className="btn w-full max-w-md px-4 py-2 border flex gap-2 text-xl mb-6">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
