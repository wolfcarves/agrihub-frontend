import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetFarmApplication from "../../../hooks/api/get/useGetFarmApplication";
import AdminOutletContainer from "../../../components/admin/layout/container/AdminOutletContainer";
import { timeAgo } from "../../../components/lib/utils";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner";
import useFarmAcceptApplicationMutation from "../../../hooks/api/post/useFarmAcceptApplicationMutation";
import useFarmRejectApplicationMutation from "../../../hooks/api/post/useFarmRejectApplicationMutation";
import { Card } from "@components/ui/card";
import { Badge } from "@components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@components/ui/carousel";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import withAuthGuard from "@higher-order/account/withAuthGuard";
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
import BackButton from "@components/ui/custom/button/back-button";

const FarmApplicationView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetFarmApplication(id || "");
  const { mutateAsync: farmAcceptMutate } = useFarmAcceptApplicationMutation();
  const { mutateAsync: farmRejectMutate } = useFarmRejectApplicationMutation();

  const handleAcceptApplication = async () => {
    try {
      await farmAcceptMutate(id || "");

      toast.info(`Successfully accepted farm application`);
      navigate(`/admin/community/farms-application?tab=registered`);
    } catch (error: any) {}
  };
  const handleRejectApplication = async () => {
    try {
      await farmRejectMutate(id || "");

      toast.info(`Farm application rejected`);
      navigate(`/admin/community/farms-application?tab=rejected`);
    } catch (error: any) {}
  };

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <AdminOutletContainer>
      <h2 className="text-3xl font-bold flex gap-4 tracking-tight">
        <BackButton /> View Farm Applications
      </h2>
      <div className="flex gap-4">
        <Card className="p-5 mt-8 w-full flex flex-wrap sm:flex-nowrap">
          {/* farm head */}
          <div className="w-full">
            <h5 className="mb-4 font-bold">Farm Head</h5>
            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <img
                    src={data?.applicant.avatar}
                    className="w-11 h-11 object-center object-cover bg-slate-500 rounded-lg select-none"
                  />
                  <div>
                    <h6 className="font-poppins-medium hover:opacity-80">
                      {data?.applicant.username}
                    </h6>
                    <p className="text-gray-400 text-sm">
                      {timeAgo(data?.createdat || "")}
                    </p>
                  </div>
                </div>

                <Badge
                  className={
                    data?.status === "pending"
                      ? "bg-blue-500 text-white hover:text-blue-500 hover:bg-white"
                      : data?.status === "rejected"
                      ? "bg-red-500 text-white hover:text-red-500 hover:bg-white"
                      : ""
                  }
                >
                  {data?.status}
                </Badge>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full mt-2">
                <div className="w-full">
                  <Label>First Name</Label>
                  <Input type="text" value={data?.applicant.firstname} />
                </div>
                <div className="w-full">
                  <Label>Last Name</Label>
                  <Input type="text" value={data?.applicant.lastname} />
                </div>
              </div>

              <div className="mt-2">
                <Label>Email</Label>
                <Input type="email" value={data?.applicant.email} />
              </div>
            </div>
          </div>

          {/* farmer id */}
          <div className="p-5 w-full flex-col items-center">
            <p className="font-medium">{data?.id_type}</p>
            <Dialog>
              <DialogTrigger>
                <img
                  src={data?.valid_id}
                  id="proof"
                  className="min-h-20 max-h-52 object-cover w-full rounded-md"
                />
              </DialogTrigger>
              <DialogContent className="my-10">
                <DialogTitle>{data?.id_type}</DialogTitle>
                <img
                  src={data?.valid_id}
                  id="proof"
                  className="min-h-20 object-cover rounded-md"
                />
              </DialogContent>
            </Dialog>
          </div>
        </Card>
      </div>

      {/* Farm Proof */}
      <div className="flex flex-wrap sm:flex-nowrap mt-4 gap-4">
        <Card className="p-5 w-full">
          <h5 className="mb-4 font-bold">Farm Proof</h5>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {data?.farm_actual_images.map((farm, index) => (
                <CarouselItem key={index}>
                  <Dialog>
                    <DialogTrigger>
                      <img
                        src={farm}
                        className="h-auto object-fill w-full rounded-md"
                      />
                    </DialogTrigger>
                    <DialogContent className="my-10">
                      <DialogTitle>Farm Photo</DialogTitle>
                      <img
                        src={farm}
                        className="min-h-20 object-cover w-full rounded-md"
                      />
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Card>

        {/* Farm Details */}
        <Card className="p-5 w-full">
          <h5 className="mb-2 font-bold">Farm Details</h5>
          <div className="flex flex-wrap sm:flex-nowrap gap-4">
            <div className="w-full">
              <Label>Farm name</Label>
              <Input type="text" value={data?.farm_name} />
            </div>
            <div>
              <Label>Type</Label>
              <Input type="text" value={data?.proof} />
            </div>
            <div>
              <Label>Size(square meter)</Label>
              <Input type="text" value={data?.farm_size} />
            </div>
          </div>

          <div className="flex gap-4 mt-2 flex-wrap sm:flex-nowrap">
            <div className="w-full">
              <Label>Location</Label>
              <Input type="text" value={data?.location} />
            </div>
            <div>
              <Label>District</Label>
              <Input type="text" value={data?.district} />
            </div>
          </div>
          {data?.status === "pending" ? (
            <div className="flex gap-4 mt-2 justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant={"destructive"}>Reject</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Reject Farm Application?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Rejecting this farm application ends the process
                      permanently. Sure you want to reject?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-400"
                      onClick={handleRejectApplication}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button>Accept</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Accept Farm Application?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This will allow the user to manage the farm it applies and
                      will have a farm head access to its community.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleAcceptApplication}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ) : null}
        </Card>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  FarmApplicationView,
  ["admin", "asst_admin"],
  "farms"
);
