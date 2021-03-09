/*About section*/

(() =>{
      const aboutSection = document.querySelector(".about-section"),
      tabsContainer =document.querySelector(".about-tabs");

      tabsContainer.addEventListener("click",(event)=>{
      	if (event.target.classList.contains("tab-item") &&
      		!event.target.classList.contains("active")) {
      		const target=event.target.getAttribute("data-target");
      		//deactivate existing active 'tab-item'
      		tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
      		//activate new  'tab-item'
      		event.target.classList.add("active","outer-shadow");
      		//deactivate existing active 'tab-content'
			aboutSection.querySelector(".tab-content.active").classList.remove("active");
      		//activate new  'tab-content'
			aboutSection.querySelector(target).classList.add("active");

      	}
      })
})();

function bodyCrollingToggle(){
	document.body.classList.toggle("stop-scrolling");
}
/* protfolio */

(()=>{

	filterContainer =document.querySelector(".portfolio-filter"),
	portfolioItemContainer = document.querySelector(".portfolio-items"),
	portfolioItems = document.querySelectorAll(".portfolio-item"),
	popup = document.querySelector(".portfolio-popup"),
	prevBtn =document.querySelector(".pp-prev"),
	nextBtn =document.querySelector(".pp-next"),
	closeBtn =document.querySelector(".pp-close"),
	projectDetailsContainer = popup.querySelector(".pp-details"),
	projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
	let itemIndex ,slideIndex,screenshots;

	filterContainer.addEventListener("click",(event)=>{
		if(event.target.classList.contains("filter-item") && 
		!event.target.classList.contains("active")){
			filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
			event.target.classList.add("active","outer-shadow");
			const target = event.target.getAttribute("data-target");
			
			portfolioItems.forEach((item) =>{
				
			if(target === item.getAttribute("data-category") || target ==='all'){
					item.classList.remove("hide");
			 		item.classList.add("show");
			 	} else{
			 		item.classList.remove("show");
			 		item.classList.add("hide")
			 	}
			 })
		
		} 
	})

	portfolioItemContainer.addEventListener("click", (event)=>{
		
		//console.log(event.target.closest(".portfolio-item-inner"));
		if (event.target.closest(".portfolio-item-inner")) {
	 		const portfolioItem = event.target.closest(".portfolio-item-inner").
			 parentElement;
	 		itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
	 		screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
			screenshots= screenshots.split(",");
			if(screenshots.length===1){
				prevBtn.style.display="none";
				nextBtn.style.display="none";

			} else{
				prevBtn.style.display="block";
				nextBtn.style.display="block";

			}
			slideIndex= 0;
			popupToggle();
			popupSlideshow();
			popupDetails();
			//console.log(screenshots);
	 	}
	 })

	 closeBtn.addEventListener("click",()=>{
		 popupToggle();
	 })

	 function popupToggle(){
		 popup.classList.toggle("open");
		 bodyCrollingToggle();
	 }

	
	 function popupSlideshow(){
		 const imgSrc = screenshots[slideIndex];
		 	const popupImg = popup.querySelector(".pp-img");
			 popup.querySelector(".pp-loader").classList.add("active");
			 	popupImg.src=imgSrc;
				popupImg.onload = () =>{
					popup.querySelector(".pp-loader").classList.remove("active");
			}
			popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " +
			screenshots.length;	 
		}

		nextBtn.addEventListener("click", ()=>{
			if(slideIndex === screenshots.length-1){
				slideIndex =0;
			} else{
				slideIndex++;
			}
			popupSlideshow();
		})

		prevBtn.addEventListener("click", ()=>{
			if(slideIndex === 0){
				slideIndex =screenshots.length-1;
			} else{
				slideIndex--;
			}
			popupSlideshow();
		})

		function popupDetails(){
			
		}
		projectDetailsBtn.addEventListener("click",()=>{
			popupDetailsToggle();
		})
		function popupDetailsToggle(){
			if(projectDetailsContainer.classList.contains("active")){
				projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
				projectDetailsBtn.querySelector("i").classList.add("fa-plus");
				projectDetailsContainer.classList.remove("active");
				projectDetailsContainer.style.maxHeight = 0 + "px";
				
			} else{
				projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
				projectDetailsBtn.querySelector("i").classList.add("fa-minus");
				projectDetailsContainer.classList.add("active");
				projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + "px";
				popup.scrollTo(0,projectDetailsContainer.offsetTop);	
		}
		}

})();