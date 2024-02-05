
// На странице post-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
// блоки з короткою інфою про post - в ряд по 5 .

const userId = new URL(location.href).searchParams.get('userId');
const postId = new URL(location.href).searchParams.get('postId');
const showPosts = async () => {
    const jsons = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await jsons.json();
    console.log (posts);

    const wrapperTitlePosts = document.getElementById('wrapper');

    let i= 0;
    for (const post of posts) {
        i++;
        const title = document.createElement("div");
        title.classList.add ('title');
        const wrapperPost = document.createElement("div");
        wrapperPost.classList.add ('wrapperPost');
        title.innerText = i + ". " + post.title ;
        wrapperPost.appendChild(title);
        const btnPost = document.createElement('button');
        wrapperPost.appendChild(btnPost);
        wrapperTitlePosts.append(wrapperPost);
        btnPost.classList.add ('btnPost')
        btnPost.innerText = 'Details';
        btnPost.onclick = function () {
            location.href = `../post-details/post-details.html?postId=${post.id}`;
        }
    }

}
void showPosts();