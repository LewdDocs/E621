/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

(() => {

  let storage = {
    storage: {},
    getItem: (key) => storage[key],
    setItem: (key,value) => storage[key] = value
  };

  Try(() => { storage = window.localStorage; });


  /*
      WRAP
  */

  const wrap = (name) =>
    `Settings-${ name }`;


  /*
      GET
  */

  const get = (setting) =>
    storage.getItem(wrap(setting));


  /*
      UPDATE
  */

  const update = (setting,value) => {
    storage.setItem(wrap(setting),value);
    return value;
  };


  /*
      REGISTER
  */

  const register = (setting,defaultValue) =>
    update(setting,get(setting) ?? defaultValue);



  Settings = { get , update , register };

})();
