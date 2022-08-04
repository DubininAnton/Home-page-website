const program = (trigger, list) => {
    const triggerButton = document.querySelectorAll(trigger);
    const listProgram = document.querySelectorAll(list);

    const selectedButtom = (age) => {
        triggerButton.forEach(item => {
             if(item.getAttribute('data-info') === age) {
                item.setAttribute('class', 'selectedButtom program__item');
            } else {
                item.setAttribute('class', 'program__item');
            }
        })
    }
    selectedButtom('children');

    const showList = (age)=> {
        listProgram.forEach(item => {
            if(item.getAttribute('data-info') === age) {
                item.style.display = 'flex'
            } else {
                item.style.display = 'none';
            }
        })
    }
    showList('children')
    
   

    triggerButton.forEach(item => {
        item.addEventListener('click', (e)=> {
            if(e.target) {
                selectedButtom(e.target.parentElement.getAttribute('data-info'))
                showList(e.target.parentElement.getAttribute('data-info'))
            }
        })
    })
}

export default program;