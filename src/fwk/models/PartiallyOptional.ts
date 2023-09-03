/**
 * PartiallyOptional<T, K> is a type that makes the properties of T optional, except for the ones in K.
 * @param T The type to make partially optional.
 * @param K The keys of T that should not be optional.
 * @returns A type that makes the properties of T optional, except for the ones in K.
 * @example
 * interface Person {
 *  name: string;
 * age: number;
 * }
 * type PartiallyOptionalPerson = PartiallyOptional<Person, 'name'>;
 * // PartiallyOptionalPerson is equivalent to:
 * // {
 * //  name?: string;
 * //  age: number;
 * // }
 */
export type PartiallyOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;