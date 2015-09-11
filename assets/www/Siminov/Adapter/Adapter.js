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
	It is one which describes properties required to map Hybrid TO Native and vice-versa.

	@module Adapter
*/


/**
	Handle Request between NATIVE-TO-HYBRID and HYBRID-TO-NATIVE.
	Exposes method to GET and SET information about request.
 
	@module Adapter
	@class Adapter
	@constructor
 */
function Adapter() {

    var adapterName;
    var handlerName;
    var adapterMode;

    var parameters = [];


	/**
		Get Adapter Name.
		
		@method getAdapterName
		@return {String} Name of Adapter.	
	*/
    this.getAdapterName = function() {
        return adapterName;
    }

	/**
		Set Adapter Name.
		
		@method setAdapterName
		@param value {String} Name of Adapter.
	*/
    this.setAdapterName = function(value) {
        adapterName = value;
    }


	/**
		Get Handler Name.
		
		@method getHandlerName
		@return {String} Name of Handler.
	*/
    this.getHandlerName = function() {
        return handlerName;
    }

	/**
		Set Handler Name.
		
		@method setHandlerName
		@param value {String} Name of Handler
	*/
    this.setHandlerName = function(value) {
        handlerName = value;
    }


	/**
		Add Adapter Parameter.
		
		@method addParameter
		@param parameter {String} Parameter.
	*/
    this.addParameter = function(parameter) {
        parameters.push(parameter);
    }

	/**
		Get All Parameters.
		
		@method getParameters
		@return {Array} All Parameters.
	*/
	this.getParameters = function() {
		return parameters;
	}

	
	/**
		Invokes Handler based on request parameter set.
		It invokes Native API.
		
		@method invoke
	*/
    this.invoke = function() {

        var siminovDatas = new HybridSiminovDatas();
        for(var i = 0;i < parameters.length;i++) {
            var siminovData = new HybridSiminovDatas.HybridSiminovData();

			var parameter = parameters[i];
			if(parameter != undefined) {
				parameter = encodeURI(parameters[i]);
			} else {
				parameter = "";
			}

            siminovData.setDataValue(parameter);
            siminovDatas.addHybridSiminovData(siminovData);
        }

        var json = SIJsonHelper.toJson(siminovDatas);
        
        Log.debug("Adapter", "invoke", "SIMINOV HYBRID TO NATIVE - ADAPTER: " + adapterName + ", HANDLER: " + handlerName + ", DATA: " + json);
        
        
        /**
         * Android Native Bridge
         */
        if(window.SIMINOV != undefined) {
            return window.SIMINOV.handleHybridToNative(adapterName + "." + handlerName, json);
        }

        
        /**
         * iOS and Windows Sync Native Bridge
         */
        json = json.replace(new RegExp('#', 'g'), "%23");
        if(adapterMode == undefined || adapterMode == null || adapterMode == Adapter.ADAPTER_SYNC_MODE) {
            
            var xmlHttpRequest = new XMLHttpRequest();
            
            xmlHttpRequest.open(Constants.HTTP_POST_METHOD, Constants.HTTP_SIMINOV_PROTOCOL + "?" + Constants.HTTP_REQUEST_API_QUERY_PARAMETER + "=" + adapterName + "." + handlerName + "&" + Constants.HTTP_REQUEST_DATA_QUERY_PARAMETER + "=" + json, false);
            xmlHttpRequest.send(json);
            
            return xmlHttpRequest.responseText;
        }
        

        /**
         * iOS and Windows Async Native Bridge
         */
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = function() {
         
            if(xmlHttpRequest.readyState == 4) {
                if(xmlHttpRequest.status >= 200 && xmlHttpRequest.status <= 226) {
                    alert("response:" + xmlHttpRequest.responseText);
                } else {
                    alert("error response: " + xmlHttpRequest.responseText);
                }
            }
        }
        
        
        xmlHttpRequest.open(Constants.HTTP_POST_METHOD, Constants.HTTP_SIMINOV_PROTOCOL + "?" + Constants.HTTP_REQUEST_API_QUERY_PARAMETER + "=" + adapterName + "." + handlerName + "&" + Constants.HTTP_REQUEST_DATA_QUERY_PARAMETER + "=" + json, true);
        xmlHttpRequest.send(json);
        
        return xmlHttpRequest.responseText;
    }


	/**
		Any request from NATIVE-TO-HYBRID is first handled by this API.
		
		@method handle
		@param action {String} Name of Action. Action Represent HYBRID API Needs To Be Invoke.
		@param data {String} Data Is Basically Parameter To HYBRID API.
	*/
    this.handle = function(action, data) {
		Log.debug("Adapter", "invoke", "SIMINOV NATIVE TO HYBRID - ACTION: " + action + ", DATA: " + data);

        var functionName = action.substring(0, action.indexOf('.'));
        var apiName = action.substring(action.lastIndexOf('.') + 1, action.length);

        var obj = Function.createFunctionInstance(functionName);
        Function.invokeAndInflate(obj, apiName, data);
    }
}


Adapter.ADAPTER_SYNC_MODE = "SYNC";
Adapter.ADAPTER_ASYNC_MODE = "ASYNC";