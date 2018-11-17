export function getAssetUri() {
  const HOST = process.env.REACT_APP_BACKEND_HOST;
  return {
    images() {
      return `${HOST}/images/`;
    },
  };
}
export function loadImageFromCDN(uri) {
  return `${getAssetUri().images()}/${uri}`;
}
