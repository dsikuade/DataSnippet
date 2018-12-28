/* baseUrl looks to see if we are in development mode on localhost. If so, it uses the mock api data,
if not it uses the api hosted on heroku
*/
export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';

    return inDevelopment ? 'http://localhost:3001/' : 'https://intense-reaches-48963.herokuapp.com/';
}
