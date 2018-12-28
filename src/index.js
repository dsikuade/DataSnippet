import './index.css';
import {getUsers} from './api/userApi';

getUsers().then(result => {
    let usersBody = "";

    result.forEach(user => {
        usersBody += `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        </tr>`
    });

    global.document.getElementById('insertusers').innerHTML = usersBody;
})
