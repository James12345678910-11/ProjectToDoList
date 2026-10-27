import "./style.css";

function activeBtn() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
  button.addEventListener('click', () => {

    // Remove active class from all buttons
    buttons.forEach(button => {
      button.classList.remove('active');
    });

    // Add active class to clicked button
    button.classList.add('active');
  });
});
}






















if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}