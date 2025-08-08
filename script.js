document.addEventListener(DomcontentLoaded,function () {const streetInput = document.getElementById("street");

streetInput.addEventListener("focus",function (){ streetInput.value=""; });
});