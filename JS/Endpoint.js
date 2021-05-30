
{
  const byClass = (name) => [...document.getElementsByClassName(name)];


  selectRequest = (type) => {
    byClass('requestSection').forEach((element) => {
      element.style.display = element.id.endsWith(type) ? '' : 'none';
    });
  };
}
