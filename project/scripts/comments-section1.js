// Obtener el identificador único del artículo desde la URL
function getArticleId() {
    const path = window.location.pathname;
    const page = path.split("/").pop().replace('.html', '');
    return page || 'default-article';
}

// Configuración inicial
const articleId = getArticleId();
const STORAGE_KEY = 'philosophyChannel_comments';

// Elementos del DOM
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const commentInput = document.getElementById('comment');
const submitBtn = document.getElementById('submit-comment');
const commentContainer = document.querySelector('.comment-list');
const commentLenght = document.getElementById('comments-lenght');

// Cargar comentarios al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadComments();
});

// Función para cargar comentarios desde LocalStorage
function loadComments() {
    const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const articleComments = allComments[articleId] || [];
    
    renderComments(articleComments);
}

// Función para guardar comentarios en LocalStorage
function saveComments(comments) {
    const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    allComments[articleId] = comments;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allComments));
}

// Función para renderizar los comentarios
function renderComments(comments) {
    commentContainer.innerHTML = '';
    commentLenght.innerHTML = comments.length;
    
    if (comments.length === 0) {
        commentContainer.innerHTML = '<p>There are no Comments Yet, Be the first!</p>';
        return;
    }
    
    comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.name}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-body">
                <p>${comment.comment}</p>
            </div>
        `;
        commentContainer.appendChild(commentElement);
    });
}

// Evento para agregar nuevo comentario
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Validación
    if (!nameInput.value.trim() || !commentInput.value.trim()) {
        alert('Por favor completa al menos tu nombre y el comentario');
        return;
    }
    
    // Crear nuevo comentario
    const newComment = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        comment: commentInput.value.trim(),
        date: new Date().toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }),
        articleId: articleId
    };
    
    // Obtener comentarios actuales
    const allComments = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    const articleComments = allComments[articleId] || [];
    
    // Agregar nuevo comentario (al inicio del array)
    articleComments.unshift(newComment);
    allComments[articleId] = articleComments;
    
    // Guardar y recargar
    saveComments(articleComments);
    renderComments(articleComments);
    
    // Limpiar formulario
    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';
    
    // Mostrar feedback
    alert('Thanks For sharing!');
});