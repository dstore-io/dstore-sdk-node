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
goog.exportSymbol('proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row', null, global);

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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.displayName = 'proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters';
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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    visitorOrOrderId: (f = msg.getVisitorOrOrderId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    visitorOrOrderIdNull: msg.getVisitorOrOrderIdNull(),
    isOrderId: (f = msg.getIsOrderId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    isOrderIdNull: msg.getIsOrderIdNull(),
    voucherCode: (f = msg.getVoucherCode()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    voucherCodeNull: msg.getVoucherCodeNull(),
    fromValidationDateAndTime: (f = msg.getFromValidationDateAndTime()) && dstore_values_pb.TimestampValue.toObject(includeInstance, f),
    fromValidationDateAndTimeNull: msg.getFromValidationDateAndTimeNull(),
    toValidationDateAndTime: (f = msg.getToValidationDateAndTime()) && dstore_values_pb.TimestampValue.toObject(includeInstance, f),
    toValidationDateAndTimeNull: msg.getToValidationDateAndTimeNull()
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
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters;
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setVisitorOrOrderId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVisitorOrOrderIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setIsOrderId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOrderIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setVoucherCode(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVoucherCodeNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.TimestampValue;
      reader.readMessage(value,dstore_values_pb.TimestampValue.deserializeBinaryFromReader);
      msg.setFromValidationDateAndTime(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromValidationDateAndTimeNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.TimestampValue;
      reader.readMessage(value,dstore_values_pb.TimestampValue.deserializeBinaryFromReader);
      msg.setToValidationDateAndTime(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setToValidationDateAndTimeNull(value);
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
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVisitorOrOrderId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getVisitorOrOrderIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getIsOrderId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getIsOrderIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getVoucherCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getVoucherCodeNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getFromValidationDateAndTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.TimestampValue.serializeBinaryToWriter
    );
  }
  f = this.getFromValidationDateAndTimeNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getToValidationDateAndTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.TimestampValue.serializeBinaryToWriter
    );
  }
  f = this.getToValidationDateAndTimeNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters} The clone.
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue visitor_or_order_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getVisitorOrOrderId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setVisitorOrOrderId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.clearVisitorOrOrderId = function() {
  this.setVisitorOrOrderId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.hasVisitorOrOrderId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool visitor_or_order_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getVisitorOrOrderIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setVisitorOrOrderIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue is_order_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getIsOrderId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setIsOrderId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.clearIsOrderId = function() {
  this.setIsOrderId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.hasIsOrderId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool is_order_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getIsOrderIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setIsOrderIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.StringValue voucher_code = 3;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getVoucherCode = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 3));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setVoucherCode = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.clearVoucherCode = function() {
  this.setVoucherCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.hasVoucherCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool voucher_code_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getVoucherCodeNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setVoucherCodeNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.TimestampValue from_validation_date_and_time = 4;
 * @return {proto.dstore.values.TimestampValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getFromValidationDateAndTime = function() {
  return /** @type{proto.dstore.values.TimestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.TimestampValue, 4));
};


/** @param {proto.dstore.values.TimestampValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setFromValidationDateAndTime = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.clearFromValidationDateAndTime = function() {
  this.setFromValidationDateAndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.hasFromValidationDateAndTime = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool from_validation_date_and_time_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getFromValidationDateAndTimeNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setFromValidationDateAndTimeNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.TimestampValue to_validation_date_and_time = 5;
 * @return {proto.dstore.values.TimestampValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getToValidationDateAndTime = function() {
  return /** @type{proto.dstore.values.TimestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.TimestampValue, 5));
};


/** @param {proto.dstore.values.TimestampValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setToValidationDateAndTime = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.clearToValidationDateAndTime = function() {
  this.setToValidationDateAndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.hasToValidationDateAndTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool to_validation_date_and_time_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.getToValidationDateAndTimeNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1005, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Parameters.prototype.setToValidationDateAndTimeNull = function(value) {
  jspb.Message.setField(this, 1005, value);
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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.displayName = 'proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response;
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response} The clone.
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row>}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row>} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.displayName = 'proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row';
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
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    voucherCode: (f = msg.getVoucherCode()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    personId: (f = msg.getPersonId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    lastValidationDateAndTime: (f = msg.getLastValidationDateAndTime()) && dstore_values_pb.TimestampValue.toObject(includeInstance, f),
    visitorOrOrderId: (f = msg.getVisitorOrOrderId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    isOrderId: (f = msg.getIsOrderId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row;
  return proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setVoucherCode(value);
      break;
    case 10002:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setPersonId(value);
      break;
    case 10003:
      var value = new dstore_values_pb.TimestampValue;
      reader.readMessage(value,dstore_values_pb.TimestampValue.deserializeBinaryFromReader);
      msg.setLastValidationDateAndTime(value);
      break;
    case 10004:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setVisitorOrOrderId(value);
      break;
    case 10005:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setIsOrderId(value);
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
 * @param {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getVoucherCode();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonId();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getLastValidationDateAndTime();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.TimestampValue.serializeBinaryToWriter
    );
  }
  f = this.getVisitorOrOrderId();
  if (f != null) {
    writer.writeMessage(
      10004,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getIsOrderId();
  if (f != null) {
    writer.writeMessage(
      10005,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row} The clone.
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.StringValue voucher_code = 10001;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getVoucherCode = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10001));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setVoucherCode = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.clearVoucherCode = function() {
  this.setVoucherCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.hasVoucherCode = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.IntegerValue person_id = 10002;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getPersonId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10002));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setPersonId = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.clearPersonId = function() {
  this.setPersonId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.hasPersonId = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.TimestampValue last_validation_date_and_time = 10003;
 * @return {proto.dstore.values.TimestampValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getLastValidationDateAndTime = function() {
  return /** @type{proto.dstore.values.TimestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.TimestampValue, 10003));
};


/** @param {proto.dstore.values.TimestampValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setLastValidationDateAndTime = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.clearLastValidationDateAndTime = function() {
  this.setLastValidationDateAndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.hasLastValidationDateAndTime = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.IntegerValue visitor_or_order_id = 10004;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getVisitorOrOrderId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10004));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setVisitorOrOrderId = function(value) {
  jspb.Message.setWrapperField(this, 10004, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.clearVisitorOrOrderId = function() {
  this.setVisitorOrOrderId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.hasVisitorOrOrderId = function() {
  return jspb.Message.getField(this, 10004) != null;
};


/**
 * optional dstore.values.IntegerValue is_order_id = 10005;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.getIsOrderId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10005));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.setIsOrderId = function(value) {
  jspb.Message.setWrapperField(this, 10005, value);
};


proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.clearIsOrderId = function() {
  this.setIsOrderId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetUsedVoucherCodes_Ad.Response.Row.prototype.hasIsOrderId = function() {
  return jspb.Message.getField(this, 10005) != null;
};


goog.object.extend(exports, proto.dstore.engine.om_GetUsedVoucherCodes_Ad);
