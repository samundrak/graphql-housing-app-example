import { render } from 'react-dom';
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
export const snapshot = component => {
  const Component = component();
  it(`Snapshot testing of ${Component.type.displayName}`, () => {
    console.log(Component);
    const container = render(Component, document.createElement('div'));
    expect(container).toMatchSnapshot();
  });
};
