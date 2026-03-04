const legacyScripts: string[] = [
  "code/engine/largeSphereCollider.js",
  "code/engine/collisionTypes.js",
  "code/engine/mkdsConst.js",
  "code/engine/ingameRes.js",
  "code/engine/itemController.js",
  "code/IndexedDBShim.min.js",
  "code/engine/storage/fileStore.js",
  "code/engine/controls/controlDefault.js",
  "code/engine/controls/controlRaceCPU.js",
  "code/engine/controls/controlNetwork.js",
  "code/engine/cameras/cameraIngame.js",
  "code/engine/cameras/cameraSpectator.js",
  "code/engine/cameras/cameraIntro.js",
  "code/engine/scenes/sceneDrawer.js",
  "code/engine/scenes/courseScene.js",
  "code/engine/scenes/clientScene.js",
  "code/engine/scenes/singleScene.js",
  "code/engine/2d/tileFlattener.js",
  "code/ui/race3DUI.js",
  "code/formats/net/netKart.js",
  "code/entities/objDatabase.js",
  "code/entities/trafficCar.js",
  "code/entities/water.js",
  "code/entities/itembox.js",
  "code/entities/decorations.js",
  "code/entities/rotatingGear.js",
  "code/entities/bowserPlatforms.js",
  "code/entities/soundMaker.js",
  "code/particles/itemboxShard.js",
  "code/particles/nitroParticle.js",
  "code/particles/nitroEmitter.js",
  "code/entities/shell.js",
  "code/entities/kart.js",
  "code/entities/kartItems.js",
  "code/entities/items/bananas.js",
  "code/entities/items/powerups.js",
  "code/entities/items/shells.js",
  "code/entities/item.js",
  "code/formats/kcl.js",
  "code/formats/ndsFS.js",
  "code/formats/nitro.js",
  "code/formats/nsbtx.js",
  "code/formats/nsbmd.js",
  "code/formats/nsbta.js",
  "code/formats/nsbca.js",
  "code/formats/nsbtp.js",
  "code/formats/nftr.js",
  "code/formats/narc.js",
  "code/formats/lz77.js",
  "code/formats/spa.js",
  "code/formats/2d/ncer.js",
  "code/formats/2d/ncgr.js",
  "code/formats/2d/nclr.js",
  "code/formats/2d/nscr.js",
  "code/formats/nkm.js",
  "code/formats/kartphysicalparam.js",
  "code/formats/kartoffsetdata.js",
  "code/render/nitroRender.js",
  "code/render/nitroShaders.js",
  "code/render/shadowRender.js",
  "code/render/nitroAnimator.js",
  "code/glmatrix/gl-matrix.js",
  "code/formats/sdat.js",
  "code/formats/swav.js",
  "code/formats/swar.js",
  "code/formats/sbnk.js",
  "code/formats/sseq.js",
  "code/formats/ssar.js",
  "code/audio/sseqPlayer.js",
  "code/audio/nitroAudio.js",
];

const globalScope = window as any;
globalScope.requestAnimationFrame =
  window.requestAnimationFrame ||
  (window as any).mozRequestAnimationFrame ||
  (window as any).webkitRequestAnimationFrame ||
  (window as any).msRequestAnimationFrame;

globalScope.files = {};
globalScope.fileQuota = 0;
globalScope.filesLoaded = 0;
globalScope.mobile = ((a: string, b?: string) => {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substring(0, 4))) return true;
  return false;
})(navigator.userAgent || navigator.vendor || (window as any).opera);

globalScope.mainRT = undefined;
globalScope.waitForROM = false;
globalScope.keysArray = new Array(255);
globalScope.touches = [];
globalScope.timeSync = 0;
globalScope.lastTime = Date.now();

