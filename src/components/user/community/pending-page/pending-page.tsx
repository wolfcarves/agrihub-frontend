import React from 'react';
import  Pending  from '@assets/images/pending.svg';
import OutletContainer from '@components/user/questions/container/OutletContainer';
import { Button } from '@components/ui/button';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import useFarmCancelApplicationMutation from '@hooks/api/post/useFarmCancelApplicationMutation';
import { toast } from 'sonner';
import useGetFarmCheckExistingApplication from '@hooks/api/get/useGetFarmCheckExistingApplication';

const PendingPage = () => {
    const { data } = useGetFarmCheckExistingApplication();
    const { mutateAsync: farmCancelMutate } = useFarmCancelApplicationMutation();
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
  const handleCancelApplication = async () => {
    try {
      await farmCancelMutate(data?.data.id || "");

      toast.info(`Successfully cancelled farm application`);
      navigate(`/community/register`);
    } catch (error: any) {}
  };
  return (
    <OutletContainer>
        <div onClick={handleBack}><IoArrowBackCircleOutline className='text-gray-300' size={40}/></div>
      <div className=' flex flex-col justify-center items-center'>
      <h2 className='font-semibold'>Farm Application Pending...</h2>
        <img className='h-[15rem]' src={Pending as unknown as string} alt="" />
        <Button onClick={handleCancelApplication}>Cancel Application</Button>
      </div>
    </OutletContainer>
  );
};

export default PendingPage;