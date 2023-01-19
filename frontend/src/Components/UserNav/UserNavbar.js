import React, { useContext, useState } from "react";
import ItemUserNavbar from "./ItemUserNavbar";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LoggedUserContext from "../../Context/LoggedUserContext";

const UserNavbar = () => {
  const [activeUserItem, setActiveUserItem] = useState();
  // eslint-disable-next-line no-unused-vars
  const [loggedUser, _] = useContext(LoggedUserContext);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
    },
  };
  return (
    <div className={`${loggedUser ? "block" : "hidden"} w-full lg:text-[0.7rem]`}>
      <Carousel
        className={` justify-start items-center
    bg-[#333333] text-white 
    2xl:px-24 xl:px-16 sm:px-12 px-6`}
        renderButtonGroupOutside={true}
        responsive={responsive}
        removeArrowOnDeviceType={[
          "superLargeDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
      >
        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"Profile"}
          link={"/my-dairy/existing-user"}
        />
        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"My Account"}
          link={"/my-dairy/my-account"}
        />
        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"My Favorites"}
          link={"/my-dairy/my-favorite"}
        />

        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"My Applications"}
          link={"/my-dairy/my-applications"}
        />
        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"Talk to us"}
          link={"/meet-our-professionals"}
        />
        <ItemUserNavbar
          getActiveTab={setActiveUserItem}
          activeUserItem={activeUserItem}
          item={"Messages"}
        />
      </Carousel>
    </div>
  );
};

export default UserNavbar;
