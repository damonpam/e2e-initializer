interface Global extends NodeJS.Global {
  foo: string[];
}

export const globalWorld: Global = {
  foo: ['hello', 'world'],
  ...global
};
