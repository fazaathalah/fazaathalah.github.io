var i = 0;
var text = 'Welcome to my website! :3 What do you want to know?';
var speed = 70;

setInterval(tulis, speed);

function tulis() {
  if (i < text.length) {
    document.getElementById("demo").innerHTML += text.charAt(i);
    i++;
  }
}

function skills() {
    var x = document.getElementsByTagName("div")[1].getAttribute("id");
    if (x == "home") {
        document.getElementById("home").removeAttribute("id");
    }
    var y = document.getElementsByTagName("div")[2].getAttribute("id");
    document.getElementById(y).removeAttribute("id");
    document.getElementsByTagName("div")[2].setAttribute("id", "skill");
    document.getElementById("skill").innerHTML = 
    `<h1>My Skills</h1>

    <p>HTML/CSS/JS</p>
    <div class="container">
      <div class="skills html">90%</div>
    </div>
    
    <p>English Fluency</p>
    <div class="container">
      <div class="skills css">80%</div>
    </div>
    
    <p>Problem Solving</p>
    <div class="container">
      <div class="skills js">65%</div>
    </div>
    
    <p>Python</p>
    <div class="container">
      <div class="skills python">60%</div>
    </div>`;
}

function profile() {
    var x = document.getElementsByTagName("div")[1].getAttribute("id");
    if (x == "home") {
        document.getElementById("home").removeAttribute("id");
    }
    var y = document.getElementsByTagName("div")[2].getAttribute("id");
    document.getElementById(y).removeAttribute("id");
    document.getElementsByTagName("div")[2].setAttribute("id", "profil");
    document.getElementById("profil").innerHTML = 
    `<h1>About Me</h1>

    <img src = "assets/FOTOFAZAKECIL.png">

    <ul>
        <li>Full Name: Faza Athalah </li>
        <li>Gender: Male</li>
        <li>Date of Birth: March 20, 1999</li>
        <li>Marital Status: Single</li>
        <li>Interest: Basketball, swimming, volleyball, programming, video games</li>
    </ul>

    <h1>Education</h1>

    <ul>
        <li>2016: Telecommunication Engineering, Institut Teknologi Bandung</li>
        <li>2013: SMA Plus Negeri 17 Palembang</li>
        <li>2010: SMP Kusuma Bangsa Palembang</li>
        <li>2004: SD Islam Az-Zahrah Palembang </li>
    </ul>

    <h1>Experience </h1>

    <ul>
        <li> 2017: Alumni of Android Kejar for Beginner </li>
        <li> 2018: HCIA Routing-Switching Certificated </li>
    </ul>`;

}