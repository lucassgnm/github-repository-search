var inputElement = document.querySelector('#app input');
var ulElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');

function sendUser() {
    var user = inputElement.value;
    getGitRepository(user);
}

function getGitRepository(inputUser) {
    var url = 'https://api.github.com/users/';
    var urlUser = url+inputUser+'/repos';

    axios.get(urlUser)
    .then(function(response) {
        for (rep of response.data) {
            var elementData = document.createElement('li');
            var elementText = document.createTextNode(rep.name);

            elementData.appendChild(elementText);
            ulElement.appendChild(elementData);
        }
    })
    .catch(function(error) {
        console.warn(error);
    });
}