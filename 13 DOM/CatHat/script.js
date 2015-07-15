function animate(time) {
  if (lastTime != null) {
    catAngle += (time - lastTime) * 0.001;
    hatAngle += (time - lastTime) * 0.001;
  }

  lastTime = time;

  cat.style.top = (cat.clientHeight / 2) + (Math.sin(catAngle) * 40) + "px";
  cat.style.left = (cat.clientWidth / 2) + (Math.cos(catAngle) * 400) + "px";

  hat.style.top = (hat.clientHeight) + (Math.sin(hatAngle) * 200) + "px";
  hat.style.left = (hat.clientWidth) + (Math.cos(hatAngle) * 400) + "px";

  requestAnimationFrame(animate);
}
