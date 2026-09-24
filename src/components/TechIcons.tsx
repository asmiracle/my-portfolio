import clsx from 'clsx';
import * as React from 'react';
import { FaJava } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiAndroid,
  SiFirebase,
  SiGit,
  SiGoogleanalytics,
  SiGooglemaps,
  SiGraphql,
  SiJavascript,
  SiJenkins,
  SiJetpackcompose,
  SiJson,
  SiKotlin,
  SiMarkdown,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiOkta,
  SiPrettier,
  SiPython,
  SiReact,
  SiReactivex,
  SiRedux,
  SiSass,
  SiSpringboot,
  SiSqlite,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechIcons({ className, techs }: TechIconsProps) {
  return (
    <ul className={clsx(className, 'flex gap-2')}>
      {techs.map((tech) => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltip key={current.name} tipChildren={<p>{current.name}</p>}>
            <li className='text-xl text-gray-700 dark:text-gray-200'>
              <current.icon />
            </li>
          </Tooltip>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next.js',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  scss: {
    icon: SiSass,
    name: 'SCSS',
  },
  javascript: {
    icon: SiJavascript,
    name: 'JavaScript',
  },
  typescript: {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node.js',
  },
  firebase: {
    icon: SiFirebase,
    name: 'Firebase',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  redux: {
    icon: SiRedux,
    name: 'Redux',
  },
  mdx: {
    icon: SiMarkdown,
    name: 'MDX',
  },
  prettier: {
    icon: SiPrettier,
    name: 'Prettier',
  },
  analytics: {
    icon: SiGoogleanalytics,
    name: 'Google Analytics',
  },
  git: {
    icon: SiGit,
    name: 'Git',
  },
  notion: {
    icon: SiNotion,
    name: 'Notion API',
  },
  swift: {
    icon: SiSwift,
    name: 'Swift',
  },
  kotlin: {
    icon: SiKotlin,
    name: 'Kotlin',
  },
  java: {
    icon: FaJava,
    name: 'Java',
  },
  android: {
    icon: SiAndroid,
    name: 'Android',
  },
  compose: {
    icon: SiJetpackcompose,
    name: 'Jetpack Compose',
  },
  python: {
    icon: SiPython,
    name: 'Python',
  },
  springboot: {
    icon: SiSpringboot,
    name: 'Spring Boot',
  },
  graphql: {
    icon: SiGraphql,
    name: 'GraphQL',
  },
  rxjava: {
    icon: SiReactivex,
    name: 'RxJava',
  },
  sqlite: {
    icon: SiSqlite,
    name: 'SQLite',
  },
  json: {
    icon: SiJson,
    name: 'JSON',
  },
  googlemaps: {
    icon: SiGooglemaps,
    name: 'Google Maps API',
  },
  okta: {
    icon: SiOkta,
    name: 'Okta',
  },
  jenkins: {
    icon: SiJenkins,
    name: 'Jenkins',
  },
};
