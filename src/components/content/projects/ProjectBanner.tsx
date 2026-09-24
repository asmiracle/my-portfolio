import clsx from 'clsx';
import * as React from 'react';

import CloudinaryImg from '@/components/images/CloudinaryImg';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';

type ProjectBannerProps = {
  project: Pick<ProjectFrontmatter, 'title' | 'banner' | 'techs' | 'category'>;
  className?: string;
  preview?: boolean;
};

/**
 * Shows the Cloudinary banner when the project has one,
 * otherwise renders a generated banner with the title and tech icons.
 */
export default function ProjectBanner({
  project,
  className,
  preview,
}: ProjectBannerProps) {
  if (project.banner) {
    return (
      <CloudinaryImg
        className={className}
        publicId={`theodorusclarence/${project.banner}`}
        alt={project.title}
        width={1440}
        height={792}
        preview={preview}
      />
    );
  }

  return (
    <div
      className={clsx(
        'relative flex aspect-[1440/792] w-full flex-col items-center justify-center overflow-hidden rounded-md p-4 text-center',
        'bg-gradient-to-tr from-primary-200/40 via-primary-300/30 to-primary-400/40',
        'dark:from-primary-300/20 dark:via-dark dark:to-primary-400/20',
        'border border-gray-200 dark:border-gray-700',
        className
      )}
    >
      <p className='text-lg font-bold text-gray-800 dark:text-white md:text-2xl'>
        {project.title}
      </p>
      {project.category && (
        <p className='mt-1 text-xs text-gray-600 dark:text-gray-300 md:text-sm'>
          {project.category}
        </p>
      )}
      <TechIcons
        className='mt-3 justify-center'
        techs={project.techs.split(',') as Array<TechListType>}
      />
    </div>
  );
}
