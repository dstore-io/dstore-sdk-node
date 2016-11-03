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
goog.exportSymbol('proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row', null, global);

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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.displayName = 'proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters';
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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromUnitId: (f = msg.getFromUnitId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    fromUnitIdNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    toUnitId: (f = msg.getToUnitId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    toUnitIdNull: jspb.Message.getFieldWithDefault(msg, 1002, false),
    convertFactor: (f = msg.getConvertFactor()) && dstore_values_pb.decimalValue.toObject(includeInstance, f),
    convertFactorNull: jspb.Message.getFieldWithDefault(msg, 1003, false),
    fromDate: (f = msg.getFromDate()) && dstore_values_pb.timestampValue.toObject(includeInstance, f),
    fromDateNull: jspb.Message.getFieldWithDefault(msg, 1004, false),
    toDate: (f = msg.getToDate()) && dstore_values_pb.timestampValue.toObject(includeInstance, f),
    toDateNull: jspb.Message.getFieldWithDefault(msg, 1005, false),
    dateIndependent: (f = msg.getDateIndependent()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    dateIndependentNull: jspb.Message.getFieldWithDefault(msg, 1006, false)
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
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters;
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setFromUnitId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromUnitIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setToUnitId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setToUnitIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.decimalValue;
      reader.readMessage(value,dstore_values_pb.decimalValue.deserializeBinaryFromReader);
      msg.setConvertFactor(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConvertFactorNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.timestampValue;
      reader.readMessage(value,dstore_values_pb.timestampValue.deserializeBinaryFromReader);
      msg.setFromDate(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromDateNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.timestampValue;
      reader.readMessage(value,dstore_values_pb.timestampValue.deserializeBinaryFromReader);
      msg.setToDate(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setToDateNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setDateIndependent(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDateIndependentNull(value);
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
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFromUnitId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getFromUnitIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getToUnitId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getToUnitIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getConvertFactor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.decimalValue.serializeBinaryToWriter
    );
  }
  f = this.getConvertFactorNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getFromDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.timestampValue.serializeBinaryToWriter
    );
  }
  f = this.getFromDateNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getToDate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.timestampValue.serializeBinaryToWriter
    );
  }
  f = this.getToDateNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getDateIndependent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDateIndependentNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
};


/**
 * optional dstore.values.integerValue from_unit_id = 1;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getFromUnitId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setFromUnitId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearFromUnitId = function() {
  this.setFromUnitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasFromUnitId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool from_unit_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getFromUnitIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setFromUnitIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue to_unit_id = 2;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getToUnitId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setToUnitId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearToUnitId = function() {
  this.setToUnitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasToUnitId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool to_unit_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getToUnitIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setToUnitIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.decimalValue convert_factor = 3;
 * @return {?proto.dstore.values.decimalValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getConvertFactor = function() {
  return /** @type{?proto.dstore.values.decimalValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.decimalValue, 3));
};


/** @param {?proto.dstore.values.decimalValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setConvertFactor = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearConvertFactor = function() {
  this.setConvertFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasConvertFactor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool convert_factor_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getConvertFactorNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1003, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setConvertFactorNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.timestampValue from_date = 4;
 * @return {?proto.dstore.values.timestampValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getFromDate = function() {
  return /** @type{?proto.dstore.values.timestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.timestampValue, 4));
};


/** @param {?proto.dstore.values.timestampValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setFromDate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearFromDate = function() {
  this.setFromDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasFromDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool from_date_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getFromDateNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1004, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setFromDateNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.timestampValue to_date = 5;
 * @return {?proto.dstore.values.timestampValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getToDate = function() {
  return /** @type{?proto.dstore.values.timestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.timestampValue, 5));
};


/** @param {?proto.dstore.values.timestampValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setToDate = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearToDate = function() {
  this.setToDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasToDate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool to_date_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getToDateNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1005, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setToDateNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.booleanValue date_independent = 6;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getDateIndependent = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 6));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setDateIndependent = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.clearDateIndependent = function() {
  this.setDateIndependent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.hasDateIndependent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool date_independent_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.getDateIndependentNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1006, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Parameters.prototype.setDateIndependentNull = function(value) {
  jspb.Message.setField(this, 1006, value);
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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.displayName = 'proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response;
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row>}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row>} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row, opt_index);
};


proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.displayName = 'proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row';
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
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: jspb.Message.getFieldWithDefault(msg, 10000, 0)
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
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row;
  return proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.mi_ModifyUnitConverts_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.mi_ModifyUnitConverts_Ad);
