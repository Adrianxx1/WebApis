export function createPagination(){
    let buttons = '';
    for(let i=1; i<= 42; i++){
        buttons +=`
        <li class="page-item">
            <a class="page-link" href="#" data-id="${i}">
                 ${i}
            </a>
        </li>

        `;
    } 
    return buttons;
}

export function createCard(personajes){
    const   card = document.createElement('div');
    card.classList.add('card', 'mb-3');
    card.style.width='18rem';
    let contentCard=`
    <img src="${personajes.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${personajes.name}</h5>
    <p class="card-text">${personajes.status}</p>
    <p class="card-text">${personajes.gender}</p>
    <a href="#" class="btn btn-primary" 
     data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-id="${personajes.id}">ver mas </a>
    </div>`
    card.innerHTML= contentCard;
    return card;

}