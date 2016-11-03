/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var dstore_values_pb = require('../../../dstore/values_pb.js');
var dstore_engine_message_pb = require('../../../dstore/engine/message_pb.js');
var dstore_engine_metainformation_pb = require('../../../dstore/engine/metainformation_pb.js');
goog.exportSymbol('proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.ac_GetCommandSettings_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.displayName = 'proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandId: (f = msg.getCommandId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    commandIdNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    keyVariable: (f = msg.getKeyVariable()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    keyVariableNull: jspb.Message.getFieldWithDefault(msg, 1002, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters;
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommandId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommandIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setKeyVariable(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setKeyVariableNull(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getCommandId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommandIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariableNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
};


/**
 * optional dstore.values.integerValue command_id = 1;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.getCommandId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.setCommandId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.clearCommandId = function() {
  this.setCommandId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.hasCommandId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool command_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.getCommandIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.setCommandIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.stringValue key_variable = 2;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.getKeyVariable = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 2));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.hasKeyVariable = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool key_variable_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.getKeyVariableNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Parameters.prototype.setKeyVariableNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.ac_GetCommandSettings_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.ac_GetCommandSettings_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.ac_GetCommandSettings_Ad.Response.displayName = 'proto.dstore.engine.ac_GetCommandSettings_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.repeatedFields_ = [2,3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.ac_GetCommandSettings_Ad.Response;
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new dstore_engine_metainformation_pb.MetaInformation;
      reader.readMessage(value,dstore_engine_metainformation_pb.MetaInformation.deserializeBinaryFromReader);
      msg.addMetaInformation(value);
      break;
    case 3:
      var value = new dstore_engine_message_pb.Message;
      reader.readMessage(value,dstore_engine_message_pb.Message.deserializeBinaryFromReader);
      msg.addMessage(value);
      break;
    case 4:
      var value = new proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.deserializeBinaryFromReader);
      msg.addRow(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMetaInformationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      dstore_engine_metainformation_pb.MetaInformation.serializeBinaryToWriter
    );
  }
  f = this.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      dstore_engine_message_pb.Message.serializeBinaryToWriter
    );
  }
  f = this.getRowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row>}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row>} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row, opt_index);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.prototype.clearRowList = function() {
  this.setRowList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.displayName = 'proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: jspb.Message.getFieldWithDefault(msg, 10000, 0),
    value: (f = msg.getValue()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    keyVariable: (f = msg.getKeyVariable()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    commandId: (f = msg.getCommandId()) && dstore_values_pb.integerValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row;
  return proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10000:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRowId(value);
      break;
    case 10001:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 10002:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setKeyVariable(value);
      break;
    case 10003:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommandId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getValue();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getKeyVariable();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getCommandId();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.stringValue value = 10001;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.getValue = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10001));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.setValue = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.clearValue = function() {
  this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.hasValue = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.stringValue key_variable = 10002;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.getKeyVariable = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10002));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.setKeyVariable = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.clearKeyVariable = function() {
  this.setKeyVariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.hasKeyVariable = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.integerValue command_id = 10003;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.getCommandId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10003));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.setCommandId = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.clearCommandId = function() {
  this.setCommandId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.ac_GetCommandSettings_Ad.Response.Row.prototype.hasCommandId = function() {
  return jspb.Message.getField(this, 10003) != null;
};


goog.object.extend(exports, proto.dstore.engine.ac_GetCommandSettings_Ad);
