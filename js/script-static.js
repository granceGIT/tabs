const headerItems = document.querySelectorAll('.tab-header__item');

headerItems.forEach(header=>{
    header.addEventListener('click',()=>{
        clearTab();
        header.classList.add('tab-header__item_active')
        document.querySelector(header.dataset.target).classList.add('tab-body__item_active')
    })
})

function clearTab(){
    headerItems.forEach(item=>{
        item.classList.remove('tab-header__item_active')
    })
    document.querySelectorAll('.tab-body__item').forEach(body => {
        body.classList.remove('tab-body__item_active')
    })
}