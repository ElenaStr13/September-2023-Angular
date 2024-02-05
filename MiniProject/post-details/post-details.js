// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформації про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
// post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.

const postId = new URL(location.href).searchParams.get('postId');
const showPost = async () => {
    const json = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await json.json();

const h2 = document.getElementsByTagName('h2')[0];
const h3 = document.getElementsByTagName('h3')[0];
h2.innerText = post.title;
const div = document.getElementsByTagName('div')[0];
const id = document.createElement("p");
const body = document.createElement("p");

id.innerText = 'id:' + post.id;
body.innerText = post.body;

div.append(id, body);
h2.append(div);

    const showComments = async () => {
        const json = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await json.json();
        console.log(comments);
        for (const comment of comments) {
            const idCom = document.createElement("p");
            const nameCom = document.createElement("div");
            const emailCom = document.createElement("div");
            const bodyCom = document.createElement("p");
            const wrapperPost = document.createElement("div");
            const all = document.querySelector(".comments");
            wrapperPost.classList.add ('wrapperPost');

            idCom.innerText = comment.id;
            nameCom.innerText = 'Name: ' + comment.name;
            emailCom.innerText = 'Email:' + comment.email;
            bodyCom.innerText = 'Comment: ' + comment.body;

            h3.after(all);
            all.appendChild(wrapperPost);
            wrapperPost.append(nameCom, emailCom, bodyCom);
        }
    }
    void showComments();
}


void showPost();
