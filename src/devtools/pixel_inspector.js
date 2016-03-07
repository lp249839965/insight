function pixelInspectorChanged(e) {
    if ($("#stateViewerEnabled").checked) {
      $("#stateViewerEnabled").trigger("click");
    }
    var checked = document.getElementById("pixelInspectorEnable").checked;
    var data = {"enabled": checked};
    sendMessage(messageType.PIXEL_INSPECTOR, data);

    var state = getContextState(states.activeContext);
    state.pixelInspectorEnabled = checked;
}

document.getElementById("togglePixelInspector").addEventListener("click", pixelInspectorChanged);

function updatePixelInspector(checked) {
    document.getElementById("pixelInspectorEnable").checked = checked;
}
