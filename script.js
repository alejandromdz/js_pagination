const paginatedForm = document.getElementById('paginated-form')
const divs = paginatedForm.querySelectorAll('div.page');

paginatedForm.addEventListener('click', function (ev) {
    const target = ev.target;
    const data = target.dataset;
    ev.preventDefault();
    if (data) {
        if (data.target) {
            show(parseInt(data.target) )
        }
    }
})

show(1)

function show(index) {
    for (let i = 1; i < divs.length + 1; i++)
        divs[i - 1].style.display = i === index ? 'flex' : 'none';
}