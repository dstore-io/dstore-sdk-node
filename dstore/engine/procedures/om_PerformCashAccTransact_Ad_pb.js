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
goog.exportSymbol('proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_PerformCashAccTransact_Ad.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row', null, global);

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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.displayName = 'proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters';
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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    personId: (f = msg.getPersonId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    personIdNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    cashAccountTypeId: (f = msg.getCashAccountTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    cashAccountTypeIdNull: jspb.Message.getFieldWithDefault(msg, 1002, false),
    transactionTypeId: (f = msg.getTransactionTypeId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    transactionTypeIdNull: jspb.Message.getFieldWithDefault(msg, 1003, false),
    transactionValue: (f = msg.getTransactionValue()) && dstore_values_pb.decimalValue.toObject(includeInstance, f),
    transactionValueNull: jspb.Message.getFieldWithDefault(msg, 1004, false),
    transactionComment: (f = msg.getTransactionComment()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    transactionCommentNull: jspb.Message.getFieldWithDefault(msg, 1005, false),
    currencyId: (f = msg.getCurrencyId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    currencyIdNull: jspb.Message.getFieldWithDefault(msg, 1006, false),
    suspendUntil: (f = msg.getSuspendUntil()) && dstore_values_pb.timestampValue.toObject(includeInstance, f),
    suspendUntilNull: jspb.Message.getFieldWithDefault(msg, 1007, false),
    internalComment: (f = msg.getInternalComment()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    internalCommentNull: jspb.Message.getFieldWithDefault(msg, 1008, false)
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
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters;
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setPersonId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCashAccountTypeId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCashAccountTypeIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setTransactionTypeId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTransactionTypeIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.decimalValue;
      reader.readMessage(value,dstore_values_pb.decimalValue.deserializeBinaryFromReader);
      msg.setTransactionValue(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTransactionValueNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setTransactionComment(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTransactionCommentNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCurrencyId(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrencyIdNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.timestampValue;
      reader.readMessage(value,dstore_values_pb.timestampValue.deserializeBinaryFromReader);
      msg.setSuspendUntil(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuspendUntilNull(value);
      break;
    case 8:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setInternalComment(value);
      break;
    case 1008:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInternalCommentNull(value);
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
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPersonId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getCashAccountTypeId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCashAccountTypeIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getTransactionTypeId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getTransactionTypeIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getTransactionValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.decimalValue.serializeBinaryToWriter
    );
  }
  f = this.getTransactionValueNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getTransactionComment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getTransactionCommentNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getCurrencyId();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCurrencyIdNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getSuspendUntil();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.timestampValue.serializeBinaryToWriter
    );
  }
  f = this.getSuspendUntilNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
  f = this.getInternalComment();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getInternalCommentNull();
  if (f) {
    writer.writeBool(
      1008,
      f
    );
  }
};


/**
 * optional dstore.values.integerValue person_id = 1;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getPersonId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 1));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setPersonId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearPersonId = function() {
  this.setPersonId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasPersonId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool person_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getPersonIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setPersonIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue cash_account_type_id = 2;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getCashAccountTypeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setCashAccountTypeId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearCashAccountTypeId = function() {
  this.setCashAccountTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasCashAccountTypeId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool cash_account_type_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getCashAccountTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setCashAccountTypeIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.integerValue transaction_type_id = 3;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionTypeId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 3));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionTypeId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearTransactionTypeId = function() {
  this.setTransactionTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasTransactionTypeId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool transaction_type_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1003, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionTypeIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.decimalValue transaction_value = 4;
 * @return {?proto.dstore.values.decimalValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionValue = function() {
  return /** @type{?proto.dstore.values.decimalValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.decimalValue, 4));
};


/** @param {?proto.dstore.values.decimalValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionValue = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearTransactionValue = function() {
  this.setTransactionValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasTransactionValue = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool transaction_value_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionValueNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1004, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionValueNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.stringValue transaction_comment = 5;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionComment = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 5));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionComment = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearTransactionComment = function() {
  this.setTransactionComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasTransactionComment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool transaction_comment_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getTransactionCommentNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1005, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setTransactionCommentNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.integerValue currency_id = 6;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getCurrencyId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 6));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setCurrencyId = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearCurrencyId = function() {
  this.setCurrencyId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasCurrencyId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool currency_id_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getCurrencyIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1006, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setCurrencyIdNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.timestampValue suspend_until = 7;
 * @return {?proto.dstore.values.timestampValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getSuspendUntil = function() {
  return /** @type{?proto.dstore.values.timestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.timestampValue, 7));
};


/** @param {?proto.dstore.values.timestampValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setSuspendUntil = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearSuspendUntil = function() {
  this.setSuspendUntil(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasSuspendUntil = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool suspend_until_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getSuspendUntilNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1007, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setSuspendUntilNull = function(value) {
  jspb.Message.setField(this, 1007, value);
};


/**
 * optional dstore.values.stringValue internal_comment = 8;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getInternalComment = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 8));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setInternalComment = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.clearInternalComment = function() {
  this.setInternalComment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.hasInternalComment = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool internal_comment_null = 1008;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.getInternalCommentNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1008, false));
};


/** @param {boolean} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Parameters.prototype.setInternalCommentNull = function(value) {
  jspb.Message.setField(this, 1008, value);
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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_PerformCashAccTransact_Ad.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.displayName = 'proto.dstore.engine.om_PerformCashAccTransact_Ad.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_PerformCashAccTransact_Ad.Response;
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row>}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row>} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row, opt_index);
};


proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.displayName = 'proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row';
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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row;
  return proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.om_PerformCashAccTransact_Ad.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.om_PerformCashAccTransact_Ad);
