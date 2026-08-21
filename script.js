const menuToggle=document.getElementById("menuToggle");
const navMenu=document.getElementById("navMenu");
menuToggle.addEventListener("click",()=>navMenu.classList.toggle("active"));
document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",()=>navMenu.classList.remove("active"));
});
const yearElement=document.getElementById("year");
if(yearElement) yearElement.textContent=new Date().getFullYear();
const modelViewer=document.querySelector("model-viewer");
if(modelViewer){
  modelViewer.addEventListener("error",()=>console.log("3D model could not be loaded. Check the GLB/GLTF file path."));
}
document.querySelectorAll("img").forEach(image=>{
  image.addEventListener("error",()=>console.log("Image not found:",image.getAttribute("src")));
});
