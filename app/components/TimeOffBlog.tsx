import Image from 'next/image';

type Props = {
  title: string;
  icon: string;
  count: string;
  available: string;
  schedule?: string;
  overview: string;
};

export const TimeOffBlog = ({
  title,
  icon,
  count,
  available,
  schedule,
  overview,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-1 flex-col flex-wrap items-center gap-1 py-4 w-[200px] sm:w-[264px] bg-[#F0F3F8]">
        <h4 className="text-xs sm:text-xl">{title}</h4>
        <div className="flex items-center gap-[10px]">
          <Image
            className="w-[30px] h-[30px]"
            src={`/${icon}.svg`}
            alt={icon}
            priority={true}
            width={30}
            height={30}
          />
          <p className="text-[30px]">{count}</p>
        </div>
        <p className="text-[14px]">{available}</p>
        {schedule && <p className="text-[#7C96B1] text-[14px]">{schedule}</p>}
      </div>
      <h6 className="text-[#7C96B1] text-[14px] font-medium">{overview}</h6>
    </div>
  );
};
