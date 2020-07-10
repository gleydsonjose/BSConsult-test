// Menu Mobile Button
document.getElementById('main-menu-left-side-btn-mobile').addEventListener('click', function() {
  document.getElementById('main-menu').classList.add('main-menu-mobile', 'main-menu-mobile-green-bg-color');
  document.getElementById('main-menu-left-side-btn-mobile').classList.add('hide');
  document.getElementById('main-menu-left-side-btn-close').classList.add('show-main-menu-left-side-btn-close');
  document.getElementById('main-menu-right-side').classList.add('show-main-menu-right-side');
  document.getElementById('main-menu-right-side-controls-list').classList.add('main-menu-right-side-controls-list-mobile');
  document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.add('hide');

  for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
    value.classList.add('main-menu-right-side-controls-list-group-mobile');
  }

  for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group-text')) {
    value.classList.add('main-menu-right-side-controls-list-group-text-mobile');
  }

  document.getElementById('main-menu-right-side-social-media-list').classList.add('main-menu-right-side-social-media-list-mobile');
  
  for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-li')) {
    value.classList.add('main-menu-right-side-social-media-list-li-mobile');
  }

  for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-img')) {
    value.classList.add('main-menu-right-side-social-media-list-img-mobile');
  }

  document.getElementById('header-info-body').classList.add('hide');
});

// Menu Products Mobile Button
document.getElementById('main-menu-right-side-controls-list-products').addEventListener('click', function(event) {
  if(this.id === event.target.id || event.target.id === 'main-menu-right-side-controls-list-products-text') {
    document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.remove('hide');

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
      value.classList.remove('main-menu-right-side-controls-list-group-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group-text')) {
      value.classList.remove('main-menu-right-side-controls-list-group-text-mobile');
    }

    document.getElementById('main-menu-right-side-social-media-list').classList.remove('main-menu-right-side-social-media-list-mobile');

    for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-li')) {
      value.classList.remove('main-menu-right-side-social-media-list-li-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-img')) {
      value.classList.remove('main-menu-right-side-social-media-list-img-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
      value.classList.add('main-menu-right-side-controls-list-group-mobile-2');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group-text')) {
      value.classList.add('hide');
    }

    document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.add('show-main-menu-right-side-controls-list-products-sublist');

    document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-arrow-up')[0].classList.add('hide');

    document.getElementById('main-menu-right-side-controls-list-products-sublist-btn-back').classList.add('show-main-menu-right-side-controls-list-products-sublist-btn-back');

    document.querySelector('#main-menu-right-side-controls-list-products-sublist-btn-back > i').classList.add('main-menu-right-side-controls-list-products-sublist-btn-back-icon');

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-group')) {
      value.classList.add('main-menu-right-side-controls-list-products-sublist-group-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-group-span')) {
      value.classList.add('main-menu-right-side-controls-list-products-sublist-group-mobile-span');
    }

    document.getElementById('main-menu-right-side-controls-list-products-sublist-item-1-sublist').classList.add('hide');

    document.getElementById('main-menu-right-side-social-media-list').classList.add('hide');
  }
});

// Menu Products Mobile Back Button
document.getElementById('main-menu-right-side-controls-list-products-sublist-btn-back').addEventListener('click', function(event) {
  if(this.id === event.target.id || event.target.id === 'main-menu-right-side-controls-list-products-sublist-btn-back-icon' || event.target.id === 'main-menu-right-side-controls-list-products-sublist-btn-back-span') {
    document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.add('hide');

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
      value.classList.add('main-menu-right-side-controls-list-group-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group-text')) {
      value.classList.add('main-menu-right-side-controls-list-group-text-mobile');
    }

    document.getElementById('main-menu-right-side-social-media-list').classList.add('main-menu-right-side-social-media-list-mobile');

    for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-li')) {
      value.classList.add('main-menu-right-side-social-media-list-li-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-social-media-list-img')) {
      value.classList.add('main-menu-right-side-social-media-list-img-mobile');
    }
    
    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
      value.classList.remove('main-menu-right-side-controls-list-group-mobile-2');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group-text')) {
      value.classList.remove('hide');
    }

    document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.remove('show-main-menu-right-side-controls-list-products-sublist');

    document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-arrow-up')[0].classList.remove('hide');

    document.getElementById('main-menu-right-side-controls-list-products-sublist-btn-back').classList.remove('show-main-menu-right-side-controls-list-products-sublist-btn-back');

    document.querySelector('#main-menu-right-side-controls-list-products-sublist-btn-back > i').classList.remove('main-menu-right-side-controls-list-products-sublist-btn-back-icon');

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-group')) {
      value.classList.remove('main-menu-right-side-controls-list-products-sublist-group-mobile');
    }

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-products-sublist-group-span')) {
      value.classList.remove('main-menu-right-side-controls-list-products-sublist-group-mobile-span');
    }

    document.getElementById('main-menu-right-side-controls-list-products-sublist-item-1-sublist').classList.remove('hide');

    document.getElementById('main-menu-right-side-social-media-list').classList.remove('hide');
  }
});

/* Menu Products Sublist Mobile Button Not Ok */
document.getElementById('main-menu-right-side-controls-list-products-sublist-item-1').addEventListener('click', function(event) {
  if(this.id === event.target.id || event.target.id === 'main-menu-right-side-controls-list-products-sublist-item-1-span') {
    document.getElementById('main-menu').classList.remove('main-menu-mobile-green-bg-color');
    document.getElementById('main-menu').classList.add('main-menu-mobile-blue-bg-color');

    document.getElementById('main-menu-right-side-controls-list-products-sublist').classList.add('hide');

    for(let value of document.getElementsByClassName('main-menu-right-side-controls-list-group')) {
      value.classList.add('main-menu-right-side-controls-list-group-mobile-2');
    }
  }
});