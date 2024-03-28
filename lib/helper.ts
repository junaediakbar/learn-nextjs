export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export function getFromLocalStorage(key: string) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  }
  return null;
}
