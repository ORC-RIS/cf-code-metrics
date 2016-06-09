<cfcomponent>

  <cffunction name="getMetadata" access="remote">

    <!--- 
      <cfset VAR CurrentDirectory = GetDirectoryFromPath(GetTemplatePath())>
    --->

    <cfset strPath = ExpandPath( "./" ) />
    
    
    <cfdirectory action="list" directory="#strPath#" recurse="true" name="qFiles" filter="*.cfc" />
    
    <cfset var response = {} />
    <cfset response["components"] = ArrayNew(1)>

    <cfloop query="qFiles">
    
      <cfscript>
        var relativePath = "";
        var packagePath = "";
        var currentPath = replace(directory & "\", strPath, "");
        currentPath = reReplace(currentPath, "[/\\]", "");
        relativePath = currentPath;
        currentPath = reReplace(currentPath, "[/\\]", ".", "all");


        if(len(currentPath))
        {
            // "Components.AccessControl"
            relativePath = relativePath & "/" & name; 
            packagePath = currentPath & "." & name; //ListAppend(currentPath, name ".");
        }
        else
        {
            // "AccessControl"
            relativePath = name;
            packagePath = name;
        }

        // remove file extension
        var cfcName = replace(packagePath, ".cfc", "");

      </cfscript>

      <cftry>

<!---
        <cfdump var="#relativePath# </br></br>" />
--->

        <cfset var metadata = getComponentMetaData(cfcName) />
        <cfset metadata["RELATIVE_PATH"] = relativePath />


        <!--- read component file --->
<!---
        <cffile  
          action="read"  
          file="#metadata["PATH"]#" 
          variable="fileContent" />
<cfoutput>
  <br/><br/><br/><br/><br/>
-------------------------------------------
#fileContent#
-------------------------------------------
<br/><br/><br/><br/><br/>
</cfoutput>
--->
      <!---
        - iterate over components functions
        - get line number of each function
        - get stored procedures by function
        --->  
        <!---
          <cfdump var="#metadata.FUNCTIONS#" />
        --->
        <cfset var lineNumber = 0 />
        <cfloop file="#metadata["PATH"]#" index="line">
          <cfset lineNumber = lineNumber + 1 />

          <cfset AddFunctionsLineNumber(line, metadata, lineNumber) />          
          <cfset AddStoredProceduresCalls(line, metadata) />
          
        </cfloop>

        <cfset ArrayAppend(response["components"], metadata) />
        
        <cfcatch>
          <cfdump var="#cfcatch#" />
        </cfcatch>  
      </cftry>

    </cfloop>

    

      <!--- json serialization --->
      <cfprocessingdirective suppresswhitespace="yes"> 
          <cfoutput>
              #serializeJSON(response)#
          </cfoutput>
      </cfprocessingdirective>

      <cfsetting enablecfoutputonly="No" showdebugoutput="No">
  </cffunction>

  <cffunction name="AddFunctionsLineNumber" output="yes">
    <cfargument name="line" type="string" required="yes" hint="Source code line." />
    <cfargument name="metadata" required="yes" hint="Component metadata struct." />  
    <cfargument name="lineNumber" required="yes" hint="Line number." />  

    <!--- iterate over functions --->
    <cfloop array="#metadata.FUNCTIONS#" index="item">

      <!--- search for function name on current line --->
      <cfif FindNoCase("name=""#item["NAME"]#""", line)>
      
        <!--- add LINE_NUMBER attribute to function struct --->
        <cfset item["LINE_NUMBER"] = Int(lineNumber) />
      
      </cfif>

    </cfloop>
    
  </cffunction>
  
  <cffunction name="AddStoredProceduresCalls">
    <cfargument name="line" type="string" required="yes" hint="Source code line." />
    <cfargument name="metadata" required="yes" hint="Component metadata struct." />

    <!--- iterate over functions --->
    <cfloop array="#metadata.FUNCTIONS#" index="item">

      <!--- search for procedure attribute on current line --->
      <cfif FindNoCase("procedure=", line)>
      
        <!--- add LINE_NUMBER attribute to function struct --->
        
        <cfset var pName = "asd" />
<!---
        <cfabort showerror="#line#" />
--->
        <cfset item["LINE_NUMBER"] = Int(lineNumber) />
      
      </cfif>

    </cfloop>

  </cffunction>

</cfcomponent>
