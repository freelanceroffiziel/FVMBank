import React, { useEffect } from "react";
import ServiceFirst from "../components/servicesComponents/ServiceFirst";
import ServiceSecond from "../components/servicesComponents/ServiceSecond";
import ServiceThird from "../components/servicesComponents/ServiceThird";
import ServiceFourth from "../components/servicesComponents/ServiceFourth";

const Services = () => {
  return (
    <main id="">
      <section className="">
        <ServiceFirst />
      </section>

       <section className="lg:mt-[10vh] mt-[16vh]">
        <ServiceFourth />
      </section>

      <section className="lg:mt-[10vh] mt-[16vh]">
        <ServiceSecond />
      </section>

      <section className="lg:mt-[10vh] mt-[16vh]">
        <ServiceThird />
      </section>
    </main>
  );
};

export default Services;
