import { atom } from 'recoil';

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

export const correctScore = atom<number>({
  key: 'correctScore',
  default: 0,
});

export const wrongScore = atom<number>({
  key: 'wrongScore',
  default: 0,
});
