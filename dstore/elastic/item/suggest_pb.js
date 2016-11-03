/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var dstore_elastic_elastic_pb = require('../../../dstore/elastic/elastic_pb.js');
var dstore_elastic_item_item_pb = require('../../../dstore/elastic/item/item_pb.js');
goog.exportSymbol('proto.dstore.elastic.suggest.Request', null, global);
goog.exportSymbol('proto.dstore.elastic.suggest.Response', null, global);
goog.exportSymbol('proto.dstore.elastic.suggest.Response.Suggestion', null, global);

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
proto.dstore.elastic.suggest.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.elastic.suggest.Request.repeatedFields_, null);
};
goog.inherits(proto.dstore.elastic.suggest.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.suggest.Request.displayName = 'proto.dstore.elastic.suggest.Request';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.elastic.suggest.Request.repeatedFields_ = [2];



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
proto.dstore.elastic.suggest.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.suggest.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.suggest.Request} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.suggest.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldNameList: jspb.Message.getField(msg, 2),
    baseQuery: (f = msg.getBaseQuery()) && dstore_elastic_elastic_pb.BoolQuery.toObject(includeInstance, f),
    maxItems: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxSuggests: jspb.Message.getFieldWithDefault(msg, 6, 0),
    fuzzy: jspb.Message.getFieldWithDefault(msg, 7, false),
    useAndOperator: jspb.Message.getFieldWithDefault(msg, 8, false)
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
 * @return {!proto.dstore.elastic.suggest.Request}
 */
proto.dstore.elastic.suggest.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.suggest.Request;
  return proto.dstore.elastic.suggest.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.suggest.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.suggest.Request}
 */
proto.dstore.elastic.suggest.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setInput(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addFieldName(value);
      break;
    case 3:
      var value = new dstore_elastic_elastic_pb.BoolQuery;
      reader.readMessage(value,dstore_elastic_elastic_pb.BoolQuery.deserializeBinaryFromReader);
      msg.setBaseQuery(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxItems(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxSuggests(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFuzzy(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseAndOperator(value);
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
 * @param {!proto.dstore.elastic.suggest.Request} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Request.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.suggest.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Request.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getInput();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getFieldNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = this.getBaseQuery();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      dstore_elastic_elastic_pb.BoolQuery.serializeBinaryToWriter
    );
  }
  f = this.getMaxItems();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = this.getMaxSuggests();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = this.getFuzzy();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = this.getUseAndOperator();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional string input = 1;
 * @return {string}
 */
proto.dstore.elastic.suggest.Request.prototype.getInput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dstore.elastic.suggest.Request.prototype.setInput = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated string field_name = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<string>}
 */
proto.dstore.elastic.suggest.Request.prototype.getFieldNameList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getField(this, 2));
};


/** @param {!Array.<string>} value */
proto.dstore.elastic.suggest.Request.prototype.setFieldNameList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.dstore.elastic.suggest.Request.prototype.addFieldName = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.dstore.elastic.suggest.Request.prototype.clearFieldNameList = function() {
  this.setFieldNameList([]);
};


/**
 * optional dstore.elastic.BoolQuery base_query = 3;
 * @return {?proto.dstore.elastic.BoolQuery}
 */
proto.dstore.elastic.suggest.Request.prototype.getBaseQuery = function() {
  return /** @type{?proto.dstore.elastic.BoolQuery} */ (
    jspb.Message.getWrapperField(this, dstore_elastic_elastic_pb.BoolQuery, 3));
};


/** @param {?proto.dstore.elastic.BoolQuery|undefined} value */
proto.dstore.elastic.suggest.Request.prototype.setBaseQuery = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.dstore.elastic.suggest.Request.prototype.clearBaseQuery = function() {
  this.setBaseQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.dstore.elastic.suggest.Request.prototype.hasBaseQuery = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 max_items = 5;
 * @return {number}
 */
proto.dstore.elastic.suggest.Request.prototype.getMaxItems = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.dstore.elastic.suggest.Request.prototype.setMaxItems = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional int32 max_suggests = 6;
 * @return {number}
 */
proto.dstore.elastic.suggest.Request.prototype.getMaxSuggests = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.dstore.elastic.suggest.Request.prototype.setMaxSuggests = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional bool fuzzy = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.elastic.suggest.Request.prototype.getFuzzy = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.dstore.elastic.suggest.Request.prototype.setFuzzy = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool use_and_operator = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.dstore.elastic.suggest.Request.prototype.getUseAndOperator = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.dstore.elastic.suggest.Request.prototype.setUseAndOperator = function(value) {
  jspb.Message.setField(this, 8, value);
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
proto.dstore.elastic.suggest.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.dstore.elastic.suggest.Response.repeatedFields_, null);
};
goog.inherits(proto.dstore.elastic.suggest.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.suggest.Response.displayName = 'proto.dstore.elastic.suggest.Response';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.dstore.elastic.suggest.Response.repeatedFields_ = [2,3];



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
proto.dstore.elastic.suggest.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.suggest.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.suggest.Response} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.suggest.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    suggestionList: jspb.Message.toObjectList(msg.getSuggestionList(),
    proto.dstore.elastic.suggest.Response.Suggestion.toObject, includeInstance),
    matchingItemList: jspb.Message.toObjectList(msg.getMatchingItemList(),
    dstore_elastic_item_item_pb.Item.toObject, includeInstance),
    elasticQueryString: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.dstore.elastic.suggest.Response}
 */
