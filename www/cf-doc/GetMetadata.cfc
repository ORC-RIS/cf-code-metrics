<cfcomponent>

  <cffunction name="getMetadata" access="remote">

    <!--- 
      <cfset VAR CurrentDirectory = GetDirectoryFromPath(GetTemplatePath())>
    --->

    <cfset strPath = ExpandPath( "./" ) />
    
    <cfset applicationStop() />
    <cfdirectory action="list" directory="#strPath#" recurse="true" name="qFiles" filter="*.cfc" />
    
    <cfset var response = {} />
    <cfset response["components"] = ArrayNew(1)>
<!--- <cfdump var="#qFiles#" /> --->
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

        <cfset var metadata = Duplicate(getComponentMetaData(cfcName)) />
        <cfset metadata["RELATIVE_PATH"] = relativePath />
        <cfset ExtendComponentMetadata(metadata) />

        <cfset ArrayAppend(response["components"], metadata) />
        
        <cfcatch>
        <!---
          <cfdump var="#cfcatch#" />
        --->
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
    <cfargument name="function" type="string" required="yes" hint="Current function name." />
    <cfargument name="metadata" required="yes" hint="Component metadata struct." />
    <cfargument name="line" type="string" required="yes" hint="Source code line." />

    <!--- get procedure name --->
    <cfset var sp = "" />
    <cfset var parts = line.split('\sprocedure="',2) />
    <cfif ArrayLen(parts) GE 2>
      <cfset sp = ListFirst(parts[2],'"') />  
    </cfif>

    <cfif len(sp) GT 0>
    
      <!-- find function on component metadata --->
      <cfloop index="x" from="1" to="#ArrayLen(metadata["FUNCTIONS"])#"> 
        <cfset var func = metadata["FUNCTIONS"][x] />

        <cfif func["NAME"] EQ function>

          <cfif NOT StructKeyExists(func, "STORED_PROCEDURES")>
            <cfset func["STORED_PROCEDURES"] = [] />
          </cfif>
    
          <cfif NOT ArrayContains(func["STORED_PROCEDURES"], sp)>
            <cfset ArrayAppend(func["STORED_PROCEDURES"], sp) />  
          </cfif>

        </cfif>
        
      </cfloop> 

    </cfif>

  </cffunction>

  <cffunction name="ExtendComponentMetadata" output="yes">
    <cfargument name="metadata" required="yes" hint="Component metadata struct." />

      <cfset var lineNumber = 0 />
      <cfset var waitingForFunction = TRUE />
      <cfset var currentFunction = "" />

      <cfloop file="#metadata["PATH"]#" index="line">
        <cfset lineNumber = lineNumber + 1 />

        <!--- find for: <cffunction ... tag --->
        <cfif FindNoCase("<cffunction", line)>
          <cfset waitingForFunction = FALSE />
        </cfif>

        <cfif NOT waitingForFunction AND len(currentFunction) EQ 0>
          
          <!--- get function name --->
          <cfif FindNoCase("name=""", line)>
            <cfset waitingForFunction = FALSE />
            <cfset var currentFunction = "" />

            <cfset var parts = line.split('\sname="',2) />
            <cfif ArrayLen(parts) GE 2>
              <cfset currentFunction = ListFirst(parts[2],'"') />  
            </cfif>

          </cfif>
        </cfif>

        <!--- search for stored procedures --->
        <cfif len(currentFunction) GT 0>
          <cfset AddStoredProceduresCalls(currentFunction, metadata, line) />
        </cfif>

        <!--- find for: </cffunction> tag --->
        <cfif FindNoCase("</cffunction>", line)>
          <cfset waitingForFunction = TRUE />
          <cfset currentFunction = "" />
        </cfif>

        <!---
        <cfset AddFunctionsLineNumber(line, metadata, lineNumber) />
        
        --->
        
      </cfloop>

  </cffunction>

</cfcomponent>
