const modalbtn1 = document.querySelector("#modalbtn1");
const modalbtn2 = document.querySelector("#modalbtn2");
const modalbtn3 = document.querySelector("#modalbtn3");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modal = document.querySelector("#modal");
const modalBodyText = modal.querySelector(".modal-body p");
const modalBodyTitle = modal.querySelector(".modal-header h3");

modalbtn1.addEventListener("click", function() {
  const data = getContent("web");
  modalBodyTitle.textContent = data.title;
  modalBodyText.textContent = data.text;
  modal.classList.toggle("visually-hidden");
});

modalbtn2.addEventListener("click", function() {
  const data = getContent("frontend");
  modalBodyTitle.textContent = data.title;
  modalBodyText.textContent = data.text;
  modal.classList.toggle("visually-hidden");
});

modalbtn3.addEventListener("click", function() {
  const data = getContent("backend");
  modalBodyTitle.textContent = data.title;
  modalBodyText.textContent = data.text;
  modal.classList.toggle("visually-hidden");
});

closeModalBtn.onclick = function() {
  modal.classList.toggle("visually-hidden");
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-overlay")) {
    modal.classList.toggle("visually-hidden");
  }
});

function getContent(contentType) {
  switch (contentType) {
    case "web":
      return {
        title: "What Does Web Mean?",
        text: "The Web is the common name for the World Wide Web, a subset of the Internet consisting of the pages that can be accessed by a Web browser. Many people assume that the Web is the same as the Internet, and use these terms interchangeably. However, the term Internet actually refers to the global network of servers that makes the information sharing that happens over the Web possible. So, although the Web does make up a large portion of the Internet, but they are not one and same."
      };
    case "frontend":
      return {
        title: "What is Frontend?",
        text: "The frontend is everything a user sees and interacts with when they click on a link or type in a web address. The web address is also known as at URL, or Uniform Resource Locator, and it tells what webpage should load and appear in your browser.\n" +
          "\n" +
          "It is the client-side part of a web application.\n" +
          "\n" +
          "For example, take this article. There is an associated cover picture, and you are now reading through the text.\n" +
          "\n" +
          "At the top of the page, you can also see freeCodeCamp's logo. There is a navigation bar with a link to freeCodeCamp's forum and a button to donate.\n" +
          "\n" +
          "There is also a search box. You can enter a keyword to search for an article on a topic that interests you.\n" +
          "\n" +
          "There is a link to click, which will take you to lessons and certifications that will help you learn to code for free.\n" +
          "\n" +
          "All the above represent the frontend of the web page you're viewing."
      };
    case "backend":
      return {
        title: "What is Backend?",
        text: "Backend development deals with the technologies responsible for storing and securely manipulating user data.\n" +
          "\n" +
          "It is the part associated with all the hidden logic that powers the applications users interact with.\n" +
          "\n" +
          "Backend is considered the server-side part of an application.\n" +
          "\n" +
          "Backend is all the hidden inner workings and the behind-the-scenes processes in a web application.\n" +
          "\n" +
          "It refers to everything going on underneath the hood and all the necessary components that make the front-end function properly and smoothly.\n" +
          "\n" +
          "It makes sure everything is working optimally.\n" +
          "\n" +
          "Essentially, the backend is what the users don't have direct access to or don't directly interact with and are most likely unaware of when using an application."
      };
  }
}