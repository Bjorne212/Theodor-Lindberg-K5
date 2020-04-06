function home(){
    document.getElementById('home').style.display = "block";
    document.getElementById('work').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('contact').style.display = "none";
}
function work(){
    document.getElementById('home').style.display = "none";
    document.getElementById('work').style.display = "block";
    document.getElementById('projects').style.display = "none";
    document.getElementById('contact').style.display = "none";
}
function projects(){
    document.getElementById('home').style.display = "none";
    document.getElementById('work').style.display = "none";
    document.getElementById('projects').style.display = "block";
    document.getElementById('contact').style.display = "none";
}
function contact(){
    document.getElementById('home').style.display = "none";
    document.getElementById('work').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('contact').style.display = "block";
}