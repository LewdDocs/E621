/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

{
  let activeCategory;

  const getCategory = () => document.getElementById(`category-${ activeCategory }`);


  toggleCategory = (category) => {

    getCategory()?.classList.remove('selectedCategory');

    activeCategory = (activeCategory === category) ? null : category;

    getCategory()?.classList.add('selectedCategory');

  }
}
