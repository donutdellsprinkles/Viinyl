const create = document.getElementById('create');
create.onclick =()=> {
    const text = document.createElement('textarea');
    text.style.width = '500px'
    text.style.height = '500px'
    document.body.appendChild(text);
    const blue = document.createElement('button');
    blue.style.backgroundColor = '#0000FF';
    blue.style.width = '20px';
    blue.style.height = '20px';
    blue.style.borderRadius = '5px';
    blue.style.borderColor = 'transparent';
    blue.style.cursor = 'pointer';
    document.body.appendChild(blue);
    blue.onclick =()=> {
      document.querySelector('textarea').style.color = '#0000FF';
    }
    const red = document.createElement('button');
    red.style.backgroundColor = '#FF0000';
    red.style.width = '20px';
    red.style.height = '20px';
    red.style.borderRadius = '5px';
    red.style.borderColor = 'transparent';
    red.style.cursor = 'pointer';
    document.body.appendChild(red);
    red.onclick =()=> {
      document.querySelector('textarea').style.color = '#FF0000';
    }
    const white = document.createElement('button');
    white.style.backgroundColor = '#FFFDD0';
    white.style.width = '20px';
    white.style.height = '20px';
    white.style.borderRadius = '5px';
    white.style.borderColor = 'transparent';
    white.style.cursor = 'pointer';
    document.body.appendChild(white);
    white.onclick =()=> {
      document.querySelector('textarea').style.color = '#FFFDD0';
    }
    const save = document.createElement('button');
    save.id = 'fornite';
    save.textContent = 'Save';
    document.body.appendChild(save);
    const open1 = document.createElement('button');
    open1.textContent = 'Viinyl'
    open1.id = 'open1';
    document.body.appendChild(open1);
    open1.onclick =()=> {
      text.value = localStorage.getItem('words')
        const imageBlob = localStorage.getItem('image');
        if (imageBlob) {
          const img = document.createElement('img');
          img.src = imageBlob;
          text.style.backgroundImage = `url(${img.src})`;
          text.style.backgroundRepeat = 'no-repeat';
          text.style.backgroundSize = 'cover';
        };
    }
    save.onclick =()=> {
      words = text.value
      localStorage.setItem('words', words);
        const reader = new FileReader();
        reader.onloadend = () => {
        const imageBlob = reader.result;
        localStorage.setItem('image', imageBlob);
      };
      const img = document.querySelector('img');
  const imageSrc = img.src;

  // Fetch the image blob from the URL
  fetch(imageSrc)
    .then((response) => response.blob())
    .then((blob) => {
      reader.readAsDataURL(blob);
    });
      reader.readAsDataURL(blob);
    };



}

const appendImage = (blob) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(blob);
    document.getElementById('preview').appendChild(img);

    //const save = document.getElementById('save');
    //save.onclick = () => {
      //const reader = new FileReader();
      //reader.onloadend = () => {
        //const imageBlob = reader.result;
        //localStorage.setItem('image', imageBlob);
      //};
      //reader.readAsDataURL(blob);
    //};
  //};
  //no way in hell i would have discovered that on my own. You bet your ass i used chatgpt to find out
  //what a file reader is

  //const open = document.getElementById('open');
  //open.onclick = () => {
    //const imageBlob = localStorage.getItem('image');
    //if (imageBlob) {
      //const img = document.createElement('img');
      //img.src = imageBlob;
      //document.body.appendChild(img);
    //}
  };

  document.addEventListener('paste', async (e) => {
    e.preventDefault();

    const items = e.clipboardData?.items || (await navigator.clipboard.read());
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        appendImage(blob);
      }
    }
  });
