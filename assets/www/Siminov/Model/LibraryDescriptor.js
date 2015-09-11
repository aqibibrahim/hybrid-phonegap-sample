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
	It contain all Models as per required by Siminov Framework.

	@module Model
*/


/**
 	Exposes methods to GET and SET Library Descriptor information as per define in LibraryDescriptor.si.xml file by application.
		
	Example:

		<library-descriptor>
		
		    <!-- General Properties Of Library -->
		    
		    <!-- Mandatory Field -->
			<property name="name">name_of_library</property>
			
			<!-- Optional Field -->
			<property name="description">description_of_library</property>
		
			
			
			<!-- Entity Descriptors Needed Under This Library Descriptor -->
			
			<!-- Optional Field -->
				<!-- Entity Descriptors -->
			<entity-descriptors>
				<entity-descriptor>name_of_database_descriptor.full_path_of_entity_descriptor_file</entity-descriptor>
			</entity-descriptors>
			 
			
			<!-- Hybrid Adapters Needed Under This Library Descriptor -->
				
			<!-- Optional Field -->
				<!-- Hybrid Adapters -->
			<adapters>
			    <adapter>full_path_of_hybrid_adapter_file</adapter>
			</adapters>
			
			
		</library-descriptor>

	
	@module Model		
	@class LibraryDescriptor
	@constructor
 */
function LibraryDescriptor() {

    var properties = new Dictionary();

    var entityDescriptorPaths = new Array();
	var serviceDescriptorPaths = new Array();
	var adapterDescriptorPaths = new Array();
	


	/**
	 	Get library name.
	 	
	 	@method getName
	 	@return {String} Name of Library
	 */
    this.getName = function() {
    	return properties.get(Constants.LIBRARY_DESCRIPTOR_NAME);
	}
	
	/**
	 	Set library name as per defined in LibraryDescriptor.si.xml
	 
	 	@method setName
 		@param name {String} Name of Library
	 */
    this.setName = function(name) {
    	properties.add(Constants.LIBRARY_DESCRIPTOR_NAME, name);
	}
	
	/**
	 	Get descriptor as per defined in LibraryDescriptor.si.xml
	 	
	 	@method getDescription
	 	@return {String} Description of Library
	 */
    this.getDescription = function() {
    	return properties.get(Constants.LIBRARY_DESCRIPTOR_DESCRIPTION);
	}
	
	/**
	 	Set description as per defined in LibraryDescritor.core.xml
	 
	 	@method setDescription
	 	@param descriptor {String} Description of Library
	 */
    this.setDescription = function(description) {
    	properties.add(Constants.LIBRARY_DESCRIPTOR_DESCRIPTION, description);
	}
	
		
	/**
	 	Get all Properties defined in descriptor.
	 
	 	@method getProperties
		@return {Array} All Property Values.
	 */
	this.getProperties = function() {
		return properties.values();
	}


	/**
	 	Get Property based on name provided.
	 
	 	@method getProperty
		@param name {String} Name of Property.
		@return {String} Property value.
	 */
	this.getProperty = function(name) {
		return properties.get(name);
	}


	/**
	 	Check whether Property exist or not.
	 
	 	@method containProperty
		@param name {String} Name of Property.
	 	@return {Boolean} true/false, TRUE if property exist, FALSE if property does not exist.
	 */
	this.containProperty = function(name) {
		return properties.exists(name);
	}


	/**
	 	Add Property in property pool.
	 
	 	@method addProperty
		@param name {String} Name of Property.
	 	@param value {String} value of Property.
	 */
	this.addProperty = function(name, value) {
		properties.add(name, value);
	}
	

	/**
	 	Remove Property from property pool.
	 
	 	@method  removeProperty
		@param name {String} Name of Property.
	 */
	this.removeProperty = function(name) {
		properties.remove(name);
	}

	
	/**
	 	Get all entity descriptor paths as per defined in DatabaseDescriptor.si.xml file.
	 
	 	@method getEntityDescriptorPaths
	 	@return {Array} It contain all entity paths.
	 */
    this.getEntityDescriptorPaths = function() {
    	return entityDescriptorPaths;
	}
	
	/**
	 	Add entity path as per defined in DatabaseDescriptor.si.xml file.
	 		
		EXAMPLE:
			<database-descriptor>
				<entity-descriptors>
					<entity-descriptor>Entity-Descriptors/Liquor.xml</entity-descriptor>
					<entity-descriptor>Entity-Descriptors/LiquorBrand.xml</entity-descriptor>
				</entity-descriptors>
			</database-descriptor>
	
	 
	 	@method addEntityDescriptorPath
	 	@param entityDescriptorPath {String} Entity Descriptor Path.
	 */
    this.addEntityDescriptorDescriptorPath = function(entityDescriptorPath) {
    	entityDescriptorPaths.push(entityDescriptorPaths);
	}
    
    
    /**
     * Get all service descriptor paths
     * 
     * @method getServiceDescriptorPaths
     * @return {Array} Service Descriptor Paths
     */
    this.getServiceDescriptorPaths = function() {
    	return serviceDescriptorPaths;
    }
    
    /**
     * Add service descriptor path
     * 
     * @method addServiceDescriptorPath
     * @param serviceDescriptorPath {String} Service descriptor path
     */
    this.addServiceDescriptorPath = function(serviceDescriptorPath) {
    	serviceDescriptorPaths.push(serviceDescriptorPath);
    }
    
    /**
     * Get all adapter descriptor paths
     * 
     * @method getAdapterDescriptorPaths
     * @param {Array} Adapter Descriptor Paths
     */
    this.getAdapterDescriptorPaths = function() {
    	return adapterDescriptorPaths;
    }
    
    /**
     * Get adapter descriptor path
     * 
     * @method getAdapterDescriptorPath
     * @param adapterDescriptorPath {String} Adapter Descriptor Path
     */
    this.getAdapterDescriptorPath = function(adapterDescriptorPath) {
    	adapterDescriptorPaths.push(adapterDescriptorPath);
    }
    
}
