  var img = document.getElementById("img0");

  img.addEventListener("click", function(){
    img.classList.toggle("jello-horizontal");
    console.log('clicked');
    img.src="image1.jpg";
  });
  
  function start() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";
    console.log("start");
  }

  function scrollPage2() {
    document.getElementById("secondPage").style.display = "block";
    window.scrollTo(0,1000);
  }

  function scrollPage3() {
    document.getElementById("thirdPage").style.display = "block";
    window.scrollTo(0,2000);
  }

  function scrollPage1() {
    document.getElementById("secondPage").style.display = "none";
    document.getElementById("thirdPage").style.display = "none";
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("startPage").style.display = "block";
    window.scrollTo(0,0);
  }

  