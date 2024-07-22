import { IconType } from "react-icons";
import {
  BiLockAlt,
  BiAt,
  BiCheese,
  BiCreditCard,
  BiDollar,
  BiEuro,
  BiLogoReddit,
  BiSolidMessageAltError,
  BiCheck,
} from "react-icons/bi";

export const iconOptions = [
  "lock",
  "at",
  "cheese",
  "card",
  "dollar",
  "euro",
  "reddit",
  "error",
  "check",
] as const;

export type IconOption = (typeof iconOptions)[number];

export const fetchIcon = (name: IconOption | undefined): IconType | null => {
  if (!name) return null;

  const icons: { [key in IconOption]: IconType } = {
    lock: BiLockAlt,
    at: BiAt,
    cheese: BiCheese,
    card: BiCreditCard,
    dollar: BiDollar,
    euro: BiEuro,
    reddit: BiLogoReddit,
    error: BiSolidMessageAltError,
    check: BiCheck,
  };

  return icons[name as IconOption] || null;
};
