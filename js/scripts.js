function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the images
    var images = document.getElementsByClassName("choice1")[0];
  
    // If the checkbox is checked, remove the images
    if (checkBox.checked == true){
      images.style.display = "none";
    } else {
      images.style.display = "block";
    }
  }

  function myFunction2() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck2");
    // Get the images
    var images = document.getElementsByClassName("choice2")[0];
    
    // If the checkbox is checked, remove the images
    if (checkBox.checked == true){
      images.style.display = "none";
    } else {
      images.style.display = "block";
    }
  }