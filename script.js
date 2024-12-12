DocumentTimeline.getElementById('contactForm').addEvenListener('submit',async (e) =>{
    e.preventDefault();

    const form = e.target;
    const formDara = new FormData(form);
    const mensajeDiv = document.getElementById('mensaje')

    for (let [jey, value] of FormData.entries()){
        if (!value && form[key].hasAttribute('required')){
            mensajeDiv.textContent = `El campo "${key} es obligatorio. `;
            mensajeDiv.style.color = 'red';
            return;
        }
    }

    try{
        const response = await fetch('mensaje.txt');
        if (!response.ok) throw new Error('Error al cargar el mensaje');
        const mensaje = await response.text();

        mensajeDiv.textContent = mensaje;
        mensajeDiv.style.color = 'green';

        form.reset();
    } catch(error) {
        mensajeDiv.textContent = 'Error al enviar el formulario.';
        mensajeDiv.style.color='red'
    }
});