function loadModal(category) {
  var fileList = $("#fileList");
  fileList.empty();
  var storageRef = firebase.storage().ref();
  var folderRef = storageRef.child(category);



  folderRef.listAll().then(function (result) {
    result.items.forEach(function (fileRef) {
      // Obtiene el nombre del archivo
      var fileName = fileRef.name;

      // Obtiene la URL de descarga del archivo
      fileRef.getDownloadURL().then(function (downloadURL) {

        var listItem = $("<li>").addClass("list-group-item d-flex align-items-center");
        var fileDetails = $("<div>").addClass("flex-grow-1");
        var fileName = $("<strong>").text(fileRef.name);
       
        var downloadLink = $("<a>").attr("href", downloadURL).addClass("btn btn-primary btn-sm").text("Descargar");
        fileDetails.append(fileName);
        fileDetails.append("<br>");


        // Append file details and download button to the list item
        listItem.append(fileDetails);
        listItem.append(downloadLink);

        // Append list item to the file list
        fileList.append(listItem);
      });


    });
  }).catch(function (error) {
  
  });


}