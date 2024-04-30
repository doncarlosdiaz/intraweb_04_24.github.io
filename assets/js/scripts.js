fetch('pages/header.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('head').innerHTML = html;
      });

fetch('pages/navbar.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('navbar').innerHTML = html;
      });
 
fetch('pages/footer.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('footer').innerHTML = html;
      });