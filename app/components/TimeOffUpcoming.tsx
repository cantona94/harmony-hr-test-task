import { ITimeOffBlogData } from '@/app/types';
import Image from 'next/image';

type Props = {
  data: ITimeOffBlogData[];
};

export const TimeOffUpcoming = ({ data }: Props) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image
          className="w-4 h-4"
          src={'/medicine.svg'}
          alt="medicine"
          priority={true}
          width={16}
          height={16}
        />
        <h2 className="font-medium text-sm text-[#204973]">
          Upcoming Time Off
        </h2>
      </div>
      <div className="h-[2px] w-full bg-[#7C96B1] mt-4"></div>
      {data.map((el, index) => (
        <div key={index}>
          <div className="flex items-center gap-[14px] my-4">
            <Image
              className="w-[30px] h-[30px]"
              src={`/${el.icon}.svg`}
              alt={el.icon}
              priority={true}
              width={30}
              height={30}
            />
            <div className="flex flex-col">
              <p>{el.date}</p>
              <div className="flex items-center gap-1">
                {el.point && (
                  <div className="w-2 h-2 rounded-full bg-[#1C3144]"></div>
                )}
                <p>{el.overview}</p>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-full bg-[#7C96B1]"></div>
        </div>
      ))}
    </>
  );
};
