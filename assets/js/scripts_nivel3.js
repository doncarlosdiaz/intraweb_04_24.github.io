fetch('../../pages/services/navbar_service.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('navbar_service').innerHTML = html;
      });
 
fetch('../../pages/footer.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('footer').innerHTML = html;
      });