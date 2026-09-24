import clsx from 'clsx';
import * as React from 'react';

import { Skill } from '@/constants/skills';

type SkillBadgeProps = {
  skill: Skill;
} & React.ComponentPropsWithoutRef<'li'>;

export default function SkillBadge({
  skill,
  className,
  ...rest
}: SkillBadgeProps) {
  return (
    <li
      className={clsx(
        'inline-flex items-center gap-2 rounded-md px-3 py-1.5',
        'border border-gray-300 dark:border-gray-600',
        'bg-white dark:bg-dark',
        'text-sm font-medium text-gray-700 dark:text-gray-200 md:text-base',
        'transition-colors hover:border-primary-300 dark:hover:border-primary-300',
        className
      )}
      {...rest}
    >
      {skill.icon && <skill.icon className='shrink-0 text-lg' />}
      <span>{skill.name}</span>
    </li>
  );
}
