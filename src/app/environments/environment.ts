

export const environment = {
  
  production: false,
  url: 'https://gr09yevej5.execute-api.us-east-2.amazonaws.com/report/api/v1/',
  auth: {
    redirectUri: window.location.origin + '/inventory' // ← Aquí defines la ruta
  },
  paginationVar:10
};


