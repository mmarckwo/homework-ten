
let homeContent = `<div class="hero">
    <div class="nav1">
        <nav>
            <div class="logo"><p>travel-fly</p></div>
            <div class="links">
                <a id="home" href="#">home</a><p>|</p>
                <a id="about" href="#">about</a><p>|</p>
                <a id="tours" href="#">tours</a><p>|</p>
                <a id="special" href="#">special offers</a><p>|</p>
                <a id="blog" href="#">blog</a><p>|</p>
                <a id="contact" href="#">contact</a>
            </div>
        </nav>
    </div>

    <div class="main-text">
        <p>TRAVEL-FLY</p>
    </div>
    <div class="sub-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
        Fugiat aliquid minus nemo sed est.</p>
    </div>
    <div class="button">
            <a href="#"><button>READ MORE</button></a>
    </div>
</div>

<section class="promo-tours">
<div class="promo israel">
    <div class="header">Israel</div>
    <div class="price">
        from $1000
        <div id="israel" class="blue-button">
            <a href="#"><button>LEARN MORE</button></a>
        </div>
    </div>
</div>
<div class="promo usa">
    <div class="header">U.S.A</div>
    <div class="price">
        from $1500
        <div id="usa" class="blue-button">
            <a href="#"><button>LEARN MORE</button></a>
        </div>
    </div>
</div>
<div class="promo australia">
    <div class="header2">AUSTRALIA</div>
    <div class="price">
        <p>from $1800</p>
        <div id="australia" class="blue-button">
            <a href="#"><button>LEARN MORE</button></a>
        </div>
    </div>
</div>
</section>

<section class="booking-form">
<h1>BOOKING FORM</h1>
<div class="form-area">
    <div class="short-input">
        <input type="text" placeholder="name..." />
    </div>
    <div class="long-input">
        <input type="text" placeholder="email..." />
    </div>
    <div class="short-input">
        <input type="text" placeholder="country..." />
    </div>
    <div class="long-input">
        <input type="text" placeholder="hotel..." />
    </div>
    <div class="date-input">
        <input type="text" placeholder="5/10/2020" />
        <label>Check-in</label>
    </div>
    <div class="date-input">
        <input type="text" placeholder="5/20/2020" />
        <label>Check-out</label>
    </div>
    <div class="number-input">
        <label>Adult</label>
        <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <label>Children</label>
        <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <label>Rooms</label>
        <select>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    </div>
    <div class="text-input">
        <textarea placeholder="message..."></textarea>
        <div class="blue-button">
            <a href="#"><button>SUBMIT</button></a>
        </div>
    </div>
</div>
</section>`;

let aboutContent = `<div class="about">
<div class="about-top-section">
    <h1>About:</h1>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
</div>
<div class="about-bottom-section">
    <h3>Client Quotes:</h3>
    <div class="client">
        <div class="client-image client1"></div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <div class="client-name">- Miranda Brown</div>
        </div>
    </div>
    <div class="client">
        <div class="client-image client2"></div>
        <div class="client-quote">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <div class="client-name">- Johnathan Wes</div>
        </div>
    </div>
</div>
</div>`;

let toursContent = `<div class="tour">
<header>
    <span>tours:</span>
</header>

<div class="tours">

    <div class="tourPromo israel">
        <div class="header">Israel</div>
        <div class="price">
            from $1000
        </div>
        <a id="israel" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo usa">
        <div class="header">U.S.A.</div>
        <div class="price">
            from $1500
        </div>
        <a id="usa" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo australia">
        <div class="header2">Australia</div>
        <div class="price">
            from $1800
        </div>
        <a id="australia" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo nz">
        <div class="header2">New Zealand</div>
        <div class="price">
            from $1200
        </div>
        <a id="nz" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo france">
        <div class="header">France</div>
        <div class="price">
            from $2500
        </div>
        <a id="france" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo egypt">
        <div class="header">Egypt</div>
        <div class="price">
            from $900
        </div>
        <a id="egypt" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo japan">
        <div class="header">Japan</div>
        <div class="price">
            from $1300
        </div>
        <a id="japan" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo canada">
        <div class="header">Canada</div>
        <div class="price">
            from $2000
        </div>
        <a id="canada" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

    <div class="tourPromo uae">
        <div class="header">U.A.E</div>
        <div class="price">
            from $3000
        </div>
        <a id="uae" href="#"><span class="promoBtn">LEARN MORE</span></a>
    </div>

</div>

</div>`;

let specialContent = `<div class="special">
<div class="offer">
    <h3>Special Offer(s):</h3>
    <div class="location">
        <div class="location-image location1"></div>
        <div class="location-desc">
            <div class="location-name">
                <h3>Barcelona, Spain</h3>
                <div class="location-discount">
                    (20% off!)
                </div>
            </div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  
            </p>
            <a id="spain" href="#"><div class="location-button">LEARN MORE</div></a>
        </div>
    </div>
    <div class="location">
        <div class="location-image location2"></div>
        <div class="location-desc">
            <div class="location-name">
                <h3>Bangkok, Thailand</h3>
                <div class="location-discount">
                    (10% off!)
                </div>
            </div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </p>
            <a id="thailand" href="#"><div class="location-button">LEARN MORE</div></a>
        </div>
    </div>
</div>
</div>`;

