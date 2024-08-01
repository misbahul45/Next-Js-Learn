import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import React from 'react';

interface FooterItemsProps {
  title: string;
  links: string[];
}

const FooterItems = ({ title, links }: FooterItemsProps) => {
  return (
    <div>
      <h1 className='text-lg text-center font-bold mb-2'>{title}</h1>
      {links.map((link) => (
        <p key={link} className='text-slate-600'>{link}</p>
      ))}
    </div>
  );
};

interface ContactFooterProps {
  title: string;
  links:{
    label:string
    value:string
  }[]
}

const ContactFooter = ({ title, links }: ContactFooterProps) => {
  return(
    <div>
      <h1 className='text-lg font-bold mb-2'>{title}</h1>
      {links.map((link) => (
        <p key={link.label} className='text-slate-600'>{link.label}: <span className='font-semibold'>{link.value}</span></p>
      ))}
    </div>
  )
}


interface FooterSocialProps {
  title: string;
  link: string[];
}

const  FooterSocial= ({ title, link }: FooterSocialProps) => {
  return (
    <div>
      <h1 className='text-lg text-center font-bold mb-2'>{title}</h1>
      <div className="flex gap-3">
        {link.map((link, index) => (
          <Image src={link} alt={title} key={index} width={20} height={20} />
        ))}
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="w-full max-w-xl flex flex-col gap-6 py-4 mx-auto pb-16">
      <h1 className="text-3xl font-extrabold text-center text-cyan-600">Climbing</h1>
      <p className="text-slate-500">Copyright © 2024. All rights reserved.</p>
      <div className="flex lg:flex-row justify-between">
        {FOOTER_LINKS.map((link) => (
          <FooterItems title={link.title} links={link.links} key={link.title} />
        ))}
      </div>
      <div className="flex justify-between">
        <ContactFooter title={FOOTER_CONTACT_INFO.title} links={FOOTER_CONTACT_INFO.links} />
        <FooterSocial title={SOCIALS.title} link={SOCIALS.links} />
      </div>
    </footer>
  );
};

export default Footer;
