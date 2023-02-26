    var _homeContent = ` <div class="home-wrapper">
    <div class="image">
      <h1>HOME</h1>
    </div>
    <p class="home-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
      voluptatum odit, nihil alias, dolor ipsam at hic aliquam nulla placeat
      consequuntur? Eligendi, magni optio aliquid magnam nobis consequatur
      aut, eaque, est qui nesciunt fuga animi nulla at ab explicabo.
      Consectetur totam laboriosam soluta cupiditate, ea deleniti molestiae
      odio. Consequuntur ipsum dolore, ullam molestiae maiores temporibus
      ipsa? Libero commodi placeat odit autem, voluptatem reprehenderit
      doloremque voluptates! Sint nobis quibusdam soluta accusamus debitis
      ab odit quae ut aut ullam fuga, nostrum ipsa praesentium quis earum
      porro officia adipisci dolore est quaerat. Tempore ullam soluta dicta,
      ratione tempora distinctio quaerat assumenda perferendis ex.
    </p>
  </div>
  <div class="home-images-wrapper">
    <div class="home-image1"></div>
    <div class="home-image2"></div>
    <div class="home-image3"></div>
  </div>
  <div class="footer">
   <footer>
    <a id="home" href="#">HOME</a>
    <a id="about" href="#">ABOUT</a>
    <a id="products" href="#">PRODUCTS</a>
    <a id="contact" href="#">CONTACT</a>
   </footer>
  </div>`;
var _aboutContent = `  <div class="about-wrapper">
<h1>About Us</h1>
<div class="about-image"></div>
<div class="about-text">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta iste
  odit tenetur, cupiditate iure at voluptates amet nemo fugiat minima
  adipisci labore architecto nisi molestias? Ratione et nulla, qui
  laboriosam accusamus repellendus explicabo minima aut porro possimus
  amet nobis modi! Doloribus, nulla, molestias ratione alias officiis
  autem ducimus esse temporibus illo est provident architecto rem
  aliquid quo voluptatem voluptates nam exercitationem. In sed aliquam
  repudiandae illum velit suscipit perspiciatis eaque. Quos voluptatem
  explicabo eveniet quasi eligendi, placeat magnam soluta distinctio
  consequatur natus ut ea cumque modi unde adipisci temporibus
  repellendus consectetur dignissimos itaque nemo consequuntur, error,
  perspiciatis minus est. Eos voluptatem numquam unde repellendus quas?
  Laboriosam totam doloremque adipisci similique ex dolorum, quidem
  repudiandae numquam recusandae quibusdam, sint tempore vitae
  laudantium voluptates dicta quos ullam placeat consequatur libero
  assumenda maxime eius quod velit sunt! Repudiandae rerum sed ipsum
  iusto voluptatibus itaque aspernatur doloremque sequi! Sed reiciendis
  doloribus debitis, repellendus, quidem eligendi molestias temporibus
  voluptate perferendis ipsum, nulla quis quibusdam necessitatibus
  praesentium asperiores sit optio? Quibusdam laborum eum dignissimos,
  sed voluptates cupiditate animi eligendi tempore eaque exercitationem
  itaque optio est, nihil non id voluptatem? Ipsa maxime architecto
  molestias cumque veritatis animi eveniet dolores corporis aliquid?
</div>
</div>
<div class="footer">
<footer>
 <a id="home" href="#">HOME</a>
 <a id="about" href="#">ABOUT</a>
 <a id="products" href="#">PRODUCTS</a>
 <a id="contact" href="#">CONTACT</a>
</footer>
</div>`;
var _productsContent = ` <div class="products-wrapper">
<h1>Products</h1>
<div class="product-images">
  <div class="product1">Jacksonville Jaguars Logo. $45</div>
  <div class="product2">Philadelphia Eagles Logo. $55</div>
  <div class="product3">Carolina Panthers Logo. $30</div>
</div>
<div class="product-images2">
  <div class="product4">Arizona Cardinals Logo. $35</div>
  <div class="product5">New England Patriots Logo. $0.99</div>
  <div class="product6">Pittsburgh Steelers Logo. $60</div>
</div>
</div>
<div class="footer">
<footer>
 <a id="home" href="#">HOME</a>
 <a id="about" href="#">ABOUT</a>
 <a id="products" href="#">PRODUCTS</a>
 <a id="contact" href="#">CONTACT</a>
</footer>
</div>`;
var _contactContent = `<div class="contact-wrapper">
<div class="contact-hero"></div>
<div class="contact-form">
  <input type="text" placeholder="Your name..." />
  <input type="text" placeholder="Email Address..." />
  <input type="text" placeholder="Phone Number..." />
  <input type="text" placeholder="Message..." style="height: 150px" />
</div>
<div class="learn-more">Send Message</div>
</div>
<div class="footer">
<footer>
 <a id="home" href="#">HOME</a>
 <a id="about" href="#">ABOUT</a>
 <a id="products" href="#">PRODUCTS</a>
 <a id="contact" href="#">CONTACT</a>
</footer>
</div>`;

export var fn = "Zach";

export function updateView(pageName) {
    console.log("Model " + pageName);
    var pageContent = "_" + pageName;
     $("#app").html(eval(pageContent));
}