function changeContent(srcDoc) {
         document.getElementById("iframeContent").setAttribute("src",srcDoc);
} 

function changeContentParent(srcDoc) {
         window.parent.document.getElementById("iframeContent").setAttribute("src",srcDoc);
}