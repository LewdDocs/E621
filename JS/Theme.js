/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/


(() => {

  const area = document.getElementById('copyPaste');


  /*
      EXE
  */

  const exe = (cmd) => {
    try {
      return document.execCommand(cmd);
    } catch (e){
      console.warn(e);
    }
  }


  /*
      COPY
  */

  copyToClipboard = (string) => {

    area.value = string;
    area.display = 'block';
    area.focus();
    area.select();

    const success = exe('copy');

    area.display = '';

    const { title } = document;

    document.title = success ? '>>> Color Copied <<<' : '>>> Copy Error <<<';

    setTimeout(() => {
      document.title = title;
    },800);
  };

})();
