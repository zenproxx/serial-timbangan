function tes() {
   var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  console.log("Copied the text: " + copyText.value);}


var Timbangan = new Vue({
    el: "#app",
    data: {
        satu: 3000,
        status: 0,
        tampil: true,
        extensionid: chrome.runtime.id
    },
    methods: {
        handleTipBtn: function () {
            console.log('btn click')
            structs.btnClick()

        }

    }

})
