$('.option').click(function () {
  $('.option').removeClass('active');
  $(this).addClass('active');
});

/**
 * Funtion to switch between dark and light mode
 */
function myFunction() {
  var element = document.body;
  element.classList.toggle('dark-mode');
}

/**
 * Funtion to make the navigation.
 * @param {*} elem is the id of the card, which is double clicked
 */
function navigate(elem) {
  switch (elem.id) {
    case 'portfolio':
      window.location.href =
        'https://juanfrancisco21.github.io/Portfolio/';
      break;
    case 'kaze':
      window.location.href =
        'https://juanfrancisco21.github.io/K-A-Z-E/';
      break;
    case 'cofradia':
      window.location.href =
        'https://juanfrancisco21.github.io/Cofradia/';
      break;
    case 'github':
      window.location.href =
        'https://github.com/JuanFrancisco21';
      break;
    case 'linkedin':
      window.location.href =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;

    default:
      window.location.href =
        'http://www.linkedin.com/in/juan-fco-aguilar-sanchez/';
      break;
  }
}

/**
 * Funciont to switch between two background videos 
 */
function change_video() {
  var element = document.getElementById("video_2");

  if (element.classList.contains('hidden')) {
    element.classList.add("visible");
    element.classList.remove("hidden")
  }else{
    
    element.classList.add("hidden");
    element.classList.remove("visible")
  }
}
