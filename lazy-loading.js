// Target element
const target = document.querySelectorAll("img");

// Options for observer
// Threshold: It is used to determine how much percentage of the element is in the viewport.
// rootMargin: It can be used to trigger the call back function before the element is in the viewport. The distance 
//              between the element and viewport is given in px or %
const options = {
    threshold:1,
    // rootMargin: "200px"
}

// Creating the observer
var observer = new IntersectionObserver((elements, observer) => {
    elements.forEach((element) => {
        if (element.isIntersecting) {       // Checking if the element is intersecting or not.
            var img = element.target;
            img.setAttribute('src', img.getAttribute('data-src'));
            img.parentNode.classList.remove('preloading')
            img.classList.add('animate-img')
            observer.unobserve(img);        // This will stop observing the element (image) after it is loaded.
        }
    });
}, options);

target.forEach (ele => {
    observer.observe(ele);              // Elements are observed using this method.
})
