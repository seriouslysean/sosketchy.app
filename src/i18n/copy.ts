import en from './en.json';

type CopyValue = string | number | undefined;

export const copy = en;

export const formatCopy = (
  template: string,
  values: Record<string, CopyValue> = {},
): string =>
  template.replace(/\{([a-zA-Z0-9_]+)\}/g, (match, key) => {
    const value = values[key];
    return value === undefined ? match : String(value);
  });
