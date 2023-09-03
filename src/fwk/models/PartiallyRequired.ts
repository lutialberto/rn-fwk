/**
 * PartiallyRequired<T, K> makes the properties of T that are in the union K required, and the rest optional.
 * @param T The type to make partially required.
 * @param K The keys of T that should be required.
 * @returns A type that makes the properties of T that are in the union K required, and the rest optional.
 * @example
 * interface Person {
 * name?: string;
 * age?: number;
 * }
 * type PartiallyRequiredPerson = PartiallyRequired<Person, 'name'>;
 * // PartiallyRequiredPerson is equivalent to:
 * // {
 * //  name: string;
 * //  age?: number;
 * // }
 */
export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;