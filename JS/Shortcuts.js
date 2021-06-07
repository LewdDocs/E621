/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

{
  let activeCategory;
  let controls;

  const getCategory = () => document.getElementById(`category-${ activeCategory }`);


  const shortcuts = {
    Search: {
      list: [{
        name: 'Previous Page',
        color: '#d8b03e',
        buttons: [ 'A' , '🠔' ]
      },{
        name: 'Next Page',
        color: '#d8b03e',
        buttons: [ 'D' , '🠖' ]
      },{
        name: 'Search',
        color: '#a956bd',
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
        buttons: [ 'R' ]
      },{
        name: 'Switch Tag',
        color: '#f554a6',
        buttons: [ '1' , '2' , '3' ]
      }]
    }
  };


  toggleCategory = (category) => {

    getCategory()?.classList.remove('selectedCategory');

    activeCategory = (activeCategory === category) ? null : category;

    getCategory()?.classList.add('selectedCategory');

    const keys = shortcuts[activeCategory];

    controls = new Map;

    if(keys)
      keys.list.forEach(({ name , action , buttons , color }) => {
        buttons.forEach((key) => {
          controls.set(key,{ action , color });
        })
      });

    // console.log(controls);


    for(const element of document.getElementsByTagName('Key')){
      const name = element.innerText;

      let Color = '';

      // console.log(name);

      if(controls.has(name)){
        const { color , action } = controls.get(name);

        Color = color ?? 'var(--white)';
      }

      element.style.backgroundColor = Color;
      element.style.color = Color ? 'white' : '';
    }
  }
}
