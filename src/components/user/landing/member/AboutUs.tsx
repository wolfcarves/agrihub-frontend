import React, { useState } from "react";

const About = () => {
    const sliderImages = [
        "https://i.imgur.com/lD8gT33.png",
        "https://i.imgur.com/WNxogAW.png",
        "https://i.imgur.com/JaaFkfz.png",
        // Add more image URLs as needed
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
        );
      };

      const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "agrihub26@gmail.com"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+1 (555) 000-000"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Room 212 IB Building, 673 Quirino Hwy, Novaliches, Quezon City, Metro Manila"
        },
    ]

  return (
    <div>
         {/* Header image*/}
         <div className="p-0">
          <img
          className="w-full mt-0"
          src="https://i.imgur.com/8gNnM5D.png"
          ></img>
        </div>
    {/* Header image */}
    <div className="p-0">
          <img
          className="w-full mt-0"
          src="https://i.imgur.com/5LuXO93.png"
          ></img>
        </div>
<div className="mt-8 sm:mt-12 lg:mt-16 ">
          <p className="text-sm lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Quezon City University - Center for Urban Agriculture and Innovation 
          is a pioneering initiative established in collaboration with the Department of Agriculture - 
          Agriculture Training Institute (DA-ATI) and the Sustainable Development Affairs Unit (SDAU) 
          of the local government. This learning hub is dedicated to developing diverse models of urban 
          farms, addressing the challenges faced by urban farmers, and mainstreaming urban agriculture 
          into Quezon City University's curriculum.
 </p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">The center received funding of P14.5MM from DA-ATI to 
          establish a dynamic learning environment on the QCU campus. Notable innovations
          include a bee farm, supported by the QCU cooperative, with staff trained in beekeeping 
          by the Agriculture Producers Cooperative.
</p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Aligned with the city's commitment to sustainability, the 
         Center for Urban Agriculture and Innovation plays a vital role in reinforcing and expanding 
         Quezon City's urban farming programs. Mayor Joy Belmonte envisions the center as a key 
         player in creating a smart and sustainable city, involving students and stakeholders in the process.
 </p>
         <p className="text-sm md:text-base lg:text-lg px-16 sm:px-44 lg:px-44 leading-relaxed py-3">Led by QCU President Dr. Theresita Atienza, the center maximizes its 
         impact by aligning programs and projects with the city's development goals. It is a vibrant community
         working towards a greener, smarter future, embracing innovation and contributing to the flourishing 
         landscape of urban agriculture in Quezon City. </p>
</div>

<div>
      {/* ... Image ... */}

      <div className="mt-8 sm:mt-12 lg:mt-16 relative">
      <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
        Our Story
      </h4>
      <div className="relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button className="text-white px-4 py-2 mr-2" onClick={prevSlide}>
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full hover:filter hover:brightness-75 transition duration-900 ease-in-out"
              src="https://i.imgur.com/MRoecMt.png"
              alt="Previous Image"
            />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button className="text-white px-4 py-2" onClick={nextSlide}>
            <img
              className="w-1/2 md:w-full lg:w-full xl:w-full hover:filter hover:brightness-75 transition duration-900 ease-in-out"
              src="https://imgur.com/XhhddcW.png"
              alt="Next Image"
            />
          </button>
        </div>
        <img
      src={sliderImages[currentSlide]}
      alt={`Slide ${currentSlide + 1}`}
      className="w-full mt-3"
      style={{ height: 'auto', minHeight: '200px', maxHeight: '100vh' }}
    />
      </div>

      {/* Slider line indicator on the image */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`w-8 m:w-12 lg:w-24 px-5 h-1 bg-green mx-1 ${
              index === currentSlide
                ? 'bg-green-300' // Dark color for the current page
                : 'bg-gray-300' // Light color for other pages
            }`}
          ></div>
        ))}
      </div>
    </div>
    </div>
{/*Mission*/}
<div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Mission & Vision</h4>
<div className="flex bg-gray-50 p-6 mt-10 text-black mx-4">
  <div className="mr-0 sm:mr-0 lg:mr-28 ml-2 sm:ml-24 lg:ml-28 mt-8 sm:mt-12 lg:mt-14">
    <h2 className="text-lg md:text-base lg:text-9xl font-bold italic">M</h2>
  </div>
  <div>
    <p className="text-sm md:text-base lg:text-3xl ml-12 sm:ml-12 lg:ml-14">
      To empower urban farmers through education and
      <span className="hidden sm:inline lg:inline"> <br /></span>
      collaboration, fostering sustainable agricultural
      <span className="hidden sm:inline lg:inline"> <br /></span>
      practices and environmental stewardship for
      <span className="hidden sm:inline lg:inline"> <br /></span>
      a resilient and thriving community.
    </p>
  </div>
