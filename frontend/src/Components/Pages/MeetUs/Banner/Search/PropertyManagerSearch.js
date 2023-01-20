import { useState, useEffect } from "react";
import PropertyManagersPopUp1 from "./PopUp/PropertyManagersPopUp1";
import PropertyManagersPopUp2 from "./PopUp/PropertyManagersPopUp2";
import PropertyManagersPopUp3 from "./PopUp/PropertyManagersPopUp3";
import PropertyManagersPopUp4 from "./PopUp/PropertyManagersPopUp4";
import PropertyManagersPopUp5 from "./PopUp/PropertyManagersPopUp5";
import PropertyManagersPopUp6 from "./PopUp/PropertyManagersPopUp6";
import PropertyManagersPopUp7 from "./PopUp/PropertyManagersPopUp7";
import DropdownInputFilter from "./DropdownInputFilter";
import BookMeeting from "./../../../../CommonComponents/PropertyManagers/ManagerCardSection/Buttons/BookMeeting";
import InputFilter from "./InputFilter";
import SearchBtn from "./SearchBtn";
import CallBtn from "./../../../../CommonComponents/PropertyManagers/ManagerCardSection/Buttons/CallBtn"
import ManagerComponents from "./PopUp/ManagersComponents/ManagerComponents";

const PropertyManagerSearch = () => {
  const [openPopUp1, setOpenPopUp1] = useState(false);
  const [openPopUp2, setOpenPopUp2] = useState(false);
  const [openPopUp3, setOpenPopUp3] = useState(false);
  const [openPopUp4, setOpenPopUp4] = useState(false);
  const [openPopUp5, setOpenPopUp5] = useState(false);
  const [openPopUp6, setOpenPopUp6] = useState(false);
  const [openPopUp7, setOpenPopUp7] = useState(false);
  const [showData, setShowData] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [inputCategories, setInputCategories] = useState("");
  const [inputLocation, setInputLocation] = useState("");


  let URL = "http://localhost:5000/propertyManagers?";

  let requestOptions = {
    method: 'POST',
    redirect: 'follow'
  };

  useEffect(() => {
    if (inputCategories) {
      if (inputCategories !== "All") {
        if (URL.at(-1) === "?") {
          URL = URL + `category=${inputCategories}`
        } else {
          URL = URL + `&category=${inputCategories}`
        }
      }
    }

    if (inputLocation) {
      if (inputLocation !== "All") {
        if (URL.at(-1) === "?") {
          URL = URL + `location=${inputLocation}`
        } else {
          URL = URL + `&location=${inputLocation}`
        }
      }
    }

    fetch(URL, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setShowData(result)
      })
      .catch(error => console.log('error', error));
  }, [inputCategories, inputLocation]);



  return (
    <>
      <div>
        {openPopUp1 && <PropertyManagersPopUp1 closePopUp={setOpenPopUp1} />}
        {openPopUp2 && <PropertyManagersPopUp2 closePopUp={setOpenPopUp2} />}
        {openPopUp3 && <PropertyManagersPopUp3 closePopUp={setOpenPopUp3} />}
        {openPopUp4 && <PropertyManagersPopUp4 closePopUp={setOpenPopUp4} />}
        {openPopUp5 && <PropertyManagersPopUp5 closePopUp={setOpenPopUp5} />}
        {openPopUp6 && <PropertyManagersPopUp6 closePopUp={setOpenPopUp6} />}
        {openPopUp7 && <PropertyManagersPopUp7 closePopUp={setOpenPopUp7} />}
      </div>

      <div className={`relative 2xl:px-24 sm:px-12 px-6 w-full xl:top-[-5rem] 85 sm:top-[-5rem]  xs:top-[-5rem] 2xs:top-[-5rem] top-[-5rem] drop-shadow-2xl`}>
        <div className={`flex sm:flex-row flex-wrap gap-2 flex-col justify-between py-8 px-12 rounded-xl bg-white`}>

          {/*Search by name */}
          <InputFilter onChange={(e) => setSearchTerm(e.target.value)} />
          <DropdownInputFilter
            filterName={"Filter by category"}
            dropdowns={[
              "Residential Property Manager",
              "Commercial Property Manager",
              "Finance Advisor",
              "All",
            ]}
            selectDropdown={setInputCategories}
            dropdownValue={inputCategories}
          />

          <DropdownInputFilter
            filterName={"Filter by location"}
            dropdowns={["Auckland Central", "Albany", "Hamilton", "All"]}
            selectDropdown={setInputLocation}
            dropdownValue={inputLocation}
          />

          <SearchBtn onClick={() => showData} />
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////// */}

      <div className="py-[rem] 2xl:px-24 sm:px-12 px-6">
        <div>
          <div className="mx-[3rem] text-buttonGrey text-[0.75rem] font-semibold mb-10 ">{showData.length} results found</div>
          <div className="flex justify-center">
            <div className=" grid grid-cols-1 gap-y-10
              xs:grid-cols-2 gap-x-[6rem] lg:grid-cols-3 2xl:grid-cols-3">
              {Array.from(showData)
                .filter((val) => {
                  if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((ManagerArrayList) => {
                  return (
                    <div className="w-[19.75em] h-[18.375rem]  bg-white rounded-md shadow-lg px-10">
                      <div className="top-section flex justify-between pt-8">
                        <ManagerComponents item={ManagerArrayList} />
                      </div>


                      {/************** * button below ************************************************************************/}
                      <div className='flex justify-between w-full'>
                        <CallBtn />

                        <button className='text-footerSubGrey2 bg-none w-[3.938rem] px-[0.3rem] text-[0.57rem] rounded-md font-bold border-footerSubGrey2 border-opacity-80 border-[0.1rem] hover:opacity-50'
                          onClick={() => {
                            if (ManagerArrayList.id == "1") {
                              return setOpenPopUp1("true")
                            } else if (ManagerArrayList.id == "2") {
                              return setOpenPopUp2("true")
                            } else if (ManagerArrayList.id == "3") {
                              return setOpenPopUp3("true")
                            } else if (ManagerArrayList.id == "4") {
                              return setOpenPopUp4("true")
                            } else if (ManagerArrayList.id == "5") {
                              return setOpenPopUp5("true")
                            } else if (ManagerArrayList.id == "6") {
                              return setOpenPopUp6("true")
                            } else if (ManagerArrayList.id == "7") {
                              return setOpenPopUp7("true")
                            }
                          }}>
                          Message
                        </button>

                        <BookMeeting />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyManagerSearch;