function showFilter() {
    const filterForm = document.getElementById('filterContent');
    const newContentForm = document.getElementById('newContent');

    if (filterForm.style.display === 'none' || filterForm.style.display === '') {
        filterForm.style.display = 'block';
        newContentForm.style.display = 'none';
    } else {
        filterForm.style.display = 'none';
    }
}

function showAddNew() {
    const newContentForm = document.getElementById('newContent');
    const filterForm = document.getElementById('filterContent');

    if (newContentForm.style.display === 'none' || newContentForm.style.display === '') {
        newContentForm.style.display = 'flex';
        filterForm.style.display = 'none';
    } else {
        newContentForm.style.display = 'none';
    }
}

function filterArticles() {
    const opinionCheckbox = document.getElementById('opinionCheckbox');
    const recipeCheckbox = document.getElementById('recipeCheckbox');
    const updateCheckbox = document.getElementById('updateCheckbox');

    const articles = document.querySelectorAll('#articleList > article');

    articles.forEach(article => {
        if (article.classList.contains('opinion')) {
            article.style.display = opinionCheckbox.checked ? '' : 'none';
        } else if (article.classList.contains('recipe')) {
            article.style.display = recipeCheckbox.checked ? '' : 'none';
        } else if (article.classList.contains('update')) {
            article.style.display = updateCheckbox.checked ? '' : 'none';
        }
    });
}

function addNewArticle() {
    const title = document.getElementById('inputHeader').value.trim();
    const content = document.getElementById('inputArticle').value.trim();
    const typeInput = document.querySelector('#newContent input[name="articleType"]:checked');


    if (!title || !content) {
        alert('Please fill in the Title and Text fields.');
        return;
    }
    if (!typeInput) {
        alert('Please select an article type.');
        return;
    }


    let type, markerText;
    if (typeInput.id === 'opinionRadio') {
        type = 'opinion';
        markerText = 'Opinion';
    } else if (typeInput.id === 'recipeRadio') {
        type = 'recipe';
        markerText = 'Recipe';
    } else if (typeInput.id === 'lifeRadio') {
        type = 'update';
        markerText = 'Update';
    }


    const article = document.createElement('article');
    article.className = type;

    article.innerHTML = `
        <span class="marker">${markerText}</span>
        <h2>${title}</h2>
        <p>${content}</p>
        <p><a href="moreDetails.html">Read more...</a></p>
    `;


    document.getElementById('articleList').appendChild(article);


    const opinionCheckbox = document.getElementById('opinionCheckbox');
    const recipeCheckbox = document.getElementById('recipeCheckbox');
    const updateCheckbox = document.getElementById('updateCheckbox');

    if (type === 'opinion' && !opinionCheckbox.checked) article.style.display = 'none';
    if (type === 'recipe' && !recipeCheckbox.checked) article.style.display = 'none';
    if (type === 'update' && !updateCheckbox.checked) article.style.display = 'none';


    document.getElementById('newContent').reset();
    document.getElementById('newContent').style.display = 'none';
}