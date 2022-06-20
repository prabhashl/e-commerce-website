const createNav = () => {
     let nav = document.querySelector('.navbar');

     nav.innerHTML= `
     <div class="navbar">
            <img src="img/dark-logo.png"  class="brand-logo" alt="" style= "position: relative; left: 130px; top: 25px;">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" style= "position: relative; left: 350px; top: -18px;"  placeholder="search-brand, product">
            
                    <button class="search-btn" style= "position: relative; left: 350px; top: -18px;">Search</button>

            </div>

            <a href="#">
                <img alt="" src="img/user.png" style= "position: relative; left: 100px; top: -15px;">
            </a>    
            <a href="#">
                <img src="img/cart.png" alt="" style= "position: relative; left: -160px; top: -15px;">
            </a>
        </div>
              <ul class="links-container">
              <li class="link-items"> <a href="#" class="link">home</a> </li>
              <li class="link-items"> <a href="#" class="link">women</a> </li>
              <li class="link-items"> <a href="#" class="link">men</a> </li>
              <li class="link-items"> <a href="#" class="link">kids</a> </li>
              <li class="link-items"> <a href="#" class="link">accessories</a> </li>
              </ul>

     `;

}

createNav();