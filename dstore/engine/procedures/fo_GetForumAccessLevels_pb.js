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
var dstore_engine_engine_pb = require('../../../dstore/engine/engine_pb.js');
goog.exportSymbol('proto.dstore.engine.fo_GetForumAccessLevels.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.fo_GetForumAccessLevels.Response', null, global);
goog.exportSymbol('proto.dstore.engine.fo_GetForumAccessLevels.Response.Row', null, global);

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
proto.dstore.engine.fo_GetForumAccessLevels.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.fo_GetForumAccessLevels.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.fo_GetForumAccessLevels.Parameters.displayName = 'proto.dstore.engine.fo_GetForumAccessLevels.Parameters';
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
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.fo_GetForumAccessLevels.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.fo_GetForumAccessLevels.Parameters;
  return proto.dstore.engine.fo_GetForumAccessLevels.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters} The clone.
 */
proto.dstore.engine.fo_GetForumAccessLevels.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.fo_GetForumAccessLevels.Parameters} */ (jspb.Message.cloneMessage(this));
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
proto.dstore.engine.fo_GetForumAccessLevels.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.fo_GetForumAccessLevels.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.fo_GetForumAccessLevels.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.fo_GetForumAccessLevels.Response.displayName = 'proto.dstore.engine.fo_GetForumAccessLevels.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.fo_GetForumAccessLevels.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.fo_GetForumAccessLevels.Response;
  return proto.dstore.engine.fo_GetForumAccessLevels.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new dstore_engine_engine_pb.MetaInformation;
      reader.readMessage(value,dstore_engine_engine_pb.MetaInformation.deserializeBinaryFromReader);
      msg.getMetaInformationList().push(value);
      msg.setMetaInformationList(msg.getMetaInformationList());
      break;
    case 3:
      var value = new dstore_engine_engine_pb.Message;
      reader.readMessage(value,dstore_engine_engine_pb.Message.deserializeBinaryFromReader);
      msg.getMessageList().push(value);
      msg.setMessageList(msg.getMessageList());
      break;
    case 4:
      var value = new proto.dstore.engine.fo_GetForumAccessLevels.Response.Row;
      reader.readMessage(value,proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.deserializeBinaryFromReader);
      msg.getRowList().push(value);
      msg.setRowList(msg.getRowList());
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
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMetaInformationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      dstore_engine_engine_pb.MetaInformation.serializeBinaryToWriter
    );
  }
  f = this.getMessageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      dstore_engine_engine_pb.Message.serializeBinaryToWriter
    );
  }
  f = this.getRowList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response} The clone.
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.fo_GetForumAccessLevels.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row>}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.fo_GetForumAccessLevels.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row>} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.fo_GetForumAccessLevels.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.fo_GetForumAccessLevels.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.displayName = 'proto.dstore.engine.fo_GetForumAccessLevels.Response.Row';
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
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    accessLevelId: (f = msg.getAccessLevelId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    description: (f = msg.getDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.fo_GetForumAccessLevels.Response.Row;
  return proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setAccessLevelId(value);
      break;
    case 10002:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
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
 * @param {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getAccessLevelId();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getDescription();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row} The clone.
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.fo_GetForumAccessLevels.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.IntegerValue access_level_id = 10001;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.getAccessLevelId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10001));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.setAccessLevelId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.clearAccessLevelId = function() {
  this.setAccessLevelId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.hasAccessLevelId = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.StringValue description = 10002;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.getDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10002));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.setDescription = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.clearDescription = function() {
  this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.fo_GetForumAccessLevels.Response.Row.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 10002) != null;
};


goog.object.extend(exports, proto.dstore.engine.fo_GetForumAccessLevels);
