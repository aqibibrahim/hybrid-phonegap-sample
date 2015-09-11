/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/




/**
	It provide Util class needed by Siminov Framework.
	
	@module Utils
*/

/**
	Get all properties a given function contain.
	
	@method properties
	@return {Array} All function properties
*/
Object.defineProperty(
    Object.prototype, "properties", {
        value: function() {
            var result = [];
            for (var property in this) {
                if (this.hasOwnProperty(property))
                    result.push(property);
            }

            return result;
        }
    }
);


/**
	Check whether a give function contain provided property or not.
	
	@method containProperties
	@return {Boolean} true/false; TRUE: If it contain property; FALSE: If it does not contain property.
*/
Object.defineProperty(
    Object.prototype, "containProperty", {
        value: function(property) {
            var properties = this.properties();

            for(var i = 0;i < properties.length;i++) {
                if(properties[i] === property) {
                    return true;
                }
            }

            return false;
        }
    }
);



/**
	Get all GET properties a given function contain.
	
	@method getterProperties
	@return {Array} All GET Properties
*/
Object.defineProperty(
    Object.prototype, "getterProperties", {
        value: function() {
            var properties = this.properties();
            var getterProperties = [];

            for(var i = 0;i < properties.length;i++) {
                if(properties[i].indexOf("get") == 0 || properties[i].indexOf("is") == 0) {
                    getterProperties.push(properties[i]);
                }
            }

            return getterProperties;
        }
    }
);



/**
	Get all SET properties a given function contain.

	@method setterProperties
	@return {Array} All SET Properties
*/
Object.defineProperty(
    Object.prototype, "setterProperties", {
        value: function() {
            var properties = this.properties();
            var setterProperties = [];

            for(var i = 0;i < properties.length;i++) {
                if(properties[i].indexOf("set") === 0) {
                    setterProperties.push(properties[i]);
                }
            }

            return setterProperties;
        }
    }
);


/**
	Get name of given function.
	
	@method getObjectName
	@return {String} Name of Function 
*/
Object.defineProperty(
    Object.prototype, "getFunctionName", {
        value: function() {
            var funcNameRegex = /function (.{1,})\(/;
            var results = (funcNameRegex).exec((this).constructor.toString());

            return (results && results.length > 1) ? results[1] : "";
        }
    }
);



/**
	It provide APIs to deal with class.
	
	@module Utils
	@class Function
	@constructor
	
*/
function Function() {

}



/**
	It is use to implement inherit parent properties in child.
	
	@method extend
	@static
*/
Function.extend = function (parent, child) {
    child.prototype = new parent();
    child.prototype.constructor = child;
}



/**
	Create a instance of function.
	
	@method createFunctionInstance
	@static
	@return {Object} Function Instance
*/
Function.createFunctionInstance = function(functionName) {
	Log.debug("Function", "createFunctionInstance", "FUNCTION: " + functionName);
	
    var obj = Function.createFunctionInstanceDescend(window, functionName);
    return new obj();
}


/**
 * Create the inner function instances
 * 
 * @method createFunctionInstanceDescend
 * @static
 * @return {Object} Function Instance
 */
Function.createFunctionInstanceDescend = function(obj, path) {
    var parts = path.split('.');

    for(var i = 0; i < parts.length; i++) {
        obj = obj[parts[i]];
    }

    return obj;
}



/**
	Populate data in object by invoking API and passing parameters to it.
	
	@method invokeAndInflate
	@static
*/
Function.invokeAndInflate = function(object, apiName, parameterValues) {
	Log.debug("Function", "invokeAndInflate", "FUNCTION: " + object.getFunctionName() + ", API-NAME: " + apiName);
	object[apiName].apply(object, Array.prototype.slice.call(arguments, 2));
}



/**
	Invoke API and get data from object.
	
	@method invokeAndFetch
	@static
	@return {Object} Return object from invoked API
*/
Function.invokeAndFetch = function(object, apiName) {
	Log.debug("Function", "invokeAndFetch", "FUNCTION: " + object.getFunctionName() + ", API-NAME: " + apiName);
    return object[apiName] ();
}
