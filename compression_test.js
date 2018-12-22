
var dump = require('./scada_20180808_065352.json');
// var dump = {
//   "events": [
//     {
//       "asset_id": 1,
//       "event_type": "0",
//       "bit_mask": null,
//       "event_name": "42155",
//       "created_on": "2018-08-08 11:38:51+0000"
//     },
//     {
//       "asset_id": 1,
//       "event_type": "0",
//       "bit_mask": null,
//       "event_name": "42164",
//       "created_on": "2018-08-08 11:38:51+0000"
//     },
//     {
//       "asset_id": 1,
//       "event_type": "0",
//       "bit_mask": "04",
//       "event_name": "40200",
//       "created_on": "2018-08-08 11:38:51+0000"
//     },
//     {
//       "asset_id": 1,
//       "event_type": "0",
//       "bit_mask": "05",
//       "event_name": "40200",
//       "created_on": "2018-08-08 11:38:51+0000"
//     },
//   ],
//   "measurements": [
//     {
//       "measurement_modbus_type": "unsigned_int",
//       "measurement_name": "42152",
//       "created_on": "2018-08-08 11:38:51+0000",
//       "asset_id": 1,
//       "measurement_value": 0,
//       "bit_mask": null
//     },
//     {
//       "measurement_modbus_type": "unsigned_int",
//       "measurement_name": "42153",
//       "created_on": "2018-08-08 11:38:51+0000",
//       "asset_id": 1,
//       "measurement_value": 0,
//       "bit_mask": null
//     },
//     {
//       "measurement_modbus_type": "unsigned_int",
//       "measurement_name": "42163",
//       "created_on": "2018-08-08 11:38:51+0000",
//       "asset_id": 1,
//       "measurement_value": 0,
//       "bit_mask": null
//     },
//     {
//       "measurement_modbus_type": "bool",
//       "measurement_name": "1",
//       "created_on": "2018-08-08 11:38:51+0000",
//       "asset_id": 1,
//       "measurement_value": false,
//       "bit_mask": null
//     },
//     {
//       "measurement_modbus_type": "bool",
//       "measurement_name": "2",
//       "created_on": "2018-08-08 11:38:51+0000",
//       "asset_id": 1,
//       "measurement_value": false,
//       "bit_mask": null
//     },
//   ],
//   "assets": [
//     {
//       "modbus_map_id": 1,
//       "ip_address": "127.0.0.1",
//       "asset_name": "Well",
//       "created_on": "2018-08-07 21:05:03+0000",
//       "asset_id": 1,
//       "api": "api"
//     }
//   ]
// };

console.log('Loaded!');

// // Analyze
// var newObj = {};
// function analyze(obj, analysisObj) {
// 	// console.log('Analyzing:');
// 	// console.log(obj);
// 	// console.log(analysisObj);
// 	for (var key in obj) {
// 		if (!obj.hasOwnProperty(key)) { continue; }
// 		// console.log('Checking '+key);
// 		// console.log(newObj);
// 		// console.log(analysisObj);
// 		var current = obj[key];

// 		if (current === null) { current = '__null'; }
// 		if (current === undefined) { current = '__undefined'; }

// 		if (!analysisObj[key]) { analysisObj[key] = {}; }
// 		if (typeof current === 'object') {
// 			if (current.length === undefined ) {
// 				// Object is not an Array
// 				if (!analysisObj[key]['__count']) { analysisObj[key]['__count'] = 0; }
// 				analysisObj[key]['__count']++;
// 				analyze(current, analysisObj[key]);

// 			} else {
// 				// Object is an array
// 				analysisObj[]
// 				if (!analysisObj[key]['__count']) { analysisObj[key]['__count'] = current.length; }

// 				var subObj = analysisObj[key];
// 				for (var idx in current) {
// 					var val = current[idx];
// 					analyze(val, subObj);
// 				}

// 			}
// 		} else {
// 			if (!analysisObj[key][current]) { analysisObj[key][current] = 0; }
// 			analysisObj[key][current]++;
// 			analysisObj[key]['__count']++;
// 		}

// 	}
// }

// analyze(dump, newObj);
// console.log(JSON.stringify(newObj));



// // Refactor Attempt #1 - Reorder smallest to Largest
// var newObj = {
// 	'assets': {},
// 	'events': {},
// 	'measurements': {}
// };

// var events = dump['events'];
// for (var idx in events) {
// 	console.log('Loop!');
// 	var current = events[idx];

//     var asset_id = current['asset_id'];
//     if (newObj['events'][asset_id] === undefined) { newObj['events'][asset_id] = {}; }

//     var event_type = current['event_type'];
//     if (newObj['events'][asset_id][event_type] === undefined) { newObj['events'][asset_id][event_type] = {}; }

//     var bit_mask = current['bit_mask'];
//     if (newObj['events'][asset_id][event_type][bit_mask] === undefined) { newObj['events'][asset_id][event_type][bit_mask] = {}; }

//     var event_name = current['event_name'];
//     if (newObj['events'][asset_id][event_type][bit_mask][event_name] === undefined) { newObj['events'][asset_id][event_type][bit_mask][event_name] = {}; }

