import React from "react"
// Import images
import Kevin from "../images/DSC5345_250X395.jpg"
import DigitalTransformation from "../images/DigitalTransformation-Web.png"
import IT_Support from "../images/IT Support.png"
import WIStatuteTOC from "../images/WI-statute-TOC.png"
import ETL from "../images/ExtractTransformLoad.png"
import UW_Stout from "../images/UW-Stout_20190622_152336.jpg"
import UniversityStThomas from "../images/University-of-StThomas_DSC5602.jpg"

export default function Personal() {
    return (

        <div>

            {/*<!-- Navbar -->*/}
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        {/*<!-- Navbar brand -->*/}
                        <a className="navbar-brand" href="#top">Kevin Effertz</a>
                        {/*}<!-- Collapse button -->*/}
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle Navigation"><span className="navbar-toggler-icon"></span></button>
                        {/*<!-- Collapsible content -->*/}
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {/*<!-- Links to Sections -->*/}
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#about">About</a></li>
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#experience_education">Experience</a></li>
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#video">Video</a></li>
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#skills">Skills</a></li>
                                <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a
                                    className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/*<!--home-->*/}
            <section id="home" className="grid-1">
                <aside className="container text-white">
                    <h1 className="font-weight-bold">Hello! I'm</h1>
                    <h1 className="display-3 font-weight-bold mt-3">Kevin Effertz</h1>
                    <h4 mt-5><span className="typewriter"></span> </h4>
                    {/*<!--<h5 id="typewriterText"><span className="typewriter"></span>Digital Transformation Engineer, Senior Software Engineer, Application Developer, System Support Engineer</h5>-->*/}
                </aside>
            </section>

            {/*<!--About-->*/}
            <section id="about" className="py-5">
                <div className="container about-Grid">
                    {/*<!-- <div className="container grid-1"> -->*/}
                    {/*<!--  <div className="header"></div>-->*/}
                    <div className="hd-about">
                        <h1 className="font-weight-bold py-5">About Me</h1>
                    </div>
                    <div className="img-selfportrait mr-3 mb-3">
                        <img src={Kevin} alt="Learn about Kevin Effertz at kevineffertz.com"  className="img-fluid rounded border border-dark"/>
                    </div>
                    <div className="txt-about mx-2">
                        <p>I have always been drawn to the process of learning and serving.  Passionately sowing and cultivating these two gifts into work, family, and community give meaning to my life's journey.</p>
                        <p>Digital technology continues to revolutionize the world.  Cloud computing, Internet of Things(IoT), Big Data Analytics, and advances in Artificial Intelligence(AI) are converging causing our world to be more interconnected, leading to new ways in which we communicate, know information, engage people, and relate to our surroundings. </p>
                        <p>I believe in order to embrace digital transformation you must embrace the principles of learning organizations and servant leadership. An organization or institution that faciliates the learning of its members and puts the needs of its employees and customers first continuously transforms itself. </p>
                        <p> My strong technical aptitude, exceptional customer service, excellent collaboration skills and desire to keep abreast of digital technology trends make me an excellent candidate to assist you with strategizing and implementing your digital transformation needs.</p>
                        <p>I appreciate you taking time to view this personal website!</p>
                        <p>Kevin Effertz</p>
                    </div>
                </div>
            </section>


            {/*<!--Experience & Education & Service-->*/}
            <section id="experience_education" className="py-5">
                {/*<!-- <h1 className="text-center py-5">Education &amp; Experience</h1>
                <div className="container educ_exper-Grid py-3">
              -->*/}
                <div className="container">
                    <h1 className="text-center py-5 font-weight-bold">Experience &amp; Education</h1>
                    {/*<!-- Nav pills -->*/}
                    <div className="row my-3 justify-content-center">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item pill-1" > <a className="nav-link active button-size" data-toggle="pill" href="#experience"> <span className="px-1" style={{color:"black"}}><em className="fas fa-cogs"></em></span>Experience</a> </li>
                            <li className="nav-item mx-2 pill-2"> <a className="nav-link button-size" data-toggle="pill" href="#education"><span className="px-1" style={{color:"black"}}><i className="fas fa-graduation-cap"></i></span>Education</a> </li>
                        </ul>
                    </div>

                    {/*<!-- Tab panes with CSS Grid -->*/}
                    <div className="tab-content">
                        <div id="experience" className="container tab-pane active">
                            <div className="experience-Grid">
                                <div className="card">
                                    <span className="bg-lightskyblue"> <img className="card-img-top" src={DigitalTransformation} alt="Digital Transformation photo"/> </span>
                                    <div className="card-body">
                                        <h4 className="card-title"><strong>Process Improvement &amp; Reengineering</strong></h4>
                                        <p className="card-text"><b>Digital transformation</b> experience migrating and modernizing legacy systems, software, and data.</p>
                                        {/*<!-- Button to Open the Modal -->*/}
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#digitalTransformationModal"> Read more... </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <span className="bg-warning"><img className="card-img-top" src={IT_Support} alt="IT Support.png"/></span>
                                    <div className="card-body">
                                        <h4 className="card-title"><strong>Customer Service &amp; Incident Tracking</strong></h4>
                                        <p className="card-text"><b>Customer Service</b> experience toubleshooting and resolving end user system and application issues.</p>
                                        {/*<!-- Button to Open the Modal -->*/}
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#customerServiceModal"> Read more... </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <span className="border-bottom"><img className="card-img-top" src={WIStatuteTOC} alt="WI Statutory TOC"/></span>
                                    <div className="card-body">
                                        <h4 className="card-title"><strong>Content &amp; Database Management</strong></h4>
                                        <p className="card-text"><b>Software and data engineering</b> experience in the legal content and publishing industry providing document management and editorial capabilities to internal users processing statutory and regulatory material.</p>
                                        {/*<!-- Button to Open the Modal -->*/}
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#contentDatabaseManagementModal"> Read more... </button>
                                    </div>
                                </div>
                                <div className="card">
                                    <span className="bg-lightyellow"><img className="card-img-top" src={ETL} alt="ExtractTransformLoad.png"/></span>
                                    <div className="card-body">
                                        <h4 className="card-title"><strong>Application Development &amp; Support</strong></h4>
                                        <p className="card-text"><b>Extract Transform and Load(ETL)</b> experience with data capture and extraction processes, transforming content for value add via data pipelines, and loading content into global data repositories accessed by external applications.</p>
                                        {/*<!-- Button to Open the Modal -->*/}
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ETLModal"> Read more... </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="education" className="container tab-pane fade">
                            <div className="education-Grid">
                                <div className="card card-body">
                                    <h4 className="card-title">Bachelors of Science</h4>
                                    <h5>Applied Mathematics and Computer Science</h5>
                                    <p className="card-text">University of Wisconsin-Stout<br/>
                                        Menomonie, WI 54751 </p>
                                    <img className="card-img-top" src={UW_Stout} alt="UW-Stout Campus photo"/>
                                </div>
                                <div className="card card-body">
                                    <h4 className="card-title"> Masters of Business Administration </h4>
                                    <h5>Management Information Systems</h5>
                                    <p className="card-text">University of St. Thomas<br/>
                                        St. Paul, MN 55105</p>
                                    <img className="card-img-top" src={UniversityStThomas} alt="St. Thomas University Campus photo"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!--Video-->*/}
            <section id="video" className="py-5">
                <div className="container">
                    <h1 className="text-center py-5 font-weight-bold">Digital Video</h1>
                    <div className="video-Grid">

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!-- Senior Year -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/aKJHUExPSUI" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Senior Year</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!--<video width="320" height="240" controls>
                                  <source src="video/SeniorNight.mp4" type="video/mp4">
                                </video>-->*/}
                                {/*<!-- YearEndBanquet -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/rnBb9AwL3g4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Year End Banquet</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!--<video width="320" height="240" controls>
                                <source src="video/SeniorNight.mp4" type="video/mp4">
                                </video>-->*/}
                                {/*<!-- Coles Graduation 2019 playlist-->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNm6oEFRS_kGt0_GLwD2Y3WT44DrvD1gl"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Graduation 2019 playlist</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!--<video width="320" height="240" controls>
                                  <source src="video/SeniorNight.mp4" type="video/mp4">
                                </video>-->*/}
                                {/*<!-- 50th Anniversary Sequence -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNm6oEFRS_kFkGBurA0eU2GnnzVM3sGiF" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">50th Anniversary playlist</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!--<video width="320" height="240" controls>
                              <source src="video/SeniorNight.mp4" type="video/mp4">
                            </video>-->*/}
                                {/*<!-- Science Field Trip Sequence -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/FvAXZ4E9WbY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Science Field Trip</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!-- Wedding Sequence -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hg7XB-0IGnc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Wedding</div>
                        </div>

                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                {/*<!-- Graduation 2016 Sequence -->*/}
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/videoseries?list=PLNm6oEFRS_kG5dw1uFaxzsf_xhU18tkWZ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-content">Graduation 2016 playlist</div>
                        </div>

                    </div>
                </div>
            </section>

            {/*<!--Skills-->*/}
            <section id="skills" className="py-5" >
                <h1 className="text-center py-5 font-weight-bold">Skills</h1>
                <div className="container skills-Grid py-3">
                    <div className="card">
                        {/*<!--<img className="card-img-top" src="images/card-img.png" alt="Card image cap">-->*/}
                        <div className="card-body">
                            <div className="skills-graphic"> <i className="fas fa-tools my-fa-font-size"></i>
                                <h4 className="card-title pt-2"> Skills &amp; Frameworks </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> SQL</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> XML</div>
                                        <div className="star-gold-filled ml-auto" >&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Java</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Object Oriented Programming</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Spring</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> SAX\DOM</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> JUnit\Mockito</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> XSLT</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>XPath</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> HTML</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Groovy</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Hibernate</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> REST</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Functional Programming</div>
                                        <div className="star-gold-filled ml-auto
 ml-auto" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> JSON</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> RegEx</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> XSL-FO</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> C++</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> PHP</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Perl</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Bootstrap 4</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>CSS Grid</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        {/*<!-- <img className="card-img-top" src="images/card-img.png" alt="Card image cap"> -->*/}
                        <div className="card-body">
                            <div className="skills-graphic"> <i className="fas fa-toolbox my-fa-font-size"></i>
                                <h4 className="card-title pt-2"> Tools </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Xml Spy</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> IntellJ</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> TOAD</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> MySql</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Tomcat</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Oracle</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Postman</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Git\GitLab</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Maven 2</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Apache</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Jenkins</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Team Foundation Server</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Adobe Photoshop CC</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Adobe Premier Pro CC</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Adobe Encore CS6</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Taleo</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Workday</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> ITSM Service Now</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Salesforce</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Heroku</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Postgresql</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div> Power BI</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        {/*<!--<img className="card-img-top" src="images/card-img.png" alt="Card image cap">-->*/}

                        <div className="card-body">
                            <div className="skills-graphic"> <i className="fas fa-cogs my-fa-font-size"></i>
                                <h4 className="card-title pt-2"> Industry Knowledge </h4>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Content & Database Management</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Process Improvement & Reengineering</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Customer Service & Incident Tracking</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Application Development & Support</div>
                                        <div className="star-gold-filled ml-auto
