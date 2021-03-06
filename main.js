var inputElement = document.querySelector('#app input');
var ulElement = document.querySelector('#app ul');
var buttonElement = document.querySelector('#app button');

inputElement.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) {
        sendUser();
    }
})

function sendUser() {
    ulElement.innerHTML = '';
    var user = inputElement.value;
    getGitRepository(user);
}

function getGitRepository(inputUser) {
    var url = 'https://api.github.com/users/';
    var urlUser = url + inputUser + '/repos';

    axios.get(urlUser)
        .then(function (response) {
            for (rep of response.data) {
                var elementData = document.createElement('li');
                var elementText = document.createTextNode(rep.name);

                elementData.appendChild(elementText);
                ulElement.appendChild(elementData);
            }
        })
        .catch(function (error) {
            console.warn(error);
        });
    inputElement.value = '';
}