</div>
</div>
{/*Vission*/}
<div className="flex bg-gray-50 p-6 mt-10 text-black mx-4">
  <div className="mr-0 sm:mr-0 lg:mr-28 ml-2 sm:ml-24 lg:ml-28 mt-12 sm:mt-14 lg:mt-16">
    <h2 className="text-lg md:text-base lg:text-9xl font-bold italic">V</h2>
  </div>
  <div>
    <p className="text-sm md:text-base lg:text-3xl ml-12 sm:ml-0 lg:ml-14">
      To be a leading center for urban agriculture innovation,
      <span className="hidden sm:inline lg:inline"> <br /></span>
      inspiring a greener and more sustainable future by 
      <span className="hidden sm:inline lg:inline"> <br /></span>
      equipping individuals with the knowledge and skills to 
      <span className="hidden sm:inline lg:inline"> <br /></span>
      transform urban spaces into thriving, ecologically sound agricultural ecosystems.
    </p>
  </div>
</div>
    



  {/*Partnership & Funding*/}
  <div className="mt-8 sm:mt-12 lg:mt-16 ">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Partnership & Funding</h4>
  <div className="flex">
  <div className="w-1/3 flex ml-4 m:ml-12 lg:ml-24 items-start mt-12 sm:mt-12 lg:mt-12">
    <img className="w-full" src="https://i.imgur.com/r47MAhb.png"/>
  </div>
  <div className="w-2/3">
    <p className="text-sm md:text-base lg:text-lg  ml-4 m:ml-12 lg:ml-0 px-5 sm:px-6 lg:px-44 mt-3 sm:mt-12 lg:mt-36 leading-relaxed py-2 ">In partnership with 
    DA-ATI, we have received  funding amounting to P14.5MM to establish the center on the QCU campus. This financial support 
    enables us to create a dynamic learning environment and implement cutting-edge projects.</p>
  </div>
</div>
  </div>

 {/* City Commitment */}
<div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
    City Commitment
  </h4>
  <div className="flex">
    <div className="w-1/2">
      <p className="text-sm md:text-base lg:text-lg ml-4 m:ml-12 lg:ml-10 px-0 sm:px-6 lg:px-10 mt-3 sm:mt-12 lg:mt-32 leading-relaxed py-2">
        Aligned with Quezon City's commitment to sustainability, our center plays a pivotal role in reinforcing and 
        expanding the city's urban farming programs. Mayor Joy Belmonte envisions the center as a key player in 
        creating a smart and sustainable city, involving students and stakeholders in the process.
      </p>
    </div>
    <div className="w-1/2 relative">
  <img className="absolute top-0 right-0 w-3/4 mr-6 m:mr-12 lg:mr-32 h-auto mt-20 sm:mt-12 lg:mt-16" src="https://i.imgur.com/nL9Csob.png" alt="Your Image" />
</div>
  </div>
</div>



{/* President Message */}
<div className="mt-8 sm:mt-12 lg:mt-28">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">
    President Message
  </h4>
  <div className="flex">
    <div className="w-1/3 sm:w-1/3 flex ml-4 m:ml-12 lg:ml-32 items-start mt-8 sm:mt-12 lg:mt-12">
      <img className="w-full sm:w-3/4 h-auto" src="https://i.imgur.com/MDd9HbW.png" alt="Your Image" />
    </div>

  <div className="w-2/3">
    <p className="text-sm md:text-base lg:text-lg px-5 sm:px-6 lg:px-44   ml-4 m:ml-12 lg:ml-0 mt-2 sm:mt-4 lg:mt-36 leading-relaxed py-2 ">In partnership with 
    DA-ATI, we have received  funding amounting to P14.5MM to establish the center on the QCU campus. This financial support 
    enables us to create a dynamic learning environment and implement cutting-edge projects.</p>
  </div>
</div>
</div>

{/*Organizational Chart*/}
<div className="mt-8 sm:mt-12 lg:mt-16">
  <h4 className="text-center font-bold sm:text-2xl md:text-2xl lg:text-xl xl:text-6xl text-gray-600">Organizational Chart</h4>
  <img className="w-full mb-4 sm:mx-0 sm:mb-10 mt-3 sm:mt-12 lg:mt-12 " src="https://i.imgur.com/6xFPkdj.png" />
</div>

{/* Contact Us */}
<div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                        <h3 className="text-primary font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                            We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form
                            target="_blank" action="https://formsubmit.co/agrihub26@gmail.com" method="POST"
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="FullName"
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="Email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea 
                                required 
                                name="Message"
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-primary active:bg-primary rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
