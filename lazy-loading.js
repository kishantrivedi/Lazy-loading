// Target element
const target = document.querySelectorAll("img");

// Options for observer
const options = {
    threshold:1
}

// Creating the observer
var observer = new IntersectionObserver((elements, observer) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {
            var img = element.target;
            img.setAttribute('src', img.getAttribute('data-src'));
            img.parentNode.classList.remove('preloading')
            img.classList.add('animate-img')
            observer.unobserve(img);
        }
    });
}, options);

target.forEach (ele => {
    observer.observe(ele);
})
