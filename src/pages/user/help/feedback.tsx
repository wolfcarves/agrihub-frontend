import { Button } from "@components/ui/button";
import { Textarea } from "@components/ui/textarea";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@components/ui/alert-dialog";
import FeedbackIllustration from "@icons/FeedbackIlustration";
import { Link, useNavigate } from "react-router-dom";
import useCmsUserFeedbackMutation from "../../../hooks/api/post/useCmsUserFeedbackMutation";
import { NewUserFeedback } from "../../../api/openapi";
import { toast } from "sonner";
import Loader from "../../../icons/Loader";

const Feedback = () => {
  const navigate = useNavigate();
  const radios = [
    {
      name: "Very Satisfied",
      description:
        "Choosing 'Very Satisfied' means you had an exceptional experience, surpassing your expectations in every aspect. You likely found the service or product to be of outstanding quality, meeting all your needs and preferences exceptionally well."
    },
    {
      name: "Satisfied",
      description:
        "Selecting 'Satisfied' indicates you had a positive experience overall. While there may be minor areas for improvement, you found the service or product to be generally pleasing and meeting your expectations adequately."
    },
    {
      name: "Neutral",
      description:
        "Opting for 'Neutral' suggests your experience was neither exceptionally good nor bad. You might have found the service or product to be average, with no strong positive or negative feelings."
    },
    {
      name: "Dissatisfied",
      description:
        "Choosing 'Dissatisfied' indicates you had a negative experience, with significant aspects falling short of your expectations. You likely encountered issues or shortcomings that affected your satisfaction negatively."
    },
    {
      name: "Very Dissatisfied",
      description:
        "Selecting 'Very Dissatisfied' suggests you had an extremely poor experience, with almost every aspect failing to meet your expectations. You likely encountered severe issues or shortcomings that significantly impacted your satisfaction in a negative way."
    }
  ];
  const [feedback, setFeedback] = useState<string>("");
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [selectedOption, setSelectedOption] = useState<string>(radios[0].name);

  useEffect(() => {
    if (selectedOption === "Very Satisfied") {
      setRating(5);
    }
    if (selectedOption === "Satisfied") {
      setRating(4);
    }
    if (selectedOption === "Neutral") {
      setRating(3);
    }
    if (selectedOption === "Dissatisfied") {
      setRating(2);
    }
    if (selectedOption === "Very Dissatisfied") {
      setRating(1);
    }
  }, [selectedOption]);

  // Function to handle radio button change
  const handleRadioChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const { mutateAsync: resolveMutate, isLoading: resolveLoading } =
    useCmsUserFeedbackMutation();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) {
      toast.error("Feedback is required");
      return;
    }
    const compiledData: NewUserFeedback = {
      feedback: feedback,
      rating: rating
    };

    try {
      await resolveMutate({ requestBody: compiledData });
      toast.success("Feedback Submitted Successfully!");
      navigate("/");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <div className="my-16">
      <div className="mx-4 sm:mx-16">
        <h2 className="text-gray-800 font-bold">We value your feedback!</h2>
        <p className="text-gray-600 mt-2">
          Thank you for taking the time to share your thoughts. Your feedback
          helps us improve our website and provide a better experience for you
          and others.
        </p>
        <h3 className="text-gray-800 mt-6 font-medium">
          Are you satisfied with our website?
        </h3>
        <form>
          <ul className="mt-2 space-y-3">
            {radios.map((item, idx) => (
              <p key={idx}>
                <label htmlFor={item.name} className="block relative">
                  <input
                    id={item.name}
                    type="radio"
                    defaultChecked={idx == 1 ? true : false}
                    value={item.name} // Set value attribute to radio name
                    checked={selectedOption === item.name} // Check if current radio is selected
                    onChange={handleRadioChange} // Call handleRadioChange on change
                    name="feedback"
                    className="sr-only peer"
                  />
                  <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-primary peer-checked:ring-2 duration-200">
                    <div className="pl-7">
                      <h3 className="leading-none text-gray-800 font-medium">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="block absolute top-20 sm:top-11 left-5 border peer-checked:border-[5px] peer-checked:border-primary w-4 h-4 rounded-full"></span>
                </label>
              </p>
            ))}
          </ul>
          <div className="flex jusify-between my-8 flex-wrap">
            <div className="w-auto sm:w-1/2 pr-0 sm:pr-16">
              <p className="text-gray-800 text-3xl  font-semibold sm:text-4xl">
                Have any feedback and suggestions?
              </p>
              <p className="text-gray-600 mt-2">
                Your feedback is important to us. It helps us understand how we
                can improve and provide a better experience for you.
              </p>
            </div>

            <Textarea
              required
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              className="h-56 focus:border-primary w-full sm:w-1/2"
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" onClick={e => handleSubmitForm(e)}>
              Submit feedback{" >"}
            </Button>
            {/* <AlertDialog>
              <AlertDialogTrigger>
                
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Thank you for submitting your feedback
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Your feedback helps us improve our services and provide a
                    better experience for you and others. We truly appreciate
                    your input!
                    <div className="flex justify-center items-center mt-8">
                      <FeedbackIllustration />
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Link to="/">
                    <AlertDialogCancel>Close</AlertDialogCancel>
                  </Link>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog> */}
          </div>
          <Loader isVisible={resolveLoading} />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
