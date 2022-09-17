/**
 * simplifies <Type> by remapping its properties into a new type.
 */
export type Remap<Type> = {
  [Property in keyof Type]: Type[Property];
};

/**
 * Creates a fixed <Length> tuple of <Type>.
 * <Accumulator> is used to create the tuple recursively.
 */
export type Tuple<
  Length extends number,
  T = unknown,
  Accumulator extends T[] = []
> = Accumulator['length'] extends Length
  ? Accumulator
  : Tuple<Length, T, [...Accumulator, T]>;
