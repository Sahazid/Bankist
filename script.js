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
//   console.log(image);
  
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


const instantTransfer = document.getElementById('instant-transfer');
const instantLoan = document.getElementById('instant-loan');
const instantClosing = document.getElementById('instant-closing');

const instantTransferBtn = document.getElementById('instant-transfer-btn');
const instantLoanBtn = document.getElementById('instant-loan-btn');
const instantClosingBtn = document.getElementById('instant-closing-btn');

function instantTransferContent() {
    instantTransfer.classList.remove('hidden');
    instantTransferBtn.classList.add('btn-animation');
   
    
    instantLoan.classList.add('hidden');
    instantLoanBtn.classList.remove('btn-animation');

    
    instantClosing.classList.add('hidden');
    instantClosingBtn.classList.remove('btn-animation');
}

function instantLoanContent() {
    instantTransfer.classList.add('hidden');
    instantTransferBtn.classList.remove('btn-animation');
    
    instantLoan.classList.remove('hidden');
    instantLoanBtn.classList.add('btn-animation');
    
    instantClosing.classList.add('hidden');
    instantClosingBtn.classList.remove( 'btn-animation');
}

function instantClosingContent() {
    instantTransfer.classList.add('hidden');
    instantTransferBtn.classList.remove('btn-animation');
    
    instantLoan.classList.add('hidden');
    instantLoanBtn.classList.remove('btn-animation');
    
    instantClosing.classList.remove('hidden');
    instantClosingBtn.classList.add('btn-animation');
}


const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

const slides = document.getElementById("slides");

const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

const totalSlides = 3;


// Slide Show 

function slideShow(index)
{

    //  console.log(currentSlide)
    slides.style.transform = `translateX(-${index*100}%)`

    dots.forEach((dot, i)=>
    {
        if(index === i)
        {
            dot.classList.remove("bg-gray-400");
            dot.classList.add("bg-gray-900");
        }
        else{
            dot.classList.remove("bg-gray-900")
            dot.classList.add("bg-gray-400");
        }
    })

}


rightBtn.addEventListener('click', ()=>{
    currentSlide++; 
   
    // console.log(currentSlide);
    if(currentSlide >= totalSlides)
    {
        currentSlide = 0;
    }

    slideShow(currentSlide);
})


leftBtn.addEventListener('click', ()=>{
    
   currentSlide--;
   if(currentSlide < 0)
    {
        currentSlide = totalSlides - 1;
        // console.log(currentSlide)
    }

    slideShow(currentSlide);
})




