import { environment } from '@environment/environment';
import { AuthenticationParameters, Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';
const isIE =
    window.navigator.userAgent.indexOf("MSIE ") > -1 ||
    window.navigator.userAgent.indexOf("Trident/") > -1;

export const getProtectedResourceScopesForLogin: AuthenticationParameters = {
      scopes: [`${environment.apiClientId}/API-ACCESS`],
      loginHint: localStorage.getItem("currentUser") != null ? JSON.parse(localStorage.getItem("currentUser")).userPrincipalName : null// if not found then not added the loginHint
}

export const unprotectedResourceMap: string[] = null;

export const protectedResourceMap: Map<string, string[]>  = new Map<string, string[]>();
//  apiClientId: 'api://357a7737-1bad-4d49-ba67-5b59dc8eed0a',
protectedResourceMap.set(`${environment.apiClientId}`, ["acces_as_user", "user_impersonation"]);
protectedResourceMap.set("https://aadrm.com/user_impersonation", ["Content.DelegatedReader", "Content.DelegatedWriter", "Content.SuperUser", "Content.Writer"]);
protectedResourceMap.set("https://graph.microsoft.com", ["Bookings.ReadWrite.All", "BookingsAppointment.ReadWrite.All", "Calendars.ReadWrite", "Calendars.ReadWrite", "Calendars.ReadWrite.Shared", "Contacts.Read.Shared", "Contacts.ReadWrite", "Directory.AccessAsUser.All", "Directory.Read.All", "Directory.ReadWrite.All", "Directory.ReadWrite.All", "Files.ReadWrite.All", "Group.ReadWrite.All", "Mail.ReadWrite", "Mail.ReadWrite", "Mail.Send", "Mail.Send", "MailboxSettings.ReadWrite", "Notes.ReadWrite.All", "Organization.ReadWrite.All", "People.Read.All", "RoleManagement.ReadWrite.Directory", "User.Read", "User.Read.All", "email", "openid", "profile"]);
protectedResourceMap.set("https://microsoft.sharepoint-df.com", ["MyFiles.Read", "MyFiles.Write", "Sites.ReadWrite.All", "User.Read.All", "User.ReadWrite.All"]);
  

export function MSALConfigFactory(): Configuration {
    return {
      auth: {
        clientId: environment.apiClientId,
        authority: `https://login.microsoftonline.com/${environment.azureAdClientId}`,
        validateAuthority: true,
        redirectUri:  environment.originUrl,
        postLogoutRedirectUri:  environment.originUrl, //<!-- Where do we want to do this? I think this only impacts console 1-4 users??
        navigateToLoginRequestUrl: true,
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    };
  }

export function MSALAngularConfigFactory(): MsalAngularConfiguration {
    return {
      popUp: false,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      unprotectedResources: unprotectedResourceMap,
      protectedResourceMap: protectedResourceMap,
      extraQueryParameters: {}
    };
  }
