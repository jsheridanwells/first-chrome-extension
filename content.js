'use strict';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if ( request.message === "clicked_browser_action" ) {
    let firstHref = $("a[href^='http']").eq(0).attr("href");

    console.log('firstHref is: ', firstHref);

    chrome.runtime.sendMessage({ "message": "open_new_tab", "url": firstHref });
  }
});