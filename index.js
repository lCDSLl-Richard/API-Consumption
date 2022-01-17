const API_URL = 'https://jsonplaceholder.typicode.com';

document.getElementById('title').addEventListener('click', reset);
document.getElementById('posts').addEventListener('click', getPosts);
document.getElementById('comments').addEventListener('click', getComments);
document.getElementById('albums').addEventListener('click', getAlbums);
document.getElementById('photos').addEventListener('click', getPhotos);
document.getElementById('todos').addEventListener('click', getTodos);
document.getElementById('users').addEventListener('click', getUsers);

function reset(){
  document.getElementById('userList').innerHTML = '';
}

function getPosts(){
  fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => {
      
      let data = '';
      posts.forEach(post => {
        data += `<li class="list__item"><b>${post.title}</b> <br> ${post.body}</li>`;
      });
  
      document.getElementById('userList').innerHTML = data;
    })
}

function getComments(){
  fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(comments => {
      
      let data = '';
      comments.forEach(comment => {
        data += `<li class="list__item"><b>Author: ${comment.name}</b> <br> Title: ${comment.body}</li>`;
      });
  
      document.getElementById('userList').innerHTML = data;
    })
}

function getAlbums(){
  fetch(`${API_URL}/albums`)
    .then(response => response.json())
    .then(albums => {
      
      let data = '';
      albums.forEach(album => {
        data += `<li class="list__item"><b>Title: ${album.title}</b> <br> Author: ${album.userId}</li>`;
      });
  
      document.getElementById('userList').innerHTML = data;
    })
}

function getPhotos(){
  fetch(`${API_URL}/photos`)
    .then(response => response.json())
    .then(photos => {

      let data = '';
      photos.forEach(photo => {
        data += `<li class="list__item">Title: ${photo.title} <br> <img src="${photo.thumbnailUrl}"></li>`;
      });
      
      document.getElementById('userList').innerHTML = data;
    })
}

function getTodos(){
  fetch(`${API_URL}/todos`)
    .then(response => response.json())
    .then(todos => {

      let data = '';
      todos.forEach(todo => {
        data += `<li class="list__item">Title: ${todo.title} <br> Completed: ${todo.completed}</li>`;
      });
      
      document.getElementById('userList').innerHTML = data;
    })
}

function getUsers(){
  fetch(`${API_URL}/users`)
    .then(response => response.json())
    .then(users => {
      
      let data = '';
      users.forEach(user => {
        data += `<li class="list__item">Name: ${user.name} <br> Email: ${user.email}</li>`;
      });
  
      document.getElementById('userList').innerHTML = data;
    })
}

