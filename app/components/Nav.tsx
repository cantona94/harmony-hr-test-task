import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  className: string;
};

const menu: string[] = [
  'Personal',
  'Job',
  'Time Off',
  'Emergency',
  'Documents',
  'Notes',
  'Benefits',
  'Training',
  'Assets',
];

export const Nav = ({ className }: Props) => {
  return (
    <div className={className}>
      {menu.map((el, index) => (
        <button
          className={`p-4 text-sm ${index === 2 ? 'bg-[#FCFCFE]' : ''}`}
          key={index}
        >
          {el}
        </button>
      ))}
      <Select>
        <SelectTrigger className="w-[90px] text-sm bg-[#DAE6F2]">
          <SelectValue placeholder="More" />
        </SelectTrigger>
      </Select>
    </div>
  );
};
