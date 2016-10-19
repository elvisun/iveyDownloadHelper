chrome.downloads.onDeterminingFilename.addListener(function(item, __suggest) {
  function suggest(filename, conflictAction) {
    __suggest({filename: filename,
               conflictAction: conflictAction,
               conflict_action: conflictAction});
  }
  //console.log(item.url.toLowerCase());
  //console.log(item.url.toLowerCase().includes("apps.ivey.ca"));
  console.log(item.filename);
  var newName = item.filename;
  var a = newName.split("_");
  a.splice(0,1);
  newName = a.join(" ");
  newName  = newName.replace(/\s+/g,' ');
  console.log(newName)
  if (item.url.toLowerCase().includes("apps.ivey.ca")) {
    suggest(newName, 'overwrite');
  }
});


