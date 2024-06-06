import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  console.log(clsx(inputs[0], inputs[1]));
  return twMerge(clsx(inputs));
}
