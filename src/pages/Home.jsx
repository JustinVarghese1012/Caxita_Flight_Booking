import React, { useState } from "react";
import { formControls } from "../constants/constants";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [formData, setFormdata] = useState({ from: "", to: "", date: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    e.preventDefault();
    navigate("/view", { state: formData });
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/aerial-view-north-cardigan-bay-wales_181624-12728.jpg?t=st=1758050027~exp=1758053627~hmac=fb0aecc789744d0bc9f174069c9a5842806810aaa74525b3b70233ef79531972&w=2000)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center  ">
          <div className="min-w-max">
            <h1 className="mb-5 text-5xl font-bold">Book Your Next Flight</h1>

            {/* White div */}
            <div
              className="bg-white mx-auto rounded-2xl shadow-lg "
              style={{
                width: "70vw", // 60% of viewport width
                height: "40vh", // 40% of viewport height
              }}
            >
              <form
                className="flex p-12 rounded-xl flex-col md:flex-row bg-white text-black gap-6 ml-20 "
                onSubmit={handleCheck}
              >
                {formControls.map((formControl) => (
                  <label
                    key={formControl.name}
                    className="floating-label mt-16"
                  >
                    <span>{formControl.label}</span>
                    {formControl.componentType === "select" ? (
                      <select
                        className="select px-16 "
                        name={formControl.name}
                        value={formData[formControl.name]}
                        onChange={handleChange}
                      >
                        <option disabled={false}>
                          ---Select---
                        </option>

                        <option value="COK">COK - Cochin</option>
                        <option value="DEL">DEL - Delhi</option>
                        <option value="BLR">BLR - Banglore</option>
                        <option value="MAA">MAA - Chennai</option>
                        <option value="DXB">DXB - Dubai</option>
                        <option value="BAH">BAH - Baharin</option>
                        <option value="DOH">DOH - Doha</option>
                        <option value="AUH">AUH - Abu Dhabi</option>
                        <option value="SIN">SIN - Singapore</option>
                        <option value="BOM">BOM - Mumbai</option>
                      </select>
                    ) : (
                      <label className="input">
                        <span className="label">{formControl.placeholder}</span>
                        <input
                          type={formControl.type}
                          name={formControl.name}
                          value={formData[formControl.name]}
                          onChange={handleChange}
                        />
                      </label>
                    )}
                  </label>
                ))}
                <button type="submit" className="btn bg-yellow-600 self-end">
                  Check Flights
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
