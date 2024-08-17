import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const $ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelector<T>(selector)

export const $$ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelectorAll<T>(selector)
