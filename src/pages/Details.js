import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";
import ParticlesComponent from "../components/Particles";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const [districts, setDistricts] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [schools, setSchools] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [newCollegeVisible, setNewCollegeVisible] = useState(false);
  const [representativeType, setRepresentativeType] = useState("college");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    college: "",
    new_college: "",
    school: "",
    new_school: "",
    year_of_study: "",
    representative_type: "college",
  });

  useEffect(() => {
    if (selectedState) {
      axios
        .get(`/api/districts/${selectedState}/`)
        .then((response) => {
          setDistricts(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the districts!", error);
        });
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedState && selectedDistrict) {
      const url =
        representativeType === "college"
          ? `/api/colleges/${selectedState}/${selectedDistrict}/`
          : `/api/schools/${selectedState}/${selectedDistrict}/`;
      axios
        .get(url)
        .then((response) => {
          if (representativeType === "college") {
            setColleges(response.data);
          } else {
            setSchools(response.data);
          }
        })
        .catch((error) => {
          console.error("There was an error fetching the data!", error);
        });
    }
  }, [selectedState, selectedDistrict, representativeType]);

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedDistrict("");
    setColleges([]);
    setSchools([]);
    setNewCollegeVisible(false);
    setFormData({ ...formData, state, district: "", college: "", school: "" });
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setNewCollegeVisible(false);
    setFormData({ ...formData, district, college: "", school: "" });
  };

  const handleCollegeChange = (event) => {
    const college = event.target.value;
    setNewCollegeVisible(college === "other");
    setFormData({ ...formData, college, new_college: "" });
  };

  const handleSchoolChange = (event) => {
    const school = event.target.value;
    setNewCollegeVisible(school === "other");
    setFormData({ ...formData, school, new_school: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRepresentativeTypeChange = (event) => {
    const type = event.target.value;
    setRepresentativeType(type);
    setSelectedDistrict("");
    setColleges([]);
    setSchools([]);
    setNewCollegeVisible(false);
    setFormData({
      ...formData,
      representative_type: type,
      college: "",
      school: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      ...formData,
      new_college:
        newCollegeVisible && representativeType === "college"
          ? formData.new_college
          : "",
      new_school:
        newCollegeVisible && representativeType === "school"
          ? formData.new_school
          : "",
    };

    axios
      .post("/api/submit-form/", data)
      .then((response) => {
        if (response.data.status) {
          navigate("/dashboard");
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  return (
    <section className="bg-[#230c3c] min-h-screen flex justify-center items-center">
      <div id="intro" className="popup1 py-16">
        <div className="map max-w-[75%] lg:max-w-[50%]">
          <div className="map-body">
            <h1>Ahoy, me Hearties!</h1>
            <p>Become a captain and sail the seas o' change, ye scallywags!</p>

            <form onSubmit={handleSubmit}>
              <div className="row12">
                <div className="label">
                  <label htmlFor="name">*Yer Name:</label>
                </div>
                <div className="rightinput">
                  <input
                    className="input-field"
                    id="name"
                    autoFocus
                    type="text"
                    name="name"
                    placeholder="Scribe Yer Name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row12">
                <div className="label">
                  <label htmlFor="phone">*Phone Number:</label>
                </div>
                <div className="rightinput">
                  <input
                    className="input-field"
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="row12">
                <div className="label">
                  <label htmlFor="representative_type" className="text-wrap">
                    Representative Type:
                  </label>
                </div>
                <div className="rightinput">
                  <select
                    className="input-field"
                    id="representative_type"
                    name="representative_type"
                    onChange={handleRepresentativeTypeChange}
                    value={representativeType}
                    required
                  >
                    <option value="college">College</option>
                    <option value="school">School</option>
                  </select>
                </div>
              </div>

              <div className="row12">
                <div className="label">
                  <label htmlFor="state">State:</label>
                </div>
                <div className="rightinput">
                  <select
                    className="input-field"
                    id="state"
                    name="state"
                    onChange={handleStateChange}
                    value={selectedState}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="row12">
                <div className="label">
                  <label htmlFor="district">District:</label>
                </div>
                <div className="rightinput">
                  <select
                    className="input-field"
                    id="district"
                    name="district"
                    onChange={handleDistrictChange}
                    value={selectedDistrict}
                    required
                  >
                    <option value="" className="text-gray-400">
                      Select District
                    </option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {representativeType === "college" ? (
                <div className="row12">
                  <div className="label">
                    <label htmlFor="college">College:</label>
                  </div>
                  <div className="rightinput">
                    <select
                      className="input-field"
                      id="college"
                      name="college"
                      onChange={handleCollegeChange}
                      required
                      value={formData.college}
                    >
                      <option value="">Select College</option>
                      {colleges.map((college) => (
                        <option key={college} value={college}>
                          {college}
                        </option>
                      ))}
                      <option value="other">Other (Enter New College)</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="row12">
                  <div className="label">
                    <label htmlFor="school">School:</label>
                  </div>
                  <div className="rightinput">
                    <select
                      className="input-field"
                      id="school"
                      name="school"
                      onChange={handleSchoolChange}
                      required
                      value={formData.school}
                    >
                      <option value="">Select School</option>
                      {schools.map((school) => (
                        <option key={school} value={school}>
                          {school}
                        </option>
                      ))}
                      <option value="other">Other (Enter New School)</option>
                    </select>
                  </div>
                </div>
              )}

              {newCollegeVisible && representativeType === "college" && (
                <div className="row12">
                  <div className="label">
                    <label htmlFor="new_college">Enter New College:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="new_college"
                      type="text"
                      name="new_college"
                      placeholder="Enter New College Name"
                      value={formData.new_college}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              {newCollegeVisible && representativeType === "school" && (
                <div className="row12">
                  <div className="label">
                    <label htmlFor="new_school">Enter New School:</label>
                  </div>
                  <div className="rightinput">
                    <input
                      className="input-field"
                      id="new_school"
                      type="text"
                      name="new_school"
                      placeholder="Enter New School Name"
                      value={formData.new_school}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              )}

              <div className="row12">
                <div className="label">
                  <label htmlFor="year_of_study">Year of Study:</label>
                </div>
                <div className="rightinput">
                  <select
                    className="input-field"
                    id="year_of_study"
                    name="year_of_study"
                    required
                    value={formData.year_of_study}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>- - -</option>
                    <option value="first">8th</option>
                    <option value="first">9th</option>
                    <option value="first">10th</option>
                    <option value="first">11th</option>
                    <option value="first">12th</option>
                    <option value="junior_college">Junior College</option>
                    <option value="12th_pass">12th Pass</option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                    <option value="fourth">Fourth</option>
                    <option value="fifth">Fifth</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center">
              <div className="container12 hoverable">
                <button className="submit12" id="randomize" type="submit">Submit</button></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default Details;
