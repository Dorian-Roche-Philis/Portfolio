const scrolling = () => {
  const reg = /.projects./;
  if (reg.test(url) == false ) {
  document.querySelector('body').scrollTop = document.querySelector('body').scrollHeight;
}
}
export { scrolling };
