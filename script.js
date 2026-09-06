const modalBox = document.getElementById("modal-box");
const mainBox = document.getElementById('main-box')  
function modal()
{
    mainBox.classList.add('blur-sm');
    modalBox.classList.remove('hidden');
    modalBox.classList.add('flex');
    
}

const closeModalBtn = document.getElementById('close-modal-btn')

function closeModal()
{
    mainBox.classList.remove('blur-sm');
    modalBox.classList.add("hidden");
    modalBox.classList.remove('flex');
}

const logoNavBar = document.getElementById('nabar-logo-image');
const featureBtn = document.getElementById('features-btn');
const operationBtn = document.getElementById('operation-btn');
const featuureSec = document.querySelectorAll('.feature-sec')

const lazyImages = document.querySelectorAll('.lazy-img');

const imageObserver = new IntersectionObserver( function (entires)
{
    // console.log(entires)
    entires.forEach(function (entry)
{

    if(entry.isIntersecting)
    {   
        entry.target.classList.remove('lazy-img')   
       const image = entry.target
        image.src = image.dataset.src

    }
    else
    {
        entry.target.classList.add('lazy-img')
    }
})
})

lazyImages.forEach(function(image) {
  imageObserver.observe(image);
  console.log(image);
  
});

const featureSecObserver = new IntersectionObserver( (entries)=>{
    entries.forEach((entry)=>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('show')
        }
        else
        {
            entry.target.classList.remove('show')
        }
    })
},{})

featuureSec.forEach((el)=>{
    featureSecObserver.observe(el);
})