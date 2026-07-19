Blockly.Blocks['music_stop_control'] = {
  init: function () {
    this.jsonInit({
      type: 'music_stop_control',
      message0: '%{BKY_AELOS_MUSIC_STOP_CONTROL}',
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Msg.ControlHUE,
      toolip: '',
      helpUrl: '',
    });
  }
};

Blockly.Lua['music_stop_control'] = function(block) {
  const code = `stopWAV_mp3()\n`;
  return code;
}

Blockly.Python['music_stop_control'] = function (block) {
  const code = `music.music_stop()\n`;
  return code;
}

