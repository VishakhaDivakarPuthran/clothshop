  
        const products = [
            {
                id: 1,
                name: 'Elegant Dress',
                price: 5999,
                description: 'Perfect for evening occasions, made with premium fabric.',
                image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTsOQQ0JxkBkqUylRkcuR-0khwub8Ftcs4T8_I9EZR3wmD-asWw0KSr3VDjP59vYrfbDE4ZloL49NqKmxybyhy9PBx1cYKgNaOH1txPYnLNmjm1D8NVUyJwdWMlCnXMeEyWalFJmZoZ0vA&usqp=CAc'
            },
            {
                id: 2,
                name: 'Classic Jeans',
                price: 3999,
                description: 'Durable jeans that never go out of style.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCznRuEXpCYqptHvWWkF4xOPoRQAUf8TWfA&s'
            },
            {
                id: 3,
                name: 'Formal Blazer',
                price: 8999,
                description: 'A sleek blazer for a professional look.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5lNTTslE8tAxrahY0bnS5PyNmPLTQ3ZbMRQ&s'
            },
            {
                id: 4,
                name: 'Floral Skirt',
                price: 2499,
                description: 'A flowy floral skirt for summer.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtfA-4x0i3g01QnhdSg8QhrX0cYa8RzQygg&s'
            },
            {
                id: 5,
                name: 'Casual T-shirt',
                price: 1999,
                description: 'Comfortable and stylish T-shirt for casual outings.',
                image: 'https://placehold.co/350x350/blue/white?text=Casual+T-shirt'
            },
            {
                id: 6,
                name: 'Knitted Sweater',
                price: 2999,
                description: 'Cozy wool sweater to keep you warm during winter.',
                image : 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a25pdHRlZCUyMHN3ZWV0ZXJ8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 7,
                name: 'Silk Scarf',
                price: 999,
                description: 'A luxurious silk scarf to enhance any outfit.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXgzPNLPcFWZpccjhQ2Q1uDcmXmWAB3PmOg&s'

            },
            {
                id: 8,
                name: 'Classic Blazer',
                price: 9999,
                description: 'A classic blazer for a timeless look.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysQYFNNhVpHmYtJAdv5NsXDGLi-TQ-_XesA&s'
            }
        ];

          const productsElement = document.getElementById("products");
          
          /**
           * Function to create and append an element with attributes and content
           * @param {string} tagName - HTML tag name
           * @param {object} attributes - Attributes for the element
           * @param {string} content - Inner HTML content
           * @param {string} parentSelector - Selector of the parent element
           */
          function createAndAppendElement(tagName, attributes = {}, content = "", parentSelector = "body") {
            const element = document.createElement(tagName);
            Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
            element.innerHTML = content;
            document.querySelector(parentSelector).appendChild(element);
          }
          
          // Dynamically populate the products section
          products.forEach((product) => {
            createAndAppendElement("div", { class: "col-md-4 mb-4", id: `product-${product.id}` }, "", "#products");
          
            createAndAppendElement(
              "div",
              { class: "card h-100" },
              `
                <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <p class="card-text">Price: $${product.price.toFixed(2)}</p>
                  <button class="btn btn-secondary" onclick="addToCart(${product.id})">Buy Now</button>
                  <button class="btn btn-primary" onclick="viewDetails(${product.id})">View Details</button>
                </div>
              `,
              `#product-${product.id}`
            );
          });
          
          // Example functions for button actions
          function addToCart(productId) {
            alert(`Product ${productId} added to cart.`);
          }
          
          function viewDetails(productId) {
            const product = products.find((p) => p.id === productId);
            alert(`Details:\nName: ${product.name}\nDescription: ${product.description}\nPrice: $${product.price}`);
          }

          const enquiryForm = document.getElementById("enquiryForm");

function validation({ firstName, mobile, email, product, enquiryMessage }) {
  let isValid = true;
  let errorMessages = [];
  document.getElementById("errorMessages").innerHTML = "";

  // Validate firstName
  if (firstName.length < 2) {
    isValid = false;
    errorMessages.push("First Name must be at least 2 characters long");
  }
  if (firstName.length > 20) {
    isValid = false;
    errorMessages.push("First Name must be less than 20 characters.");
  }


  // Validate mobile number
  const mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    isValid = false;
    errorMessages.push("Mobile number must be 10 digits long.");
  }

  // Validate email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push("Please enter a valid email address.");
  }

  // Validate selected product
  const productOptions = [
    "Casual T-shirt",
    "Formal Blazer",
    "Floral Skirt",
    "Classic Blazer",
    "Elegant Dress",
    "Classic Jeans",
  ];
  if (!productOptions.includes(product)) {
    isValid = false;
    errorMessages.push("Please select a valid product.");
  }

  // Validate enquiry message
  if (enquiryMessage.length < 10) {
    isValid = false;
    errorMessages.push("Enquiry Message must be at least 10 characters long.");
  }
  if (enquiryMessage.length > 1024) {
    isValid = false;
    errorMessages.push("Enquiry Message must be less than 1024 characters long.");
  }

  // Display error messages
  if (!isValid) {
    errorMessages.forEach((message) => {
      createAndAppendElement(
        "div",
        { class: "alert alert-danger", role: "alert" },
        message,
        "#errorMessages"
      );
    });
  }
  return isValid;
}

enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = event.target.elements.firstName.value.trim();
  const mobile = event.target.elements.mobile.value.trim();
  const email = event.target.elements.email.value.trim();
  const product = event.target.elements.product.value.trim();
  const enquiryMessage = event.target.elements.enquiryMessage.value.trim();

  if (validation({ firstName, mobile, email, product, enquiryMessage })) {
    fetch('https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZjMDYzZjA0MzU1MjY1NTUzMDUxMzUi_pc', 
      {
      method: "POST",
      body: JSON.stringify({
        firstName,
        mobile,
        email,
        product,
        enquiryMessage,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Enquiry submitted successfully");
          createAndAppendElement(
            "div",
            { class: "alert alert-success", role: "alert" },
            "We have received your enquiry and will get back to you!",
            "#successMessage"
          );
          enquiryForm.reset();
        } else {
          console.error("Failed to submit enquiry");
          alert("Failed to submit enquiry");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while submitting your enquiry.");
      });
  }
});

/**
 * Utility function to create and append elements
 */
function createAndAppendElement(tagName, attributes = {}, content = "", parentSelector = "body") {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  element.innerHTML = content;
  document.querySelector(parentSelector).appendChild(element);
}

          
          
        
