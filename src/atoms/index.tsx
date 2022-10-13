import { atom } from "recoil";

//atoms
export const bgColorState = atom<string>({
  key: 'bgColor',
  default: 'orange',
});

export const aswersState = atom<string[]>({
  key: 'aswers',
  default: [],
});

export const isAnswerCorret = atom<boolean | undefined>({
  key: 'isAnswerCorret',
  default: undefined,
});