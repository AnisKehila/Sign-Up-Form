const inputs = document.querySelectorAll('.field input');
inputs.forEach(field => {
    let label = document.querySelector(`label[for = '${field.id}']`);
    field.addEventListener('focusin' , () => {
        label.style = 'top: 8px';
    });
    field.addEventListener('focusout' , () => {
        if(field.id === 'email') {
            let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if (field.value.match(validEmail)) {
                field.style = `border-bottom: 2px solid green`;
            } else {
                field.style = `border-bottom: 2px solid red`;
            }
        }
        if(!field.value && field.id !== 'email') {
            label.style = `top: 60%;`;
            field.style = `border-bottom: 2px solid red`;
        } else if(field.value && field.id !== 'email') {
            field.style = `border-bottom: 2px solid green`;
        }
    })
})