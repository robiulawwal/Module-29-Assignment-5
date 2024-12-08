function showById (id){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden');
    
}
function getTheNumberById (id){
    const value = document.getElementById(id).innerText;
    return parseFloat(value);
}

function showModalS() {
    document.getElementById('my_modal_5').showModal();
}

