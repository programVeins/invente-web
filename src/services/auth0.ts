import createAuth0Client from '@auth0/auth0-spa-js';

// const domain = import.meta.env.VITE_AUTH0_DOMAIN;
// const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// export const login = async () => {
//   const auth0 = await createAuth0Client({
//     domain: domain || '',
//     client_id: clientId || '',
//   });

//   await auth0.loginWithRedirect({
//     redirect_uri: window.location.origin,
//   });
// };

// export const logout = async () => {
//   const auth0 = await createAuth0Client({
//     domain: domain || '',
//     client_id: clientId || '',
//   });

//   await auth0.logout({
//     returnTo: window.location.origin,
//   });
// };

export const testAuth = () => {
  console.log(import.meta.env.VITE_AUTH0_DOMAIN);
};
