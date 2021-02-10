const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav setup//

navLinks = document.querySelectorAll ('nav a');

navArray = Array.from(navLinks);

console.log(navArray);

// end nav setup//

//start a link assignment

services = navArray[0];
services.textContent = "Services";

product = navArray[1];
product.textContent = "Product";

vision = navArray[2];
vision.textContent = "Vision";

features = navArray[3];
features.textContent = "Features";

about = navArray[4];
about.textContent = "About";

about = navArray[5];
about.textContent = "Contact";

// end a link assignment

ctaImg = document.getElementById('cta-img');

//add CTA image

ctaImg.src = "img/header-img.png";

// end add CTA image

//CTA H1 

ctaH1 = document.querySelector('h1');

ctaH1.textContent = "DOM IS AWESOME";

ctaH1.style.display = "inline-block";

ctaH1.style.textColor = "black";

//style CTA button 

buttonCTA = document.querySelector('.cta .cta-text button');

console.log(buttonCTA);

buttonCTA.textContent = "Get Started";

buttonCTA.style.textColor = "white";

// end CTA styles


// featuresExcerpt 

topContent = document.querySelectorAll(".top-content .text-content");

topContentArr = Array.from(topContent);

features = topContentArr[0];

features.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

about = topContentArr[1];

console.log(topContentArr)

about.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// end featuresExcerpt

featureHeading = document.createElement('h1');
featureHeading.textContent = "Features";

features.prepend(featureHeading);

aboutHeading = document.createElement('h1');
aboutHeading.textContent = "About";

about.prepend(aboutHeading);

// end text content

// start middle img src

middleImg = document.querySelector('img.middle-img')

middleImg.src = "img/mid-page-accent.jpg"

// end middle img src 



// featuresExcerpt 

bottomContent = document.querySelectorAll(".bottom-content .text-content");



bottomContentArr = Array.from(bottomContent);

services = bottomContentArr[0];

services.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

services.style.marginRight = "20px";


product = bottomContentArr[1];

product.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

product.style.marginRight = "20px";

vision = bottomContentArr[2];

vision.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// end featuresExcerpt

servicesHeading = document.createElement('h2');
servicesHeading.textContent = "Services";

services.prepend(servicesHeading);

productHeading = document.createElement('h2');
productHeading.textContent = "Product";

product.prepend(productHeading);

visionHeading = document.createElement('h2');
visionHeading.textContent = "Vision";

vision.prepend(visionHeading);


// end text content

//footer setup

contact = document.querySelector('footer p');

contact.style.textAlign = "left";

contactHeading = document.createElement('h3');

contactAddress = document.createElement('p');

contactCityState = document.createElement('p');

contactPhone = document.createElement('p');

contactEmail = document.createElement('p');


contactHeading.textContent = "Contact";

contactAddress.textContent = "123 Way 456 Street";

contactCityState.textContent = "Somewhere, USA";

contactCityState.style.marginBottom = "1rem";

contactPhone.textContent = "1 (888) 888-8888";

contactPhone.style.marginBottom = "1rem";

contactEmail.textContent = "sales@greatidea.io";

contactEmail.style.marginBottom = "1rem";




contact.appendChild(contactHeading);

contact.appendChild(contactAddress);

contact.appendChild(contactCityState);

contact.appendChild(contactPhone);

contact.appendChild(contactEmail);

//add copyright at bottom

footerCopyright = document.querySelector('footer');

footerCopy = document.createElement('p');

footerCopy.textContent = "Copyright Great Idea! 2018";

footerCopyright.appendChild(footerCopy);




// const services = document.querySelector('nav a');

// services.textContent = "Services";