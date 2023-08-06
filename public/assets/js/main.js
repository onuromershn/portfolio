const servicesButtons = document.querySelectorAll('.service__item');
const serviceDetails = document.querySelector('.services__right');

const getService=(category)=>{
    const details = servicesData.find(item=>item.category === category);
    serviceDetails.innerHTML = `
        <h3>${details.title}</h3>
        ${details.description.map(paragraph=>"<p>" + paragraph + "</p>").join('')}
    `
}

const removeActiveClass = () =>{
    servicesButtons.forEach(button =>{
        button.classList.remove('active');
    })
}
servicesButtons.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActiveClass();
        const serviceClass = item.classList[1];
        getService(serviceClass)
        item.classList.add('active')
    })
})

getService('backend')


//=============MIXITUP

const containerEl = document.querySelector('.projects__container')
var mixer = mixitup(containerEl,{
    animation: {
        enable: false
    }
});

mixer.filter('*');