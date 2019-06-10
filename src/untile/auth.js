export function setLocalStorage(name, val) {
  localStorage.setItem(name, val);
}


export function getLocalStorages(name) {
  return localStorage.getItem(name);
}

export function getLocalStorage() {
  if (localStorage.getItem('token')) {
    return true;
  }
  return false;
}
