import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "./eventsData";
import { formatDateTime } from "@components/lib/utils";
import { Link } from "react-router-dom";

const Event = () => {
  const { eventId } = useParams();

  const selectedEvent = eventsData.find(event => event.eventId === eventId);

  if (!selectedEvent) {
    return <div>Event not found!</div>;
  }

  return (
    <div>
      <section className="">
        <div className="max-w-screen-xl py-4 mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm text-green-700 font-medium">
              {formatDateTime(selectedEvent.eventStart)} -{" "}
              {formatDateTime(selectedEvent.eventEnd)}
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
              {selectedEvent.title} |{" "}
              <span className="text-3xl text-gray-800">
                {selectedEvent.speaker}
              </span>
            </h2>
            <p>Organized by: {selectedEvent.organized_by}</p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <p className="block py-2 px-4 text-center text-white font-medium bg-green-600 duration-150 active:bg-green-700 rounded-md shadow-lg hover:shadow-none">
                {selectedEvent.type}
              </p>
              <Link
                to="/events"
                style={{
                  textDecorationColor: "green",
                  textDecorationThickness: "3px"
                }}
                className="flex items-center justify-center gap-x-2 px-4 py-2 text-gray-700 hover:text-black font-medium duration-150 active:bg-green-100 md:inline-flex underline"
              >
                See more event
              </Link>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img src={selectedEvent.img} alt="event_image" />
          </div>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto py-8 text-gray-600 gap-x-12 items-start justify-start overflow-hidden md:flex md:px-8">
        <div className="relative max-w-xl px-4 md:px-0">
          <h3 className="text-gray-800 font-semibold text-lg">
            ABOUT THIS EVENT
          </h3>
          <div className="mt-3 max-w-xl text-lg">
            <p>{selectedEvent.desc}</p>
          </div>
        </div>
        <div className="relative max-w-xl px-4 md:px-0">
          {/* where */}
          <h3 className="text-gray-800 font-semibold text-md">WHERE</h3>
          <div className="max-w-xl mb-5 mt-1 text-lg">
            <p>{selectedEvent.where}</p>
          </div>

          {/* speaker */}
          <h3 className="text-gray-800 text-md font-semibold mt-3">SPEAKER</h3>
          <div className="max-w-xl text-lg mb-5 mt-1 flex gap-4 items-center">
            <div className="flex-none w-16 h-16">
              <img
                src="https://scontent.fmnl4-2.fna.fbcdn.net/v/t1.15752-9/420742763_1583353859137058_4752278058943882519_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeH7UtSGFD_whPLX1Z9YojDT_ll8-OOfX7v-WXz4459fu5dIwBVV8P_HOSZGV6hsd8qvc0GoZwBKEtjHOaR_jG0k&_nc_ohc=-DYt9tfjMykAX95IomP&_nc_ht=scontent.fmnl4-2.fna&oh=03_AdTQy-1qI8eMx_6-NNqCtJgt5FcRmXvP9cJRsXiHD6F0xg&oe=65F5821F"
                className="w-full h-full rounded-full object-cover"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-gray-700 font-semibold sm:text-lg">
                {selectedEvent.speaker}
              </h4>
              <p className="text-green-600">Tech Mahindra Support</p>
              <div className="mt-3 flex gap-4 text-gray-400"></div>
            </div>
          </div>

          {/* organizer */}
          <h3 className="text-gray-800 font-semibold text-md mt-3">
            ORGANIZER
          </h3>
          <div className="max-w-xl text-lg mb-8 mt-1 flex gap-4 items-center">
            <div className="flex-none w-16 h-16">
              <img
                src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/375571760_279134834872160_6436006381954840786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEvHPIGH21kaZODPgYBmJ37w6nPOLBd5r3Dqc84sF3mvZo1yIpif4qvvqwy7IdZWzRVex0eylgfanKq2RkMZKS0&_nc_ohc=bCypScfmI1sAX8kZYIz&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfA2RhrX5YFTmIs0gqvlxfLIGKg7nZrkUgyH7Rf46wHKHw&oe=65D24428"
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <h4 className="text-gray-700 font-semibold sm:text-lg">
                {selectedEvent.organized_by}
              </h4>
            </div>
          </div>

          {/* partners */}
          <h3 className="text-gray-800 font-semibold text-md mt-3">PARTNERS</h3>
          <div className="max-w-xl text-lg mb-8 mt-1 flex gap-4 items-center">
            <div className="flex-none w-16 h-16">
              <img
                src="https://scontent.fmnl4-6.fna.fbcdn.net/v/t39.30808-6/375571760_279134834872160_6436006381954840786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEvHPIGH21kaZODPgYBmJ37w6nPOLBd5r3Dqc84sF3mvZo1yIpif4qvvqwy7IdZWzRVex0eylgfanKq2RkMZKS0&_nc_ohc=bCypScfmI1sAX8kZYIz&_nc_ht=scontent.fmnl4-6.fna&oh=00_AfA2RhrX5YFTmIs0gqvlxfLIGKg7nZrkUgyH7Rf46wHKHw&oe=65D24428"
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>

            {/* partnets */}
            <div>
              <h4 className="text-gray-700 font-semibold sm:text-lg">
                {selectedEvent.partnership}
              </h4>
            </div>
          </div>

          {/* participation guide */}
          <h3 className="text-gray-800 text-md font-semibold mt-3">
            HOW TO PARTICIPATE
          </h3>
          <div className="max-w-xl text-lg mb-5 mt-1">
            <p>{selectedEvent.participateGuide}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
