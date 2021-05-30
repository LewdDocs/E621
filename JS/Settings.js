/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

{
  const { localStorage } = window;

  const wrap = (name) => `Settings-${ name }`;


  /*
      GET
  */

  const get = (setting) =>
    localStorage.getItem(wrap(setting));


  /*
      UPDATE
  */

  const update = (setting,value) => {
    localStorage.setItem(wrap(setting),value);
    return value;
  };


  /*
      REGISTER
  */

  const register = (setting,defaultValue) =>
    update(setting,get(setting) ?? defaultValue);




  Settings = { get , update , register };
}
