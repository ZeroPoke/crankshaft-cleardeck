import { SMM } from '@crankshaft/types';

export const load = (smm: SMM) => {
  console.info('ClearDeck Loading...');
  
  InjectClearDeck()

  if (smm.entry === 'library') {
    //BuildUI();
  }
};

export const unload = (smm: SMM) => {
  document.getElementById("ClearDeck")?.remove();

 // smm.MenuManager.removeMenuItem('fontdeck');

  console.info('...ClearDeck unloaded!');

};

function InjectClearDeck() {
    // create a style element
    var ClearDeck = document.createElement('style');
    ClearDeck.setAttribute("id","ClearDeck");

     // add the CSS as a string
     ClearDeck.innerHTML = `
	 .backgroundglass_BackgroundGlass_3rsrz.backgroundglass_DrawBackground_2NQoF {
		background: none !important;
	}
	
	.backgroundglass_BackgroundGlass_3rsrz.backgroundglass_Blur_N9sQL {
		backdrop-filter: none !important;
	}
	
	.mainmenu_Container_3vzvO.mainmenu_Open_3apLK {
		background-color: rgba(0,0,0,0) !important;
	}
        `;

     // add it to the head
     document.getElementsByTagName('head')[0].appendChild(ClearDeck);
};