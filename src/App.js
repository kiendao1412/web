function isStickySupported() {
  const element = document.createElement('div');
  element.style.position = 'sticky';
  return element.style.position === 'sticky';
}

// Xử lý navbar
function handleNavbar() {
  const navbar = document.getElementById('navbar');
  
  if (!isStickySupported()) {
      // Nếu không hỗ trợ sticky, chuyển sang fixed
      navbar.classList.remove('sticky');
      
      window.addEventListener('scroll', function() {
          if (window.scrollY > 0) {
              navbar.classList.add('fixed');
          } else {
              navbar.classList.remove('fixed');
          }
      });
  }
}

// Chạy khi trang tải xong
window.addEventListener('load', handleNavbar);


