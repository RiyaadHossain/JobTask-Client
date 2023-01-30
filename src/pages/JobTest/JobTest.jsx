import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function JobTest() {
  const [true1, setTrue1] = useState(false);
  const [true2, setTrue2] = useState(false);
  const [true3, setTrue3] = useState(false);
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    fetch("https://job-task-server-five.vercel.app/get-data")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  console.log(user.select);
  const userFound = Object.keys(user).length;

  const handleSave = async () => {
    setTrue1(true);
    setTrue2(true);
    setTrue3(true);
    const data = { name, select, terms };

    if (!name || !select || !terms) return;

    const res = await fetch(
      "https://job-task-server-five.vercel.app/data-input",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    toast.success("Data Saved Successfully", { id: "succ" });
    console.log(res);
    window.location.reload();
  };

  const handleEdit = async () => {
    setTrue1(true);
    setTrue2(true);
    setTrue3(true);
    if (!name) setName(user.name);
    if (!select) setSelect(user.select);
    if (!terms) setTerms(user.terms);
    const data = { name, select, terms };
    if (!name || !select || !terms) return;

    const res = await fetch(
      `https://job-task-server-five.vercel.app/data-update/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    toast.success("Data Edited Successfully", { id: "edit" });
    console.log(res);
  };

  return (
    <div className="section">
      <p className="text-2xl mb-8 font-bold">
        Please enter your name and pick the Sectors you are currently involved
        in.
      </p>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mx-auto">
        <div className="card-body">
          {/* -------------------- Text Input -------------------- */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              defaultValue={user?.name || ""}
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            {!name && true1 && (
              <p className="text-sm text-error mt-1 text-left">
                Name is Required
              </p>
            )}
          </div>
          {/* -------------------- Select -------------------- */}
          <div className="form-control">
            {user.select ? (
              <p className="text-left">Selected Item: {user.select}</p>
            ) : null}
            <select
              defaultValue={user.select || "primary"}
              onChange={(e) => setSelect(e.target.value)}
              className="select w-full max-w-xs input-bordered"
            >
              <option value="primary" disabled>
                Pick your favorite Option
              </option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Construction materials">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
              </option>
              <option value="Electronics and Optics">
                &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
              </option>
              <option value="Food and Beverage">
                &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
              </option>
              <option value="Bakery confectionery products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
                confectionery products
              </option>
              <option value="Beverages">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
              </option>
              <option value="Fish fish products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish
                products{" "}
              </option>
              <option value="Meat meat products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat
                products
              </option>
              <option value="Milk dairy products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy
                products{" "}
              </option>
              <option value="Other">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
              </option>
              <option value="Sweets snack food">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp;
                snack food
              </option>
              <option value="Furniture">
                &nbsp;&nbsp;&nbsp;&nbsp;Furniture
              </option>
              <option value="Bathroom/sauna">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
              </option>
              <option value="Bedroom">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom
              </option>
              <option
                value="Childrenâ€™s
                room"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Childrenâ€™s
                room{" "}
              </option>
              <option value="Kitchen">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen{" "}
              </option>
              <option value="Living room">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room{" "}
              </option>
              <option value="Office">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office
              </option>
              <option value="Other (Furniture)">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
                (Furniture)
              </option>
              <option value="Outdoor">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor{" "}
              </option>
              <option value="Project furniture">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project
                furniture
              </option>
              <option value="Machinery">
                &nbsp;&nbsp;&nbsp;&nbsp;Machinery
              </option>
              <option value="Machinery components">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                components
              </option>
              <option value="Machinery equipment/tools">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
                equipment/tools
              </option>
              <option value="Manufacture of machinery">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of
                machinery{" "}
              </option>
              <option value="Maritime">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime
              </option>
              <option value="Aluminium and steel workboats">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium
                and steel workboats{" "}
              </option>
              <option value="Boat/Yacht building">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
                building
              </option>
              <option value="Ship repair and conversion">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
                repair and conversion
              </option>
              <option value="Metal structures">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures
              </option>
              <option value="Other">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
              </option>
              <option value="Repair and maintenance service">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and
                maintenance service
              </option>
              <option value="Metalworking">
                &nbsp;&nbsp;&nbsp;&nbsp;Metalworking
              </option>
              <option value="Construction of metal structures">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of
                metal structures
              </option>
              <option value="Houses and buildings">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and
                buildings
              </option>
              <option value="Metal products">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products
              </option>
              <option value="Metal works">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
              </option>
              <option value="CNC-machining">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
              </option>
              <option
                value="Forgings,
                Fasteners"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
                Fasteners{" "}
              </option>
              <option value="Gas, Plasma, Laser cutting">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
                Plasma, Laser cutting
              </option>
              <option value="MIG, TIG, Aluminum welding">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
                TIG, Aluminum welding
              </option>
              <option value="Plastic and Rubber">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber
              </option>
              <option value="Packaging">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
              </option>
              <option value="Plastic goods">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
              </option>
              <option value="Plastic processing technology">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic
                processing technology
              </option>
              <option value="Blowing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
              </option>
              <option value="Moulding">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
              </option>
              <option value="Plastics welding and processing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
                welding and processing
              </option>
              <option value="Plastic profiles">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
              </option>
              <option value="Printing">
                &nbsp;&nbsp;&nbsp;&nbsp;Printing{" "}
              </option>
              <option value="Advertising">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
              </option>
              <option value="Book/Periodicals printing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
                printing
              </option>
              <option value="Labelling and packaging printing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
                packaging printing
              </option>
              <option value="Textile and Clothing">
                &nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing
              </option>
              <option value="Clothing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
              </option>
              <option value="Textile">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
              </option>
              <option value="Wood">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
              <option value="Other (Wood)">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
              </option>
              <option value="Wooden building materials">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
                materials
              </option>
              <option value="Wooden houses">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
              </option>
              <option value="Other">Other</option>
              <option value="Creative industries">
                &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
              </option>
              <option value="Energy technology">
                &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
              </option>
              <option value="Environment">
                &nbsp;&nbsp;&nbsp;&nbsp;Environment
              </option>
              <option value="Service">Service</option>
              <option value="Business services">
                &nbsp;&nbsp;&nbsp;&nbsp;Business services
              </option>
              <option value="Engineering">
                &nbsp;&nbsp;&nbsp;&nbsp;Engineering
              </option>
              <option value="Information Technology and Telecommunications">
                &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and
                Telecommunications
              </option>
              <option value="Data processing, Web portals, E-marketing">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing,
                Web portals, E-marketing
              </option>
              <option value="Programming, Consultancy">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
                Consultancy
              </option>
              <option value="Software, Hardware">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software,
                Hardware
              </option>
              <option value="Telecommunications">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
              </option>
              <option value="Tourism">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
              <option value="Translation services">
                &nbsp;&nbsp;&nbsp;&nbsp;Translation services
              </option>
              <option value="Transport and Logistics">
                &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
              </option>
              <option value="Air">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
              </option>
              <option value="Rail">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
              </option>
              <option value="Road">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
              </option>
              <option value="Water">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
              </option>
            </select>
            {!select && true2 && (
              <p className="text-sm text-error mt-1 text-left">
                You must selece an option
              </p>
            )}
          </div>
          {/* -------------------- Select -------------------- */}
          <div>
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="checkbox"
                defaultChecked={user?.terms}
                onChange={(e) => setTerms(!terms)}
              />
              <span>Agree to Terms</span>
            </div>
            <br />
            {!terms && true3 && (
              <p className="text-sm relative -top-5 text-error text-left">
                Please agree to our terms
              </p>
            )}
          </div>
          {/* -------------------- Buttons -------------------- */}
          <div className="form-control mt-6 gap-3">
            {userFound ? (
              <button onClick={handleEdit} className="btn btn-primary">
                Edit
              </button>
            ) : null}
            {!userFound ? (
              <button onClick={handleSave} className="btn btn-success">
                Save
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
