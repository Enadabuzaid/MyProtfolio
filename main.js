/*About section*/

(() =>{
      const aboutSection = document.querySelector(".about-section"),
      tabsContainer =document.querySelector(".about-tabs");

      tabsContainer.addEventlisener("click",(event)=>{
      	if (event.target.classList.contains("tab-item") &&
      		!event.target.classList.contais("active")) {
      		const target=event.target.getAttribute("data-target");
      	}
      })
})();