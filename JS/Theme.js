
{
  const exe = (cmd) => {
    try {
      return document.execCommand(cmd);
    } catch (e){
      console.warn(e);
    }
  }


  const area = document.getElementById('copyPaste');


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
  }
}
