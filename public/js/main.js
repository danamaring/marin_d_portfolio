(() => {
    //try to get the bject and do stuff with it
    const seeMoreButtons = document.querySelectorAll('.see-more'),
        popOver = document.querySelector('.lightbox1');


    function buildPopover(portfoliodata, el) {
        popOver.querySelector(".lightbox-title").textContent = portfoliodata.Title;
        popOver.querySelector(".lightbox-roll").textContent = portfoliodata.Roll;
        popOver.querySelector(".lightbox-description").textContent = portfoliodata.Description;

        //show the popover
        popOver.classList.add('show-lightbox');
        el.appendChild(popOver);
    }

    function fetchData() {
        let targetEl = this,
            url = `/portdata/${this.dataset.target}`; 
        
        fetch(url)
        .then (res => res.json())
        .then(data => {
            console.log(data);

            // populate the popover
            buildPopover(data, targetEl);
        })
        .catch((err) => console.log(err));
    }

    seeMoreButtons.forEach(button => button.addEventListener("click", fetchData));
})();







// (() => {
//     console.log('fired!');

//     const lightBoxTRAA = document.querySelector('.lightbox-traa'),
//           lightBoxResort = document.querySelector('.lightbox-resort'),
//           lightBoxFavourite = document.querySelector('.lightbox-favourite'),
//           lightBoxMixtape = document.querySelector('.lightbox-mixtape'),
//           lightBoxThermosecurity = document.querySelector('.lightbox-thermosecurity'),
//           imgResort = document.querySelector('#resort'),
//           imgFavourite = document.querySelector('#favourite'),
//           imgMixtape = document.querySelector('#mixtape'),
//           imgThermosecurity = document.querySelector('#thermosecurity'),
//           closeButtonTRAA = document.querySelector('.close-lightbox-TRAA'),
//           closeButtonResort = document.querySelector('.close-lightbox-resort'),
//           closeButtonFavourite = document.querySelector('.close-lightbox-favourite'),
//           closeButtonMixtape = document.querySelector('.close-lightbox-mixtape'),
//           closeButtonThermosecurity = document.querySelector('.close-lightbox-thermosecurity'),
//           imgTraa = document.querySelector('#traa');

//     function popLightboxTRAA() {
//         lightBoxTRAA.classList.add('show-lightbox');
//     }

//     function popLightboxResort() {
//         lightBoxResort.classList.add('show-lightbox');
//     }

//     function popLightboxFavourite() {
//         lightBoxFavourite.classList.add('show-lightbox');
//     }

//     function popLightboxMixtape() {
//         lightBoxMixtape.classList.add('show-lightbox');
//     }

//     function popLightboxThermosecurity() {
//         lightBoxThermosecurity.classList.add('show-lightbox');
//     }

//     function closeLightBoxTRAA() {
//         lightBoxTRAA.classList.remove('show-lightbox');
//     }

//     function closeLightBoxResort() {
//         lightBoxResort.classList.remove('show-lightbox');
//     }

//     function closeLightboxFavourite() {
//         lightBoxFavourite.classList.remove('show-lightbox');
//     }

//     function closeLightboxMixtape() {
//         lightBoxMixtape.classList.remove('show-lightbox');
//     }

//     function closeLightboxThermosecurity() {
//         lightBoxThermosecurity.classList.remove('show-lightbox');
//     }


//     closeButtonTRAA.addEventListener("click", closeLightBoxTRAA);
//     closeButtonResort.addEventListener("click", closeLightBoxResort);
//     closeButtonFavourite.addEventListener("click", closeLightboxFavourite);
//     closeButtonMixtape.addEventListener("click", closeLightboxMixtape);
//     closeButtonThermosecurity.addEventListener("click", closeLightboxThermosecurity);

//     imgTraa.addEventListener("click", popLightboxTRAA);
//     imgResort.addEventListener("click", popLightboxResort);
//     imgFavourite.addEventListener("click", popLightboxFavourite);
//     imgMixtape.addEventListener("click", popLightboxMixtape);
//     imgThermosecurity.addEventListener("click", popLightboxThermosecurity);

// })();