let blogContent = `<div class="blog">
<div class="post-area">
    <h3>Blog:</h3>
    <div class="posts">
        <div class="date-box">
            <div class="date">
                <b>06</b>
            </div>
            <div class="month">
                JUN
            </div>
        </div>
        <div class="post-image post-image1">
            <div class="post-text">
                <div class="upper-text">
                    Sed et persipiatis unde omnis iste natus
                </div>
                <div class="lower-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
            </div>
        </div>
    </div>

    <div class="posts">
        <div class="date-box">
            <div class="date">
                <b>23</b>
            </div>
            <div class="month">
                JUL
            </div>
        </div>
        <div class="post-image post-image2">
            <div class="post-text">
                <div class="upper-text">
                    Sed et persipiatis unde omnis iste natus
                </div>
                <div class="lower-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
            </div>
        </div>
    </div>
</div>
</div>`;

let contactContent = `<div class="contact">
<h3>Contact Us:</h3>
<div class="contact-area">
    <div class="map-area">
        <div class="contact-map map-image">
            <div class="contact-info">
                <div class="contact-text">
                    travel-fly Inc.<br>
                    8901 Marmora Road,<br>
                    Glasgow, D04 89GR.<br>
                    Freephone:+1 800 559 6580<br>
                    Telephone:+1 800 603 6035<br>
                    FAX:+1 800 889 9898<br>
                    E-mail: mail@travelfly.org<br>
                </div>
            </div>
        </div>
    </div>

    <div class="form-area">
        <input type="text" placeholder="Your name..." />
        <input type="text" placeholder="Email Address..." />
        <input type="text" placeholder="Company..." />
        <textarea placeholder="Message..."></textarea>
        <a href="#"><div class="send-button">SEND MESSAGE</div></a>
    </div>
</div>
</div>`

let ausContent = `<div class="tour-package">
<div class="header australiaH">
    <div class="upper-text">
        Australia tour package:
    </div>
    <div class="lower-text">
        Starting from $1800 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image aus1"></div>
    <div class="image aus2"></div>
    <div class="image aus3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let canadaContent = `<div class="tour-package">
<div class="header canadaH">
    <div class="upper-text">
        Canada tour package:
    </div>
    <div class="lower-text">
        Starting from $2000 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image canada1"></div>
    <div class="image canada2"></div>
    <div class="image canada3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let egyptContent = `<div class="tour-package">
<div class="header egyptH">
    <div class="upper-text">
        Egypt tour package:
    </div>
    <div class="lower-text">
        Starting from $900 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image egypt1"></div>
    <div class="image egypt2"></div>
    <div class="image egypt3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let franceContent = `<div class="tour-package">
<div class="header franceH">
    <div class="upper-text">
        France tour package:
    </div>
    <div class="lower-text">
        Starting from $2500 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image france1"></div>
    <div class="image france2"></div>
    <div class="image france3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let israelContent = `<div class="tour-package">
<div class="header israelH">
    <div class="upper-text">
        Israel tour package:
    </div>
    <div class="lower-text">
        Starting from $1000 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image israel1"></div>
    <div class="image israel2"></div>
    <div class="image israel3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let japanContent = `<div class="tour-package">
<div class="header japanH">
    <div class="upper-text">
        Japan tour package:
    </div>
    <div class="lower-text">
        Starting from $1300 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image japan1"></div>
    <div class="image japan2"></div>
    <div class="image japan3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let nzContent = `<div class="tour-package">
<div class="header nzH">
    <div class="upper-text2">
        New Zealand tour package:
    </div>
    <div class="lower-text">
        Starting from $1200 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image nz1"></div>
    <div class="image nz2"></div>
    <div class="image nz3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let uaeContent = `<div class="tour-package">
<div class="header uaeH">
    <div class="upper-text">
        U.A.E. tour package:
    </div>
    <div class="lower-text">
        Starting from $3000 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image uae1"></div>
    <div class="image uae2"></div>
    <div class="image uae3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

let usaContent = `<div class="tour-package">
<div class="header usaH">
    <div class="upper-text">
        U.S.A. tour package:
    </div>
    <div class="lower-text">
        Starting from $1500 (prices may vary)
    </div>
</div>

<div class="images">
    <div class="image usa1"></div>
    <div class="image usa2"></div>
    <div class="image usa3"></div>
</div>

<div class="days">
    <div class="days-section">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
    <div class="days-section">
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    </div>
</div>

<div class="button">
    <a href="#"><span class="promoBtn">BOOK NOW</span></a>
</div>
</div>`

function getPageContent (pageID, callback) {
    $("#app").html(eval(pageID));
    if (callback) callback();
};

export { getPageContent };