const baseUrl = 'https://staging.pelocal.com/api/v2';
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0OTMsInVzZXJuYW1lIjoiNjM5NTMyMjUwNSIsImV4cCI6MTY2MjUyOTYyMCwicGhvbmVfbnVtYmVyIjoiNjM5NTMyMjUwNSJ9.R23_7Du5gQEJUTlk7Ix8-Nt5pOECpZnMosOwhh3a498'
const useApi = (endpoint = '', method = 'GET', options = {}) => {
  const url = `${baseUrl}${endpoint}`
  const headers = options?.headers || {};
  headers['Authorization'] = `Bearer ${token}`;

  const response = fetch(url, {
    ...options,
    method,
    headers
  }).then((res) => res.json())
    .then(result => { console.log(endpoint, result); return result })
  return response;

}
export default useApi;