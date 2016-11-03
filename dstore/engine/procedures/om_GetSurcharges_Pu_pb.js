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
goog.exportSymbol('proto.dstore.engine.om_GetSurcharges_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetSurcharges_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetSurcharges_Pu.Response.Row', null, global);

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
proto.dstore.engine.om_GetSurcharges_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetSurcharges_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSurcharges_Pu.Parameters.displayName = 'proto.dstore.engine.om_GetSurcharges_Pu.Parameters';
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
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSurcharges_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeIds: (f = msg.getNodeIds()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    nodeIdsNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    currencyId: (f = msg.getCurrencyId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    currencyIdNull: jspb.Message.getFieldWithDefault(msg, 1002, false),
    personId: (f = msg.getPersonId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    personIdNull: jspb.Message.getFieldWithDefault(msg, 1003, false)
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
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Parameters}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSurcharges_Pu.Parameters;
  return proto.dstore.engine.om_GetSurcharges_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Parameters}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setNodeIds(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNodeIdsNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCurrencyId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrencyIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setPersonId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdNull(value);
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
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getNodeIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getNodeIdsNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getCurrencyId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCurrencyIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getPersonId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
};


/**
 * optional dstore.values.stringValue node_ids = 1;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getNodeIds = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 1));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setNodeIds = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.clearNodeIds = function() {
  this.setNodeIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.hasNodeIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool node_ids_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getNodeIdsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setNodeIdsNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue currency_id = 2;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getCurrencyId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setCurrencyId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.clearCurrencyId = function() {
  this.setCurrencyId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.hasCurrencyId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool currency_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getCurrencyIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setCurrencyIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.integerValue person_id = 3;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getPersonId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 3));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setPersonId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.clearPersonId = function() {
  this.setPersonId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.hasPersonId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool person_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.getPersonIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1003, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_GetSurcharges_Pu.Parameters.prototype.setPersonIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
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
proto.dstore.engine.om_GetSurcharges_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetSurcharges_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetSurcharges_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSurcharges_Pu.Response.displayName = 'proto.dstore.engine.om_GetSurcharges_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSurcharges_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Response}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSurcharges_Pu.Response;
  return proto.dstore.engine.om_GetSurcharges_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Response}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_GetSurcharges_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row>}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetSurcharges_Pu.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row>} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.om_GetSurcharges_Pu.Response.Row, opt_index);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetSurcharges_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.displayName = 'proto.dstore.engine.om_GetSurcharges_Pu.Response.Row';
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
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: jspb.Message.getFieldWithDefault(msg, 10000, 0),
    relative: (f = msg.getRelative()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    unitId: (f = msg.getUnitId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    brutto: (f = msg.getBrutto()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    nodeId: (f = msg.getNodeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    unitSymbol: (f = msg.getUnitSymbol()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    surchargeTypeDescription: (f = msg.getSurchargeTypeDescription()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    surchargeValue: (f = msg.getSurchargeValue()) && dstore_values_pb.decimalValue.toObject(includeInstance, f),
    surchargeTypeId: (f = msg.getSurchargeTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetSurcharges_Pu.Response.Row;
  return proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setRelative(value);
      break;
    case 10002:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setUnitId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setBrutto(value);
      break;
    case 10004:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setNodeId(value);
      break;
    case 10005:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setUnitSymbol(value);
      break;
    case 10006:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setSurchargeTypeDescription(value);
      break;
    case 10007:
      var value = new dstore_values_pb.decimalValue;
      reader.readMessage(value,dstore_values_pb.decimalValue.deserializeBinaryFromReader);
      msg.setSurchargeValue(value);
      break;
    case 10008:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setSurchargeTypeId(value);
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
 * @param {!proto.dstore.engine.om_GetSurcharges_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getRelative();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getUnitId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getBrutto();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
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
  f = this.getUnitSymbol();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getSurchargeTypeDescription();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getSurchargeValue();
  if (f != null) {
    writer.writeMessage(
      10007,
      f,
      dstore_values_pb.decimalValue.serializeBinaryToWriter
    );
  }
  f = this.getSurchargeTypeId();
  if (f != null) {
    writer.writeMessage(
      10008,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.booleanValue relative = 10001;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getRelative = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10001));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setRelative = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearRelative = function() {
  this.setRelative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasRelative = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.integerValue unit_id = 10002;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getUnitId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10002));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setUnitId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearUnitId = function() {
  this.setUnitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasUnitId = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.booleanValue brutto = 10003;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getBrutto = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10003));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setBrutto = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearBrutto = function() {
  this.setBrutto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasBrutto = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.integerValue node_id = 10004;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getNodeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10004));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setNodeId = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearNodeId = function() {
  this.setNodeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasNodeId = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.stringValue unit_symbol = 10005;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getUnitSymbol = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10005));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setUnitSymbol = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearUnitSymbol = function() {
  this.setUnitSymbol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasUnitSymbol = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.stringValue surcharge_type_description = 10006;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getSurchargeTypeDescription = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10006));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setSurchargeTypeDescription = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearSurchargeTypeDescription = function() {
  this.setSurchargeTypeDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasSurchargeTypeDescription = function() {
  return jspb.Message.getField(this, 10006) != null;
};


/**
 * optional dstore.values.decimalValue surcharge_value = 10007;
 * @return {?proto.dstore.values.decimalValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getSurchargeValue = function() {
  return /** @type{?proto.dstore.values.decimalValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.decimalValue, 10007));
};


/** @param {?proto.dstore.values.decimalValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setSurchargeValue = function(value) {
  jspb.Message.setWrapperField(this, 10007, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearSurchargeValue = function() {
  this.setSurchargeValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasSurchargeValue = function() {
  return jspb.Message.getField(this, 10007) != null;
};


/**
 * optional dstore.values.integerValue surcharge_type_id = 10008;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.getSurchargeTypeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10008));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.setSurchargeTypeId = function(value) {
  jspb.Message.setWrapperField(this, 10008, value);
};


proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.clearSurchargeTypeId = function() {
  this.setSurchargeTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_GetSurcharges_Pu.Response.Row.prototype.hasSurchargeTypeId = function() {
  return jspb.Message.getField(this, 10008) != null;
};


goog.object.extend(exports, proto.dstore.engine.om_GetSurcharges_Pu);
