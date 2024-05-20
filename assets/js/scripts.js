fetch('pages/navbar.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('navbar').innerHTML = html;
      });

      fetch('pages/header.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('header').innerHTML = html;
      });
 
fetch('pages/footer.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('footer').innerHTML = html;
      });

      if (document.getElementById('state1')) {
        const countUp = new CountUp('state1', document.getElementById("state1").getAttribute("countTo"));
        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
        }
      }
      if (document.getElementById('state2')) {
        const countUp1 = new CountUp('state2', document.getElementById("state2").getAttribute("countTo"));
        if (!countUp1.error) {
          countUp1.start();
        } else {
          console.error(countUp1.error);
        }
      }
      if (document.getElementById('state3')) {
        const countUp2 = new CountUp('state3', document.getElementById("state3").getAttribute("countTo"));
        if (!countUp2.error) {
          countUp2.start();
        } else {
          console.error(countUp2.error);
        };
      }

      if (document.getElementById("typed")) {
        var typed = new Typed("#typed", {
          stringsElement: "#typed-strings",
          typeSpeed: 90,
          backSpeed: 50,
          backDelay: 200,
          startDelay: 500,
          loop: true
        });
      }