export type TDate = Date | number | string;

export type TLoadingTargets =
  | 'fullscreen'
  | (typeof constants.shared.SELECTORS)[keyof typeof constants.shared.SELECTORS];

export type TObjectBoolean = Record<string, boolean>;
export type TObjectString = Record<string, string>;
export type TObjectUnknown = Record<string, unknown>;

export type TOptions<V = boolean | number | string | TObjectUnknown> = {
  id?: number | string;
  label: string;
  value: V;
};
