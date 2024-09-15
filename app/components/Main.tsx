import useStore from '@/app/store';
import Image from 'next/image';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import Settings from '../assets/settings.svg';
import { Nav } from '@/app/components/Nav';
import { Aside } from '@/app/components/Aside';
import { TimeOff } from '@/app/components/TimeOff';

export const Main = () => {
  const user = useStore((state) => state.user);

  if (!user) {
    return null;
  }

  return (
    <div className="grid grid-rows-[200px_auto]">
      <div className="bg-[#DAE6F2] grid md:grid-cols-[15%_85%] gap-x-[25px] px-8 sm:px-[70px] relative">
        <div className="col-start-1 row-start-2 relative">
          {user.avatar && (
            <Image
              className="rounded-full w-[60px] h-[60px] bottom-0 mx-auto right-0 left-0 z-20 xl:absolute xl:w-[150px] xl:h-[150px]"
              src={user.avatar}
              alt="avatar"
              priority={true}
              width={150}
              height={150}
            />
          )}
        </div>
        <div className="col-start-2 row-start-2 flex items-baseline justify-between">
          <h3 className="font-semibold text-[28px]">{user.name}</h3>
          <div className="hidden gap-4 xl:flex">
            <Select>
              <SelectTrigger className="w-[162px] text-xs bg-[#DAE6F2] border-[#7C96B1]">
                <SelectValue placeholder="Request a Change" />
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger className="w-[70px] text-xs bg-[#DAE6F2] border-[#7C96B1]">
                <SelectValue placeholder={<Settings />} />
              </SelectTrigger>
            </Select>
          </div>
          <Image
            className="w-4 h-4 block xl:hidden"
            src={'/ellipsis.svg'}
            alt="ellipsis"
            priority={true}
            width={16}
            height={16}
          />
        </div>
        <Nav className="col-start-2 row-start-3 xl:flex items-center gap-4 absolute bottom-0 hidden" />
      </div>
      <div className="grid xl:grid-cols-[15%_85%] px-0 md:px-[70px] gap-x-[25px] mb-10">
        <Aside className="col-start-1 row-start-1 flex-col gap-4 mt-[-10px] z-10 self-start hidden xl:flex" />
        <TimeOff className="col-start-1 xl:col-start-2 row-start-1 self-start" />
      </div>
    </div>
  );
};
