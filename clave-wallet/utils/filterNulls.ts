export function filterNulls<T>(param: Array<T | null | undefined>): Array<T> {
  const arr: Array<T> = [];
  for (const i of param) {
    if (i != null) {
      arr.push(i);
    }
  }
  return arr;
}
