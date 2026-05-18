import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





/* ========================= */
/* FIREBASE CONFIG */
/* ========================= */

const firebaseConfig = {
  apiKey: "AIzaSyCnILqdJ6lT8bIIqp2PZGFTrurR_ooFT6o",
  authDomain: "koborio-ratings.firebaseapp.com",
  projectId: "koborio-ratings",
  storageBucket: "koborio-ratings.firebasestorage.app",
  messagingSenderId: "820828629283",
  appId: "1:820828629283:web:6476fe11eb426c8fabc496",
  measurementId: "G-3603QRC8JC"
};





/* ========================= */
/* INITIALIZE */
/* ========================= */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);





/* ========================= */
/* STAR SYSTEM */
/* ========================= */

let selectedRating = 0;

const stars = document.querySelectorAll('.star');

stars.forEach(star=>{

  star.addEventListener('click',()=>{

    selectedRating = star.dataset.value;

    stars.forEach(s=>s.classList.remove('active'));

    for(let i=0;i<selectedRating;i++){

      stars[i].classList.add('active');
    }

  });

});





/* ========================= */
/* SUBMIT REVIEW */
/* ========================= */

window.submitReview = async function(){

  const name =
    document.getElementById('name').value;

  const collectionName =
    document.getElementById('collection').value;

  const review =
    document.getElementById('review').value;

  if(
    !name ||
    !review ||
    selectedRating == 0
  ){

    alert("Please complete all fields.");

    return;
  }

  try{

    await addDoc(

      collection(db,'reviews'),

      {

        name:name,

        collection:collectionName,

        review:review,

        rating:selectedRating,

        createdAt:Date.now()

      }

    );

    alert("Review Submitted Successfully!");

    document.getElementById('name').value = '';

    document.getElementById('review').value = '';

    loadReviews();

  }

  catch(error){

    console.log(error);

    alert("Error submitting review.");

  }

};





/* ========================= */
/* LOAD REVIEWS */
/* ========================= */

async function loadReviews(){

  const reviewsContainer =
    document.getElementById('reviewsContainer');

  reviewsContainer.innerHTML = '';

  const q = query(

    collection(db,'reviews'),

    orderBy('createdAt','desc')

  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc)=>{

    const data = doc.data();

    reviewsContainer.innerHTML += `

      <div class="review-card">

        <span class="review-badge">
          ${data.collection}
        </span>

        <h3>
          ${data.name}
        </h3>

        <div class="review-stars">
          ${'★'.repeat(data.rating)}
        </div>

        <p class="review-text">
          ${data.review}
        </p>

      </div>

    `;

  });

}





/* ========================= */
/* INITIAL LOAD */
/* ========================= */

loadReviews();