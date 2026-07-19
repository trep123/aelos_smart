Blockly.Blocks['1780309080644'] = {
  init: function() {
    this.jsonInit({
      "type": "1780309080644",
      "message0": "Forwalk02LS_0427",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1780309080644'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(30,30,30,85,85,85,85,45,30,30,30,85,85,85,85,45)\nMOTOsetspeed(20)\nMOTOmove19(80, 30, 75, 100, 108, 55, 137, 100, 120, 170, 75, 100, 132, 154, 89, 100, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(30,30,30,75,85,100,90,70,30,30,30,50,55,50,50,50)\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 147, 155, 99, 110, 0, 0, 100)\nMOTOwait()\nMOTOmove19(80, 35, 90, 107, 100, 56, 124, 111, 120, 165, 90, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 6\nMOTOsetspeed(30)\nMOTOmove19(80, 35, 110, 106, 95, 54, 123, 112, 120, 165, 110, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\n\n\n-- 停止\nMOTOsetspeed(20)\nMOTOmove19(80, 35, 100, 106, 95, 54, 124, 111, 120, 165, 100, 120, 109, 152, 71, 120, 0, 0, 100)\nMOTOwait()\nMOTOrigid16(20,20,20,85,85,95,85,85,20,20,20,85,55,55,55,85)\nMOTOmove19(80, 30, 100, 107, 93, 55, 124, 107, 120, 150, 100, 106, 107, 145, 76, 108, 0, 0, 100)\nMOTOwait()\nDelayMs(100)\nMOTOsetspeed(6)\nMOTOmove19(80, 30, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1780309080644'] = function(block) {
  let code = "base_action.action('Forwalk02LS_0427')\n";
  return code;
}

