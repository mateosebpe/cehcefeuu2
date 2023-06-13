function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var fileCategory = document.getElementById('fileCategory');

    if (file) {
        var storageRef = firebase.storage().ref();
        var fileRef = storageRef.child(fileCategory.value).child(file.name);

        fileRef.put(file)
            .then(function (snapshot) {
                alert('El archivo se ha guardado correctamente.');
            })
            .catch(function (error) {
                alert('Error al cargar el archivo: ' + error.message);
            });
    } else {
        alert('No se ha seleccionado ningún archivo.');
    }
}