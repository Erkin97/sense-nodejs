!function(e,t){for(var s in t)e[s]=t[s]}(exports,function(e){var t={};function s(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([function(e,t){e.exports=require("grpc")},function(e,t,s){var r=s(6),n=r,i=Function("return this")();n.exportSymbol("proto.sense.full.v1.Request",null,i),n.exportSymbol("proto.sense.full.v1.RequestStream",null,i),n.exportSymbol("proto.sense.full.v1.Response",null,i),proto.sense.full.v1.Request=function(e){r.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.sense.full.v1.Request,r.Message),n.DEBUG&&!COMPILED&&(proto.sense.full.v1.Request.displayName="proto.sense.full.v1.Request"),r.Message.GENERATE_TO_OBJECT&&(proto.sense.full.v1.Request.prototype.toObject=function(e){return proto.sense.full.v1.Request.toObject(e,this)},proto.sense.full.v1.Request.toObject=function(e,t){var s={data:t.getData_asB64(),task:r.Message.getFieldWithDefault(t,2,""),apikey:r.Message.getFieldWithDefault(t,3,""),format:r.Message.getFieldWithDefault(t,4,""),clientVersion:r.Message.getFieldWithDefault(t,8,"")};return e&&(s.$jspbMessageInstance=t),s}),proto.sense.full.v1.Request.deserializeBinary=function(e){var t=new r.BinaryReader(e),s=new proto.sense.full.v1.Request;return proto.sense.full.v1.Request.deserializeBinaryFromReader(s,t)},proto.sense.full.v1.Request.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var s=t.readBytes();e.setData(s);break;case 2:s=t.readString();e.setTask(s);break;case 3:s=t.readString();e.setApikey(s);break;case 4:s=t.readString();e.setFormat(s);break;case 8:s=t.readString();e.setClientVersion(s);break;default:t.skipField()}}return e},proto.sense.full.v1.Request.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.sense.full.v1.Request.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.sense.full.v1.Request.serializeBinaryToWriter=function(e,t){var s=void 0;(s=e.getData_asU8()).length>0&&t.writeBytes(1,s),(s=e.getTask()).length>0&&t.writeString(2,s),(s=e.getApikey()).length>0&&t.writeString(3,s),(s=e.getFormat()).length>0&&t.writeString(4,s),(s=e.getClientVersion()).length>0&&t.writeString(8,s)},proto.sense.full.v1.Request.prototype.getData=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.sense.full.v1.Request.prototype.getData_asB64=function(){return r.Message.bytesAsB64(this.getData())},proto.sense.full.v1.Request.prototype.getData_asU8=function(){return r.Message.bytesAsU8(this.getData())},proto.sense.full.v1.Request.prototype.setData=function(e){r.Message.setProto3BytesField(this,1,e)},proto.sense.full.v1.Request.prototype.getTask=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.sense.full.v1.Request.prototype.setTask=function(e){r.Message.setProto3StringField(this,2,e)},proto.sense.full.v1.Request.prototype.getApikey=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.sense.full.v1.Request.prototype.setApikey=function(e){r.Message.setProto3StringField(this,3,e)},proto.sense.full.v1.Request.prototype.getFormat=function(){return r.Message.getFieldWithDefault(this,4,"")},proto.sense.full.v1.Request.prototype.setFormat=function(e){r.Message.setProto3StringField(this,4,e)},proto.sense.full.v1.Request.prototype.getClientVersion=function(){return r.Message.getFieldWithDefault(this,8,"")},proto.sense.full.v1.Request.prototype.setClientVersion=function(e){r.Message.setProto3StringField(this,8,e)},proto.sense.full.v1.RequestStream=function(e){r.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.sense.full.v1.RequestStream,r.Message),n.DEBUG&&!COMPILED&&(proto.sense.full.v1.RequestStream.displayName="proto.sense.full.v1.RequestStream"),r.Message.GENERATE_TO_OBJECT&&(proto.sense.full.v1.RequestStream.prototype.toObject=function(e){return proto.sense.full.v1.RequestStream.toObject(e,this)},proto.sense.full.v1.RequestStream.toObject=function(e,t){var s={data:t.getData_asB64(),task:r.Message.getFieldWithDefault(t,2,""),apikey:r.Message.getFieldWithDefault(t,3,""),dtype:r.Message.getFieldWithDefault(t,5,""),sr:r.Message.getFieldWithDefault(t,6,0),clientVersion:r.Message.getFieldWithDefault(t,8,"")};return e&&(s.$jspbMessageInstance=t),s}),proto.sense.full.v1.RequestStream.deserializeBinary=function(e){var t=new r.BinaryReader(e),s=new proto.sense.full.v1.RequestStream;return proto.sense.full.v1.RequestStream.deserializeBinaryFromReader(s,t)},proto.sense.full.v1.RequestStream.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var s=t.readBytes();e.setData(s);break;case 2:s=t.readString();e.setTask(s);break;case 3:s=t.readString();e.setApikey(s);break;case 5:s=t.readString();e.setDtype(s);break;case 6:s=t.readInt32();e.setSr(s);break;case 8:s=t.readString();e.setClientVersion(s);break;default:t.skipField()}}return e},proto.sense.full.v1.RequestStream.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.sense.full.v1.RequestStream.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.sense.full.v1.RequestStream.serializeBinaryToWriter=function(e,t){var s=void 0;(s=e.getData_asU8()).length>0&&t.writeBytes(1,s),(s=e.getTask()).length>0&&t.writeString(2,s),(s=e.getApikey()).length>0&&t.writeString(3,s),(s=e.getDtype()).length>0&&t.writeString(5,s),0!==(s=e.getSr())&&t.writeInt32(6,s),(s=e.getClientVersion()).length>0&&t.writeString(8,s)},proto.sense.full.v1.RequestStream.prototype.getData=function(){return r.Message.getFieldWithDefault(this,1,"")},proto.sense.full.v1.RequestStream.prototype.getData_asB64=function(){return r.Message.bytesAsB64(this.getData())},proto.sense.full.v1.RequestStream.prototype.getData_asU8=function(){return r.Message.bytesAsU8(this.getData())},proto.sense.full.v1.RequestStream.prototype.setData=function(e){r.Message.setProto3BytesField(this,1,e)},proto.sense.full.v1.RequestStream.prototype.getTask=function(){return r.Message.getFieldWithDefault(this,2,"")},proto.sense.full.v1.RequestStream.prototype.setTask=function(e){r.Message.setProto3StringField(this,2,e)},proto.sense.full.v1.RequestStream.prototype.getApikey=function(){return r.Message.getFieldWithDefault(this,3,"")},proto.sense.full.v1.RequestStream.prototype.setApikey=function(e){r.Message.setProto3StringField(this,3,e)},proto.sense.full.v1.RequestStream.prototype.getDtype=function(){return r.Message.getFieldWithDefault(this,5,"")},proto.sense.full.v1.RequestStream.prototype.setDtype=function(e){r.Message.setProto3StringField(this,5,e)},proto.sense.full.v1.RequestStream.prototype.getSr=function(){return r.Message.getFieldWithDefault(this,6,0)},proto.sense.full.v1.RequestStream.prototype.setSr=function(e){r.Message.setProto3IntField(this,6,e)},proto.sense.full.v1.RequestStream.prototype.getClientVersion=function(){return r.Message.getFieldWithDefault(this,8,"")},proto.sense.full.v1.RequestStream.prototype.setClientVersion=function(e){r.Message.setProto3StringField(this,8,e)},proto.sense.full.v1.Response=function(e){r.Message.initialize(this,e,0,-1,null,null)},n.inherits(proto.sense.full.v1.Response,r.Message),n.DEBUG&&!COMPILED&&(proto.sense.full.v1.Response.displayName="proto.sense.full.v1.Response"),r.Message.GENERATE_TO_OBJECT&&(proto.sense.full.v1.Response.prototype.toObject=function(e){return proto.sense.full.v1.Response.toObject(e,this)},proto.sense.full.v1.Response.toObject=function(e,t){var s={outputs:r.Message.getFieldWithDefault(t,7,"")};return e&&(s.$jspbMessageInstance=t),s}),proto.sense.full.v1.Response.deserializeBinary=function(e){var t=new r.BinaryReader(e),s=new proto.sense.full.v1.Response;return proto.sense.full.v1.Response.deserializeBinaryFromReader(s,t)},proto.sense.full.v1.Response.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 7:var s=t.readString();e.setOutputs(s);break;default:t.skipField()}}return e},proto.sense.full.v1.Response.prototype.serializeBinary=function(){var e=new r.BinaryWriter;return proto.sense.full.v1.Response.serializeBinaryToWriter(this,e),e.getResultBuffer()},proto.sense.full.v1.Response.serializeBinaryToWriter=function(e,t){var s;(s=e.getOutputs()).length>0&&t.writeString(7,s)},proto.sense.full.v1.Response.prototype.getOutputs=function(){return r.Message.getFieldWithDefault(this,7,"")},proto.sense.full.v1.Response.prototype.setOutputs=function(e){r.Message.setProto3StringField(this,7,e)},n.object.extend(t,proto.sense.full.v1)},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(0);class n{constructor(){this.callbackAdaptor=e=>(t,s)=>{if(t)e(t,void 0);else{const r=JSON.parse(s.getOutputs());e(t,r)}}}getTimeOut(){const e=new r.Metadata,t=(new Date).setSeconds((new Date).getSeconds()+n.TIMEOUT);return e.set("deadline",t.toString()),e}}t.Sense=n,n.TIMEOUT=10},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Int64Bit=0]="Int64Bit",e[e.Int32Bit=1]="Int32Bit",e[e.Int16Bit=2]="Int16Bit",e[e.Int8Bit=3]="Int8Bit",e[e.Float64Bit=4]="Float64Bit",e[e.Float32Bit=5]="Float32Bit",e[e.Float16Bit=6]="Float16Bit",e[e.Float8Bit=7]="Float8Bit"}(t.SamplingFormat||(t.SamplingFormat={})),function(e){e.samplingFormatToByteCount=function(t){switch(t){case e.Int8Bit:case e.Float8Bit:return 1;case e.Int16Bit:case e.Float16Bit:return 2;case e.Int32Bit:case e.Float32Bit:return 4;case e.Int64Bit:case e.Float64Bit:return 8;default:throw new Error("Sampling format not recognized")}},e.samplingFormatToNumberType=function(t){switch(t){case e.Int8Bit:case e.Int16Bit:case e.Int32Bit:case e.Int64Bit:return"int";case e.Float8Bit:case e.Float16Bit:case e.Float32Bit:case e.Float64Bit:return"float";default:throw new Error("Sampling format not recognized")}}}(t.SamplingFormat||(t.SamplingFormat={}))},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(0),n=s(5),i=s(7),o=s(3);t.SamplingFormat=o.SamplingFormat;const a=s(8);t.SenseClient=class{constructor(e,t="sense.cochlear.ai:50051"){this.grpcClient=new n.SenseClient(t,r.credentials.createInsecure()),this.apiKey=e}sendFile(e,t){return new i.AudioFileConnection(e,t,this.apiKey,this.grpcClient)}sendStream(e,t,s){return new a.AudioStreamConnection(e,t,s,this.apiKey,this.grpcClient)}}},function(e,t,s){"use strict";var r=s(0),n=s(1);function i(e){if(!(e instanceof n.Response))throw new Error("Expected argument of type sense.full.v1.Response");return Buffer.from(e.serializeBinary())}function o(e){return n.Response.deserializeBinary(new Uint8Array(e))}var a=t.SenseService={sense:{path:"/sense.full.v1.Sense/sense",requestStream:!0,responseStream:!1,requestType:n.Request,responseType:n.Response,requestSerialize:function(e){if(!(e instanceof n.Request))throw new Error("Expected argument of type sense.full.v1.Request");return Buffer.from(e.serializeBinary())},requestDeserialize:function(e){return n.Request.deserializeBinary(new Uint8Array(e))},responseSerialize:i,responseDeserialize:o},sense_stream:{path:"/sense.full.v1.Sense/sense_stream",requestStream:!0,responseStream:!0,requestType:n.RequestStream,responseType:n.Response,requestSerialize:function(e){if(!(e instanceof n.RequestStream))throw new Error("Expected argument of type sense.full.v1.RequestStream");return Buffer.from(e.serializeBinary())},requestDeserialize:function(e){return n.RequestStream.deserializeBinary(new Uint8Array(e))},responseSerialize:i,responseDeserialize:o}};t.SenseClient=r.makeGenericClientConstructor(a)},function(e,t){e.exports=require("google-protobuf")},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),n=s(2);class i extends n.Sense{constructor(e,t,s,r){super(),this.buffer=e,this.extension=t,this.apiKey=s,this.grpcClient=r}event(e){this.sendData("event",e)}speech(e){this.sendData("speech",e)}music(e){this.sendData("music",e)}sendData(e,t){const s=this.getTimeOut(),r=this.grpcClient.sense(s,this.callbackAdaptor(t)),n=this.createRequestIterator(e);for(const e of n)r.write(e);r.end()}*createRequestIterator(e){const t=i.BUFFER_SIZE;for(let s=0;s<this.buffer.length/t;s++){const n=this.buffer.slice(s*t,(s+1)*t),i=new r.Request;i.setApikey(this.apiKey),i.setData(n),i.setFormat(this.extension),i.setTask(e),yield i}}}t.AudioFileConnection=i,i.BUFFER_SIZE=1048576},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(1),n=s(2),i=s(9);class o extends n.Sense{constructor(e,t,s,r,n){super(),this.rate=t,this.apiKey=r,this.grpcClient=n,this.stream=e,this.samplingFormat=s}event(e){this.sendStream("event",e)}speech(e){this.sendStream("speech",e)}music(e){this.sendStream("music",e)}sendStream(e,t){const s=this.getTimeOut(),r=this.grpcClient.sense_stream(s),n=this.callbackAdaptor(t),o=new i.default(this.rate,this.samplingFormat);this.stream.on("data",t=>{for(o.push(t);o.isBufferReady();){const t=o.consumeBuffer(),s=o.getSamplingFormat(),n=this.createRequest(t,e,s);r.write(n)}}),r.on("data",e=>{n(void 0,e)});const a=()=>{r.end()};r.on("close",a),r.on("end",a),this.stream.on("close",a),this.stream.on("end",a);const u=e=>{n(e,void 0),a()};this.stream.on("error",u),r.on("error",u)}createRequest(e,t,s){const n=new r.RequestStream;return n.setApikey(this.apiKey),n.setData(e),n.setTask(t),n.setSr(this.rate),n.setDtype(s),n}}t.AudioStreamConnection=o},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=s(3);class n{constructor(e,t){this.bufferIndex=0,this.filledBuffers=[];const s=r.SamplingFormat.samplingFormatToByteCount(t);this.bufferSize=e*s/n.SENDING_RATE,this.buffer=new Uint8Array(this.bufferSize),this.samplingFormat=t}push(e){let t=0;for(;t<e.length;){const s=Math.min(this.bufferSize-this.bufferIndex,e.length-t);this.buffer.set(e.slice(t,t+s),this.bufferIndex),t+=s,this.bufferIndex+=s,this.bufferIndex===this.bufferSize&&(this.filledBuffers.push(this.buffer),this.buffer=new Uint8Array(this.bufferSize),this.bufferIndex=0)}}isBufferReady(){return this.filledBuffers.length>0}consumeBuffer(){if(!this.isBufferReady())throw new Error("Cannot send a partial buffer.");return this.filledBuffers.shift()}getSamplingFormat(){return r.SamplingFormat.samplingFormatToNumberType(this.samplingFormat)+8*r.SamplingFormat.samplingFormatToByteCount(this.samplingFormat)}}t.default=n,n.SENDING_RATE=2}]));
//# sourceMappingURL=SenseClient.js.map