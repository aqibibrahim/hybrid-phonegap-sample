Siminov Web (Object Relationship Mapping) & (RESTful) - Android + PhoneGap
===================================================

A Web Application, by definition is derived from a combination of technologies, approaches or elements of different kinds. With respect to mobile applications, a Web application leverages best of both native and mobile web technologies.

In Web Environment, it is very difficult to map JavaScript/Java objects to relational database, but Siminov makes application developer life easy and simple by mapping JavaScript/Java objects to relational database.

Siminov can be used with PhoneGap. It enables application developers to build applications for mobile devices using JavaScript, HTML5 and CSS3, instead of device-specific languages such as Java.

Siminov not only takes care of the mapping from JavsScript/Java classes to database tables (and from JavaScript/Java data types to SQL data types), but also provides data query and retrieval facilities. It can significantly reduce development time otherwise spent with manual data handling in SQLite. Siminov design goal is to relieve the developer from 99% of common data persistence-related programming tasks by eliminating the need for manual, hand-crafted data processing using SQLite. However, unlike many other persistence solutions, Siminov does not hide the power of SQLite from you and guarantees that your investment in relational technology and knowledge is as valid as always.


About Application
-----------------
This sample application provides a basic idea about using Siminov Web Framework.

This application shows different type of Liquor's available in market and their basic information. (Eg: Wine, Beer, Whiskey, Votka, etc).


Setting Up Application 
----------------------

- Download Siminov Core jar from http://siminov.github.io/android-web/builds.html
- Download Siminov Web build from http://siminov.github.io/android-web/builds.html
- Extract Siminov Web build into folder.

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_build_extract.png "Siminov Web Sample Application")

***

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_build_extracted.png "Siminov Web Sample Application")

***

- Add both Native and Web jar's into your application libs folder.

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_sample_application_add_siminov_jars.png "Siminov Web Sample Application")

***

- Add Siminov JavaScript (Siminov.js) to your assets folder.

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_sample_application_add_siminov_js_to_application_assets.png "Siminov Web Sample Application")

***

- Include Siminov JavaScript (Siminov.js) in your view.

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_sample_application_include_siminov_js_to_application_view.png "Siminov Web Sample Application")

***

- Invoke Siminov Initialization on device ready event.

```java
<script>
       document.addEventListener("deviceready", Siminov.initialize, false);
</script>
```

- Add Cordova Jar into your application libs folder.

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_sample_application_add_cordova_jar.png "Siminov Web Sample Application")

***

- Include Coredova JS file Into Your Project

***

![Siminov Web Sample Application] (https://raw.github.com/Siminov/android-web/doc-resources/github-wiki-resources/siminov_web_sample_application_include_cordova_into_project.png "Siminov Web Sample Application")

***


Application Configuration
-------------------------

- <b>1. Application Descriptor - ApplicationDescriptor.si.xml</b>

```xml
<siminov>

	<property name="name">SIMINOV WEB SAMPLE</property>	
	<property name="description">Siminov Web Sample Application</property>
	<property name="version">0.9</property>

	<property name="load_initially">false</property>

	<!-- DATABASE-DESCRIPTORS -->
	<database-descriptors>
		<database-descriptor>DatabaseDescriptor.si.xml</database-descriptor>
	</database-descriptors>

	<!-- SIMINOV EVENTS -->
 	<event-handlers>
	    <event-handler>siminov.web.phonegap.sample.events.SiminovEventHandler</event-handler>
	    <event-handler>siminov.web.phonegap.sample.events.DatabaseEventHandler</event-handler>
	</event-handlers>
		
</siminov>

```

- <b>2. Database Descriptor - DatabaseDescriptor.si.xml</b>

```xml

<database-descriptor>

	<property name="database_name">SIMINOV-WEB-SAMPLE</property>
	<property name="description">Siminov Web Sample Database Config</property>
	<property name="is_locking_required">true</property>
	<property name="external_storage">false</property>

	<database-mappings>
		<database-mapping path="Liquor-Mappings/Liquor.si.xml" />
		<database-mapping path="Liquor-Mappings/LiquorBrand.si.xml" />
	</database-mappings>

	
	<libraries>
		<library>siminov.core.library.sample.resources</library>
	</libraries>
	
</database-descriptor>

```

- <b>3. Database Mapping Descriptor - Liquor.si.xml</b>

```xml
<database-mapping>

	<table table_name="LIQUOR" class_name="Liquor">
		
		<column variable_name="liquorType" column_name="LIQUOR_TYPE">
			<property name="type">String</property>
			<property name="primary_key">true</property>
			<property name="not_null">true</property>
			<property name="unique">true</property>
		</column>		

		<column variable_name="description" column_name="DESCRIPTION">
			<property name="type">String</property>
		</column>

		<column variable_name="history" column_name="HISTORY">
			<property name="type">String</property>
		</column>

		<column variable_name="link" column_name="LINK">
			<property name="type">String</property>
			<property name="default">www.wikipedia.org</property>
		</column>

		<column variable_name="alcholContent" column_name="ALCHOL_CONTENT">
			<property name="type">String</property>
		</column>

		<index name="LIQUOR_INDEX_BASED_ON_LINK" unique="true">
			<column>HISTORY</column>
		</index>

		<relationships>

		    <one-to-many refer="liquorBrands" refer_to="LiquorBrand" on_update="cascade" on_delete="cascade">
				<property name="load">true</property>
			</one-to-many>		
		    
		</relationships>
											
	</table>

</database-mapping>		

```

Save
------

```java
	var beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.save();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Update
-------

```java
	var beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.update();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Save Or Update
--------------

```java
	var beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.saveOrUpdate();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

```

Delete
------

```java
	var beer = new Liquor();
	beer.setLiquorType("Beer");
	beer.setDescription("Beer Description");
	beer.setHistory("Beer History");
	beer.setLink("Beer Web Link");
	beer.setAlcholContent("Beer Alchol Content");

	try {
		beer.delete();
	} catch(DatabaseException databaseException) {
		//Log It.
	}

````


LICENSE
-------

 
<b> SIMINOV FRAMEWORK </b>
 <p>
 Copyright [2013] [Siminov Software Solution LLP|support@siminov.com]
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.


[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/f423e443f4fc035eeb0ccf84cb7abdbe "githalytics.com")](http://githalytics.com/Siminov/android-samples)

