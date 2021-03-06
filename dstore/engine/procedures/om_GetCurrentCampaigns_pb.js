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
goog.exportSymbol('proto.dstore.engine.om_GetCurrentCampaigns.Parameters', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetCurrentCampaigns.Response', null, global);
goog.exportSymbol('proto.dstore.engine.om_GetCurrentCampaigns.Response.Row', null, global);

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
proto.dstore.engine.om_GetCurrentCampaigns.Parameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetCurrentCampaigns.Parameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetCurrentCampaigns.Parameters.displayName = 'proto.dstore.engine.om_GetCurrentCampaigns.Parameters';
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
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetCurrentCampaigns.Parameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    personId: (f = msg.getPersonId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    personIdNull: msg.getPersonIdNull(),
    paymentTypeId: (f = msg.getPaymentTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    paymentTypeIdNull: msg.getPaymentTypeIdNull(),
    shippingTypeId: (f = msg.getShippingTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    shippingTypeIdNull: msg.getShippingTypeIdNull(),
    getBenefits: (f = msg.getGetBenefits()) && dstore_values_pb.BooleanValue.toObject(includeInstance, f),
    getBenefitsNull: msg.getGetBenefitsNull()
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
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetCurrentCampaigns.Parameters;
  return proto.dstore.engine.om_GetCurrentCampaigns.Parameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setPersonId(value);
      break;
    case 1001:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersonIdNull(value);
      break;
    case 2:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setPaymentTypeId(value);
      break;
    case 1002:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPaymentTypeIdNull(value);
      break;
    case 3:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setShippingTypeId(value);
      break;
    case 1003:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShippingTypeIdNull(value);
      break;
    case 4:
      var value = new dstore_values_pb.BooleanValue;
      reader.readMessage(value,dstore_values_pb.BooleanValue.deserializeBinaryFromReader);
      msg.setGetBenefits(value);
      break;
    case 1004:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGetBenefitsNull(value);
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
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPersonId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getPersonIdNull();
  if (f) {
    writer.writeBool(
      1001,
      f
    );
  }
  f = this.getPaymentTypeId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getPaymentTypeIdNull();
  if (f) {
    writer.writeBool(
      1002,
      f
    );
  }
  f = this.getShippingTypeId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getShippingTypeIdNull();
  if (f) {
    writer.writeBool(
      1003,
      f
    );
  }
  f = this.getGetBenefits();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      dstore_values_pb.BooleanValue.serializeBinaryToWriter
    );
  }
  f = this.getGetBenefitsNull();
  if (f) {
    writer.writeBool(
      1004,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters} The clone.
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetCurrentCampaigns.Parameters} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional dstore.values.IntegerValue person_id = 1;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getPersonId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 1));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setPersonId = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.clearPersonId = function() {
  this.setPersonId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.hasPersonId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool person_id_null = 1001;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getPersonIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1001, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setPersonIdNull = function(value) {
  jspb.Message.setField(this, 1001, value);
};


/**
 * optional dstore.values.IntegerValue payment_type_id = 2;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getPaymentTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 2));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setPaymentTypeId = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.clearPaymentTypeId = function() {
  this.setPaymentTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.hasPaymentTypeId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool payment_type_id_null = 1002;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getPaymentTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1002, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setPaymentTypeIdNull = function(value) {
  jspb.Message.setField(this, 1002, value);
};


/**
 * optional dstore.values.IntegerValue shipping_type_id = 3;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getShippingTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 3));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setShippingTypeId = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.clearShippingTypeId = function() {
  this.setShippingTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.hasShippingTypeId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool shipping_type_id_null = 1003;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getShippingTypeIdNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1003, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setShippingTypeIdNull = function(value) {
  jspb.Message.setField(this, 1003, value);
};


/**
 * optional dstore.values.BooleanValue get_benefits = 4;
 * @return {proto.dstore.values.BooleanValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getGetBenefits = function() {
  return /** @type{proto.dstore.values.BooleanValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.BooleanValue, 4));
};


/** @param {proto.dstore.values.BooleanValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setGetBenefits = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.clearGetBenefits = function() {
  this.setGetBenefits(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.hasGetBenefits = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool get_benefits_null = 1004;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.getGetBenefitsNull = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 1004, false));
};


/** @param {boolean} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Parameters.prototype.setGetBenefitsNull = function(value) {
  jspb.Message.setField(this, 1004, value);
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
proto.dstore.engine.om_GetCurrentCampaigns.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.engine.om_GetCurrentCampaigns.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.engine.om_GetCurrentCampaigns.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetCurrentCampaigns.Response.displayName = 'proto.dstore.engine.om_GetCurrentCampaigns.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.repeatedFields_ = [2,3,4];



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
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetCurrentCampaigns.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    metaInformationList: jspb.Message.toObjectList(msg.getMetaInformationList(),
    dstore_engine_engine_pb.MetaInformation.toObject, includeInstance),
    messageList: jspb.Message.toObjectList(msg.getMessageList(),
    dstore_engine_engine_pb.Message.toObject, includeInstance),
    rowList: jspb.Message.toObjectList(msg.getRowList(),
    proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.toObject, includeInstance)
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
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetCurrentCampaigns.Response;
  return proto.dstore.engine.om_GetCurrentCampaigns.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.dstore.engine.om_GetCurrentCampaigns.Response.Row;
      reader.readMessage(value,proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.deserializeBinaryFromReader);
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
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.serializeBinaryToWriter = function (writer) {
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
      proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response} The clone.
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetCurrentCampaigns.Response} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated dstore.engine.MetaInformation meta_information = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.MetaInformation>}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.getMetaInformationList = function() {
  return /** @type{!Array.<!proto.dstore.engine.MetaInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.MetaInformation, 2));
};


/** @param {Array.<!proto.dstore.engine.MetaInformation>} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.setMetaInformationList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.clearMetaInformationList = function() {
  this.setMetaInformationList([]);
};


/**
 * repeated dstore.engine.Message message = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.Message>}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.getMessageList = function() {
  return /** @type{!Array.<!proto.dstore.engine.Message>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_engine_engine_pb.Message, 3));
};


/** @param {Array.<!proto.dstore.engine.Message>} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.setMessageList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.clearMessageList = function() {
  this.setMessageList([]);
};


/**
 * repeated Row row = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row>}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.getRowList = function() {
  return /** @type{!Array.<!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.engine.om_GetCurrentCampaigns.Response.Row, 4));
};


/** @param {Array.<!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row>} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.setRowList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.prototype.clearRowList = function() {
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
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.engine.om_GetCurrentCampaigns.Response.Row, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.displayName = 'proto.dstore.engine.om_GetCurrentCampaigns.Response.Row';
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
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.toObject = function(includeInstance, msg) {
  var f, obj = {
    rowId: msg.getRowId(),
    campaignId: (f = msg.getCampaignId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    campaignDescription: (f = msg.getCampaignDescription()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    campaignName: (f = msg.getCampaignName()) && dstore_values_pb.StringValue.toObject(includeInstance, f),
    benefitId: (f = msg.getBenefitId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f),
    benefitTypeId: (f = msg.getBenefitTypeId()) && dstore_values_pb.IntegerValue.toObject(includeInstance, f)
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
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.engine.om_GetCurrentCampaigns.Response.Row;
  return proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCampaignId(value);
      break;
    case 10002:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaignDescription(value);
      break;
    case 10003:
      var value = new dstore_values_pb.StringValue;
      reader.readMessage(value,dstore_values_pb.StringValue.deserializeBinaryFromReader);
      msg.setCampaignName(value);
      break;
    case 20001:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitId(value);
      break;
    case 20005:
      var value = new dstore_values_pb.IntegerValue;
      reader.readMessage(value,dstore_values_pb.IntegerValue.deserializeBinaryFromReader);
      msg.setBenefitTypeId(value);
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
 * @param {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRowId();
  if (f !== 0) {
    writer.writeInt32(
      10000,
      f
    );
  }
  f = this.getCampaignId();
  if (f != null) {
    writer.writeMessage(
      10001,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getCampaignDescription();
  if (f != null) {
    writer.writeMessage(
      10002,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getCampaignName();
  if (f != null) {
    writer.writeMessage(
      10003,
      f,
      dstore_values_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = this.getBenefitId();
  if (f != null) {
    writer.writeMessage(
      20001,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
  f = this.getBenefitTypeId();
  if (f != null) {
    writer.writeMessage(
      20005,
      f,
      dstore_values_pb.IntegerValue.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row} The clone.
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.cloneMessage = function() {
  return /** @type {!proto.dstore.engine.om_GetCurrentCampaigns.Response.Row} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int32 row_id = 10000;
 * @return {number}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getRowId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10000, 0));
};


/** @param {number} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setRowId = function(value) {
  jspb.Message.setField(this, 10000, value);
};


/**
 * optional dstore.values.IntegerValue campaign_id = 10001;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getCampaignId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 10001));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setCampaignId = function(value) {
  jspb.Message.setWrapperField(this, 10001, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.clearCampaignId = function() {
  this.setCampaignId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.hasCampaignId = function() {
  return jspb.Message.getField(this, 10001) != null;
};


/**
 * optional dstore.values.StringValue campaign_description = 10002;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getCampaignDescription = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10002));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setCampaignDescription = function(value) {
  jspb.Message.setWrapperField(this, 10002, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.clearCampaignDescription = function() {
  this.setCampaignDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.hasCampaignDescription = function() {
  return jspb.Message.getField(this, 10002) != null;
};


/**
 * optional dstore.values.StringValue campaign_name = 10003;
 * @return {proto.dstore.values.StringValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getCampaignName = function() {
  return /** @type{proto.dstore.values.StringValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.StringValue, 10003));
};


/** @param {proto.dstore.values.StringValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setCampaignName = function(value) {
  jspb.Message.setWrapperField(this, 10003, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.clearCampaignName = function() {
  this.setCampaignName(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.hasCampaignName = function() {
  return jspb.Message.getField(this, 10003) != null;
};


/**
 * optional dstore.values.IntegerValue benefit_id = 20001;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getBenefitId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 20001));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setBenefitId = function(value) {
  jspb.Message.setWrapperField(this, 20001, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.clearBenefitId = function() {
  this.setBenefitId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.hasBenefitId = function() {
  return jspb.Message.getField(this, 20001) != null;
};


/**
 * optional dstore.values.IntegerValue benefit_type_id = 20005;
 * @return {proto.dstore.values.IntegerValue}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.getBenefitTypeId = function() {
  return /** @type{proto.dstore.values.IntegerValue} */ (
    jspb.Message.getWrapperField(this, dstore_values_pb.IntegerValue, 20005));
};


/** @param {proto.dstore.values.IntegerValue|undefined} value  */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.setBenefitTypeId = function(value) {
  jspb.Message.setWrapperField(this, 20005, value);
};


proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.clearBenefitTypeId = function() {
  this.setBenefitTypeId(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.dstore.engine.om_GetCurrentCampaigns.Response.Row.prototype.hasBenefitTypeId = function() {
  return jspb.Message.getField(this, 20005) != null;
};


goog.object.extend(exports, proto.dstore.engine.om_GetCurrentCampaigns);
