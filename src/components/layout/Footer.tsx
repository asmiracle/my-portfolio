import * as React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

import { trackEvent } from '@/lib/analytics';
import useCopyToClipboard from '@/hooks/useCopyToClipboard';

import Accent from '@/components/Accent';
import Spotify from '@/components/layout/Spotify';
import UnstyledLink from '@/components/links/UnstyledLink';
import Tooltip from '@/components/Tooltip';

import { spotifyFlag } from '@/constants/env';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6 dark:border-gray-600'>
        {spotifyFlag && <Spotify className='mb-8' />}

        <p className='font-medium text-gray-600 dark:text-gray-300'>
          Reach me out
        </p>
        <SocialLinks />

        <p className='mt-8 text-sm text-gray-600 dark:text-gray-300'>
          © Abidullah Bin Junaid {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

function SocialLinks() {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='mt-2 flex space-x-4'>
      <div className='flex items-center justify-center'>
        <Tooltip
          trigger='mouseenter'
          hideOnClick={false}
          interactive
          html={
            <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
              {copyStatus === 'idle'
                ? 'Click the mail logo to copy'
                : 'Copied to clipboard 🥳'}
              <Accent className='inline-block font-medium'>
                abjwork26@gmail.com
              </Accent>
            </div>
          }
        >
          <button
            onClick={() => {
              copy('abjwork26@gmail.com').then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 1500);
              });
            }}
            className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          >
            <FiMail className='h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
          </button>
        </Tooltip>
      </div>
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <Tooltip
            interactive={false}
            key={social.href}
            tipChildren={social.text}
          >
            <UnstyledLink
              className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
              href={social.href}
              onClick={() => {
                trackEvent(`Footer Link: ${social.id}`, { type: 'link' });
              }}
            >
              <Icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
            </UnstyledLink>
          </Tooltip>
        );
      })}
    </div>
  );
}

type Social = {
  href: string;
  icon: IconType;
  id: string;
  text: React.ReactNode;
};
const socials: Social[] = [
  {
    href: 'https://www.linkedin.com/in/abidullah-bin-junaid/',
    icon: FaLinkedin,
    id: 'Linkedin',
    text: (
      <>
        Find me on <Accent className='font-medium'>Linkedin</Accent>
      </>
    ),
  },
];
