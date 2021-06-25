/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/


(() => {

  /*
      TO ARRAY
  */

  toArray = (object) =>
    [...object];


  /*
      BY CLASSNAME
  */

  byClassName = (name) =>
    toArray(document.getElementsByClassName(name));


  /*
      BY TAGNAMES
  */

  byTagName = (name) =>
    document.getElementsByTagName(name)


  /*
      BY ID
  */

  byId = (id) =>
    document.getElementById(id);

  /*
      TRY
  */

  Try = (func) =>{
    try { func(); } catch (_){};
  };

})();
