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



function DeleteLiquor() {

	this.setService(DeleteLiquor.SERVICE_NAME);
	this.setRequest(DeleteLiquor.REQUEST_NAME);
	
	this.onStart = function() {
		
	}

	this.onQueue = function() {
		
	}

	this.onPause = function() {
		
	}

	this.onResume = function() {
		
	}

	this.onFinish = function() {
		
	}

	this.onRequestInvoke = function(connectionRequest) {
		
	}

	this.onRequestFinish = function(connectionResponse) {
		
	}

	this.onTerminate = function(serviceException) {
		
	}
}


DeleteLiquor.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
DeleteLiquor.REQUEST_NAME = "DELETE-LIQUOR";

DeleteLiquor.LIQUOR_NAME = "LIQUOR_NAME";


Function.extend(Service, DeleteLiquor);
