 const darkmode  =()=>{

const themetogglebtns = document.querySelector('#theme-toggle'); 


themetogglebtns.foreach(btn =>{
    btn.addEventlistener('click',() =>{
        document.body.classList.toggle('light-mode');
    });
});
 };


 export default darkmode;