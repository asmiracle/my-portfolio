import * as React from 'react';
import { FaDiscord, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
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
  return (
    <div className='mt-2 flex space-x-4'>
      <CopyContact
        id='Email'
        icon={FiMail}
        iconClassName='h-7 w-7'
        value='abjwork26@gmail.com'
        idleText='Click the mail logo to copy'
      />
      <CopyContact
        id='Discord'
        icon={FaDiscord}
        value='whimsical_star_40838'
        idleText='Click to copy my Discord username and open Discord'
        openUrl='https://discord.com/channels/@me'
      />
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

type CopyContactProps = {
  id: string;
  icon: IconType;
  value: string;
  idleText: string;
  iconClassName?: string;
  /** Opened in a new tab after copying, e.g. where to paste the value */
  openUrl?: string;
};

function CopyContact({
  id,
  icon: Icon,
  value,
  idleText,
  iconClassName = 'h-6 w-6',
  openUrl,
}: CopyContactProps) {
  const [copyStatus, setCopyStatus] = React.useState<'idle' | 'copied'>('idle');

  const [copy] = useCopyToClipboard();

  return (
    <div className='flex items-center justify-center'>
      <Tooltip
        trigger='mouseenter'
        hideOnClick={false}
        interactive
        html={
          <div className='inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200'>
            {copyStatus === 'idle' ? idleText : 'Copied to clipboard 🥳'}
            <Accent className='block font-medium'>{value}</Accent>
          </div>
        }
      >
        <button
          aria-label={`Copy ${id}: ${value}`}
          onClick={() => {
            trackEvent(`Footer Link: ${id}`, { type: 'link' });
            // Open synchronously so popup blockers allow it
            if (openUrl) window.open(openUrl, '_blank', 'noopener,noreferrer');
            copy(value).then(() => {
              setCopyStatus('copied');
              setTimeout(() => setCopyStatus('idle'), 1500);
            });
          }}
          className='rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        >
          <Icon
            className={`${iconClassName} align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300`}
          />
        </button>
      </Tooltip>
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
  {
    href: 'https://t.me/FodenFC',
    icon: FaTelegram,
    id: 'Telegram',
    text: (
      <>
        Message me on <Accent className='font-medium'>Telegram</Accent>{' '}
        (@FodenFC)
      </>
    ),
  },
];
