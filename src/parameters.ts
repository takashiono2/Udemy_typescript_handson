export {};

const debugProfile = (name: string, age: number) => {
  console.log({name, age});
}

debugProfile('Ham', 43);

type Prpfile = Parameters<typeof debugProfile>

const profile:Prpfile = ['Groria', 76];

debugProfile(...profile);

type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
? P
: never;
