import $ from 'jquery';
import store from './store';
//render function
//funciton that loops through store.dogImages and creates html format for each
//need an event listener
const callDogAPI = function(){
  fetch(`https://dog.ceo/api/breeds/image/random/${store.userNum}`)
    .then(response => response.json())
    .then(responseJSON => parseDogs(responseJSON));
  
};

const parseDogs = function(dogObject){
  store.dogImages = dogObject.message;
  store.dogImages.forEach(dog => console.log(dog));
  console.log('dogs acquired');
};

//const render = function render(){};


const handleSubmitClick = function(){
  $('#js-dog-form').on('submit', event =>{
    event.preventDefault();
    if($('#js-dog-count').val()){
      store.userNum = parseInt($('#js-dog-count').val());
      console.log('you entered a number');
    }
    callDogAPI();
    // calls API for set number of times and adds all of the dog images to an array
    
    //render function
    console.log(store.dogImages);
  });
};
//a call to the api
$(handleSubmitClick());