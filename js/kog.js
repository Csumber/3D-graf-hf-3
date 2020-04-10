if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kog'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kog'.");
}if (typeof this['kotlinx-serialization-kotlinx-serialization-runtime'] === 'undefined') {
  throw new Error("Error loading module 'kog'. Its dependency 'kotlinx-serialization-kotlinx-serialization-runtime' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-runtime' is loaded prior to 'kog'.");
}var kog = function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_runtime) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var throwCCE = Kotlin.throwCCE;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var Error_0 = Kotlin.kotlin.Error;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.SerialClassDescImpl;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var ReferenceArraySerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.ReferenceArraySerializer;
  var PrimitiveClasses$arrayClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.arrayClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.UnknownFieldException;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.MissingFieldException;
  var getKClass = Kotlin.getKClass;
  var JsonConfiguration = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.JsonConfiguration;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_runtime.kotlinx.serialization.json.Json;
  var Array_0 = Array;
  var Math_0 = Math;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var math = Kotlin.kotlin.math;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var flatten = Kotlin.kotlin.collections.flatten_yrqxlj$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_rblqex$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var Map = Kotlin.kotlin.collections.Map;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_rjqryz$;
  var Random = Kotlin.kotlin.random.Random;
  UniformProvider.prototype = Object.create(Drawable.prototype);
  UniformProvider.prototype.constructor = UniformProvider;
  GameObject.prototype = Object.create(UniformProvider.prototype);
  GameObject.prototype.constructor = GameObject;
  Geometry.prototype = Object.create(Drawable.prototype);
  Geometry.prototype.constructor = Geometry;
  InfiniteGeometry.prototype = Object.create(Geometry.prototype);
  InfiniteGeometry.prototype.constructor = InfiniteGeometry;
  Material.prototype = Object.create(UniformProvider.prototype);
  Material.prototype.constructor = Material;
  Mesh.prototype = Object.create(UniformProvider.prototype);
  Mesh.prototype.constructor = Mesh;
  MultiMesh.prototype = Object.create(UniformProvider.prototype);
  MultiMesh.prototype.constructor = MultiMesh;
  OrthoCamera.prototype = Object.create(UniformProvider.prototype);
  OrthoCamera.prototype.constructor = OrthoCamera;
  PerspectiveCamera.prototype = Object.create(UniformProvider.prototype);
  PerspectiveCamera.prototype.constructor = PerspectiveCamera;
  Program.prototype = Object.create(UniformProvider.prototype);
  Program.prototype.constructor = Program;
  Scene$chevyObject$ObjectLiteral.prototype = Object.create(GameObject.prototype);
  Scene$chevyObject$ObjectLiteral.prototype.constructor = Scene$chevyObject$ObjectLiteral;
  Scene$wheelObjectFL$ObjectLiteral.prototype = Object.create(GameObject.prototype);
  Scene$wheelObjectFL$ObjectLiteral.prototype.constructor = Scene$wheelObjectFL$ObjectLiteral;
  Scene$wheelObjectFR$ObjectLiteral.prototype = Object.create(GameObject.prototype);
  Scene$wheelObjectFR$ObjectLiteral.prototype.constructor = Scene$wheelObjectFR$ObjectLiteral;
  Scene$wheelObjectRL$ObjectLiteral.prototype = Object.create(GameObject.prototype);
  Scene$wheelObjectRL$ObjectLiteral.prototype.constructor = Scene$wheelObjectRL$ObjectLiteral;
  Scene$wheelObjectRR$ObjectLiteral.prototype = Object.create(GameObject.prototype);
  Scene$wheelObjectRR$ObjectLiteral.prototype.constructor = Scene$wheelObjectRR$ObjectLiteral;
  Scene.prototype = Object.create(UniformProvider.prototype);
  Scene.prototype.constructor = Scene;
  SubmeshGeometry.prototype = Object.create(Geometry.prototype);
  SubmeshGeometry.prototype.constructor = SubmeshGeometry;
  TexturedQuadGeometry.prototype = Object.create(Geometry.prototype);
  TexturedQuadGeometry.prototype.constructor = TexturedQuadGeometry;
  ProgramReflection.prototype = Object.create(Drawable.prototype);
  ProgramReflection.prototype.constructor = ProgramReflection;
  UniformProvider$using$ObjectLiteral.prototype = Object.create(Drawable.prototype);
  UniformProvider$using$ObjectLiteral.prototype.constructor = UniformProvider$using$ObjectLiteral;
  Vec1Array.prototype = Object.create(VecArray.prototype);
  Vec1Array.prototype.constructor = Vec1Array;
  Vec2Array.prototype = Object.create(VecArray.prototype);
  Vec2Array.prototype.constructor = Vec2Array;
  Vec3Array.prototype = Object.create(VecArray.prototype);
  Vec3Array.prototype.constructor = Vec3Array;
  Vec4Array.prototype = Object.create(VecArray.prototype);
  Vec4Array.prototype.constructor = Vec4Array;
  function App(canvas, overlay) {
    this.canvas = canvas;
    this.overlay = overlay;
    var tmp$, tmp$_0;
    tmp$ = this.canvas.getContext('webgl2', new App$gl$ObjectLiteral());
    if (tmp$ == null) {
      throw Error_init('Browser does not support WebGL2');
    }this.gl = Kotlin.isType(tmp$_0 = tmp$, WebGL2RenderingContext) ? tmp$_0 : throwCCE();
    this.scene = new Scene(this.gl);
    this.resize();
    this.keysPressed = HashSet_init();
  }
  App.prototype.resize = function () {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
    this.scene.resize_smaims$(this.gl, this.canvas);
  };
  function App$registerEventHandlers$lambda(this$App) {
    return function (event) {
      return this$App.keysPressed.add_11rb$(keyNames_getInstance().get_za3lpa$(event.keyCode));
    };
  }
  function App$registerEventHandlers$lambda_0(this$App) {
    return function (event) {
      return this$App.keysPressed.remove_11rb$(keyNames_getInstance().get_za3lpa$(event.keyCode));
    };
  }
  function App$registerEventHandlers$lambda_1(this$App) {
    return function (event) {
      this$App.scene.camera.mouseDown();
      return undefined;
    };
  }
  function App$registerEventHandlers$lambda_2(this$App) {
    return function (event) {
      this$App.scene.camera.mouseMove_tfvzir$(event);
      event.stopPropagation();
      return Unit;
    };
  }
  function App$registerEventHandlers$lambda_3(this$App) {
    return function (event) {
      this$App.scene.camera.mouseUp();
      return event;
    };
  }
  function App$registerEventHandlers$lambda_4(event) {
    return event;
  }
  function App$registerEventHandlers$lambda_5(this$App) {
    return function (it) {
      this$App.resize();
      return Unit;
    };
  }
  function App$registerEventHandlers$lambda_6(this$App) {
    return function (it) {
      this$App.update();
      return Unit;
    };
  }
  App.prototype.registerEventHandlers = function () {
    document.onkeydown = App$registerEventHandlers$lambda(this);
    document.onkeyup = App$registerEventHandlers$lambda_0(this);
    this.canvas.onmousedown = App$registerEventHandlers$lambda_1(this);
    this.canvas.onmousemove = App$registerEventHandlers$lambda_2(this);
    this.canvas.onmouseup = App$registerEventHandlers$lambda_3(this);
    this.canvas.onmouseout = App$registerEventHandlers$lambda_4;
    window.addEventListener('resize', App$registerEventHandlers$lambda_5(this));
    window.requestAnimationFrame(App$registerEventHandlers$lambda_6(this));
  };
  function App$update$lambda(this$App) {
    return function (it) {
      this$App.update();
      return Unit;
    };
  }
  App.prototype.update = function () {
    this.scene.update_yv4vgl$(this.gl, this.keysPressed);
    window.requestAnimationFrame(App$update$lambda(this));
  };
  function App$gl$ObjectLiteral() {
    this.alpha = false;
  }
  App$gl$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: []
  };
  function main() {
    var tmp$, tmp$_0;
    var canvas = Kotlin.isType(tmp$ = document.getElementById('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    var overlay = Kotlin.isType(tmp$_0 = document.getElementById('overlay'), HTMLDivElement) ? tmp$_0 : throwCCE();
    overlay.innerHTML = '<font color="red">WebGL<\/font>';
    try {
      var app = new App(canvas, overlay);
      app.registerEventHandlers();
    } catch (e) {
      if (Kotlin.isType(e, Error_0)) {
        console.error(e.message);
      } else
        throw e;
    }
  }
  function GameObject(mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    if (position === void 0) {
      position = Vec3_init_2(Vec3$Companion_getInstance().zeros);
    }if (roll === void 0)
      roll = 0.0;
    if (yaw === void 0)
      yaw = 0.0;
    if (pitch === void 0)
      pitch = 0.0;
    if (scale === void 0) {
      scale = Vec3_init_2(Vec3$Companion_getInstance().ones);
    }if (m === void 0)
      m = 1.0;
    if (v === void 0) {
      v = Vec3_init_2(Vec3$Companion_getInstance().ones);
    }if (c === void 0)
      c = 1.0;
    if (c2 === void 0)
      c2 = 1.0;
    if (theta === void 0)
      theta = 1.0;
    if (omega === void 0)
      omega = 0.0;
    UniformProvider.call(this, ['gameObject']);
    this.position = position;
    this.roll = roll;
    this.yaw = yaw;
    this.pitch = pitch;
    this.scale = scale;
    this.m = m;
    this.v = v;
    this.c = c;
    this.c2 = c2;
    this.theta = theta;
    this.omega = omega;
    this.modelMatrix_xq27sj$_0 = Mat4_init(new Float32Array([])).provideDelegate_hr34ju$(this, GameObject$modelMatrix_metadata);
    this.addComponentsAndGatherUniforms_inpnaw$([mesh]);
  }
  var GameObject$modelMatrix_metadata = new PropertyMetadata('modelMatrix');
  Object.defineProperty(GameObject.prototype, 'modelMatrix', {
    get: function () {
      return this.modelMatrix_xq27sj$_0.getValue_hr34ju$(this, GameObject$modelMatrix_metadata);
    }
  });
  GameObject.prototype.update = function () {
    this.modelMatrix.set_8cqhcw$(new Float32Array([])).scale_wobp50$(this.scale).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0).translate_wobp50$(this.position);
  };
  GameObject.prototype.move_e8h23$$default = function (dt, t, keysPressed, gameObjects) {
    return true;
  };
  GameObject.prototype.move_e8h23$ = function (dt, t, keysPressed, gameObjects, callback$default) {
    if (dt === void 0)
      dt = 0.016666;
    if (t === void 0)
      t = 0.0;
    if (keysPressed === void 0)
      keysPressed = emptySet();
    if (gameObjects === void 0)
      gameObjects = emptyList();
    return callback$default ? callback$default(dt, t, keysPressed, gameObjects) : this.move_e8h23$$default(dt, t, keysPressed, gameObjects);
  };
  GameObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameObject',
    interfaces: [UniformProvider]
  };
  function InfiniteGeometry(gl) {
    Geometry.call(this);
    this.gl = gl;
    this.vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, -1.0, 0.0, -1.0, 0.0]), WebGLRenderingContext.STATIC_DRAW);
    this.vertexNormalBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]), WebGLRenderingContext.STATIC_DRAW);
    this.vertexTexCoordBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, -1.0, -1.0, 0.0, 0.0]), WebGLRenderingContext.STATIC_DRAW);
    this.indexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 1, 3, 0, 2, 3]), WebGLRenderingContext.STATIC_DRAW);
    this.inputLayout = this.gl.createVertexArray();
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.enableVertexAttribArray(0);
    this.gl.vertexAttribPointer(0, 4, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.enableVertexAttribArray(1);
    this.gl.vertexAttribPointer(1, 4, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.enableVertexAttribArray(2);
    this.gl.vertexAttribPointer(2, 4, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindVertexArray(null);
  }
  InfiniteGeometry.prototype.draw = function () {
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.drawElements(WebGLRenderingContext.TRIANGLES, 9, WebGLRenderingContext.UNSIGNED_SHORT, 0);
  };
  InfiniteGeometry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InfiniteGeometry',
    interfaces: [Geometry]
  };
  function keyNames() {
    keyNames_instance = this;
    this.lookup_0 = ['', '', '', 'CANCEL', '', '', 'HELP', '', 'BACK_SPACE', 'TAB', '', '', 'CLEAR', 'ENTER', 'ENTER_SPECIAL', '', 'SHIFT', 'CONTROL', 'ALT', 'PAUSE', 'CAPS_LOCK', 'KANA', 'EISU', 'JUNJA', 'FINAL', 'HANJA', '', 'ESCAPE', 'CONVERT', 'NONCONVERT', 'ACCEPT', 'MODECHANGE', 'SPACE', 'PAGE_UP', 'PAGE_DOWN', 'END', 'HOME', 'LEFT', 'UP', 'RIGHT', 'DOWN', 'SELECT', 'PRINT', 'EXECUTE', 'PRINTSCREEN', 'INSERT', 'DELETE', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'COLON', 'SEMICOLON', 'LESS_THAN', 'EQUALS', 'GREATER_THAN', 'QUESTION_MARK', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'OS_KEY', '', 'CONTEXT_MENU', '', 'SLEEP', 'NUMPAD0', 'NUMPAD1', 'NUMPAD2', 'NUMPAD3', 'NUMPAD4', 'NUMPAD5', 'NUMPAD6', 'NUMPAD7', 'NUMPAD8', 'NUMPAD9', 'MULTIPLY', 'ADD', 'SEPARATOR', 'SUBTRACT', 'DECIMAL', 'DIVIDE', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', '', '', '', '', '', '', '', '', 'NUM_LOCK', 'SCROLL_LOCK', 'WIN_OEM_FJ_JISHO', 'WIN_OEM_FJ_MASSHOU', 'WIN_OEM_FJ_TOUROKU', 'WIN_OEM_FJ_LOYA', 'WIN_OEM_FJ_ROYA', '', '', '', '', '', '', '', '', '', 'CIRCUMFLEX', 'EXCLAMATION', 'DOUBLE_QUOTE', 'HASH', 'DOLLAR', 'PERCENT', 'AMPERSAND', 'UNDERSCORE', 'OPEN_PAREN', 'CLOSE_PAREN', 'ASTERISK', 'PLUS', 'PIPE', 'HYPHEN_MINUS', 'OPEN_CURLY_BRACKET', 'CLOSE_CURLY_BRACKET', 'TILDE', '', '', '', '', 'VOLUME_MUTE', 'VOLUME_DOWN', 'VOLUME_UP', '', '', 'SEMICOLON', 'EQUALS', 'COMMA', 'MINUS', 'PERIOD', 'SLASH', 'BACK_QUOTE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'OPEN_BRACKET', 'BACK_SLASH', 'CLOSE_BRACKET', 'QUOTE', '', 'META', 'ALTGR', '', 'WIN_ICO_HELP', 'WIN_ICO_00', '', 'WIN_ICO_CLEAR', '', '', 'WIN_OEM_RESET', 'WIN_OEM_JUMP', 'WIN_OEM_PA1', 'WIN_OEM_PA2', 'WIN_OEM_PA3', 'WIN_OEM_WSCTRL', 'WIN_OEM_CUSEL', 'WIN_OEM_ATTN', 'WIN_OEM_FINISH', 'WIN_OEM_COPY', 'WIN_OEM_AUTO', 'WIN_OEM_ENLW', 'WIN_OEM_BACKTAB', 'ATTN', 'CRSEL', 'EXSEL', 'EREOF', 'PLAY', 'ZOOM', '', 'PA1', 'WIN_OEM_CLEAR', ''];
  }
  keyNames.prototype.get_za3lpa$ = function (index) {
    return this.lookup_0[index];
  };
  keyNames.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'keyNames',
    interfaces: []
  };
  var keyNames_instance = null;
  function keyNames_getInstance() {
    if (keyNames_instance === null) {
      new keyNames();
    }return keyNames_instance;
  }
  function Material(program) {
    UniformProvider.call(this, ['material']);
    this.addComponentsAndGatherUniforms_inpnaw$([program]);
  }
  Material.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Material',
    interfaces: [UniformProvider]
  };
  function Mesh(material, geometry) {
    UniformProvider.call(this, ['mesh']);
    this.addComponentsAndGatherUniforms_inpnaw$([material, geometry]);
  }
  Mesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mesh',
    interfaces: [UniformProvider]
  };
  function JsonMesh(vertices, normals, texturecoords, faces) {
    JsonMesh$Companion_getInstance();
    this.vertices = vertices;
    this.normals = normals;
    this.texturecoords = texturecoords;
    this.faces = faces;
  }
  function JsonMesh$Companion() {
    JsonMesh$Companion_instance = this;
  }
  JsonMesh$Companion.prototype.serializer = function () {
    return JsonMesh$$serializer_getInstance();
  };
  JsonMesh$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonMesh$Companion_instance = null;
  function JsonMesh$Companion_getInstance() {
    if (JsonMesh$Companion_instance === null) {
      new JsonMesh$Companion();
    }return JsonMesh$Companion_instance;
  }
  function JsonMesh$$serializer() {
    this.descriptor_bb3t7e$_0 = new SerialClassDescImpl('JsonMesh', this, 4);
    this.descriptor.addElement_ivxn3r$('vertices', false);
    this.descriptor.addElement_ivxn3r$('normals', false);
    this.descriptor.addElement_ivxn3r$('texturecoords', false);
    this.descriptor.addElement_ivxn3r$('faces', false);
    JsonMesh$$serializer_instance = this;
  }
  Object.defineProperty(JsonMesh$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_bb3t7e$_0;
    }
  });
  JsonMesh$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), value.vertices);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), value.normals);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer)), value.texturecoords);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$shortClass, internal.ShortSerializer)), value.faces);
    output.endStructure_qatsm0$(this.descriptor);
  };
  JsonMesh$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), local0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer)) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), local1);
          bitMask0 |= 2;
          break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer))) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer)), local2);
          bitMask0 |= 4;
          break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$shortClass, internal.ShortSerializer))) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$shortClass, internal.ShortSerializer)), local3);
          bitMask0 |= 8;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return JsonMesh_init(bitMask0, local0, local1, local2, local3, null);
  };
  JsonMesh$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer), new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$floatClass, internal.FloatSerializer)), new ReferenceArraySerializer(PrimitiveClasses$arrayClass, new ReferenceArraySerializer(PrimitiveClasses$shortClass, internal.ShortSerializer))];
  };
  JsonMesh$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var JsonMesh$$serializer_instance = null;
  function JsonMesh$$serializer_getInstance() {
    if (JsonMesh$$serializer_instance === null) {
      new JsonMesh$$serializer();
    }return JsonMesh$$serializer_instance;
  }
  function JsonMesh_init(seen1, vertices, normals, texturecoords, faces, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(JsonMesh.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('vertices');
    else
      $this.vertices = vertices;
    if ((seen1 & 2) === 0)
      throw new MissingFieldException('normals');
    else
      $this.normals = normals;
    if ((seen1 & 4) === 0)
      throw new MissingFieldException('texturecoords');
    else
      $this.texturecoords = texturecoords;
    if ((seen1 & 8) === 0)
      throw new MissingFieldException('faces');
    else
      $this.faces = faces;
    return $this;
  }
  JsonMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonMesh',
    interfaces: []
  };
  JsonMesh.prototype.component1 = function () {
    return this.vertices;
  };
  JsonMesh.prototype.component2 = function () {
    return this.normals;
  };
  JsonMesh.prototype.component3 = function () {
    return this.texturecoords;
  };
  JsonMesh.prototype.component4 = function () {
    return this.faces;
  };
  JsonMesh.prototype.copy_1dazsk$ = function (vertices, normals, texturecoords, faces) {
    return new JsonMesh(vertices === void 0 ? this.vertices : vertices, normals === void 0 ? this.normals : normals, texturecoords === void 0 ? this.texturecoords : texturecoords, faces === void 0 ? this.faces : faces);
  };
  JsonMesh.prototype.toString = function () {
    return 'JsonMesh(vertices=' + Kotlin.toString(this.vertices) + (', normals=' + Kotlin.toString(this.normals)) + (', texturecoords=' + Kotlin.toString(this.texturecoords)) + (', faces=' + Kotlin.toString(this.faces)) + ')';
  };
  JsonMesh.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.vertices) | 0;
    result = result * 31 + Kotlin.hashCode(this.normals) | 0;
    result = result * 31 + Kotlin.hashCode(this.texturecoords) | 0;
    result = result * 31 + Kotlin.hashCode(this.faces) | 0;
    return result;
  };
  JsonMesh.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.vertices, other.vertices) && Kotlin.equals(this.normals, other.normals) && Kotlin.equals(this.texturecoords, other.texturecoords) && Kotlin.equals(this.faces, other.faces)))));
  };
  function JsonModel(meshes) {
    JsonModel$Companion_getInstance();
    this.meshes = meshes;
  }
  function JsonModel$Companion() {
    JsonModel$Companion_instance = this;
  }
  JsonModel$Companion.prototype.serializer = function () {
    return JsonModel$$serializer_getInstance();
  };
  JsonModel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JsonModel$Companion_instance = null;
  function JsonModel$Companion_getInstance() {
    if (JsonModel$Companion_instance === null) {
      new JsonModel$Companion();
    }return JsonModel$Companion_instance;
  }
  function JsonModel$$serializer() {
    this.descriptor_tkaeti$_0 = new SerialClassDescImpl('JsonModel', this, 1);
    this.descriptor.addElement_ivxn3r$('meshes', false);
    JsonModel$$serializer_instance = this;
  }
  Object.defineProperty(JsonModel$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_tkaeti$_0;
    }
  });
  JsonModel$$serializer.prototype.serialize_awe97i$ = function (encoder, value) {
    var output = encoder.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new ReferenceArraySerializer(getKClass(JsonMesh), JsonMesh$$serializer_getInstance()), value.meshes);
    output.endStructure_qatsm0$(this.descriptor);
  };
  JsonModel$$serializer.prototype.deserialize_nts5qn$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0;
    var input = decoder.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new ReferenceArraySerializer(getKClass(JsonMesh), JsonMesh$$serializer_getInstance())) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new ReferenceArraySerializer(getKClass(JsonMesh), JsonMesh$$serializer_getInstance()), local0);
          bitMask0 |= 1;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return JsonModel_init(bitMask0, local0, null);
  };
  JsonModel$$serializer.prototype.childSerializers = function () {
    return [new ReferenceArraySerializer(getKClass(JsonMesh), JsonMesh$$serializer_getInstance())];
  };
  JsonModel$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var JsonModel$$serializer_instance = null;
  function JsonModel$$serializer_getInstance() {
    if (JsonModel$$serializer_instance === null) {
      new JsonModel$$serializer();
    }return JsonModel$$serializer_instance;
  }
  function JsonModel_init(seen1, meshes, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(JsonModel.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('meshes');
    else
      $this.meshes = meshes;
    return $this;
  }
  JsonModel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsonModel',
    interfaces: []
  };
  JsonModel.prototype.component1 = function () {
    return this.meshes;
  };
  JsonModel.prototype.copy_swtkh3$ = function (meshes) {
    return new JsonModel(meshes === void 0 ? this.meshes : meshes);
  };
  JsonModel.prototype.toString = function () {
    return 'JsonModel(meshes=' + Kotlin.toString(this.meshes) + ')';
  };
  JsonModel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.meshes) | 0;
    return result;
  };
  JsonModel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.meshes, other.meshes))));
  };
  function MultiMesh(gl, jsonModelFileUrl, materials) {
    UniformProvider.call(this, ['multiMesh']);
    var request = new XMLHttpRequest();
    request.overrideMimeType('application/json');
    request.open('GET', jsonModelFileUrl, false);
    request.onloadend = MultiMesh_init$lambda(request, materials, jsonModelFileUrl, gl, this);
    request.send();
  }
  function MultiMesh_init$lambda(closure$request, closure$materials, closure$jsonModelFileUrl, closure$gl, this$MultiMesh) {
    return function (it) {
      var json = new Json(JsonConfiguration.Companion.Stable.copy_bjakrj$(void 0, true));
      var jsonModel = json.parse_awif5v$(JsonModel$Companion_getInstance().serializer(), closure$request.responseText);
      if (jsonModel.meshes.length !== closure$materials.length) {
        throw Error_init('MultiMesh from ' + closure$jsonModelFileUrl + ' has ' + jsonModel.meshes.length + ' submeshes, but only ' + closure$materials.length + ' materials were provided.');
      }var size = jsonModel.meshes.length;
      var array = Array_0(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var closure$materials_0 = closure$materials;
        var closure$gl_0 = closure$gl;
        array[i] = new Mesh(closure$materials_0[i], new SubmeshGeometry(closure$gl_0, jsonModel.meshes[i]));
      }
      var submeshes = array;
      this$MultiMesh.addComponentsAndGatherUniforms_inpnaw$(submeshes.slice());
      return Unit;
    };
  }
  MultiMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MultiMesh',
    interfaces: [UniformProvider]
  };
  function OrthoCamera(programs) {
    UniformProvider.call(this, ['camera']);
    this.position = Vec2_init(0.0, 0.0);
    this.roll = 0.0;
    this.windowSize = Vec2_init(2.0, 2.0);
    this.viewProjMatrix_ixvvra$_0 = Mat4_init(new Float32Array([])).provideDelegate_hr34ju$(this, OrthoCamera$viewProjMatrix_metadata);
    this.updateViewProjMatrix();
    this.addComponentsAndGatherUniforms_inpnaw$(programs.slice());
  }
  var OrthoCamera$viewProjMatrix_metadata = new PropertyMetadata('viewProjMatrix');
  Object.defineProperty(OrthoCamera.prototype, 'viewProjMatrix', {
    get: function () {
      return this.viewProjMatrix_ixvvra$_0.getValue_hr34ju$(this, OrthoCamera$viewProjMatrix_metadata);
    }
  });
  OrthoCamera.prototype.updateViewProjMatrix = function () {
    this.viewProjMatrix.set_8cqhcw$(new Float32Array([])).scale_y2kzbl$(0.5).scale_wobp51$(this.windowSize).rotate_7b5o5w$(this.roll).translate_wobp51$(this.position).invert();
  };
  OrthoCamera.prototype.setAspectRatio_mx4ult$ = function (ar) {
    var tmp$ = this.windowSize;
    var value = this.windowSize.storage[1] * ar;
    tmp$.storage[0] = value;
    this.updateViewProjMatrix();
  };
  OrthoCamera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OrthoCamera',
    interfaces: [UniformProvider]
  };
  function PerspectiveCamera(programs) {
    PerspectiveCamera$Companion_getInstance();
    UniformProvider.call(this, ['camera']);
    this.position_ou8auc$_0 = Vec3_init(0.0, 0.0, 1.0).provideDelegate_hr34ju$(this, PerspectiveCamera$position_metadata);
    this.roll = 0.0;
    this.pitch = 0.0;
    this.yaw = 0.0;
    this.fov = 1.0;
    this.aspect = 1.0;
    this.nearPlane = 0.1;
    this.farPlane = 1000.0;
    this.ahead = Vec3_init(0.0, 0.0, -1.0);
    this.right = Vec3_init(1.0, 0.0, 0.0);
    this.up = Vec3_init(0.0, 1.0, 0.0);
    this.speed = 10.5;
    this.isDragging = false;
    this.mouseDelta = Vec2_init(0.0, 0.0);
    this.rotationMatrix = Mat4_init(new Float32Array([]));
    this.viewProjMatrix_k4h0ja$_0 = Mat4_init(new Float32Array([])).provideDelegate_hr34ju$(this, PerspectiveCamera$viewProjMatrix_metadata);
    this.rayDirMatrix_701ky1$_0 = Mat4_init(new Float32Array([])).provideDelegate_hr34ju$(this, PerspectiveCamera$rayDirMatrix_metadata);
    this.update();
    this.addComponentsAndGatherUniforms_inpnaw$(programs.slice());
  }
  var PerspectiveCamera$position_metadata = new PropertyMetadata('position');
  Object.defineProperty(PerspectiveCamera.prototype, 'position', {
    get: function () {
      return this.position_ou8auc$_0.getValue_hr34ju$(this, PerspectiveCamera$position_metadata);
    }
  });
  var PerspectiveCamera$viewProjMatrix_metadata = new PropertyMetadata('viewProjMatrix');
  Object.defineProperty(PerspectiveCamera.prototype, 'viewProjMatrix', {
    get: function () {
      return this.viewProjMatrix_k4h0ja$_0.getValue_hr34ju$(this, PerspectiveCamera$viewProjMatrix_metadata);
    }
  });
  var PerspectiveCamera$rayDirMatrix_metadata = new PropertyMetadata('rayDirMatrix');
  Object.defineProperty(PerspectiveCamera.prototype, 'rayDirMatrix', {
    get: function () {
      return this.rayDirMatrix_701ky1$_0.getValue_hr34ju$(this, PerspectiveCamera$rayDirMatrix_metadata);
    }
  });
  function PerspectiveCamera$Companion() {
    PerspectiveCamera$Companion_instance = this;
    this.worldUp = Vec3_init(0.0, 1.0, 0.0);
  }
  PerspectiveCamera$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PerspectiveCamera$Companion_instance = null;
  function PerspectiveCamera$Companion_getInstance() {
    if (PerspectiveCamera$Companion_instance === null) {
      new PerspectiveCamera$Companion();
    }return PerspectiveCamera$Companion_instance;
  }
  PerspectiveCamera.prototype.update = function () {
    this.rotationMatrix.set_8cqhcw$(new Float32Array([])).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0);
    this.viewProjMatrix.set_qp9vav$(this.rotationMatrix).translate_wobp50$(this.position).invert();
    var x = this.fov * 0.5;
    var yScale = 1.0 / Math_0.tan(x);
    var xScale = yScale / this.aspect;
    var f = this.farPlane;
    var n = this.nearPlane;
    this.viewProjMatrix.timesAssign_wohikv$(Mat4_init(new Float32Array([xScale, 0.0, 0.0, 0.0, 0.0, yScale, 0.0, 0.0, 0.0, 0.0, (n + f) / (n - f), -1.0, 0.0, 0.0, 2 * n * f / (n - f), 0.0])));
    this.rayDirMatrix.set_8cqhcw$(new Float32Array([])).translate_wobp50$(this.position);
    this.rayDirMatrix.timesAssign_wohikv$(this.viewProjMatrix);
    this.rayDirMatrix.invert();
  };
  PerspectiveCamera.prototype.setAspectRatio_mx4ult$ = function (ar) {
    this.aspect = ar;
    this.update();
  };
  PerspectiveCamera.prototype.move_84y47s$ = function (dt, keysPressed) {
    if (this.isDragging) {
      this.yaw -= this.mouseDelta.storage[0] * 0.002;
      this.pitch -= this.mouseDelta.storage[1] * 0.002;
      if (this.pitch > 3.14 / 2.0) {
        this.pitch = 3.14 / 2.0;
      }if (this.pitch < -3.14 / 2.0) {
        this.pitch = -3.14 / 2.0;
      }this.mouseDelta.set_8cqhcw$(new Float32Array([]));
    }if (keysPressed.contains_11rb$('W')) {
      var tmp$ = this.position;
      var $this = this.ahead;
      var scalar = this.speed * dt;
      var other = Vec3_init($this.storage[0] * scalar, $this.storage[1] * scalar, $this.storage[2] * scalar);
      tmp$.storage[0] = tmp$.storage[0] + other.storage[0];
      tmp$.storage[1] = tmp$.storage[1] + other.storage[1];
      tmp$.storage[2] = tmp$.storage[2] + other.storage[2];
    }if (keysPressed.contains_11rb$('S')) {
      var tmp$_0 = this.position;
      var $this_0 = this.ahead;
      var scalar_0 = this.speed * dt;
      var other_0 = Vec3_init($this_0.storage[0] * scalar_0, $this_0.storage[1] * scalar_0, $this_0.storage[2] * scalar_0);
      tmp$_0.storage[0] = tmp$_0.storage[0] - other_0.storage[0];
      tmp$_0.storage[1] = tmp$_0.storage[1] - other_0.storage[1];
      tmp$_0.storage[2] = tmp$_0.storage[2] - other_0.storage[2];
    }if (keysPressed.contains_11rb$('D')) {
      var tmp$_1 = this.position;
      var $this_1 = this.right;
      var scalar_1 = this.speed * dt;
      var other_1 = Vec3_init($this_1.storage[0] * scalar_1, $this_1.storage[1] * scalar_1, $this_1.storage[2] * scalar_1);
      tmp$_1.storage[0] = tmp$_1.storage[0] + other_1.storage[0];
      tmp$_1.storage[1] = tmp$_1.storage[1] + other_1.storage[1];
      tmp$_1.storage[2] = tmp$_1.storage[2] + other_1.storage[2];
    }if (keysPressed.contains_11rb$('A')) {
      var tmp$_2 = this.position;
      var $this_2 = this.right;
      var scalar_2 = this.speed * dt;
      var other_2 = Vec3_init($this_2.storage[0] * scalar_2, $this_2.storage[1] * scalar_2, $this_2.storage[2] * scalar_2);
      tmp$_2.storage[0] = tmp$_2.storage[0] - other_2.storage[0];
      tmp$_2.storage[1] = tmp$_2.storage[1] - other_2.storage[1];
      tmp$_2.storage[2] = tmp$_2.storage[2] - other_2.storage[2];
    }if (keysPressed.contains_11rb$('E')) {
      var tmp$_3 = this.position;
      var $this_3 = this.up;
      var scalar_3 = this.speed * dt;
      var other_3 = Vec3_init($this_3.storage[0] * scalar_3, $this_3.storage[1] * scalar_3, $this_3.storage[2] * scalar_3);
      tmp$_3.storage[0] = tmp$_3.storage[0] + other_3.storage[0];
      tmp$_3.storage[1] = tmp$_3.storage[1] + other_3.storage[1];
      tmp$_3.storage[2] = tmp$_3.storage[2] + other_3.storage[2];
    }if (keysPressed.contains_11rb$('Q')) {
      var tmp$_4 = this.position;
      var $this_4 = this.up;
      var scalar_4 = this.speed * dt;
      var other_4 = Vec3_init($this_4.storage[0] * scalar_4, $this_4.storage[1] * scalar_4, $this_4.storage[2] * scalar_4);
      tmp$_4.storage[0] = tmp$_4.storage[0] - other_4.storage[0];
      tmp$_4.storage[1] = tmp$_4.storage[1] - other_4.storage[1];
      tmp$_4.storage[2] = tmp$_4.storage[2] - other_4.storage[2];
    }this.update();
    var $this_5 = Vec3_init(0.0, 0.0, -1.0);
    var $this_6 = Vec4_init($this_5.storage[0], $this_5.storage[1], $this_5.storage[2], 0.0);
    var m = this.rotationMatrix;
    var vp = Vec4_init_3($this_6);
    vp.storage[0] = m.storage[0] * $this_6.storage[0] + m.storage[1] * $this_6.storage[1] + m.storage[2] * $this_6.storage[2] + m.storage[3] * $this_6.storage[3];
    vp.storage[1] = m.storage[4] * $this_6.storage[0] + m.storage[5] * $this_6.storage[1] + m.storage[6] * $this_6.storage[2] + m.storage[7] * $this_6.storage[3];
    vp.storage[2] = m.storage[8] * $this_6.storage[0] + m.storage[9] * $this_6.storage[1] + m.storage[10] * $this_6.storage[2] + m.storage[11] * $this_6.storage[3];
    vp.storage[3] = m.storage[12] * $this_6.storage[0] + m.storage[13] * $this_6.storage[1] + m.storage[14] * $this_6.storage[2] + m.storage[15] * $this_6.storage[3];
    this.ahead = new Vec3(vp.storage);
    var $this_7 = Vec3_init(1.0, 0.0, 0.0);
    var $this_8 = Vec4_init($this_7.storage[0], $this_7.storage[1], $this_7.storage[2], 0.0);
    var m_0 = this.rotationMatrix;
    var vp_0 = Vec4_init_3($this_8);
    vp_0.storage[0] = m_0.storage[0] * $this_8.storage[0] + m_0.storage[1] * $this_8.storage[1] + m_0.storage[2] * $this_8.storage[2] + m_0.storage[3] * $this_8.storage[3];
    vp_0.storage[1] = m_0.storage[4] * $this_8.storage[0] + m_0.storage[5] * $this_8.storage[1] + m_0.storage[6] * $this_8.storage[2] + m_0.storage[7] * $this_8.storage[3];
    vp_0.storage[2] = m_0.storage[8] * $this_8.storage[0] + m_0.storage[9] * $this_8.storage[1] + m_0.storage[10] * $this_8.storage[2] + m_0.storage[11] * $this_8.storage[3];
    vp_0.storage[3] = m_0.storage[12] * $this_8.storage[0] + m_0.storage[13] * $this_8.storage[1] + m_0.storage[14] * $this_8.storage[2] + m_0.storage[15] * $this_8.storage[3];
    this.right = new Vec3(vp_0.storage);
    var $this_9 = Vec3_init(0.0, 1.0, 0.0);
    var $this_10 = Vec4_init($this_9.storage[0], $this_9.storage[1], $this_9.storage[2], 0.0);
    var m_1 = this.rotationMatrix;
    var vp_1 = Vec4_init_3($this_10);
    vp_1.storage[0] = m_1.storage[0] * $this_10.storage[0] + m_1.storage[1] * $this_10.storage[1] + m_1.storage[2] * $this_10.storage[2] + m_1.storage[3] * $this_10.storage[3];
    vp_1.storage[1] = m_1.storage[4] * $this_10.storage[0] + m_1.storage[5] * $this_10.storage[1] + m_1.storage[6] * $this_10.storage[2] + m_1.storage[7] * $this_10.storage[3];
    vp_1.storage[2] = m_1.storage[8] * $this_10.storage[0] + m_1.storage[9] * $this_10.storage[1] + m_1.storage[10] * $this_10.storage[2] + m_1.storage[11] * $this_10.storage[3];
    vp_1.storage[3] = m_1.storage[12] * $this_10.storage[0] + m_1.storage[13] * $this_10.storage[1] + m_1.storage[14] * $this_10.storage[2] + m_1.storage[15] * $this_10.storage[3];
    this.up = new Vec3(vp_1.storage);
  };
  PerspectiveCamera.prototype.mouseDown = function () {
    this.isDragging = true;
    this.mouseDelta.set_8cqhcw$(new Float32Array([]));
  };
  PerspectiveCamera.prototype.mouseMove_tfvzir$ = function (event) {
    var tmp$, tmp$_0;
    var tmp$_1 = this.mouseDelta;
    var value = this.mouseDelta.storage[0] + (typeof (tmp$ = event.movementX) === 'number' ? tmp$ : throwCCE());
    tmp$_1.storage[0] = value;
    var tmp$_2 = this.mouseDelta;
    var value_0 = this.mouseDelta.storage[1] + (typeof (tmp$_0 = event.movementY) === 'number' ? tmp$_0 : throwCCE());
    tmp$_2.storage[1] = value_0;
    event.preventDefault();
  };
  PerspectiveCamera.prototype.mouseUp = function () {
    this.isDragging = false;
  };
  PerspectiveCamera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PerspectiveCamera',
    interfaces: [UniformProvider]
  };
  function Program(gl, vertexShader, fragmentShader, attributeBindings) {
    Program$Companion_getInstance();
    if (attributeBindings === void 0)
      attributeBindings = Program$Companion_getInstance().PNT;
    UniformProvider.call(this, ['program']);
    this.gl = gl;
    this.vertexShader = vertexShader;
    this.fragmentShader = fragmentShader;
    var tmp$, tmp$_0;
    tmp$ = this.gl.createProgram();
    if (tmp$ == null) {
      throw Error_init('Could not create WebGL program.');
    }this.glProgram = tmp$;
    this.gl.attachShader(this.glProgram, this.vertexShader.glShader);
    this.gl.attachShader(this.glProgram, this.fragmentShader.glShader);
    var attributeIndex = {v: 0};
    var $receiver = attributeBindings;
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var element = $receiver[tmp$_1];
      var tmp$_2;
      this.gl.bindAttribLocation(this.glProgram, (tmp$_2 = attributeIndex.v, attributeIndex.v = tmp$_2 + 1 | 0, tmp$_2), element);
    }
    this.gl.linkProgram(this.glProgram);
    if (equals(this.gl.getProgramParameter(this.glProgram, WebGLRenderingContext.LINK_STATUS), false)) {
      throw Error_init('Could not link shaders [vertex shader: ' + this.vertexShader.sourceUrl + ']:[fragment shader: ' + this.fragmentShader.sourceUrl + '\n' + toString(this.gl.getProgramInfoLog(this.glProgram)));
    }this.addComponentsAndGatherUniforms_inpnaw$([new ProgramReflection(this.gl, this.glProgram)]);
    tmp$_0 = Program$Companion_getInstance();
    tmp$_0.all = tmp$_0.all.concat([this]);
  }
  function Program$Companion() {
    Program$Companion_instance = this;
    this.PC = ['vertexPosition', 'vertexColor'];
    this.PNT = ['vertexPosition', 'vertexNormal', 'vertexTexCoord'];
    this.all = [];
  }
  Program$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Program$Companion_instance = null;
  function Program$Companion_getInstance() {
    if (Program$Companion_instance === null) {
      new Program$Companion();
    }return Program$Companion_instance;
  }
  Program.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Program',
    interfaces: [UniformProvider]
  };
  function Scene(gl) {
    UniformProvider.call(this, ['scene']);
    this.gl = gl;
    this.vsTrafo = new Shader(this.gl, WebGLRenderingContext.VERTEX_SHADER, 'shaders/trafo-vs.glsl');
    this.vsShadow = new Shader(this.gl, WebGLRenderingContext.VERTEX_SHADER, 'shaders/shadow-vs.glsl');
    this.fsSolid = new Shader(this.gl, WebGLRenderingContext.FRAGMENT_SHADER, 'shaders/solid-fs.glsl');
    this.fsTextured = new Shader(this.gl, WebGLRenderingContext.FRAGMENT_SHADER, 'shaders/textured-fs.glsl');
    this.shadowProgram = new Program(this.gl, this.vsShadow, this.fsSolid);
    this.texturedProgram = new Program(this.gl, this.vsTrafo, this.fsTextured);
    this.quadGeometry = new TexturedQuadGeometry(this.gl);
    this.gameObjects = ArrayList_init();
    this.shadowedGameObjects = ArrayList_init();
    this.camera = new PerspectiveCamera(Program$Companion_getInstance().all.slice());
    this.camera.position.set_8cqhcw$(new Float32Array([0.0, 100.0, 0.0]));
    this.chevyMaterial = new Material(this.texturedProgram);
    this.chevyMesh = new MultiMesh(this.gl, 'media/chevy/chassis.json', [this.chevyMaterial].slice());
    this.wheelMesh = new MultiMesh(this.gl, 'media/chevy/wheel.json', [this.chevyMaterial].slice());
    this.chevyObject = new Scene$chevyObject$ObjectLiteral(this, this.chevyMesh);
    var tmp$ = this.wheelMesh;
    var $this = Vec3_init(0.4, -0.25, 0.875);
    this.wheelObjectFL = new Scene$wheelObjectFL$ObjectLiteral(this, tmp$, Vec3_init($this.storage[0] * 16.0, $this.storage[1] * 16.0, $this.storage[2] * 16.0));
    var tmp$_0 = this.wheelMesh;
    var $this_0 = Vec3_init(-0.4, -0.25, 0.875);
    this.wheelObjectFR = new Scene$wheelObjectFR$ObjectLiteral(this, tmp$_0, Vec3_init($this_0.storage[0] * 16.0, $this_0.storage[1] * 16.0, $this_0.storage[2] * 16.0));
    var tmp$_1 = this.wheelMesh;
    var $this_1 = Vec3_init(0.4, -0.25, -0.725);
    this.wheelObjectRL = new Scene$wheelObjectRL$ObjectLiteral(this, tmp$_1, Vec3_init($this_1.storage[0] * 16.0, $this_1.storage[1] * 16.0, $this_1.storage[2] * 16.0));
    var tmp$_2 = this.wheelMesh;
    var $this_2 = Vec3_init(-0.4, -0.25, -0.725);
    this.wheelObjectRR = new Scene$wheelObjectRR$ObjectLiteral(this, tmp$_2, Vec3_init($this_2.storage[0] * 16.0, $this_2.storage[1] * 16.0, $this_2.storage[2] * 16.0));
    var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    (tmp$_3 = this.chevyMaterial.get_61zpoe$('colorTexture')) != null ? (tmp$_3.set_xwoe53$(new Texture2D(this.gl, 'media/chevy/chevy.png'), []), Unit) : null;
    this.chevyObject.position.set_qp9vav$(Vec3_init(48.0, 7.0, -119.0));
    this.chevyObject.yaw = 3.0 * math.PI / 2.0;
    this.gameObjects.add_11rb$(this.chevyObject);
    this.gameObjects.add_11rb$(this.wheelObjectFL);
    this.gameObjects.add_11rb$(this.wheelObjectFR);
    this.gameObjects.add_11rb$(this.wheelObjectRL);
    this.gameObjects.add_11rb$(this.wheelObjectRR);
    this.shadowedGameObjects.add_11rb$(this.chevyObject);
    this.shadowedGameObjects.add_11rb$(this.wheelObjectFL);
    this.shadowedGameObjects.add_11rb$(this.wheelObjectFR);
    this.shadowedGameObjects.add_11rb$(this.wheelObjectRL);
    this.shadowedGameObjects.add_11rb$(this.wheelObjectRR);
    this.trackMaterial = new Material(this.texturedProgram);
    this.raceTrackObject = new GameObject(new Mesh(this.trackMaterial, this.quadGeometry), Vec3_init(0.0, 0.2, 0.0), 0.0, 0.0, math.PI / 2.0, Vec3_init(600.0, 600.0, 0.0));
    (tmp$_4 = this.trackMaterial.get_61zpoe$('colorTexture')) != null ? (tmp$_4.set_xwoe53$(new Texture2D(this.gl, 'media/racetrack.png'), []), Unit) : null;
    this.gameObjects.add_11rb$(this.raceTrackObject);
    this.treeMaterial = new Material(this.texturedProgram);
    this.smoothTreeMesh = new MultiMesh(this.gl, 'media/smoothtree.json', [this.treeMaterial].slice());
    this.treeMesh = new MultiMesh(this.gl, 'media/tree.json', [this.treeMaterial].slice());
    (tmp$_5 = this.treeMaterial.get_61zpoe$('colorTexture')) != null ? (tmp$_5.set_xwoe53$(new Texture2D(this.gl, 'media/tree.png'), []), Unit) : null;
    var treeObject1 = new GameObject(this.smoothTreeMesh, Vec3_init(-375.0, 3.0, 140.0));
    var treeObject2 = new GameObject(this.treeMesh, Vec3_init(305.0, 3.0, 202.0));
    var treeObject3 = new GameObject(this.smoothTreeMesh, Vec3_init(-69.0, 3.0, -237.0));
    var treeObject4 = new GameObject(this.smoothTreeMesh, Vec3_init(-370.0, 3.0, -502.0));
    var treeObject5 = new GameObject(this.smoothTreeMesh, Vec3_init(460.0, 3.0, -442.0));
    this.gameObjects.add_11rb$(treeObject1);
    this.gameObjects.add_11rb$(treeObject2);
    this.gameObjects.add_11rb$(treeObject3);
    this.gameObjects.add_11rb$(treeObject4);
    this.gameObjects.add_11rb$(treeObject5);
    this.shadowedGameObjects.add_11rb$(treeObject1);
    this.shadowedGameObjects.add_11rb$(treeObject2);
    this.shadowedGameObjects.add_11rb$(treeObject3);
    this.shadowedGameObjects.add_11rb$(treeObject4);
    this.shadowedGameObjects.add_11rb$(treeObject5);
    this.shadowMaterial = new Material(this.shadowProgram);
    this.lightDir = Vec3_init(1.0, -2.0, -4.0);
    this.shadowMatrix_hiriy1$_0 = Mat4_init(new Float32Array([])).provideDelegate_hr34ju$(this, Scene$shadowMatrix_metadata);
    (tmp$_6 = this.shadowMaterial.get_61zpoe$('color')) != null ? tmp$_6.set_qp9vav$(Vec3_init(0.0, 0.0, 0.0)) : null;
    this.shadowMatrix.set_8cqhcw$(new Float32Array([1.0, 0.0, 0.0, 0.0, -this.lightDir.storage[0] / this.lightDir.storage[1], 0.0, -this.lightDir.storage[2] / this.lightDir.storage[1], 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0]));
    this.grassMaterial = new Material(this.texturedProgram);
    this.infiniteGeometry = new InfiniteGeometry(this.gl);
    this.infiniteObject = new GameObject(new Mesh(this.grassMaterial, this.infiniteGeometry));
    (tmp$_7 = this.grassMaterial.get_61zpoe$('colorTexture')) != null ? (tmp$_7.set_xwoe53$(new Texture2D(this.gl, 'media/grass.png'), []), Unit) : null;
    var $this_3 = this.infiniteObject.scale;
    $this_3.storage[0] = $this_3.storage[0] * 50.0;
    $this_3.storage[1] = $this_3.storage[1] * 50.0;
    $this_3.storage[2] = $this_3.storage[2] * 50.0;
    this.boxTrafo = new Shader(this.gl, WebGLRenderingContext.VERTEX_SHADER, 'shaders/box-vs.glsl');
    this.fsBox = new Shader(this.gl, WebGLRenderingContext.FRAGMENT_SHADER, 'shaders/box-fs.glsl');
    this.boxProgram = new Program(this.gl, this.boxTrafo, this.fsBox);
    this.backgroundMaterial = new Material(this.boxProgram);
    this.envTexture = new TextureCube(this.gl, ['media/posx512.jpg', 'media/negx512.jpg', 'media/posy512.jpg', 'media/negy512.jpg', 'media/posz512.jpg', 'media/negz512.jpg']);
    this.backgroundObject = new GameObject(new Mesh(this.backgroundMaterial, this.quadGeometry));
    (tmp$_8 = this.backgroundMaterial.get_61zpoe$('envTexture')) != null ? (tmp$_8.set_xwoe53$(this.envTexture, []), Unit) : null;
    this.gameObjects.add_11rb$(this.infiniteObject);
    this.gameObjects.add_11rb$(this.backgroundObject);
    this.gl.enable(WebGLRenderingContext.DEPTH_TEST);
    this.addComponentsAndGatherUniforms_inpnaw$(Program$Companion_getInstance().all.slice());
    this.cameraSpectate = false;
    this.timeAtFirstFrame = (new Date()).getTime();
    this.timeAtLastFrame = this.timeAtFirstFrame;
    this.timeAtLastCamerButtonPress = this.timeAtFirstFrame;
  }
  Scene.prototype.resetWheelsVertically_mx4ult$ = function (by) {
    this.wheelObjectFL.yaw = this.wheelObjectFL.yaw / by;
    this.wheelObjectFR.yaw = this.wheelObjectFR.yaw / by;
  };
  Scene.prototype.rotateWheelsVertically_mx4ult$ = function (by) {
    var x = this.wheelObjectFL.yaw;
    if (Math_0.abs(x) < math.PI / 6) {
      this.wheelObjectFL.yaw = this.wheelObjectFL.yaw + by;
      this.wheelObjectFR.yaw = this.wheelObjectFR.yaw + by;
    }};
  Scene.prototype.rotateWheelsHorizontally_mx4ult$ = function (by) {
    this.wheelObjectFL.pitch = this.wheelObjectFL.pitch + by;
    this.wheelObjectFR.pitch = this.wheelObjectFR.pitch + by;
    this.wheelObjectRL.pitch = this.wheelObjectRL.pitch + by;
    this.wheelObjectRR.pitch = this.wheelObjectRR.pitch + by;
  };
  var Scene$shadowMatrix_metadata = new PropertyMetadata('shadowMatrix');
  Object.defineProperty(Scene.prototype, 'shadowMatrix', {
    get: function () {
      return this.shadowMatrix_hiriy1$_0.getValue_hr34ju$(this, Scene$shadowMatrix_metadata);
    }
  });
  Scene.prototype.resize_smaims$ = function (gl, canvas) {
    gl.viewport(0, 0, canvas.width, canvas.height);
    this.camera.setAspectRatio_mx4ult$(canvas.width / canvas.height);
  };
  Scene.prototype.moveCameraByCar_u98d25$ = function (dt, car, camera) {
    var dir = Vec3_init(0.0, 0.0, 0.0);
    var tmp$ = Vec3_init(1.0, 0.0, 0.0);
    var x = car.yaw;
    var scalar = Math_0.sin(x);
    var other = Vec3_init(tmp$.storage[0] * scalar, tmp$.storage[1] * scalar, tmp$.storage[2] * scalar);
    dir.storage[0] = dir.storage[0] + other.storage[0];
    dir.storage[1] = dir.storage[1] + other.storage[1];
    dir.storage[2] = dir.storage[2] + other.storage[2];
    var tmp$_0 = Vec3_init(0.0, 0.0, 1.0);
    var x_0 = car.yaw;
    var scalar_0 = Math_0.cos(x_0);
    var other_0 = Vec3_init(tmp$_0.storage[0] * scalar_0, tmp$_0.storage[1] * scalar_0, tmp$_0.storage[2] * scalar_0);
    dir.storage[0] = dir.storage[0] + other_0.storage[0];
    dir.storage[1] = dir.storage[1] + other_0.storage[1];
    dir.storage[2] = dir.storage[2] + other_0.storage[2];
    var other_1 = Vec3_init(0.0, -0.5, 0.0);
    dir.storage[0] = dir.storage[0] + other_1.storage[0];
    dir.storage[1] = dir.storage[1] + other_1.storage[1];
    dir.storage[2] = dir.storage[2] + other_1.storage[2];
    var tmp$_1 = car.v.storage[0] * dir.storage[0] + car.v.storage[2] * dir.storage[2];
    var $this = car.v;
    var x_1 = $this.storage[0] * $this.storage[0] + $this.storage[1] * $this.storage[1] + $this.storage[2] * $this.storage[2];
    var tmp$_2 = Math_0.sqrt(x_1);
    var x_2 = dir.storage[0] * dir.storage[0] + dir.storage[1] * dir.storage[1] + dir.storage[2] * dir.storage[2];
    var x_3 = tmp$_1 / (tmp$_2 * Math_0.sqrt(x_2));
    var dirAngle = Math_0.acos(x_3);
    var tmp$_3 = car.position;
    var other_2 = Vec3_init(dir.storage[0] * 40.0, dir.storage[1] * 40.0, dir.storage[2] * 40.0);
    dir.set_qp9vav$(Vec3_init(tmp$_3.storage[0] - other_2.storage[0], tmp$_3.storage[1] - other_2.storage[1], tmp$_3.storage[2] - other_2.storage[2]));
    var other_3 = camera.position;
    var diff = Vec3_init(dir.storage[0] - other_3.storage[0], dir.storage[1] - other_3.storage[1], dir.storage[2] - other_3.storage[2]);
    var tmp$_4 = camera.position;
    var $this_0 = Vec3_init(diff.storage[0] * dt, diff.storage[1] * dt, diff.storage[2] * dt);
    var other_4 = Vec3_init($this_0.storage[0] * 5.0, $this_0.storage[1] * 5.0, $this_0.storage[2] * 5.0);
    tmp$_4.storage[0] = tmp$_4.storage[0] + other_4.storage[0];
    tmp$_4.storage[1] = tmp$_4.storage[1] + other_4.storage[1];
    tmp$_4.storage[2] = tmp$_4.storage[2] + other_4.storage[2];
    var yawDiff = 0.0;
    if (dirAngle > math.PI / 2)
      yawDiff = car.yaw - camera.yaw;
    else
      yawDiff = car.yaw - camera.yaw + math.PI;
    camera.yaw = camera.yaw + yawDiff * dt * 5.0;
    camera.update();
  };
  Scene.prototype.update_yv4vgl$ = function (gl, keysPressed) {
    var timeAtThisFrame = (new Date()).getTime();
    var dt = (timeAtThisFrame - this.timeAtLastFrame) / 1000.0;
    var t = (timeAtThisFrame - this.timeAtFirstFrame) / 1000.0;
    this.timeAtLastFrame = timeAtThisFrame;
    if (keysPressed.contains_11rb$('C') && this.cameraSpectate && (new Date()).getTime() - this.timeAtLastCamerButtonPress > 300) {
      this.cameraSpectate = false;
      this.moveCameraByCar_u98d25$(dt, this.chevyObject, this.camera);
      this.timeAtLastCamerButtonPress = (new Date()).getTime();
    }if (keysPressed.contains_11rb$('C') && !this.cameraSpectate && (new Date()).getTime() - this.timeAtLastCamerButtonPress > 300) {
      this.cameraSpectate = true;
      this.camera.position.set_8cqhcw$(new Float32Array([0.0, 100.0, 0.0]));
      this.timeAtLastCamerButtonPress = (new Date()).getTime();
    }if (!this.cameraSpectate) {
      this.camera.move_84y47s$(dt, keysPressed);
      this.moveCameraByCar_u98d25$(dt, this.chevyObject, this.camera);
    } else {
      this.camera.move_84y47s$(dt, keysPressed);
    }
    console.log(this.chevyObject.position);
    gl.clearColor(0.3, 0.0, 0.3, 1.0);
    gl.clearDepth(1.0);
    gl.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
    var tmp$;
    tmp$ = this.gameObjects.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.update();
    }
    var tmp$_0;
    tmp$_0 = this.gameObjects.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      element_0.move_e8h23$(t, dt, keysPressed, this.gameObjects);
    }
    var tmp$_1;
    tmp$_1 = this.shadowedGameObjects.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      element_1.using_a4auz3$([this.shadowMaterial]).draw_a4auz3$([this, this.camera]);
    }
    var tmp$_2;
    tmp$_2 = this.gameObjects.iterator();
    while (tmp$_2.hasNext()) {
      var element_2 = tmp$_2.next();
      element_2.draw_a4auz3$([this.camera]);
    }
  };
  function Scene$chevyObject$ObjectLiteral(this$Scene, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    this.this$Scene = this$Scene;
    GameObject.call(this, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega);
    this.m = 15.0;
    this.v.set_qp9vav$(Vec3_init(0.0, 0.0, 0.0));
    this.c = 15.0;
    this.c = 50.0;
    this.theta = 5.0;
    this.omega = 0.0;
    this.dir = Vec3_init(0.0, 0.0, 0.0);
    this.gear = 1.0;
  }
  Scene$chevyObject$ObjectLiteral.prototype.move_e8h23$$default = function (t, dt, keysPressed, gameObjects) {
    if (keysPressed.contains_11rb$('1'))
      this.gear = 1.0;
    if (keysPressed.contains_11rb$('2'))
      this.gear = 2.0;
    if (keysPressed.contains_11rb$('3'))
      this.gear = 4.0;
    if (keysPressed.contains_11rb$('4'))
      this.gear = 7.0;
    if (keysPressed.contains_11rb$('5'))
      this.gear = 11.0;
    var F = Vec3_init(0.0, 0.0, 0.0);
    var Fsize = 600.0 * this.gear;
    var tau = 0.0;
    var tausize = 1.0 * this.gear;
    if (keysPressed.contains_11rb$('LEFT') && tau > -0.01)
      tau += 1;
    if (keysPressed.contains_11rb$('RIGHT') && tau < 0.01)
      tau -= 1;
    if (keysPressed.contains_11rb$('UP')) {
      var tmp$ = Vec3_init(1.0, 0.0, 0.0);
      var x = this.yaw;
      var scalar = Math_0.sin(x);
      var other = Vec3_init(tmp$.storage[0] * scalar, tmp$.storage[1] * scalar, tmp$.storage[2] * scalar);
      F.storage[0] = F.storage[0] + other.storage[0];
      F.storage[1] = F.storage[1] + other.storage[1];
      F.storage[2] = F.storage[2] + other.storage[2];
      var tmp$_0 = Vec3_init(0.0, 0.0, 1.0);
      var x_0 = this.yaw;
      var scalar_0 = Math_0.cos(x_0);
      var other_0 = Vec3_init(tmp$_0.storage[0] * scalar_0, tmp$_0.storage[1] * scalar_0, tmp$_0.storage[2] * scalar_0);
      F.storage[0] = F.storage[0] + other_0.storage[0];
      F.storage[1] = F.storage[1] + other_0.storage[1];
      F.storage[2] = F.storage[2] + other_0.storage[2];
    }if (keysPressed.contains_11rb$('DOWN')) {
      var tmp$_1 = Vec3_init(1.0, 0.0, 0.0);
      var x_1 = this.yaw;
      var scalar_1 = Math_0.sin(x_1);
      var other_1 = Vec3_init(tmp$_1.storage[0] * scalar_1, tmp$_1.storage[1] * scalar_1, tmp$_1.storage[2] * scalar_1);
      F.storage[0] = F.storage[0] - other_1.storage[0];
      F.storage[1] = F.storage[1] - other_1.storage[1];
      F.storage[2] = F.storage[2] - other_1.storage[2];
      var tmp$_2 = Vec3_init(0.0, 0.0, 1.0);
      var x_2 = this.yaw;
      var scalar_2 = Math_0.cos(x_2);
      var other_2 = Vec3_init(tmp$_2.storage[0] * scalar_2, tmp$_2.storage[1] * scalar_2, tmp$_2.storage[2] * scalar_2);
      F.storage[0] = F.storage[0] - other_2.storage[0];
      F.storage[1] = F.storage[1] - other_2.storage[1];
      F.storage[2] = F.storage[2] - other_2.storage[2];
    }if (keysPressed.contains_11rb$('SPACE')) {
      var $this = this.v;
      $this.storage[0] = $this.storage[0] / 2.0;
      $this.storage[1] = $this.storage[1] / 2.0;
      $this.storage[2] = $this.storage[2] / 2.0;
      this.omega = this.omega / 2.0;
    }F.storage[0] = F.storage[0] * Fsize;
    F.storage[1] = F.storage[1] * Fsize;
    F.storage[2] = F.storage[2] * Fsize;
    var scalar_3 = this.m;
    var a = Vec3_init(F.storage[0] / scalar_3, F.storage[1] / scalar_3, F.storage[2] / scalar_3);
    var tmp$_3 = this.v;
    var other_3 = Vec3_init(a.storage[0] * dt, a.storage[1] * dt, a.storage[2] * dt);
    tmp$_3.storage[0] = tmp$_3.storage[0] + other_3.storage[0];
    tmp$_3.storage[1] = tmp$_3.storage[1] + other_3.storage[1];
    tmp$_3.storage[2] = tmp$_3.storage[2] + other_3.storage[2];
    var tmp$_4 = this.position;
    var $this_0 = this.v;
    var other_4 = Vec3_init($this_0.storage[0] * dt, $this_0.storage[1] * dt, $this_0.storage[2] * dt);
    tmp$_4.storage[0] = tmp$_4.storage[0] + other_4.storage[0];
    tmp$_4.storage[1] = tmp$_4.storage[1] + other_4.storage[1];
    tmp$_4.storage[2] = tmp$_4.storage[2] + other_4.storage[2];
    tau *= tausize;
    var beta = tau / this.theta;
    this.omega = this.omega + beta * dt;
    this.this$Scene.rotateWheelsVertically_mx4ult$(this.omega * dt);
    this.dir.set_qp9vav$(Vec3_init(0.0, 0.0, 0.0));
    var tmp$_5 = this.dir;
    var tmp$_6 = Vec3_init(1.0, 0.0, 0.0);
    var x_3 = this.yaw;
    var scalar_4 = Math_0.sin(x_3);
    var other_5 = Vec3_init(tmp$_6.storage[0] * scalar_4, tmp$_6.storage[1] * scalar_4, tmp$_6.storage[2] * scalar_4);
    tmp$_5.storage[0] = tmp$_5.storage[0] + other_5.storage[0];
    tmp$_5.storage[1] = tmp$_5.storage[1] + other_5.storage[1];
    tmp$_5.storage[2] = tmp$_5.storage[2] + other_5.storage[2];
    var tmp$_7 = this.dir;
    var tmp$_8 = Vec3_init(0.0, 0.0, 1.0);
    var x_4 = this.yaw;
    var scalar_5 = Math_0.cos(x_4);
    var other_6 = Vec3_init(tmp$_8.storage[0] * scalar_5, tmp$_8.storage[1] * scalar_5, tmp$_8.storage[2] * scalar_5);
    tmp$_7.storage[0] = tmp$_7.storage[0] + other_6.storage[0];
    tmp$_7.storage[1] = tmp$_7.storage[1] + other_6.storage[1];
    tmp$_7.storage[2] = tmp$_7.storage[2] + other_6.storage[2];
    var tmp$_9 = this.v.storage[0] * this.dir.storage[0] + this.v.storage[2] * this.dir.storage[2];
    var $this_1 = this.v;
    var x_5 = $this_1.storage[0] * $this_1.storage[0] + $this_1.storage[1] * $this_1.storage[1] + $this_1.storage[2] * $this_1.storage[2];
    var tmp$_10 = tmp$_9 / Math_0.sqrt(x_5);
    var $this_2 = this.dir;
    var x_6 = $this_2.storage[0] * $this_2.storage[0] + $this_2.storage[1] * $this_2.storage[1] + $this_2.storage[2] * $this_2.storage[2];
    var x_7 = tmp$_10 * Math_0.sqrt(x_6);
    var dirAngle = Math_0.acos(x_7);
    var $this_3 = this.v;
    var x_8 = $this_3.storage[0] * $this_3.storage[0] + $this_3.storage[1] * $this_3.storage[1] + $this_3.storage[2] * $this_3.storage[2];
    if (Math_0.sqrt(x_8) >= 5.0) {
      if (dirAngle < math.PI / 2)
        this.yaw = this.yaw + this.omega * dt;
      else
        this.yaw = this.yaw - this.omega * dt;
    } else {
      this.omega = 0.0;
    }
    if (dirAngle < math.PI / 2) {
      var tmp$_11 = this.this$Scene;
      var $this_4 = this.v;
      var x_9 = $this_4.storage[0] * $this_4.storage[0] + $this_4.storage[1] * $this_4.storage[1] + $this_4.storage[2] * $this_4.storage[2];
      tmp$_11.rotateWheelsHorizontally_mx4ult$(Math_0.sqrt(x_9) / 3.0 * dt);
    } else {
      var tmp$_12 = this.this$Scene;
      var $this_5 = this.v;
      var x_10 = $this_5.storage[0] * $this_5.storage[0] + $this_5.storage[1] * $this_5.storage[1] + $this_5.storage[2] * $this_5.storage[2];
      tmp$_12.rotateWheelsHorizontally_mx4ult$(Math_0.sqrt(x_10) / -3.0 * dt);
    }
    var tmp$_13 = this.v;
    var x_11 = -dt * this.c / (this.gear / 2.0) / this.m;
    var scalar_6 = Math_0.exp(x_11);
    tmp$_13.storage[0] = tmp$_13.storage[0] * scalar_6;
    tmp$_13.storage[1] = tmp$_13.storage[1] * scalar_6;
    tmp$_13.storage[2] = tmp$_13.storage[2] * scalar_6;
    var tmp$_14 = this.omega;
    var x_12 = -dt * this.c2 * this.gear / this.theta;
    this.omega = tmp$_14 * Math_0.exp(x_12);
    return true;
  };
  Scene$chevyObject$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GameObject]
  };
  function Scene$wheelObjectFL$ObjectLiteral(this$Scene, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    GameObject.call(this, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega);
    this.m = 15.0;
    this.v.set_qp9vav$(Vec3_init(0.0, 0.0, 0.0));
    this.c = 15.0;
    this.c2 = 15.0;
    this.theta = 5.0;
    this.omega = 0.0;
    this.parent = this$Scene.chevyObject;
  }
  Scene$wheelObjectFL$ObjectLiteral.prototype.update = function () {
    this.modelMatrix.set_8cqhcw$(new Float32Array([])).scale_wobp50$(this.scale).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0).translate_wobp50$(this.position);
    this.modelMatrix.timesAssign_wohikv$(this.parent.modelMatrix);
  };
  Scene$wheelObjectFL$ObjectLiteral.prototype.move_e8h23$$default = function (t, dt, keysPressed, gameObjects) {
    if (keysPressed.contains_11rb$('LEFT') && keysPressed.contains_11rb$('RIGHT'))
      this.yaw = 0.0;
    if (!keysPressed.contains_11rb$('LEFT') && !keysPressed.contains_11rb$('RIGHT')) {
      var tmp$ = this.yaw;
      var x = -dt * this.c2 / this.theta;
      this.yaw = tmp$ * Math_0.exp(x);
    }return true;
  };
  Scene$wheelObjectFL$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GameObject]
  };
  function Scene$wheelObjectFR$ObjectLiteral(this$Scene, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    GameObject.call(this, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega);
    this.m = 15.0;
    this.v.set_qp9vav$(Vec3_init(0.0, 0.0, 0.0));
    this.c = 15.0;
    this.c2 = 15.0;
    this.theta = 5.0;
    this.omega = 0.0;
    this.parent = this$Scene.chevyObject;
  }
  Scene$wheelObjectFR$ObjectLiteral.prototype.update = function () {
    this.modelMatrix.set_8cqhcw$(new Float32Array([])).scale_wobp50$(this.scale).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0).translate_wobp50$(this.position);
    this.modelMatrix.timesAssign_wohikv$(this.parent.modelMatrix);
  };
  Scene$wheelObjectFR$ObjectLiteral.prototype.move_e8h23$$default = function (t, dt, keysPressed, gameObjects) {
    if (keysPressed.contains_11rb$('LEFT') && keysPressed.contains_11rb$('RIGHT'))
      this.yaw = 0.0;
    if (!keysPressed.contains_11rb$('LEFT') && !keysPressed.contains_11rb$('RIGHT')) {
      var tmp$ = this.yaw;
      var x = -dt * this.c2 / this.theta;
      this.yaw = tmp$ * Math_0.exp(x);
    }return true;
  };
  Scene$wheelObjectFR$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GameObject]
  };
  function Scene$wheelObjectRL$ObjectLiteral(this$Scene, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    GameObject.call(this, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega);
    this.parent = this$Scene.chevyObject;
  }
  Scene$wheelObjectRL$ObjectLiteral.prototype.update = function () {
    this.modelMatrix.set_8cqhcw$(new Float32Array([])).scale_wobp50$(this.scale).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0).translate_wobp50$(this.position);
    this.modelMatrix.timesAssign_wohikv$(this.parent.modelMatrix);
  };
  Scene$wheelObjectRL$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GameObject]
  };
  function Scene$wheelObjectRR$ObjectLiteral(this$Scene, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega) {
    GameObject.call(this, mesh, position, roll, yaw, pitch, scale, m, v, c, c2, theta, omega);
    this.parent = this$Scene.chevyObject;
  }
  Scene$wheelObjectRR$ObjectLiteral.prototype.update = function () {
    this.modelMatrix.set_8cqhcw$(new Float32Array([])).scale_wobp50$(this.scale).rotate_7b5o5w$(this.roll).rotate_7b5o5w$(this.pitch, 1.0, 0.0, 0.0).rotate_7b5o5w$(this.yaw, 0.0, 1.0, 0.0).translate_wobp50$(this.position);
    this.modelMatrix.timesAssign_wohikv$(this.parent.modelMatrix);
  };
  Scene$wheelObjectRR$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [GameObject]
  };
  Scene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scene',
    interfaces: [UniformProvider]
  };
  function Shader(gl, shaderType, sourceUrl) {
    this.gl = gl;
    this.shaderType = shaderType;
    this.sourceUrl = sourceUrl;
    this.glShader = this.gl.createShader(this.shaderType);
    var request = new XMLHttpRequest();
    request.overrideMimeType('text/plain');
    request.open('GET', this.sourceUrl, false);
    var errorMessage = {v: null};
    request.onloadend = Shader_init$lambda(request, this, errorMessage);
    request.send();
    if (errorMessage.v != null) {
      throw Error_init(errorMessage.v);
    }}
  function Shader_init$lambda(closure$request, this$Shader, closure$errorMessage) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      var source = closure$request.responseText;
      if (equals(source, '')) {
        closure$errorMessage.v = this$Shader.sourceUrl + ' is empty.';
      } else {
        var $this = Regex_init('[^' + String.fromCharCode(toBoxedChar(0)) + '-' + String.fromCharCode(toBoxedChar(127)) + ']');
        var replace_20wsma$result;
        replace_20wsma$break: do {
          var match = $this.find_905azu$(source);
          if (match == null) {
            replace_20wsma$result = source.toString();
            break replace_20wsma$break;
          }var lastStart = 0;
          var length = source.length;
          var sb = StringBuilder_init(length);
          do {
            var foundMatch = ensureNotNull(match);
            sb.append_ezbsdh$(source, lastStart, foundMatch.range.start);
            sb.append_gw00v9$(String.fromCharCode(27) + '[46m' + foundMatch.value + String.fromCharCode(toBoxedChar(27)) + '[31m');
            lastStart = foundMatch.range.endInclusive + 1 | 0;
            match = foundMatch.next();
          }
           while (lastStart < length && match != null);
          if (lastStart < length) {
            sb.append_ezbsdh$(source, lastStart, length);
          }replace_20wsma$result = sb.toString();
        }
         while (false);
        var marked = replace_20wsma$result;
        if (!equals(marked, source)) {
          closure$errorMessage.v = 'Shader source file ' + this$Shader.sourceUrl + ' has ' + '\x1B' + '[46mnon-ASCII' + '\x1B' + '[31m characters.' + '\n' + marked;
        } else {
          this$Shader.gl.shaderSource(this$Shader.glShader, source);
          this$Shader.gl.compileShader(this$Shader.glShader);
          if (equals(this$Shader.gl.getShaderParameter(this$Shader.glShader, WebGLRenderingContext.COMPILE_STATUS), false)) {
            var errorPrefix = Regex_init('ERROR: 0');
            tmp$_0 = (tmp$ = this$Shader.gl.getShaderInfoLog(this$Shader.glShader)) != null ? tmp$ : 'FAILED TO OBTAIN LOG.';
            tmp$_1 = closure$request.responseURL;
            closure$errorMessage.v = 'Shader ' + this$Shader.sourceUrl + ' had compilation errors.' + '\n' + errorPrefix.replace_x2uqeu$(tmp$_0, tmp$_1);
          }}
      }
      return Unit;
    };
  }
  Shader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shader',
    interfaces: []
  };
  function SubmeshGeometry(gl, jsonMesh) {
    Geometry.call(this);
    this.gl = gl;
    this.vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(jsonMesh.vertices), WebGLRenderingContext.STATIC_DRAW);
    this.vertexNormalBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(jsonMesh.normals), WebGLRenderingContext.STATIC_DRAW);
    this.vertexTexCoordBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array(jsonMesh.texturecoords[0]), WebGLRenderingContext.STATIC_DRAW);
    this.indexBuffer = this.gl.createBuffer();
    this.indexCount = flatten(jsonMesh.faces).size;
    var indexIterator = flatten(jsonMesh.faces).iterator();
    var array = Array_0(this.indexCount);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = indexIterator.next();
    }
    var indexArray = array;
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexArray), WebGLRenderingContext.STATIC_DRAW);
    this.inputLayout = this.gl.createVertexArray();
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.enableVertexAttribArray(0);
    this.gl.vertexAttribPointer(0, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.enableVertexAttribArray(1);
    this.gl.vertexAttribPointer(1, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.enableVertexAttribArray(2);
    this.gl.vertexAttribPointer(2, 2, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindVertexArray(null);
  }
  SubmeshGeometry.prototype.draw = function () {
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.drawElements(WebGLRenderingContext.TRIANGLES, this.indexCount, WebGLRenderingContext.UNSIGNED_SHORT, 0);
  };
  SubmeshGeometry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SubmeshGeometry',
    interfaces: [Geometry]
  };
  function Texture2D(gl, mediaFileUrl) {
    this.mediaFileUrl = mediaFileUrl;
    this.glTexture_456wed$_0 = gl.createTexture();
    var image = new Image();
    image.onload = Texture2D_init$lambda(gl, this, image);
    image.src = this.mediaFileUrl;
  }
  Object.defineProperty(Texture2D.prototype, 'glTexture', {
    get: function () {
      return this.glTexture_456wed$_0;
    }
  });
  function Texture2D_init$lambda(closure$gl, this$Texture2D, closure$image) {
    return function (it) {
      closure$gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this$Texture2D.glTexture);
      closure$gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, closure$image);
      closure$gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
      closure$gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR_MIPMAP_LINEAR);
      closure$gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
      closure$gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
      return Unit;
    };
  }
  Texture2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture2D',
    interfaces: [Texture]
  };
  function TextureCube(gl, mediaFileUrls) {
    this.glTexture_6lp5ya$_0 = gl.createTexture();
    var array = Array_0(6);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Image();
    }
    var images = array;
    var loadedCount = {v: 0};
    for (var i_0 = 0; i_0 < 6; i_0++) {
      images[i_0].onload = TextureCube_init$lambda(gl, this, i_0, images, loadedCount);
      images[i_0].src = mediaFileUrls[i_0];
    }
  }
  Object.defineProperty(TextureCube.prototype, 'glTexture', {
    get: function () {
      return this.glTexture_6lp5ya$_0;
    }
  });
  function TextureCube_init$lambda(closure$gl, this$TextureCube, closure$i, closure$images, closure$loadedCount) {
    return function (it) {
      closure$gl.bindTexture(WebGLRenderingContext.TEXTURE_CUBE_MAP, this$TextureCube.glTexture);
      closure$gl.texImage2D(WebGLRenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X + closure$i | 0, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, closure$images[closure$i]);
      if ((closure$loadedCount.v = closure$loadedCount.v + 1 | 0, closure$loadedCount.v) === 6) {
        closure$gl.texParameteri(WebGLRenderingContext.TEXTURE_CUBE_MAP, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
        closure$gl.texParameteri(WebGLRenderingContext.TEXTURE_CUBE_MAP, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR_MIPMAP_LINEAR);
        closure$gl.generateMipmap(WebGLRenderingContext.TEXTURE_CUBE_MAP);
      }closure$gl.bindTexture(WebGLRenderingContext.TEXTURE_CUBE_MAP, null);
      return Unit;
    };
  }
  TextureCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureCube',
    interfaces: [Texture]
  };
  function TexturedQuadGeometry(gl) {
    Geometry.call(this);
    this.gl = gl;
    this.vertexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 0.5, -1.0, 1.0, 0.5, 1.0, -1.0, 0.5, 1.0, 1.0, 0.5]), WebGLRenderingContext.STATIC_DRAW);
    this.vertexNormalBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0]), WebGLRenderingContext.STATIC_DRAW);
    this.vertexTexCoordBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.bufferData(WebGLRenderingContext.ARRAY_BUFFER, new Float32Array([0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0]), WebGLRenderingContext.STATIC_DRAW);
    this.indexBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.bufferData(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 2, 3]), WebGLRenderingContext.STATIC_DRAW);
    this.inputLayout = this.gl.createVertexArray();
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexBuffer);
    this.gl.enableVertexAttribArray(0);
    this.gl.vertexAttribPointer(0, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexNormalBuffer);
    this.gl.enableVertexAttribArray(1);
    this.gl.vertexAttribPointer(1, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.vertexTexCoordBuffer);
    this.gl.enableVertexAttribArray(2);
    this.gl.vertexAttribPointer(2, 2, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.gl.bindVertexArray(null);
  }
  TexturedQuadGeometry.prototype.draw = function () {
    this.gl.bindVertexArray(this.inputLayout);
    this.gl.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    this.gl.drawElements(WebGLRenderingContext.TRIANGLES, 6, WebGLRenderingContext.UNSIGNED_SHORT, 0);
  };
  TexturedQuadGeometry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexturedQuadGeometry',
    interfaces: [Geometry]
  };
  function VertexArray() {
  }
  VertexArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexArray',
    interfaces: []
  };
  function Drawable() {
  }
  Drawable.prototype.gatherUniforms_lf1bug$ = function (target) {
  };
  Drawable.prototype.drawWithOverrides_uyxske$ = function (overrides, uniformProviders) {
    this.draw_a4auz3$(uniformProviders.slice());
  };
  Drawable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Drawable',
    interfaces: []
  };
  function Geometry() {
    Drawable.call(this);
  }
  Geometry.prototype.draw_a4auz3$ = function (uniformProviders) {
    this.draw();
  };
  Geometry.prototype.drawWithOverrides_uyxske$ = function (overrides, uniformProviders) {
    this.draw_a4auz3$(uniformProviders.slice());
  };
  Geometry.prototype.gatherUniforms_lf1bug$ = function (target) {
  };
  Geometry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Geometry',
    interfaces: [Drawable]
  };
  function Mat4(backingStorage, offset) {
    if (offset === void 0)
      offset = 0;
    var tmp$;
    this.storage_xxqmh0$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(offset, offset + 16 | 0) : null) != null ? tmp$ : new Float32Array(16);
  }
  Object.defineProperty(Mat4.prototype, 'storage', {
    get: function () {
      return this.storage_xxqmh0$_0;
    }
  });
  Mat4.prototype.clone = function () {
    return Mat4_init_0(this);
  };
  Mat4.prototype.set_8cqhcw$ = function (values) {
    var array = Array_0(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      array[i] = (tmp$_0 = getOrNull(values, (i % 4 * 4 | 0) + (i / 4 | 0) | 0)) != null ? tmp$_0 : i % 5 === 0 ? 1.0 : 0.0;
    }
    var allElements = array;
    this.storage.set(allElements);
    return this;
  };
  Mat4.prototype.set_qp9vav$ = function (other) {
    if (Kotlin.isType(other, Mat4)) {
      this.storage.set(other.storage);
    } else {
      throw Error_init('A Mat4 cannot be set from a Uniform of another type.');
    }
    return this;
  };
  Mat4.prototype.premul_wohikv$ = function (m) {
    var n00 = this.storage[0];
    var n01 = this.storage[4];
    var n02 = this.storage[8];
    var n03 = this.storage[12];
    var n10 = this.storage[1];
    var n11 = this.storage[5];
    var n12 = this.storage[9];
    var n13 = this.storage[13];
    var n20 = this.storage[2];
    var n21 = this.storage[6];
    var n22 = this.storage[10];
    var n23 = this.storage[14];
    var n30 = this.storage[3];
    var n31 = this.storage[7];
    var n32 = this.storage[11];
    var n33 = this.storage[15];
    var m00 = m.storage[0];
    var m01 = m.storage[4];
    var m02 = m.storage[8];
    var m03 = m.storage[12];
    var m10 = m.storage[1];
    var m11 = m.storage[5];
    var m12 = m.storage[9];
    var m13 = m.storage[13];
    var m20 = m.storage[2];
    var m21 = m.storage[6];
    var m22 = m.storage[10];
    var m23 = m.storage[14];
    var m30 = m.storage[3];
    var m31 = m.storage[7];
    var m32 = m.storage[11];
    var m33 = m.storage[15];
    this.storage[0] = m00 * n00 + m01 * n10 + m02 * n20 + m03 * n30;
    this.storage[1] = m10 * n00 + m11 * n10 + m12 * n20 + m13 * n30;
    this.storage[2] = m20 * n00 + m21 * n10 + m22 * n20 + m23 * n30;
    this.storage[3] = m30 * n00 + m31 * n10 + m32 * n20 + m33 * n30;
    this.storage[4] = m00 * n01 + m01 * n11 + m02 * n21 + m03 * n31;
    this.storage[5] = m10 * n01 + m11 * n11 + m12 * n21 + m13 * n31;
    this.storage[6] = m20 * n01 + m21 * n11 + m22 * n21 + m23 * n31;
    this.storage[7] = m30 * n01 + m31 * n11 + m32 * n21 + m33 * n31;
    this.storage[8] = m00 * n02 + m01 * n12 + m02 * n22 + m03 * n32;
    this.storage[9] = m10 * n02 + m11 * n12 + m12 * n22 + m13 * n32;
    this.storage[10] = m20 * n02 + m21 * n12 + m22 * n22 + m23 * n32;
    this.storage[11] = m30 * n02 + m31 * n12 + m32 * n22 + m33 * n32;
    this.storage[12] = m00 * n03 + m01 * n13 + m02 * n23 + m03 * n33;
    this.storage[13] = m10 * n03 + m11 * n13 + m12 * n23 + m13 * n33;
    this.storage[14] = m20 * n03 + m21 * n13 + m22 * n23 + m23 * n33;
    this.storage[15] = m30 * n03 + m31 * n13 + m32 * n23 + m33 * n33;
    return this;
  };
  Mat4.prototype.timesAssign_wohikv$ = function (m) {
    var m00 = this.storage[0];
    var m01 = this.storage[4];
    var m02 = this.storage[8];
    var m03 = this.storage[12];
    var m10 = this.storage[1];
    var m11 = this.storage[5];
    var m12 = this.storage[9];
    var m13 = this.storage[13];
    var m20 = this.storage[2];
    var m21 = this.storage[6];
    var m22 = this.storage[10];
    var m23 = this.storage[14];
    var m30 = this.storage[3];
    var m31 = this.storage[7];
    var m32 = this.storage[11];
    var m33 = this.storage[15];
    var n00 = m.storage[0];
    var n01 = m.storage[4];
    var n02 = m.storage[8];
    var n03 = m.storage[12];
    var n10 = m.storage[1];
    var n11 = m.storage[5];
    var n12 = m.storage[9];
    var n13 = m.storage[13];
    var n20 = m.storage[2];
    var n21 = m.storage[6];
    var n22 = m.storage[10];
    var n23 = m.storage[14];
    var n30 = m.storage[3];
    var n31 = m.storage[7];
    var n32 = m.storage[11];
    var n33 = m.storage[15];
    this.storage[0] = m00 * n00 + m01 * n10 + m02 * n20 + m03 * n30;
    this.storage[1] = m10 * n00 + m11 * n10 + m12 * n20 + m13 * n30;
    this.storage[2] = m20 * n00 + m21 * n10 + m22 * n20 + m23 * n30;
    this.storage[3] = m30 * n00 + m31 * n10 + m32 * n20 + m33 * n30;
    this.storage[4] = m00 * n01 + m01 * n11 + m02 * n21 + m03 * n31;
    this.storage[5] = m10 * n01 + m11 * n11 + m12 * n21 + m13 * n31;
    this.storage[6] = m20 * n01 + m21 * n11 + m22 * n21 + m23 * n31;
    this.storage[7] = m30 * n01 + m31 * n11 + m32 * n21 + m33 * n31;
    this.storage[8] = m00 * n02 + m01 * n12 + m02 * n22 + m03 * n32;
    this.storage[9] = m10 * n02 + m11 * n12 + m12 * n22 + m13 * n32;
    this.storage[10] = m20 * n02 + m21 * n12 + m22 * n22 + m23 * n32;
    this.storage[11] = m30 * n02 + m31 * n12 + m32 * n22 + m33 * n32;
    this.storage[12] = m00 * n03 + m01 * n13 + m02 * n23 + m03 * n33;
    this.storage[13] = m10 * n03 + m11 * n13 + m12 * n23 + m13 * n33;
    this.storage[14] = m20 * n03 + m21 * n13 + m22 * n23 + m23 * n33;
    this.storage[15] = m30 * n03 + m31 * n13 + m32 * n23 + m33 * n33;
  };
  Mat4.prototype.times_wohikv$ = function (m) {
    var res = Mat4_init_0(this);
    res.timesAssign_wohikv$(m);
    return res;
  };
  Mat4.prototype.timesAssign_mx4ult$ = function (s) {
    this.storage[0] = this.storage[0] * s;
    this.storage[1] = this.storage[1] * s;
    this.storage[2] = this.storage[2] * s;
    this.storage[3] = this.storage[3] * s;
    this.storage[4] = this.storage[4] * s;
    this.storage[5] = this.storage[5] * s;
    this.storage[6] = this.storage[6] * s;
    this.storage[7] = this.storage[7] * s;
    this.storage[8] = this.storage[8] * s;
    this.storage[9] = this.storage[9] * s;
    this.storage[10] = this.storage[10] * s;
    this.storage[12] = this.storage[12] * s;
    this.storage[13] = this.storage[13] * s;
    this.storage[14] = this.storage[14] * s;
    this.storage[15] = this.storage[15] * s;
  };
  Mat4.prototype.times_mx4ult$ = function (s) {
    var res = Mat4_init_0(this);
    res.timesAssign_mx4ult$(s);
    return res;
  };
  Mat4.prototype.times_wobp4z$ = function (v) {
    var vp = Vec4_init();
    vp.storage[0] = this.storage[0] * v.storage[0] + this.storage[1] * v.storage[1] + this.storage[2] * v.storage[2] + this.storage[3] * v.storage[3];
    vp.storage[1] = this.storage[4] * v.storage[0] + this.storage[5] * v.storage[1] + this.storage[6] * v.storage[2] + this.storage[7] * v.storage[3];
    vp.storage[2] = this.storage[8] * v.storage[0] + this.storage[9] * v.storage[1] + this.storage[10] * v.storage[2] + this.storage[11] * v.storage[3];
    vp.storage[3] = this.storage[12] * v.storage[0] + this.storage[13] * v.storage[1] + this.storage[14] * v.storage[2] + this.storage[15] * v.storage[3];
    return vp;
  };
  Mat4.prototype.scale_wobp51$ = function (s) {
    return this.scale_y2kzbl$(s.storage[0], s.storage[1], 1.0);
  };
  Mat4.prototype.scale_wobp50$ = function (s) {
    return this.scale_y2kzbl$(s.storage[0], s.storage[1], s.storage[2]);
  };
  Mat4.prototype.scale_y2kzbl$ = function (sx, sy, sz) {
    if (sx === void 0)
      sx = 1.0;
    if (sy === void 0)
      sy = 1.0;
    if (sz === void 0)
      sz = 1.0;
    this.storage[0] = this.storage[0] * sx;
    this.storage[1] = this.storage[1] * sx;
    this.storage[2] = this.storage[2] * sx;
    this.storage[3] = this.storage[3] * sx;
    this.storage[4] = this.storage[4] * sy;
    this.storage[5] = this.storage[5] * sy;
    this.storage[6] = this.storage[6] * sy;
    this.storage[7] = this.storage[7] * sy;
    this.storage[8] = this.storage[8] * sz;
    this.storage[9] = this.storage[9] * sz;
    this.storage[10] = this.storage[10] * sz;
    this.storage[11] = this.storage[11] * sz;
    return this;
  };
  Mat4.prototype.rotate_oywqox$ = function (angle, axis) {
    return this.rotate_7b5o5w$(angle, axis.storage[0], axis.storage[1], axis.storage[3]);
  };
  Mat4.prototype.rotate_7b5o5w$ = function (angle, axisX, axisY, axisZ) {
    if (angle === void 0)
      angle = 0.0;
    if (axisX === void 0)
      axisX = 0.0;
    if (axisY === void 0)
      axisY = 0.0;
    if (axisZ === void 0)
      axisZ = 0.0;
    var x = axisX;
    var y = axisY;
    var z = axisZ;
    var axisLength2 = x * x + y * y + z * z;
    if (axisLength2 < 1.0E-4) {
      x = 0.0;
      y = 0.0;
      z = 1.0;
    } else if (axisLength2 < 0.999 || axisLength2 > 1.001) {
      var axisLength = Math_0.sqrt(axisLength2);
      x /= axisLength;
      y /= axisLength;
      z /= axisLength;
    }var cosa = Math_0.cos(angle);
    var sina = Math_0.sin(angle);
    var C = 1.0 - cosa;
    var m11 = x * x * C + cosa;
    var m21 = x * y * C - z * sina;
    var m31 = x * z * C + y * sina;
    var m12 = y * x * C + z * sina;
    var m22 = y * y * C + cosa;
    var m32 = y * z * C - x * sina;
    var m13 = z * x * C - y * sina;
    var m23 = z * y * C + x * sina;
    var m33 = z * z * C + cosa;
    var t0 = this.storage[0] * m11 + this.storage[4] * m21 + this.storage[8] * m31;
    var t4 = this.storage[0] * m12 + this.storage[4] * m22 + this.storage[8] * m32;
    var t8 = this.storage[0] * m13 + this.storage[4] * m23 + this.storage[8] * m33;
    var t1 = this.storage[1] * m11 + this.storage[5] * m21 + this.storage[9] * m31;
    var t5 = this.storage[1] * m12 + this.storage[5] * m22 + this.storage[9] * m32;
    var t9 = this.storage[1] * m13 + this.storage[5] * m23 + this.storage[9] * m33;
    var t2 = this.storage[2] * m11 + this.storage[6] * m21 + this.storage[10] * m31;
    var t6 = this.storage[2] * m12 + this.storage[6] * m22 + this.storage[10] * m32;
    var t10 = this.storage[2] * m13 + this.storage[6] * m23 + this.storage[10] * m33;
    var t3 = this.storage[3] * m11 + this.storage[7] * m21 + this.storage[11] * m31;
    var t7 = this.storage[3] * m12 + this.storage[7] * m22 + this.storage[11] * m32;
    var t11 = this.storage[3] * m13 + this.storage[7] * m23 + this.storage[11] * m33;
    this.storage[0] = t0;
    this.storage[4] = t4;
    this.storage[8] = t8;
    this.storage[1] = t1;
    this.storage[5] = t5;
    this.storage[9] = t9;
    this.storage[2] = t2;
    this.storage[6] = t6;
    this.storage[10] = t10;
    this.storage[3] = t3;
    this.storage[7] = t7;
    this.storage[11] = t11;
    return this;
  };
  Mat4.prototype.translate_wobp51$ = function (t) {
    return this.translate_y2kzbl$(t.storage[0], t.storage[1]);
  };
  Mat4.prototype.translate_wobp50$ = function (t) {
    return this.translate_y2kzbl$(t.storage[0], t.storage[1], t.storage[2]);
  };
  Mat4.prototype.translate_y2kzbl$ = function (x, y, z) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    this.storage[0] = this.storage[0] + this.storage[12] * x;
    this.storage[4] = this.storage[4] + this.storage[12] * y;
    this.storage[8] = this.storage[8] + this.storage[12] * z;
    this.storage[1] = this.storage[1] + this.storage[13] * x;
    this.storage[5] = this.storage[5] + this.storage[13] * y;
    this.storage[9] = this.storage[9] + this.storage[13] * z;
    this.storage[2] = this.storage[2] + this.storage[14] * x;
    this.storage[6] = this.storage[6] + this.storage[14] * y;
    this.storage[10] = this.storage[10] + this.storage[14] * z;
    this.storage[3] = this.storage[3] + this.storage[15] * x;
    this.storage[7] = this.storage[7] + this.storage[15] * y;
    this.storage[11] = this.storage[11] + this.storage[15] * z;
    return this;
  };
  Mat4.prototype.transpose = function () {
    var temp = this.storage[4];
    this.storage[4] = this.storage[1];
    this.storage[1] = temp;
    temp = this.storage[8];
    this.storage[8] = this.storage[2];
    this.storage[2] = temp;
    temp = this.storage[12];
    this.storage[12] = this.storage[3];
    this.storage[3] = temp;
    temp = this.storage[9];
    this.storage[9] = this.storage[6];
    this.storage[6] = temp;
    temp = this.storage[13];
    this.storage[13] = this.storage[7];
    this.storage[7] = temp;
    temp = this.storage[14];
    this.storage[14] = this.storage[11];
    this.storage[11] = temp;
    return this;
  };
  Mat4.prototype.invert = function () {
    var a00 = this.storage[0];
    var a01 = this.storage[1];
    var a02 = this.storage[2];
    var a03 = this.storage[3];
    var m000 = this.storage[4];
    var m001 = this.storage[5];
    var m002 = this.storage[6];
    var m003 = this.storage[7];
    var m100 = this.storage[8];
    var m101 = this.storage[9];
    var m102 = this.storage[10];
    var m103 = this.storage[11];
    var m200 = this.storage[12];
    var m201 = this.storage[13];
    var m202 = this.storage[14];
    var m203 = this.storage[15];
    var b00 = a00 * m001 - a01 * m000;
    var b01 = a00 * m002 - a02 * m000;
    var b02 = a00 * m003 - a03 * m000;
    var b03 = a01 * m002 - a02 * m001;
    var b04 = a01 * m003 - a03 * m001;
    var b05 = a02 * m003 - a03 * m002;
    var b06 = m100 * m201 - m101 * m200;
    var b07 = m100 * m202 - m102 * m200;
    var b08 = m100 * m203 - m103 * m200;
    var b09 = m101 * m202 - m102 * m201;
    var m010 = m101 * m203 - m103 * m201;
    var m011 = m102 * m203 - m103 * m202;
    var det = b00 * m011 - b01 * m010 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return this;
    }var invDet = 1.0 / det;
    this.storage[0] = (m001 * m011 - m002 * m010 + m003 * b09) * invDet;
    this.storage[1] = (-a01 * m011 + a02 * m010 - a03 * b09) * invDet;
    this.storage[2] = (m201 * b05 - m202 * b04 + m203 * b03) * invDet;
    this.storage[3] = (-m101 * b05 + m102 * b04 - m103 * b03) * invDet;
    this.storage[4] = (-m000 * m011 + m002 * b08 - m003 * b07) * invDet;
    this.storage[5] = (a00 * m011 - a02 * b08 + a03 * b07) * invDet;
    this.storage[6] = (-m200 * b05 + m202 * b02 - m203 * b01) * invDet;
    this.storage[7] = (m100 * b05 - m102 * b02 + m103 * b01) * invDet;
    this.storage[8] = (m000 * m010 - m001 * b08 + m003 * b06) * invDet;
    this.storage[9] = (-a00 * m010 + a01 * b08 - a03 * b06) * invDet;
    this.storage[10] = (m200 * b04 - m201 * b02 + m203 * b00) * invDet;
    this.storage[11] = (-m100 * b04 + m101 * b02 - m103 * b00) * invDet;
    this.storage[12] = (-m000 * b09 + m001 * b07 - m002 * b06) * invDet;
    this.storage[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    this.storage[14] = (-m200 * b03 + m201 * b01 - m202 * b00) * invDet;
    this.storage[15] = (m100 * b03 - m101 * b01 + m102 * b00) * invDet;
    return this;
  };
  Mat4.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Mat4.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Mat4.prototype.setValue_dujy9d$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Mat4.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.storage);
  };
  Mat4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat4',
    interfaces: [UniformFloat]
  };
  function Mat4_init(elements, $this) {
    $this = $this || Object.create(Mat4.prototype);
    Mat4.call($this, null, 0);
    var array = Array_0(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0;
      array[i] = (tmp$_0 = getOrNull(elements, (i % 4 * 4 | 0) + (i / 4 | 0) | 0)) != null ? tmp$_0 : i % 5 === 0 ? 1.0 : 0.0;
    }
    var allElements = array;
    $this.storage.set(allElements);
    return $this;
  }
  function Mat4_init_0(other, $this) {
    $this = $this || Object.create(Mat4.prototype);
    Mat4.call($this, null, 0);
    $this.storage.set(other.storage);
    return $this;
  }
  function Mat4Array(backingStorage, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    var tmp$;
    this.storage_hutqe3$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(startIndex * 16 | 0, endIndex * 16 | 0) : null) != null ? tmp$ : new Float32Array(startIndex * 16 | 0);
  }
  Object.defineProperty(Mat4Array.prototype, 'storage', {
    get: function () {
      return this.storage_hutqe3$_0;
    }
  });
  Mat4Array.prototype.set_8cqhcw$ = function (values) {
    var tmp$, tmp$_0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = (tmp$_0 = getOrNull(values, i % 16)) != null ? tmp$_0 : i % 16 % 5 === 0 ? 1.0 : 0.0;
    }
    return this;
  };
  Mat4Array.prototype.get_za3lpa$ = function (i) {
    return new Mat4(this.storage, i * 16 | 0);
  };
  Mat4Array.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Mat4Array.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Mat4Array.prototype.setValue_2tcvyi$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Mat4Array.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.storage);
  };
  Mat4Array.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mat4Array',
    interfaces: [UniformFloat]
  };
  function Mat4Array_init(size, $this) {
    $this = $this || Object.create(Mat4Array.prototype);
    Mat4Array.call($this, null, size, size);
    return $this;
  }
  function get_UNSIGNED_INT_SAMPLER_2D($receiver) {
    return 36306;
  }
  function get_INT_SAMPLER_2D($receiver) {
    return 36298;
  }
  function get_SAMPLER_2D_SHADOW($receiver) {
    return 35682;
  }
  function get_UNSIGNED_INT_SAMPLER_CUBE($receiver) {
    return 36308;
  }
  function get_INT_SAMPLER_CUBE($receiver) {
    return 36300;
  }
  function get_SAMPLER_CUBE_SHADOW($receiver) {
    return 36293;
  }
  function get_UNSIGNED_INT_SAMPLER_3D($receiver) {
    return 36307;
  }
  function get_INT_SAMPLER_3D($receiver) {
    return 36299;
  }
  function get_SAMPLER_3D($receiver) {
    return 35679;
  }
  function get_UNSIGNED_INT_SAMPLER_2D_ARRAY($receiver) {
    return 36311;
  }
  function get_INT_SAMPLER_2D_ARRAY($receiver) {
    return 36303;
  }
  function get_SAMPLER_2D_ARRAY_SHADOW($receiver) {
    return 36292;
  }
  function get_SAMPLER_2D_ARRAY($receiver) {
    return 36289;
  }
  function UniformDescriptor(name, type, size, location) {
    this.name = name;
    this.type = type;
    this.size = size;
    this.location = location;
  }
  UniformDescriptor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformDescriptor',
    interfaces: []
  };
  function ProgramReflection(gl, glProgram) {
    ProgramReflection$Companion_getInstance();
    Drawable.call(this);
    this.gl = gl;
    this.glProgram = glProgram;
    this.uniformDescriptors = HashMap_init();
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var nUniforms = typeof (tmp$ = this.gl.getProgramParameter(this.glProgram, WebGLRenderingContext.ACTIVE_UNIFORMS)) === 'number' ? tmp$ : throwCCE();
    for (var i = 0; i < nUniforms; i++) {
      var glUniform = ensureNotNull(this.gl.getActiveUniform(this.glProgram, i));
      var nameParts = split(glUniform.name, ['.']);
      tmp$_0 = lastOrNull(nameParts);
      if (tmp$_0 == null) {
        continue;
      }var uniformName = tmp$_0;
      tmp$_1 = lastOrNull(dropLast(nameParts, 1));
      if (tmp$_1 == null) {
        continue;
      }var structName = tmp$_1;
      var $receiver = this.uniformDescriptors;
      var value = (tmp$_2 = this.uniformDescriptors.get_11rb$(structName)) != null ? tmp$_2 : ArrayList_init();
      $receiver.put_xwzc9p$(structName, value);
      ensureNotNull(this.uniformDescriptors.get_11rb$(structName)).add_11rb$(new UniformDescriptor(uniformName, glUniform.type, glUniform.size, ensureNotNull(this.gl.getUniformLocation(this.glProgram, glUniform.name))));
    }
  }
  ProgramReflection.prototype.gatherUniforms_lf1bug$ = function (target) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$ = target.glslStructNames;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var structName = tmp$[tmp$_0];
      tmp$_1 = this.uniformDescriptors.get_11rb$(structName);
      if (tmp$_1 == null) {
        continue;
      }var descList = tmp$_1;
      tmp$_2 = descList.iterator();
      while (tmp$_2.hasNext()) {
        var uniformDesc = tmp$_2.next();
        var reflectionVariable = ProgramReflection$Companion_getInstance().makeVar_vux9f0$(uniformDesc.type, uniformDesc.size);
        if (target.uniforms_8be2vx$.containsKey_11rb$(uniformDesc.name)) {
          tmp$_3 = target.uniforms_8be2vx$.get_11rb$(uniformDesc.name);
          if (tmp$_3 == null) {
            throw Error_init('Uniform is null.');
          }var existingVariable = tmp$_3;
          if (!((tmp$_4 = Kotlin.getKClassFromExpression(existingVariable)) != null ? tmp$_4.equals(Kotlin.getKClassFromExpression(reflectionVariable)) : null) || existingVariable.getStorageSize() !== reflectionVariable.getStorageSize()) {
            throw Error_init('Trying to reflect uniform ' + uniformDesc.name + ' as a ' + toString(Kotlin.getKClassFromExpression(reflectionVariable).simpleName) + ' with element count ' + reflectionVariable.getStorageSize() + ', but it already exists in the target object as a ' + toString(Kotlin.getKClassFromExpression(existingVariable).simpleName) + ' with element count ' + existingVariable.getStorageSize() + '.');
          }} else {
          var $receiver = target.uniforms_8be2vx$;
          var key = uniformDesc.name;
          $receiver.put_xwzc9p$(key, reflectionVariable);
        }
      }
    }
  };
  ProgramReflection.prototype.draw_a4auz3$ = function (uniformProviders) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    this.gl.useProgram(this.glProgram);
    var textureUnitCount = 0;
    for (tmp$ = 0; tmp$ !== uniformProviders.length; ++tmp$) {
      var provider = uniformProviders[tmp$];
      tmp$_0 = provider.glslStructNames;
      for (tmp$_1 = 0; tmp$_1 !== tmp$_0.length; ++tmp$_1) {
        var structName = tmp$_0[tmp$_1];
        tmp$_2 = this.uniformDescriptors.get_11rb$(structName);
        if (tmp$_2 == null) {
          continue;
        }var descList = tmp$_2;
        tmp$_3 = descList.iterator();
        while (tmp$_3.hasNext()) {
          var uniformDesc = tmp$_3.next();
          ensureNotNull(provider.get_61zpoe$(uniformDesc.name)).commit_9xmcn8$(this.gl, uniformDesc.location, textureUnitCount);
          if (ProgramReflection$Companion_getInstance().isSampler_za3lpa$(uniformDesc.type)) {
            textureUnitCount = textureUnitCount + uniformDesc.size | 0;
          }}
      }
    }
  };
  function ProgramReflection$Companion() {
    ProgramReflection$Companion_instance = this;
  }
  ProgramReflection$Companion.prototype.makeVar_vux9f0$ = function (type, arraySize) {
    if (arraySize === 1) {
      if (type === WebGLRenderingContext.FLOAT)
        return Vec1_init();
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2_init();
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3_init();
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4_init();
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4_init(new Float32Array([]));
      else if (type === WebGLRenderingContext.SAMPLER_2D)
        return new Sampler2D();
      else if (type === WebGLRenderingContext.SAMPLER_CUBE)
        return new SamplerCube();
      else if (type === get_SAMPLER_3D(WebGLRenderingContext))
        return new Sampler3D();
    } else {
      if (type === WebGLRenderingContext.FLOAT)
        return Vec1Array_init(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2Array_init(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3Array_init(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4Array_init(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4Array_init(arraySize);
    }
    throw Error_init('Unhandled uniform variable of type ID ' + type + '.');
  };
  ProgramReflection$Companion.prototype.isSampler_za3lpa$ = function (type) {
    return type === WebGLRenderingContext.SAMPLER_2D || type === get_SAMPLER_3D(WebGLRenderingContext) || type === WebGLRenderingContext.SAMPLER_CUBE || type === get_SAMPLER_2D_SHADOW(WebGLRenderingContext) || type === get_SAMPLER_2D_ARRAY(WebGLRenderingContext) || type === get_SAMPLER_2D_ARRAY_SHADOW(WebGLRenderingContext) || type === get_SAMPLER_CUBE_SHADOW(WebGLRenderingContext) || type === get_INT_SAMPLER_2D(WebGLRenderingContext) || type === get_INT_SAMPLER_3D(WebGLRenderingContext) || type === get_INT_SAMPLER_CUBE(WebGLRenderingContext) || type === get_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext) || type === get_UNSIGNED_INT_SAMPLER_2D(WebGLRenderingContext) || type === get_UNSIGNED_INT_SAMPLER_3D(WebGLRenderingContext) || type === get_UNSIGNED_INT_SAMPLER_CUBE(WebGLRenderingContext) || type === get_UNSIGNED_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext);
  };
  ProgramReflection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ProgramReflection$Companion_instance = null;
  function ProgramReflection$Companion_getInstance() {
    if (ProgramReflection$Companion_instance === null) {
      new ProgramReflection$Companion();
    }return ProgramReflection$Companion_instance;
  }
  ProgramReflection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProgramReflection',
    interfaces: [Drawable]
  };
  function Sampler2D() {
    this.storage_bmly6o$_0 = new Int32Array(1);
    var array = Array_0(1);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = null;
    }
    this.glTextures_fyiyq4$_0 = array;
  }
  Object.defineProperty(Sampler2D.prototype, 'storage', {
    get: function () {
      return this.storage_bmly6o$_0;
    }
  });
  Object.defineProperty(Sampler2D.prototype, 'glTextures', {
    get: function () {
      return this.glTextures_fyiyq4$_0;
    }
  });
  Sampler2D.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Sampler2D.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Sampler2D.prototype.setValue_xwh4qn$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Sampler2D.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    this.storage[0] = samplerIndex;
    if (this.glTextures[0] != null) {
      gl.uniform1iv(uniformLocation, this.storage);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.glTextures[0]);
    } else {
      throw Error_init('No texture bound to Sampler2D uniform.');
    }
  };
  Sampler2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sampler2D',
    interfaces: [UniformSampler]
  };
  function get_TEXTURE_3D($receiver) {
    return 32879;
  }
  function Sampler3D() {
    this.storage_i38ycv$_0 = new Int32Array(1);
    var array = Array_0(1);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = null;
    }
    this.glTextures_7lj36z$_0 = array;
  }
  Object.defineProperty(Sampler3D.prototype, 'storage', {
    get: function () {
      return this.storage_i38ycv$_0;
    }
  });
  Object.defineProperty(Sampler3D.prototype, 'glTextures', {
    get: function () {
      return this.glTextures_7lj36z$_0;
    }
  });
  Sampler3D.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Sampler3D.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Sampler3D.prototype.setValue_xwh4ri$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Sampler3D.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    this.storage[0] = samplerIndex;
    if (this.glTextures[0] != null) {
      gl.uniform1iv(uniformLocation, this.storage);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(get_TEXTURE_3D(WebGLRenderingContext), this.glTextures[0]);
    } else {
      throw Error_init('No texture bound to Sampler3D uniform.');
    }
  };
  Sampler3D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sampler3D',
    interfaces: [UniformSampler]
  };
  function SamplerCube() {
    this.storage_7i8mlp$_0 = new Int32Array(1);
    var array = Array_0(1);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = null;
    }
    this.glTextures_myy41d$_0 = array;
  }
  Object.defineProperty(SamplerCube.prototype, 'storage', {
    get: function () {
      return this.storage_7i8mlp$_0;
    }
  });
  Object.defineProperty(SamplerCube.prototype, 'glTextures', {
    get: function () {
      return this.glTextures_myy41d$_0;
    }
  });
  SamplerCube.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  SamplerCube.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  SamplerCube.prototype.setValue_n91q0u$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  SamplerCube.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    this.storage[0] = samplerIndex;
    if (this.glTextures[0] != null) {
      gl.uniform1iv(uniformLocation, this.storage);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_CUBE_MAP, this.glTextures[0]);
    } else {
      throw Error_init('No texture bound to SamplerCube uniform.');
    }
  };
  SamplerCube.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SamplerCube',
    interfaces: [UniformSampler]
  };
  function Texture() {
  }
  Texture.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Texture',
    interfaces: []
  };
  function Uniform() {
  }
  Uniform.prototype.commit_9xmcn8$ = function (gl, uniformLocation, samplerIndex, callback$default) {
    if (samplerIndex === void 0)
      samplerIndex = 0;
    callback$default ? callback$default(gl, uniformLocation, samplerIndex) : this.commit_9xmcn8$$default(gl, uniformLocation, samplerIndex);
  };
  Uniform.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Uniform',
    interfaces: []
  };
  function UniformFloat() {
  }
  UniformFloat.prototype.getStorageSize = function () {
    return this.storage.length;
  };
  UniformFloat.prototype.set_qp9vav$ = function (other) {
    var tmp$;
    if (Kotlin.isType(other, UniformFloat)) {
      tmp$ = this.storage.length;
      for (var i = 0; i < tmp$; i++) {
        this.storage[i] = i < other.storage.length ? other.storage[i] : 0.0;
      }
    } else {
      throw Error_init('Cannot set a uniform of floats from a non-float uniform.');
    }
    return this;
  };
  UniformFloat.prototype.set_xwoe53$ = function (firstTexture, moreTextures) {
    throw Error_init('Cannot set a texture to a non-sampler uniform.');
  };
  UniformFloat.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UniformFloat',
    interfaces: [Uniform]
  };
  function UniformSampler() {
  }
  UniformSampler.prototype.getStorageSize = function () {
    return this.storage.length;
  };
  UniformSampler.prototype.set_qp9vav$ = function (other) {
    var tmp$;
    if (Kotlin.isType(other, UniformSampler)) {
      tmp$ = this.storage.length;
      for (var i = 0; i < tmp$; i++) {
        this.storage[i] = i < other.storage.length ? other.storage[i] : 0;
        this.glTextures[i] = getOrNull_0(other.glTextures, i);
      }
    } else {
      throw Error_init('Cannot set a uniform of textures from a non-texture uniform.');
    }
    return this;
  };
  UniformSampler.prototype.set_xwoe53$ = function (firstTexture, moreTextures) {
    var tmp$, tmp$_0;
    this.glTextures[0] = firstTexture.glTexture;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.glTextures[i + 1 | 0] = (tmp$_0 = getOrNull_0(moreTextures, i)) != null ? tmp$_0.glTexture : null;
    }
  };
  UniformSampler.prototype.set_8cqhcw$ = function (values) {
    throw Error_init('Cannot set float values to a texture uniform.');
  };
  UniformSampler.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UniformSampler',
    interfaces: [Uniform]
  };
  function UniformProvider(glslStructNames) {
    Drawable.call(this);
    this.glslStructNames = glslStructNames;
    this.uniforms_8be2vx$ = HashMap_init();
    this.components = ArrayList_init();
  }
  UniformProvider.prototype.register_7ghwgr$ = function (uniformName, uniform) {
    this.uniforms_8be2vx$.put_xwzc9p$(uniformName, uniform);
  };
  UniformProvider.prototype.get_61zpoe$ = function (name) {
    if (!this.uniforms_8be2vx$.containsKey_11rb$(name)) {
      console.error("WARNING: Attempt to access unknown or non-active uniform '" + name + "'.");
    }return this.uniforms_8be2vx$.get_11rb$(name);
  };
  UniformProvider.prototype.set_7ghwgr$ = function (name, uniform) {
    var tmp$;
    tmp$ = this.uniforms_8be2vx$.get_11rb$(name);
    if (tmp$ == null) {
      return;
    }tmp$.set_qp9vav$(uniform);
  };
  UniformProvider.prototype.set_9sobi5$ = function (name, value) {
    var tmp$;
    tmp$ = this.uniforms_8be2vx$.get_11rb$(name);
    if (tmp$ == null) {
      return;
    }tmp$.set_8cqhcw$(new Float32Array([value]));
  };
  UniformProvider.prototype.addComponentsAndGatherUniforms_inpnaw$ = function (children) {
    addAll(this.components, children);
    this.gatherUniforms_lf1bug$(this);
  };
  UniformProvider.prototype.gatherUniforms_lf1bug$ = function (target) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.gatherUniforms_lf1bug$(target);
    }
  };
  UniformProvider.prototype.draw_a4auz3$ = function (uniformProviders) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.draw_a4auz3$([this].concat(uniformProviders));
    }
  };
  UniformProvider.prototype.drawWithOverrides_uyxske$ = function (overrides, uniformProviders) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      var key = Kotlin.getKClassFromExpression(element).simpleName;
      var tmp$_1;
      ((tmp$_0 = (Kotlin.isType(tmp$_1 = overrides, Map) ? tmp$_1 : throwCCE()).get_11rb$(key)) != null ? tmp$_0 : element).drawWithOverrides_uyxske$(overrides, [this].concat(uniformProviders));
    }
  };
  function UniformProvider$using$ObjectLiteral(this$UniformProvider, closure$overrideMap) {
    this.this$UniformProvider = this$UniformProvider;
    this.closure$overrideMap = closure$overrideMap;
    Drawable.call(this);
  }
  UniformProvider$using$ObjectLiteral.prototype.draw_a4auz3$ = function (uniformProviders) {
    this.this$UniformProvider.drawWithOverrides_uyxske$(this.closure$overrideMap, uniformProviders.slice());
  };
  UniformProvider$using$ObjectLiteral.prototype.drawWithOverrides_uyxske$ = function (overrides, uniformProviders) {
    var allOverrides = toMutableMap(this.closure$overrideMap);
    var tmp$;
    tmp$ = overrides.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = element.value;
      allOverrides.put_xwzc9p$(key, value);
    }
    this.this$UniformProvider.drawWithOverrides_uyxske$(allOverrides, uniformProviders.slice());
  };
  UniformProvider$using$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Drawable]
  };
  UniformProvider.prototype.using_a4auz3$ = function (overriders) {
    var destination = ArrayList_init_0(overriders.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== overriders.length; ++tmp$) {
      var item = overriders[tmp$];
      var tmp$_0;
      destination.add_11rb$(to((tmp$_0 = Kotlin.getKClassFromExpression(item).simpleName) != null ? tmp$_0 : '<no class name>', item));
    }
    var overrideMap = toMap(destination);
    return new UniformProvider$using$ObjectLiteral(this, overrideMap);
  };
  UniformProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UniformProvider',
    interfaces: [Drawable]
  };
  function Vec1(backingStorage, offset) {
    Vec1$Companion_getInstance();
    if (offset === void 0)
      offset = 0;
    var tmp$;
    this.storage_jpf9ub$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(offset, offset + 1 | 0) : null) != null ? tmp$ : new Float32Array(1);
  }
  Object.defineProperty(Vec1.prototype, 'storage', {
    get: function () {
      return this.storage_jpf9ub$_0;
    }
  });
  Object.defineProperty(Vec1.prototype, 'x', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec1.get_x', function () {
      return this.storage[0];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec1.set_x_mx4ult$', function (value) {
      this.storage[0] = value;
    })
  });
  Object.defineProperty(Vec1.prototype, 'xx', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec1.get_xx', wrapFunction(function () {
      var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
      return function () {
        return Vec2_init(this.storage[0], this.storage[0]);
      };
    }))
  });
  Object.defineProperty(Vec1.prototype, 'xxx', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec1.get_xxx', wrapFunction(function () {
      var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
      return function () {
        return Vec3_init(this.storage[0], this.storage[0], this.storage[0]);
      };
    }))
  });
  Object.defineProperty(Vec1.prototype, 'xxxx', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec1.get_xxxx', wrapFunction(function () {
      var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
      return function () {
        return Vec4_init(this.storage[0], this.storage[0], this.storage[0], this.storage[0]);
      };
    }))
  });
  Vec1.prototype.clone = defineInlineFunction('kog.vision.gears.webglmath.Vec1.clone', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_wobp52$;
    return function () {
      return Vec1_init(this);
    };
  }));
  Vec1.prototype.set_8cqhcw$ = function (values) {
    this.storage[0] = 0 >= 0 && 0 <= get_lastIndex(values) ? values[0] : 0.0;
    return this;
  };
  function Vec1$Companion() {
    Vec1$Companion_instance = this;
    this.zeros = Vec1_init();
    this.ones = Vec1_init(1.0);
  }
  Vec1$Companion.prototype.makeRandom_l6w30o$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.Companion.makeRandom_l6w30o$', wrapFunction(function () {
    var Vec1 = _.vision.gears.webglmath.Vec1;
    var Random = Kotlin.kotlin.random.Random;
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec1.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec1.Companion.ones;
      return Vec1_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0]);
    };
  }));
  Vec1$Companion.prototype.makeRandom_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.Companion.makeRandom_dleff0$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec1_init(minVal);
      var maxVal_0 = Vec1_init(maxVal);
      return Vec1_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0]);
    };
  }));
  Vec1$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec1$Companion_instance = null;
  function Vec1$Companion_getInstance() {
    if (Vec1$Companion_instance === null) {
      new Vec1$Companion();
    }return Vec1$Companion_instance;
  }
  Vec1.prototype.randomize_l6w30o$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.randomize_l6w30o$', wrapFunction(function () {
    var Vec1 = _.vision.gears.webglmath.Vec1;
    var Random = Kotlin.kotlin.random.Random;
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec1.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec1.Companion.ones;
      this.set_qp9vav$(Vec1_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0]));
    };
  }));
  Vec1.prototype.randomize_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.randomize_dleff0$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec1_init(minVal);
      var maxVal_0 = Vec1_init(maxVal);
      this.set_qp9vav$(Vec1_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0]));
    };
  }));
  Vec1.prototype.clamp_l6w30o$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.clamp_l6w30o$', wrapFunction(function () {
    var Vec1 = _.vision.gears.webglmath.Vec1;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec1.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec1.Companion.ones;
      if (this.storage[0] < minVal.storage[0]) {
        this.storage[0] = minVal.storage[0];
      }if (this.storage[0] > maxVal.storage[0]) {
        this.storage[0] = maxVal.storage[0];
      }return this;
    };
  }));
  Vec1.prototype.unaryPlus = defineInlineFunction('kog.vision.gears.webglmath.Vec1.unaryPlus', function () {
    return this;
  });
  Vec1.prototype.unaryMinus = defineInlineFunction('kog.vision.gears.webglmath.Vec1.unaryMinus', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function () {
      return Vec1_init(-this.storage[0]);
    };
  }));
  Vec1.prototype.times_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.times_mx4ult$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (scalar) {
      return Vec1_init(this.storage[0] * scalar);
    };
  }));
  Vec1.prototype.div_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.div_mx4ult$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (scalar) {
      return Vec1_init(this.storage[0] / scalar);
    };
  }));
  Vec1.prototype.timesAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.timesAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] * scalar;
  });
  Vec1.prototype.divAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.divAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] / scalar;
  });
  Vec1.prototype.plusAssign_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.plusAssign_wobp52$', function (other) {
    this.storage[0] = this.storage[0] + other.storage[0];
  });
  Vec1.prototype.plus_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.plus_wobp52$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (other) {
      return Vec1_init(this.storage[0] + other.storage[0]);
    };
  }));
  Vec1.prototype.minusAssign_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.minusAssign_wobp52$', function (other) {
    this.storage[0] = this.storage[0] - other.storage[0];
  });
  Vec1.prototype.minus_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.minus_wobp52$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (other) {
      return Vec1_init(this.storage[0] - other.storage[0]);
    };
  }));
  Vec1.prototype.timesAssign_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.timesAssign_wobp52$', function (other) {
    this.storage[0] = this.storage[0] * other.storage[0];
  });
  Vec1.prototype.times_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.times_wobp52$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (other) {
      return Vec1_init(this.storage[0] * other.storage[0]);
    };
  }));
  Vec1.prototype.divAssign_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.divAssign_wobp52$', function (other) {
    this.storage[0] = this.storage[0] / other.storage[0];
  });
  Vec1.prototype.div_wobp52$ = defineInlineFunction('kog.vision.gears.webglmath.Vec1.div_wobp52$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function (other) {
      return Vec1_init(this.storage[0] / other.storage[0]);
    };
  }));
  Vec1.prototype.lengthSquared = defineInlineFunction('kog.vision.gears.webglmath.Vec1.lengthSquared', function () {
    return this.storage[0] * this.storage[0];
  });
  Vec1.prototype.length = defineInlineFunction('kog.vision.gears.webglmath.Vec1.length', function () {
    return this.storage[0];
  });
  Vec1.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec1.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec1.prototype.setValue_due4tk$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec1.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.storage);
  };
  Vec1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec1',
    interfaces: [UniformFloat]
  };
  function Vec1_init(u, $this) {
    if (u === void 0)
      u = 0.0;
    $this = $this || Object.create(Vec1.prototype);
    Vec1.call($this, null, 0);
    $this.storage[0] = u;
    return $this;
  }
  function Vec1_init_0(other, $this) {
    $this = $this || Object.create(Vec1.prototype);
    Vec1.call($this, null, 0);
    $this.storage.set(other.storage);
    return $this;
  }
  var times = defineInlineFunction('kog.vision.gears.webglmath.times_xf7ncq$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function ($receiver, v) {
      return Vec1_init($receiver * v.storage[0]);
    };
  }));
  var div = defineInlineFunction('kog.vision.gears.webglmath.div_xf7ncq$', wrapFunction(function () {
    var Vec1_init = _.vision.gears.webglmath.Vec1_init_mx4ult$;
    return function ($receiver, v) {
      return Vec1_init($receiver / v.storage[0]);
    };
  }));
  function Vec1Array(backingStorage, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    VecArray.call(this);
    var tmp$;
    this.storage_7zz3o2$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(startIndex, endIndex) : null) != null ? tmp$ : new Float32Array(startIndex);
  }
  Object.defineProperty(Vec1Array.prototype, 'storage', {
    get: function () {
      return this.storage_7zz3o2$_0;
    }
  });
  Vec1Array.prototype.set_8cqhcw$ = function (values) {
    var tmp$, tmp$_0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = (tmp$_0 = getOrNull(values, i)) != null ? tmp$_0 : 0.0;
    }
    return this;
  };
  Vec1Array.prototype.get_za3lpa$ = function (i) {
    return new Vec1(this.storage, i);
  };
  Vec1Array.prototype.subarray_vux9f0$ = function (begin, end) {
    return new Vec1Array(this.storage, begin, end);
  };
  Vec1Array.prototype.setDot_vxbbho$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 2 | 0] * c.storage[i * 2 | 0] + b.storage[(i * 2 | 0) + 1 | 0] * c.storage[(i * 2 | 0) + 1 | 0];
    }
  };
  Vec1Array.prototype.setDot_h50moc$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 3 | 0] * c.storage[i * 3 | 0] + b.storage[(i * 3 | 0) + 1 | 0] * c.storage[(i * 3 | 0) + 1 | 0] + b.storage[(i * 3 | 0) + 2 | 0] * c.storage[(i * 3 | 0) + 2 | 0];
    }
  };
  Vec1Array.prototype.setDot_2cpxv0$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 4 | 0] * c.storage[i * 4 | 0] + b.storage[(i * 4 | 0) + 1 | 0] * c.storage[(i * 4 | 0) + 1 | 0] + b.storage[(i * 4 | 0) + 2 | 0] * c.storage[(i * 4 | 0) + 2 | 0] + b.storage[(i * 4 | 0) + 3 | 0] * c.storage[(i * 4 | 0) + 3 | 0];
    }
  };
  Vec1Array.prototype.setDot_tcetn7$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 2 | 0] * c.storage[0] + b.storage[(i * 2 | 0) + 1 | 0] * c.storage[1];
    }
  };
  Vec1Array.prototype.setDot_cduyyb$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 3 | 0] * c.storage[0] + b.storage[(i * 3 | 0) + 1 | 0] * c.storage[1] + b.storage[(i * 3 | 0) + 2 | 0] * c.storage[2];
    }
  };
  Vec1Array.prototype.setDot_4kovql$ = function (b, c) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = b.storage[i * 4 | 0] * c.storage[0] + b.storage[(i * 4 | 0) + 1 | 0] * c.storage[1] + b.storage[(i * 4 | 0) + 2 | 0] * c.storage[2] + b.storage[(i * 4 | 0) + 3 | 0] * c.storage[3];
    }
  };
  Vec1Array.prototype.setLength_t0dnmq$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_0 = this.storage;
      var x = b.storage[i * 2 | 0] * b.storage[i * 2 | 0] + b.storage[(i * 2 | 0) + 1 | 0] * b.storage[(i * 2 | 0) + 1 | 0];
      tmp$_0[i] = Math_0.sqrt(x);
    }
  };
  Vec1Array.prototype.setLength_sjc18j$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_0 = this.storage;
      var x = b.storage[i * 3 | 0] * b.storage[i * 3 | 0] + b.storage[(i * 3 | 0) + 1 | 0] * b.storage[(i * 3 | 0) + 1 | 0] + b.storage[(i * 3 | 0) + 2 | 0] * b.storage[(i * 3 | 0) + 2 | 0];
      tmp$_0[i] = Math_0.sqrt(x);
    }
  };
  Vec1Array.prototype.setLength_s2aeuc$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_0 = this.storage;
      var x = b.storage[i * 4 | 0] * b.storage[i * 4 | 0] + b.storage[(i * 4 | 0) + 1 | 0] * b.storage[(i * 4 | 0) + 1 | 0] + b.storage[(i * 4 | 0) + 2 | 0] * b.storage[(i * 4 | 0) + 2 | 0] + b.storage[(i * 4 | 0) + 3 | 0] * b.storage[(i * 4 | 0) + 3 | 0];
      tmp$_0[i] = Math_0.sqrt(x);
    }
  };
  Vec1Array.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec1Array.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec1Array.prototype.setValue_obn7z5$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec1Array.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.storage);
  };
  Vec1Array.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec1Array',
    interfaces: [VecArray]
  };
  function Vec1Array_init(size, $this) {
    $this = $this || Object.create(Vec1Array.prototype);
    Vec1Array.call($this, null, size, size);
    return $this;
  }
  function Vec2(backingStorage, offset) {
    Vec2$Companion_getInstance();
    if (offset === void 0)
      offset = 0;
    var tmp$;
    this.storage_ggfb1u$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(offset, offset + 2 | 0) : null) != null ? tmp$ : new Float32Array(2);
  }
  Object.defineProperty(Vec2.prototype, 'storage', {
    get: function () {
      return this.storage_ggfb1u$_0;
    }
  });
  Object.defineProperty(Vec2.prototype, 'x', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec2.get_x', function () {
      return this.storage[0];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec2.set_x_mx4ult$', function (value) {
      this.storage[0] = value;
    })
  });
  Object.defineProperty(Vec2.prototype, 'y', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec2.get_y', function () {
      return this.storage[1];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec2.set_y_mx4ult$', function (value) {
      this.storage[1] = value;
    })
  });
  Object.defineProperty(Vec2.prototype, 'xy0', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec2.get_xy0', wrapFunction(function () {
      var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
      return function () {
        return Vec3_init(this.storage[0], this.storage[1], 0.0);
      };
    }))
  });
  Object.defineProperty(Vec2.prototype, 'xy00', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec2.get_xy00', wrapFunction(function () {
      var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
      return function () {
        return Vec4_init(this.storage[0], this.storage[1], 0.0, 0.0);
      };
    }))
  });
  Object.defineProperty(Vec2.prototype, 'xy01', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec2.get_xy01', wrapFunction(function () {
      var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
      return function () {
        return Vec4_init(this.storage[0], this.storage[1], 0.0, 1.0);
      };
    }))
  });
  Vec2.prototype.clone = defineInlineFunction('kog.vision.gears.webglmath.Vec2.clone', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_wobp51$;
    return function () {
      return Vec2_init(this);
    };
  }));
  Vec2.prototype.set_8cqhcw$ = function (values) {
    this.storage[0] = 0 >= 0 && 0 <= get_lastIndex(values) ? values[0] : 0.0;
    this.storage[1] = 1 >= 0 && 1 <= get_lastIndex(values) ? values[1] : 0.0;
    return this;
  };
  function Vec2$Companion() {
    Vec2$Companion_instance = this;
    this.zeros = Vec2_init();
    this.ones = Vec2_init(1.0, 1.0);
  }
  Vec2$Companion.prototype.makeRandom_wnjnpm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.Companion.makeRandom_wnjnpm$', wrapFunction(function () {
    var Vec2 = _.vision.gears.webglmath.Vec2;
    var Random = Kotlin.kotlin.random.Random;
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec2.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec2.Companion.ones;
      return Vec2_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1]);
    };
  }));
  Vec2$Companion.prototype.makeRandom_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.Companion.makeRandom_dleff0$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec2_init(minVal, minVal);
      var maxVal_0 = Vec2_init(maxVal, maxVal);
      return Vec2_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1]);
    };
  }));
  Vec2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec2$Companion_instance = null;
  function Vec2$Companion_getInstance() {
    if (Vec2$Companion_instance === null) {
      new Vec2$Companion();
    }return Vec2$Companion_instance;
  }
  Vec2.prototype.randomize_wnjnpm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.randomize_wnjnpm$', wrapFunction(function () {
    var Vec2 = _.vision.gears.webglmath.Vec2;
    var Random = Kotlin.kotlin.random.Random;
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec2.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec2.Companion.ones;
      this.set_qp9vav$(Vec2_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1]));
    };
  }));
  Vec2.prototype.randomize_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.randomize_dleff0$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec2_init(minVal, minVal);
      var maxVal_0 = Vec2_init(maxVal, maxVal);
      this.set_qp9vav$(Vec2_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1]));
    };
  }));
  Vec2.prototype.clamp_wnjnpm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.clamp_wnjnpm$', wrapFunction(function () {
    var Vec2 = _.vision.gears.webglmath.Vec2;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec2.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec2.Companion.ones;
      if (this.storage[0] < minVal.storage[0]) {
        this.storage[0] = minVal.storage[0];
      }if (this.storage[1] < minVal.storage[1]) {
        this.storage[1] = minVal.storage[1];
      }if (this.storage[0] > maxVal.storage[0]) {
        this.storage[0] = maxVal.storage[0];
      }if (this.storage[1] > maxVal.storage[1]) {
        this.storage[1] = maxVal.storage[1];
      }return this;
    };
  }));
  Vec2.prototype.unaryPlus = defineInlineFunction('kog.vision.gears.webglmath.Vec2.unaryPlus', function () {
    return this;
  });
  Vec2.prototype.unaryMinus = defineInlineFunction('kog.vision.gears.webglmath.Vec2.unaryMinus', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function () {
      return Vec2_init(-this.storage[0], -this.storage[1]);
    };
  }));
  Vec2.prototype.times_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.times_mx4ult$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (scalar) {
      return Vec2_init(this.storage[0] * scalar, this.storage[1] * scalar);
    };
  }));
  Vec2.prototype.div_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.div_mx4ult$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (scalar) {
      return Vec2_init(this.storage[0] / scalar, this.storage[1] / scalar);
    };
  }));
  Vec2.prototype.timesAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.timesAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] * scalar;
    this.storage[1] = this.storage[1] * scalar;
  });
  Vec2.prototype.divAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.divAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] / scalar;
    this.storage[1] = this.storage[1] / scalar;
  });
  Vec2.prototype.plusAssign_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.plusAssign_wobp51$', function (other) {
    this.storage[0] = this.storage[0] + other.storage[0];
    this.storage[1] = this.storage[1] + other.storage[1];
  });
  Vec2.prototype.plus_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.plus_wobp51$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (other) {
      return Vec2_init(this.storage[0] + other.storage[0], this.storage[1] + other.storage[1]);
    };
  }));
  Vec2.prototype.minusAssign_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.minusAssign_wobp51$', function (other) {
    this.storage[0] = this.storage[0] - other.storage[0];
    this.storage[1] = this.storage[1] - other.storage[1];
  });
  Vec2.prototype.minus_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.minus_wobp51$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (other) {
      return Vec2_init(this.storage[0] - other.storage[0], this.storage[1] - other.storage[1]);
    };
  }));
  Vec2.prototype.timesAssign_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.timesAssign_wobp51$', function (other) {
    this.storage[0] = this.storage[0] * other.storage[0];
    this.storage[1] = this.storage[1] * other.storage[1];
  });
  Vec2.prototype.times_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.times_wobp51$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (other) {
      return Vec2_init(this.storage[0] * other.storage[0], this.storage[1] * other.storage[1]);
    };
  }));
  Vec2.prototype.divAssign_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.divAssign_wobp51$', function (other) {
    this.storage[0] = this.storage[0] / other.storage[0];
    this.storage[1] = this.storage[1] / other.storage[1];
  });
  Vec2.prototype.div_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.div_wobp51$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function (other) {
      return Vec2_init(this.storage[0] / other.storage[0], this.storage[1] / other.storage[1]);
    };
  }));
  Vec2.prototype.lengthSquared = defineInlineFunction('kog.vision.gears.webglmath.Vec2.lengthSquared', function () {
    return this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1];
  });
  Vec2.prototype.length = defineInlineFunction('kog.vision.gears.webglmath.Vec2.length', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1];
      return Math_0.sqrt(x);
    };
  }));
  Vec2.prototype.normalize = defineInlineFunction('kog.vision.gears.webglmath.Vec2.normalize', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1];
      var l = Math_0.sqrt(x);
      this.storage[0] = this.storage[0] / l;
      this.storage[1] = this.storage[1] / l;
      return this;
    };
  }));
  Vec2.prototype.dot_wobp51$ = defineInlineFunction('kog.vision.gears.webglmath.Vec2.dot_wobp51$', function (other) {
    return this.storage[0] * other.storage[0] + this.storage[1] * other.storage[1];
  });
  Vec2.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec2.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec2.prototype.setValue_due4tj$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec2.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform2fv(uniformLocation, this.storage);
  };
  Vec2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2',
    interfaces: [UniformFloat]
  };
  function Vec2_init(u, v, $this) {
    if (u === void 0)
      u = 0.0;
    if (v === void 0)
      v = 0.0;
    $this = $this || Object.create(Vec2.prototype);
    Vec2.call($this, null, 0);
    $this.storage[0] = u;
    $this.storage[1] = v;
    return $this;
  }
  function Vec2_init_0(other, v, $this) {
    if (v === void 0)
      v = 0.0;
    $this = $this || Object.create(Vec2.prototype);
    Vec2_init(other.storage[0], v, $this);
    return $this;
  }
  function Vec2_init_1(other, $this) {
    $this = $this || Object.create(Vec2.prototype);
    Vec2.call($this, null, 0);
    $this.storage.set(other.storage);
    return $this;
  }
  var times_0 = defineInlineFunction('kog.vision.gears.webglmath.times_xf7ncr$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function ($receiver, v) {
      return Vec2_init($receiver * v.storage[0], $receiver * v.storage[1]);
    };
  }));
  var div_0 = defineInlineFunction('kog.vision.gears.webglmath.div_xf7ncr$', wrapFunction(function () {
    var Vec2_init = _.vision.gears.webglmath.Vec2_init_dleff0$;
    return function ($receiver, v) {
      return Vec2_init($receiver / v.storage[0], $receiver / v.storage[1]);
    };
  }));
  function Vec2Array(backingStorage, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    VecArray.call(this);
    var tmp$;
    this.storage_gxkyr3$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(startIndex * 2 | 0, endIndex * 2 | 0) : null) != null ? tmp$ : new Float32Array(startIndex * 2 | 0);
  }
  Object.defineProperty(Vec2Array.prototype, 'storage', {
    get: function () {
      return this.storage_gxkyr3$_0;
    }
  });
  Vec2Array.prototype.set_8cqhcw$ = function (values) {
    var tmp$, tmp$_0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = (tmp$_0 = getOrNull(values, i % 2)) != null ? tmp$_0 : 0.0;
    }
    return this;
  };
  Vec2Array.prototype.get_za3lpa$ = function (i) {
    return new Vec2(this.storage, i * 2 | 0);
  };
  Vec2Array.prototype.subarray_vux9f0$ = function (begin, end) {
    return new Vec2Array(this.storage, begin * 2 | 0, end * 2 | 0);
  };
  Vec2Array.prototype.setNormalized_t0dnmq$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 2) {
      var l2 = b.storage[i] * b.storage[i] + b.storage[i + 1 | 0] * b.storage[i + 1 | 0];
      var linv = 1 / Math_0.sqrt(l2);
      this.storage[i] = b.storage[i] * linv;
      this.storage[i + 1 | 0] = b.storage[i + 1 | 0] * linv;
    }
  };
  Vec2Array.prototype.setAffineTransformed_tckn31$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 2) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1] + m.storage[3];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5] + m.storage[7];
    }
  };
  Vec2Array.prototype.setAffineNormalTransformed_tckn31$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 2) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5];
    }
  };
  Vec2Array.prototype.setCosSin_thfa0x$ = function (alphas) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 2) {
      var tmp$_0 = this.storage;
      var tmp$_1 = i + 0 | 0;
      var x = alphas.storage[i / 2 | 0];
      tmp$_0[tmp$_1] = Math_0.cos(x);
      var tmp$_2 = this.storage;
      var tmp$_3 = i + 1 | 0;
      var x_0 = alphas.storage[i / 2 | 0];
      tmp$_2[tmp$_3] = Math_0.sin(x_0);
    }
  };
  Vec2Array.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec2Array.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec2Array.prototype.setValue_osoudc$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec2Array.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.storage);
  };
  Vec2Array.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec2Array',
    interfaces: [VecArray]
  };
  function Vec2Array_init(size, $this) {
    $this = $this || Object.create(Vec2Array.prototype);
    Vec2Array.call($this, null, size, size);
    return $this;
  }
  function Vec3(backingStorage, offset) {
    Vec3$Companion_getInstance();
    if (offset === void 0)
      offset = 0;
    var tmp$;
    this.storage_d7fc9d$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(offset, offset + 3 | 0) : null) != null ? tmp$ : new Float32Array(3);
  }
  Object.defineProperty(Vec3.prototype, 'storage', {
    get: function () {
      return this.storage_d7fc9d$_0;
    }
  });
  Object.defineProperty(Vec3.prototype, 'x', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_x', function () {
      return this.storage[0];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec3.set_x_mx4ult$', function (value) {
      this.storage[0] = value;
    })
  });
  Object.defineProperty(Vec3.prototype, 'y', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_y', function () {
      return this.storage[1];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec3.set_y_mx4ult$', function (value) {
      this.storage[1] = value;
    })
  });
  Object.defineProperty(Vec3.prototype, 'z', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_z', function () {
      return this.storage[2];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec3.set_z_mx4ult$', function (value) {
      this.storage[2] = value;
    })
  });
  Object.defineProperty(Vec3.prototype, 'xy', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_xy', wrapFunction(function () {
      var Vec2_init = _.vision.gears.webglmath.Vec2;
      return function () {
        return new Vec2_init(this.storage);
      };
    })),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec3.set_xy_wobp51$', wrapFunction(function () {
      var Vec2_init = _.vision.gears.webglmath.Vec2;
      return function (value) {
        (new Vec2_init(this.storage)).set_qp9vav$(value);
      };
    }))
  });
  Object.defineProperty(Vec3.prototype, 'xyz0', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_xyz0', wrapFunction(function () {
      var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
      return function () {
        return Vec4_init(this.storage[0], this.storage[1], this.storage[2], 0.0);
      };
    }))
  });
  Object.defineProperty(Vec3.prototype, 'xyz1', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec3.get_xyz1', wrapFunction(function () {
      var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
      return function () {
        return Vec4_init(this.storage[0], this.storage[1], this.storage[2], 1.0);
      };
    }))
  });
  Vec3.prototype.clone = defineInlineFunction('kog.vision.gears.webglmath.Vec3.clone', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_wobp50$;
    return function () {
      return Vec3_init(this);
    };
  }));
  Vec3.prototype.set_8cqhcw$ = function (values) {
    this.storage[0] = 0 >= 0 && 0 <= get_lastIndex(values) ? values[0] : 0.0;
    this.storage[1] = 1 >= 0 && 1 <= get_lastIndex(values) ? values[1] : 0.0;
    this.storage[2] = 2 >= 0 && 2 <= get_lastIndex(values) ? values[2] : 0.0;
    return this;
  };
  function Vec3$Companion() {
    Vec3$Companion_instance = this;
    this.zeros = Vec3_init();
    this.ones = Vec3_init(1.0, 1.0, 1.0);
  }
  Vec3$Companion.prototype.makeRandom_qwwtkk$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.Companion.makeRandom_qwwtkk$', wrapFunction(function () {
    var Vec3 = _.vision.gears.webglmath.Vec3;
    var Random = Kotlin.kotlin.random.Random;
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec3.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec3.Companion.ones;
      return Vec3_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1], Random.Default.nextFloat() * (maxVal.storage[2] - minVal.storage[2]) + minVal.storage[2]);
    };
  }));
  Vec3$Companion.prototype.makeRandom_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.Companion.makeRandom_dleff0$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec3_init(minVal, minVal, minVal);
      var maxVal_0 = Vec3_init(maxVal, maxVal, maxVal);
      return Vec3_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1], Random.Default.nextFloat() * (maxVal_0.storage[2] - minVal_0.storage[2]) + minVal_0.storage[2]);
    };
  }));
  Vec3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec3$Companion_instance = null;
  function Vec3$Companion_getInstance() {
    if (Vec3$Companion_instance === null) {
      new Vec3$Companion();
    }return Vec3$Companion_instance;
  }
  Vec3.prototype.randomize_qwwtkk$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.randomize_qwwtkk$', wrapFunction(function () {
    var Vec3 = _.vision.gears.webglmath.Vec3;
    var Random = Kotlin.kotlin.random.Random;
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec3.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec3.Companion.ones;
      this.set_qp9vav$(Vec3_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1], Random.Default.nextFloat() * (maxVal.storage[2] - minVal.storage[2]) + minVal.storage[2]));
    };
  }));
  Vec3.prototype.randomize_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.randomize_dleff0$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec3_init(minVal, minVal, minVal);
      var maxVal_0 = Vec3_init(maxVal, maxVal, maxVal);
      this.set_qp9vav$(Vec3_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1], Random.Default.nextFloat() * (maxVal_0.storage[2] - minVal_0.storage[2]) + minVal_0.storage[2]));
    };
  }));
  Vec3.prototype.clamp_qwwtkk$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.clamp_qwwtkk$', wrapFunction(function () {
    var Vec3 = _.vision.gears.webglmath.Vec3;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec3.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec3.Companion.ones;
      if (this.storage[0] < minVal.storage[0]) {
        this.storage[0] = minVal.storage[0];
      }if (this.storage[1] < minVal.storage[1]) {
        this.storage[1] = minVal.storage[1];
      }if (this.storage[2] < minVal.storage[2]) {
        this.storage[2] = minVal.storage[2];
      }if (this.storage[0] > maxVal.storage[0]) {
        this.storage[0] = maxVal.storage[0];
      }if (this.storage[1] > maxVal.storage[1]) {
        this.storage[1] = maxVal.storage[1];
      }if (this.storage[2] > maxVal.storage[2]) {
        this.storage[2] = maxVal.storage[2];
      }return this;
    };
  }));
  Vec3.prototype.unaryPlus = defineInlineFunction('kog.vision.gears.webglmath.Vec3.unaryPlus', function () {
    return this;
  });
  Vec3.prototype.unaryMinus = defineInlineFunction('kog.vision.gears.webglmath.Vec3.unaryMinus', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function () {
      return Vec3_init(-this.storage[0], -this.storage[1], -this.storage[2]);
    };
  }));
  Vec3.prototype.times_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.times_mx4ult$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (scalar) {
      return Vec3_init(this.storage[0] * scalar, this.storage[1] * scalar, this.storage[2] * scalar);
    };
  }));
  Vec3.prototype.div_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.div_mx4ult$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (scalar) {
      return Vec3_init(this.storage[0] / scalar, this.storage[1] / scalar, this.storage[2] / scalar);
    };
  }));
  Vec3.prototype.timesAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.timesAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] * scalar;
    this.storage[1] = this.storage[1] * scalar;
    this.storage[2] = this.storage[2] * scalar;
  });
  Vec3.prototype.divAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.divAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] / scalar;
    this.storage[1] = this.storage[1] / scalar;
    this.storage[2] = this.storage[2] / scalar;
  });
  Vec3.prototype.plusAssign_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.plusAssign_wobp50$', function (other) {
    this.storage[0] = this.storage[0] + other.storage[0];
    this.storage[1] = this.storage[1] + other.storage[1];
    this.storage[2] = this.storage[2] + other.storage[2];
  });
  Vec3.prototype.plus_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.plus_wobp50$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (other) {
      return Vec3_init(this.storage[0] + other.storage[0], this.storage[1] + other.storage[1], this.storage[2] + other.storage[2]);
    };
  }));
  Vec3.prototype.minusAssign_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.minusAssign_wobp50$', function (other) {
    this.storage[0] = this.storage[0] - other.storage[0];
    this.storage[1] = this.storage[1] - other.storage[1];
    this.storage[2] = this.storage[2] - other.storage[2];
  });
  Vec3.prototype.minus_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.minus_wobp50$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (other) {
      return Vec3_init(this.storage[0] - other.storage[0], this.storage[1] - other.storage[1], this.storage[2] - other.storage[2]);
    };
  }));
  Vec3.prototype.timesAssign_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.timesAssign_wobp50$', function (other) {
    this.storage[0] = this.storage[0] * other.storage[0];
    this.storage[1] = this.storage[1] * other.storage[1];
    this.storage[2] = this.storage[2] * other.storage[2];
  });
  Vec3.prototype.times_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.times_wobp50$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (other) {
      return Vec3_init(this.storage[0] * other.storage[0], this.storage[1] * other.storage[1], this.storage[2] * other.storage[2]);
    };
  }));
  Vec3.prototype.divAssign_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.divAssign_wobp50$', function (other) {
    this.storage[0] = this.storage[0] / other.storage[0];
    this.storage[1] = this.storage[1] / other.storage[1];
    this.storage[2] = this.storage[2] / other.storage[2];
  });
  Vec3.prototype.div_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.div_wobp50$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (other) {
      return Vec3_init(this.storage[0] / other.storage[0], this.storage[1] / other.storage[1], this.storage[2] / other.storage[2]);
    };
  }));
  Vec3.prototype.lengthSquared = defineInlineFunction('kog.vision.gears.webglmath.Vec3.lengthSquared', function () {
    return this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2];
  });
  Vec3.prototype.length = defineInlineFunction('kog.vision.gears.webglmath.Vec3.length', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2];
      return Math_0.sqrt(x);
    };
  }));
  Vec3.prototype.normalize = defineInlineFunction('kog.vision.gears.webglmath.Vec3.normalize', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2];
      var l = Math_0.sqrt(x);
      this.storage[0] = this.storage[0] / l;
      this.storage[1] = this.storage[1] / l;
      this.storage[2] = this.storage[2] / l;
      return this;
    };
  }));
  Vec3.prototype.dot_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.dot_wobp50$', function (other) {
    return this.storage[0] * other.storage[0] + this.storage[1] * other.storage[1] + this.storage[2] * other.storage[2];
  });
  Vec3.prototype.cross_wobp50$ = defineInlineFunction('kog.vision.gears.webglmath.Vec3.cross_wobp50$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function (other) {
      return Vec3_init(this.storage[1] * other.storage[2] - this.storage[2] * other.storage[1], this.storage[2] * other.storage[0] - this.storage[0] * other.storage[2], this.storage[0] * other.storage[1] - this.storage[1] * other.storage[0]);
    };
  }));
  Vec3.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec3.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec3.prototype.setValue_due4ti$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec3.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.storage);
  };
  Vec3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec3',
    interfaces: [UniformFloat]
  };
  function Vec3_init(u, v, s, $this) {
    if (u === void 0)
      u = 0.0;
    if (v === void 0)
      v = 0.0;
    if (s === void 0)
      s = 0.0;
    $this = $this || Object.create(Vec3.prototype);
    Vec3.call($this, null, 0);
    $this.storage[0] = u;
    $this.storage[1] = v;
    $this.storage[2] = s;
    return $this;
  }
  function Vec3_init_0(other, v, s, $this) {
    if (v === void 0)
      v = 0.0;
    if (s === void 0)
      s = 0.0;
    $this = $this || Object.create(Vec3.prototype);
    Vec3_init(other.storage[0], v, s, $this);
    return $this;
  }
  function Vec3_init_1(other, s, $this) {
    if (s === void 0)
      s = 0.0;
    $this = $this || Object.create(Vec3.prototype);
    Vec3_init(other.storage[0], other.storage[1], s, $this);
    return $this;
  }
  function Vec3_init_2(other, $this) {
    $this = $this || Object.create(Vec3.prototype);
    Vec3.call($this, null, 0);
    $this.storage.set(other.storage);
    return $this;
  }
  function Vec3_init_3(other, $this) {
    $this = $this || Object.create(Vec3.prototype);
    Vec3_init(other.storage[0] / other.storage[3], other.storage[1] / other.storage[3], other.storage[2] / other.storage[3], $this);
    return $this;
  }
  var times_1 = defineInlineFunction('kog.vision.gears.webglmath.times_xf7ncs$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function ($receiver, v) {
      return Vec3_init(v.storage[0] * $receiver, v.storage[1] * $receiver, v.storage[2] * $receiver);
    };
  }));
  var div_1 = defineInlineFunction('kog.vision.gears.webglmath.div_xf7ncs$', wrapFunction(function () {
    var Vec3_init = _.vision.gears.webglmath.Vec3_init_y2kzbl$;
    return function ($receiver, v) {
      return Vec3_init($receiver / v.storage[0], $receiver / v.storage[1], $receiver / v.storage[2]);
    };
  }));
  function Vec3Array(backingStorage, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    VecArray.call(this);
    var tmp$;
    this.storage_t5z0sw$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(startIndex * 3 | 0, endIndex * 3 | 0) : null) != null ? tmp$ : new Float32Array(startIndex * 3 | 0);
  }
  Object.defineProperty(Vec3Array.prototype, 'storage', {
    get: function () {
      return this.storage_t5z0sw$_0;
    }
  });
  Vec3Array.prototype.set_8cqhcw$ = function (values) {
    var tmp$, tmp$_0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = (tmp$_0 = getOrNull(values, i % 3)) != null ? tmp$_0 : 0.0;
    }
    return this;
  };
  Vec3Array.prototype.get_za3lpa$ = function (i) {
    return new Vec3(this.storage, i * 3 | 0);
  };
  Vec3Array.prototype.subarray_vux9f0$ = function (begin, end) {
    return new Vec3Array(this.storage, begin * 3 | 0, end * 3 | 0);
  };
  Vec3Array.prototype.setNormalized_sjc18j$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 3) {
      var l2 = b.storage[i] * b.storage[i] + b.storage[i + 1 | 0] * b.storage[i + 1 | 0] + b.storage[i + 2 | 0] * b.storage[i + 2 | 0];
      var linv = 1 / Math_0.sqrt(l2);
      this.storage[i] = b.storage[i] * linv;
      this.storage[i + 1 | 0] = b.storage[i + 1 | 0] * linv;
      this.storage[i + 2 | 0] = b.storage[i + 2 | 0] * linv;
    }
  };
  Vec3Array.prototype.setCrossed_h50moc$ = function (b, c) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var j = 0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 3) {
      var b0 = b.storage[j];
      var c0 = c.storage[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0];
      var b1 = b.storage[j];
      var c1 = c.storage[tmp$_1 = j, j = tmp$_1 + 1 | 0, tmp$_1];
      var b2 = b.storage[j];
      var c2 = c.storage[tmp$_2 = j, j = tmp$_2 + 1 | 0, tmp$_2];
      this.storage[i] = b1 * c2 - b2 * c1;
      this.storage[i + 1 | 0] = b2 * c0 - b0 * c2;
      this.storage[i + 2 | 0] = b0 * c1 - b1 * c0;
    }
  };
  Vec3Array.prototype.setAffineTransformed_ce0se6$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 3) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1] + v.storage[i + 2 | 0] * m.storage[2] + m.storage[3];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5] + v.storage[i + 2 | 0] * m.storage[6] + m.storage[7];
      this.storage[i + 2 | 0] = v.storage[i + 0 | 0] * m.storage[8] + v.storage[i + 1 | 0] * m.storage[9] + v.storage[i + 2 | 0] * m.storage[10] + m.storage[11];
    }
  };
  Vec3Array.prototype.setAffineNormalTransformed_ce0se6$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 3) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1] + v.storage[i + 2 | 0] * m.storage[2];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5] + v.storage[i + 2 | 0] * m.storage[6];
      this.storage[i + 2 | 0] = v.storage[i + 0 | 0] * m.storage[8] + v.storage[i + 1 | 0] * m.storage[9] + v.storage[i + 2 | 0] * m.storage[10];
    }
  };
  Vec3Array.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec3Array.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec3Array.prototype.setValue_p9qgrj$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec3Array.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.storage);
  };
  Vec3Array.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec3Array',
    interfaces: [VecArray]
  };
  function Vec3Array_init(size, $this) {
    $this = $this || Object.create(Vec3Array.prototype);
    Vec3Array.call($this, null, size, size);
    return $this;
  }
  function Vec4(backingStorage, offset) {
    Vec4$Companion_getInstance();
    if (offset === void 0)
      offset = 0;
    var tmp$;
    this.storage_9yfdgw$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(offset, offset + 4 | 0) : null) != null ? tmp$ : new Float32Array(4);
  }
  Object.defineProperty(Vec4.prototype, 'storage', {
    get: function () {
      return this.storage_9yfdgw$_0;
    }
  });
  Object.defineProperty(Vec4.prototype, 'x', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_x', function () {
      return this.storage[0];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_x_mx4ult$', function (value) {
      this.storage[0] = value;
    })
  });
  Object.defineProperty(Vec4.prototype, 'y', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_y', function () {
      return this.storage[1];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_y_mx4ult$', function (value) {
      this.storage[1] = value;
    })
  });
  Object.defineProperty(Vec4.prototype, 'z', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_z', function () {
      return this.storage[2];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_z_mx4ult$', function (value) {
      this.storage[2] = value;
    })
  });
  Object.defineProperty(Vec4.prototype, 'w', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_w', function () {
      return this.storage[3];
    }),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_w_mx4ult$', function (value) {
      this.storage[3] = value;
    })
  });
  Object.defineProperty(Vec4.prototype, 'xy', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_xy', wrapFunction(function () {
      var Vec2_init = _.vision.gears.webglmath.Vec2;
      return function () {
        return new Vec2_init(this.storage);
      };
    })),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_xy_wobp51$', wrapFunction(function () {
      var Vec2_init = _.vision.gears.webglmath.Vec2;
      return function (value) {
        (new Vec2_init(this.storage)).set_qp9vav$(value);
      };
    }))
  });
  Object.defineProperty(Vec4.prototype, 'xyz', {
    get: defineInlineFunction('kog.vision.gears.webglmath.Vec4.get_xyz', wrapFunction(function () {
      var Vec3_init = _.vision.gears.webglmath.Vec3;
      return function () {
        return new Vec3_init(this.storage);
      };
    })),
    set: defineInlineFunction('kog.vision.gears.webglmath.Vec4.set_xyz_wobp50$', wrapFunction(function () {
      var Vec3_init = _.vision.gears.webglmath.Vec3;
      return function (value) {
        (new Vec3_init(this.storage)).set_qp9vav$(value);
      };
    }))
  });
  Vec4.prototype.clone = defineInlineFunction('kog.vision.gears.webglmath.Vec4.clone', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_wobp4z$;
    return function () {
      return Vec4_init(this);
    };
  }));
  Vec4.prototype.set_8cqhcw$ = function (values) {
    this.storage[0] = 0 >= 0 && 0 <= get_lastIndex(values) ? values[0] : 0.0;
    this.storage[1] = 1 >= 0 && 1 <= get_lastIndex(values) ? values[1] : 0.0;
    this.storage[2] = 2 >= 0 && 2 <= get_lastIndex(values) ? values[2] : 0.0;
    this.storage[3] = 3 >= 0 && 3 <= get_lastIndex(values) ? values[3] : 1.0;
    return this;
  };
  function Vec4$Companion() {
    Vec4$Companion_instance = this;
    this.zeros = Vec4_init(0.0, 0.0, 0.0, 0.0);
    this.ones = Vec4_init(1.0, 1.0, 1.0, 1.0);
  }
  Vec4$Companion.prototype.makeRandom_fg98vm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.Companion.makeRandom_fg98vm$', wrapFunction(function () {
    var Vec4 = _.vision.gears.webglmath.Vec4;
    var Random = Kotlin.kotlin.random.Random;
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec4.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec4.Companion.ones;
      return Vec4_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1], Random.Default.nextFloat() * (maxVal.storage[2] - minVal.storage[2]) + minVal.storage[2], Random.Default.nextFloat() * (maxVal.storage[3] - minVal.storage[3]) + minVal.storage[3]);
    };
  }));
  Vec4$Companion.prototype.makeRandom_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.Companion.makeRandom_dleff0$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec4_init(minVal, minVal, minVal, minVal);
      var maxVal_0 = Vec4_init(maxVal, maxVal, maxVal, maxVal);
      return Vec4_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1], Random.Default.nextFloat() * (maxVal_0.storage[2] - minVal_0.storage[2]) + minVal_0.storage[2], Random.Default.nextFloat() * (maxVal_0.storage[3] - minVal_0.storage[3]) + minVal_0.storage[3]);
    };
  }));
  Vec4$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vec4$Companion_instance = null;
  function Vec4$Companion_getInstance() {
    if (Vec4$Companion_instance === null) {
      new Vec4$Companion();
    }return Vec4$Companion_instance;
  }
  Vec4.prototype.setRandom_fg98vm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.setRandom_fg98vm$', wrapFunction(function () {
    var Vec4 = _.vision.gears.webglmath.Vec4;
    var Random = Kotlin.kotlin.random.Random;
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec4.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec4.Companion.ones;
      this.set_qp9vav$(Vec4_init(Random.Default.nextFloat() * (maxVal.storage[0] - minVal.storage[0]) + minVal.storage[0], Random.Default.nextFloat() * (maxVal.storage[1] - minVal.storage[1]) + minVal.storage[1], Random.Default.nextFloat() * (maxVal.storage[2] - minVal.storage[2]) + minVal.storage[2], Random.Default.nextFloat() * (maxVal.storage[3] - minVal.storage[3]) + minVal.storage[3]));
    };
  }));
  Vec4.prototype.setRandom_dleff0$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.setRandom_dleff0$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    var Random = Kotlin.kotlin.random.Random;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = 0.0;
      if (maxVal === void 0)
        maxVal = 1.0;
      var minVal_0 = Vec4_init(minVal, minVal, minVal, minVal);
      var maxVal_0 = Vec4_init(maxVal, maxVal, maxVal, minVal);
      this.set_qp9vav$(Vec4_init(Random.Default.nextFloat() * (maxVal_0.storage[0] - minVal_0.storage[0]) + minVal_0.storage[0], Random.Default.nextFloat() * (maxVal_0.storage[1] - minVal_0.storage[1]) + minVal_0.storage[1], Random.Default.nextFloat() * (maxVal_0.storage[2] - minVal_0.storage[2]) + minVal_0.storage[2], Random.Default.nextFloat() * (maxVal_0.storage[3] - minVal_0.storage[3]) + minVal_0.storage[3]));
    };
  }));
  Vec4.prototype.clamp_fg98vm$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.clamp_fg98vm$', wrapFunction(function () {
    var Vec4 = _.vision.gears.webglmath.Vec4;
    return function (minVal, maxVal) {
      if (minVal === void 0)
        minVal = Vec4.Companion.zeros;
      if (maxVal === void 0)
        maxVal = Vec4.Companion.ones;
      if (this.storage[0] < minVal.storage[0]) {
        this.storage[0] = minVal.storage[0];
      }if (this.storage[1] < minVal.storage[1]) {
        this.storage[1] = minVal.storage[1];
      }if (this.storage[2] < minVal.storage[2]) {
        this.storage[2] = minVal.storage[2];
      }if (this.storage[3] < minVal.storage[3]) {
        this.storage[3] = minVal.storage[3];
      }if (this.storage[0] > maxVal.storage[0]) {
        this.storage[0] = maxVal.storage[0];
      }if (this.storage[1] > maxVal.storage[1]) {
        this.storage[1] = maxVal.storage[1];
      }if (this.storage[2] > maxVal.storage[2]) {
        this.storage[2] = maxVal.storage[2];
      }if (this.storage[3] > maxVal.storage[3]) {
        this.storage[3] = maxVal.storage[3];
      }return this;
    };
  }));
  Vec4.prototype.unaryPlus = defineInlineFunction('kog.vision.gears.webglmath.Vec4.unaryPlus', function () {
    return this;
  });
  Vec4.prototype.unaryMinus = defineInlineFunction('kog.vision.gears.webglmath.Vec4.unaryMinus', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function () {
      return Vec4_init(-this.storage[0], -this.storage[1], -this.storage[2], -this.storage[3]);
    };
  }));
  Vec4.prototype.times_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.times_mx4ult$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (scalar) {
      return Vec4_init(this.storage[0] * scalar, this.storage[1] * scalar, this.storage[2] * scalar, this.storage[3] * scalar);
    };
  }));
  Vec4.prototype.div_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.div_mx4ult$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (scalar) {
      return Vec4_init(this.storage[0] / scalar, this.storage[1] / scalar, this.storage[2] / scalar, this.storage[3] / scalar);
    };
  }));
  Vec4.prototype.timesAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.timesAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] * scalar;
    this.storage[1] = this.storage[1] * scalar;
    this.storage[2] = this.storage[2] * scalar;
    this.storage[3] = this.storage[3] * scalar;
  });
  Vec4.prototype.divAssign_mx4ult$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.divAssign_mx4ult$', function (scalar) {
    this.storage[0] = this.storage[0] / scalar;
    this.storage[1] = this.storage[1] / scalar;
    this.storage[2] = this.storage[2] / scalar;
    this.storage[3] = this.storage[3] / scalar;
  });
  Vec4.prototype.plusAssign_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.plusAssign_wobp4z$', function (other) {
    this.storage[0] = this.storage[0] + other.storage[0];
    this.storage[1] = this.storage[1] + other.storage[1];
    this.storage[2] = this.storage[2] + other.storage[2];
    this.storage[3] = this.storage[3] + other.storage[3];
  });
  Vec4.prototype.plus_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.plus_wobp4z$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (other) {
      return Vec4_init(this.storage[0] + other.storage[0], this.storage[1] + other.storage[1], this.storage[2] + other.storage[2], this.storage[3] + other.storage[3]);
    };
  }));
  Vec4.prototype.minusAssign_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.minusAssign_wobp4z$', function (other) {
    this.storage[0] = this.storage[0] - other.storage[0];
    this.storage[1] = this.storage[1] - other.storage[1];
    this.storage[2] = this.storage[2] - other.storage[2];
    this.storage[3] = this.storage[3] - other.storage[3];
  });
  Vec4.prototype.minus_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.minus_wobp4z$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (other) {
      return Vec4_init(this.storage[0] - other.storage[0], this.storage[1] - other.storage[1], this.storage[2] - other.storage[2], this.storage[3] - other.storage[3]);
    };
  }));
  Vec4.prototype.timesAssign_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.timesAssign_wobp4z$', function (other) {
    this.storage[0] = this.storage[0] * other.storage[0];
    this.storage[1] = this.storage[1] * other.storage[1];
    this.storage[2] = this.storage[2] * other.storage[2];
    this.storage[3] = this.storage[3] * other.storage[3];
  });
  Vec4.prototype.times_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.times_wobp4z$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (other) {
      return Vec4_init(this.storage[0] * other.storage[0], this.storage[1] * other.storage[1], this.storage[2] * other.storage[2], this.storage[3] * other.storage[3]);
    };
  }));
  Vec4.prototype.divAssign_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.divAssign_wobp4z$', function (other) {
    this.storage[0] = this.storage[0] / other.storage[0];
    this.storage[1] = this.storage[1] / other.storage[1];
    this.storage[2] = this.storage[2] / other.storage[2];
    this.storage[3] = this.storage[3] / other.storage[3];
  });
  Vec4.prototype.div_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.div_wobp4z$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function (other) {
      return Vec4_init(this.storage[0] / other.storage[0], this.storage[1] / other.storage[1], this.storage[2] / other.storage[2], this.storage[3] / other.storage[3]);
    };
  }));
  Vec4.prototype.lengthSquared = defineInlineFunction('kog.vision.gears.webglmath.Vec4.lengthSquared', function () {
    return this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2] + this.storage[3] * this.storage[3];
  });
  Vec4.prototype.length = defineInlineFunction('kog.vision.gears.webglmath.Vec4.length', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2] + this.storage[3] * this.storage[3];
      return Math_0.sqrt(x);
    };
  }));
  Vec4.prototype.normalize = defineInlineFunction('kog.vision.gears.webglmath.Vec4.normalize', wrapFunction(function () {
    var Math_0 = Math;
    return function () {
      var x = this.storage[0] * this.storage[0] + this.storage[1] * this.storage[1] + this.storage[2] * this.storage[2] + this.storage[3] * this.storage[3];
      var l = Math_0.sqrt(x);
      this.storage[0] = this.storage[0] / l;
      this.storage[1] = this.storage[1] / l;
      this.storage[2] = this.storage[2] / l;
      this.storage[3] = this.storage[3] / l;
      return this;
    };
  }));
  Vec4.prototype.dot_wobp4z$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.dot_wobp4z$', function (other) {
    return this.storage[0] * other.storage[0] + this.storage[1] * other.storage[1] + this.storage[2] * other.storage[2] + this.storage[3] * other.storage[3];
  });
  Vec4.prototype.timesAssign_wohikv$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.timesAssign_wohikv$', wrapFunction(function () {
    var Float32Array_init = Float32Array;
    return function (m) {
      var t = new Float32Array_init(this.storage);
      this.storage[0] = m.storage[0] * t[0] + m.storage[1] * t[1] + m.storage[2] * t[2] + m.storage[3] * t[3];
      this.storage[1] = m.storage[4] * t[0] + m.storage[5] * t[1] + m.storage[6] * t[2] + m.storage[7] * t[3];
      this.storage[2] = m.storage[8] * t[0] + m.storage[9] * t[1] + m.storage[10] * t[2] + m.storage[11] * t[3];
      this.storage[3] = m.storage[12] * t[0] + m.storage[13] * t[1] + m.storage[14] * t[2] + m.storage[15] * t[3];
    };
  }));
  Vec4.prototype.times_wohikv$ = defineInlineFunction('kog.vision.gears.webglmath.Vec4.times_wohikv$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_wobp4z$;
    return function (m) {
      var vp = Vec4_init(this);
      vp.storage[0] = m.storage[0] * this.storage[0] + m.storage[1] * this.storage[1] + m.storage[2] * this.storage[2] + m.storage[3] * this.storage[3];
      vp.storage[1] = m.storage[4] * this.storage[0] + m.storage[5] * this.storage[1] + m.storage[6] * this.storage[2] + m.storage[7] * this.storage[3];
      vp.storage[2] = m.storage[8] * this.storage[0] + m.storage[9] * this.storage[1] + m.storage[10] * this.storage[2] + m.storage[11] * this.storage[3];
      vp.storage[3] = m.storage[12] * this.storage[0] + m.storage[13] * this.storage[1] + m.storage[14] * this.storage[2] + m.storage[15] * this.storage[3];
      return vp;
    };
  }));
  Vec4.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec4.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec4.prototype.setValue_due4th$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec4.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.storage);
  };
  Vec4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec4',
    interfaces: [UniformFloat]
  };
  function Vec4_init(u, v, s, t, $this) {
    if (u === void 0)
      u = 0.0;
    if (v === void 0)
      v = 0.0;
    if (s === void 0)
      s = 0.0;
    if (t === void 0)
      t = 1.0;
    $this = $this || Object.create(Vec4.prototype);
    Vec4.call($this, null, 0);
    $this.storage[0] = u;
    $this.storage[1] = v;
    $this.storage[2] = s;
    $this.storage[3] = t;
    return $this;
  }
  function Vec4_init_0(other, v, s, w, $this) {
    if (v === void 0)
      v = 0.0;
    if (s === void 0)
      s = 0.0;
    if (w === void 0)
      w = 1.0;
    $this = $this || Object.create(Vec4.prototype);
    Vec4_init(other.storage[0], v, s, w, $this);
    return $this;
  }
  function Vec4_init_1(other, s, w, $this) {
    if (s === void 0)
      s = 0.0;
    if (w === void 0)
      w = 1.0;
    $this = $this || Object.create(Vec4.prototype);
    Vec4_init(other.storage[0], other.storage[1], s, w, $this);
    return $this;
  }
  function Vec4_init_2(other, w, $this) {
    if (w === void 0)
      w = 1.0;
    $this = $this || Object.create(Vec4.prototype);
    Vec4_init(other.storage[0], other.storage[1], other.storage[2], w, $this);
    return $this;
  }
  function Vec4_init_3(other, $this) {
    $this = $this || Object.create(Vec4.prototype);
    Vec4.call($this, null, 0);
    $this.storage.set(other.storage);
    return $this;
  }
  var times_2 = defineInlineFunction('kog.vision.gears.webglmath.times_xf7nct$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function ($receiver, v) {
      return Vec4_init($receiver * v.storage[0], $receiver * v.storage[1], $receiver * v.storage[2], $receiver * v.storage[3]);
    };
  }));
  var div_2 = defineInlineFunction('kog.vision.gears.webglmath.div_xf7nct$', wrapFunction(function () {
    var Vec4_init = _.vision.gears.webglmath.Vec4_init_7b5o5w$;
    return function ($receiver, v) {
      return Vec4_init($receiver / v.storage[0], $receiver / v.storage[1], $receiver / v.storage[2], $receiver / v.storage[3]);
    };
  }));
  function Vec4Array(backingStorage, startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    VecArray.call(this);
    var tmp$;
    this.storage_48eydr$_0 = (tmp$ = backingStorage != null ? backingStorage.subarray(startIndex * 4 | 0, endIndex * 4 | 0) : null) != null ? tmp$ : new Float32Array(startIndex * 4 | 0);
  }
  Object.defineProperty(Vec4Array.prototype, 'storage', {
    get: function () {
      return this.storage_48eydr$_0;
    }
  });
  Vec4Array.prototype.set_8cqhcw$ = function (values) {
    var tmp$, tmp$_0;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = (tmp$_0 = getOrNull(values, i % 4)) != null ? tmp$_0 : i % 4 === 3 ? 1.0 : 0.0;
    }
    return this;
  };
  Vec4Array.prototype.get_za3lpa$ = function (i) {
    return new Vec4(this.storage, i * 4 | 0);
  };
  Vec4Array.prototype.subarray_vux9f0$ = function (begin, end) {
    return new Vec4Array(this.storage, begin * 4 | 0, end * 4 | 0);
  };
  Vec4Array.prototype.setNormalized_s2aeuc$ = function (b) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 4) {
      var l2 = b.storage[i] * b.storage[i] + b.storage[i + 1 | 0] * b.storage[i + 1 | 0] + b.storage[i + 2 | 0] * b.storage[i + 2 | 0] + b.storage[i + 3 | 0] * b.storage[i + 3 | 0];
      var linv = 1 / Math_0.sqrt(l2);
      this.storage[i] = b.storage[i] * linv;
      this.storage[i + 1 | 0] = b.storage[i + 1 | 0] * linv;
      this.storage[i + 2 | 0] = b.storage[i + 2 | 0] * linv;
      this.storage[i + 3 | 0] = b.storage[i + 3 | 0] * linv;
    }
  };
  Vec4Array.prototype.setTransformed_4kj2ap$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 4) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1] + v.storage[i + 2 | 0] * m.storage[2] + v.storage[i + 3 | 0] * m.storage[3];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5] + v.storage[i + 2 | 0] * m.storage[6] + v.storage[i + 3 | 0] * m.storage[7];
      this.storage[i + 2 | 0] = v.storage[i + 0 | 0] * m.storage[8] + v.storage[i + 1 | 0] * m.storage[9] + v.storage[i + 2 | 0] * m.storage[10] + v.storage[i + 3 | 0] * m.storage[11];
      this.storage[i + 3 | 0] = v.storage[i + 0 | 0] * m.storage[12] + v.storage[i + 1 | 0] * m.storage[13] + v.storage[i + 2 | 0] * m.storage[14] + v.storage[i + 3 | 0] * m.storage[15];
    }
  };
  Vec4Array.prototype.transformNormal_ce0se6$ = function (v, m) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i += 3) {
      this.storage[i + 0 | 0] = v.storage[i + 0 | 0] * m.storage[0] + v.storage[i + 1 | 0] * m.storage[1] + v.storage[i + 2 | 0] * m.storage[2];
      this.storage[i + 1 | 0] = v.storage[i + 0 | 0] * m.storage[4] + v.storage[i + 1 | 0] * m.storage[5] + v.storage[i + 2 | 0] * m.storage[6];
      this.storage[i + 2 | 0] = v.storage[i + 0 | 0] * m.storage[8] + v.storage[i + 1 | 0] * m.storage[9] + v.storage[i + 2 | 0] * m.storage[10];
    }
  };
  Vec4Array.prototype.provideDelegate_hr34ju$ = function (provider, property) {
    provider.register_7ghwgr$(property.callableName, this);
    return this;
  };
  Vec4Array.prototype.getValue_hr34ju$ = function (provider, property) {
    return this;
  };
  Vec4Array.prototype.setValue_pqs35q$ = function (provider, property, value) {
    this.set_qp9vav$(value);
  };
  Vec4Array.prototype.commit_9xmcn8$$default = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.storage);
  };
  Vec4Array.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vec4Array',
    interfaces: [VecArray]
  };
  function Vec4Array_init(size, $this) {
    $this = $this || Object.create(Vec4Array.prototype);
    Vec4Array.call($this, null, size, size);
    return $this;
  }
  function Gif() {
  }
  Gif.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Gif',
    interfaces: []
  };
  function VecArray() {
  }
  VecArray.prototype.invoke_za3lpa$ = function (i) {
    return this.storage[i % this.storage.length];
  };
  VecArray.prototype.gets_aehe13$ = function (other) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = other.invoke_za3lpa$(i);
    }
  };
  function VecArray$plus$ObjectLiteral(this$VecArray, closure$c) {
    this.this$VecArray = this$VecArray;
    this.closure$c = closure$c;
  }
  VecArray$plus$ObjectLiteral.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) + this.closure$c.invoke_za3lpa$(i);
  };
  VecArray$plus$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.plus_aehe13$ = function (c) {
    return new VecArray$plus$ObjectLiteral(this, c);
  };
  function VecArray$minus$ObjectLiteral(this$VecArray, closure$c) {
    this.this$VecArray = this$VecArray;
    this.closure$c = closure$c;
  }
  VecArray$minus$ObjectLiteral.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) - this.closure$c.invoke_za3lpa$(i);
  };
  VecArray$minus$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.minus_aehe13$ = function (c) {
    return new VecArray$minus$ObjectLiteral(this, c);
  };
  function VecArray$times$ObjectLiteral(this$VecArray, closure$c) {
    this.this$VecArray = this$VecArray;
    this.closure$c = closure$c;
  }
  VecArray$times$ObjectLiteral.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) * this.closure$c.invoke_za3lpa$(i);
  };
  VecArray$times$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.times_aehe13$ = function (c) {
    return new VecArray$times$ObjectLiteral(this, c);
  };
  function VecArray$div$ObjectLiteral(this$VecArray, closure$c) {
    this.this$VecArray = this$VecArray;
    this.closure$c = closure$c;
  }
  VecArray$div$ObjectLiteral.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) / this.closure$c.invoke_za3lpa$(i);
  };
  VecArray$div$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.div_aehe13$ = function (c) {
    return new VecArray$div$ObjectLiteral(this, c);
  };
  function VecArray$times$ObjectLiteral_0(this$VecArray, closure$s) {
    this.this$VecArray = this$VecArray;
    this.closure$s = closure$s;
  }
  VecArray$times$ObjectLiteral_0.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) * this.closure$s;
  };
  VecArray$times$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.times_mx4ult$ = function (s) {
    return new VecArray$times$ObjectLiteral_0(this, s);
  };
  function VecArray$div$ObjectLiteral_0(this$VecArray, closure$s) {
    this.this$VecArray = this$VecArray;
    this.closure$s = closure$s;
  }
  VecArray$div$ObjectLiteral_0.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i) / this.closure$s;
  };
  VecArray$div$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.div_mx4ult$ = function (s) {
    return new VecArray$div$ObjectLiteral_0(this, s);
  };
  function VecArray$expand$ObjectLiteral(this$VecArray, closure$factor) {
    this.this$VecArray = this$VecArray;
    this.closure$factor = closure$factor;
  }
  VecArray$expand$ObjectLiteral.prototype.invoke_za3lpa$ = function (i) {
    return this.this$VecArray.invoke_za3lpa$(i / this.closure$factor | 0);
  };
  VecArray$expand$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Gif]
  };
  VecArray.prototype.expand_za3lpa$ = function (factor) {
    return new VecArray$expand$ObjectLiteral(this, factor);
  };
  VecArray.prototype.plusAssign_aehe13$ = function (other) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] + other.invoke_za3lpa$(i);
    }
  };
  VecArray.prototype.minusAssign_aehe13$ = function (other) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] - other.invoke_za3lpa$(i);
    }
  };
  VecArray.prototype.timesAssign_aehe13$ = function (other) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] * other.invoke_za3lpa$(i);
    }
  };
  VecArray.prototype.divAssign_aehe13$ = function (other) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] / other.invoke_za3lpa$(i);
    }
  };
  VecArray.prototype.timesAssign_mx4ult$ = function (s) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] * s;
    }
  };
  VecArray.prototype.divAssign_mx4ult$ = function (s) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = this.storage[i] / s;
    }
  };
  VecArray.prototype.powAssign_mx4ult$ = function (s) {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      var tmp$_0 = this.storage;
      var $receiver = this.storage[i];
      tmp$_0[i] = Math_0.pow($receiver, s);
    }
  };
  VecArray.prototype.randomize = function () {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      this.storage[i] = Random.Default.nextFloat();
    }
  };
  VecArray.prototype.clamp = function () {
    var tmp$;
    tmp$ = this.storage.length;
    for (var i = 0; i < tmp$; i++) {
      if (this.storage[i] < 0.0) {
        this.storage[i] = 0.0;
      }if (this.storage[i] > 1.0) {
        this.storage[i] = 1.0;
      }}
  };
  VecArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VecArray',
    interfaces: [Gif, UniformFloat]
  };
  _.App = App;
  _.main = main;
  $$importsForInline$$.kog = _;
  _.GameObject = GameObject;
  _.InfiniteGeometry = InfiniteGeometry;
  Object.defineProperty(_, 'keyNames', {
    get: keyNames_getInstance
  });
  _.Material = Material;
  _.Mesh = Mesh;
  Object.defineProperty(JsonMesh, 'Companion', {
    get: JsonMesh$Companion_getInstance
  });
  Object.defineProperty(JsonMesh, '$serializer', {
    get: JsonMesh$$serializer_getInstance
  });
  _.JsonMesh_init_ccqi44$ = JsonMesh_init;
  _.JsonMesh = JsonMesh;
  Object.defineProperty(JsonModel, 'Companion', {
    get: JsonModel$Companion_getInstance
  });
  Object.defineProperty(JsonModel, '$serializer', {
    get: JsonModel$$serializer_getInstance
  });
  _.JsonModel_init_2nyd4a$ = JsonModel_init;
  _.JsonModel = JsonModel;
  _.MultiMesh = MultiMesh;
  _.OrthoCamera = OrthoCamera;
  Object.defineProperty(PerspectiveCamera, 'Companion', {
    get: PerspectiveCamera$Companion_getInstance
  });
  _.PerspectiveCamera = PerspectiveCamera;
  Object.defineProperty(Program, 'Companion', {
    get: Program$Companion_getInstance
  });
  _.Program = Program;
  _.Scene = Scene;
  _.Shader = Shader;
  _.SubmeshGeometry = SubmeshGeometry;
  _.Texture2D = Texture2D;
  _.TextureCube = TextureCube;
  _.TexturedQuadGeometry = TexturedQuadGeometry;
  _.VertexArray = VertexArray;
  var package$vision = _.vision || (_.vision = {});
  var package$gears = package$vision.gears || (package$vision.gears = {});
  var package$webglmath = package$gears.webglmath || (package$gears.webglmath = {});
  package$webglmath.Drawable = Drawable;
  package$webglmath.Geometry = Geometry;
  package$webglmath.Mat4_init_8cqhcw$ = Mat4_init;
  package$webglmath.Mat4_init_wohikv$ = Mat4_init_0;
  package$webglmath.Mat4 = Mat4;
  package$webglmath.Mat4Array_init_za3lpa$ = Mat4Array_init;
  package$webglmath.Mat4Array = Mat4Array;
  package$webglmath.get_UNSIGNED_INT_SAMPLER_2D_nnp1qi$ = get_UNSIGNED_INT_SAMPLER_2D;
  package$webglmath.get_INT_SAMPLER_2D_nnp1qi$ = get_INT_SAMPLER_2D;
  package$webglmath.get_SAMPLER_2D_SHADOW_nnp1qi$ = get_SAMPLER_2D_SHADOW;
  package$webglmath.get_UNSIGNED_INT_SAMPLER_CUBE_nnp1qi$ = get_UNSIGNED_INT_SAMPLER_CUBE;
  package$webglmath.get_INT_SAMPLER_CUBE_nnp1qi$ = get_INT_SAMPLER_CUBE;
  package$webglmath.get_SAMPLER_CUBE_SHADOW_nnp1qi$ = get_SAMPLER_CUBE_SHADOW;
  package$webglmath.get_UNSIGNED_INT_SAMPLER_3D_nnp1qi$ = get_UNSIGNED_INT_SAMPLER_3D;
  package$webglmath.get_INT_SAMPLER_3D_nnp1qi$ = get_INT_SAMPLER_3D;
  package$webglmath.get_SAMPLER_3D_nnp1qi$ = get_SAMPLER_3D;
  package$webglmath.get_UNSIGNED_INT_SAMPLER_2D_ARRAY_nnp1qi$ = get_UNSIGNED_INT_SAMPLER_2D_ARRAY;
  package$webglmath.get_INT_SAMPLER_2D_ARRAY_nnp1qi$ = get_INT_SAMPLER_2D_ARRAY;
  package$webglmath.get_SAMPLER_2D_ARRAY_SHADOW_nnp1qi$ = get_SAMPLER_2D_ARRAY_SHADOW;
  package$webglmath.get_SAMPLER_2D_ARRAY_nnp1qi$ = get_SAMPLER_2D_ARRAY;
  package$webglmath.UniformDescriptor = UniformDescriptor;
  Object.defineProperty(ProgramReflection, 'Companion', {
    get: ProgramReflection$Companion_getInstance
  });
  package$webglmath.ProgramReflection = ProgramReflection;
  package$webglmath.Sampler2D = Sampler2D;
  package$webglmath.get_TEXTURE_3D_nnp1qi$ = get_TEXTURE_3D;
  package$webglmath.Sampler3D = Sampler3D;
  package$webglmath.SamplerCube = SamplerCube;
  package$webglmath.Texture = Texture;
  package$webglmath.Uniform = Uniform;
  package$webglmath.UniformFloat = UniformFloat;
  package$webglmath.UniformSampler = UniformSampler;
  package$webglmath.UniformProvider = UniformProvider;
  package$webglmath.Vec2_init_dleff0$ = Vec2_init;
  package$webglmath.Vec3_init_y2kzbl$ = Vec3_init;
  package$webglmath.Vec4_init_7b5o5w$ = Vec4_init;
  package$webglmath.Vec1_init_wobp52$ = Vec1_init_0;
  package$webglmath.Vec1 = Vec1;
  package$webglmath.Vec1_init_mx4ult$ = Vec1_init;
  Object.defineProperty(Vec1, 'Companion', {
    get: Vec1$Companion_getInstance
  });
  package$webglmath.times_xf7ncq$ = times;
  package$webglmath.div_xf7ncq$ = div;
  package$webglmath.Vec1Array_init_za3lpa$ = Vec1Array_init;
  package$webglmath.Vec1Array = Vec1Array;
  package$webglmath.Vec2_init_wobp51$ = Vec2_init_1;
  package$webglmath.Vec2 = Vec2;
  Object.defineProperty(Vec2, 'Companion', {
    get: Vec2$Companion_getInstance
  });
  package$webglmath.Vec2_init_ndq3cv$ = Vec2_init_0;
  package$webglmath.times_xf7ncr$ = times_0;
  package$webglmath.div_xf7ncr$ = div_0;
  package$webglmath.Vec2Array_init_za3lpa$ = Vec2Array_init;
  package$webglmath.Vec2Array = Vec2Array;
  package$webglmath.Vec3_init_wobp50$ = Vec3_init_2;
  package$webglmath.Vec3 = Vec3;
  Object.defineProperty(Vec3, 'Companion', {
    get: Vec3$Companion_getInstance
  });
  package$webglmath.Vec3_init_x0kk7u$ = Vec3_init_0;
  package$webglmath.Vec3_init_vqpyw0$ = Vec3_init_1;
  package$webglmath.Vec3_init_wobp4z$ = Vec3_init_3;
  package$webglmath.times_xf7ncs$ = times_1;
  package$webglmath.div_xf7ncs$ = div_1;
  package$webglmath.Vec3Array_init_za3lpa$ = Vec3Array_init;
  package$webglmath.Vec3Array = Vec3Array;
  package$webglmath.Vec4_init_wobp4z$ = Vec4_init_3;
  package$webglmath.Vec4 = Vec4;
  Object.defineProperty(Vec4, 'Companion', {
    get: Vec4$Companion_getInstance
  });
  package$webglmath.Vec4_init_25f9r5$ = Vec4_init_0;
  package$webglmath.Vec4_init_m40rmt$ = Vec4_init_1;
  package$webglmath.Vec4_init_uxe7jz$ = Vec4_init_2;
  package$webglmath.times_xf7nct$ = times_2;
  package$webglmath.div_xf7nct$ = div_2;
  package$webglmath.Vec4Array_init_za3lpa$ = Vec4Array_init;
  package$webglmath.Vec4Array = Vec4Array;
  package$webglmath.Gif = Gif;
  package$webglmath.VecArray = VecArray;
  JsonMesh$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  JsonModel$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  UniformFloat.prototype.commit_9xmcn8$ = Uniform.prototype.commit_9xmcn8$;
  Mat4.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Mat4.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Mat4.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  Mat4Array.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  Mat4Array.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Mat4Array.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Mat4Array.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  UniformSampler.prototype.commit_9xmcn8$ = Uniform.prototype.commit_9xmcn8$;
  Sampler2D.prototype.getStorageSize = UniformSampler.prototype.getStorageSize;
  Sampler2D.prototype.set_qp9vav$ = UniformSampler.prototype.set_qp9vav$;
  Sampler2D.prototype.set_xwoe53$ = UniformSampler.prototype.set_xwoe53$;
  Sampler2D.prototype.set_8cqhcw$ = UniformSampler.prototype.set_8cqhcw$;
  Sampler2D.prototype.commit_9xmcn8$ = UniformSampler.prototype.commit_9xmcn8$;
  Sampler3D.prototype.getStorageSize = UniformSampler.prototype.getStorageSize;
  Sampler3D.prototype.set_qp9vav$ = UniformSampler.prototype.set_qp9vav$;
  Sampler3D.prototype.set_xwoe53$ = UniformSampler.prototype.set_xwoe53$;
  Sampler3D.prototype.set_8cqhcw$ = UniformSampler.prototype.set_8cqhcw$;
  Sampler3D.prototype.commit_9xmcn8$ = UniformSampler.prototype.commit_9xmcn8$;
  SamplerCube.prototype.getStorageSize = UniformSampler.prototype.getStorageSize;
  SamplerCube.prototype.set_qp9vav$ = UniformSampler.prototype.set_qp9vav$;
  SamplerCube.prototype.set_xwoe53$ = UniformSampler.prototype.set_xwoe53$;
  SamplerCube.prototype.set_8cqhcw$ = UniformSampler.prototype.set_8cqhcw$;
  SamplerCube.prototype.commit_9xmcn8$ = UniformSampler.prototype.commit_9xmcn8$;
  Vec1.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  Vec1.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Vec1.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Vec1.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  VecArray.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  VecArray.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  VecArray.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  VecArray.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  Vec2.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  Vec2.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Vec2.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Vec2.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  Vec3.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  Vec3.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Vec3.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Vec3.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  Vec4.prototype.set_qp9vav$ = UniformFloat.prototype.set_qp9vav$;
  Vec4.prototype.set_xwoe53$ = UniformFloat.prototype.set_xwoe53$;
  Vec4.prototype.getStorageSize = UniformFloat.prototype.getStorageSize;
  Vec4.prototype.commit_9xmcn8$ = UniformFloat.prototype.commit_9xmcn8$;
  main();
  Kotlin.defineModule('kog', _);
  return _;
}(typeof kog === 'undefined' ? {} : kog, kotlin, this['kotlinx-serialization-kotlinx-serialization-runtime']);

//# sourceMappingURL=kog.js.map
