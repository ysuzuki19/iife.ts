type Fn<T> = () => T;

export default function iife<T>(fn: Fn<T>) {
  return fn();
}
