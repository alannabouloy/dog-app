import $ from 'jquery';
import store from './store';
//render function
//funciton that loops through store.dogImages and creates html format for each
//need an event listener
const callDogAPI = function(){
  fetch(`https://dog.ceo/api/breeds/image/random/${store.userNum}`)
    .then(response => response.json)
    .then(responseJSON => parseDogs(responseJSON));
  console.log('API called');
};

const parseDogs = function(dogArray){
  dogArray.message.forEach(dog => {
    store.dogImages.push(dog);
  });
  console.log('dogs acquired');
};

//const render = function render(){};


const handleSubmitClick = function(){
  $('js-submit').on('submit', event =>{
    event.preventDefault();
    if($('#js-dog-count').val()){
      store.userNum = parseInt($('#js-dog-count').val());
    }
    
    for(let i = 0; i < store.userNum; i++){
      store.dogImages = callDogAPI();
      // calls API for set number of times and adds all of the dog images to an array
    }
    //render function
    console.log(store.dogImages);
  });
};
//a call to the api
$(handleSubmitClick());