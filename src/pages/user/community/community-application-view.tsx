import React, { useState } from "react";
import OutletContainer from "../../../components/user/questions/container/OutletContainer";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong, FaUserClock } from "react-icons/fa6";
import useGetCommunityFarmApplicationView from "../../../hooks/api/get/useGetCommunityFarmApplicationView";
import useGetCommunityFarmQuestionView from "../../../hooks/api/get/useGetCommunityFarmQuestionView";
import useGetFarmViewQuery from "../../../hooks/api/get/useGetFarmViewQuery";
import useGetUserProfileQuery from "../../../hooks/api/get/useGetUserProfileQuery";
import usePutCommunityFarmApplicationStatusUpdate from "../../../hooks/api/put/usePutCommunityFarmApplicationStatusUpdate";
import { toast } from "sonner";
import { UpdateApplicationStatusRequest } from "../../../api/openapi";
import { Button } from "../../../components/ui/button";
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
} from "../../../components/ui/alert-dialog";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../components/ui/custom/dialog/dialog";
import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import Loader from "../../../icons/Loader";
import { Card } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { timeAgo } from "../../../components/lib/utils";
import { ImUserTie } from "react-icons/im";
import { format } from "date-fns";
import { MdOutlineEditNote } from "react-icons/md";
import Input from "../../../components/ui/custom/input/input";

