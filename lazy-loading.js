// Target elements
const target = document.querySelectorAll(".lazy, div.lazyBackground");

// Options for observer
// Threshold: It is used to determine how much percentage of the element is in the viewport.
// rootMargin: It can be used to trigger the call back function before the element is in the viewport. The distance 
//              between the element and viewport is given in px or %
const options = {
    threshold:1,
    // rootMargin: "500px"
}

// Creating the observer
var observer = new IntersectionObserver((elements, observer) => {
    elements.forEach((element) => {
    if (element.isIntersecting) {                            // Checking if the element is intersecting or not.
        var img = element.target;
        if (img.classList.contains("lazyBackground")) {
            path = img.getAttribute('data-src');
            img.style.backgroundImage = "url(\""+path+"\")"
            };
        if (img.classList.contains("lazy")) {
            img.classList.remove("lazy");
            img.setAttribute('src', img.getAttribute('data-src'));
        };
        if (!img.complete) {                                 // Checking if the image is completely loaded or not.
            img.addEventListener('load', lazyImageLoad, false);
            img.addEventListener('error', lazyImageError, false);
        }
        else {
            lazyImageLoad()
            console.log("We are here!")
        }
        function lazyImageLoad(e) {                          // If image is loaded, this function will be called.
            img.parentNode.classList.remove('preloader');
            img.classList.add('animate-img');
            img.removeAttribute('data-src');
        }
        function lazyImageError(e) {                         // If there is an error loading the image, this function will be called.
            var parent = e.currentTarget.parentNode;
            parent.classList.remove('preloader');
            parent.classList.add('ImageError');
        }
        observer.unobserve(img);                             // Elements are unobserved using this method.
        }
    });
  }, options);

  target.forEach (ele => {
  observer.observe(ele);                                      // Elements are observed using this method.
})