const loadLegacyScript = async (src: string) =>
  new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Unable to load script ${src}`));
    document.head.appendChild(script);
  });

const loadRuntime = async () => {
  for (const src of legacyScripts) {
    await loadLegacyScript(src);
  }
};

window.onload = async () => {
  await loadRuntime();
  globalScope.simpleMatStack = { dat: globalScope.mat4.create(), built: true };
  init();
};

window.onerror = (error, h, j) => {
  alert(`ERROR: ${error}, ${h}, ${j}`);
};

function init() {
  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
  canvas.addEventListener("click", lockPtr);
  globalScope.fileStore.requestGameFiles(initNitro);
}

function initNitro(rom: ArrayBuffer) {
  globalScope.gl = initGL(document.getElementById("canvas3d") as HTMLCanvasElement);
  globalScope.gameROM = new globalScope.ndsFS(rom);

  globalScope.nitroRender.init(globalScope.gl);
  globalScope.shadowRender.init(globalScope.gl);
  globalScope.sceneDrawer.init(globalScope.gl);
  globalScope.objDatabase.init();

  globalScope.nitroAudio.init(new globalScope.sdat(globalScope.gameROM.getFile("/data/Sound/sound_data.sdat")));

  const ctx = globalScope.nitroAudio.ctx;
  const buf = ctx.createBuffer(1, 1, 44000);
  const osc = ctx.createBufferSource();
  osc.buffer = buf;
  osc.connect(ctx.destination);
  if ((osc as any).noteOn) osc.start = (osc as any).noteOn;
  globalScope.osc = osc;

  const res = new globalScope.IngameRes(globalScope.gameROM);

  const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("keydown", keyDown);
  document.addEventListener("keyup", keyUp);

  document.addEventListener("touchstart", touchStart, { passive: false });
  document.addEventListener("touchend", touchEnd, { passive: false });
  document.addEventListener("touchcancel", touchCancel, { passive: false });
  document.addEventListener("touchmove", touchMove, { passive: false });

  canvas.addEventListener("click", () => {
    if (!(osc as any).donezo) {
      osc.start(0);
      (osc as any).donezo = true;
    }
  });

  globalScope.mainScene = new globalScope.singleScene(`mkds/${window.prompt("Select a course to load. (0 to 31, eg rainbow road = 15)")}`, 0, res);

  big();
  render();
}

function render() {
  globalScope.timeSync += Date.now() - globalScope.lastTime;
  globalScope.lastTime = Date.now();
  big();

  globalScope.gl.viewport(0, 0, globalScope.gl.viewportWidth, globalScope.gl.viewportHeight);
  globalScope.gl.clear(globalScope.gl.COLOR_BUFFER_BIT | globalScope.gl.DEPTH_BUFFER_BIT | globalScope.gl.STENCIL_BUFFER_BIT);

  while (globalScope.timeSync > 0) {
    globalScope.mainScene.update();
    processTouches();
    if (globalScope.timeSync > 1000) globalScope.timeSync = 1000;
    globalScope.timeSync -= 1000 / 60;
  }

  globalScope.nitroAudio.tick();
  globalScope.mainScene.render();

  window.requestAnimationFrame(render);
}

function keyDown(e: KeyboardEvent) {
  e.preventDefault();
  e.stopPropagation();
  globalScope.keysArray[e.keyCode] = true;
}

function keyUp(e: KeyboardEvent) {
  e.preventDefault();
  e.stopPropagation();
  globalScope.keysArray[e.keyCode] = false;
}

function processTouches() {
  for (let i = 0; i < globalScope.touches.length; i++) {
    const touch = globalScope.touches[i];
    touch.pressed = false;
    touch.lastx = touch.x;
    touch.lasty = touch.y;
    if (touch.released) globalScope.touches.splice(i--, 1);
  }
}

function setTouchPos(obj: any, touch: Touch) {
  obj.x = touch.clientX / document.body.clientWidth;
  obj.y = touch.clientY / document.body.clientHeight;
}

function getTouchObj(touch: Touch) {
  for (let i = 0; i < globalScope.touches.length; i++) {
    const mkTouch = globalScope.touches[i];
    if (mkTouch.id === touch.identifier) {
      setTouchPos(mkTouch, touch);
      return mkTouch;
    }
  }
  const result: any = { id: touch.identifier };
  setTouchPos(result, touch);
  globalScope.touches.push(result);
  return result;
}

function touchStart(e: TouchEvent) {
  if (!globalScope.osc.donezo) {
    globalScope.osc.start(0);
    globalScope.osc.donezo = true;
  }
  e.preventDefault();
  for (let i = 0; i < e.changedTouches.length; i++) {
    const obj = getTouchObj(e.changedTouches[i]);
    obj.pressed = true;
  }
}

function touchEnd(e: TouchEvent) {
  e.preventDefault();
  for (let i = 0; i < e.changedTouches.length; i++) {
    const obj = getTouchObj(e.changedTouches[i]);
    obj.released = true;
  }
}

function touchMove(e: TouchEvent) {
  e.preventDefault();
  for (let i = 0; i < e.changedTouches.length; i++) {
    getTouchObj(e.changedTouches[i]);
  }
}

function touchCancel(e: TouchEvent) {
  e.preventDefault();
  for (let i = 0; i < e.changedTouches.length; i++) {
    const obj = getTouchObj(e.changedTouches[i]);
    obj.released = true;
  }
}

function lockPtr() {
  if (globalScope.waitForROM) {
    (document.getElementById("fileIn") as HTMLInputElement).click();
  }
}

function mouseMove(e: MouseEvent) {
  void (e.movementX || (e as any).mozMovementX || (e as any).webkitMovementX || 0);
  void (e.movementY || (e as any).mozMovementY || (e as any).webkitMovementY || 0);
}

function initGL(canvas: HTMLCanvasElement) {
  try {
    const gl = canvas.getContext("webgl", { premultipliedAlpha: false, stencil: true, antialias: !globalScope.mobile }) as any;
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
    return gl;
  } catch {
    alert("WebGL could not be initialized.");
    return false;
  }
}

function big() {
  const element = document.getElementById("canvas3d") as HTMLCanvasElement;
  const width = (element.clientWidth * (window.devicePixelRatio || 1)) | 0;
  const height = (element.clientHeight * (window.devicePixelRatio || 1)) | 0;
  if (width !== element.width || height !== element.height) {
    element.width = width;
    element.height = height;
  }
  fixScale();
}

function fixScale() {
  if (globalScope.gl == null) return;
  const element = document.getElementById("canvas3d") as HTMLCanvasElement;
  globalScope.gl.viewportWidth = element.width;
  globalScope.gl.viewportHeight = element.height;
}
