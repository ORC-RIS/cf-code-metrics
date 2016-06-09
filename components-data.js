{
  "components": [
    {
      "DISPLAYNAME": "Application",
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\Application.cfc",
      "RELATIVE_PATH": "Application.cfc",
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
          "PARAMETERS": [],
          "OUTPUT": true,
          "RETURNTYPE": "void",
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
      "NAME": "search_employee"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\testEze.cfc",
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
      "FULLNAME": "testEze",
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
          "RETURNTYPE": "string",
          "NAME": "getIfAuthorized"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "argis_auth.Auth_Component",
      "NAME": "argis_auth.Auth_Component"
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Employee ID",
              "NAME": "ArgisPeopleID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getParisUserRolesByUserID"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisFeatureID",
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
          "ACCESS": "public",
          "NAME": "setParisFeatureAccess"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Set the Paris User Role for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "EmployeeID",
              "NAME": "EmployeeID"
            },
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisRoleID",
              "NAME": "ParisRoleID"
            }
          ],
          "ACCESS": "public",
          "NAME": "setParisUserRole"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "EmployeeID",
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
          "ACCESS": "public",
          "NAME": "deleteParisUserRole"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Return the Paris Roles for a given a EmployeeID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Employee Id",
              "NAME": "EmployeeID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getParisUserRolesByEmployeeID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [],
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisFeatureID",
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
          "ACCESS": "public",
          "NAME": "deleteParisFeatureAccess"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Creates a new Paris User Role Change Detail",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisRoleAuditID",
              "NAME": "ParisRoleAuditID"
            },
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisRoleID",
              "NAME": "ParisRoleID"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "G for granted, R for revoked",
              "NAME": "Action"
            }
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
          "ACCESS": "public",
          "NAME": "getParisFeature"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisFeatureID",
              "NAME": "ParisFeatureID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureAccessByFeatureID"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Return all the Active Argis Users",
          "PARAMETERS": [
            {
              "TYPE": "numeric",
              "DEFAULT": -1,
              "HINT": "User Employee ID ",
              "NAME": "employeeID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getArgisActiveUsers"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Creates a new Paris User Role Change",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "EmployeeID",
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
          "ACCESS": "public",
          "NAME": "setRoleAudit"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisUserRole for a given a UserID",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "getParisUserRoleForTable"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks whether given employeeid is valid in argis",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Whether or not the user has full access",
              "NAME": "EmployeeID"
            }
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
          "ACCESS": "public",
          "NAME": "getParisRole"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the ParisFeatureAccess for a given a ParisFeatureID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ParisFeatureID",
              "NAME": "ParisFeatureAccessID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureAccess"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "return the Paris Feature Codes for a given a UserID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Employee ID",
              "NAME": "EmployeeID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getParisFeatureCodesByUserID"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.AccessControl",
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
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "Whether or not the user has full access",
              "NAME": "argHasTotalAccess"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Username of the current user",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "User name",
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
          "ACCESS": "public",
          "NAME": "funcAddSurveyData"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks user's role to see if Revenue To Date is accessible",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "Whether or not the user has full access",
              "NAME": "argHasTotalAccess"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Session User Roles",
              "NAME": "argUserRoles"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Username of the current user",
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
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "Whether or not the user has full access",
              "NAME": "argHasTotalAccess"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Username of the current user",
              "NAME": "argSessionUsername"
            }
          ],
          "ACCESS": "public",
          "NAME": "funcCanViewPayroll_deletefunction"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
          "NAME": "initializeDatasources"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Checks if user has taken survey before or has opted 'Never Ask Again'",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Session user name",
              "NAME": "argUserName"
            }
          ],
          "ACCESS": "public",
          "NAME": "funcHasUserTakenSurvey"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.AccessToFeatures",
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
          "ACCESS": "private",
          "NAME": "calculateTotalSalaryEncumbrance_faster"
        },
        {
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
          "ACCESS": "public",
          "RETURNTYPE": "numeric",
          "NAME": "getAccountARGISBudgetTotal"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
          "NAME": "initializeDatasources"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
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
          "ACCESS": "private",
          "NAME": "getAccountBudget"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns true if any account of given Account list exists in given Classification in given year",
          "PARAMETERS": [
            {
              "TYPE": "string",
              "REQURIED": true,
              "HINT": "Takes a list of account numbers",
              "NAME": "argAccountNumber"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Options include 'Department', 'Project' or 'RF'.",
              "NAME": "argAccountClassification"
            },
            {
              "REQUIRED": false,
              "TYPE": "string",
              "HINT": "All, 2008, 2007, etc.",
              "NAME": "argFiscalYear"
            }
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number.",
              "NAME": "argAccountNumber"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year.",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Fiscal Year for which actuals, budget, encumbrances will be calculated.",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "UniWide Account Classification. Can be Project or Department or RF.",
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
          "ACCESS": "private",
          "NAME": "getAccountActualsForAssociatedRevenue"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number.",
              "NAME": "argAccountNumber"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year.",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account ID.",
              "NAME": "argAccountID"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year.",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Fiscal Year for which actuals, budget, encumbrances will be calculated.",
              "NAME": "argFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "date",
              "HINT": "Last pay period end date.",
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssets"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number",
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "public",
          "NAME": "getOPSEncumbranceDetails_faster"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
          "ACCESS": "private",
          "NAME": "getAccountPreEncumbrances"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountBudExpPerObjCodeForIndirect"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total salary encumbrance for an account",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "deprecated_calculateTotalSalaryEncumbrance"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Category like Sal, OPS, etc.",
              "NAME": "argCategory"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssetsAccountsReceivable"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number",
              "NAME": "argAccountNumber"
            }
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
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Type of account: Proj or Dept",
              "NAME": "argProjDept"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "All fiscal years",
              "NAME": "argAll"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Type of account: P or D",
              "NAME": "argProjDept"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "All fiscal years",
              "NAME": "argAll"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "List of fund codes to filter on",
              "NAME": "argListFundCodes"
            }
          ],
          "ACCESS": "public",
          "NAME": "getSumsPerFundCode"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns check amounts for specific object codes for a given account number or account number list. Returns nothing if accountType is ResearchFoundation",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Category like AR_Misc, AR_Overpayments, Prepaid",
              "NAME": "argObjCodeCategory"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashDetailsForSpecificObjectCodes"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns a boolean indicating if the account can run on associated revenue or not.",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "getCanRunOnAssociatedRevenue"
        },
        {
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
          "RETURNTYPE": "numeric",
          "NAME": "getAssociatedRevenueTotal"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "query",
          "NAME": "getAccountAliasResultSetByAccountNumber"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountBudExpPerObjCodeForExpenses"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
          "NAME": "getFY11DeptAccountNumber"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the Revenue to date (starting from 2004) for either Dept or Project.",
          "PARAMETERS": [],
          "ACCESS": "public",
          "NAME": "calcRevenueToDate"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns the series total or the series Categorized total.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
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
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
          "ACCESS": "private",
          "NAME": "getAccountEncumbrances"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the result set of relational REQs or POs in Encumb/PreEncumb.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Series like Encumbrances, PreEncumbrances",
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
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
          "NAME": "getLatestPayrollContractEndDate"
        },
        {
          "RETURNTYPE": "Date",
          "HINT": "Returns the last pay period end date",
          "PARAMETERS": [],
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "private",
          "RETURNTYPE": "string",
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
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
          "NAME": "getCurrentFiscalYear"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns Awarded/Funded/Proposed Budget result set, Budget can optionally be returned for single category",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Can be Awarded, Funded, or Proposed.",
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
          "ACCESS": "private",
          "NAME": "getUniWideAccountDescription"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "private",
          "RETURNTYPE": "void",
          "NAME": "setAccountType_alt"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "private",
          "RETURNTYPE": "void",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number.",
              "NAME": "argAccountNumber"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year.",
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
              "REQUIRED": true,
              "TYPE": "date",
              "HINT": "Last pay period end date.",
              "NAME": "argLastPPE"
            }
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForEquities"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
          "NAME": "getQMergeAllPreEnc"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns DataMart Project Account Numbers",
          "PARAMETERS": [],
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Type of account: Proj or Dept",
              "NAME": "argProjDept"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "All fiscal years",
              "NAME": "argAll"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "List of fund codes to filter on",
              "NAME": "argListFundCodes"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
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
          "ACCESS": "public",
          "NAME": "getAccountResearchIDList"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
          "NAME": "getTotalSalaryEncumbrance_faster"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": false,
              "TYPE": "string",
              "DEFAULT": "[runtime expression]",
              "NAME": "argAccountID"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "query",
          "NAME": "getAccountAliasResultSet"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total OPS encumbrance for an account",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "calculateTotalOPSEncumbrance_faster"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountBudExpPerObjCodeForIntrafund"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
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
          "RETURNTYPE": "query",
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForAssetsPrepaid"
        },
        {
          "RETURNTYPE": "struct",
          "HINT": "Returns the series total or the series Categorized total.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
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
          "ACCESS": "public",
          "NAME": "getBudAndExp_Actuals"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
          "NAME": "getTotalOPSEncumbrance_faster"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns total OPS encumbrance for an account",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "deprecated_calculateTotalOPSEncumbrance"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountCashforAR_Misc"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns OPS encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number",
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "public",
          "NAME": "getOPSEncumbranceDetails"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "string",
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
          "ACCESS": "public",
          "NAME": "getBudAndExp_FundedBudget"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Series, valid values are Contractual Budget, Funded Budget, Actuals, Encubmrances, PreEncumbrances, All",
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
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForActuals"
        },
        {
          "RETURNTYPE": "any",
          "HINT": "Returns check amounts for specific object codes for a given account number or account number list. Returns nothing if accountType is ResearchFoundation",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Category like AR_Misc, AR_Overpayments, Prepaid",
              "NAME": "argObjCodeCategory"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "NAME": "getAccountCashForSpecificObjectCodes"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns 'Project' or 'Department'",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "classifyAccount"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
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
          "ACCESS": "public",
          "NAME": "getOldAccountNumberList_deprecated"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns salary encumbrance details until the contract end date",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number",
              "NAME": "argAccountNumber"
            }
          ],
          "ACCESS": "public",
          "NAME": "getSalaryEncumbranceDetails"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
          "NAME": "getQMergeAllActuals"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountCashforAR_Overpayments"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns the series details or the series Categorized details.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Series like Expenditures, Actuals, Encumbrances, PreEncumbrances, Budget",
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
              "REQUIRED": false,
              "TYPE": "numeric",
              "HINT": "Object Code like 751101, 754205, etc.",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "UniWide Account Number.",
              "NAME": "argAccountNumber"
            }
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
          "ACCESS": "public",
          "NAME": "getRFAccounts"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "DEFAULT": "All",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Type of account: P or D",
              "NAME": "argProjDept"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "All fiscal years",
              "NAME": "argAll"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
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
          "ACCESS": "public",
          "NAME": "getSumsPerCollege"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "returns the account list.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "UniWide Account number.",
              "NAME": "argAccountNumber"
            }
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
          "ACCESS": "private",
          "NAME": "getAccountActuals"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Retrieves funded tuition budget for the account ID",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number",
              "NAME": "argAccountID"
            }
          ],
          "ACCESS": "public",
          "NAME": "getFundedTuitionBudgetDetails"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Current Fiscal Year",
              "NAME": "argCurrentFiscalYear"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Type of account: P or D",
              "NAME": "argProjDept"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "All fiscal years",
              "NAME": "argAll"
            },
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "List of fund codes to filter on",
              "NAME": "argListFundCodes"
            }
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
          "ACCESS": "public",
          "NAME": "getCashDetailsForLiabilities"
        },
        {
          "PARAMETERS": [],
          "ACCESS": "public",
          "RETURNTYPE": "query",
          "NAME": "getQMergeAllEnc"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets account information into variables",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "setAccountInfoFromAccountID"
        },
        {
          "PARAMETERS": [
            {
              "TYPE": "string",
              "DEFAULT": "0000",
              "HINT": "Selected fiscal year",
              "NAME": "argFiscalYear"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "any",
          "NAME": "getAccountBudExpPerObjCodeForSalary"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Account",
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
          "ACCESS": "public",
          "HINT": "Logs Web Server activities",
          "NAME": "logWebServiceActivity"
        },
        {
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
          "ACCESS": "public",
          "HINT": "Logs activity into current Log table for PARIS",
          "NAME": "logActivity"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Logging",
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
              "REQUIRED": false,
              "TYPE": "numeric",
              "HINT": "The people ID of the faculty member/user",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
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
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "Whether or not the user has full access",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "username of the current user",
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
              "TYPE": "numeric",
              "HINT": "faculty Id of the faculty member",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "The people ID of the faculty member/user",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "username",
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
          "ACCESS": "public",
          "NAME": "updateRADReturnMessage"
        },
        {
          "OUTPUT": true,
          "RETURNTYPE": "array",
          "HINT": "sorts a multi dimentional array.",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "array",
              "HINT": "the array to be sorted",
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
          "ACCESS": "public",
          "NAME": "getAssetDetails"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
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
          "ACCESS": "public",
          "NAME": "getRADList"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.RAD",
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
              "REQUIRED": false,
              "TYPE": "numeric",
              "HINT": "Research ID",
              "NAME": "researchID"
            }
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Research ID",
              "NAME": "researchID"
            },
            {
              "TYPE": "string",
              "HINT": "dollar purpose of a research whether it is funded or proposed",
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
              "REQUIRED": false,
              "TYPE": "any",
              "HINT": "Research ID",
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Research ID",
              "NAME": "researchID"
            },
            {
              "TYPE": "string",
              "HINT": "dollar purpose of a research, whether it is funded or proposed",
              "NAME": "dollarPurpose"
            }
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
          "PARAMETERS": [],
          "RETURNTYPE": "query",
          "HINT": "Returns all search indexes.",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ResearchID.",
              "NAME": "argResearchID"
            }
          ],
          "RETURNTYPE": "query",
          "HINT": "Returns folder labels for given research ID.",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Folder ID.",
              "NAME": "argFolderID"
            }
          ],
          "RETURNTYPE": "string",
          "HINT": "Returns research Id for a given folder ID.",
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
          "ACCESS": "public",
          "NAME": "getAccountNumbersFormatted"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a resultset with the Research information",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Research ID",
              "NAME": "researchID"
            }
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
          "ACCESS": "public",
          "NAME": "getAccountNumbers"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns research list of a faculty member given the faculty ID",
          "PARAMETERS": [
            {
              "TYPE": "numeric",
              "HINT": "faculty Id of the faculty member to list his/her awards.",
              "NAME": "facultyID"
            },
            {
              "TYPE": "string",
              "HINT": "Dollar purpose of a research (funded or proposed)",
              "NAME": "dollarPurpose"
            }
          ],
          "ACCESS": "public",
          "NAME": "getResearchList"
        },
        {
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
          "RETURNTYPE": "query",
          "HINT": "Filters the Result set returned by getIndices using Advanced Criteria",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number.",
              "NAME": "argAccountNumber"
            }
          ],
          "RETURNTYPE": "string",
          "HINT": "Returns research ID for given account Number.",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Entity Type. Options include: Department, College, Agency, ResearchType, ResearchStatus, PeopleRole",
              "NAME": "argEntity"
            }
          ],
          "RETURNTYPE": "query",
          "HINT": "Returns all departments/colleges/agencies, etc.",
          "NAME": "getEntityList"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
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
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "NAME": "argResearchID"
            }
          ],
          "RETURNTYPE": "boolean",
          "HINT": "Returns true if given research ID exists.",
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
          "RETURNTYPE": "query",
          "HINT": "Filters the Result set returned by getIndices using Basic Criteria",
          "NAME": "getResultsBasic"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a list of PIs and CoPIs of a Research",
          "PARAMETERS": [],
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "Research ID",
              "NAME": "researchID"
            },
            {
              "TYPE": "string",
              "HINT": "dollar purpose of a research, whether it is funded or proposed",
              "NAME": "dollarPurpose"
            }
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
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "Whether or not the user has full access",
              "NAME": "hasTotalAccess"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Employee ID of the current user",
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
          "ACCESS": "public",
          "NAME": "getPSAccountNumbers"
        },
        {
          "RETURNTYPE": "query",
          "HINT": "Returns a resultset with the Research information",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Account Number (either new or old)",
              "NAME": "accountNumber"
            }
          ],
          "ACCESS": "public",
          "NAME": "getResearchInfoForAccountNumber"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ResearchID.",
              "NAME": "argResearchID"
            }
          ],
          "RETURNTYPE": "query",
          "HINT": "Returns documents and their information for given research ID.",
          "NAME": "getDocsForResearchID"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Research",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Decrypted username",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The unencrypted password to encrypt.",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Decrypted username",
              "NAME": "uname"
            }
          ],
          "ACCESS": "public",
          "NAME": "decryptUserName"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "Components.Security",
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
                "REQUIRED": false,
                "TYPE": "numeric",
                "HINT": "The people ID of the faculty member/user",
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
                "REQUIRED": true,
                "TYPE": "string",
                "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
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
            "PARAMETERS": [
              {
                "REQUIRED": true,
                "TYPE": "struct",
                "NAME": "argDataSources"
              }
            ],
            "ACCESS": "public",
            "RETURNTYPE": "void",
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
                "REQUIRED": true,
                "TYPE": "boolean",
                "HINT": "Whether or not the user has full access",
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
                "REQUIRED": true,
                "TYPE": "string",
                "HINT": "username of the current user",
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
                "TYPE": "numeric",
                "HINT": "faculty Id of the faculty member",
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
                "REQUIRED": true,
                "TYPE": "string",
                "HINT": "EmployeeID if year > 2003 else EmployeeLastName.",
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
                "REQUIRED": true,
                "TYPE": "numeric",
                "HINT": "The people ID of the faculty member/user",
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
                "REQUIRED": true,
                "TYPE": "string",
                "HINT": "username",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The username of user to validate",
              "NAME": "userName"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The password of the user to validate (in plain text)",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "username of the current logged in user",
              "NAME": "uname"
            }
          ],
          "ACCESS": "public",
          "NAME": "getUserProxyList_deprecated"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Sets the authentication method for the user; ARGIS:1, referer + PUser: 2, referer + EPUser: 3",
          "PARAMETERS": [
            {
              "TYPE": "numeric",
              "HINT": "authentication method number",
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
          "ACCESS": "private",
          "NAME": "initCollegeAccessList"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Check to see if user account is active in argis",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "employee ID of the user account to check",
              "NAME": "employeeId"
            }
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "email address",
              "NAME": "emailAddress"
            }
          ],
          "ACCESS": "public",
          "NAME": "getEmailAddressDetails_deprecated"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The username to authenticate.",
              "NAME": "uname"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The unencrypted password to use to authenticate the user, which will be encrypted by the function.",
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
              "TYPE": "numeric",
              "HINT": "People ID of the faculty that the user is trying to reach",
              "NAME": "facultyID"
            },
            {
              "TYPE": "string",
              "HINT": "username of the user logged in to the system",
              "NAME": "uname"
            },
            {
              "TYPE": "string",
              "HINT": "Department and college access lists of a user",
              "NAME": "departmentCollegeAccessList"
            }
          ],
          "ACCESS": "public",
          "NAME": "canAccessFaculty"
        },
        {
          "RETURNTYPE": "boolean",
          "HINT": "Returns whether the user has access to a Research",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ResearchID that the user is trying to access",
              "NAME": "researchID"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "username of the current logged in user",
              "NAME": "uname"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "whether or not the user has total access",
              "NAME": "hasTotalAccess"
            }
          ],
          "ACCESS": "public",
          "NAME": "canAccessResearch"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns home department name of the current user",
          "PARAMETERS": [],
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "User name to authenticate.",
              "NAME": "argUsername"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The unencrypted password.",
              "NAME": "argPassword"
            }
          ],
          "ACCESS": "public",
          "NAME": "authenticateOld_deprecated"
        },
        {
          "RETURNTYPE": "numeric",
          "HINT": "Returns home department ID of the current user",
          "PARAMETERS": [],
          "ACCESS": "private",
          "NAME": "initHomeDepartmentID"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Authenticates a user if he/she is in the ARGIS people table and the referer is an approved one",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "username",
              "NAME": "username"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "referer",
              "NAME": "argReferer"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "whether or not the username is encrypted, if TRUE, function decrypts the username.",
              "NAME": "isUserNameEncrypted"
            }
          ],
          "ACCESS": "private",
          "NAME": "authenticatePUser_deprecated"
        },
        {
          "RETURNTYPE": "string",
          "HINT": "Returns department access list for the current user",
          "PARAMETERS": [],
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
          "ACCESS": "private",
          "NAME": "initRolesList"
        },
        {
          "RETURNTYPE": "void",
          "HINT": "Constructor for PUser or encrypted PUser",
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The username to authenticate.",
              "NAME": "uname"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "Referer.",
              "NAME": "referer"
            },
            {
              "REQUIRED": true,
              "TYPE": "boolean",
              "HINT": "whether or not the username is encrypted, if TRUE, function decrypts the username.",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The username to authenticate.",
              "NAME": "username"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The unencrypted password to use to authenticate the user, which will be encrypted by the function.",
              "NAME": "password"
            }
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
              "REQUIRED": true,
              "TYPE": "numeric",
              "HINT": "ResearchID that the user is trying to access",
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
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "User name to authenticate.",
              "NAME": "argUsername"
            },
            {
              "REQUIRED": true,
              "TYPE": "string",
              "HINT": "The unencrypted password.",
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
          "ACCESS": "public",
          "NAME": "hasTotalAccess"
        },
        {
          "PARAMETERS": [
            {
              "REQUIRED": true,
              "TYPE": "struct",
              "NAME": "argDataSources"
            }
          ],
          "ACCESS": "public",
          "RETURNTYPE": "void",
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
              "TYPE": "string",
              "HINT": "current proxy user who is logged in as the current user",
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
              "TYPE": "boolean",
              "HINT": "whether or not a proxy is used logged in as the current user.",
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
          "PARAMETERS": [],
          "OUTPUT": true,
          "RETURNTYPE": "void",
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
              "REQUIRED": true,
              "TYPE": "array",
              "HINT": "the array to be sorted",
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
      "BINDINGNAME": "GSort",
      "NAME": "RAD.GSort"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\RAD_DataUpload\\Application.cfc",
      "TYPE": "component",
      "FULLNAME": "RAD_DataUpload.Application",
      "NAME": "RAD_DataUpload.Application"
    },
    {
      "PATH": "E:\\inetpub\\wwwroot\\Web_Applications\\paris\\ws\\Application.cfc",
      "TYPE": "component",
      "FULLNAME": "ws.Application",
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
          "RETURNTYPE": "string",
          "NAME": "getIfAuthorized"
        }
      ],
      "TYPE": "component",
      "FULLNAME": "ws.Auth_Component",
      "NAME": "ws.Auth_Component"
    }
  ]
}
