import { RiDashboardFill, RiRefreshFill } from 'react-icons/ri';
import { FaChevronCircleDown, FaEthereum } from 'react-icons/fa';
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';
import { IoIosWallet, IoLogoUsd } from 'react-icons/io';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { SiHiveBlockchain } from 'react-icons/si';
import { HiChevronDown } from 'react-icons/hi';

import { TSymbol } from '../../../data/types';

export type TSidebarIcon = 'logo' | 'wallet' | 'dashboard';
type TConverterIcon = 'chevron' | 'bigChevron' | 'reload';
type TTrends = 'trendUp' | 'trendDown';

type TIcons = TSymbol | TTrends | TSidebarIcon | TConverterIcon;

interface IImage {
  name: TIcons;
  className?: string;
  onClick?: () => void;
}

function Icon({ name, className, onClick }: IImage) {
  switch (name) {
    case 'btc':
      return <BsCurrencyBitcoin className={className} onClick={onClick} />;

    case 'eth':
      return <FaEthereum className={className} onClick={onClick} />;

    case 'usd':
      return <IoLogoUsd className={className} onClick={onClick} />;

    case 'trendDown':
      return <BiTrendingDown className={className} onClick={onClick} />;

    case 'trendUp':
      return <BiTrendingUp className={className} onClick={onClick} />;

    case 'bigChevron':
      return <FaChevronCircleDown className={className} onClick={onClick} />;

    case 'reload':
      return <RiRefreshFill className={className} onClick={onClick} />;

    case 'chevron':
      return <HiChevronDown className={className} onClick={onClick} />;

    case 'logo':
      return <SiHiveBlockchain className={className} onClick={onClick} />;

    case 'wallet':
      return <IoIosWallet className={className} onClick={onClick} />;

    case 'dashboard':
      return <RiDashboardFill className={className} onClick={onClick} />;

    default:
      return <IoLogoUsd className={className} onClick={onClick} />;
  }
}

export default Icon;
