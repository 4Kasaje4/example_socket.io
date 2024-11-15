const socket = io('ws://localhost:5500');

socket.on('message', text => {
    const el = document.createElement('li');

    el.innerHTML = text;
    document.getElementById('ul').appendChild(el);
})

document.querySelector('button').onclick = () => {
    const text = document.querySelector('input').value;
    socket.emit('message', text);
}