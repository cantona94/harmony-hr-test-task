import { navMenu } from '@/app/constants';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  className: string;
};

export const Nav = ({ className }: Props) => {
  return (
    <nav className={className}>
      <ul className="flex">
        {navMenu.map((el, index) => (
          <li
            className={`p-4 text-sm hover:cursor-pointer ${
              index === 2 ? 'bg-[#FCFCFE]' : ''
            }`}
            key={index}
          >
            {el}
          </li>
        ))}
      </ul>
      <Select>
        <SelectTrigger className="w-[90px] text-sm bg-[#DAE6F2]">
          <SelectValue placeholder="More" />
        </SelectTrigger>
      </Select>
    </nav>
  );
};
