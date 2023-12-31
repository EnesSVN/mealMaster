import React from "react";
import Title from "../ui/Title";
import Location from "../ui/Location";
import Phone from "../ui/Phone";
import Mail from "../ui/Mail";

function Footer() {
  return (
    <div className=" bg-secondary relative  text-white">
      <div className="  container mx-auto py-20">
        <div className=" flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-4">
          <div className=" md:flex-1">
            <Title text="Contact Us" MyClassName="text-3xl text-center" />
            <div className=" mt-10 flex flex-col gap-y-3">
              <div className="flex justify-start items-center gap-x-2">
                <span>
                  <Location />
                </span>
                Location
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <span>
                  <Phone />
                </span>
                Call +01 1234567890
              </div>
              <div className="flex justify-start items-center gap-x-2">
                <span>
                  <Mail />
                </span>
                demo@gmail.com
              </div>
            </div>
          </div>
          <div className=" md:flex-1">
            <Title text="Feane" MyClassName="text-3xl text-center" />
            <div className=" mt-10 flex flex-col gap-y-3">
              <div className="flex justify-start items-center gap-x-2">
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with
                </p>
                <ul>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" md:flex-1">
            <Title text="Opening Hours" MyClassName="text-3xl text-center" />
            <div className=" mt-10 flex flex-col gap-y-3">
              <div className="flex justify-center items-center gap-x-2">
                <span>Everyday</span>{" "}
              </div>
              <div className="flex justify-center items-center gap-x-2">
                <span>10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>

        <p className=" text-center mt-10">
          © 2023 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
  );
}

export default Footer;
