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
goog.exportSymbol('proto.dstore.engine.im_GetRootNodes_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.im_GetRootNodes_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.im_GetRootNodes_Ad.Response.Row', null, global);

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
proto.dstore.engine.im_GetRootNodes_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.im_GetRootNodes_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.im_GetRootNodes_Ad.Parameters.displayName = 'proto.dstore.engine.im_GetRootNodes_Ad.Parameters';
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
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.im_GetRootNodes_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    onlyActive: (f = msg.getOnlyActive()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    onlyActiveNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    onlyNotDeleted: (f = msg.getOnlyNotDeleted()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    onlyNotDeletedNull: jspb.Message.getFieldWithDefault(msg, 1002, false)
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
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Parameters}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.im_GetRootNodes_Ad.Parameters;
  return proto.dstore.engine.im_GetRootNodes_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Parameters}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setOnlyActive(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyActiveNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setOnlyNotDeleted(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyNotDeletedNull(value);
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
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getOnlyActive();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getOnlyActiveNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getOnlyNotDeleted();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getOnlyNotDeletedNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
};


/**
 * optional dstore.values.booleanValue only_active = 1;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.getOnlyActive = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 1));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.setOnlyActive = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.clearOnlyActive = function() {
  this.setOnlyActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.hasOnlyActive = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool only_active_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.getOnlyActiveNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.setOnlyActiveNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.booleanValue only_not_deleted = 2;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.getOnlyNotDeleted = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 2));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.setOnlyNotDeleted = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.clearOnlyNotDeleted = function() {
  this.setOnlyNotDeleted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.hasOnlyNotDeleted = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool only_not_deleted_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.getOnlyNotDeletedNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.im_GetRootNodes_Ad.Parameters.prototype.setOnlyNotDeletedNull = function(value) {
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
proto.dstore.engine.im_GetRootNodes_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.im_GetRootNodes_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.im_GetRootNodes_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.im_GetRootNodes_Ad.Response.displayName = 'proto.dstore.engine.im_GetRootNodes_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.im_GetRootNodes_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Response}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.im_GetRootNodes_Ad.Response;
  return proto.dstore.engine.im_GetRootNodes_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Response}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.im_GetRootNodes_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row>}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.im_GetRootNodes_Ad.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row>} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.im_GetRootNodes_Ad.Response.Row, opt_index);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.im_GetRootNodes_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.displayName = 'proto.dstore.engine.im_GetRootNodes_Ad.Response.Row';
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
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: jspb.Message.getFieldWithDefault(msg, 10000, 0),
    nodeDescription: (f = msg.getNodeDescription()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    active: (f = msg.getActive()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    levelNo: (f = msg.getLevelNo()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    nodeId: (f = msg.getNodeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    treeNodeId: (f = msg.getTreeNodeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    countSuccessors: (f = msg.getCountSuccessors()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    sortNo: (f = msg.getSortNo()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    inheritsFrom: (f = msg.getInheritsFrom()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    symbolId: (f = msg.getSymbolId()) && dstore_values_pb.integerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.im_GetRootNodes_Ad.Response.Row;
  return proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setNodeDescription(value);
      break;
    case 10002:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setActive(value);
      break;
    case 10003:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setLevelNo(value);
      break;
    case 10004:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setNodeId(value);
      break;
    case 10005:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setTreeNodeId(value);
      break;
    case 10006:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCountSuccessors(value);
      break;
    case 10007:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setSortNo(value);
      break;
    case 10008:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setInheritsFrom(value);
      break;
    case 10009:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setSymbolId(value);
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
 * @param {!proto.dstore.engine.im_GetRootNodes_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getNodeDescription();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getActive();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getLevelNo();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getNodeId();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getTreeNodeId();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCountSuccessors();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getSortNo();
  if (f != null) {
    writer.writeMessage(
      10007,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getInheritsFrom();
  if (f != null) {
    writer.writeMessage(
      10008,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getSymbolId();
  if (f != null) {
    writer.writeMessage(
      10009,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.stringValue node_description = 10001;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getNodeDescription = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10001));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setNodeDescription = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearNodeDescription = function() {
  this.setNodeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasNodeDescription = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.booleanValue active = 10002;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getActive = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10002));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setActive = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearActive = function() {
  this.setActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasActive = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.integerValue level_no = 10003;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getLevelNo = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10003));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setLevelNo = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearLevelNo = function() {
  this.setLevelNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasLevelNo = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.integerValue node_id = 10004;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getNodeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10004));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setNodeId = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearNodeId = function() {
  this.setNodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasNodeId = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.integerValue tree_node_id = 10005;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getTreeNodeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10005));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setTreeNodeId = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearTreeNodeId = function() {
  this.setTreeNodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasTreeNodeId = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.integerValue count_successors = 10006;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getCountSuccessors = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10006));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setCountSuccessors = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearCountSuccessors = function() {
  this.setCountSuccessors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasCountSuccessors = function() {
  return jspb.Message.getField(this, 10006) != null;
};


/**
 * optional dstore.values.integerValue sort_no = 10007;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getSortNo = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10007));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setSortNo = function(value) {
  jspb.Message.setWrapperField(this, 10007, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearSortNo = function() {
  this.setSortNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasSortNo = function() {
  return jspb.Message.getField(this, 10007) != null;
};


/**
 * optional dstore.values.integerValue inherits_from = 10008;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getInheritsFrom = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10008));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setInheritsFrom = function(value) {
  jspb.Message.setWrapperField(this, 10008, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearInheritsFrom = function() {
  this.setInheritsFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasInheritsFrom = function() {
  return jspb.Message.getField(this, 10008) != null;
};


/**
 * optional dstore.values.integerValue symbol_id = 10009;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.getSymbolId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10009));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.setSymbolId = function(value) {
  jspb.Message.setWrapperField(this, 10009, value);
};


proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.clearSymbolId = function() {
  this.setSymbolId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.im_GetRootNodes_Ad.Response.Row.prototype.hasSymbolId = function() {
  return jspb.Message.getField(this, 10009) != null;
};


goog.object.extend(exports, proto.dstore.engine.im_GetRootNodes_Ad);
