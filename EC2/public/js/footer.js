const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
   
</div>
<p class="footer-title">about company</p>
<p class="info">Clothing began from an inspired commitment to provide women with timely and timeless style, extraordinary quality and memorable service. We are the original New England lifestyle brand for women who love looking well put together, with sizes for every body.

    In 1947, Nancy and Rudy Talbot, two entrepreneurial New Englanders, created a clothing catalog with a highly dedicated and passionate following—treasured for its spirited voice and modern classic style. Soon they moved into a historic house in Hingham, Massachusetts, a quaint and picturesque town on the South Shore outside of Boston, where they painted the front door a welcoming red to signal hospitality.
    
    Today, Talbots is a dynamic women-led fashion brand offering smile-worthy style for every area of your life.
    
    
    
    </p>
    
    `;
}

createFooter();