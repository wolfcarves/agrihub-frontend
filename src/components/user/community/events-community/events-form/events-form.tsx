import React, { Dispatch, SetStateAction } from "react";
type formProps = {
  eventId?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const EventsForm: React.FC<formProps> = ({ eventId, setIsOpen }) => {
  return <div>asd</div>;
};

export default EventsForm;
