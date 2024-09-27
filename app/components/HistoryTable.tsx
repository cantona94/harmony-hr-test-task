import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tableData } from '@/app/constants';

export const HistoryTable = () => {
  return (
    <div className="my-6">
      <div className="flex items-center gap-2">
        <Image
          className="w-4 h-4"
          src={'/history.svg'}
          alt="history"
          priority={true}
          width={16}
          height={16}
        />
        <h2 className="font-medium text-sm text-[#204973]">History</h2>
      </div>
      <div className="flex md:flex-row flex-col justify-between my-4 gap-4 ">
        <div className="flex md:flex-row flex-col gap-4">
          <Select>
            <SelectTrigger className="w-full md:w-[256px] border-[#7C96B1] bg-[#FAFBFC]">
              <SelectValue placeholder="Sick" />
            </SelectTrigger>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-[96px] border-[#7C96B1] bg-[#FAFBFC]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
          </Select>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-full md:w-[176px] border-[#7C96B1] bg-[#FAFBFC]">
              <SelectValue placeholder="Balance History" />
            </SelectTrigger>
          </Select>
        </div>
      </div>
      <Table className="border-b-[2px] border-b-[#7C96B1]">
        <TableHeader className="bg-[#DAE6F2] h-[50px] font-medium text-[6px] sm:text-[10px] md:text-sm">
          <TableRow>
            <TableHead className="flex items-center">
              Date
              <Image
                className="w-4 h-4"
                src={'/sort.svg'}
                alt="sort"
                priority={true}
                width={16}
                height={16}
              />
            </TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Used Days (-)</TableHead>
            <TableHead>Earned Days (+)</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((el, index) => (
            <TableRow
              className={`h-8 font-medium text-[6px] sm:text-xs md:text-sm leading-4 border-b-[2px] border-b-[#7C96B1] ${
                index === 3 ? 'bg-[#DAE6F2]' : ''
              }`}
              key={index}
            >
              <TableCell>{el.date}</TableCell>
              <TableCell>{el.description}</TableCell>
              <TableCell>{el.usedDays}</TableCell>
              <TableCell>{el.earnedDays}</TableCell>
              <TableCell>{el.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
