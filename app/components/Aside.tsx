import { UserInfo } from '@/app/components/UserInfo';
import React from 'react';

type Props = {
  className: string;
};

export const Aside = ({ className }: Props) => {
  return (
    <div className={className}>
      <UserInfo
        overviewList={[
          { icon: 'phone', overview: '07911 654321' },
          { icon: 'email', overview: 'avd.yana@video' },
        ]}
        groupIcons={['linkedIn', 'facebook', 'twitter']}
      />
      <UserInfo
        title="Hire Date"
        infoStringList={['Sep. 3,2020', '3y - 9m - 20d']}
      />
      <UserInfo
        overviewList={[
          { icon: 'sharp', overview: '5' },
          { icon: 'time', overview: 'Full-Time' },
          { icon: 'people', overview: 'Operations' },
          { icon: 'world', overview: 'Europe' },
          { icon: 'geopositioning', overview: 'London, UK' },
        ]}
      />
      <UserInfo
        title="Direct Reports"
        overviewList={[
          { icon: 'user', overview: 'Shane' },
          { icon: 'user', overview: 'Nathan' },
          { icon: 'user', overview: 'Mitchell' },
          { icon: 'user', overview: 'Philip' },
          { icon: 'people', overview: '4 More...' },
        ]}
      />
    </div>
  );
};
