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
goog.exportSymbol('proto.dstore.engine.co_DeleteMessage_Pu.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.co_DeleteMessage_Pu.Response', null, global);
goog.exportSymbol('proto.dstore.engine.co_DeleteMessage_Pu.Response.Row', null, global);

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
proto.dstore.engine.co_DeleteMessage_Pu.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_DeleteMessage_Pu.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_DeleteMessage_Pu.Parameters.displayName = 'proto.dstore.engine.co_DeleteMessage_Pu.Parameters';
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
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_DeleteMessage_Pu.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageDateAndTime: (f = msg.getMessageDateAndTime()) && dstore_values_pb.timestampValue.toObject(includeInstance, f),
    messageDateAndTimeNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    fromCommunityMemberId: (f = msg.getFromCommunityMemberId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    fromCommunityMemberIdNull: jspb.Message.getFieldWithDefault(msg, 1002, false),
    uniqueId: (f = msg.getUniqueId()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    uniqueIdNull: jspb.Message.getFieldWithDefault(msg, 1003, false),
    personIdentificationValues: (f = msg.getPersonIdentificationValues()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    personIdentificationValuesNull: jspb.Message.getFieldWithDefault(msg, 1004, false),
    communityId: (f = msg.getCommunityId()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    communityIdNull: jspb.Message.getFieldWithDefault(msg, 1005, false),
    messageNo: (f = msg.getMessageNo()) && dstore_values_pb.integerValue.toObject(includeInstance, f),
    messageNoNull: jspb.Message.getFieldWithDefault(msg, 1006, false),
    separatorInIdentVals: (f = msg.getSeparatorInIdentVals()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    separatorInIdentValsNull: jspb.Message.getFieldWithDefault(msg, 1007, false)
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
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Parameters}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_DeleteMessage_Pu.Parameters;
  return proto.dstore.engine.co_DeleteMessage_Pu.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Parameters}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.timestampValue;
      reader.readMessage(value,dstore_values_pb.timestampValue.deserializeBinaryFromReader);
      msg.setMessageDateAndTime(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMessageDateAndTimeNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setFromCommunityMemberId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFromCommunityMemberIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setUniqueId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUniqueIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setPersonIdentificationValues(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdentificationValuesNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setCommunityId(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCommunityIdNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.integerValue;
      reader.readMessage(value,dstore_values_pb.integerValue.deserializeBinaryFromReader);
      msg.setMessageNo(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMessageNoNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setSeparatorInIdentVals(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSeparatorInIdentValsNull(value);
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
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMessageDateAndTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.timestampValue.serializeBinaryToWriter
    );
  }
  f = this.getMessageDateAndTimeNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getFromCommunityMemberId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getFromCommunityMemberIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getUniqueId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getUniqueIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getPersonIdentificationValues();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdentificationValuesNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getCommunityId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getCommunityIdNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getMessageNo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.integerValue.serializeBinaryToWriter
    );
  }
  f = this.getMessageNoNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getSeparatorInIdentVals();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getSeparatorInIdentValsNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
};


/**
 * optional dstore.values.timestampValue message_date_and_time = 1;
 * @return {?proto.dstore.values.timestampValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getMessageDateAndTime = function() {
  return /** @type{?proto.dstore.values.timestampValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.timestampValue, 1));
};


/** @param {?proto.dstore.values.timestampValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setMessageDateAndTime = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearMessageDateAndTime = function() {
  this.setMessageDateAndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasMessageDateAndTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool message_date_and_time_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getMessageDateAndTimeNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setMessageDateAndTimeNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.integerValue from_community_member_id = 2;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getFromCommunityMemberId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 2));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setFromCommunityMemberId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearFromCommunityMemberId = function() {
  this.setFromCommunityMemberId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasFromCommunityMemberId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool from_community_member_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getFromCommunityMemberIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setFromCommunityMemberIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.stringValue unique_id = 3;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getUniqueId = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 3));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setUniqueId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearUniqueId = function() {
  this.setUniqueId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasUniqueId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool unique_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getUniqueIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1003, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setUniqueIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.stringValue person_identification_values = 4;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getPersonIdentificationValues = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 4));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setPersonIdentificationValues = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearPersonIdentificationValues = function() {
  this.setPersonIdentificationValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasPersonIdentificationValues = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool person_identification_values_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getPersonIdentificationValuesNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1004, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setPersonIdentificationValuesNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.integerValue community_id = 5;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getCommunityId = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 5));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setCommunityId = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearCommunityId = function() {
  this.setCommunityId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasCommunityId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool community_id_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getCommunityIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1005, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setCommunityIdNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.integerValue message_no = 6;
 * @return {?proto.dstore.values.integerValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getMessageNo = function() {
  return /** @type{?proto.dstore.values.integerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.integerValue, 6));
};


/** @param {?proto.dstore.values.integerValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setMessageNo = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearMessageNo = function() {
  this.setMessageNo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasMessageNo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool message_no_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getMessageNoNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1006, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setMessageNoNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.stringValue separator_in_ident_vals = 7;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getSeparatorInIdentVals = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 7));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setSeparatorInIdentVals = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.clearSeparatorInIdentVals = function() {
  this.setSeparatorInIdentVals(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.hasSeparatorInIdentVals = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool separator_in_ident_vals_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.getSeparatorInIdentValsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1007, false));
};


/** @param {boolean} value */
proto.dstore.engine.co_DeleteMessage_Pu.Parameters.prototype.setSeparatorInIdentValsNull = function(value) {
  jspb.Message.setField(this, 1007, value);
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
proto.dstore.engine.co_DeleteMessage_Pu.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.co_DeleteMessage_Pu.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.co_DeleteMessage_Pu.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_DeleteMessage_Pu.Response.displayName = 'proto.dstore.engine.co_DeleteMessage_Pu.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_DeleteMessage_Pu.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Response}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_DeleteMessage_Pu.Response;
  return proto.dstore.engine.co_DeleteMessage_Pu.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Response}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.co_DeleteMessage_Pu.Response.Row;
      reader.readMessage(value,proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row>}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.co_DeleteMessage_Pu.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row>} value */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.co_DeleteMessage_Pu.Response.Row, opt_index);
};


proto.dstore.engine.co_DeleteMessage_Pu.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.co_DeleteMessage_Pu.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.displayName = 'proto.dstore.engine.co_DeleteMessage_Pu.Response.Row';
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
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.co_DeleteMessage_Pu.Response.Row;
  return proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.co_DeleteMessage_Pu.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.co_DeleteMessage_Pu.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.co_DeleteMessage_Pu);
