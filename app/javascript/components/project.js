const projectShow = (i,projects) => {
  projects[i].classList.add('active');
}

const projectDisplay = (i,projects) => {
projects[i].classList.remove('active');
i = i +1;
projectShow(i,projects);

}




const projectPlay = () => {
  let i = 0;
  let projects = document.querySelectorAll('.project') ;
  const animated = document.querySelector('.animated');
animated.addEventListener('animationend', () => {
  setTimeout(projectDisplay(i,projects),148000);
});
}

export { projectPlay };
