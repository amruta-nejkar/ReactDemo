// import './style.css';
import img1 from '../page/images/img.png';
const AboutUsPage=()=>{
  return(
    <div className="wrapper">
       <header>
           
           <div className="imgHolder">
           <img className="personImg" src={img1}></img>
           <p>f_karayannopoulops@klclawfirm.com</p>
           </div>
           <div className="headTexts">
               <h1>Fotis Karayannopoulos</h1>
               <h5>SENIOR ASSOCIATE</h5>
               <h5 id="lawyer">SUPREME COURT LAWYER</h5>
               <h5>Admitted ti Athens Bar in 1992</h5>
           </div>
       </header>
       <section className="banner">
           <div className="langs">
               <h1>Languages:</h1>
               <h5>GREEK,ENGLISH,FRENCH,ITALIAN</h5>
               <div className="card">
              
               <h4>DOWNLOAD V.CARD</h4>
                </div>
               
           </div>
       </section>
       <section className="bioSection">
           <ul className="bioList">
               <li id="biography">Short Biography</li>
               <li>Academic Curriculum</li>
               <li>Other Activities</li>
               <li>Memberships</li>
           </ul>
           <article>
               <h1>SHORT BIOGRAPHY</h1>
               <p>Fotis A. Karayannopoulos is a Senior Associate at KLC Law Firm. He is a practicing lawyer with 24 years field experience in Greece and many EU and non-EU States on all sorts of international law matters and business transactions.
                    He teaches International and EU Business Law in France and non-EU countries. Fotis is the Special Counsel for the Greek National Broadcaster (ERT) and a member of the Legal Committee of European Broadcasting Union. He also consults foreign governments (Balkans, Asia, Africa) on international law and foreign investment matters. 
                   His extensive experience covers all matters on Corporate and Business Law, European Union Law, International transactions, Intellectual Property (IP) Law, Media Law, Human Rights and Justice Reform, foreign investments and public procurement.</p>
           </article>
       </section>
    </div>
  );
}
export default AboutUsPage ;