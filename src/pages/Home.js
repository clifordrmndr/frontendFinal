export default function Home(){
    return(
      <div>
  <header id="header">
    <nav id="main-nav" className="navbar navbar-default navbar-fixed-top" role="banner">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
        </div>
        <div className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            <li className="scroll active"><a href="#home">Home</a></li> 
            <li className="scroll"><a href="#about">About</a></li>
            <li className="scroll"><a href="#services">Services</a></li>
            <li className="scroll"><a href="#portfolio">Portfolio</a></li>
            <li className="scroll"><a href="#our-team">Team</a></li>
            <li className="scroll"><a href="#pricing">Pricing</a></li>
            <li className="scroll"><a href="#contact-us">Contact</a></li>                        
          </ul>
        </div>
      </div>{/*/.container*/}
    </nav>{/*/nav*/}
  </header>{/*/header*/}
  <section id="hero-banner">
    <div className="banner-inner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>Start up to Successful Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore.</p>
            <a className="btn btn-primary btn-lg" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/*/#main-slider*/}
  <section className="download-now" id="getstarted">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Our Product</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row">
        <div className="col-md-8 wp1 animated fadeInUp"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
          <a href="#" className="download-btn">Download Now</a>
        </div>
      </div>
    </div>
  </section>
  <section id="about">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">About Us</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row">
        <div className="col-sm-6 wow fadeInLeft">
          <img className="img-responsive" src="images/about.png" alt />
        </div>
        <div className="col-sm-6 wow fadeInRight">
          <h3 className="column-title">Our Company</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa semper aliquam quis mattis quam. Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
          <p>Nulla eu neque commodo, dapibus dolor eget, dictum arcu. In nec purus eu tellus consequat ultricies. Donec feugiat tempor turpis, rutrum sagittis mi venenatis at. Sed molestie lorem a blandit congue. Ut pellentesque odio quis leo volutpat, vitae vulputate felis condimentum. </p>
          <p>Praesent vulputate fermentum lorem, id rhoncus sem vehicula eu. Quisque ullamcorper, orci adipiscing auctor viverra, velit arcu malesuada metus, in volutpat tellus sem at justo.</p>
          <a className="btn btn-primary" href="#">Learn More</a>
        </div>
      </div>
    </div>
  </section>{/*/#about*/}
  <section id="services">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Our Services</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row">
        <div className="features">
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="0ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-futbol-o" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Mobile App</h4>
                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="100ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-compass" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Custom App</h4>
                <p>Backed by some of the biggest names in the industry, Firefox OS is an open platform that fosters greater</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="200ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-database" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">E-Commerce</h4>
                <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="300ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-bar-chart" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">CMS App</h4>
                <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-paper-plane-o" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Product Dev</h4>
                <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
          <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="300ms" data-wow-delay="500ms">
            <div className="media service-box">
              <div className="pull-left">
                <i className="fa fa-bullseye" />
              </div>
              <div className="media-body">
                <h4 className="media-heading">SharePoint</h4>
                <p>Morbi vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus ut euismod massa, eu eleifend ipsum.</p>
              </div>
            </div>
          </div>{/*/.col-md-4*/}
        </div>
      </div>{/*/.row*/}    
    </div>{/*/.container*/}
  </section>{/*/#services*/}
  <section id="portfolio">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Our Works</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="text-center">
        <ul className="portfolio-filter">
          <li><a className="active" href="#" data-filter="*">All Works</a></li>
          <li><a href="#" data-filter=".designing">Designing</a></li>
          <li><a href="#" data-filter=".mobile">Mobile App</a></li>
          <li><a href="#" data-filter=".development">Development</a></li>
        </ul>{/*/#portfolio-filter*/}
      </div>
      <div className="portfolio-items">
        <div className="portfolio-item designing">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/01.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/01.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item mobile development">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/02.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/02.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item designing">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/03.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/03.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/04.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/04.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item designing development">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/05.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/05.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/06.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/06.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item designing development">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/07.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/07.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
        <div className="portfolio-item mobile">
          <div className="portfolio-item-inner">
            <img className="img-responsive" src="images/portfolio/08.jpg" alt />
            <div className="portfolio-info">
              <h3>Project Name</h3>
              Some description..
              <a className="preview" href="images/portfolio/08.jpg" rel="prettyPhoto"><i className="fa fa-eye" /></a>
            </div>
          </div>
        </div>{/*/.portfolio-item*/}
      </div>
    </div>{/*/.container*/}
  </section>{/*/#portfolio*/}
  <section id="our-team">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Amazing Team</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row text-center">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
            <div className="team-img">
              <img className="img-responsive" src="images/team/01.jpg" alt />
            </div>
            <div className="team-info">
              <h3>John Deo</h3>
              <span>Founder</span> 
            </div> 
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
            <div className="team-img">
              <img className="img-responsive" src="images/team/02.jpg" alt />
            </div>
            <div className="team-info">
              <h3>Mike Timobbs</h3>
              <span>President</span> 
            </div> 
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
            <div className="team-img">
              <img className="img-responsive" src="images/team/03.jpg" alt />
            </div>
            <div className="team-info">
              <h3>Remo Silvaus</h3>
              <span>Architect</span> 
            </div> 
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="team-member wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
            <div className="team-img">
              <img className="img-responsive" src="images/team/04.jpg" alt />
            </div>
            <div className="team-info">
              <h3>Niscal Deon</h3>
              <span>Manager</span> 
            </div> 
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>{/*/#our-team*/}
  <section id="business-stats">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Business Stats</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row text-center">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="0ms">
            <div className="business-stats" data-digit={6850} data-duration={1000} />
            <strong>Clients</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="100ms">
            <div className="business-stats" data-digit={1465} data-duration={1000} />
            <strong>Completed</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="200ms">
            <div className="business-stats" data-digit={4325} data-duration={1000} />
            <strong>In Progress</strong>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow fadeInUp" data-wow-duration="400ms" data-wow-delay="300ms">
            <div className="business-stats" data-digit={2568} data-duration={1000} />
            <strong>Revenue</strong>
          </div>
        </div>
      </div>
    </div>
  </section>{/*/#business-stats*/}
  <section id="pricing">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Pricing</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="0ms">
            <ul className="pricing">
              <li className="plan-header">
                <div className="price-duration">
                  <span className="price">
                    $45
                  </span>
                  <span className="duration">
                    per month
                  </span>
                </div>
                <div className="plan-name">
                  Basic
                </div>
              </li>
              <li><strong>1</strong> DOMAIN</li>
              <li><strong>100GB</strong> DISK SPACE</li>
              <li><strong>UNLIMITED</strong> BANDWIDTH</li>
              <li>SHARED SSL CERTIFICATE</li>
              <li><strong>10</strong> EMAIL ADDRESS</li>
              <li><strong>24/7</strong> SUPPORT</li>
              <li className="plan-purchase"><a className="btn btn-primary" href="#">Get It Now!</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="200ms">
            <ul className="pricing featured">
              <li className="plan-header">
                <div className="price-duration">
                  <span className="price">
                    $85
                  </span>
                  <span className="duration">
                    per month
                  </span>
                </div>
                <div className="plan-name">
                  Business
                </div>
              </li>
              <li><strong>5</strong> DOMAIN</li>
              <li><strong>500GB</strong> DISK SPACE</li>
              <li><strong>UNLIMITED</strong> BANDWIDTH</li>
              <li>SHARED SSL CERTIFICATE</li>
              <li><strong>30</strong> EMAIL ADDRESS</li>
              <li><strong>24/7</strong> SUPPORT</li>
              <li className="plan-purchase"><a className="btn btn-primary" href="#">Get It Now!</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="400ms">
            <ul className="pricing">
              <li className="plan-header">
                <div className="price-duration">
                  <span className="price">
                    $125
                  </span>
                  <span className="duration">
                    per month
                  </span>
                </div>
                <div className="plan-name">
                  Professional
                </div>
              </li>
              <li><strong>10</strong> DOMAIN</li>
              <li><strong>2GB</strong> DISK SPACE</li>
              <li><strong>UNLIMITED</strong> BANDWIDTH</li>
              <li>SHARED SSL CERTIFICATE</li>
              <li><strong>50</strong> EMAIL ADDRESS</li>
              <li><strong>24/7</strong> SUPPORT</li>
              <li className="plan-purchase"><a className="btn btn-primary" href="#">Get It Now!</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="wow zoomIn" data-wow-duration="400ms" data-wow-delay="600ms">
            <ul className="pricing">
              <li className="plan-header">
                <div className="price-duration">
                  <span className="price">
                    $185
                  </span>
                  <span className="duration">
                    per month
                  </span>
                </div>
                <div className="plan-name">
                  Extended
                </div>
              </li>
              <li><strong>15</strong> DOMAIN</li>
              <li><strong>10GB</strong> DISK SPACE</li>
              <li><strong>UNLIMITED</strong> BANDWIDTH</li>
              <li>SHARED SSL CERTIFICATE</li>
              <li><strong>100</strong> EMAIL ADDRESS</li>
              <li><strong>24/7</strong> SUPPORT</li>
              <li className="plan-purchase"><a className="btn btn-primary" href="#">Get It Now!</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>{/*/#pricing*/}
  <section className="testimonial-area" id="testimonial">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Testimonial</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: 0}}>
            <div className="row">
              <div className="col-xs-12">
                <blockquote>Sontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply</blockquote>
              </div>
            </div>
            <div className="row"> 
              <div className="col-xs-12">
                <h5>John Bond</h5>
                <h6>Lorem Ipsuis simply</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: 0}}>
            <div className="row">
              <div className="col-xs-12">
                <blockquote>Tontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply</blockquote>
              </div>
            </div>
            <div className="row"> 
              <div className="col-xs-12">
                <h5>John Bond</h5>
                <h6>Lorem Ipsuis simply</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="single-testimonial animate_fade_in" style={{opacity: 1, right: 0}}>
            <div className="row">
              <div className="col-xs-12">
                <blockquote>Aontrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply</blockquote>
              </div>
            </div>
            <div className="row"> 
              <div className="col-xs-12">
                <h5>John Bond</h5>
                <h6>Lorem Ipsuis simply</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact-us">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title wow fadeInDown">Contact Us</h2>
        <p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa <br /> semper aliquam quis mattis quam.</p>
      </div>
    </div>
  </section>{/*/#contact-us*/}
  <section id="contact">
    <div className="container">
      <div className="container contact-info">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <div className="contact-form">
              <h3>Contact Info</h3>
              <address>
                <strong>Amazing Company, Inc.</strong><br />
                12345 NewYork, Street 125<br />
                United States 94107<br />
                <abbr title="Phone">P:</abbr> (123) 456-7890
              </address>
            </div></div>
          <div className="col-sm-8 col-md-8">
            <div className="contact-form">
              <form id="main-contact-form" name="contact-form" method="post" action="#">
                <div className="form-group">
                  <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea name="message" className="form-control" rows={8} placeholder="Message" required defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </section>{/*/#bottom*/}
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          © 2015 Company Name. Template by <a target="_blank" href="http://webthemez.com/" title="Free Bootstrap Themes and HTML Templates">WebThemez.com</a>
        </div>
        <div className="col-sm-6">
          <ul className="social-icons">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li> 
            <li><a href="#"><i className="fa fa-youtube" /></a></li>
            <li><a href="#"><i className="fa fa-github" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>{/*/#footer*/}
</div>

    )
}