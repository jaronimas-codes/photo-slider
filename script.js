"use strict";

const user1 = {
  name: "John Tarkpor",
  profession: "Junior Front-end Developer",
  photo: "./images/image-john.jpg",
  text: `If you want to lay the best foundation possible I’d recommend taking
        this course. The depth the instructors go into is incredible. I now feel
        so confident about starting up as a professional developer.`,
};

const user2 = {
  name: "Tanya Sinclair",
  profession: "UX Engineer",
  photo: "./images/image-tanya.jpg",
  text: `I’ve been interested in coding for a while but never taken the jump, until now. 
  I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
  excited about the future.`,
};

const usersArr = [user1, user2];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const photo = document.getElementById("photo");
const text = document.getElementById("text");
const info = document.getElementById("info");

let currentUser = 0;

next.addEventListener("click", function () {
  if (currentUser < usersArr.length - 1) {
    currentUser++;
  } else {
    currentUser = 0;
  }
  nextUser();
});

prev.addEventListener("click", function () {
  if (currentUser <= usersArr.length - 1 && currentUser !== 0) {
    currentUser--;
  } else {
    currentUser = usersArr.length - 1;
  }
  nextUser();
});

function nextUser() {
  photo.src = `${usersArr[currentUser].photo}`;
  text.innerHTML = `<p class="para" id="paragraph">
        ${usersArr[currentUser].text}
      </p> 
      <div class="info" id="info">
        <span class="name" id="name">${usersArr[currentUser].name}</span>
        <span class="prof" id="profession">${usersArr[currentUser].profession}</span>
      </div>`;
}
