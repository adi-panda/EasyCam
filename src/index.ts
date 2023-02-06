(function testScript() {
  const comp = app.project.activeItem;
  app.beginUndoGroup("Test Script");
  if(comp == null){
    alert("Please select a composition");
    return;                                               
  }
  if (!(comp instanceof CompItem)) {
    alert("Please select a composition");
    return;
  }


  const cam = comp.layers.addCamera("Camera", [0, 0]);
  const camController = comp.layers.addNull();
  camController.name = "CamController";
  cam.setParentWithJump(camController);

  
  app.endUndoGroup();
})();
