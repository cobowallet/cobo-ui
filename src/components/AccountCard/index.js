/**
 * All account card
 * type: Spending, Financing, Financing_Disabled
 */
const BLUE_GRADIENT = ['#6E93E9', '#014AF3'];
const PURPLE_GRADIENT = ['#014AF3', '#7E02E0'];

export { default as ActiveAccountCard } from './ActiveAccountCard';
export { default as InactiveAccountCard } from './InactiveAccountCard';
export const GradientPreset = {
  blue: BLUE_GRADIENT,
  purple: PURPLE_GRADIENT,
};
