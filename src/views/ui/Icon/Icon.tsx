import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { IoLogoUsd } from 'react-icons/io';
import { TWallet } from '../../../data/types';

interface IImage {
  name: TWallet;
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

    default:
      return <IoLogoUsd className={className} />;
  }
}

export default Icon;
