chrome.runtime.onInstalled.addListener(details => {
  details.reason === "install" && chrome.runtime.openOptionsPage();
});

chrome.action.onClicked.addListener(() => chrome.runtime.openOptionsPage());
