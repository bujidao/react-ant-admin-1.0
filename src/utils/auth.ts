import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';

export function getToken(): string {
  return Cookies.get(TokenKey);
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token, {
    expires: 1 / 48,
  });
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
