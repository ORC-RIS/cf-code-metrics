{
  "components": [
    {
      "DISPLAYNAME": "Application",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Application.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "OUTPUT": true,
      "HINT": "Handles the application.",
      "FUNCTIONS": [
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "Creates an Application.Cache structure and updates the cached variables using a configued timeout",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "updateCachedVariables"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Fires when an exception occurs that is not caught by a try/catch.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "any",
              "NAME": "exception"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "EventName"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnError"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "Fires at first part of page processing",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "request"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnRequestStart"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "Clear session variables related to authentication",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "clearAuthenticationVariables"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Fires when the session is first created.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "OnSessionStart"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "Fires when the application is terminated.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "struct",
              "DEFAULT": "[runtime expression]",
              "NAME": "ApplicationScope"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnApplicationEnd"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "Fires when the application is first created. Define application-scoped variables here.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "OnApplicationStart"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "PARAMETERS": [],
          "NAME": "OnRequestEnd"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "???",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "employeeId"
            }
          ],
          "ACCESS": "private",
          "NAME": "initializeUser"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "Fires when the session is terminated.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "SessionScope"
            },
            {
              "REQUIRED": false,
              "TYPE": "struct",
              "DEFAULT": "[runtime expression]",
              "NAME": "ApplicationScope"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnSessionEnd"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "Determines whether the maintenance page should be displayed or not",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "isApplicationUnderMaintenance"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "This function handles requests for non-existent files.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "targetPage"
            }
          ],
          "NAME": "OnMissingTemplate"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Application",
      "RELATIVE_PATH": "Application.cfc",
      "NAME": "Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\search_employee.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "employeeId"
            }
          ],
          "ACCESS": "remote",
          "NAME": "searchEmployee"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "search_employee",
      "RELATIVE_PATH": "search_employee.cfc",
      "NAME": "search_employee"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\testEze.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "PARAMETERS": [],
          "ACCESS": "remote",
          "NAME": "getMetadata"
        },
        {
          "PARAMETERS": [
            {
              "HINT": "Current function name.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "function"
            },
            {
              "HINT": "Component metadata struct.",
              "REQUIRED": true,
              "NAME": "metadata"
            },
            {
              "HINT": "Source code line.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "line"
            }
          ],
          "NAME": "AddStoredProceduresCalls"
        },
        {
          "OUTPUT": true,
          "PARAMETERS": [
            {
              "HINT": "Source code line.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "line"
            },
            {
              "HINT": "Component metadata struct.",
              "REQUIRED": true,
              "NAME": "metadata"
            },
            {
              "HINT": "Line number.",
              "REQUIRED": true,
              "NAME": "lineNumber"
            }
          ],
          "NAME": "AddFunctionsLineNumber"
        },
        {
          "OUTPUT": true,
          "PARAMETERS": [
            {
              "HINT": "Component metadata struct.",
              "REQUIRED": true,
              "NAME": "metadata"
            }
          ],
          "NAME": "ExtendComponentMetadata"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "testEze",
      "RELATIVE_PATH": "testEze.cfc",
      "NAME": "testEze"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\argis_auth\\Auth_Component.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "username"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "password"
            }
          ],
          "ACCESS": "remote",
          "NAME": "getIfAuthorized"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "argis_auth.Auth_Component",
      "RELATIVE_PATH": "argis_auth/Auth_Component.cfc",
      "NAME": "argis_auth.Auth_Component"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\cf-metrics\\Application.cfc",
      "TYPE": "component",
      "FULLNAME": "cf-metrics.Application",
      "RELATIVE_PATH": "cf-metrics/Application.cfc",
      "NAME": "cf-metrics.Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\cf-metrics\testEze.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "PARAMETERS": [],
          "ACCESS": "remote",
          "NAME": "getMetadata"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "cf-metrics.testEze",
      "RELATIVE_PATH": "cf-metrics/testEze.cfc",
      "NAME": "cf-metrics.testEze"
    },
    {
      "DISPLAYNAME": "AccessControl CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\AccessControl.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "AccessControl CFC.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "query",
          "HINT": "Return the Paris Roles for a given ARGIS People ID",
          "PARAMETERS": [
            {
              "HINT": "Employee ID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ArgisPeopleID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisUserRolesByUserID"
          ],
          "ACCESS": "public",
          "NAME": "getParisUserRolesByUserID"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisFeatureID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisFeatureID"
            },
            {
              "HINT": "ParisRoleID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ParisRoleID"
            },
            {
              "HINT": "ArgisRoleID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ArgisRoleID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_setParisFeatureAccess"
          ],
          "ACCESS": "public",
          "NAME": "setParisFeatureAccess"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Set the Paris User Role for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "EmployeeID",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            },
            {
              "HINT": "ParisRoleID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisRoleID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_setParisUserRole"
          ],
          "ACCESS": "public",
          "NAME": "setParisUserRole"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "EmployeeID",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            },
            {
              "HINT": "ParisRoleID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ParisRoleID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_deleteParisUserRole"
          ],
          "ACCESS": "public",
          "NAME": "deleteParisUserRole"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Return the Paris Roles for a given a EmployeeID",
          "PARAMETERS": [
            {
              "HINT": "Employee Id",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisUserRolesByEmployeeID"
          ],
          "ACCESS": "public",
          "NAME": "getParisUserRolesByEmployeeID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisFeatureAccessForTable"
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureAccessForTable"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "return the ArgisRoleID and name for the Return to Date Feature",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getArgisRoleForRevenueToDateFeature"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisFeatureID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisFeatureID"
            },
            {
              "HINT": "ParisRoleID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ParisRoleID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_deleteParisFeatureAccess"
          ],
          "ACCESS": "public",
          "NAME": "deleteParisFeatureAccess"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Creates a new Paris User Role Change Detail",
          "PARAMETERS": [
            {
              "HINT": "ParisRoleAuditID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisRoleAuditID"
            },
            {
              "HINT": "ParisRoleID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisRoleID"
            },
            {
              "HINT": "G for granted, R for revoked",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Action"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_setParisRoleAuditDetail"
          ],
          "ACCESS": "public",
          "NAME": "setRoleAuditDetail"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeature for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisFeatureID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ParisFeatureID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisFeature"
          ],
          "ACCESS": "public",
          "NAME": "getParisFeature"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisFeatureID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisFeatureID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisFeatureAccessByFeatureID"
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureAccessByFeatureID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Return all the Active Argis Users",
          "PARAMETERS": [
            {
              "HINT": "User Employee ID ",
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "employeeID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getArgisActiveUsers"
          ],
          "ACCESS": "public",
          "NAME": "getArgisActiveUsers"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Creates a new Paris User Role Change",
          "PARAMETERS": [
            {
              "HINT": "EmployeeID",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            },
            {
              "HINT": "RequestedBy",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": -1,
              "NAME": "RequestedBy"
            },
            {
              "HINT": "RequestedOn",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "RequestedOn"
            },
            {
              "HINT": "ApprovedBy",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": -1,
              "NAME": "ApprovedBy"
            },
            {
              "HINT": "ApprovedOn",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "ApprovedOn"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_setParisRoleAudit"
          ],
          "ACCESS": "public",
          "NAME": "setRoleAudit"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisUserRole for a given a UserID",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisUserRoleForTable"
          ],
          "ACCESS": "public",
          "NAME": "getParisUserRoleForTable"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks whether given employeeid is valid in argis",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_UserIsEmployeeIDValidInArgis"
          ],
          "ACCESS": "public",
          "NAME": "IsEmployeeIDValidInArgis"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeature for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisRoleID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": -1,
              "NAME": "ParisRoleID"
            },
            {
              "HINT": "ParisRoleCode",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "ParisRoleCode"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisRole"
          ],
          "ACCESS": "public",
          "NAME": "getParisRole"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "HINT": "ParisFeatureID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "ParisFeatureAccessID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisFeatureAccess"
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureAccess"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the Paris Feature Codes for a given a UserID",
          "PARAMETERS": [
            {
              "HINT": "Employee ID",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "EmployeeID"
            }
          ],
          "STORED_PROCEDURES": [
            "dbo.usp_getParisFeatureCodesByEmployeeID"
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureCodesByUserID"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.AccessControl",
      "RELATIVE_PATH": "Components/AccessControl.cfc",
      "NAME": "Components.AccessControl"
    },
    {
      "DISPLAYNAME": "AccessToFeatures CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\AccessToFeatures.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "GAccessToFeatures CFC.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks user's access to RangeSelection feature",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argHasTotalAccess"
            },
            {
              "HINT": "Username of the current user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSessionUsername"
            }
          ],
          "ACCESS": "public",
          "NAME": "funcCanSelectRange_deletefunction"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Enter record in database",
          "PARAMETERS": [
            {
              "HINT": "User name",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUserName"
            },
            {
              "HINT": "Usage Frequency",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argUsageFrequency"
            },
            {
              "HINT": "Typical Usage",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argTypicalUsage"
            },
            {
              "HINT": "Page Speed",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argPageSpeed"
            },
            {
              "HINT": "Favorite Change",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argFavoriteChange"
            },
            {
              "HINT": "Favorite Tool",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argFavoriteTool"
            },
            {
              "HINT": "Mobile Usage",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argMobileUsage"
            },
            {
              "HINT": "Operating System",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argOperatingSystem"
            },
            {
              "HINT": "Browser Type",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argBrowserType"
            },
            {
              "HINT": "Comments",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argComments"
            },
            {
              "HINT": "Is Contactable",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argIsContactable"
            },
            {
              "HINT": "Contact Name",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argContactName"
            },
            {
              "HINT": "Contact Email",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argContactEmail"
            },
            {
              "HINT": "Never Ask Again",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argNeverAskAgain"
            }
          ],
          "STORED_PROCEDURES": [
            "Common.usp_InsertNewSurveyData"
          ],
          "ACCESS": "public",
          "NAME": "funcAddSurveyData"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks user's role to see if Revenue To Date is accessible",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argHasTotalAccess"
            },
            {
              "HINT": "Session User Roles",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUserRoles"
            },
            {
              "HINT": "Username of the current user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSessionUsername"
            }
          ],
          "ACCESS": "public",
          "NAME": "funcCanViewRevenueToDate_deletefunction"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks user's access to Payroll feature",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argHasTotalAccess"
            },
            {
              "HINT": "Username of the current user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSessionUsername"
            }
          ],
          "ACCESS": "public",
          "NAME": "funcCanViewPayroll_deletefunction"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks if user has taken survey before or has opted 'Never Ask Again'",
          "PARAMETERS": [
            {
              "HINT": "Session user name",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUserName"
            }
          ],
          "STORED_PROCEDURES": [
            "Common.usp_HasUserTakenSurvey"
          ],
          "ACCESS": "public",
          "NAME": "funcHasUserTakenSurvey"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.AccessToFeatures",
      "RELATIVE_PATH": "Components/AccessToFeatures.cfc",
      "NAME": "Components.AccessToFeatures"
    },
    {
      "DISPLAYNAME": "Account CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Account.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Account CFC.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the latest expenditure date by looking at Actuals (Expenditures).",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getLatestExpenditureDate"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total salary encumbrance for an account",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateSalaryEncumbranceTotal_faster_wahoo"
          ],
          "ACCESS": "private",
          "NAME": "calculateTotalSalaryEncumbrance_faster"
        },
        {
          "RETURNTYPE": "numeric",
          "PARAMETERS": [
            {
              "HINT": "Can be Awarded, Funded, or Proposed.",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "Funded",
              "NAME": "argBudgetType"
            },
            {
              "HINT": "Options include:\n 1)'Total' which returns total funded budget, awarded budget or proposed budget,\n 2) 'Expenses', which returns total budget for the following categories 'Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'\n 3) The exact category itself, i.e. 'In Kind', 'Indirect', 'Intra-Fund Transfer', 'OCO', 'OPS', 'Salary','Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetBudgetTotal_xpansion"
          ],
          "ACCESS": "public",
          "NAME": "getAccountARGISBudgetTotal"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAllBudget"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns true if Account runs on associated revenue.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAssociatedRevenue"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets variables hasAssoicatedRevenue and associatedRevenue",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "setAssociatedRevenue"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns assets details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForAssetsCash"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssetsCash"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all budget of the account.",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectBudgetDetails",
            "DMart.usp_AccountGetFADeptBudgetDetails",
            "UCFRF_DataPro.usp_AccountGetDataProRFBudgetDetails"
          ],
          "ACCESS": "private",
          "NAME": "getAccountBudget"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns true if any account of given Account list exists in given Classification in given year",
          "PARAMETERS": [
            {
              "REQURIED": true,
              "HINT": "Takes a list of account numbers",
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Options include 'Department', 'Project' or 'RF'.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountClassification"
            },
            {
              "HINT": "All, 2008, 2007, etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "UCFRF_DataPro.usp_AccountUniWideDoesItExistInResearchFoundation",
            "DMart.usp_AccountUniWideDoesItExistInDMProjects",
            "DMart.usp_AccountUniWideDoesItExistInDMDepartments"
          ],
          "ACCESS": "public",
          "NAME": "doesAccountUniWideExist"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the Budget Level of an account",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getBudgetLevel"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor that creates account object by uniwide account number.",
          "PARAMETERS": [
            {
              "HINT": "Account Number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Fiscal Year for which actuals, budget, encumbrances will be calculated.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "UniWide Account Classification. Can be Project or Department or RF.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountClassification"
            },
            {
              "HINT": "True if account is uniwide, false if account is not uniwide.",
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "argUniWide"
            }
          ],
          "ACCESS": "public",
          "NAME": "initByUniWideAccountNumber"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns PreEncumb details and total",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argObjCode"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argRecordNum"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argPrimDocNum"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getBudAndExp_PreEncumb"
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_PreEncumb"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all object codes from the Actuals view in the DB (used for assoc. rev.).",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectActualsDetails",
            "DMart.usp_AccountGetFADeptActualsDetails"
          ],
          "ACCESS": "private",
          "NAME": "getAccountActualsForAssociatedRevenue"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "HINT": "Account Number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Account Type",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argAccountType"
            },
            {
              "HINT": "Department or Project",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argDorP"
            }
          ],
          "ACCESS": "public",
          "NAME": "initwoAccountID"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Constructor that creates Account object by Account ID.",
          "PARAMETERS": [
            {
              "HINT": "Account ID.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountID"
            },
            {
              "HINT": "Current Fiscal Year.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Fiscal Year for which actuals, budget, encumbrances will be calculated.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Last pay period end date.",
              "REQUIRED": true,
              "TYPE": "date",
              "NAME": "argLastPPE"
            }
          ],
          "ACCESS": "public",
          "NAME": "init"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns assets details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForAssets"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssets"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "HINT": "Account Number",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateOPSEncumbranceDetails_faster_wahoo"
          ],
          "ACCESS": "public",
          "NAME": "getOPSEncumbranceDetails_faster"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForOPS"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns revenue details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForRevenuesActual"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForRevenuesActual"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns revenue details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForRevenues"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForRevenues"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns revenue data set for given argYear.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetRevenue"
          ],
          "ACCESS": "public",
          "NAME": "getRevenue"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the result set with associated revenue information of the account.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAssociatedRevenue"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all pre-encumbrances of the account.",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectEncDetails",
            "DMart.usp_AccountGetFADeptEncDetails"
          ],
          "ACCESS": "private",
          "NAME": "getAccountPreEncumbrances"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForIndirect"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total salary encumbrance for an account",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateSalaryEncumbranceTotal"
          ],
          "ACCESS": "private",
          "NAME": "deprecated_calculateTotalSalaryEncumbrance"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getARGISAccountType"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the earliest expenditure date by looking at Actuals (Expenditures).",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getEarliestExpenditureDate"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns Rows with actuals, encubmrances and pre-encumbrances per input Category for a given account number or account number list. Returns nothing if accountType is ResearchFoundation",
          "PARAMETERS": [
            {
              "HINT": "Category like Sal, OPS, etc.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCategory"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectBudExpPerObjCodeForCategory",
            "DMart.usp_AccountGetFADeptActualsEncPreEncPerCategory",
            "ARGIS_UCF.usp_AccountGetFAProjectActualsEncPreEncPerCategory"
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodePerObjCodePerCategory"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns assets details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForAssetsAccountsReceivable"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssetsAccountsReceivable"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "HINT": "Account Number",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateSalaryEncumbranceDetails_faster_wahoo"
          ],
          "ACCESS": "public",
          "NAME": "getSalaryEncumbranceDetails_faster"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the Revenue to date (starting from 2004) for either Dept or Project.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getRevenueToDate"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getCASaccountNumber"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns Encumb details and total",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argObjCode"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argRecordNum"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argPrimDocNum"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getBudAndExp_Encumb"
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_Encumb"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns budget, actuals, encumb, preencumb, balance, associated revenue sums for an account or for a range of accounts",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Type of account: Proj or Dept",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argProjDept"
            },
            {
              "HINT": "All fiscal years",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argAll"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Ending account number if a range is used",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumberEnd"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getFinancialSums"
          ],
          "ACCESS": "public",
          "NAME": "getFinancialSums"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns budget, actuals, encumb, preencumb, balance, associated revenue sums for an account or for a range of accounts group by Fund Codes",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Type of account: P or D",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argProjDept"
            },
            {
              "HINT": "All fiscal years",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argAll"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Ending account number if a range is used",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumberEnd"
            },
            {
              "HINT": "List of fund codes to filter on",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argListFundCodes"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getFinancialSumsPerFundCode"
          ],
          "ACCESS": "public",
          "NAME": "getSumsPerFundCode"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns check amounts for specific object codes for a given account number or account number list. Returns nothing if accountType is ResearchFoundation",
          "PARAMETERS": [
            {
              "HINT": "Category like AR_Misc, AR_Overpayments, Prepaid",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argObjCodeCategory"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProject_ARMisc_AROver_Prepaid_Details",
            "DMart.usp_AccountGetFADept_ARMisc_AROver_Prepaid_Details"
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashDetailsForSpecificObjectCodes"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the account can run on associated revenue or not.",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFADeptCanRunOnAssociatedRevenue"
          ],
          "ACCESS": "private",
          "NAME": "getCanRunOnAssociatedRevenue"
        },
        {
          "RETURNTYPE": "numeric",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Options include:\n 1)'Total'\n 2) Salary\n 3) OPS\n 4) Equipment\n 5) 'Expenses', which returns Assoc. Rev. for the following categories 'Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'\n 6) Intrafund or Intra-FT\n 7) Indirect ",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAssociatedRevenueTotal"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetAccountIDFromAccountNumber",
            "ARGIS_Common.usp_AccountGetAliasResultSet"
          ],
          "ACCESS": "public",
          "NAME": "getAccountAliasResultSetByAccountNumber"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForExpenses"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getFY11DeptAccountNumber"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the Revenue to date (starting from 2004) for either Dept or Project.",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectRevenueToDate",
            "DMart.usp_AccountGetFADeptRevenueToDate"
          ],
          "ACCESS": "public",
          "NAME": "calcRevenueToDate"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the series total or the series Categorized total.",
          "PARAMETERS": [
            {
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSeries"
            },
            {
              "HINT": "If specified, total of the category is returned. Valid options for argCategory are:\n \t\t- Salary - OPS - Equipment - Expenses - Intrafund or Intra-FT - Indirect - Total",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "HINT": "If specified, returns amount only for that fiscal year, else returns all",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "If true, return Journal encumbrances",
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "argJEN"
            }
          ],
          "ACCESS": "public",
          "NAME": "getSeriesCategoryTotal"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "setAccountNumber_alt"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns the account list",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountList"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForEquipment"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the AccountNumber",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountNumber"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all encumbrances of the account.",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectEncDetails",
            "DMart.usp_AccountGetFADeptEncDetails"
          ],
          "ACCESS": "private",
          "NAME": "getAccountEncumbrances"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the result set of relational REQs or POs in Encumb/PreEncumb.",
          "PARAMETERS": [
            {
              "HINT": "Series like Encumbrances, PreEncumbrances",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSeries"
            },
            {
              "HINT": "If specified, total of the category is returned. Valid options for argCategory are:\n \t\t- Salary - OPS - Equipment - Expenditured - Intrafund - Indirect - Total",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "HINT": "If specified, returns amount only for that fiscal year, else returns all",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "If specified, returns relations details of PrimDocNumber.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argPrimDocNumber"
            },
            {
              "HINT": "If true, GROUP BY VENDNAME, OOR_category, PRIMDOCNUMB,SECNDOCNUMB, RECTYPE.",
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "argSummary"
            }
          ],
          "ACCESS": "public",
          "NAME": "getEncumbrancesRelations"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getLatestPayrollContractEndDate"
        },
        {
          "RETURNTYPE": "Date",
          "HINT": "Returns the last pay period end date",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_PayrollGetLastPEE"
          ],
          "ACCESS": "public",
          "NAME": "getLastPPE"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Prints account information to html page.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "printAccount"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "private",
          "NAME": "getAccountTypeByAccountNumber"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns 'Project' or 'Department'",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountClassification"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns DataMart Department Account Numbers",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFADeptAccounts"
          ],
          "ACCESS": "public",
          "NAME": "getDepartmentAccounts"
        },
        {
          "PARAMETERS": [],
          "RETURNTYE": "string",
          "ACCESS": "public",
          "NAME": "getAccountNumber_alt"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getCurrentFiscalYear"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns Awarded/Funded/Proposed Budget result set, Budget can optionally be returned for single category",
          "PARAMETERS": [
            {
              "HINT": "Can be Awarded, Funded, or Proposed.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argBudgetType"
            },
            {
              "HINT": "Options include:\n 1)'Total' which returns total funded budget, awarded budget or proposed budget,\n 2) 'Expenses', which returns total budget for the following categories 'Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'\n 3) The exact category itself, i.e. 'In Kind', 'Indirect', 'Intra-Fund Transfer', 'OCO', 'OPS', 'Salary','Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetBudgetResultSet_xPansion"
          ],
          "ACCESS": "public",
          "NAME": "getAccountARGISBudget"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns the account description.",
          "PARAMETERS": [
            {
              "HINT": "UniWide Account number.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Common.usp_AccountUniWideGetDescription"
          ],
          "ACCESS": "private",
          "NAME": "getUniWideAccountDescription"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "setAccountType_alt"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "setAccountType"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Finds if any employee has been paid past his/her contract end date",
          "PARAMETERS": [
            {
              "HINT": "Find for all employees, only OPS employees or only Sal employees.",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argOPS_Sal_All"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_PayrollIsAnyEmpPaidPastContractEndDateForAccount_wahoo"
          ],
          "ACCESS": "public",
          "NAME": "isAnyEmpPaidPastContractEndDate"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the number of records for the Account Information.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getNumRecs"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns whether or not tuition is allowable (1, 0 or null)",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isTuitionAllowable"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Constructor that creates account object by Account Number.",
          "PARAMETERS": [
            {
              "HINT": "Account Number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Account Type",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argAccountType"
            },
            {
              "HINT": "Department or Project",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argDorP"
            },
            {
              "HINT": "Last pay period end date.",
              "REQUIRED": true,
              "TYPE": "date",
              "NAME": "argLastPPE"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetAccountIDFromAccountNumber"
          ],
          "ACCESS": "public",
          "NAME": "initByAccountNumber"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns equities details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForEquities"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForEquities"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAllPreEnc"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns DataMart Project Account Numbers",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectAccounts"
          ],
          "ACCESS": "public",
          "NAME": "getProjectAccounts"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns Payroll information for the given account and year ",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argFY"
            }
          ],
          "STORED_PROCEDURES": [
            "Genesys.usp_PayrollGetDataForYearForAccount",
            "Payroll.usp_PayrollGetDataForYearForAccountWithFY"
          ],
          "ACCESS": "public",
          "NAME": "getPayrollWithFY"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns budget, actuals, encumb, preencumb, balance, associated revenue sums for an account or for a range of accounts filtered by Fund Code",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Type of account: Proj or Dept",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argProjDept"
            },
            {
              "HINT": "All fiscal years",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argAll"
            },
            {
              "HINT": "List of fund codes to filter on",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argListFundCodes"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Ending account number if a range is used",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumberEnd"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getFinancialSumsFilteredByFundCode"
          ],
          "ACCESS": "public",
          "NAME": "getFinancialSumsFilteredByFundCode"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a result set with a list of all research IDs for the account ID.",
          "PARAMETERS": [
            {
              "HINT": "If accountId is not passed, use accountID for THIS object.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetResearchIDList"
          ],
          "ACCESS": "public",
          "NAME": "getAccountResearchIDList"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getTotalSalaryEncumbrance_faster"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetAliasResultSet"
          ],
          "ACCESS": "public",
          "NAME": "getAccountAliasResultSet"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total OPS encumbrance for an account",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateOPSEncumbranceTotal_faster_wahoo"
          ],
          "ACCESS": "private",
          "NAME": "calculateTotalOPSEncumbrance_faster"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforPrepaidDetails"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether or not there is funded budget for tuition (1 or 0)",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isTuitionBudgeted"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all salary encumbrances of the account.",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateSalaryEncumbrancesDetails"
          ],
          "ACCESS": "private",
          "NAME": "deprecated_getAccountSalaryEncumbrances"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the Agreement Type",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgreementType"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Calculates the latest payroll contract end date for an account",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_PayrollGetLatestContractEndDateforAccount"
          ],
          "ACCESS": "private",
          "NAME": "calculateLatestPayrollContractEndDate"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the type of the account UCF, PeopleSoft, Research Foundation or Unknown",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountType"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForIntrafund"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountType_alt"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns Contractual Budget details and total",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            },
            {
              "HINT": "Options include:\n 1)'Total' which returns total funded budget, awarded budget or proposed budget,\n 2) 'Expenses', which returns total budget for the following categories 'Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'\n 3) The exact category itself, i.e. 'In Kind', 'Indirect', 'Intra-Fund Transfer', 'OCO', 'OPS', 'Salary','Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetContractualBudget_xpansion"
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_ContractualBudget"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns the account description",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountDescription"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Options include:\n 1)'Total'\n 2) Salary\n 3) OPS\n 4) Equipment\n 5) 'Expenses', which returns Assoc. Rev. for the following categories 'Consultants', 'Domestic Travel', 'Foreign Travel', 'Expense', 'Stipends', 'Sub Contract', 'TBD', 'Tuition'\n 6) Intrafund or Intra-FT\n 7) Indirect ",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAssociatedRevenueDetails"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns assets details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForAssetsPrepaid"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssetsPrepaid"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns the series total or the series Categorized total.",
          "PARAMETERS": [
            {
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSeries"
            },
            {
              "HINT": "If specified, total of the category is returned. Valid options for argCategory are:\n \t\t- Salary - OPS - Equipment - Expenses - Intrafund or Intra-FT - Indirect - Total",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "HINT": "If specified, returns amount only for that fiscal year, else returns all",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "If true, return Journal encumbrances",
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "argJEN"
            }
          ],
          "ACCESS": "public",
          "NAME": "getSeriesCategoryTotalAndRows"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns Actuals details and total",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argObjCode"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argRecordNum"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getBudAndExp_Actuals"
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_Actuals"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getTotalOPSEncumbrance_faster"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total OPS encumbrance for an account",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateOPSEncumbranceTotal"
          ],
          "ACCESS": "private",
          "NAME": "deprecated_calculateTotalOPSEncumbrance"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforAR_Misc"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns OPS encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "HINT": "Account Number",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateOPSEncumbranceDetails_wahoo"
          ],
          "ACCESS": "public",
          "NAME": "getOPSEncumbranceDetails"
        },
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getSONaccountNumber"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns Funded Budget details and total",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argObjCode"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argRecordNum"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getBudAndExp_FundedBudget"
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_FundedBudget"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforAR_MiscDetails"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns category details and total for P or D accounts",
          "PARAMETERS": [
            {
              "HINT": "AccountID, necessary for calculating contractual budget.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            },
            {
              "HINT": "Series, valid values are Contractual Budget, Funded Budget, Actuals, Encubmrances, PreEncumbrances, All",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSeries"
            },
            {
              "HINT": "Category, valid values are Expenses, Salary, OPS, Indirect, Intra%, OCO or Equipment, Total",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "HINT": "Fiscal year, valid values are [0000-9999] or All.",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Object Code i.e. 'Account' in PeopleSoft.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argObjCode"
            },
            {
              "HINT": "Record Number for showing details of a particular record.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argRecordNum"
            },
            {
              "HINT": "Primary doc number, used only for Encumbrances and PreEncumbrances, this var represents PONo for Enc and ReqNo for PreEnc",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argPrimDocNum"
            }
          ],
          "ACCESS": "public",
          "NAME": "getBudAndExp_Details"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAll"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns actuals details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForActuals"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForActuals"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns check amounts for specific object codes for a given account number or account number list. Returns nothing if accountType is ResearchFoundation",
          "PARAMETERS": [
            {
              "HINT": "Category like AR_Misc, AR_Overpayments, Prepaid",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argObjCodeCategory"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProject_ARMisc_AROver_Prepaid",
            "DMart.usp_AccountGetFADept_ARMisc_AROver_Prepaid"
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashForSpecificObjectCodes"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns 'Project' or 'Department'",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountIsProject"
          ],
          "ACCESS": "private",
          "NAME": "classifyAccount"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAllSalaryEnc"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns a comma delimited list of old account numbers given the account ID.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_AccountGetOldNumbers"
          ],
          "ACCESS": "public",
          "NAME": "getOldAccountNumberList_deprecated"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "HINT": "Account Number",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_AccountCalculateSalaryEncumbranceDetails_wahoo]"
          ],
          "ACCESS": "public",
          "NAME": "getSalaryEncumbranceDetails"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAllActuals"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforAR_Overpayments"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the series details or the series Categorized details.",
          "PARAMETERS": [
            {
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argSeries"
            },
            {
              "HINT": "If specified, total of the category is returned. Valid options for argCategory are:\n \t\t- Salary - OPS - Equipment - Expenses - Intrafund or Intra-FT - Indirect - Total",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "Total",
              "NAME": "argCategory"
            },
            {
              "HINT": "If specified, returns amount only for that fiscal year, else returns all",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "If true, return Journal encumbrances",
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "argJEN"
            },
            {
              "HINT": "Object Code like 751101, 754205, etc.",
              "REQUIRED": false,
              "TYPE": "numeric",
              "NAME": "argObjectCode"
            }
          ],
          "ACCESS": "public",
          "NAME": "getSeriesCategoryDetails"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "returns title, manager, and fundcode of account number.",
          "PARAMETERS": [
            {
              "HINT": "UniWide Account Number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Common.usp_AccountUniWideGetDesc_Mngr_ByFundCode"
          ],
          "ACCESS": "public",
          "NAME": "getUniWideTitleManagerFundCode"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns employees paid past his/her contract end date",
          "PARAMETERS": [
            {
              "HINT": "Find for all employees, only OPS employees or only Sal employees.",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argOPS_Sal_All"
            }
          ],
          "STORED_PROCEDURES": [
            "Payroll.usp_PayrollEmployeeListPaidFromAccountPastContractEndDate_wahoo"
          ],
          "ACCESS": "public",
          "NAME": "getEmpListPaidPastContractEndDate"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns D or P depending on whether account is department of project.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDorP"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the Funding Start Date",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getStartDate"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns DataPro Research Foundation (RF) Account Numbers",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "UCFRF_DataPro.usp_AccountGetRFAccounts"
          ],
          "ACCESS": "public",
          "NAME": "getRFAccounts"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforAR_OverpaymentsDetails"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns Cash details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetails"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetails"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the Funding End Date",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getEndDate"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "setAccountFinancials"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns budget, actuals, encumb, preencumb, balance, associated revenue sums for an account or for a range of accounts",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Type of account: P or D",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argProjDept"
            },
            {
              "HINT": "All fiscal years",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argAll"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Ending account number if a range is used",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumberEnd"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getFinancialSumsPerCollege"
          ],
          "ACCESS": "public",
          "NAME": "getSumsPerCollege"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns the account list.",
          "PARAMETERS": [
            {
              "HINT": "UniWide Account number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "Common.usp_AccountUniWideGetOldNumbers"
          ],
          "ACCESS": "private",
          "NAME": "getUniWideAccountList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a flag that indicates if the init method was called to prevent double initializations.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getInitialized"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns result set of all expenditures of the account.",
          "PARAMETERS": [
            {
              "HINT": "The fiscal year for which the budget is desired, can be 'All' or '2004' or '2008' etc.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_AccountGetFAProjectActualsDetails",
            "DMart.usp_AccountGetFADeptActualsDetails",
            "UCFRF_DataPro.usp_AccountGetDataProRFActualsDetails"
          ],
          "ACCESS": "private",
          "NAME": "getAccountActuals"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Retrieves funded tuition budget for the account ID",
          "PARAMETERS": [
            {
              "HINT": "Account Number",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetBudgetResultSetForTuition"
          ],
          "ACCESS": "public",
          "NAME": "getFundedTuitionBudgetDetails"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashforPrepaid"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns the AccountID",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccountID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns budget, actuals, encumb, preencumb, balance, associated revenue sums for an account or for a range of accounts",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            },
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "HINT": "Type of account: P or D",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argProjDept"
            },
            {
              "HINT": "All fiscal years",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argAll"
            },
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            },
            {
              "HINT": "Ending account number if a range is used",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountNumberEnd"
            },
            {
              "HINT": "List of fund codes to filter on",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argListFundCodes"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getFinancialSumsPerCollegeDeptFundCode"
          ],
          "ACCESS": "public",
          "NAME": "getSumsPerCollegeDeptFundCode"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns liabilities details for account.",
          "PARAMETERS": [
            {
              "HINT": "Current Fiscal Year",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argCurrentFiscalYear"
            }
          ],
          "STORED_PROCEDURES": [
            "DMart.usp_getCashDetailsForLiabilities"
          ],
          "ACCESS": "public",
          "NAME": "getCashDetailsForLiabilities"
        },
        {
          "RETURNTYPE": "query",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getQMergeAllEnc"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets account information into variables",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetInfoForAccountID"
          ],
          "ACCESS": "private",
          "NAME": "setAccountInfoFromAccountID"
        },
        {
          "RETURNTYPE": "any",
          "PARAMETERS": [
            {
              "HINT": "Selected fiscal year",
              "TYPE": "string",
              "DEFAULT": "0000",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountBudExpPerObjCodeForSalary"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Account",
      "RELATIVE_PATH": "Components/Account.cfc",
      "NAME": "Components.Account"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Chart.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "This component takes series input, data input and returns a bar chart object to be displayed",
      "FUNCTIONS": [
        {
          "OUTPUT": true,
          "RETURNTYPE": "string",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "arg_XLabel"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "arg_YLabel"
            },
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": 320,
              "NAME": "arg_Height"
            },
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": 450,
              "NAME": "arg_Width"
            },
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": 12,
              "NAME": "arg_FontSize"
            },
            {
              "TYPE": "array",
              "NAME": "arg_NamesOnXAxis"
            },
            {
              "TYPE": "array",
              "NAME": "arg_NamesOfDataSets"
            },
            {
              "TYPE": "numeric",
              "NAME": "arg_NumberOfDataSets"
            },
            {
              "TYPE": "numeric",
              "NAME": "arg_NumberOfValues"
            },
            {
              "TYPE": "array",
              "NAME": "arg_DataArray"
            }
          ],
          "ACCESS": "public",
          "NAME": "drawBarChart"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Chart",
      "RELATIVE_PATH": "Components/Chart.cfc",
      "NAME": "Components.Chart"
    },
    {
      "DISPLAYNAME": "GLogging",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Logging.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Functions used to do Logging of Activities",
      "FUNCTIONS": [
        {
          "OUTPUT": false,
          "RETURNTYPE": "Components.Logging",
          "HINT": "Perform initialization for the component.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "init"
        },
        {
          "HINT": "Logs Web Server activities",
          "PARAMETERS": [
            {
              "TYPE": "string",
              "NAME": "argusername"
            },
            {
              "TYPE": "boolean",
              "NAME": "authorized"
            },
            {
              "TYPE": "string",
              "NAME": "message"
            }
          ],
          "STORED_PROCEDURES": [
            "Security.usp_logWebServiceActivity"
          ],
          "ACCESS": "public",
          "NAME": "logWebServiceActivity"
        },
        {
          "HINT": "Logs activity into current Log table for PARIS",
          "PARAMETERS": [
            {
              "TYPE": "string",
              "NAME": "accessType"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argusername"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "accessLevel"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "lastName"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "firstName"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "accessList"
            },
            {
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "isProxy"
            },
            {
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "proxy"
            },
            {
              "TYPE": "string",
              "NAME": "datasrc"
            }
          ],
          "STORED_PROCEDURES": [
            "Security.usp_logActivity"
          ],
          "ACCESS": "public",
          "NAME": "logActivity"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Logging",
      "RELATIVE_PATH": "Components/Logging.cfc",
      "NAME": "Components.Logging"
    },
    {
      "DISPLAYNAME": "People CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\People.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Includes functions related to Users/Faculty Members",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's last name.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getLastName"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "HINT": "The people ID of the faculty member/user",
              "REQUIRED": false,
              "TYPE": "numeric",
              "NAME": "peopleID"
            }
          ],
          "ACCESS": "public",
          "NAME": "init"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns payroll information for a particular year for some employee ID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argEmployeeID"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argHasTotalAccess"
            },
            {
              "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argEmployee"
            },
            {
              "HINT": "Employee First Name, should be passed when year <= 2003.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argEmployeeFirstName"
            },
            {
              "HINT": "Employee Middle Initial, should be passed when year <= 2003.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argEmployeeMiddleInitial"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetResearchIDsListByUserName",
            "ARGIS_Common.usp_AccountGetAccountsListForResearchIDList",
            "ARGIS_Common.usp_AccountGetAliasListForAccountList",
            "Payroll_Research.usp_PayrollGetDataForYearForEmployee"
          ],
          "ACCESS": "public",
          "NAME": "getPayrollForYear"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's employee ID.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getEmployeeID"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's title.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getTitle"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's role",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getPeopleRole"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the accessible faculty members list for a user",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "hasTotalAccess"
            },
            {
              "HINT": "Initial letter of the faculty last name",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "initial"
            },
            {
              "HINT": "username of the current user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            },
            {
              "HINT": "org ID list of the Department/College Access Lists",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "departmentCollegeAccessList"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_PeopleAccessibleFacultyForUsername"
          ],
          "ACCESS": "public",
          "NAME": "getAccessibleFaculty"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's fax number.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getFaxNumber"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's first name.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getFirstName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's organization name.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDepartmentName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's full name.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getFullName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns a faculty member's name",
          "PARAMETERS": [
            {
              "HINT": "faculty Id of the faculty member",
              "TYPE": "numeric",
              "NAME": "facultyID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_PeopleGetResearcherName"
          ],
          "ACCESS": "public",
          "NAME": "getFacultyName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's middle initial.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getMiddleInitial"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns uniwide payroll information for a particular year for some employee ID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argEmployeeID"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "argHasTotalAccess"
            },
            {
              "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argEmployee"
            },
            {
              "HINT": "Employee First Name, should be passed when year <= 2003.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argEmployeeFirstName"
            },
            {
              "HINT": "Employee Middle Initial, should be passed when year <= 2003.",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argEmployeeMiddleInitial"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetResearchIDsListByEmployeeId",
            "ARGIS_Common.usp_AccountGetAccountsListForResearchIDList",
            "ARGIS_Common.usp_AccountGetAliasListForAccountList",
            "Payroll.usp_PayrollGetUniWideDataForYearForEmployee"
          ],
          "ACCESS": "public",
          "NAME": "getUniWidePayrollForYear"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's phone number.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getPhoneNumber"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Returns people related info given the peopleID",
          "PARAMETERS": [
            {
              "HINT": "The people ID of the faculty member/user",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "peopleID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_PeopleGetInfoFromPeopleID"
          ],
          "ACCESS": "private",
          "NAME": "getPeopleInfoFromPeopleID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the encrypted pwd, given the username",
          "PARAMETERS": [
            {
              "HINT": "username",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUserName"
            }
          ],
          "STORED_PROCEDURES": [
            "GenesysARGIS.ARGIS_UCF.usp_PeopleGetEncPwd"
          ],
          "ACCESS": "public",
          "NAME": "getEncryptedPwd_deprecated"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the user's people ID.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getPeopleID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's email address.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getEmail"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's/faculty member's organization type.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getCollegeName"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.People",
      "RELATIVE_PATH": "Components/People.cfc",
      "NAME": "Components.People"
    },
    {
      "DISPLAYNAME": "GRAD CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\RAD.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Includes functions that returns research asset database(RAD) related data.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "void",
          "HINT": "updates asset log, depending on the result of the RAD load",
          "PARAMETERS": [
            {
              "TYPE": "numeric",
              "NAME": "argNoOfRecords"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADUpdateLog"
          ],
          "ACCESS": "public",
          "NAME": "updateAssetLog"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Updates a return message given the messageID",
          "PARAMETERS": [
            {
              "TYPE": "numeric",
              "NAME": "argMessageID"
            },
            {
              "TYPE": "string",
              "NAME": "argMessage"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADUpdateReturnMessage"
          ],
          "ACCESS": "public",
          "NAME": "updateRADReturnMessage"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "array",
          "HINT": "sorts a multi dimentional array.",
          "PARAMETERS": [
            {
              "HINT": "the array to be sorted",
              "REQUIRED": true,
              "TYPE": "array",
              "NAME": "l_array"
            },
            {
              "HINT": "asc or desc",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "desc",
              "NAME": "sort_order"
            },
            {
              "HINT": "numeric, text, textnocase",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "numeric",
              "NAME": "sort_type"
            },
            {
              "HINT": "The column index to use in sort.",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": 1,
              "NAME": "sort_column"
            }
          ],
          "ACCESS": "public",
          "NAME": "ArraySortM"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "uploads asset info coming from the F&A server",
          "PARAMETERS": [
            {
              "TYPE": "string",
              "NAME": "argAssetID"
            },
            {
              "TYPE": "numeric",
              "NAME": "argCost"
            },
            {
              "TYPE": "string",
              "NAME": "argSpeedtype_key"
            },
            {
              "TYPE": "string",
              "NAME": "argDescription"
            },
            {
              "TYPE": "string",
              "NAME": "argAcquisition_date"
            },
            {
              "TYPE": "string",
              "NAME": "argTag_number"
            },
            {
              "TYPE": "string",
              "NAME": "argLocation"
            },
            {
              "TYPE": "string",
              "NAME": "argBuilding_name"
            },
            {
              "TYPE": "string",
              "NAME": "argBuilding_number"
            },
            {
              "TYPE": "string",
              "NAME": "argPi_name"
            },
            {
              "TYPE": "string",
              "NAME": "argName"
            },
            {
              "TYPE": "string",
              "NAME": "argPhone"
            },
            {
              "TYPE": "string",
              "NAME": "argStatus"
            },
            {
              "TYPE": "string",
              "NAME": "argLanguage_cd"
            },
            {
              "TYPE": "string",
              "NAME": "argAudit_action"
            },
            {
              "TYPE": "string",
              "NAME": "argBase_language_cd"
            },
            {
              "TYPE": "string",
              "NAME": "argMsg_seq_flag"
            },
            {
              "TYPE": "string",
              "NAME": "argProcess_instance"
            },
            {
              "TYPE": "string",
              "NAME": "argPublish_rule_id"
            },
            {
              "TYPE": "string",
              "NAME": "argMsgnodename"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADInsertData"
          ],
          "ACCESS": "public",
          "NAME": "insertAssetInfo"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Inserts a return message, result of the load process along with the xml message itself, then returns messageID of inserted",
          "PARAMETERS": [
            {
              "TYPE": "string",
              "NAME": "argMessage"
            },
            {
              "TYPE": "string",
              "NAME": "argXMLInput"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADInsertReturnMessage"
          ],
          "ACCESS": "public",
          "NAME": "insertRADReturnMessage"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "retrieves all the asset information that cost above $10000 for the advanced search page",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "struct",
              "DEFAULT": "[runtime expression]",
              "NAME": "sFrm"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADAdvancedSearch"
          ],
          "ACCESS": "public",
          "NAME": "getRADListAdvSearch"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "retrieves all the asset information given a tagid",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "tagid"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADGetDetails"
          ],
          "ACCESS": "public",
          "NAME": "getAssetDetails"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Retrives info to populate select boxes in the advanced search webpage.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "list"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADPickListData"
          ],
          "ACCESS": "public",
          "NAME": "getPickList"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "retrieves all the asset information that cost above $10000 based on the search criteria: department, description, building name, PI Name, etc.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "argSearchCriteria"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "max_cost_function",
              "NAME": "sortCol"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "DESC",
              "NAME": "sortDir"
            }
          ],
          "STORED_PROCEDURES": [
            "RAD.usp_RADGetList"
          ],
          "ACCESS": "public",
          "NAME": "getRADList"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.RAD",
      "RELATIVE_PATH": "Components/RAD.cfc",
      "NAME": "Components.RAD"
    },
    {
      "DISPLAYNAME": "GResearch CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Research.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Includes functions that returns research related data.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "void",
          "HINT": "Returns Research related data.",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": false,
              "TYPE": "numeric",
              "NAME": "researchID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetInfoFromResearchID"
          ],
          "ACCESS": "public",
          "NAME": "getResearchInfo"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the status of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getStatus"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "string",
          "HINT": "Returns the related research from the proposal_number field (RF migration)",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getRelatedResearch"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the research's PI's Middle Initial",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getMiddleInitial"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the research's PI's First Name",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getFirstName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring organization type of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getOrgType"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the type of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getType"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns account info given the research ID and dollar purpose (funded or proposed) of a research",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            },
            {
              "HINT": "dollar purpose of a research whether it is funded or proposed",
              "TYPE": "string",
              "NAME": "dollarPurpose"
            },
            {
              "HINT": "Account ID",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "%",
              "NAME": "accountID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetInfoForResearchID"
          ],
          "ACCESS": "public",
          "NAME": "getAccountInfoFromResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns business unit description",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getBusinessUnit"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsor name (Department name or Agency name)",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getSponsorName"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Outputs research information to html page",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "printResearch"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": false,
              "TYPE": "any",
              "NAME": "researchID"
            }
          ],
          "ACCESS": "public",
          "NAME": "init"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns credit splits information given the research ID and dollar purpose (funded or proposed) of a research",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            },
            {
              "HINT": "dollar purpose of a research, whether it is funded or proposed",
              "TYPE": "string",
              "NAME": "dollarPurpose"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetCreditSplits"
          ],
          "ACCESS": "public",
          "NAME": "getCreditSplitsFromResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's web URL",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyUrl"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns all search indexes.",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ParisSearch.usp_GetIndices"
          ],
          "NAME": "getIndices"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the research is disclosed",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isDisclosed"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns sponsoring agency contract number of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getSponsoringAgencyContractNum"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns folder labels for given research ID.",
          "PARAMETERS": [
            {
              "HINT": "ResearchID.",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argResearchID"
            }
          ],
          "STORED_PROCEDURES": [
            "TeraDocs.usp_ResearchGetFolderLabelsDocsForResearchID"
          ],
          "NAME": "getFolderLabelsForResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's City, State and Zip",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyCityStateZip"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring organization name of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getOrgName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns researchID",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the description of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDescription"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's fax",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyFax"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's phone",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyPhone"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns research Id for a given folder ID.",
          "PARAMETERS": [
            {
              "HINT": "Folder ID.",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argFolderID"
            }
          ],
          "STORED_PROCEDURES": [
            "TeraDocs.usp_ResearchGetResearchIDForFolderID"
          ],
          "NAME": "getResearchIDForFolderID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns account numbers formatted as a string old account numbers are in parenthesis",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": "[runtime expression]",
              "NAME": "argResearchID"
            },
            {
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": 0,
              "NAME": "argBoolPi"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetAccountsListForResearchIDList",
            "ARGIS_Common.usp_AccountGetAliasListForAccountList"
          ],
          "ACCESS": "public",
          "NAME": "getAccountNumbersFormatted"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a resultset with the Research information",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetInfoFromResearchID"
          ],
          "ACCESS": "public",
          "NAME": "getResearchInfoFromResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the start date of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getStartDate"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns account numbers including the old account numbers of a Research ID.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": "[runtime expression]",
              "NAME": "argResearchID"
            },
            {
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": 0,
              "NAME": "argBoolPi"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_AccountGetAccountsListForResearchIDList",
            "ARGIS_Common.usp_AccountGetAliasListForAccountList"
          ],
          "ACCESS": "public",
          "NAME": "getAccountNumbers"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns research list of a faculty member given the faculty ID",
          "PARAMETERS": [
            {
              "HINT": "faculty Id of the faculty member to list his/her awards.",
              "TYPE": "numeric",
              "NAME": "facultyID"
            },
            {
              "HINT": "Dollar purpose of a research (funded or proposed)",
              "TYPE": "string",
              "NAME": "dollarPurpose"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetListForFaculty"
          ],
          "ACCESS": "public",
          "NAME": "getResearchList"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Filters the Result set returned by getIndices using Advanced Criteria",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "field_name"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "phrase_criteria"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "OR_words_criteria"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Filter_Department"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Filter_College"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Filter_Agency"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Filter_ResStatus"
            },
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "stCriteria"
            }
          ],
          "STORED_PROCEDURES": [
            "ParisSearch.usp_GetAdvancedSearch"
          ],
          "NAME": "getResultsAdvanced"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the date received of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDateReceived"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns research ID for given account Number.",
          "PARAMETERS": [
            {
              "HINT": "Account Number.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_ResearchGetResearchIDForAcocuntNumber"
          ],
          "NAME": "getResearchIDForAccountNumber_deprecated"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns proposal number of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getProposalNumber"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the deliverables of Research ID.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": "[runtime expression]",
              "NAME": "argResearchID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetDeliverables"
          ],
          "ACCESS": "public",
          "NAME": "getDeliverables"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the general comments of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getGeneralComments"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the number of records for the Research Information.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getNumRecs"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the research's PI's people ID",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getPIID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's address",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyAddress"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency source of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencySource"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns all departments/colleges/agencies, etc.",
          "PARAMETERS": [
            {
              "HINT": "Entity Type. Options include: Department, College, Agency, ResearchType, ResearchStatus, PeopleRole",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argEntity"
            }
          ],
          "STORED_PROCEDURES": [
            "ParisSearch.usp_GetEntity"
          ],
          "NAME": "getEntityList"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the research's PI's LastName",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getLastName"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns true if given research ID exists.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argResearchID"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchDoesResearchIDExist"
          ],
          "NAME": "doesResearchExist"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the end date of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getEndDate"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the title of a Research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getTitle"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency name of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyName"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the number of copies of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getNumCopies"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Filters the Result set returned by getIndices using Basic Criteria",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "Criteria"
            },
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "stCriteria"
            },
            {
              "REQUIRED": false,
              "TYPE": "boolean",
              "DEFAULT": false,
              "NAME": "LOCAL_DEBUG_ENABLE"
            }
          ],
          "STORED_PROCEDURES": [
            "ParisSearch.usp_GetBasicSearch"
          ],
          "NAME": "getResultsBasic"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a list of PIs and CoPIs of a Research",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetPICoPIList"
          ],
          "ACCESS": "public",
          "NAME": "getPICoPIList"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsoring agency's address2",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAgencyAddress2"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the last modification date of a research",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDateLastModified"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns indirect splits given the research ID and dollar purpose (funded or proposed) of a research",
          "PARAMETERS": [
            {
              "HINT": "Research ID",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            },
            {
              "HINT": "dollar purpose of a research, whether it is funded or proposed",
              "TYPE": "string",
              "NAME": "dollarPurpose"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetIndirectSplits"
          ],
          "ACCESS": "public",
          "NAME": "getIndirectSplitsFromResearchID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the sponsor type Department or Agency",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getSponsorType"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns list of account numbers, description, faculty",
          "PARAMETERS": [
            {
              "HINT": "Whether or not the user has full access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "hasTotalAccess"
            },
            {
              "HINT": "Employee ID of the current user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "employeeID"
            },
            {
              "HINT": "org ID list of the Department/College Access Lists",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "departmentCollegeAccessList"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetPSAccountNumbersForEmployeeID"
          ],
          "ACCESS": "public",
          "NAME": "getPSAccountNumbers"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a resultset with the Research information",
          "PARAMETERS": [
            {
              "HINT": "Account Number (either new or old)",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "accountNumber"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_ResearchGetInfoForAccountNumber"
          ],
          "ACCESS": "public",
          "NAME": "getResearchInfoForAccountNumber"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns documents and their information for given research ID.",
          "PARAMETERS": [
            {
              "HINT": "ResearchID.",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "argResearchID"
            }
          ],
          "STORED_PROCEDURES": [
            "TeraDocs.usp_ResearchGetDocsForResearchID"
          ],
          "NAME": "getDocsForResearchID"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Research",
      "RELATIVE_PATH": "Components/Research.cfc",
      "NAME": "Components.Research"
    },
    {
      "DISPLAYNAME": "GSecurity",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Security.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Functions used for security handling.",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "HINT": "Decrypts a user's password",
          "PARAMETERS": [
            {
              "HINT": "Decrypted username",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "pwd"
            }
          ],
          "ACCESS": "public",
          "NAME": "decryptPassword"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Encrypts a user's ARGIS password.",
          "PARAMETERS": [
            {
              "HINT": "The unencrypted password to encrypt.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "password"
            }
          ],
          "ACCESS": "public",
          "NAME": "encryptPassword"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Decrypts a user's username",
          "PARAMETERS": [
            {
              "HINT": "Decrypted username",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            }
          ],
          "ACCESS": "public",
          "NAME": "decryptUserName"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Security",
      "RELATIVE_PATH": "Components/Security.cfc",
      "NAME": "Components.Security"
    },
    {
      "DISPLAYNAME": "GUser CFC",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\User.cfc",
      "EXTENDS": {
        "DISPLAYNAME": "People CFC",
        "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\People.cfc",
        "EXTENDS": {
          "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
          "TYPE": "component",
          "FULLNAME": "WEB-INF.cftags.component",
          "NAME": "WEB-INF.cftags.component"
        },
        "HINT": "Includes functions related to Users/Faculty Members",
        "FUNCTIONS": [
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's last name.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getLastName"
          },
          {
            "RETURNTYPE": "void",
            "HINT": "Constructor",
            "PARAMETERS": [
              {
                "HINT": "The people ID of the faculty member/user",
                "REQUIRED": false,
                "TYPE": "numeric",
                "NAME": "peopleID"
              }
            ],
            "ACCESS": "public",
            "NAME": "init"
          },
          {
            "RETURNTYPE": "query",
            "HINT": "Returns payroll information for a particular year for some employee ID",
            "PARAMETERS": [
              {
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argYear"
              },
              {
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argEmployeeID"
              },
              {
                "REQUIRED": true,
                "TYPE": "boolean",
                "NAME": "argHasTotalAccess"
              },
              {
                "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argEmployee"
              },
              {
                "HINT": "Employee First Name, should be passed when year <= 2003.",
                "REQUIRED": false,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "argEmployeeFirstName"
              },
              {
                "HINT": "Employee Middle Initial, should be passed when year <= 2003.",
                "REQUIRED": false,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "argEmployeeMiddleInitial"
              }
            ],
            "ACCESS": "public",
            "NAME": "getPayrollForYear"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's employee ID.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getEmployeeID"
          },
          {
            "RETURNTYPE": "void",
            "PARAMETERS": [
              {
                "REQUIRED": true,
                "TYPE": "struct",
                "NAME": "argDataSources"
              }
            ],
            "ACCESS": "public",
            "NAME": "initializeDatasources"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's title.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getTitle"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's role",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getPeopleRole"
          },
          {
            "RETURNTYPE": "query",
            "HINT": "Returns the accessible faculty members list for a user",
            "PARAMETERS": [
              {
                "HINT": "Whether or not the user has full access",
                "REQUIRED": true,
                "TYPE": "boolean",
                "NAME": "hasTotalAccess"
              },
              {
                "HINT": "Initial letter of the faculty last name",
                "REQUIRED": false,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "initial"
              },
              {
                "HINT": "username of the current user",
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "uname"
              },
              {
                "HINT": "org ID list of the Department/College Access Lists",
                "REQUIRED": true,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "departmentCollegeAccessList"
              }
            ],
            "ACCESS": "public",
            "NAME": "getAccessibleFaculty"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's fax number.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getFaxNumber"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's first name.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getFirstName"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's organization name.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getDepartmentName"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's full name.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getFullName"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns a faculty member's name",
            "PARAMETERS": [
              {
                "HINT": "faculty Id of the faculty member",
                "TYPE": "numeric",
                "NAME": "facultyID"
              }
            ],
            "ACCESS": "public",
            "NAME": "getFacultyName"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's middle initial.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getMiddleInitial"
          },
          {
            "RETURNTYPE": "query",
            "HINT": "Returns uniwide payroll information for a particular year for some employee ID",
            "PARAMETERS": [
              {
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argYear"
              },
              {
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argEmployeeID"
              },
              {
                "REQUIRED": true,
                "TYPE": "boolean",
                "NAME": "argHasTotalAccess"
              },
              {
                "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argEmployee"
              },
              {
                "HINT": "Employee First Name, should be passed when year <= 2003.",
                "REQUIRED": false,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "argEmployeeFirstName"
              },
              {
                "HINT": "Employee Middle Initial, should be passed when year <= 2003.",
                "REQUIRED": false,
                "TYPE": "string",
                "DEFAULT": "",
                "NAME": "argEmployeeMiddleInitial"
              }
            ],
            "ACCESS": "public",
            "NAME": "getUniWidePayrollForYear"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's phone number.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getPhoneNumber"
          },
          {
            "RETURNTYPE": "void",
            "HINT": "Returns people related info given the peopleID",
            "PARAMETERS": [
              {
                "HINT": "The people ID of the faculty member/user",
                "REQUIRED": true,
                "TYPE": "numeric",
                "NAME": "peopleID"
              }
            ],
            "ACCESS": "private",
            "NAME": "getPeopleInfoFromPeopleID"
          },
          {
            "RETURNTYPE": "query",
            "HINT": "Returns the encrypted pwd, given the username",
            "PARAMETERS": [
              {
                "HINT": "username",
                "REQUIRED": true,
                "TYPE": "string",
                "NAME": "argUserName"
              }
            ],
            "ACCESS": "public",
            "NAME": "getEncryptedPwd_deprecated"
          },
          {
            "RETURNTYPE": "numeric",
            "HINT": "Returns the user's people ID.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getPeopleID"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's email address.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getEmail"
          },
          {
            "RETURNTYPE": "string",
            "HINT": "Returns the user's/faculty member's organization type.",
            "PARAMETERS": [],
            "ACCESS": "public",
            "NAME": "getCollegeName"
          }
        ],
        "TYPE": "component",
        "FULLNAME": "Components.People",
        "NAME": "Components.People"
      },
      "HINT": "Functions used for users of the system.",
      "FUNCTIONS": [
        {
          "OUTPUT": false,
          "RETURNTYPE": "struct",
          "HINT": "Authenticates a user against LDAP.",
          "PARAMETERS": [
            {
              "HINT": "The username of user to validate",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "userName"
            },
            {
              "HINT": "The password of the user to validate (in plain text)",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "userPass"
            }
          ],
          "ACCESS": "public",
          "NAME": "validateLoginLDAP"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a users proxy users list",
          "PARAMETERS": [
            {
              "HINT": "username of the current logged in user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_UserGetUsersForProxy"
          ],
          "ACCESS": "public",
          "NAME": "getUserProxyList_deprecated"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets the authentication method for the user; ARGIS:1, referer + PUser: 2, referer + EPUser: 3",
          "PARAMETERS": [
            {
              "HINT": "authentication method number",
              "TYPE": "numeric",
              "NAME": "authenticationMethod"
            }
          ],
          "ACCESS": "public",
          "NAME": "setAuthenticationMethod"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the last authenticated user needs to change their password.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "mustChangePassword"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns collegue access list for the current user",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetDepartmentCollegeAccessList"
          ],
          "ACCESS": "private",
          "NAME": "initCollegeAccessList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Check to see if user account is active in argis",
          "PARAMETERS": [
            {
              "HINT": "employee ID of the user account to check",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "employeeId"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserIsActiveInArgis"
          ],
          "ACCESS": "public",
          "NAME": "isUserActiveInArgis"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Initializes the proxy user usage",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initProxyUser"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the management link's string",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getPwdManagementLink"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToRevenueToDate"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToUniwideTab"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns user information given an email address, used for login help page",
          "PARAMETERS": [
            {
              "HINT": "email address",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "emailAddress"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_UserGetInfoFromEmailAddress"
          ],
          "ACCESS": "public",
          "NAME": "getEmailAddressDetails_deprecated"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "HINT": "The username to authenticate.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            },
            {
              "HINT": "The unencrypted password to use to authenticate the user, which will be encrypted by the function.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "pwd"
            },
            {
              "HINT": "To use argis web service, set this to ARGISSSO, else UCFSSO",
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "ARGISSSO",
              "NAME": "ssotype"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_PeopleGetInfoFromEmployeeID"
          ],
          "ACCESS": "public",
          "NAME": "init"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToRolesandFeatures"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether or not a user can access a faculty member",
          "PARAMETERS": [
            {
              "HINT": "People ID of the faculty that the user is trying to reach",
              "TYPE": "numeric",
              "NAME": "facultyID"
            },
            {
              "HINT": "username of the user logged in to the system",
              "TYPE": "string",
              "NAME": "uname"
            },
            {
              "HINT": "Department and college access lists of a user",
              "TYPE": "string",
              "NAME": "departmentCollegeAccessList"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserCanAccessFaculty"
          ],
          "ACCESS": "public",
          "NAME": "canAccessFaculty"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the user has access to a Research",
          "PARAMETERS": [
            {
              "HINT": "ResearchID that the user is trying to access",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            },
            {
              "HINT": "username of the current logged in user",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            },
            {
              "HINT": "whether or not the user has total access",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "hasTotalAccess"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserCanAccessResearch"
          ],
          "ACCESS": "public",
          "NAME": "canAccessResearch"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns home department name of the current user",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetDepartmentCollegeName"
          ],
          "ACCESS": "private",
          "NAME": "initDepartmentName"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the last authenticated user is active.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isActive"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToUniwideSelectRange"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Is the pwd correct or not",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isIncorrectPwd"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Authenticates user against ARGIS and stores the return in VARIABLES structure.",
          "PARAMETERS": [
            {
              "HINT": "User name to authenticate.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUsername"
            },
            {
              "HINT": "The unencrypted password.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argPassword"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_UserGetARGISPassword"
          ],
          "ACCESS": "public",
          "NAME": "authenticateOld_deprecated"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns home department ID of the current user",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetHomeDepartmentID"
          ],
          "ACCESS": "private",
          "NAME": "initHomeDepartmentID"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Authenticates a user if he/she is in the ARGIS people table and the referer is an approved one",
          "PARAMETERS": [
            {
              "HINT": "username",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "username"
            },
            {
              "HINT": "referer",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argReferer"
            },
            {
              "HINT": "whether or not the username is encrypted, if TRUE, function decrypts the username.",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "isUserNameEncrypted"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_PeopleGetInfoFromUserName_new"
          ],
          "ACCESS": "private",
          "NAME": "authenticatePUser_deprecated"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns department access list for the current user",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetDepartmentCollegeAccessList"
          ],
          "ACCESS": "private",
          "NAME": "initDepartmentAccessList"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the proxy user logged in as the current user",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getProxyUser"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's college access list",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getCollegeAccessList"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Initializes the user Roles in ARGIS as a List",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetRoles"
          ],
          "ACCESS": "private",
          "NAME": "initRolesList"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor for PUser or encrypted PUser",
          "PARAMETERS": [
            {
              "HINT": "The username to authenticate.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "uname"
            },
            {
              "HINT": "Referer.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "referer"
            },
            {
              "HINT": "whether or not the username is encrypted, if TRUE, function decrypts the username.",
              "REQUIRED": true,
              "TYPE": "boolean",
              "NAME": "isUserNameEncrypted"
            }
          ],
          "ACCESS": "public",
          "NAME": "initPUser_deprecated"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Initializes the user's feature access list to contol the access to features like: Switch User, Uniwide tab, Uniwide Payroll, Uniwide Range, etc",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initAccessControl"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Authenticates a user against the ARGIS sp and stores the return values as instance data.",
          "PARAMETERS": [
            {
              "HINT": "The username to authenticate.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "username"
            },
            {
              "HINT": "The unencrypted password to use to authenticate the user, which will be encrypted by the function.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "password"
            }
          ],
          "STORED_PROCEDURES": [
            "ARGIS_UCF.usp_SecurityAuthenticate"
          ],
          "ACCESS": "public",
          "NAME": "authenticate_deprecated"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Initializes the user's access level, for display purposes only; personal, departmental, college",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initAccessLevel"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns college name of the current user",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "ARGIS_Common.usp_UserGetDepartmentCollegeName"
          ],
          "ACCESS": "private",
          "NAME": "initCollegeName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Sets college and department access lists for the current user",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initAccessLists"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the Decision Support Systems",
          "PARAMETERS": [
            {
              "HINT": "ResearchID that the user is trying to access",
              "REQUIRED": true,
              "TYPE": "numeric",
              "NAME": "researchID"
            }
          ],
          "ACCESS": "public",
          "NAME": "hasAccessToSalaryEncumbrances"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's department access list",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDepartmentAccessList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToUniwidePayroll"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the UniWide tab",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToSwitchUser"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Authenticates user against ARGIS Web Service and stores the return in VARIABLES structure.",
          "PARAMETERS": [
            {
              "HINT": "User name to authenticate.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argUsername"
            },
            {
              "HINT": "The unencrypted password.",
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argPassword"
            }
          ],
          "ACCESS": "public",
          "NAME": "authenticateARGISSSO"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the Decision Support Systems",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "hasAccessToDSS"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether or not the user has total access",
          "PARAMETERS": [],
          "STORED_PROCEDURES": [
            "[ARGIS_Common].[usp_UserHasTotalAccess]"
          ],
          "ACCESS": "public",
          "NAME": "hasTotalAccess"
        },
        {
          "RETURNTYPE": "void",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the user's home department ID.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getHomeDepartmentID"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's username",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getUserName"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's roles list from ARGIS.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getRolesList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the user asked to reset his password and has not reset the password yet -- forgot user",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isResetPassword"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the curret user has access to the given feature",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "featureCode"
            }
          ],
          "ACCESS": "public",
          "NAME": "hasAccessToFeature"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Initializes the user's authentication method, ARGIS:1, referer + PUser: 2, referer + EPUser: 3",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initAuthenticationMethod"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns ARGIS people ID by employee ID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "employeeId"
            }
          ],
          "ACCESS": "public",
          "NAME": "getArgisPeopleId"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns ARGIS username given the employee ID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "employeeId"
            }
          ],
          "ACCESS": "public",
          "NAME": "getArgisUserName_deprecated"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets the current proxy user, used to keep track of the proxy user that is logged in as the current user",
          "PARAMETERS": [
            {
              "HINT": "current proxy user who is logged in as the current user",
              "TYPE": "string",
              "NAME": "proxyUser"
            }
          ],
          "ACCESS": "public",
          "NAME": "setProxyUser"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's access level",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAccessLevel"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the user's department and college access list",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getDepartmentCollegeAccessList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the last authentication attempt succeeded.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isAuthenticated"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the last authenticated user was a proxy.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "isProxy"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets the proxy user to true meaning that a proxy user is used logged in as the current user.",
          "PARAMETERS": [
            {
              "HINT": "whether or not a proxy is used logged in as the current user.",
              "TYPE": "boolean",
              "NAME": "isProxy"
            }
          ],
          "ACCESS": "public",
          "NAME": "setProxy"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Gets the authentication method for the user; ARGIS:1, referer + PUser: 2, referer + EPUser: 3",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getAuthenticationMethod"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.User",
      "RELATIVE_PATH": "Components/User.cfc",
      "NAME": "Components.User"
    },
    {
      "DISPLAYNAME": "GUtility",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Components\\Utility.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "HINT": "Functions used to do date and etc. calculations",
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the Application URL",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getApplicationURL"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns the current Fiscal Year.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getCurrentFiscalYear"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "SSL required to switch between secure and non secure modes",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "selectSecurityMode"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Utility",
      "RELATIVE_PATH": "Components/Utility.cfc",
      "NAME": "Components.Utility"
    },
    {
      "DISPLAYNAME": "Application",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\persistent cookies\\Application.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "OUTPUT": true,
      "HINT": "Handles the application.",
      "FUNCTIONS": [
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "PARAMETERS": [],
          "NAME": "OnRequestEnd"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Fires at first part of page processing",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "request"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnRequestStart"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Fires when the session is first created.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "OnSessionStart"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "This function handles requests for non-existent files.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "targetPage"
            }
          ],
          "NAME": "OnMissingTemplate"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "boolean",
          "HINT": "Fires when the application is first created. Define application-scoped variables here.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "OnApplicationStart"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Fires when an exception occurs that is not caught by a try/catch.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "any",
              "NAME": "exception"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "",
              "NAME": "EventName"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnError"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Fires when the session is terminated.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "SessionScope"
            },
            {
              "REQUIRED": false,
              "TYPE": "struct",
              "DEFAULT": "[runtime expression]",
              "NAME": "ApplicationScope"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnSessionEnd"
        },
        {
          "OUTPUT": false,
          "RETURNTYPE": "void",
          "HINT": "Fires when the application is terminated.",
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "struct",
              "DEFAULT": "[runtime expression]",
              "NAME": "ApplicationScope"
            }
          ],
          "ACCESS": "public",
          "NAME": "OnApplicationEnd"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "persistent cookies.Application",
      "RELATIVE_PATH": "persistent cookies/Application.cfc",
      "NAME": "persistent cookies.Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\RAD\\GSort.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "OUTPUT": true,
          "RETURNTYPE": "array",
          "HINT": "sorts a multi dimentional array.",
          "PARAMETERS": [
            {
              "HINT": "the array to be sorted",
              "REQUIRED": true,
              "TYPE": "array",
              "NAME": "l_array"
            },
            {
              "HINT": "asc or desc",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "desc",
              "NAME": "sort_order"
            },
            {
              "HINT": "numeric, text, textnocase",
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "numeric",
              "NAME": "sort_type"
            },
            {
              "HINT": "The column index to use in sort.",
              "REQUIRED": false,
              "TYPE": "numeric",
              "DEFAULT": 1,
              "NAME": "sort_column"
            }
          ],
          "ACCESS": "public",
          "NAME": "ArraySortM"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "RAD.GSort",
      "RELATIVE_PATH": "RAD/GSort.cfc",
      "BINDINGNAME": "GSort",
      "NAME": "RAD.GSort"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\RAD_DataUpload\\Application.cfc",
      "TYPE": "component",
      "FULLNAME": "RAD_DataUpload.Application",
      "RELATIVE_PATH": "RAD_DataUpload/Application.cfc",
      "NAME": "RAD_DataUpload.Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\ws\\Application.cfc",
      "TYPE": "component",
      "FULLNAME": "ws.Application",
      "RELATIVE_PATH": "ws/Application.cfc",
      "NAME": "ws.Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\ws\\Auth_Component.cfc",
      "EXTENDS": {
        "PATH": "E:\\ColdFusion11\\cfusion\\wwwroot\\WEB-INF\\cftags\\component.cfc",
        "TYPE": "component",
        "FULLNAME": "WEB-INF.cftags.component",
        "NAME": "WEB-INF.cftags.component"
      },
      "FUNCTIONS": [
        {
          "RETURNTYPE": "string",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "username"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "password"
            }
          ],
          "ACCESS": "remote",
          "NAME": "getIfAuthorized"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "ws.Auth_Component",
      "RELATIVE_PATH": "ws/Auth_Component.cfc",
      "NAME": "ws.Auth_Component"
    }
  ]
}
