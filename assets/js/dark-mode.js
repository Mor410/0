(function () {

  const button = document.querySelector(
    ".dark-mode-toggle"
  );

  if (!button) return;


  const icon = button.querySelector("i");


  function setMode(mode){

    document.documentElement
      .setAttribute(
        "data-theme",
        mode
      );


    localStorage.setItem(
      "theme",
      mode
    );


    if(mode === "dark"){

      icon.className =
      "fas fa-sun";

    }else{

      icon.className =
      "fas fa-moon";

    }

  }



  const saved =
    localStorage.getItem("theme");


  if(saved){

    setMode(saved);

  }



  button.addEventListener(
    "click",
    function(){

      const current =
        document.documentElement
        .getAttribute("data-theme");


      if(current === "dark"){

        setMode("light");

      }else{

        setMode("dark");

      }

    }
  );


})();