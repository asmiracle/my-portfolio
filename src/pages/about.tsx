import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import SkillBadge from '@/components/SkillBadge';

import { certifications } from '@/constants/certifications';
import { publications } from '@/constants/publications';
import { featuredSkills } from '@/constants/skills';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Abidullah Bin Junaid is a Senior Android Engineer at Meta with experience building Android and full-stack applications at FedEx, Cigna, H-E-B, Marriott, AT&T, Samsung, and Verizon.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Abidullah Bin Junaid</Accent>
            </h1>
            <p
              className='mt-1 text-gray-600 dark:text-gray-300'
              data-fade='1'
            >
              Sugar Land, Texas
            </p>
            <div className='mt-4' data-fade='2'>
              <article className='prose max-w-3xl dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Abidullah, a Senior Android Engineer at{' '}
                  <CustomLink href='https://www.meta.com/about/'>Meta</CustomLink>
                  . I build native Android apps in Kotlin and Java, and
                  full-stack applications with React, Next.js, Python, and Java
                  Spring Boot. Before Meta, I built apps at FedEx, Cigna, H-E-B,
                  Marriott, AT&T, Samsung, and Verizon.
                </p>
                <p data-fade='4'>
                  I have taken apps through the full Software Development Life
                  Cycle: design, test-driven development, debugging, and
                  publishing and maintaining releases on Google Play. I care
                  about clean architecture (MVVM, MVP, MVC), performance,
                  threading, and modularization, and I enjoy working with
                  product, design, and QA to ship great experiences.
                </p>
                <p data-fade='5'>
                  I hold an MS in Computer Science from Kent State University
                  and an MBA from the University of the Cumberlands, and I have
                  a published IEEE paper on recommender systems.
                </p>
              </article>

              <h3 className='h4 mt-8' data-fade='6'>
                What I'm up to?
              </h3>
              <article className='prose mt-2 dark:prose-invert' data-fade='7'>
                <ul>
                  <li>
                    I'm a Senior Android Engineer at{' '}
                    <CustomLink
                      onClick={() => trackEvent('Now: Meta', { type: 'link' })}
                      href='https://www.meta.com/about/'
                    >
                      Meta
                    </CustomLink>
                    , optimizing Android codebases at Meta scale
                  </li>
                  <li>
                    Writing large-scale code mods with Buck and Meta's internal
                    tooling
                  </li>
                  <li>
                    Writing Java, Kotlin, and Jetpack Compose code, with unit
                    and UI tests in JUnit, Robolectric, and Espresso
                  </li>
                </ul>
              </article>

              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <ul className='mt-3 flex flex-wrap gap-2' data-fade='9'>
                {featuredSkills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </ul>
              <ButtonLink className='mt-4' href='/skills'>
                See all skills
              </ButtonLink>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Experience</h2>
            <ol className='mt-6 space-y-6 border-l-2 border-gray-200 pl-6 dark:border-gray-700'>
              {experiences.map((exp) => (
                <li key={`${exp.company}-${exp.period}`} className='relative'>
                  <span
                    className={clsx(
                      'absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full',
                      'bg-primary-300 ring-4 ring-white dark:ring-dark'
                    )}
                  />
                  <h3 className='text-lg md:text-xl'>
                    {exp.role} · <Accent>{exp.company}</Accent>
                  </h3>
                  <p className='mt-1 text-sm text-gray-600 dark:text-gray-300'>
                    {exp.period} · {exp.location}
                  </p>
                  <ul className='mt-2 list-disc space-y-1 pl-5 text-gray-700 dark:text-gray-200'>
                    {exp.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Education</h2>
            <ul className='mt-6 space-y-4'>
              {education.map((edu) => (
                <li key={edu.degree}>
                  <h3 className='text-lg md:text-xl'>{edu.degree}</h3>
                  <p className='mt-1 text-gray-700 dark:text-gray-200'>
                    {edu.school}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    {[edu.date, edu.gpa].filter(Boolean).join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Publication</h2>
            <article className='prose mt-4 dark:prose-invert'>
              {publications.map((pub) => (
                <p key={pub.href}>
                  {pub.authors} ({pub.year}).{' '}
                  <CustomLink href={pub.href}>{pub.title}</CustomLink>.
                  Published in {pub.venue}.
                </p>
              ))}
            </article>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Training &amp; Certifications</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.title}>
                    {cert.title} — {cert.issuer}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Activities</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <ul>
                <li>
                  Head Student Coordinator, NERDZ 2014, Jamia Hamdard University
                </li>
                <li>
                  Volunteer, NERDZ 2011, the annual IT fest of Jamia Hamdard
                  University
                </li>
                <li>
                  Runner-up in table tennis, MOSAIC annual sports festival, Jamia
                  Hamdard University
                </li>
                <li>
                  Winner, football tournament at HAM D'HIVER 2014, Jamia Hamdard
                  University
                </li>
                <li>Winner, zonal-level table tennis in school</li>
              </ul>
            </article>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Feel free to reach out about Android or full-stack engineering
                work. You can email me at{' '}
                <CustomLink href='mailto:abjwork26@gmail.com'>
                  abjwork26@gmail.com
                </CustomLink>{' '}
                or connect with me on{' '}
                <CustomLink
                  onClick={() =>
                    trackEvent('About: LinkedIn', { type: 'link' })
                  }
                  href='https://www.linkedin.com/in/abidullah-bin-junaid/'
                >
                  LinkedIn
                </CustomLink>
                .
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}

const experiences = [
  {
    company: 'Meta',
    role: 'Sr. Android Engineer',
    location: 'Texas',
    period: 'Sep 2024 – Present',
    highlights: [
      'Modify and optimize Android codebases for Meta apps for performance, scalability, and maintainability',
      'Build code mods with Buck, JStype, and other Meta tools to automate large-scale refactoring',
      'Define and optimize database structures with SQLite, Room, and Meta’s internal storage',
      'Test with JUnit, Robolectric, AndroidX Test, and Espresso in CI, and troubleshoot with Scuba and Scribe',
    ],
  },
  {
    company: 'FedEx',
    role: 'Sr. Android Developer / Full Stack',
    location: 'Texas',
    period: 'Mar 2023 – Sep 2024',
    highlights: [
      'Native Android development in Kotlin and Java, with Jetpack Compose, Shared Flows, and RxJava',
      'Java Spring Boot backend services with Maven, and a J2EE application',
      'Full-stack applications with React, Next.js, and Python',
      'Deployments with Jenkins, and API testing with Postman and Insomnia',
    ],
  },
  {
    company: 'Cigna',
    role: 'Software Engineering Senior Advisor',
    location: 'Texas',
    period: 'Oct 2022 – Mar 2023',
    highlights: [
      'Native Android development in Kotlin and Java with MVVM, MVP, and Jetpack Compose',
      'Integrated the Okta library for authentication',
      'Advised management on engineering matters and wrote technology standards reports and training guides',
    ],
  },
  {
    company: 'H-E-B',
    role: 'Sr. Android Engineer',
    location: 'Texas',
    period: 'Jul 2022 – Oct 2022',
    highlights: [
      'Kotlin with MVVM, Shared Flows, the Navigation component, and coroutines',
      'GraphQL APIs called through repositories',
      'Frontend interfaces and backend services with React, Next.js, and Python',
    ],
  },
  {
    company: 'Marriott',
    role: 'Sr. Android Engineer',
    location: 'Florida',
    period: 'Jul 2021 – Jul 2022',
    highlights: [
      'Customer-facing mobile apps in Java and Kotlin with MVVM, data binding, and dependency injection',
      'In-app messaging, push notifications, and biometric authentication',
      'Agile with Test Driven Development',
    ],
  },
  {
    company: 'AT&T',
    role: 'Android Developer',
    location: 'Dallas, Texas',
    period: 'Nov 2020 – Jul 2021',
    highlights: [
      'Built the AT&T-powered ZenKey app in Kotlin with MVVM and data binding',
      'REST and JSON integration with Retrofit, working closely with the backend team',
    ],
  },
  {
    company: 'Samsung',
    role: 'Android Developer',
    location: 'Berkeley Heights, New Jersey',
    period: 'Apr 2020 – Oct 2020',
    highlights: [
      'Android apps for Samsung phones, including the IMS and Advanced Calling modules',
      'Android TV features with the Leanback library',
      'Unit tests with JUnit, Mockito, and PowerMock, and code review with Gerrit',
    ],
  },
  {
    company: 'Verizon',
    role: 'Android Developer / Java Developer',
    location: 'Tampa, Florida',
    period: 'May 2018 – Apr 2020',
    highlights: [
      'Android app for Verizon technicians, with location and Google Maps',
      'Java Spring Boot microservices, and React.js for the Omega application front end',
      'REST and SOAP services backed by an Oracle database',
    ],
  },
  {
    company: 'HeavenCrafts',
    role: 'Android Developer (Freelance)',
    location: 'Sunnyvale, California',
    period: 'Jan 2017 – Apr 2018',
    highlights: [
      'Android apps for multiple clients using MVC, RESTful APIs, and Location Manager',
      'Custom UI layouts and widgets, built with TDD',
    ],
  },
  {
    company: 'Kent State University',
    role: 'Teaching Assistant',
    location: 'Kent, Ohio',
    period: 'Jan 2016 – Dec 2016',
    highlights: ['Taught algorithms and programming using Python'],
  },
  {
    company: 'SwiftDeal Online',
    role: 'Android Developer / Python Developer',
    location: 'New Delhi, India',
    period: 'Jul 2014 – May 2015',
    highlights: [
      'Retail and mobile media Android apps with extensive UI development',
      'REST APIs in Python and PostgreSQL, interfacing with OpenStack',
    ],
  },
];

const education = [
  {
    degree: 'Master of Business Administration',
    school: 'University of the Cumberlands, Kentucky',
    date: 'December 2021',
    gpa: 'GPA 3.8',
  },
  {
    degree: 'Master of Science in Computer Science',
    school: 'Kent State University, Kent, Ohio',
    date: 'December 2016',
    gpa: 'GPA 3.6',
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    school: 'Faculty of Management and Information Technology, Jamia Hamdard',
    date: '',
    gpa: 'GPA 7.2',
  },
];
