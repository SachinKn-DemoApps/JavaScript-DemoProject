(async function init() {
    let user = JSON.parse(localStorage.getItem("userObj"));

    document.getElementById('name').textContent = user?.name ? user.name : 'Sachin kn';
    document.getElementById('email').textContent = user?.email ? user.email : 'Sachinkn@gmail.com';
    document.getElementById('interests').textContent = user?.interests ? user.interests : 'coding';

    const cont = document.getElementById('container');
    cont.style.display = 'flex';
})();

async function handleUpdateProfileRequest() {
    const contEdit = document.getElementById('container-edit');
    const cont = document.getElementById('container');

    const userObj = {
        name: document.getElementById('input-name').value, 
        email: document.getElementById('input-email').value, 
        interests: document.getElementById('input-interests').value
    };

    localStorage.setItem("userObj", JSON.stringify(userObj));

    document.getElementById('name').textContent = userObj.name;
    document.getElementById('email').textContent = userObj.email;
    document.getElementById('interests').textContent = userObj.interests;

    cont.style.display = 'flex';
    contEdit.style.display = 'none';
}

function updateProfile() {
    const contEdit = document.getElementById('container-edit');
    const cont = document.getElementById('container');

    document.getElementById('input-name').value = document.getElementById('name').textContent;
    document.getElementById('input-email').value = document.getElementById('email').textContent;
    document.getElementById('input-interests').value = document.getElementById('interests').textContent;

    cont.style.display = 'none';
    contEdit.style.display = 'flex';
}