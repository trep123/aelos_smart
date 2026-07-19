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

