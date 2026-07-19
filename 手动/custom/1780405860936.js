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

