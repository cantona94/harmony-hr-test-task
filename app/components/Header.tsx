import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SearchSVG from '../assets/search.svg';
import { Button } from '@/components/ui/button';
import useStore from '@/app/store';
import { removeTokenfromLocalStorage } from '@/app/helpers/localStorage.helper';
import { Search } from '@/components/ui/search';

const menu: string[] = [
  'Home',
  'My Info',
  'People',
  'Hiring',
  'Reports',
  'Files',
];

export const Header = () => {
  const avatar = useStore((state) => state.user?.avatar);
  const logout = useStore((state) => state.logout);
  const router = useRouter();

  const logoutHandler = () => {
    removeTokenfromLocalStorage('access_token');
    logout();
    router.push('/auth');
  };

  return (
    <header className="flex items-center gap-8 sm:gap-[60px] bg-[#FCFCFE] px-2 sm:px-6 w-full h-[50px] xl:items-start xl:pt-8 md:h-[86px]">
      <h3 className="text-sm sm:text-xl font-semibold">HarmonyHR</h3>
      <div className="hidden xl:flex">
        {menu.map((el, index) => (
          <button
            className={`w-24 h-[54px] rounded-t-lg  ${
              index === 1 ? 'bg-[#DAE6F2]' : ''
            }`}
            key={index}
          >
            {el}
          </button>
        ))}
      </div>
      <Search
        startIcon={SearchSVG}
        className="border-black rounded-2xl focus:border-0"
      />
      <div className="flex items-center gap-6">
        <Image
          className="w-6 h-6 hidden md:block"
          src="/settings.svg"
          alt="settings"
          priority={true}
          width={24}
          height={24}
        />
        <Image
          className="w-6 h-6 hidden md:block"
          src="/questions.svg"
          alt="questions"
          priority={true}
          width={24}
          height={24}
        />
        <Image
          className="w-6 h-6 hidden md:block"
          src="/notification.svg"
          alt="notification"
          priority={true}
          width={24}
          height={24}
        />
        <Image
          className="w-6 h-6 block xl:hidden"
          src="/burgerMenu.svg"
          alt="menu"
          priority={true}
          width={24}
          height={24}
        />
        {avatar && (
          <Image
            className="rounded-full"
            src={avatar}
            alt="avatar"
            priority={true}
            width={38}
            height={38}
            style={{
              height: '38px',
              width: '38px',
            }}
          />
        )}
        <Button
          className="hidden sm:block"
          variant="ghost"
          onClick={logoutHandler}
        >
          Выйти
        </Button>
      </div>
    </header>
  );
};
