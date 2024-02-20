import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../dialog";
import { Button } from "../../button";
import { ScrollArea } from "../../scroll-area";
const DataPrivacyDialog = ({ isDialogOpen, setDialogOpen }: any) => {
  return (
    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Data Privacy Statement</DialogTitle>
          <DialogDescription>
            At Agrihub, we are committed to ensuring the privacy and security of
            your personal information. This Data Privacy Statement explains how
            we collect, use, and protect the data you provide to us through our
            farm application.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[40vh]">
          <div className="">
            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">
                1. Information We Collect:
              </h2>

              <p className="mb-2">
                1.1 <strong>Account Information:</strong>
                <br />
                When you sign up for Agrihub, we may collect personal
                information such as your name, email address, and password to
                create and manage your account.
              </p>

              <p>
                1.2 <strong>Farm Data:</strong>
                <br />
                To provide you with the best possible service, our application
                may collect and store data related to your farm, including crop
                information, weather conditions, and other relevant data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">
                2. How We Use Your Information:
              </h2>

              <p className="mb-2">
                2.1 <strong>Personalization:</strong>
                <br />
                We use your information to personalize your experience within
                the app, providing tailored content and recommendations based on
                your farm's specific needs.
              </p>

              <p className="mb-2">
                2.2 <strong>Communication:</strong>
                <br />
                We may use your contact information to send important updates,
                notifications, and newsletters related to the application and
                your farm activities.
              </p>

              <p>
                2.3 <strong>Analytics:</strong>
                <br />
                Aggregated and anonymized data may be used for analytical
                purposes to improve our application's functionality and enhance
                user experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">3. Data Security:</h2>

              <p className="mb-2">
                3.1 <strong>Secure Transmission:</strong>
                <br />
                We employ industry-standard encryption protocols to protect data
                transmission between your device and our servers.
              </p>

              <p>
                3.2 <strong>Access Controls:</strong>
                <br />
                Access to your personal and farm data is restricted to
                authorized personnel only, ensuring that your information
                remains confidential.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">
                4. Sharing Your Information:
              </h2>

              <p className="mb-2">
                4.1 <strong>Third-Party Integration:</strong>
                <br />
                We may integrate with third-party services to enhance the
                functionality of our application. Your data will only be shared
                with your explicit consent or as required to provide the
                requested services.
              </p>

              <p>
                4.2 <strong>Legal Requirements:</strong>
                <br />
                We may disclose your information if required by law or in
                response to a valid legal request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">5. Your Choices:</h2>

              <p className="mb-2">
                5.1 <strong>Account Settings:</strong>
                <br />
                You have control over the information you provide and can update
                or delete your account data through the application's settings.
              </p>

              <p>
                5.2 <strong>Communication Preferences:</strong>
                <br />
                You can manage your communication preferences by adjusting
                notification settings within the app.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-md font-semibold mb-4">
                6. Updates to this Privacy Statement:
              </h2>

              <p>
                We may update this Privacy Statement to reflect changes in our
                practices. We encourage you to review this statement
                periodically.
              </p>
            </section>

            <p className="mb-4">
              By using Agrihub, you agree to the terms outlined in this Data
              Privacy Statement. If you have any questions or concerns, please
              contact us at agrihub26@gmail.com.
            </p>

            <p>Last Updated: January 26, 2024</p>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button onClick={() => setDialogOpen(false)} type="submit">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DataPrivacyDialog;
