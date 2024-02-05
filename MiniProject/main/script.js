// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід
// на сторінку post-details.html, котра має детальну інфорацію про об'єкт на який клікнули
// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.
//Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)
const writeUser = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await json.json();

    //const card = document.getElementById('card');
    const h1 = document.querySelector('.title');

    for (const user of users) {
        const card = document.createElement('div');
        card.classList.add('card');
        h1.after(card);
        const idUser = document.createElement('div');
        const NameUser = document.createElement('p');
        const button = document.createElement('button');

        NameUser.innerText = `Name: ${user.name};`;
        idUser.innerText = `id -${user.id}`;
        button.innerText = 'details';

        card.append(NameUser, idUser, button);
        // NameUser.append(idUser);
        // idUser.append(button);

        button.onclick = function () {
            location.href = `../user-details/user-details.html?userId=${user.id}`;
        }
    }
}
void writeUser();



//post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
