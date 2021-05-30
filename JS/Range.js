/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/

{
  const modes = [ 'interval' , 'arrow' , 'set' ];

  let mode = Settings.register('range_mode','interval');

  console.log(`Range mode: ${ mode }`);


  /*
      UPDATE
  */

  function update(){
    for(const element of document.getElementsByClassName('range'))
      updateElement(element);
  };


  /*
      UPDATE ELEMENT
  */

  function updateElement({ style , dataset }){
    style.display = dataset?.mode === mode ? 'block' : '';
  };



  update();


  Range = {
    switchMode: () => {
      mode = modes[(modes.indexOf(mode) + 1) % 3];
      console.log(`Switched Range To: ${ mode }`);
      Settings.update('range_mode',mode);
      update();
    }
  };
}
