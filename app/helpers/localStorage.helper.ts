export function getTokenFromLocalStorage(key: string): string {
  const data = localStorage.getItem(key);
  const token: string = data ? JSON.parse(data) : '';
  return token;
}

export function setTokenToLocalStorage(key: string, token: string): void {
  localStorage.setItem(key, JSON.stringify(token));
}

export function removeTokenfromLocalStorage(key: string): void {
  localStorage.removeItem(key);
}
