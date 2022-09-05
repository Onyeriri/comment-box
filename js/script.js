const textarea = document.getElementsByTagName('textarea');

const maxLength = textarea[0].maxLength;

const comment = document.getElementById('comments');

  const wordLength = () => {
    document.querySelector('span').innerHTML = `${comment.value.length} / ${maxLength}`;
    
    document.querySelector('span').style.display = 'block';

    if (comment.value.length === maxLength) {
      document.querySelector('textarea').style.border = '5px solid red';

      setTimeout(() => {
        document.querySelector('textarea').style.border = '5px solid #fff';
      }, 1500)
    }

  }

const formSubmit = (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name').value;

  const emailInput = document.getElementById('email').value;

  const comment = document.getElementsByTagName('textarea')[0].value;

  displayOutput(nameInput, comment);
  
};

const displayOutput = (nameInput, comment) => {
  if (nameInput !== '' && comment !== '') {
    document.getElementById('name-output').innerText = nameInput;

    document.getElementById('comment-output').innerText = comment;
  
    document.getElementById('comment-output').style.display = 'block';

    document.getElementById('form-element').reset();

    document.getElementById('comment-box').style.display = 'block';

  } else {
    document.getElementById('name').style.border = '5px solid red'; document.getElementById('email').style.border = '5px solid red'; document.getElementById('comments').style.border = '5px solid red';
    document.getElementById('warning').style.backgroundColor = 'red';
    document.getElementById('warning').style.color = 'white';
    document.getElementById('warning').style.display = 'block';
    
    setTimeout(() => {
      document.getElementById('name').style.border = '5px solid #fff'; document.getElementById('email').style.border = '5px solid #fff'; document.getElementById('comments').style.border = '5px solid #fff';
      document.getElementById('warning').style.display = 'none';
    }, 1500);
  }
  
};
 