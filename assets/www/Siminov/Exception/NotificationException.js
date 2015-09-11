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
	It contain Siminov defined exceptions.
	
	@module Exception
*/


/**
	This is general exception, which is thrown through Notification APIs, if any exception occur while processing notification.

	@module Exception
	@class NotificationException
	@constructor 
	@param className {String} Name of Class
	@param methodName {String} Name of Method
	@param message {String} Message

*/
function NotificationException(className, methodName, message) {

}

Function.extend(SiminovException, NotificationException);