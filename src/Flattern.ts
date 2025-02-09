type Flatten<T extends unknown[], A extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends any[]
    ? Flatten<[...F, ...Rest], [...A]>
    : Flatten<Rest, [...A, F]>
  : A;

/* _____________ テストケース _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<
    Equal<
      Flatten<[{ foo: "bar"; 2: 10 }, "foobar"]>,
      [{ foo: "bar"; 2: 10 }, "foobar"]
    >
  >
];
