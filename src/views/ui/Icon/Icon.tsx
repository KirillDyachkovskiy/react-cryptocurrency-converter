import { FaChevronCircleDown, FaEthereum } from 'react-icons/fa';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
import { IoIosWallet, IoLogoUsd } from 'react-icons/io';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { SiHiveBlockchain } from 'react-icons/si';
import { RiDashboardFill } from 'react-icons/ri';
import { HiChevronDown } from 'react-icons/hi';

import { TWallet } from '../../../data/types';

export type TSidebarIcon = 'logo' | 'wallet' | 'dashboard';
type TConverterIcon = 'chevron' | 'bigChevron';
type TTrends = 'trendUp' | 'trendDown';

type TIcons = TWallet | TTrends | TSidebarIcon | TConverterIcon;

interface IImage {
  name: TIcons;
  className?: string;
}

function Icon({ name, className }: IImage) {
  switch (name) {
    case 'bitcoin':
      return <BsCurrencyBitcoin className={className} />;

    case 'ethereum':
      return <FaEthereum className={className} />;

    case 'usd':
      return <IoLogoUsd className={className} />;

    case 'trendDown':
      return <BiTrendingDown className={className} />;

    case 'trendUp':
      return <BiTrendingUp className={className} />;

    case 'bigChevron':
      return <FaChevronCircleDown className={className} />;

    case 'chevron':
      return <HiChevronDown className={className} />;

    case 'logo':
      return <SiHiveBlockchain className={className} />;

    case 'wallet':
      return <IoIosWallet className={className} />;

    case 'dashboard':
      return <RiDashboardFill className={className} />;

    default:
      return <IoLogoUsd className={className} />;
  }
}

export default Icon;
