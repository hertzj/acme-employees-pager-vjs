const fetchData = () => {
    const idx = window.location.hash ? 1 * window.location.hash.slice(1) : 0;
    return fetch(`https://acme-users-api-rev.herokuapp.com/api/users${idx ? `/${idx}` : '' }`)
        .then(response => response.json())
        .then(data => {
            const {users, count} = data
            renderUsers(users)
            renderPager(idx, count)
        })
};

const pager = document.querySelector('#pager');
const usersList = document.querySelector('#usersList');

const renderUsers = users => {
    // const html = users.map(user => 
    //     // eslint-disable-next-line no-unused-expressions
    //      `<div>
    //         <ul>
    //             <li>${user.firstName}</li>
    //             <li>${user.lastName}</li>
    //             <li>${user.email}</li>
    //             <li>${user.title}</li>
    //         </ul>
    //     </div>`
    // ).join('')

    const html = users.map(user => 
        // eslint-disable-next-line no-unused-expressions
         `<div class = 'user'>
                <div>${user.firstName}</div>
                <div>${user.lastName}</div>
                <div>${user.email}</div>
                <div>${user.title}</div>
        </div>`
    ).join('')
    usersList.innerHTML =
    `<div class='userHeader'>
    <div>First Name</div>
    <div>Last Name</div>
    <div>Email</div>
    <div>Title</div>
    </div>
    ${html}`
    
}

const renderPager = (idx, count) => {
    const html = `
    <a href="#">First</a>
    <a ${idx ? '' : 'class = hidden'} href="#${idx - 1}">Previous</a>
    <span>${idx + 1}</span>
    <a ${idx >= Math.floor(count / 50) ? 'class = hidden' : ''} href="#${idx + 1}">Next</a>
    <a ${idx >= Math.floor(count / 50) ? 'class = hidden' : ''} href="#${Math.floor(count / 50)}">Last</a>
    `
    pager.innerHTML = `<div class = 'pageControls'>
        ${html}
        </div>`
}

window.addEventListener('hashchange', ev => {
    fetchData();
})


fetchData()