proto.dstore.elastic.suggest.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.suggest.Response;
  return proto.dstore.elastic.suggest.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.suggest.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.suggest.Response}
 */
proto.dstore.elastic.suggest.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.dstore.elastic.suggest.Response.Suggestion;
      reader.readMessage(value,proto.dstore.elastic.suggest.Response.Suggestion.deserializeBinaryFromReader);
      msg.addSuggestion(value);
      break;
    case 3:
      var value = new dstore_elastic_item_item_pb.Item;
      reader.readMessage(value,dstore_elastic_item_item_pb.Item.deserializeBinaryFromReader);
      msg.addMatchingItem(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setElasticQueryString(value);
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
 * @param {!proto.dstore.elastic.suggest.Response} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Response.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.suggest.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Response.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSuggestionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.dstore.elastic.suggest.Response.Suggestion.serializeBinaryToWriter
    );
  }
  f = this.getMatchingItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      dstore_elastic_item_item_pb.Item.serializeBinaryToWriter
    );
  }
  f = this.getElasticQueryString();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * repeated Suggestion suggestion = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.elastic.suggest.Response.Suggestion>}
 */
proto.dstore.elastic.suggest.Response.prototype.getSuggestionList = function() {
  return /** @type{!Array.<!proto.dstore.elastic.suggest.Response.Suggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.dstore.elastic.suggest.Response.Suggestion, 2));
};


/** @param {!Array.<!proto.dstore.elastic.suggest.Response.Suggestion>} value */
proto.dstore.elastic.suggest.Response.prototype.setSuggestionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.dstore.elastic.suggest.Response.Suggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.elastic.suggest.Response.Suggestion}
 */
proto.dstore.elastic.suggest.Response.prototype.addSuggestion = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.dstore.elastic.suggest.Response.Suggestion, opt_index);
};


proto.dstore.elastic.suggest.Response.prototype.clearSuggestionList = function() {
  this.setSuggestionList([]);
};


/**
 * repeated dstore.elastic.item.Item matching_item = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.dstore.elastic.item.Item>}
 */
proto.dstore.elastic.suggest.Response.prototype.getMatchingItemList = function() {
  return /** @type{!Array.<!proto.dstore.elastic.item.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, dstore_elastic_item_item_pb.Item, 3));
};


/** @param {!Array.<!proto.dstore.elastic.item.Item>} value */
proto.dstore.elastic.suggest.Response.prototype.setMatchingItemList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.dstore.elastic.item.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.dstore.elastic.item.Item}
 */
proto.dstore.elastic.suggest.Response.prototype.addMatchingItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.dstore.elastic.item.Item, opt_index);
};


proto.dstore.elastic.suggest.Response.prototype.clearMatchingItemList = function() {
  this.setMatchingItemList([]);
};


/**
 * optional string elastic_query_string = 5;
 * @return {string}
 */
proto.dstore.elastic.suggest.Response.prototype.getElasticQueryString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.dstore.elastic.suggest.Response.prototype.setElasticQueryString = function(value) {
  jspb.Message.setField(this, 5, value);
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
proto.dstore.elastic.suggest.Response.Suggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.dstore.elastic.suggest.Response.Suggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.dstore.elastic.suggest.Response.Suggestion.displayName = 'proto.dstore.elastic.suggest.Response.Suggestion';
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
proto.dstore.elastic.suggest.Response.Suggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.dstore.elastic.suggest.Response.Suggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.dstore.elastic.suggest.Response.Suggestion} msg The msg instance to transform.
 * @return {!Object}
 */
proto.dstore.elastic.suggest.Response.Suggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    value: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.dstore.elastic.suggest.Response.Suggestion}
 */
proto.dstore.elastic.suggest.Response.Suggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.dstore.elastic.suggest.Response.Suggestion;
  return proto.dstore.elastic.suggest.Response.Suggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.dstore.elastic.suggest.Response.Suggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.dstore.elastic.suggest.Response.Suggestion}
 */
proto.dstore.elastic.suggest.Response.Suggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
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
 * @param {!proto.dstore.elastic.suggest.Response.Suggestion} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Response.Suggestion.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFieldName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string field_name = 1;
 * @return {string}
 */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.getFieldName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.setFieldName = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.setCount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.dstore.elastic.suggest.Response.Suggestion.prototype.setValue = function(value) {
  jspb.Message.setField(this, 3, value);
};


goog.object.extend(exports, proto.dstore.elastic.suggest);
