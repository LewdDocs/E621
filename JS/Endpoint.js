/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/


(() => {

  /*
      SELECT REQUEST
  */

  selectRequest = (type) =>
    byClassName('requestSection').forEach(({ id , type }) => {
      style.display = id.endsWith(type) ? '' : 'none';
    });

})();
