let tabs=[
    {
        header:'Один',
        body:'Первая вкладка',
        target:'tab-1',
    },
    {
        header:'Два',
        body:'Вторая вкладка',
        target:'tab-2',
    },
    {
        header:'Три',
        body:'Третья вкладка',
        target:'tab-3',
    }
]

const tabHeader = document.querySelector('.tab-header'),
tabBody = document.querySelector('.tab-body'),
tabItem = document.querySelector('.tab-body__item')

tabs.forEach(tab=>{
    let divHeader = document.createElement('div')
    divHeader.classList.add('tab-header__item')
    divHeader.innerHTML = `<span>${tab.header}</span>`
    divHeader.dataset.target = tab.target
    divHeader.addEventListener('click',doActiveTab)

    tabHeader.append(divHeader)
})

//Active on load
tabHeader.children[0].classList.add('tab-header__item_active')
tabItem.innerHTML = `<p>${tabs[0].body}</p>`


function doActiveTab(e){
    clearTab()
    let currentHeader = e.currentTarget
    currentHeader.classList.add('tab-header__item_active')
    tabs.forEach((tab)=>{
        currentHeader.dataset.target == tab.target ? tabItem.innerHTML=`<p>${tab.body}</p>`:''
    })

}

function clearTab(){
    [...tabHeader.children].forEach(item=>item.classList.remove('tab-header__item_active'))
}
