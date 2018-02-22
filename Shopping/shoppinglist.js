'use strict';


$(function() {
   
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
   

    const item = $('.js-shopping-list-entry').val();
    const data = `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`;

    $('.shopping-list').append(data);

  });

  $('.js-shopping-list-entry').val('');

  
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) { 
    $(this).closest('li').remove(); 

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });  
    
  }); 
});







