
// На странице post-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// post-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.

const userId = new URL(location.href).searchParams.get('userId');
const showUser = async () => {
    const forUser = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await forUser.json();

const h2 = document.getElementsByTagName('h2')[0];
h2.innerText = user.name + " " + user.username;

let div = document.getElementsByTagName('div')[0];
const ul = document.createElement('ul');
const id = document.createElement("li");
const phone = document.createElement("li");
const web = document.createElement("li");
const adres = document.createElement("li");
const email = document.createElement("li");
const company = document.createElement("li");

id.innerText = 'id:' + user.id;
phone.innerText = 'Phone: ' + user.phone;
web.innerText = 'Website: ' + user.website;
email.innerText = 'email: ' + user.email;
adres.innerText = 'Adres: ' + 'City - ' + user.address.city + '; street - '+ user.address.street + '; ' + user.address.suite + '; zipcode: '+ user.address.zipcode;
company.innerText = 'company: ' + user.company.bs + '; catchPhrase: ' + user.company.catchPhrase + '; name - ' + user.company.name;

ul.append(id, phone, web, email, adres, company);
div.appendChild(ul);
const btnPosts = document.createElement('button');
btnPosts.innerText = 'post of current user';
btnPosts.classList.add ("btnPosts");
div.append(btnPosts);
    btnPosts.onclick = async () => {
        location.href = `../posts/posts.html?userId=${userId}`;
    }
}
void showUser();