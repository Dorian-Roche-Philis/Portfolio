const mobile = () => {
  document.addEventListener('turbolinks:request-start', () => {
        document.body.classList.add('animated','slideOutRight');
});
document.addEventListener('turbolinks:before-render', () => {
        event.data.newBody.classList.add('animated','fadeInLeftBig');
      });
}
export { mobile };
