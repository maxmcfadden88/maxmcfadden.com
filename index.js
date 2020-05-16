// import Darkmode from "darkmode-js";

// var options = {
//   bottom: "64px", // default: '32px'
//   right: "unset", // default: '32px'
//   left: "32px", // default: 'unset'
//   time: "0.5s", // default: '0.3s'
//   mixColor: "#fff", // default: '#fff'
//   backgroundColor: "#fff", // default: '#fff'
//   buttonColorDark: "#100f2c", // default: '#100f2c'
//   buttonColorLight: "#fff", // default: '#fff'
//   saveInCookies: false, // default: true,
//   label: "🌓", // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// const darkmode = new Darkmode(options);
// new Darkmode().showWidget();

window.addEventListener("DOMContentLoaded", (event) => {
  setModeEventListener();
});

function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
  });
}
