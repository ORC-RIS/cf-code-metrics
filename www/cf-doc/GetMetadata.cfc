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

        <cfset metadata = getComponentMetaData(cfcName) />
        <cfset metadata["RELATIVE_PATH"] = relativePath />
        <cfset ArrayAppend(response["components"], metadata) />
        
        <cfcatch>

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
  
</cfcomponent>
