function previewImage(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#upload')
        .attr('src', e.target.result)
        .width(150)
        .height(120);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
// <!--         <input type='file' onchange="previewImage(this);" />
//       <img id="upload" src="#"/><br> -->