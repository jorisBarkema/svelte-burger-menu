/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte';

export interface ComponentProps {
  /**
   * @default false
   */
  open?: boolean;

  /**
   * @default 0.4
   */
  duration?: number;

  /**
   * @default '300px'
   */
  width?: string;

  /**
   * @default '25px'
   */
  padding?: string;

  /**
   * @default '50px'
   */
  paddingTop?: string;

  /**
   * @default 'rgb(1, 0, 74)'
   */
  backgroundColor?: string;

  /**
   * @default 'rgb(18.4, 18.4, 18.4)'
   */
  burgerColor?: string;

  /**
   * @default 'rgb(180, 180, 180)'
   */
  menuColor?: string;
}

export default class Component extends SvelteComponentTyped<
  ComponentProps,
  {},
  { default: {} }
> {}