const CommunityApplicationView = () => {
  const { id, user, appId } = useParams();
  const navigate = useNavigate();
  const [remarks, setRemarks] = useState<string>("");
  const { data: appData, isLoading: appLoad } =
    useGetCommunityFarmApplicationView(appId || "");
  const { data: quesData, isLoading: quesLoad } =
    useGetCommunityFarmQuestionView(id || "");
  const { data: farmData, isLoading: farmLoad } = useGetFarmViewQuery(id || "");
  const { data: userData, isLoading: userLoad } = useGetUserProfileQuery(
    user || ""
  );
  console.log(quesData);

  //reject member
  const { mutateAsync: rejectMutation, isLoading: rejectLoading } =
    usePutCommunityFarmApplicationStatusUpdate();
  const handleReject = async () => {
    try {
      if (remarks.trim() === "") {
        throw new Error("Remarks is required.");
      }
      await rejectMutation({
        id: appId || "",
        requestBody: {
          status: UpdateApplicationStatusRequest.status.REJECTED,
          remarks: remarks
        }
      });
      toast.success("User Application Rejected Successfully!");
      //   setShowKick(false);
    } catch (error: any) {
      toast.error(error.message);
      toast.error(error.body.message);
    }
  };

  //accept member
  const { mutateAsync: acceptMutation, isLoading: acceptLoading } =
    usePutCommunityFarmApplicationStatusUpdate();
  const handleAccept = async () => {
    try {
      await acceptMutation({
        id: appId || "",
        requestBody: {
          status: UpdateApplicationStatusRequest.status.ACCEPTED
        }
      });
      toast.success("User Application Accepted Successfully!");
      //   setShowKick(false);
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  if (userLoad || appLoad || quesLoad || farmLoad) {
    return <Loader isVisible={true} />;
  }

  return (
    <OutletContainer className="px-4">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer mb-3 gap-x-2 text-gray-400 font-poppins-semibold hover:underline hover:underline-offset-2 py-2.5 px-1.5 rounded-lg duration-200"
      >
        <FaArrowLeftLong /> Back
      </div>
      <div className=" md:col-span-9 col-span-12 md:px-0 px-4">
        <h2 className=" font-poppins-semibold  text-green-700 leading-tight ">
          Farmer Application To {farmData?.farm_name}
        </h2>
        <div className="flex flex-col gap-4 border-t-4 border-primary pt-2">
          <Card className=" p-5">
            <h4 className=" font-poppins-semibold flex items-center gap-1 mb-4">
              <FaUserClock
                className=" text-primary font-poppins-medium "
                size={22}
              />
              Applicant Profile
            </h4>

            <div className="flex justify-between items-center px-2">
              <div className="flex gap-2">
                <img
                  src={userData?.avatar}
                  className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none"
                />
                <div>
                  <h6 className=" font-poppins-semibold hover:opacity-80">
                    {`${userData?.firstname} ${userData?.lastname}`}
                  </h6>
                  <p className="text-gray-400 text-sm">
                    Joined {timeAgo(userData?.createdat || "")}
                  </p>
                </div>
              </div>
            </div>
            <div className="px-2 mt-4 grid grid-cols-10 gap-y-3">
              <div className=" md:col-span-5 col-span-10">
                <h6 className=" font-poppins-medium text-md">Email</h6>
                <p className=" text-gray-500 font-poppins-regular">
                  {userData?.email}
                </p>
              </div>
              <div className=" md:col-span-5 col-span-10">
                <h6 className=" font-poppins-medium text-md">Birthday</h6>
                <p className=" text-gray-500 font-poppins-regular">
                  {format(new Date(userData?.birthdate || ""), "PPP")}
                </p>
              </div>
              <div className=" md:col-span-5 col-span-10">
                <h6 className=" font-poppins-medium text-md">District</h6>
                <p className=" text-gray-500 font-poppins-regular">
                  {userData?.district}
                </p>
              </div>
              <div className=" md:col-span-5 col-span-10">
                <h6 className=" font-poppins-medium text-md">Address</h6>
                <p className=" text-gray-500 font-poppins-regular">
                  {userData?.present_address}
                </p>
              </div>
            </div>
          </Card>
          <Card className=" p-5 ">
            <div className="mb-4 flex justify-between md:flex-row flex-col">
              <h4 className=" font-poppins-semibold flex items-center gap-1 ">
                <MdOutlineEditNote
                  className=" text-primary font-poppins-medium "
                  size={27}
                />
                Submitted Requirments
              </h4>
              <p className="text-gray-400 text-sm">
                Summitted in {format(new Date(appData?.createdat || ""), "PPP")}
              </p>
            </div>
            <div className="px-2 mt-4 grid grid-cols-10 gap-y-3 gap-x-10">
              <div className=" md:col-span-5 col-span-10">
                <Label className=" font-poppins-medium">Contact Person</Label>
                <Input
                  value={appData?.contact_person}
                  disabled
                  className=" opacity-90"
                />
              </div>
              <div className=" md:col-span-5 col-span-10">
                <Label className=" font-poppins-medium">Contact Person</Label>
                <Input
                  value={appData?.contact_person}
                  disabled
                  className=" opacity-90"
                />
              </div>
              <div className=" md:col-span-5 col-span-10">
                <Label className=" font-poppins-medium">Reason</Label>
                <Textarea
                  value={appData?.reason}
                  disabled
                  className=" opacity-90"
                />
              </div>
              <div className=" md:col-span-5 col-span-10">
                <Label className=" font-poppins-medium">Proof Selfie</Label>
                <img
                  src={appData?.proof_selfie}
                  className=" h-20 hover:shadow rounded border border-border"
                />
              </div>
              <div className=" md:col-span-5 col-span-10">
                <Label className=" font-poppins-medium">Valid ID</Label>
                <img
                  src={appData?.valid_id}
                  className=" h-20 hover:shadow rounded border border-border"
                />
              </div>
            </div>
          </Card>
        </div>
        <div className="flex justify-end gap-1 my-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" bg-destructive">Reject</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  Do you want to reject this application?
                </DialogTitle>
                <DialogDescription>
                  This action will reject the user application to this community
                  farm.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="">
                  <Label className="text-right font-poppins-medium">
                    Remarks
                  </Label>
                  <Textarea
                    onChange={e => setRemarks(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">
                    Close
                  </Button>
                </DialogClose>
                <Button className=" bg-destructive" onClick={handleReject}>
                  Confirm
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Accept</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Do you want to accept this user?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action will add the user to the commnunity farm as one of
                  the farmer.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAccept}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <Loader isVisible={rejectLoading || acceptLoading} />
      </div>
    </OutletContainer>
  );
};

export default CommunityApplicationView;
