import type { HeaderUserInfoProps } from '../HeaderUserInfo';
import type { LogoSize, LogoType } from '../Logo';

export interface HeaderProps extends HeaderUserInfoProps {
  logoSize?: LogoSize;
  logoType?: LogoType;
  fullWidth?: boolean;
}
