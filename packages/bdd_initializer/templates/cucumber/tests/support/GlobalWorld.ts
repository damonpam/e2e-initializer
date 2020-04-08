// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
interface GlobalWorld extends NodeJS.Global {
  foo: string;
}

export const globalWorld: GlobalWorld = {
  foo: 'bar',
  ...global
};