">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>ETL</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty"></div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Legal & Compliance Research</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Networking</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Technology Strategy & Assessment</div>
                                        <div className="star-gold-filled ml-auto">&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>DevOps</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Cloud</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Analytics</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Customer Enagement</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Security</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>SDN\NFV</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>SDWAN</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>IoT</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Machine Learning</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>Containers & Microservices</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex">
                                        <div>NoSql</div>
                                        <div className="star-gold-filled ml-auto
" >&#x2605;&#x2605;</div>
                                        <div className="star-empty">&#x2606;&#x2606;&#x2606;</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/*<!--Contact-->*/}
            <section id="contact" className="py-5">
                <h1 className="text-center py-5 font-weight-bold">Contact</h1>
                <div className="container contact-Grid">
                    <div className="text-center mx-2 py-3"> <i className="fas fa-map-marker-alt fa-3x" ></i>
                        <p>New Richmond, WI</p>
                    </div>
                    <div className="text-center mx-2 py-3"> <i className="fas fa-mobile fa-3x"></i>
                        <p>715-563-4454</p>
                    </div>
                    <div className="text-center mx-2 py-3"> <i className="fas fa-envelope fa-3x"></i>
                        <p>kevin.effertz@gmail.com</p>
                    </div>
                    <div className="text-center mx-2 py-3"> <i className="fab fa-linkedin fa-3x"></i>
                        <p><a href="http://www.linkedin.com/in/kevin-effertz">www.linkedin.com/in/kevin-effertz</a></p>
                    </div>
                </div>
            </section>

            {/*<!--Copyright-->*/}
            <section className="p-3" id="copyright">
                <p className="text-white text-center" >Copyright &copy; <script>document.write(new Date().getFullYear());</script> Kevin Effertz. All rights reserved.</p>
            </section>


            {/*<!-- Digital Transformation Modal -->*/}
            <div className="modal" id="digitalTransformationModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header bg-light">
                            <h4 className="modal-title ">Process Improvement &amp; Reengineering</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/*<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="rounded bg-lightskyblue mb-3"> <img className="img-fluid" src={DigitalTransformation} alt="DigitalTransformation-Web.png"/></div>
                            <p><strong>Digital transformation</strong> experience migrating and modernizing legacy systems, software, and data.</p>
                            <ul>
                                <li>Migrated systems running on the mainframe (PL1, CICS, Adabas) and in a client server environment(C++, MFC, COM, MSSQL, TCP\IP) to run in a multi-tiered architecture (Tomcat, Java, Groovy, Spring, Hibernate, Oracle).</li>
                                <li>Ported a suite of native systems and applications acquired via an aquisition to run on a virtualized platform allowing for high availability and redundancy.</li>
                                <li>Participated in the building of a DevOps culture to shorten development lifecycles, reduce deployment failures, improve testing, facilitate bettter communication and collaboration, and reduce costs and IT headcount.</li>
                            </ul>
                        </div>

                        {/*<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

            {/*<!-- CustomerService Modal -->*/}
            <div className="modal" id="customerServiceModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header bg-light">
                            <h4 className="modal-title ">Customer Service &amp; Incident Tracking</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/*<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="border rounded bg-warning mb-3"> <img className="img-fluid" src={IT_Support} alt="IT Support.png"/></div>
                            <p><strong>Customer Service</strong> experience toubleshooting and resolving end user system and application issues.</p>
                            <ul>
                                <li> Used a variety of 3rd party Information Technology Service Management(ITSM) software solutions to track and resolve issues.  Communicated and collaborate with teammates, end users, and data center operations during the resolution process.</li>
                                <li>Troubleshot and resolved hardware, software, and networking issues running on various Linux and Windows server platforms and Windows Desktop operating systems.</li>
                                <li>Supported software applications built on the LAMP stack (Linux, Apache, MySql, PHP, Perl) and the Java platform (Java, Groovy, Spring, Hibernate, XML, Json, REST API).</li>
                                <li>Served as a technical liason creating wiki support documentation used to aid managers, end users, paratechs, system engineers, and developers in the ability to more quickly resolve complex system processes.</li>
                                <li>Used Windows PE and Clonezilla to create bootable USB drives and computer images used for setting up and configuring desktop\laptop computers.</li>
                            </ul>
                        </div>

                        {/*<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

            {/*<!-- Content & Database Management Modal -->*/}
            <div className="modal" id="contentDatabaseManagementModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header bg-light">
                            <h4 className="modal-title ">Content &amp; Database Management</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/*<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="border rounded border-dark mb-3"> <img className="img-fluid" src={WIStatuteTOC} alt="IT Support.png"/></div>
                            <p><strong>Software and data engineering</strong> experience in the legal content and publishing industry providing document management and editorial capabilities to internal users processing statutory and regulatory material.</p>
                            <ul>
                                <li>Responsible for implementing, enhancing, and supporting several different proprietary hierarchical, topical, and editorial applications used by internal legal attorneys and compliance staff.
                                    <ul>
                                        <li>The hierarchical and topical application systems served as an index and controlling structure into the content.</li>
                                        <li>The editorial applications served as an xml document repository allowing users direct content manipulation from within a web browser.</li>
                                    </ul>
                                </li>
                                <li>Created relational database schemas and object relational mappings to be used to develop applications for the legal content and publishing business domain.</li>
                                <li>Implemented and tested webservices built using the REST architectural style using both JSON and XML documents to communicate with the underlying java\groovy based services.
                                    <ul>
                                        <li>These web services were part of the non-editorial publishing pathways.</li>
                                        <li>The goal of non-editorial publishing pathways was to automate value-add content without the need for user intervention.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        {/*<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>


            {/*<!-- ETL Modal -->*/}
            <div className="modal" id="ETLModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        {/*<!-- Modal Header -->*/}
                        <div className="modal-header bg-light">
                            <h4 className="modal-title ">Application Development &amp; Support</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        {/*<!-- Modal body -->*/}
                        <div className="modal-body">
                            <div className="border rounded mb-3 border-dark" style={{borderWidth:"3px !important"}}> <img className="img-fluid" src={ETL} alt="ExtractTransformLoad.png"/></div>
                            <p><strong>Extract Transform and Load(ETL)</strong> experience with data capture and extraction processes, transforming content for value add via data pipelines, and loading content into global data repositories access by external applications.</p>
                            <ul>
                                <li>Improved business workflows and reengineered software written in PL1\CICS\Adabas, C++\MFC\COM\MSSQL, and Java\Groovy\Spring\Hibernate\SQL\XML.</li>
                                <li>Transformed content written in proprietary data markup and html into well-formed xml documents for loading into a global repository.</li>
                                <li>Developed, enhanced, tested, and maintained various data pipelines using java SAX filters, XSLT, and REGEX.  Extracted contents was filtered and transformed into standardized xml markup for further processing.</li>
                                <li>Implemented REST endpoints for a metadata web service allowing clients of the web service to get, update, and find metadata content.</li>
                            </ul>
                        </div>

                        {/*<!-- Modal footer -->*/}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

    </div>

    )
}