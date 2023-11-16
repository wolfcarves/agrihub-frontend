import { RxHamburgerMenu } from 'react-icons/rx'
import AgrihubLogo from '@icons/agrihub-logo.svg'
import { HiOutlineSearch } from 'react-icons/hi'
import dp from '@assets/images/dp.svg'
import { SheetTrigger } from '@components/ui/sheet'
export default function Topbar() {
  // const toggle = useSelector((state: RootState) => state.sidebar.toggle);
  // const dispatch = useDispatch();

  return (
    <div className='p-3 bg-white border-b border-border flex justify-between w-full sticky top-0 z-30'>
      <div className='flex items-center gap-3'>
        <SheetTrigger className='md:hidden inline'>
          <RxHamburgerMenu size={20} />
        </SheetTrigger>

        <img className='h-[2rem]' src={AgrihubLogo} />
      </div>
      <div className='flex items-center gap-3'>
        <HiOutlineSearch size={24} color={'#5D5D5D'} />
        <img
          className='h-[2rem] w-[2rem] aspect-square rounded-full'
          src={dp}
        />
      </div>
    </div>
  )
}
