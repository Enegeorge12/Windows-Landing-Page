 // active windows container
 function activeWindows() {
    // let activeWindows = document.getElementById("windowsIcon");
    let windows = document.querySelector(".container");
    if (windows.style.display === "flex") {
      windows.style.display = "none";
      // console.log("inchis");
    } else {
      windows.style.display = "flex";
      // console.log("deschis");
    }
  }
  // time clock
  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#time").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }