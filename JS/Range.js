/*
    Copyright (c) 2021 LewdTechnologies
    Git: https://github.com/LewdDocs/E621
*/


(() => {

  const modes = [ 'interval' , 'arrow' , 'set' ];

  let mode = Settings.register('range_mode','interval');


  /*
      UPDATE
  */

  function update(){
    byClassName('range')
    .forEach(updateElement);
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

})();