//     var created_on = current['created_on'];
//     if (newObj['events'][asset_id][event_type][bit_mask][event_name][created_on] === undefined) { newObj['events'][asset_id][event_type][bit_mask][event_name][created_on] = 0; }
//     newObj['events'][asset_id][event_type][bit_mask][event_name][created_on]++;
// }

// console.log(JSON.stringify(newObj));
// // Refactor Attempt #1






// // Refactor Attempt #2 - Re-order largest to smallest
// var newObj = {
// 	'assets': {},
// 	'events': {},
// 	'measurements': {}
// };

// var events = dump['events'];
// for (var idx in events) {
// 	console.log('Loop!');
// 	var current = events[idx];

//     var created_on = current['created_on'];
//     if (newObj['events'][created_on] === undefined) { newObj['events'][created_on] = {}; }

//     var event_name = current['event_name'];
//     if (newObj['events'][created_on][event_name] === undefined) { newObj['events'][created_on][event_name] = {}; }

//     var bit_mask = current['bit_mask'];
//     if (newObj['events'][created_on][event_name][bit_mask] === undefined) { newObj['events'][created_on][event_name][bit_mask] = {}; }

//     var event_type = current['event_type'];
//     if (newObj['events'][created_on][event_name][bit_mask][event_type] === undefined) { newObj['events'][created_on][event_name][bit_mask][event_type] = {}; }

//     var asset_id = current['asset_id'];
//     if (newObj['events'][created_on][event_name][bit_mask][event_type][asset_id] === undefined) { newObj['events'][created_on][event_name][bit_mask][event_type][asset_id] = {}; }

//     newObj['events'][created_on][event_name][bit_mask][event_type][asset_id]++;
// }
// console.log(JSON.stringify(newObj));


// Refactor Attempt #2



// // Refactor Attempt #3 - Reorder smallest to Largest
// var newObj = {
// 	'assets': {},
// 	'events': {},
// 	'measurements': {}
// };



// var eventKeys = ["asset_id","event_type","created_on","bit_mask","event_name"]; // 23208
// // var eventKeys = ["event_name","created_on","bit_mask","event_type","asset_id"]; // 49341
// function testEvents(keys, collection) {
// 	var newObj = collection || {
// 		'assets': {},
// 		'events': {},
// 		'measurements': {}
// 	};

// 	var events = dump['events'];
// 	for (var idx in events) {
// 		var current = events[idx];
// 		var obj = newObj['events'];
// 		var prevObj = null;
// 		var lastKey = '';
// 		for (var key in keys) {
// 			if (obj[current[keys[key]]] === undefined) { obj[current[keys[key]]] = {}; }
// 			prevObj = obj;
// 			obj = obj[current[keys[key]]];
// 			lastKey = key;
// 		}
// 		if (isNaN(prevObj[current[keys[lastKey]]])) { prevObj[current[keys[lastKey]]] = 0; }
// 		prevObj[current[keys[lastKey]]]++;
// 	}
// 	console.log("// var eventKeys = "+JSON.stringify(keys)+"; // "+JSON.stringify(newObj).length);
// }
// testEvents(eventKeys, newObj);


// var measurementsKeys = ["asset_id","created_on","measurement_modbus_type","measurement_value","bit_mask","measurement_name"]; // 435323
// // var measurementsKeys = ["measurement_name","created_on","bit_mask","measurement_value","measurement_modbus_type","asset_id"]; // 2654774
// function testMeasurements(keys, collection) {
// 	var newObj = collection || {
// 		'assets': {},
// 		'events': {},
// 		'measurements': {}
// 	};

// 	var measurements = dump['measurements'];
// 	for (var idx in measurements) {
// 		var current = measurements[idx];
// 		var obj = newObj['measurements'];
// 		var prevObj = null;
// 		var lastKey = '';
// 		for (var key in keys) {
// 			if (obj[current[keys[key]]] === undefined) { obj[current[keys[key]]] = {}; }
// 			prevObj = obj;
// 			obj = obj[current[keys[key]]];
// 			lastKey = key;
// 		}
// 		if (isNaN(prevObj[current[keys[lastKey]]])) { prevObj[current[keys[lastKey]]] = 0; }
// 		prevObj[current[keys[lastKey]]]++;
// 	}
// 	console.log("// var measurementKeys = "+JSON.stringify(keys)+"; // "+JSON.stringify(newObj).length);
// }
// testMeasurements(measurementsKeys, newObj);



// var assetsKeys = ["api","asset_id","asset_name","created_on","ip_address","modbus_map_id"]; // 114
// function testAssets(keys, collection) {
// 	var newObj = collection || {
// 		'assets': {},
// 		'events': {},
// 		'measurements': {}
// 	};

