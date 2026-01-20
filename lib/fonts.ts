/**
 * Font feature settings for the Emerald Lake Garden brand
 *
 * LETTERHEAD: Use only for "Emerald Lake Garden" text
 * - Includes ss08 which affects lowercase 'a' for a distinctive look
 *
 * HEADING: Use for all other headings and titles
 * - Excludes ss08 for better readability
 */

export const fontFeatures = {
  letterhead: {
    fontFeatureSettings:
      '"ss03", "ss08", "ss09", "ss10", "ss11", "ss13", "ss15"',
  },
  heading: {
    fontFeatureSettings: '"ss03", "ss09", "ss10", "ss11", "ss13", "ss15"',
  },
} as const;
