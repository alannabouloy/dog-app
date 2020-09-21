import $ from 'jquery';
import store from './store';
//render function
//funciton that loops through store.dogImages and creates html format for each
//need an event listener
const callDogAPI = function(){
  fetch(`https://dog.ceo/api/breed/${store.userBreed}/images/random`)
    .catch(error => alert('404: Oh no! We could not find this breed :('))
    .then(response => response.json())
    .then(responseJSON => parseDogs(responseJSON));
    
  
};

const parseDogs = function(dogObject){
  store.dogImages = dogObject.message;
  store.imageTemplates.push(createTemplate(store.dogImages));
  render();
  console.log('dogs acquired');
};

const createTemplate = function(imageURL){
  console.log('template created');
  return `<div><img src = '${imageURL}' width = '200px' height = '200px alt='cute dog photo'></div>`;
};

const createHTMLString = function(){
  let HTMLString = '';
  store.imageTemplates.forEach(template => HTMLString = `${HTMLString}${template}`);
  console.log('string created');
  return HTMLString;
};
const render = function(){
  $('.dog-imgs').html(createHTMLString());
  console.log('rendered');
};


const handleSubmitClick = function(){
  $('#js-dog-form').on('submit', event =>{
    event.preventDefault();
    if($('#js-dog-count').val()){
      store.userBreed = $('#js-dog-count').val();
      console.log('you entered a breed');
    }
    callDogAPI();
    // calls API for set number of times and adds all of the dog images to an array
    
    //render function
    console.log('you submitted a breed!');
  });
};
//a call to the api
$(handleSubmitClick());