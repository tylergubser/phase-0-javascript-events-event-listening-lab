const input = document.getElementById("input");

function addingEventListener() {
    input.addEventListener('click', addingEventListener);
    return alert('I was clicked!');
    
}