// 	var assets = dump['assets'];
// 	for (var idx in assets) {
// 		var current = assets[idx];
// 		var obj = newObj['assets'];
// 		var prevObj = null;
// 		var lastKey = '';
// 		for (var key in keys) {
// 			if (obj[current[keys[key]]] === undefined) { obj[current[keys[key]]] = {}; }
// 			prevObj = obj;
// 			obj = obj[current[keys[key]]];
// 			lastKey = key;
// 		}
// 		if (isNaN(prevObj[current[keys[lastKey]]])) { prevObj[current[keys[lastKey]]] = 0; }
// 		prevObj[current[keys[lastKey]]]++;
// 	}
// 	console.log("// var assetsKeys = "+JSON.stringify(keys)+"; // "+JSON.stringify(newObj).length);
// }
// testAssets(assetsKeys, newObj);

// var newObjString = JSON.stringify(newObj);
// console.log(newObjString);


// // Re-inflate
// var reinflatedObj = {
// 	'assets': {},
// 	'events': {},
// 	'measurements': {}
// };

// function reinflate(keys, obj) {

// }

// // Refactor Attempt #3



// Refactor Attempt #4 - Reorder smallest to Largest
var newObj = {
	'assets': {},
	'events': {},
	'measurements': {}
};


function compressArray(keys, array) {
	var newObj = {};

	for (var idx in array) {
		var current = array[idx];
		var obj = newObj;
		var prevObj = null;
		var prevPrevObj = null;
		for (var key in keys) {
			if (obj[current[keys[key]]] === undefined && obj.length === undefined) { obj[current[keys[key]]] = {}; }
			prevPrevObj = prevObj;
			prevObj = obj;
			obj = obj[current[keys[key]]];
		}
		if (prevPrevObj[current[keys[keys.length-2]]].length === undefined) { prevPrevObj[current[keys[keys.length-2]]] = []; }
		prevPrevObj[current[keys[keys.length-2]]].push(current[keys[keys.length-1]])
	}
	console.log("// var keys = "+JSON.stringify(keys)+"; // "+JSON.stringify(newObj).length);
	return newObj;
}




var eventKeys = ["asset_id","event_type","created_on","bit_mask","event_name"]; // 23208
// var eventKeys = ["event_name","created_on","bit_mask","event_type","asset_id"]; // 49341
newObj['events'] = compressArray(eventKeys, dump['events']);


var measurementsKeys = ["asset_id","created_on","measurement_modbus_type","measurement_value","bit_mask","measurement_name"]; // 435323
// var measurementsKeys = ["measurement_name","created_on","bit_mask","measurement_value","measurement_modbus_type","asset_id"]; // 2654774
newObj['measurements'] = compressArray(measurementsKeys, dump['measurements']);



var assetsKeys = ["api","asset_id","asset_name","created_on","ip_address","modbus_map_id"]; // 114
newObj['assets'] = compressArray(assetsKeys, dump['assets']);

var newObjString = JSON.stringify(newObj);
console.log(newObjString);


// Re-inflate
var reinflatedObj = {
	'assets': {},
	'events': {},
	'measurements': {}
};

function reinflate(keys, obj) {
	console.log('REINFLATING: ');
	console.log(obj);

	var results = [];
	var data = {};
	for (var keyIdx in keys) {
		var key = keys[keyIdx];
		data[key] = '__';
	}

	function reinflateRecursive(idx, obj) {
		console.log(obj);
		for (var val in obj) {
			console.log('Setting idx: '+idx+' to '+ val);
			data[keys[idx]] = val;
			var curr = obj[val];

			if (obj.length !== undefined) {
				data[keys[idx]] = curr;
				var result = {};
				for (var keyIdx in keys) {
					var key = keys[keyIdx];
					result[key] = data[key];
				}
				results.push(result);
			} else {
				reinflateRecursive(idx+1, curr);
			}
		}

	}
	reinflateRecursive(0, obj);
	return results;
}
reinflatedObj['assets'] = reinflate(assetsKeys, newObj['assets']);
reinflatedObj['events'] = reinflate(eventKeys, newObj['events']);
reinflatedObj['measurements'] = reinflate(measurementsKeys, newObj['measurements']);

var reinflatedObjString = JSON.stringify(reinflatedObj);
console.log(reinflatedObjString);


// Refactor Attempt #4


// // To CSV
// function arrayToCSVString(keys, array) {
// 	var str = ""
// 	for (var idx in array) {
// 		var item = array[idx];
// 		var line = "";
// 		for (var keyIdx in keys) {
// 			// console.log('FOR >> '+keyIdx);
// 			if (line !== "" ) { line += ","; }
// 			var key = keys[keyIdx];
// 			line += item[key];
// 		}
// 		str += line+"\n";
// 	}
// 	return str;
// }
// var eventKeys = ["asset_id","event_type","created_on","bit_mask","event_name"];
// var measurementsKeys = ["asset_id","created_on","measurement_modbus_type","measurement_value","bit_mask","measurement_name"];
// var assetsKeys = ["api","asset_id","asset_name","created_on","ip_address","modbus_map_id"];

// var csvString = "";

// csvString +="events\n"
// csvString += arrayToCSVString(eventKeys, dump['events']);
// csvString +="measurements\n"
// csvString += arrayToCSVString(measurementsKeys, dump['measurements']);
// csvString +="assets\n"
// csvString += arrayToCSVString(assetsKeys, dump['assets']);

// console.log(csvString);
// // To CSV