import ContentOurFocus from "@components/user/landing/our-focus/ContentOurFocus";
import Mission from "@components/user/landing/our-focus/Mission";
import Imagebanner from "@components/user/landing/our-focus/imagebanner";


const UserHomeLayout = () => {
  return (
   <div>
    <Imagebanner/>
    <ContentOurFocus/>
    <Mission/>
   </div>
  );
};

export default UserHomeLayout;

