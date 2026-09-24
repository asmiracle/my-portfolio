import clsx from 'clsx';
import * as React from 'react';

import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SkillBadge from '@/components/SkillBadge';

import { skillCategories } from '@/constants/skills';

export default function SkillsPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='Skills'
        description='Languages, frameworks, tools, and practices I use to build Android and full-stack applications.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout py-12'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              <Accent>Skills</Accent>
            </h1>
            <p data-fade='1' className='mt-2 text-gray-600 dark:text-gray-300'>
              Languages, frameworks, tools, and practices I work with.
            </p>

            <div data-fade='2' className='mt-8 space-y-8'>
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h2 className='text-xl md:text-2xl'>{category.title}</h2>
                  <ul className='mt-3 flex flex-wrap gap-2'>
                    {category.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
