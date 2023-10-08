const footerLoad = function() {
    const contentDiv = document.getElementById('content');
    const footerBox = document.createElement('footer');
    footerBox.classList.add('footer-box');
    const footerDiv = document.createElement('div');
    footerBox.appendChild(footerDiv);
        
    const footerImg = document.createElement('img');
    footerImg.classList.add('footer-logo');
    footerImg.src = "./assets/logo.png";
    footerImg.alt = "Shawnee's Homestyle";
        
    const footerCredits = document.createElement('p');
    footerCredits.innerHTML = "Website by Glenn Arnade";
        
    contentDiv.appendChild(footerBox);
    footerBox.appendChild(footerDiv);
    footerDiv.appendChild(footerImg);
    footerDiv.appendChild(footerCredits);
}

export {footerLoad};