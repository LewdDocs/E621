/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

{
  let activeCategory;
  let controls;
  let timeout;

  const { AudioContext , webkitAudioContext } = window;

  const byId = (id) => document.getElementById(id);

  const notes = byId('keyboardAction');

  const getCategory = () => byId(`category-${ activeCategory }`);


  const shortcuts = {
    Search: {
      list: [{
        name: 'Previous Page',
        color: '#d8b03e',
        description: `Switch to the previous page. No action when at the first page.`,
        buttons: [ 'A' , '🠔' ]
      },{
        name: 'Next Page',
        color: '#d8b03e',
        description: `Switch to the next page.`,
        buttons: [ 'D' , '🠖' ]
      },{
        name: 'Search',
        color: '#a956bd',
        description: `Select the search field.`,
        buttons: [ 'Q' ]
      },{
        name: 'Scroll Up',
        color: '#59b9b0',
        buttons: [ 'W' ]
      },{
        name: 'Scroll Down',
        color: '#59b9b0',
        buttons: [ 'S' ]
      },{
        name: 'Random Post',
        color: '#28c366',
        description: `Get redirected to a random post.`,
        buttons: [ 'R' ]
      },{
        name: 'Switch Tag',
        color: '#f554a6',
        description: `Switch to a certain tag.`,
        buttons: [ '1' , '2' , '3' ]
      }]
    },
    Post: {
      list: [{
        name: 'New Note',
        color: '#d8b03e',
        description: `Add a new note to the post.`,
        buttons: [ 'N' ]
      },{
        name: 'Edit Tags',
        color: '#ce5e33',
        description: `Opens the tag editor.`,
        buttons: [ 'E' ]
      },{
        name: 'Edit Tags [ Dialog ]',
        color: '#28c366',
        description: `Opens the tag editor in a separate window.`,
        modifiers: [ 'shift' ],
        buttons: [ 'N' ]
      },{
        name: 'Approve Post',
        color: '#9e1f89',
        description: `Only available for priviliged users.`,
        modifiers: [ 'shift' ],
        buttons: [ 'O' ]
      },{
        name: 'Submit Tags',
        color: '#f554a6',
        description: `Submit the tag edits you made.`,
        buttons: [ 'Enter' ]
      },{
        name: 'Scroll Up',
        color: '#59b9b0',
        buttons: [ 'W' ]
      },{
        name: 'Scroll Down',
        color: '#59b9b0',
        buttons: [ 'S' ]
      },{
        name: 'Previous Post',
        color: '#d8b03e',
        buttons: [ 'A' ]
      },{
        name: 'Next Post',
        color: '#d8b03e',
        buttons: [ 'D' ]
      },{
        name: 'Favorite Post',
        color: '#368c31',
        description: `Add the current post to your favorites.`,
        buttons: [ 'F' ]
      },{
        name: 'Unfavorite Post',
        color: '#368c31',
        description: `Remove the current post from your favorites.`,
        modifiers: [ 'shift' ],
        buttons: [ 'F' ]
      },{
        name: 'Search',
        color: '#a956bd',
        description: `Select the search bar.`,
        buttons: [ 'Q' ]
      },{
        name: 'Thumbnail Mode',
        color: '#3432b1',
        description: `Toggle between <b>sample</b> and <b>full</b> thumbnail size.`,
        buttons: [ 'V' ]
      }]
    }
  };


  /*
      TOGGLE CATEGORY
  */

  toggleCategory = (category) => {

    getCategory()?.classList.remove('selectedCategory');

    activeCategory = (activeCategory === category) ? null : category;

    getCategory()?.classList.add('selectedCategory');

    const keys = shortcuts[activeCategory];

    controls = new Map;

    for(const { name , description , buttons , color } of keys?.list ?? [])
      for(const button of buttons)
        controls.set(button,{
          title: name,
          color,
          description
        });


    for(const element of document.getElementsByTagName('Key')){

      let
        click,
        Color = '';

      const
        { style } = element,
        name = element.innerText;


      if(controls.has(name)){
        const { color , title , description } = controls.get(name);

        Color = color ?? 'var(--white)';

        click = () => {
          clearTimeout(timeout);

          notes.style.display = 'flex';
          notes.innerHTML = `<div>${ title }</div>`;

          if(description)
            notes.innerHTML += `<div>${ description }</div>`;

          notes.style.backgroundColor = color;
          style.opacity = '80%';
        };
      }

      const delay = Math.trunc(Math.random() * 200 + Math.random() * 100 + Math.random() * 50);

      setTimeout(() => {
        style.backgroundColor = Color;
        style.color = Color ? 'white' : '';
        style.cursor = Color ? 'pointer' : '';
      },delay);


      element.onmouseenter = click;
      element.onmouseleave = controls.has(name) ? () => {
        style.opacity = '';

        timeout = setTimeout(() => {
          console.log(element)
          notes.style.backgroundColor = '';
          notes.innerHTML = '';
        },1200);
      } : null;
    }
  }


  /*
      GET KEY
  */

  const getKey = (code,callback) => {
    for(const element of [...(document.getElementsByClassName(`key-${ code }`) ?? [])])
      callback(element);
  };


  /*
      ON PRESS
  */

  window.onkeydown = ({ keyCode }) => {
    getKey(keyCode,(element) => {
      element.style.borderColor = 'white';
    });
  };


  /*
      ON RELEASE
  */

  window.onkeyup = ({ keyCode }) => {
    getKey(keyCode,(element) => {
      element.style.borderColor = '';
    });
  };
}
