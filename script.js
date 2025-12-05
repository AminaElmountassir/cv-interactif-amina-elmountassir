document.addEventListener('DOMContentLoaded', function () {
    
    var triggerTabList = [].slice.call(document.querySelectorAll('#mainTab button'))
    
    triggerTabList.forEach(function (triggerEl) {
      var tabTrigger = new bootstrap.Tab(triggerEl)

      triggerEl.addEventListener('click', function (event) {
        event.preventDefault() 
        tabTrigger.show()      
      })
    })

    console.log("CV Interactif chargé. Interactivité JS des onglets OK. ✅");
    

});