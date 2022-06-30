const reader = new FileReader();
const input_file = document.getElementById('file_selector');
const img = document.querySelector('.contenedor .img-content img');

let cargar_img = (e) => {
    if (e.type === 'load') {
        img.src = reader.result;
    }
};

reader.addEventListener('load', cargar_img);

let selected_img = (e) => {
    const file_selected = input_file.files[0];
    if (file_selected) {
        reader.readAsDataURL(file_selected);
    }
};

input_file.addEventListener('change', selected_img);