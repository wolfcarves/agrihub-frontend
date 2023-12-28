import thumnail from "@assets/images/thumnail.svg";
import dp from "@icons/center-logo.svg";
import { PiEyeBold } from "react-icons/pi";
const Article = () => {
  return (
    <div className="pt-3 pb-8 px-[5rem] ">
      <div className="flex justify-between items-center">
        <div className="text-[#188B16] mb-3">
          Farming / Agriculture / Urban Farming
        </div>
        <div className="text-[#b9b9b9] mb-3 flex items-center gap-1">
          <PiEyeBold size={18} /> 4.6K
        </div>
      </div>
      <img
        className="w-full h-[20rem] object-cover object-center rounded-2xl"
        src={thumnail}
      />
      <div className="flex justify-center my-5 items-center gap-2">
        <img className="h-[2.3rem]" src={dp} />
        <p className=" font-semibold">Center for Urban Agriculture</p>
        <p className=" font-semibold">|</p>
        <p className=" font-semibold">November 29, 2023</p>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className=" font-semibold">
          “Empowering Agriculture on each Highly Urbanized Districts”
        </h1>
      </div>
      <div>
        <p className=" leading-loose font-medium">
          The empowerment of agriculture in urbanized cities represents a
          transformative approach to addressing food security, sustainability,
          and community resilience. As urban areas expand, the integration of
          agriculture into the urban fabric becomes increasingly vital. This
          empowerment involves leveraging innovative technologies, sustainable
          practices, and community engagement to enhance the productivity and
          viability of urban agriculture....The empowerment of agriculture in
          urbanized cities represents a transformative approach to addressing
          food security, sustainability, and community resilience. As urban
          areas expand, the integration of agriculture into the urban fabric
          becomes increasingly vital. This empowerment involves leveraging
          innovative technologies, sustainable practices, and community
          engagement to enhance the productivity and viability of urban
          agriculture....The empowerment of agriculture in urbanized cities
          represents a transformative approach to addressing food security,
          sustainability, and community resilience. As urban areas expand, the
          integration of agriculture into the urban fabric becomes increasingly
          vital. This empowerment involves leveraging innovative technologies,
          sustainable practices, and community engagement to enhance the
          productivity and viability of urban agriculture....The empowerment of
          agriculture in urbanized cities represents a transformative approach
          to addressing food security, sustainability, and community resilience.
          As urban areas expand, the integration of agriculture into the urban
          fabric becomes increasingly vital. This empowerment involves
          leveraging innovative technologies, sustainable practices, and
          community engagement to enhance the productivity and viability of
          urban agriculture....The empowerment of agriculture in urbanized
          cities represents a transformative approach to addressing food
          security, sustainability, and community resilience. As urban areas
          expand, the integration of agriculture into the urban fabric becomes
          increasingly vital. This empowerment involves leveraging innovative
          technologies, sustainable practices, and community engagement to
          enhance the productivity and viability of urban agriculture....The
          empowerment of agriculture in urbanized cities represents a
          transformative approach to addressing food security, sustainability,
          and community resilience. As urban areas expand, the integration of
          agriculture into the urban fabric becomes increasingly vital. This
          empowerment involves leveraging innovative technologies, sustainable
          practices, and community engagement to enhance the productivity and
          viability of urban agriculture....
        </p>
      </div>
      <div className="flex justify-center mt-14 mb-8">
        <h2 className=" font-bold">Related Articles</h2>
      </div>
      <div className="grid grid-cols-10 gap-10">
        <div className=" col-span-5">
          <img
            className="w-full h-[15rem] object-cover object-center rounded-2xl"
            src={thumnail}
          />
          <div className="flex justify-center text-sm my-2 items-center gap-2">
            <img className="h-[1.5rem]" src={dp} />
            <p className=" font-semibold">Center for Urban Agriculture</p>
            <p className=" font-semibold">|</p>
            <p className=" font-semibold">November 29, 2023</p>
          </div>
          <div className="flex justify-center text-start mb-2">
            <h3 className=" font-semibold line-clamp-2">
              “Empowering Agriculture on each Highly Urbanized Districts”
            </h3>
          </div>
          <div>
            <p className=" leading-tight font-medium line-clamp-5">
              The empowerment of agriculture in urbanized cities represents a
              transformative approach to addressing food security,
              sustainability, and community resilience. As urban areas expand,
              the integration of agriculture into the urban fabric becomes
              increasingly vital. This empowerment involves leveraging
              innovative technologies, sustainable practices, and community
              engagement to enhance the productivity and viability of urban
              agriculture. The empowerment of agriculture in urbanized cities
              represents a transformative approach to addressing food security,
              sustainability, and community resilience. As urban areas expand,
              the integration of agriculture into the urban fabric becomes
              increasingly vital.
            </p>
          </div>
        </div>
        <div className=" col-span-5">
          <img
            className="w-full h-[15rem] object-cover object-center rounded-2xl"
            src={thumnail}
          />
          <div className="flex justify-center text-sm my-2 items-center gap-2">
            <img className="h-[1.5rem]" src={dp} />
            <p className=" font-semibold">Center for Urban Agriculture</p>
            <p className=" font-semibold">|</p>
            <p className=" font-semibold">November 29, 2023</p>
          </div>
          <div className="flex justify-center text-start mb-2">
            <h3 className=" font-semibold line-clamp-2">
              “Empowering Agriculture on each Highly Urbanized Districts”
            </h3>
          </div>
          <div>
            <p className=" leading-tight font-medium line-clamp-5">
              The empowerment of agriculture in urbanized cities represents a
              transformative approach to addressing food security,
              sustainability, and community resilience. As urban areas expand,
              the integration of agriculture into the urban fabric becomes
              increasingly vital. This empowerment involves leveraging
              innovative technologies, sustainable practices, and community
              engagement to enhance the productivity and viability of urban
              agriculture. The empowerment of agriculture in urbanized cities
              represents a transformative approach to addressing food security,
              sustainability, and community resilience. As urban areas expand,
              the integration of agriculture into the urban fabric becomes
              increasingly vital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
