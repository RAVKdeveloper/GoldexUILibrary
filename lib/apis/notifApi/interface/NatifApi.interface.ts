import { ReactNode } from 'react';
import { NatifApiProps } from '../assets/props.interface';

export interface NatifApiType {
  checkAndReturnUi: (obj: NatifApiProps) => void;
  success: (message: ReactNode) => void;
  error(message: ReactNode): void;
  warning(message: ReactNode): void;
  info(message: ReactNode): void;
}
