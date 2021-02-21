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
    window.scrollTo(0,0);
  }