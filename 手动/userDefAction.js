Blockly.Blocks['1780327701460'] = {
  init: function() {
    this.jsonInit({
      "type": "1780327701460",
      "message0": "捡方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780327701460'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,149,150,67,100,120,170,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,149,150,67,100,140,190,50,100,52,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780327701460'] = function(block) {
  let code = "base_action.action('捡方块2')\n";
  return code;
}

Blockly.Blocks['1780327999624'] = {
  init: function() {
    this.jsonInit({
      "type": "1780327999624",
      "message0": "放方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780327999624'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,127,100,140,190,50,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,111,150,54,102,140,190,50,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- MOTORE,100,71,128\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,101,150,42,102,140,190,50,100,99,51,158,101,0,0,100)\nMOTOwait()\nDelayMs(400)\n\n\n-- 放\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,101,107,149,43,100,140,190,50,101,92,51,157,100,0,0,100)\nMOTOwait()\n\n\n-- 松手\nMOTOsetspeed(30)\nMOTOmove19(65,33,156,101,107,149,43,100,140,165,50,101,92,51,157,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,33,130,100,111,150,54,102,120,165,66,100,88,51,142,101,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780327999624'] = function(block) {
  let code = "base_action.action('放方块2')\n";
  return code;
}

Blockly.Blocks['1780328669891'] = {
  init: function() {
    this.jsonInit({
      "type": "1780328669891",
      "message0": "抱块左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780328669891'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,124,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780328669891'] = function(block) {
  let code = "base_action.action('抱块左移2')\n";
  return code;
}

Blockly.Blocks['1780329913421'] = {
  init: function() {
    this.jsonInit({
      "type": "1780329913421",
      "message0": "抱方块向前快走一步",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780329913421'] = function(block) {
  let code = "MOTOrigid16(25,25,25,75,75,90,80,70,25,25,25,75,75,90,80,70)\nMOTOsetspeed(45)\nMOTOmove19(56,10,156,99,93,54,122,90,140,190,50,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(60)\nMOTOmove19(56,10,156,99,115,99,103,100,140,190,50,101,109,134,91,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(70)\nMOTOmove19(56,10,156,99,110,74,121,100,140,190,50,101,114,137,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,110,61,126,104,140,190,50,101,100,127,94,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,91,66,109,102,140,190,50,101,85,101,97,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,86,63,110,100,140,190,50,101,90,126,79,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(80)\nMOTOmove19(56,10,156,99,100,73,106,100,140,190,50,101,90,139,74,94,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(56,10,156,96,95,70,110,100,140,190,50,102,109,146,75,96,0,0,100)\nMOTOwait()\nMOTOsetspeed(45)\nMOTOmove19(56,10,156,99,93,54,122,90,140,190,50,98,107,146,75,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(56,10,156,100,93,55,124,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780329913421'] = function(block) {
  let code = "base_action.action('抱方块向前快走一步')\n";
  return code;
}

Blockly.Blocks['1780371312631'] = {
  init: function() {
    this.jsonInit({
      "type": "1780371312631",
      "message0": "举方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780371312631'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780371312631'] = function(block) {
  let code = "base_action.action('举方块')\n";
  return code;
}

Blockly.Blocks['1780378166034'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378166034",
      "message0": "抱方块右移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378166034'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,100,93,54,134,98,140,190,50,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378166034'] = function(block) {
  let code = "base_action.action('抱方块右移2')\n";
  return code;
}

Blockly.Blocks['1780378217586'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378217586",
      "message0": "抱方块左移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378217586'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,85,112,90,115,90,140,190,50,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,95,93,53,131,105,140,190,50,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,100,93,54,134,98,140,190,50,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,95,140,190,50,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,134,100,140,190,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378217586'] = function(block) {
  let code = "base_action.action('抱方块左移2')\n";
  return code;
}

Blockly.Blocks['1780378267521'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378267521",
      "message0": "抱方块右移2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378267521'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,90,93,54,130,100,140,190,50,115,88,110,85,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,156,80,84,40,138,70,140,190,50,105,107,147,69,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,156,97,93,54,130,95,140,190,50,100,107,146,66,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,130,95,140,190,50,100,107,145,66,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,100,93,55,130,100,140,190,50,100,107,145,66,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378267521'] = function(block) {
  let code = "base_action.action('抱方块右移2')\n";
  return code;
}

Blockly.Blocks['1780378339977'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378339977",
      "message0": "抱方块向前慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378339977'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,134,88,140,190,50,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,121,37,161,88,140,190,50,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,107,98,56,129,111,140,190,50,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,93,54,128,113,140,190,50,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,91,54,128,111,140,190,50,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,88,69,45,112,90,140,190,50,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,123,95,115,90,140,190,50,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378339977'] = function(block) {
  let code = "base_action.action('抱方块向前慢速移动')\n";
  return code;
}

Blockly.Blocks['1780378437753'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378437753",
      "message0": "抱方块向后慢速移动",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378437753'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,90,91,48,138,88,140,190,50,94,107,146,67,92,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,94,90,140,190,50,94,107,146,67,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,88,71,53,114,85,140,190,50,93,100,144,70,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,106,93,53,134,111,140,190,50,114,87,163,33,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,106,95,53,133,113,140,190,50,114,110,105,105,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,107,100,56,130,109,140,190,50,112,129,147,86,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,86,113,37,167,90,140,190,50,94,107,147,67,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,86,90,95,95,90,140,190,50,94,105,147,69,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,133,100,140,190,50,100,107,145,67,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378437753'] = function(block) {
  let code = "base_action.action('抱方块向后慢速移动')\n";
  return code;
}

Blockly.Blocks['1780378477743'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378477743",
      "message0": "抱方块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378477743'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,71,55,109,95,140,190,50,105,89,145,51,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,80,55,109,92,140,190,50,105,81,145,51,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,91,55,129,100,140,190,50,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378477743'] = function(block) {
  let code = "base_action.action('抱方块左转')\n";
  return code;
}

Blockly.Blocks['1780378499512'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378499512",
      "message0": "抱方块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378499512'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,95,110,55,149,95,140,190,50,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,156,95,118,55,149,92,140,190,50,105,121,145,91,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,129,100,140,190,50,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378499512'] = function(block) {
  let code = "base_action.action('抱方块右转')\n";
  return code;
}

Blockly.Blocks['1780378545800'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378545800",
      "message0": "向前撑地起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378545800'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 起\nMOTOsetspeed(40)\nMOTOmove19(80,90,101,101,93,57,124,101,131,100,98,102,107,143,77,99,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(37,92,182,85,64,41,98,99,153,107,19,130,142,160,92,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,63,160,136,46,86,150,147,19,137,44,67,152,117,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(85,12,172,62,160,146,47,75,119,189,31,139,43,54,154,123,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,66,149,146,55,63,150,147,19,158,48,60,146,140,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54,47,190,70,126,145,53,68,150,147,19,138,74,60,147,135,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(54,47,190,79,113,140,50,78,150,147,19,126,72,60,135,125,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,100,125,140,62,100,120,170,87,100,75,60,138,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,104,127,133,71,100,120,170,87,103,70,67,128,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,30,113,102,128,104,97,100,120,170,87,102,74,91,104,100,128,71,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(40)\nMOTOmove19(80,37,100,108,93,55,124,100,120,170,100,92,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378545800'] = function(block) {
  let code = "base_action.action('向前撑地起来')\n";
  return code;
}

Blockly.Blocks['1780378580535'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378580535",
      "message0": "向后倒地起来",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378580535'] = function(block) {
  let code = "MOTOrigid16(60,60,60,60,60,60,60,60,60,60,60,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(35,130,20,101,131,126,170,100,165,70,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(21,105,21,101,131,126,170,100,179,95,180,99,69,74,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,16,46,100,80,150,60,100,108,184,154,100,120,50,140,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,18,58,100,73,150,40,100,108,182,142,100,127,50,160,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(92,25,135,100,124,150,50,100,108,175,65,100,76,50,150,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(35)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378580535'] = function(block) {
  let code = "base_action.action('向后倒地起来')\n";
  return code;
}

Blockly.Blocks['1780378610982'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378610982",
      "message0": "上台阶1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378610982'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 2\nMOTOsetspeed(25)\nMOTOmove19(94,79,100,85,106,79,113,80,106,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,160,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,160,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 2右腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,100,100,106,93,55,124,112,103,95,100,115,68,73,115,111,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,60,60,60,60,60)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,100,100,105,115,100,101,110,100,50,100,115,40,150,20,105,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,65,50,101,100,100,50,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,55,50,101,100,100,100,100,100,40,122,45,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,90,70,10,160,90,100,190,20,95,40,122,65,88,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,45,20,95,100,100,190,20,95,85,135,75,88,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,85,130,90,105,100,100,190,20,95,95,135,75,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,90,90,90,90,25,25,25,90,100,100,100,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,85,110,90,105,100,100,100,20,95,102,145,76,88,128,71,100)\nMOTOwait()\nDelayMs(200)\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 3左腿上台阶\nMOTOsetspeed(15)\nMOTOmove19(97,105,100,85,132,127,85,89,103,100,100,94,107,145,76,88,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,90,90,90,90,90)\n\n\n-- 1\nMOTOsetspeed(35)\nMOTOmove19(100,150,100,85,160,50,180,95,100,100,100,95,85,100,99,90,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(100,150,100,100,160,78,155,100,100,100,100,100,135,150,99,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,100,100,100,160,78,155,100,100,100,100,100,145,150,99,100,128,71,100)\nMOTOwait()\nDelayMs(300)\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(20)\nMOTOmove19(100,10,180,105,160,78,135,112,100,190,20,110,130,190,40,110,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,115,65,125,112,100,190,20,115,155,180,105,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(100,10,180,105,105,65,125,112,100,190,20,115,70,110,95,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,90,100,100,100,90,25,25,25,90,90,90,90,90)\nMOTOsetspeed(30)\nMOTOmove19(100,100,180,105,98,55,124,112,100,100,20,115,90,110,95,100,128,71,100)\nMOTOwait()\nDelayMs(200)\n\n\n-- 15\nMOTOsetspeed(25)\nMOTOmove19(100,100,180,102,79,32,137,108,100,100,20,108,121,165,70,108,128,71,100)\nMOTOwait()\nMOTOsetspeed(25)\nMOTOmove19(100,100,100,108,70,10,148,108,100,70,100,111,101,142,72,110,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,60,30,30,30,50,55,50,50,50)\n\n\n-- 4\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,105,79,32,137,108,100,70,100,107,107,160,60,112,128,71,100)\nMOTOwait()\nMOTOrigid16(30,30,30,50,60,60,60,60,30,30,30,50,60,60,60,60)\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,100,79,35,130,100,100,70,100,102,107,160,65,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,98,79,35,130,95,100,70,100,98,107,160,65,95,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(100,100,100,92,79,35,130,92,100,70,100,98,121,168,63,92,128,71,100)\nMOTOwait()\nMOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 14\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,95,55,123,100,120,170,100,100,105,145,77,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378610982'] = function(block) {
  let code = "base_action.action('上台阶1')\n";
  return code;
}

Blockly.Blocks['1780378636660'] = {
  init: function() {
    this.jsonInit({
      "type": "1780378636660",
      "message0": "向前翻滚",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780378636660'] = function(block) {
  let code = "MOTOrigid16(60,60,60,30,60,60,60,30,60,60,60,30,60,60,60,30)\n\n\n-- 1站立\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n\n\n-- 2\nMOTOsetspeed(30)\nMOTOmove19(90,105,190,100,128,10,170,100,110,95,10,100,72,190,30,100,128,71,100)\nMOTOwait()\n\n\n-- 3\nMOTOsetspeed(30)\nMOTOmove19(90,10,190,100,108,10,170,100,110,190,10,100,92,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,118,10,170,100,110,190,10,100,82,190,30,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,169,100,110,190,10,100,72,190,31,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,168,100,110,190,10,100,72,190,32,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,128,10,164,100,110,190,10,100,72,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,164,100,110,190,10,100,70,190,36,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,161,100,110,190,10,100,70,190,39,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,130,10,159,100,110,190,10,100,70,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,159,100,110,190,10,100,68,190,41,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,157,100,110,190,10,100,68,190,43,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(90,10,190,100,132,10,154,100,110,190,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(87,14,190,100,132,10,154,100,113,186,10,100,68,190,46,100,128,71,100)\nMOTOwait()\nDelayMs(1000)\nMOTOrigid16(90,90,100,30,60,60,60,30,90,90,100,30,60,60,60,30)\nMOTOsetspeed(20)\nMOTOmove19(50,50,190,100,132,10,154,100,150,150,10,100,68,190,46,100,128,71,100)\nMOTOwait()\n\n\n-- 4\nMOTOsetspeed(120)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,65,190,40,100,128,71,100)\nMOTOwait()\nMOTOsetspeed(100)\nMOTOmove19(50,50,165,100,10,95,108,100,150,150,35,100,165,190,40,100,128,71,100)\nMOTOwait()\nDelayMs(300)\n\n\n-- 修改\nMOTOsetspeed(135)\nMOTOmove19(43,40,190,100,10,95,108,100,166,160,10,100,190,175,10,100,128,71,100)\nMOTOwait()\n\n\n-- 8\nMOTOsetspeed(99)\nMOTOmove19(50,50,190,100,90,95,170,100,150,150,10,100,110,105,30,100,128,71,100)\nMOTOwait()\n\n\n-- 9\nMOTOsetspeed(40)\nMOTOmove19(89,182,110,100,10,95,93,100,111,18,90,100,190,105,107,100,128,71,100)\nMOTOwait()\n\n\n-- 10\nMOTOsetspeed(40)\nMOTOmove19(90,160,190,100,10,95,63,100,110,40,10,100,190,105,137,100,128,71,100)\nMOTOwait()\nMOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\n\n\n-- 12\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\n\n\n-- 13\nMOTOsetspeed(24)\nMOTOmove19(90,50,190,100,142,145,77,100,110,150,10,100,58,55,123,100,128,71,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(24)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780378636660'] = function(block) {
  let code = "base_action.action('向前翻滚')\n";
  return code;
}

Blockly.Blocks['1780382430724'] = {
  init: function() {
    this.jsonInit({
      "type": "1780382430724",
      "message0": "抱方块3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780382430724'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,160,150,67,100,120,170,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,160,150,67,100,140,190,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780382430724'] = function(block) {
  let code = "base_action.action('抱方块3')\n";
  return code;
}

Blockly.Blocks['1780383199952'] = {
  init: function() {
    this.jsonInit({
      "type": "1780383199952",
      "message0": "test1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780383199952'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,102,150,40,100,140,190,28,100,98,50,162,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780383199952'] = function(block) {
  let code = "base_action.action('test1')\n";
  return code;
}

Blockly.Blocks['1780384801986'] = {
  init: function() {
    this.jsonInit({
      "type": "1780384801986",
      "message0": "放方块3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780384801986'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,93,55,127,100,140,190,50,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,111,150,54,102,140,190,50,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,149,100,111,150,54,102,140,190,56,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(77,10,149,100,111,150,54,102,122,190,56,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780384801986'] = function(block) {
  let code = "base_action.action('放方块3')\n";
  return code;
}

Blockly.Blocks['1780385894272'] = {
  init: function() {
    this.jsonInit({
      "type": "1780385894272",
      "message0": "抬方块前进",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780385894272'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,90,91,48,134,88,140,190,28,94,109,146,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,123,95,115,90,140,190,28,94,109,146,71,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,121,37,161,88,140,190,28,94,109,146,72,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,107,98,56,129,111,140,190,28,112,131,155,88,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,93,54,128,113,140,190,28,114,77,105,85,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,91,54,128,111,140,190,28,114,89,163,39,112,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,88,69,45,112,90,140,190,28,93,102,144,71,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,86,123,95,115,90,140,190,28,94,107,146,72,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780385894272'] = function(block) {
  let code = "base_action.action('抬方块前进')\n";
  return code;
}

Blockly.Blocks['1780386300726'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386300726",
      "message0": "test2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386300726'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,90,95,84,90,120,165,50,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,88,71,53,105,85,120,165,50,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,106,93,53,124,111,120,165,50,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,106,95,53,122,113,120,165,50,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,35,156,107,100,56,121,109,120,165,50,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,35,156,86,113,37,158,90,120,165,50,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(80,35,156,86,110,95,100,90,120,165,50,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(80,35,156,90,91,48,129,88,120,165,50,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386300726'] = function(block) {
  let code = "base_action.action('test2')\n";
  return code;
}

Blockly.Blocks['1780386706834'] = {
  init: function() {
    this.jsonInit({
      "type": "1780386706834",
      "message0": "抬方块后退",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780386706834'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,75,80,75,65,30,30,30,65,75,80,75,65)\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,90,95,84,90,140,190,28,94,107,146,78,87,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,88,71,53,105,85,140,190,28,93,100,144,79,91,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,106,93,53,124,111,140,190,28,114,87,163,42,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,106,95,53,122,113,140,190,28,114,110,105,114,110,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,107,100,56,121,109,140,190,28,112,129,147,95,115,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,86,113,37,158,90,140,190,28,94,107,147,76,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(40)\nMOTOmove19(65,10,180,86,110,95,100,90,140,190,28,94,107,146,77,89,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,90,91,48,129,88,140,190,28,94,107,146,76,90,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,100,93,55,124,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780386706834'] = function(block) {
  let code = "base_action.action('抬方块后退')\n";
  return code;
}

Blockly.Blocks['1780387019218'] = {
  init: function() {
    this.jsonInit({
      "type": "1780387019218",
      "message0": "抬方块左转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780387019218'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,95,71,55,109,95,140,190,28,105,89,145,51,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,95,80,55,109,92,140,190,28,105,81,145,51,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,91,55,129,100,140,190,28,100,109,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780387019218'] = function(block) {
  let code = "base_action.action('抬方块左转')\n";
  return code;
}

Blockly.Blocks['1780387295541'] = {
  init: function() {
    this.jsonInit({
      "type": "1780387295541",
      "message0": "抬方块右转",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780387295541'] = function(block) {
  let code = "MOTOrigid16(30,30,30,65,65,65,65,65,30,30,30,65,65,65,65,65)\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,95,110,55,149,95,140,190,28,105,130,145,91,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,95,118,55,149,92,140,190,28,105,121,145,91,108,0,0,100)\nMOTOwait()\nMOTOsetspeed(14)\nMOTOmove19(65,10,180,100,90,55,129,100,140,190,28,100,110,145,71,100,0,0,100)\nMOTOwait()\nDelayMs(400)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,129,100,140,190,28,100,110,145,71,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780387295541'] = function(block) {
  let code = "base_action.action('抬方块右转')\n";
  return code;
}

Blockly.Blocks['1780396598540'] = {
  init: function() {
    this.jsonInit({
      "type": "1780396598540",
      "message0": "下批",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780396598540'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(103,39,180,74,145,139,62,74,97,161,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(20)\nMOTOmove19(80,30,180,108,93,55,124,100,120,170,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780396598540'] = function(block) {
  let code = "base_action.action('下批')\n";
  return code;
}

Blockly.Blocks['1780398091928'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398091928",
      "message0": "蹲放",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398091928'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398091928'] = function(block) {
  let code = "base_action.action('蹲放')\n";
  return code;
}

Blockly.Blocks['1780398237174'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398237174",
      "message0": "抱方块左移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398237174'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,85,95,85,35,20,20,20,65,55,55,55,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,85,112,90,115,90,140,190,28,110,107,146,70,100,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,180,95,93,53,131,105,140,190,28,120,116,160,68,130,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,100,93,54,134,98,140,190,28,103,107,146,76,105,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,95,140,190,28,100,107,145,76,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,134,100,140,190,28,100,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398237174'] = function(block) {
  let code = "base_action.action('抱方块左移')\n";
  return code;
}

Blockly.Blocks['1780398283865'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398283865",
      "message0": "抱方块右移",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398283865'] = function(block) {
  let code = "MOTOrigid16(20,20,20,65,55,55,55,35,20,20,20,65,85,95,85,35)\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,90,93,54,130,100,140,190,28,115,88,110,85,110,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(75)\nMOTOmove19(65,10,180,80,84,40,138,70,140,190,28,105,107,147,69,95,0,0,100)\nMOTOwait()\nMOTOsetspeed(65)\nMOTOmove19(65,10,180,97,93,54,130,95,140,190,28,100,107,146,66,102,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,130,95,140,190,28,100,107,145,66,105,0,0,100)\nMOTOwait()\nDelayMs(50)\nMOTOsetspeed(20)\nMOTOmove19(65,10,180,100,93,55,130,100,140,190,28,100,107,145,66,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398283865'] = function(block) {
  let code = "base_action.action('抱方块右移')\n";
  return code;
}

Blockly.Blocks['1780398362518'] = {
  init: function() {
    this.jsonInit({
      "type": "1780398362518",
      "message0": "举方块1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780398362518'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,90,55,127,100,140,190,28,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780398362518'] = function(block) {
  let code = "base_action.action('举方块1')\n";
  return code;
}

Blockly.Blocks['1780403945983'] = {
  init: function() {
    this.jsonInit({
      "type": "1780403945983",
      "message0": "蹲放1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780403945983'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,85,110,139,62,83,140,190,28,115,88,61,138,117,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,74,145,139,62,74,140,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(30)\nMOTOmove19(85,10,180,74,145,139,62,74,120,190,28,126,55,61,138,126,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85,10,180,108,93,55,124,100,120,190,28,92,107,145,76,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780403945983'] = function(block) {
  let code = "base_action.action('蹲放1')\n";
  return code;
}

Blockly.Blocks['1780404834649'] = {
  init: function() {
    this.jsonInit({
      "type": "1780404834649",
      "message0": "抱方块4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780404834649'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- 张\nMOTOsetspeed(20)\nMOTOmove19(80,30,156,100,93,55,124,100,120,170,50,100,107,145,76,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(80,30,156,100,113,90,109,100,120,170,50,100,87,111,91,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80,30,156,100,136,150,62,100,120,170,50,100,72,50,138,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(100,30,146,100,160,150,67,100,100,170,60,100,40,50,133,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(15)\nMOTOmove19(65,10,156,100,160,150,67,100,140,190,50,100,40,50,133,100,0,0,100)\nMOTOwait()\nDelayMs(200)\nMOTOsetspeed(10)\nMOTOmove19(65,10,156,100,104,132,70,100,140,190,50,100,93,69,130,100,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,156,100,90,55,127,100,140,190,50,100,110,145,73,100,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780404834649'] = function(block) {
  let code = "base_action.action('抱方块4')\n";
  return code;
}

Blockly.Blocks['1780405411628'] = {
  init: function() {
    this.jsonInit({
      "type": "1780405411628",
      "message0": "放下方块",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780405411628'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,93,55,127,100,140,190,28,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(77,10,180,100,111,150,54,102,122,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780405411628'] = function(block) {
  let code = "base_action.action('放下方块')\n";
  return code;
}

Blockly.Blocks['1780405860936'] = {
  init: function() {
    this.jsonInit({
      "type": "1780405860936",
      "message0": "放下方块2",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780405860936'] = function(block) {
  let code = "MOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40)\n\n\n-- RIGEND\nMOTOsetspeed(30)\nMOTOmove19(65,10,180,100,93,55,127,100,140,190,28,100,107,145,73,100,0,0,100)\nMOTOwait()\n\n\n-- 蹲2\nMOTOsetspeed(15)\nMOTOmove19(65,10,180,100,111,150,54,102,140,190,28,100,88,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(65,10,180,100,129,150,54,102,140,190,28,100,70,51,142,101,0,0,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(92,10,180,100,129,150,54,102,107,190,28,100,70,51,142,101,0,0,100)\nMOTOwait()\n\n\n-- 站立\nMOTOsetspeed(20)\nMOTOmove19(80,30,100,100,93,55,124,100,120,170,100,100,107,145,76,100,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780405860936'] = function(block) {
  let code = "base_action.action('放下方块2')\n";
  return code;
}

Blockly.Blocks['1780464183380'] = {
  init: function() {
    this.jsonInit({
      "type": "1780464183380",
      "message0": "前蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780464183380'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,104,145,42,101,120,170,100,103,97,54,159,103,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,107,56,54,121,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,62,120,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,78,91,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79,49,99,107,116,132,77,88,119,148,95,107,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,136,68,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,111,120,129,83,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,123,89,94,119,148,95,118,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(76,40,101,97,104,150,41,98,119,163,95,98,99,50,158,99,128,71,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780464183380'] = function(block) {
  let code = "base_action.action('前蹲走1')\n";
  return code;
}

Blockly.Blocks['1780465965070'] = {
  init: function() {
    this.jsonInit({
      "type": "1780465965070",
      "message0": "左蹲走1",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780465965070'] = function(block) {
  let code = "MOTOrigid16(25,25,25,70,70,70,70,70,25,25,25,70,70,70,70,70)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,145,63,86,120,170,100,100,80,59,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(80,30,100,90,116,145,55,90,120,170,100,110,73,58,145,110,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,100,124,142,55,108,120,170,100,105,67,55,135,120,128,71,100)\nMOTOwait()\nMOTOsetspeed(21)\nMOTOmove19(80,30,100,95,123,147,63,86,120,170,100,100,80,58,145,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,97,107,145,41,99,120,170,99,99,95,59,161,98,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780465965070'] = function(block) {
  let code = "base_action.action('左蹲走1')\n";
  return code;
}

Blockly.Blocks['1780470809733'] = {
  init: function() {
    this.jsonInit({
      "type": "1780470809733",
      "message0": "前蹲走3",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": "#EDC611",
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780470809733'] = function(block) {
  let code = "MOTOrigid16(25,25,25,60,60,60,60,60,25,25,25,60,60,60,60,60)\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,104,150,40,99,120,170,100,102,97,50,161,102,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,107,56,54,121,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,100,104,120,135,68,111,119,148,95,108,56,78,91,111,128,71,100)\nMOTOwait()\nMOTOsetspeed(18)\nMOTOmove19(79,49,99,107,116,132,77,88,119,148,95,107,99,64,146,96,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,112,119,135,68,94,126,148,95,118,99,65,144,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,111,119,98,114,81,126,148,95,112,99,65,144,90,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(79,49,99,100,93,150,40,97,126,148,95,100,105,50,162,97,128,71,100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80,30,100,100,104,150,40,99,120,170,100,102,97,50,161,102,0,0,100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780470809733'] = function(block) {
  let code = "base_action.action('前蹲走3')\n";
  return code;
}

