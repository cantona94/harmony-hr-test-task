import { HistoryTable } from '@/app/components/HistoryTable';
import { TimeOffBlog } from '@/app/components/TimeOffBlog';
import { TimeOffUpcoming } from '@/app/components/TimeOffUpcoming';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  className: string;
};

interface IData {
  icon: string;
  date: string;
  point: boolean;
  overview: string;
}

const data: IData[] = [
  {
    icon: 'medicine',
    date: 'Jan 27',
    point: true,
    overview: '1 dey of Sick',
  },
  {
    icon: 'piggyBank',
    date: 'Jul 4',
    point: false,
    overview: 'Independence Day',
  },
];

export const TimeOff = ({ className }: Props) => {
  return (
    <div className={`${className} bg-[#FCFCFE] rounded-b-2xl px-4 pt-[30px]`}>
      <div className="flex justify-end md:justify-between items-center mb-3">
        <div className="hidden md:flex items-center gap-2">
          <Image
            className="w-4 h-4"
            src={'/compTime.svg'}
            alt="compTime"
            priority={true}
            width={16}
            height={16}
          />
          <h2 className="font-semibold text-xl text-[#204973]">TimeOff</h2>
        </div>
        <div className="flex md:flex-row flex-col items-end gap-[30px]">
          <p className="font-semibold text-[14px]">
            Accrual Level Start Date
            <span className="text-[#3758AB]"> 03/09-2020</span>
          </p>
          <Button className="border-black" variant={'outline'}>
            Add Time Off Policy
          </Button>
        </div>
      </div>
      <div className="h-[2px] w-full bg-[#7C96B1]"></div>
      <div className="flex flex-wrap gap-12 font-semibold items-stretch text-sm justify-center my-6">
        <TimeOffBlog
          title="Sick"
          icon="medicine"
          count="3"
          available="Days Available"
          schedule="1 dey scheduled"
          overview="Sick Full-Time"
        />
        <TimeOffBlog
          title="Annual Leave"
          icon="vacation"
          count="10.3"
          available="Days Available"
          overview="Holiday Full-Time"
        />
        <TimeOffBlog
          title="Comp/in Lieu Time"
          icon="compTime"
          count="0"
          available="Human Used(YTD)"
          overview="Comp/in Lieu Time Flexible Policy"
        />
      </div>
      <TimeOffUpcoming data={data} />
      <HistoryTable />
    </div>
  );
};
