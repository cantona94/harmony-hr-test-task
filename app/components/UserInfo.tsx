import Image from 'next/image';

type Props = {
  title?: string;
  infoStringList?: string[];
  overviewList?: {
    icon: string;
    overview: string;
  }[];
  groupIcons?: string[];
};

export const UserInfo = ({
  title,
  infoStringList,
  overviewList,
  groupIcons,
}: Props) => {
  return (
    <div className="bg-[#FCFCFE] p-6 rounded-2xl flex flex-col gap-4">
      {title && (
        <h5 className="font-semibold text-[14px] leading-4">{title}</h5>
      )}

      {infoStringList && (
        <div className="flex flex-col gap-2">
          {infoStringList?.map((el, index) => (
            <p className="font-semibold text-[14px] leading-4" key={index}>
              {el}
            </p>
          ))}
        </div>
      )}

      {overviewList && (
        <div className="flex flex-col gap-2">
          {overviewList.map((el, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image
                className="w-4 h-4"
                src={`/${el.icon}.svg`}
                alt={el.icon}
                priority={true}
                width={16}
                height={16}
              />
              <span className="font-semibold text-[14px] leading-4">
                {el.overview}
              </span>
            </div>
          ))}
        </div>
      )}

      {groupIcons && (
        <div className="flex gap-[14px]">
          {groupIcons.map((el, index) => (
            <Image
              key={index}
              className="w-4 h-4"
              src={`/${el}.svg`}
              alt={el}
              priority={true}
              width={16}
              height={16}
            />
          ))}
        </div>
      )}
    </div>
  );
};
