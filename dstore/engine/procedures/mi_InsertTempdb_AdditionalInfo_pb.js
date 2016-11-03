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
goog.exportSymbol('proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response', null, global);
goog.exportSymbol('proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row', null, global);

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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.displayName = 'proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters';
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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableIdList: (f = msg.getTableIdList()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    tableIdListNull: jspb.Message.getFieldWithDefault(msg, 1001, false),
    tableKeyIdList: (f = msg.getTableKeyIdList()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    tableKeyIdListNull: jspb.Message.getFieldWithDefault(msg, 1002, false),
    informationTypeIdList: (f = msg.getInformationTypeIdList()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    informationTypeIdListNull: jspb.Message.getFieldWithDefault(msg, 1003, false),
    informationList: (f = msg.getInformationList()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    informationListNull: jspb.Message.getFieldWithDefault(msg, 1004, false),
    pb_delete: (f = msg.getDelete()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    deleteNull: jspb.Message.getFieldWithDefault(msg, 1005, false),
    separator: (f = msg.getSeparator()) && dstore_values_pb.stringValue.toObject(includeInstance, f),
    separatorNull: jspb.Message.getFieldWithDefault(msg, 1006, false),
    checkByteLengthForStrings: (f = msg.getCheckByteLengthForStrings()) && dstore_values_pb.booleanValue.toObject(includeInstance, f),
    checkByteLengthForStringsNull: jspb.Message.getFieldWithDefault(msg, 1007, false)
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
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters;
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setTableIdList(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTableIdListNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setTableKeyIdList(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTableKeyIdListNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setInformationTypeIdList(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInformationTypeIdListNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setInformationList(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInformationListNull(value);
      break;
    case 5:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setDelete(value);
      break;
    case 1005:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleteNull(value);
      break;
    case 6:
      var value = new dstore_values_pb.stringValue;
      reader.readMessage(value,dstore_values_pb.stringValue.deserializeBinaryFromReader);
      msg.setSeparator(value);
      break;
    case 1006:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSeparatorNull(value);
      break;
    case 7:
      var value = new dstore_values_pb.booleanValue;
      reader.readMessage(value,dstore_values_pb.booleanValue.deserializeBinaryFromReader);
      msg.setCheckByteLengthForStrings(value);
      break;
    case 1007:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCheckByteLengthForStringsNull(value);
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
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTableIdList();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getTableIdListNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getTableKeyIdList();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getTableKeyIdListNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getInformationTypeIdList();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getInformationTypeIdListNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getInformationList();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getInformationListNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
  f = this.getDelete();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getDeleteNull();
  if (f) {
    writer.writeBool(
      1005,
      f
    );
  }
  f = this.getSeparator();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      dstore_values_pb.stringValue.serializeBinaryToWriter
    );
  }
  f = this.getSeparatorNull();
  if (f) {
    writer.writeBool(
      1006,
      f
    );
  }
  f = this.getCheckByteLengthForStrings();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      dstore_values_pb.booleanValue.serializeBinaryToWriter
    );
  }
  f = this.getCheckByteLengthForStringsNull();
  if (f) {
    writer.writeBool(
      1007,
      f
    );
  }
};


/**
 * optional dstore.values.stringValue table_id_list = 1;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getTableIdList = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 1));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setTableIdList = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearTableIdList = function() {
  this.setTableIdList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasTableIdList = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool table_id_list_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getTableIdListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1001, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setTableIdListNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.stringValue table_key_id_list = 2;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getTableKeyIdList = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 2));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setTableKeyIdList = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearTableKeyIdList = function() {
  this.setTableKeyIdList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasTableKeyIdList = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool table_key_id_list_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getTableKeyIdListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1002, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setTableKeyIdListNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.stringValue information_type_id_list = 3;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getInformationTypeIdList = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 3));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setInformationTypeIdList = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearInformationTypeIdList = function() {
  this.setInformationTypeIdList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasInformationTypeIdList = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool information_type_id_list_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getInformationTypeIdListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1003, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setInformationTypeIdListNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.stringValue information_list = 4;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getInformationList = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 4));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setInformationList = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearInformationList = function() {
  this.setInformationList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasInformationList = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool information_list_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getInformationListNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1004, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setInformationListNull = function(value) {
  jspb.Message.setField(this, 1004, value);
};


/**
 * optional dstore.values.booleanValue delete = 5;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getDelete = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 5));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setDelete = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearDelete = function() {
  this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool delete_null = 1005;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getDeleteNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1005, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setDeleteNull = function(value) {
  jspb.Message.setField(this, 1005, value);
};


/**
 * optional dstore.values.stringValue separator = 6;
 * @return {?proto.dstore.values.stringValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getSeparator = function() {
  return /** @type{?proto.dstore.values.stringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.stringValue, 6));
};


/** @param {?proto.dstore.values.stringValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setSeparator = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearSeparator = function() {
  this.setSeparator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasSeparator = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool separator_null = 1006;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getSeparatorNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1006, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setSeparatorNull = function(value) {
  jspb.Message.setField(this, 1006, value);
};


/**
 * optional dstore.values.booleanValue check_byte_length_for_strings = 7;
 * @return {?proto.dstore.values.booleanValue}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getCheckByteLengthForStrings = function() {
  return /** @type{?proto.dstore.values.booleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.booleanValue, 7));
};


/** @param {?proto.dstore.values.booleanValue|undefined} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setCheckByteLengthForStrings = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.clearCheckByteLengthForStrings = function() {
  this.setCheckByteLengthForStrings(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.hasCheckByteLengthForStrings = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool check_byte_length_for_strings_null = 1007;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.getCheckByteLengthForStringsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1007, false));
};


/** @param {boolean} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Parameters.prototype.setCheckByteLengthForStringsNull = function(value) {
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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.displayName = 'proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_metainformation_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_message_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response;
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row;
      reader.readMessage(value,proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * repeated dstore.engine.metainformation.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.metainformation.MetaInformation>}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.metainformation.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_metainformation_pb.MetaInformation, 2));
};


/** @param {!Array.<!proto.dstore.engine.metainformation.MetaInformation>} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.engine.metainformation.MetaInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.metainformation.MetaInformation}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.addMetaInformation = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.engine.metainformation.MetaInformation, opt_index);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.message.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.message.Message>}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.message.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_message_pb.Message, 3));
};


/** @param {!Array.<!proto.dstore.engine.message.Message>} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.engine.message.Message=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.message.Message}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.addMessage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.engine.message.Message, opt_index);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row>}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row, 4));
};


/** @param {!Array.<!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row>} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.addRow = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row, opt_index);
};


proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.displayName = 'proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row';
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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.toObject = function(includeInstance, msg) {
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
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row;
  return proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
 * @param {!proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
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
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10000, 0));
};


/** @param {number} value */
proto.dstore.engine.mi_InsertTempdb_AdditionalInfo.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


goog.object.extend(exports, proto.dstore.engine.mi_InsertTempdb_AdditionalInfo);
