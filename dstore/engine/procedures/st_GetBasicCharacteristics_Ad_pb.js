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
goog.exportSymbol('proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row', null, global);

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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.displayName = 'proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters';
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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    basicCharacteristicNumber: (f = msg.getBasicCharacteristicNumber()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    basicCharacteristicNumberNull: jspb.Message.getFieldWithDefault(msg, 1001, false)
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
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters;
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setBasicCharacteristicNumber(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBasicCharacteristicNumberNull(value);
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
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getBasicCharacteristicNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getBasicCharacteristicNumberNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
};


/**
 * optional dstore.values.integerValue basic_characteristic_number = 1;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.getBasicCharacteristicNumber = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.setBasicCharacteristicNumber = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.clearBasicCharacteristicNumber = function() {
  this.setBasicCharacteristicNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.hasBasicCharacteristicNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool basic_characteristic_number_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.getBasicCharacteristicNumberNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Parameters.prototype.setBasicCharacteristicNumberNull = function(value) {
  jspb.Message.setField(this, 1001, value);
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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.displayName = 'proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response;
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row>}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row>} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row, opt_index);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.displayName = 'proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row';
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
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: jspb.Message.getFieldWithDefault(msg, 10000, 0),
    evaluateForPersons: (f = msg.getEvaluateForPersons()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    evaluateForNodes: (f = msg.getEvaluateForNodes()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    description: (f = msg.getDescription()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    basicCharacteristic: (f = msg.getBasicCharacteristic()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    personIdRequired: (f = msg.getPersonIdRequired()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    basicCharacteristicNumber: (f = msg.getBasicCharacteristicNumber()) && dstore_values_pb.integerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row;
  return proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setEvaluateForPersons(value);
      break;
    case 10002:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setEvaluateForNodes(value);
      break;
    case 10003:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 10004:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setBasicCharacteristic(value);
      break;
    case 10005:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setPersonIdRequired(value);
      break;
    case 10006:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setBasicCharacteristicNumber(value);
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
 * @param {!proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getEvaluateForPersons();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getEvaluateForNodes();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDescription();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getBasicCharacteristic();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdRequired();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getBasicCharacteristicNumber();
  if (f != null) {
    writer.writeMessage(
      10006,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.booleanValue evaluate_for_persons = 10001;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getEvaluateForPersons = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10001));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setEvaluateForPersons = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearEvaluateForPersons = function() {
  this.setEvaluateForPersons(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasEvaluateForPersons = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.booleanValue evaluate_for_nodes = 10002;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getEvaluateForNodes = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10002));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setEvaluateForNodes = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearEvaluateForNodes = function() {
  this.setEvaluateForNodes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasEvaluateForNodes = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.stringValue description = 10003;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getDescription = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10003));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setDescription = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearDescription = function() {
  this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.stringValue basic_characteristic = 10004;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getBasicCharacteristic = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 10004));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setBasicCharacteristic = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearBasicCharacteristic = function() {
  this.setBasicCharacteristic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasBasicCharacteristic = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.booleanValue person_id_required = 10005;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getPersonIdRequired = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 10005));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setPersonIdRequired = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearPersonIdRequired = function() {
  this.setPersonIdRequired(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasPersonIdRequired = function() {
  return jspb.Message.getField(this, 10005) != null;
};


/**
 * optional dstore.values.integerValue basic_characteristic_number = 10006;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.getBasicCharacteristicNumber = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 10006));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.setBasicCharacteristicNumber = function(value) {
  jspb.Message.setWrapperField(this, 10006, value);
};


proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.clearBasicCharacteristicNumber = function() {
  this.setBasicCharacteristicNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.st_GetBasicCharacteristics_Ad.Response.Row.prototype.hasBasicCharacteristicNumber = function() {
  return jspb.Message.getField(this, 10006) != null;
};


goog.object.extend(exports, proto.dstore.engine.st_GetBasicCharacteristics_Ad);
