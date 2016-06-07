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
        var packagePath = "";
        var currentPath = replace(directory & "\", strPath, "");
        currentPath = reReplace(currentPath, "[/\\]", "");
        currentPath = reReplace(currentPath, "[/\\]", ".", "all");


        if(len(currentPath))
        {
            // "Components.AccessControl"
            packagePath = currentPath & "." & name; //ListAppend(currentPath, name ".");
        }
        else
        {

            // "AccessControl"
            packagePath = name;
        }

        // remove file extension
        var cfcName = replace(packagePath, ".cfc", "");

      </cfscript>

      <cftry>


        <cfset ArrayAppend(response["components"], getComponentMetaData(cfcName)) />
        <cfcatch></cfcatch>  
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
