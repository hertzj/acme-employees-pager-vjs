const fetchData = async() => {
    const location = window.location.hash ? 1*window.location.hash.slice(1) : 0;

    const response = await fetch(`https://acme-users-api-rev.herokuapp.com/api/users`);
    const data = await response.json();
    let {users, count} = data;

    // while (count > 0) {
    //     count -= 50;
    //     let pgNum = 1;
    //     response = await fetch((`https://acme-users-api-rev.herokuapp.com/api/users/${pgNum}`));
    //     pgNum++;
    // }

    renderUsers(users)
    renderPager(count, location);
}

const userList = document.querySelector('#userList')
const pager = document.querySelector('#pager');





const renderUsers = (userData) => {
     
    const HTML = userData.map(user => {
        return `<div class='user'>
        <ul>
            <li>${user.firstName}</li>
            <li>${user.lastName}</li>
            <li>${user.email}</li>
            <li>${user.title}</li>
        </ul>
    </div>`
        
    }).join()

    userList.innerHTML = HTML;
}

const html = `<ul>
<li><a href="${window.location.href}#">First</a></li>
<li><a href="${window.location.href}#${location++}"></a>Next</li>
<li>${location}</li>
<li><a href="${window.location.href}#${location--}"></a>Previous</li>
<li><a href="${window.location.href}#${Math.ceil(count / 50)}"></a></li>
</ul>`

pager.innerHTML = html;

const renderPager = (num, location) => {
    // add eventlistener for change in hash

    // const html = `<ul>
    // <li><a href="${window.location.href}#">First</a></li>
    // <li><a href="${window.location.href}#${location++}"></a>Next</li>
    // <li>${location}</li>
    // <li><a href="${window.location.href}#${location--}"></a>Previous</li>
    // <li><a href="${window.location.href}#${Math.ceil(count / 50)}"></a></li>
    // </ul>`

    // pager.innerHTML = html;

    
    // const response = await fetch(`https://acme-users-api-rev.herokuapp.com/api/users/${location}`)
    // const data = await response.json();
    // const {users, count} = data;

    // renderUsers(users);
}

fetchData()
// renderPager()