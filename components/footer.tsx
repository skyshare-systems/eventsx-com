import { NavigationItem } from '@/types';
import React from 'react';

interface FooterProps {
  items: NavigationItem[];
}

const Footer: React.FC<FooterProps> = () => {
  return <div className='container text-center text-3xl '>FOOOTER HERE</div>;
};

export default Footer;
