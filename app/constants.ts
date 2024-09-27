import { ITableColumns, ITimeOffBlogData } from '@/app/types';

export const headerMenu: string[] = [
  'Home',
  'My Info',
  'People',
  'Hiring',
  'Reports',
  'Files',
];

export const navMenu: string[] = [
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

export const tableData: ITableColumns[] = [
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '',
    earnedDays: '3.00',
    balance: '3.00',
  },
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '-6',
    earnedDays: '',
    balance: '3.00',
  },
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '',
    earnedDays: '3.00',
    balance: '3.00',
  },
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '',
    earnedDays: '3.00',
    balance: '3.00',
  },
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '-6',
    earnedDays: '',
    balance: '3.00',
  },
  {
    date: '23/05/2024',
    description: 'Accrual for 23/05/2024 to 20/11/2024',
    usedDays: '',
    earnedDays: '3.00',
    balance: '3.00',
  },
];

export const timeOffBlogData: ITimeOffBlogData[] = [
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
