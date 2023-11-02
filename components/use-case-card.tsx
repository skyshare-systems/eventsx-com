import { cn } from '@/lib/utils';
import { titilium } from '@/public/fonts';
import { UseCaseCardContent } from '@/types';
import React from 'react';
import { Icons } from './icons';

interface UseCaseCardProps {
  usecase: UseCaseCardContent;
}
const UseCaseCard: React.FC<UseCaseCardProps> = ({ usecase }) => {
  const Icon = Icons[usecase.icon || 'usecaseItem1'];

  return (
    <div className={cn('p-4 flex flex-col gap-[0.81rem]', usecase.className)}>
      <Icon width={96} height={97} />
      <h3 className={cn(titilium.className, 'leading-5 font-semibold')}>{usecase.title}</h3>
      <p className='leading-5'>{usecase.description}</p>
    </div>
  );
};

export default UseCaseCard;
