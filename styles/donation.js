document.getElementById('blog-btn').addEventListener('click', function (event) {
    showById('blog-section');
    if (event.currentTarget.innerText === 'Blog') {
        event.currentTarget.innerText = 'Home';
        showById('blog-section');
        document.getElementById('two-button').classList.add('hidden');
    }
    else {
        event.currentTarget.innerText = 'Blog';
        if (buttons[0].classList.contains('bg-parrot')) {
            showById('main-section')
        }
        else {
            showById('history-section')
        }

        document.getElementById('two-button').classList.remove('hidden')
    }
})

const buttons = document.getElementById('two-button').children
for (const button of buttons) {
    button.addEventListener('click', function () {
        if (button.innerText === 'History') {
            button.classList.add('bg-parrot');
            buttons[0].classList.remove('bg-parrot')
            showById('history-section')
        }
        else {

            button.classList.add('bg-parrot');
            buttons[1].classList.remove('bg-parrot')
            showById('main-section');
        }
    })
}
// input validation and add money
function showModalS() {
    document.getElementById('my_modal_5').showModal();
}

const mainSection = document.getElementById('main-section').children;
for (const card of mainSection) {
    card.children[1].children[4].addEventListener('click', function () {

        const myBalance = getTheNumberById('balance');
        const inputVal = card.children[1].children[3].value;

        const inputValue =  parseFloat(inputVal)

        const dontaedStoreAmmount = parseFloat(card.children[1].children[0].children[1].innerText);
        const historySec = document.getElementById('history-section');
        if (!isNaN(inputValue) && typeof inputValue === 'number' && inputValue >= 1) {
            if (myBalance <= 0) {
                alert('insupicient balance')
                return
            }
            console.log(typeof inputValue)
            document.getElementById('balance').innerText = myBalance - inputValue;
            card.children[1].children[0].children[1].innerText = dontaedStoreAmmount + inputValue;
            const donateText = card.children[1].children[1].innerText;
            const div = document.createElement('div');
            div.classList.add('p-8', 'border-2', 'rounded-2xl', 'space-y-4');
            div.innerHTML = `
            <h3 class="text-bblack font-bold lg:text-xl">${inputValue} taka is donated for ${donateText} </h3>
                <p class="text-para font-light lg:text-base text-sm"> Date: ${new Date()}</p>
            `;
            historySec.appendChild(div);
            showModalS()

        }
        else {
            alert('please input a valid ammount');
        }

    })
}
// history section functionality


