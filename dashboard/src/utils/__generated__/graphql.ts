import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ConfigEmail: any;
  ConfigLocale: any;
  ConfigPort: any;
  ConfigUint8: any;
  ConfigUint32: any;
  ConfigUrl: any;
  ConfigUserRole: any;
  Timestamp: any;
  bigint: any;
  bpchar: any;
  bytea: any;
  citext: any;
  float64: any;
  jsonb: any;
  refresh_token_type: any;
  smallint: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

export type BackupResult = {
  __typename?: 'BackupResult';
  backupID: Scalars['uuid'];
  size: Scalars['bigint'];
};

export type BackupResultsItem = {
  __typename?: 'BackupResultsItem';
  appID: Scalars['uuid'];
  backupID: Scalars['uuid'];
  error: Scalars['String'];
  size: Scalars['bigint'];
  success: Scalars['Boolean'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ConfigAppConfig = {
  __typename?: 'ConfigAppConfig';
  appID: Scalars['uuid'];
  config: ConfigConfig;
};

export type ConfigAppSecrets = {
  __typename?: 'ConfigAppSecrets';
  appID: Scalars['uuid'];
  secrets: Array<ConfigEnvironmentVariable>;
};

export type ConfigAppSystemConfig = {
  __typename?: 'ConfigAppSystemConfig';
  appID: Scalars['uuid'];
  systemConfig: ConfigSystemConfig;
};

export type ConfigAuth = {
  __typename?: 'ConfigAuth';
  method?: Maybe<ConfigAuthMethod>;
  redirections?: Maybe<ConfigAuthRedirections>;
  resources?: Maybe<ConfigResources>;
  session?: Maybe<ConfigAuthSession>;
  signUp?: Maybe<ConfigAuthSignUp>;
  totp?: Maybe<ConfigAuthTotp>;
  user?: Maybe<ConfigAuthUser>;
  version?: Maybe<Scalars['String']>;
};

export type ConfigAuthComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthComparisonExp>>;
  _not?: InputMaybe<ConfigAuthComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthComparisonExp>>;
  method?: InputMaybe<ConfigAuthMethodComparisonExp>;
  redirections?: InputMaybe<ConfigAuthRedirectionsComparisonExp>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  session?: InputMaybe<ConfigAuthSessionComparisonExp>;
  signUp?: InputMaybe<ConfigAuthSignUpComparisonExp>;
  totp?: InputMaybe<ConfigAuthTotpComparisonExp>;
  user?: InputMaybe<ConfigAuthUserComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthInsertInput = {
  method?: InputMaybe<ConfigAuthMethodInsertInput>;
  redirections?: InputMaybe<ConfigAuthRedirectionsInsertInput>;
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  session?: InputMaybe<ConfigAuthSessionInsertInput>;
  signUp?: InputMaybe<ConfigAuthSignUpInsertInput>;
  totp?: InputMaybe<ConfigAuthTotpInsertInput>;
  user?: InputMaybe<ConfigAuthUserInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethod = {
  __typename?: 'ConfigAuthMethod';
  anonymous?: Maybe<ConfigAuthMethodAnonymous>;
  emailPassword?: Maybe<ConfigAuthMethodEmailPassword>;
  emailPasswordless?: Maybe<ConfigAuthMethodEmailPasswordless>;
  oauth?: Maybe<ConfigAuthMethodOauth>;
  smsPasswordless?: Maybe<ConfigAuthMethodSmsPasswordless>;
  webauthn?: Maybe<ConfigAuthMethodWebauthn>;
};

export type ConfigAuthMethodAnonymous = {
  __typename?: 'ConfigAuthMethodAnonymous';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodAnonymousComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodAnonymousComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodAnonymousComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodAnonymousComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodAnonymousInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodAnonymousUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodComparisonExp>>;
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousComparisonExp>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordComparisonExp>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessComparisonExp>;
  oauth?: InputMaybe<ConfigAuthMethodOauthComparisonExp>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessComparisonExp>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnComparisonExp>;
};

export type ConfigAuthMethodEmailPassword = {
  __typename?: 'ConfigAuthMethodEmailPassword';
  emailVerificationRequired?: Maybe<Scalars['Boolean']>;
  hibpEnabled?: Maybe<Scalars['Boolean']>;
  passwordMinLength?: Maybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodEmailPasswordComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodEmailPasswordComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodEmailPasswordComparisonExp>>;
  emailVerificationRequired?: InputMaybe<ConfigBooleanComparisonExp>;
  hibpEnabled?: InputMaybe<ConfigBooleanComparisonExp>;
  passwordMinLength?: InputMaybe<ConfigUint8ComparisonExp>;
};

export type ConfigAuthMethodEmailPasswordInsertInput = {
  emailVerificationRequired?: InputMaybe<Scalars['Boolean']>;
  hibpEnabled?: InputMaybe<Scalars['Boolean']>;
  passwordMinLength?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordUpdateInput = {
  emailVerificationRequired?: InputMaybe<Scalars['Boolean']>;
  hibpEnabled?: InputMaybe<Scalars['Boolean']>;
  passwordMinLength?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigAuthMethodEmailPasswordless = {
  __typename?: 'ConfigAuthMethodEmailPasswordless';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodEmailPasswordlessComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodEmailPasswordlessComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodEmailPasswordlessComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodEmailPasswordlessComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodEmailPasswordlessInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodEmailPasswordlessUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodInsertInput = {
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousInsertInput>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordInsertInput>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessInsertInput>;
  oauth?: InputMaybe<ConfigAuthMethodOauthInsertInput>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessInsertInput>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnInsertInput>;
};

export type ConfigAuthMethodOauth = {
  __typename?: 'ConfigAuthMethodOauth';
  apple?: Maybe<ConfigAuthMethodOauthApple>;
  azuread?: Maybe<ConfigAuthMethodOauthAzuread>;
  bitbucket?: Maybe<ConfigStandardOauthProvider>;
  discord?: Maybe<ConfigStandardOauthProviderWithScope>;
  facebook?: Maybe<ConfigStandardOauthProviderWithScope>;
  github?: Maybe<ConfigStandardOauthProviderWithScope>;
  gitlab?: Maybe<ConfigStandardOauthProviderWithScope>;
  google?: Maybe<ConfigStandardOauthProviderWithScope>;
  linkedin?: Maybe<ConfigStandardOauthProviderWithScope>;
  spotify?: Maybe<ConfigStandardOauthProviderWithScope>;
  strava?: Maybe<ConfigStandardOauthProviderWithScope>;
  twitch?: Maybe<ConfigStandardOauthProviderWithScope>;
  twitter?: Maybe<ConfigAuthMethodOauthTwitter>;
  windowslive?: Maybe<ConfigStandardOauthProviderWithScope>;
  workos?: Maybe<ConfigAuthMethodOauthWorkos>;
};

export type ConfigAuthMethodOauthApple = {
  __typename?: 'ConfigAuthMethodOauthApple';
  clientId?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  keyId?: Maybe<Scalars['String']>;
  privateKey?: Maybe<Scalars['String']>;
  scope?: Maybe<Array<Scalars['String']>>;
  teamId?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAppleComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthAppleComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthAppleComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthAppleComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  keyId?: InputMaybe<ConfigStringComparisonExp>;
  privateKey?: InputMaybe<ConfigStringComparisonExp>;
  scope?: InputMaybe<ConfigStringComparisonExp>;
  teamId?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthAppleInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  keyId?: InputMaybe<Scalars['String']>;
  privateKey?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAppleUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  keyId?: InputMaybe<Scalars['String']>;
  privateKey?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
  teamId?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzuread = {
  __typename?: 'ConfigAuthMethodOauthAzuread';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  tenant?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzureadComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthAzureadComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthAzureadComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthAzureadComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  tenant?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthAzureadInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthAzureadUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  tenant?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthComparisonExp>>;
  apple?: InputMaybe<ConfigAuthMethodOauthAppleComparisonExp>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadComparisonExp>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderComparisonExp>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterComparisonExp>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosComparisonExp>;
};

export type ConfigAuthMethodOauthInsertInput = {
  apple?: InputMaybe<ConfigAuthMethodOauthAppleInsertInput>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadInsertInput>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderInsertInput>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterInsertInput>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeInsertInput>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosInsertInput>;
};

export type ConfigAuthMethodOauthTwitter = {
  __typename?: 'ConfigAuthMethodOauthTwitter';
  consumerKey?: Maybe<Scalars['String']>;
  consumerSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthTwitterComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthTwitterComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthTwitterComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthTwitterComparisonExp>>;
  consumerKey?: InputMaybe<ConfigStringComparisonExp>;
  consumerSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodOauthTwitterInsertInput = {
  consumerKey?: InputMaybe<Scalars['String']>;
  consumerSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthTwitterUpdateInput = {
  consumerKey?: InputMaybe<Scalars['String']>;
  consumerSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodOauthUpdateInput = {
  apple?: InputMaybe<ConfigAuthMethodOauthAppleUpdateInput>;
  azuread?: InputMaybe<ConfigAuthMethodOauthAzureadUpdateInput>;
  bitbucket?: InputMaybe<ConfigStandardOauthProviderUpdateInput>;
  discord?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  facebook?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  github?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  gitlab?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  google?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  linkedin?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  spotify?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  strava?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  twitch?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  twitter?: InputMaybe<ConfigAuthMethodOauthTwitterUpdateInput>;
  windowslive?: InputMaybe<ConfigStandardOauthProviderWithScopeUpdateInput>;
  workos?: InputMaybe<ConfigAuthMethodOauthWorkosUpdateInput>;
};

export type ConfigAuthMethodOauthWorkos = {
  __typename?: 'ConfigAuthMethodOauthWorkos';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  connection?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  organization?: Maybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthWorkosComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodOauthWorkosComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodOauthWorkosComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodOauthWorkosComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  connection?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  organization?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthMethodOauthWorkosInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodOauthWorkosUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  connection?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  organization?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthMethodSmsPasswordless = {
  __typename?: 'ConfigAuthMethodSmsPasswordless';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodSmsPasswordlessComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodSmsPasswordlessComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodSmsPasswordlessComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodSmsPasswordlessComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthMethodSmsPasswordlessInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodSmsPasswordlessUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthMethodUpdateInput = {
  anonymous?: InputMaybe<ConfigAuthMethodAnonymousUpdateInput>;
  emailPassword?: InputMaybe<ConfigAuthMethodEmailPasswordUpdateInput>;
  emailPasswordless?: InputMaybe<ConfigAuthMethodEmailPasswordlessUpdateInput>;
  oauth?: InputMaybe<ConfigAuthMethodOauthUpdateInput>;
  smsPasswordless?: InputMaybe<ConfigAuthMethodSmsPasswordlessUpdateInput>;
  webauthn?: InputMaybe<ConfigAuthMethodWebauthnUpdateInput>;
};

export type ConfigAuthMethodWebauthn = {
  __typename?: 'ConfigAuthMethodWebauthn';
  attestation?: Maybe<ConfigAuthMethodWebauthnAttestation>;
  enabled?: Maybe<Scalars['Boolean']>;
  relyingParty?: Maybe<ConfigAuthMethodWebauthnRelyingParty>;
};

export type ConfigAuthMethodWebauthnAttestation = {
  __typename?: 'ConfigAuthMethodWebauthnAttestation';
  timeout?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnAttestationComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnAttestationComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnAttestationComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnAttestationComparisonExp>>;
  timeout?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthMethodWebauthnAttestationInsertInput = {
  timeout?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnAttestationUpdateInput = {
  timeout?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthMethodWebauthnComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnComparisonExp>>;
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>;
};

export type ConfigAuthMethodWebauthnInsertInput = {
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationInsertInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyInsertInput>;
};

export type ConfigAuthMethodWebauthnRelyingParty = {
  __typename?: 'ConfigAuthMethodWebauthnRelyingParty';
  name?: Maybe<Scalars['String']>;
  origins?: Maybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnRelyingPartyComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>>;
  _not?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthMethodWebauthnRelyingPartyComparisonExp>>;
  name?: InputMaybe<ConfigStringComparisonExp>;
  origins?: InputMaybe<ConfigUrlComparisonExp>;
};

export type ConfigAuthMethodWebauthnRelyingPartyInsertInput = {
  name?: InputMaybe<Scalars['String']>;
  origins?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnRelyingPartyUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  origins?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigAuthMethodWebauthnUpdateInput = {
  attestation?: InputMaybe<ConfigAuthMethodWebauthnAttestationUpdateInput>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  relyingParty?: InputMaybe<ConfigAuthMethodWebauthnRelyingPartyUpdateInput>;
};

export type ConfigAuthRedirections = {
  __typename?: 'ConfigAuthRedirections';
  allowedUrls?: Maybe<Array<Scalars['String']>>;
  clientUrl?: Maybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthRedirectionsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthRedirectionsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthRedirectionsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthRedirectionsComparisonExp>>;
  allowedUrls?: InputMaybe<ConfigStringComparisonExp>;
  clientUrl?: InputMaybe<ConfigUrlComparisonExp>;
};

export type ConfigAuthRedirectionsInsertInput = {
  allowedUrls?: InputMaybe<Array<Scalars['String']>>;
  clientUrl?: InputMaybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthRedirectionsUpdateInput = {
  allowedUrls?: InputMaybe<Array<Scalars['String']>>;
  clientUrl?: InputMaybe<Scalars['ConfigUrl']>;
};

export type ConfigAuthSession = {
  __typename?: 'ConfigAuthSession';
  accessToken?: Maybe<ConfigAuthSessionAccessToken>;
  refreshToken?: Maybe<ConfigAuthSessionRefreshToken>;
};

export type ConfigAuthSessionAccessToken = {
  __typename?: 'ConfigAuthSessionAccessToken';
  customClaims?: Maybe<Array<ConfigAuthsessionaccessTokenCustomClaims>>;
  expiresIn?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionAccessTokenComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionAccessTokenComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionAccessTokenComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionAccessTokenComparisonExp>>;
  customClaims?: InputMaybe<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>;
  expiresIn?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthSessionAccessTokenInsertInput = {
  customClaims?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsInsertInput>>;
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionAccessTokenUpdateInput = {
  customClaims?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsUpdateInput>>;
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionComparisonExp>>;
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenComparisonExp>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenComparisonExp>;
};

export type ConfigAuthSessionInsertInput = {
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenInsertInput>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenInsertInput>;
};

export type ConfigAuthSessionRefreshToken = {
  __typename?: 'ConfigAuthSessionRefreshToken';
  expiresIn?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionRefreshTokenComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSessionRefreshTokenComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSessionRefreshTokenComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSessionRefreshTokenComparisonExp>>;
  expiresIn?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigAuthSessionRefreshTokenInsertInput = {
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionRefreshTokenUpdateInput = {
  expiresIn?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigAuthSessionUpdateInput = {
  accessToken?: InputMaybe<ConfigAuthSessionAccessTokenUpdateInput>;
  refreshToken?: InputMaybe<ConfigAuthSessionRefreshTokenUpdateInput>;
};

export type ConfigAuthSignUp = {
  __typename?: 'ConfigAuthSignUp';
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigAuthSignUpComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthSignUpComparisonExp>>;
  _not?: InputMaybe<ConfigAuthSignUpComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthSignUpComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigAuthSignUpInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthSignUpUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigAuthTotp = {
  __typename?: 'ConfigAuthTotp';
  enabled?: Maybe<Scalars['Boolean']>;
  issuer?: Maybe<Scalars['String']>;
};

export type ConfigAuthTotpComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthTotpComparisonExp>>;
  _not?: InputMaybe<ConfigAuthTotpComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthTotpComparisonExp>>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  issuer?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthTotpInsertInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  issuer?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthTotpUpdateInput = {
  enabled?: InputMaybe<Scalars['Boolean']>;
  issuer?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUpdateInput = {
  method?: InputMaybe<ConfigAuthMethodUpdateInput>;
  redirections?: InputMaybe<ConfigAuthRedirectionsUpdateInput>;
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  session?: InputMaybe<ConfigAuthSessionUpdateInput>;
  signUp?: InputMaybe<ConfigAuthSignUpUpdateInput>;
  totp?: InputMaybe<ConfigAuthTotpUpdateInput>;
  user?: InputMaybe<ConfigAuthUserUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUser = {
  __typename?: 'ConfigAuthUser';
  email?: Maybe<ConfigAuthUserEmail>;
  emailDomains?: Maybe<ConfigAuthUserEmailDomains>;
  gravatar?: Maybe<ConfigAuthUserGravatar>;
  locale?: Maybe<ConfigAuthUserLocale>;
  roles?: Maybe<ConfigAuthUserRoles>;
};

export type ConfigAuthUserComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserComparisonExp>>;
  email?: InputMaybe<ConfigAuthUserEmailComparisonExp>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsComparisonExp>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarComparisonExp>;
  locale?: InputMaybe<ConfigAuthUserLocaleComparisonExp>;
  roles?: InputMaybe<ConfigAuthUserRolesComparisonExp>;
};

export type ConfigAuthUserEmail = {
  __typename?: 'ConfigAuthUserEmail';
  allowed?: Maybe<Array<Scalars['ConfigEmail']>>;
  blocked?: Maybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserEmailComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserEmailComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserEmailComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserEmailComparisonExp>>;
  allowed?: InputMaybe<ConfigEmailComparisonExp>;
  blocked?: InputMaybe<ConfigEmailComparisonExp>;
};

export type ConfigAuthUserEmailDomains = {
  __typename?: 'ConfigAuthUserEmailDomains';
  allowed?: Maybe<Array<Scalars['String']>>;
  blocked?: Maybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailDomainsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserEmailDomainsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserEmailDomainsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserEmailDomainsComparisonExp>>;
  allowed?: InputMaybe<ConfigStringComparisonExp>;
  blocked?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthUserEmailDomainsInsertInput = {
  allowed?: InputMaybe<Array<Scalars['String']>>;
  blocked?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailDomainsUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['String']>>;
  blocked?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigAuthUserEmailInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  blocked?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserEmailUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  blocked?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigAuthUserGravatar = {
  __typename?: 'ConfigAuthUserGravatar';
  default?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  rating?: Maybe<Scalars['String']>;
};

export type ConfigAuthUserGravatarComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserGravatarComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserGravatarComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserGravatarComparisonExp>>;
  default?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  rating?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthUserGravatarInsertInput = {
  default?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUserGravatarUpdateInput = {
  default?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  rating?: InputMaybe<Scalars['String']>;
};

export type ConfigAuthUserInsertInput = {
  email?: InputMaybe<ConfigAuthUserEmailInsertInput>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsInsertInput>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarInsertInput>;
  locale?: InputMaybe<ConfigAuthUserLocaleInsertInput>;
  roles?: InputMaybe<ConfigAuthUserRolesInsertInput>;
};

export type ConfigAuthUserLocale = {
  __typename?: 'ConfigAuthUserLocale';
  allowed?: Maybe<Array<Scalars['ConfigLocale']>>;
  default?: Maybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserLocaleComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserLocaleComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserLocaleComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserLocaleComparisonExp>>;
  allowed?: InputMaybe<ConfigLocaleComparisonExp>;
  default?: InputMaybe<ConfigLocaleComparisonExp>;
};

export type ConfigAuthUserLocaleInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  default?: InputMaybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserLocaleUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  default?: InputMaybe<Scalars['ConfigLocale']>;
};

export type ConfigAuthUserRoles = {
  __typename?: 'ConfigAuthUserRoles';
  allowed?: Maybe<Array<Scalars['ConfigUserRole']>>;
  default?: Maybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserRolesComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthUserRolesComparisonExp>>;
  _not?: InputMaybe<ConfigAuthUserRolesComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthUserRolesComparisonExp>>;
  allowed?: InputMaybe<ConfigUserRoleComparisonExp>;
  default?: InputMaybe<ConfigUserRoleComparisonExp>;
};

export type ConfigAuthUserRolesInsertInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  default?: InputMaybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserRolesUpdateInput = {
  allowed?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  default?: InputMaybe<Scalars['ConfigUserRole']>;
};

export type ConfigAuthUserUpdateInput = {
  email?: InputMaybe<ConfigAuthUserEmailUpdateInput>;
  emailDomains?: InputMaybe<ConfigAuthUserEmailDomainsUpdateInput>;
  gravatar?: InputMaybe<ConfigAuthUserGravatarUpdateInput>;
  locale?: InputMaybe<ConfigAuthUserLocaleUpdateInput>;
  roles?: InputMaybe<ConfigAuthUserRolesUpdateInput>;
};

export type ConfigAuthsessionaccessTokenCustomClaims = {
  __typename?: 'ConfigAuthsessionaccessTokenCustomClaims';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigAuthsessionaccessTokenCustomClaimsComparisonExp = {
  _and?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>>;
  _not?: InputMaybe<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>;
  _or?: InputMaybe<Array<ConfigAuthsessionaccessTokenCustomClaimsComparisonExp>>;
  key?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigAuthsessionaccessTokenCustomClaimsInsertInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigAuthsessionaccessTokenCustomClaimsUpdateInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigBooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type ConfigClaimMap = {
  __typename?: 'ConfigClaimMap';
  claim: Scalars['String'];
  default?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ConfigClaimMapComparisonExp = {
  _and?: InputMaybe<Array<ConfigClaimMapComparisonExp>>;
  _not?: InputMaybe<ConfigClaimMapComparisonExp>;
  _or?: InputMaybe<Array<ConfigClaimMapComparisonExp>>;
  claim?: InputMaybe<ConfigStringComparisonExp>;
  default?: InputMaybe<ConfigStringComparisonExp>;
  path?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigClaimMapInsertInput = {
  claim: Scalars['String'];
  default?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigClaimMapUpdateInput = {
  claim?: InputMaybe<Scalars['String']>;
  default?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigConfig = {
  __typename?: 'ConfigConfig';
  auth?: Maybe<ConfigAuth>;
  functions?: Maybe<ConfigFunctions>;
  global?: Maybe<ConfigGlobal>;
  hasura: ConfigHasura;
  observability?: Maybe<ConfigObservability>;
  postgres?: Maybe<ConfigPostgres>;
  provider?: Maybe<ConfigProvider>;
  storage?: Maybe<ConfigStorage>;
};

export type ConfigConfigComparisonExp = {
  _and?: InputMaybe<Array<ConfigConfigComparisonExp>>;
  _not?: InputMaybe<ConfigConfigComparisonExp>;
  _or?: InputMaybe<Array<ConfigConfigComparisonExp>>;
  auth?: InputMaybe<ConfigAuthComparisonExp>;
  functions?: InputMaybe<ConfigFunctionsComparisonExp>;
  global?: InputMaybe<ConfigGlobalComparisonExp>;
  hasura?: InputMaybe<ConfigHasuraComparisonExp>;
  observability?: InputMaybe<ConfigObservabilityComparisonExp>;
  postgres?: InputMaybe<ConfigPostgresComparisonExp>;
  provider?: InputMaybe<ConfigProviderComparisonExp>;
  storage?: InputMaybe<ConfigStorageComparisonExp>;
};

export type ConfigConfigInsertInput = {
  auth?: InputMaybe<ConfigAuthInsertInput>;
  functions?: InputMaybe<ConfigFunctionsInsertInput>;
  global?: InputMaybe<ConfigGlobalInsertInput>;
  hasura: ConfigHasuraInsertInput;
  observability?: InputMaybe<ConfigObservabilityInsertInput>;
  postgres?: InputMaybe<ConfigPostgresInsertInput>;
  provider?: InputMaybe<ConfigProviderInsertInput>;
  storage?: InputMaybe<ConfigStorageInsertInput>;
};

export type ConfigConfigUpdateInput = {
  auth?: InputMaybe<ConfigAuthUpdateInput>;
  functions?: InputMaybe<ConfigFunctionsUpdateInput>;
  global?: InputMaybe<ConfigGlobalUpdateInput>;
  hasura?: InputMaybe<ConfigHasuraUpdateInput>;
  observability?: InputMaybe<ConfigObservabilityUpdateInput>;
  postgres?: InputMaybe<ConfigPostgresUpdateInput>;
  provider?: InputMaybe<ConfigProviderUpdateInput>;
  storage?: InputMaybe<ConfigStorageUpdateInput>;
};

export type ConfigEmailComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigEmail']>;
  _in?: InputMaybe<Array<Scalars['ConfigEmail']>>;
  _neq?: InputMaybe<Scalars['ConfigEmail']>;
  _nin?: InputMaybe<Array<Scalars['ConfigEmail']>>;
};

export type ConfigEnvironmentVariable = {
  __typename?: 'ConfigEnvironmentVariable';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigEnvironmentVariableComparisonExp = {
  _and?: InputMaybe<Array<ConfigEnvironmentVariableComparisonExp>>;
  _not?: InputMaybe<ConfigEnvironmentVariableComparisonExp>;
  _or?: InputMaybe<Array<ConfigEnvironmentVariableComparisonExp>>;
  name?: InputMaybe<ConfigStringComparisonExp>;
  value?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigEnvironmentVariableInsertInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ConfigEnvironmentVariableUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ConfigFunctions = {
  __typename?: 'ConfigFunctions';
  node?: Maybe<ConfigFunctionsNode>;
};

export type ConfigFunctionsComparisonExp = {
  _and?: InputMaybe<Array<ConfigFunctionsComparisonExp>>;
  _not?: InputMaybe<ConfigFunctionsComparisonExp>;
  _or?: InputMaybe<Array<ConfigFunctionsComparisonExp>>;
  node?: InputMaybe<ConfigFunctionsNodeComparisonExp>;
};

export type ConfigFunctionsInsertInput = {
  node?: InputMaybe<ConfigFunctionsNodeInsertInput>;
};

export type ConfigFunctionsNode = {
  __typename?: 'ConfigFunctionsNode';
  version?: Maybe<Scalars['Int']>;
};

export type ConfigFunctionsNodeComparisonExp = {
  _and?: InputMaybe<Array<ConfigFunctionsNodeComparisonExp>>;
  _not?: InputMaybe<ConfigFunctionsNodeComparisonExp>;
  _or?: InputMaybe<Array<ConfigFunctionsNodeComparisonExp>>;
  version?: InputMaybe<ConfigIntComparisonExp>;
};

export type ConfigFunctionsNodeInsertInput = {
  version?: InputMaybe<Scalars['Int']>;
};

export type ConfigFunctionsNodeUpdateInput = {
  version?: InputMaybe<Scalars['Int']>;
};

export type ConfigFunctionsUpdateInput = {
  node?: InputMaybe<ConfigFunctionsNodeUpdateInput>;
};

export type ConfigGlobal = {
  __typename?: 'ConfigGlobal';
  environment?: Maybe<Array<ConfigEnvironmentVariable>>;
};

export type ConfigGlobalComparisonExp = {
  _and?: InputMaybe<Array<ConfigGlobalComparisonExp>>;
  _not?: InputMaybe<ConfigGlobalComparisonExp>;
  _or?: InputMaybe<Array<ConfigGlobalComparisonExp>>;
  environment?: InputMaybe<ConfigEnvironmentVariableComparisonExp>;
};

export type ConfigGlobalInsertInput = {
  environment?: InputMaybe<Array<ConfigEnvironmentVariableInsertInput>>;
};

export type ConfigGlobalUpdateInput = {
  environment?: InputMaybe<Array<ConfigEnvironmentVariableUpdateInput>>;
};

export type ConfigGrafana = {
  __typename?: 'ConfigGrafana';
  adminPassword: Scalars['String'];
};

export type ConfigGrafanaComparisonExp = {
  _and?: InputMaybe<Array<ConfigGrafanaComparisonExp>>;
  _not?: InputMaybe<ConfigGrafanaComparisonExp>;
  _or?: InputMaybe<Array<ConfigGrafanaComparisonExp>>;
  adminPassword?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigGrafanaInsertInput = {
  adminPassword: Scalars['String'];
};

export type ConfigGrafanaUpdateInput = {
  adminPassword?: InputMaybe<Scalars['String']>;
};

export type ConfigHasura = {
  __typename?: 'ConfigHasura';
  adminSecret: Scalars['String'];
  events?: Maybe<ConfigHasuraEvents>;
  jwtSecrets?: Maybe<Array<ConfigJwtSecret>>;
  logs?: Maybe<ConfigHasuraLogs>;
  resources?: Maybe<ConfigResources>;
  settings?: Maybe<ConfigHasuraSettings>;
  version?: Maybe<Scalars['String']>;
  webhookSecret: Scalars['String'];
};

export type ConfigHasuraComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraComparisonExp>>;
  adminSecret?: InputMaybe<ConfigStringComparisonExp>;
  events?: InputMaybe<ConfigHasuraEventsComparisonExp>;
  jwtSecrets?: InputMaybe<ConfigJwtSecretComparisonExp>;
  logs?: InputMaybe<ConfigHasuraLogsComparisonExp>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  settings?: InputMaybe<ConfigHasuraSettingsComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
  webhookSecret?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigHasuraEvents = {
  __typename?: 'ConfigHasuraEvents';
  httpPoolSize?: Maybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraEventsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraEventsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraEventsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraEventsComparisonExp>>;
  httpPoolSize?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigHasuraEventsInsertInput = {
  httpPoolSize?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraEventsUpdateInput = {
  httpPoolSize?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigHasuraInsertInput = {
  adminSecret: Scalars['String'];
  events?: InputMaybe<ConfigHasuraEventsInsertInput>;
  jwtSecrets?: InputMaybe<Array<ConfigJwtSecretInsertInput>>;
  logs?: InputMaybe<ConfigHasuraLogsInsertInput>;
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  settings?: InputMaybe<ConfigHasuraSettingsInsertInput>;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret: Scalars['String'];
};

export type ConfigHasuraLogs = {
  __typename?: 'ConfigHasuraLogs';
  level?: Maybe<Scalars['String']>;
};

export type ConfigHasuraLogsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraLogsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraLogsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraLogsComparisonExp>>;
  level?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigHasuraLogsInsertInput = {
  level?: InputMaybe<Scalars['String']>;
};

export type ConfigHasuraLogsUpdateInput = {
  level?: InputMaybe<Scalars['String']>;
};

export type ConfigHasuraSettings = {
  __typename?: 'ConfigHasuraSettings';
  enableRemoteSchemaPermissions?: Maybe<Scalars['Boolean']>;
};

export type ConfigHasuraSettingsComparisonExp = {
  _and?: InputMaybe<Array<ConfigHasuraSettingsComparisonExp>>;
  _not?: InputMaybe<ConfigHasuraSettingsComparisonExp>;
  _or?: InputMaybe<Array<ConfigHasuraSettingsComparisonExp>>;
  enableRemoteSchemaPermissions?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigHasuraSettingsInsertInput = {
  enableRemoteSchemaPermissions?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigHasuraSettingsUpdateInput = {
  enableRemoteSchemaPermissions?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigHasuraUpdateInput = {
  adminSecret?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<ConfigHasuraEventsUpdateInput>;
  jwtSecrets?: InputMaybe<Array<ConfigJwtSecretUpdateInput>>;
  logs?: InputMaybe<ConfigHasuraLogsUpdateInput>;
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  settings?: InputMaybe<ConfigHasuraSettingsUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
  webhookSecret?: InputMaybe<Scalars['String']>;
};

export type ConfigInsertConfigResponse = {
  __typename?: 'ConfigInsertConfigResponse';
  config: ConfigConfig;
  secrets: Array<ConfigEnvironmentVariable>;
  systemConfig: ConfigSystemConfig;
};

export type ConfigIntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type ConfigJwtSecret = {
  __typename?: 'ConfigJWTSecret';
  allowed_skew?: Maybe<Scalars['ConfigUint32']>;
  audience?: Maybe<Scalars['String']>;
  claims_format?: Maybe<Scalars['String']>;
  claims_map?: Maybe<Array<ConfigClaimMap>>;
  claims_namespace?: Maybe<Scalars['String']>;
  claims_namespace_path?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  issuer?: Maybe<Scalars['String']>;
  jwk_url?: Maybe<Scalars['ConfigUrl']>;
  key?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ConfigJwtSecretComparisonExp = {
  _and?: InputMaybe<Array<ConfigJwtSecretComparisonExp>>;
  _not?: InputMaybe<ConfigJwtSecretComparisonExp>;
  _or?: InputMaybe<Array<ConfigJwtSecretComparisonExp>>;
  allowed_skew?: InputMaybe<ConfigUint32ComparisonExp>;
  audience?: InputMaybe<ConfigStringComparisonExp>;
  claims_format?: InputMaybe<ConfigStringComparisonExp>;
  claims_map?: InputMaybe<ConfigClaimMapComparisonExp>;
  claims_namespace?: InputMaybe<ConfigStringComparisonExp>;
  claims_namespace_path?: InputMaybe<ConfigStringComparisonExp>;
  header?: InputMaybe<ConfigStringComparisonExp>;
  issuer?: InputMaybe<ConfigStringComparisonExp>;
  jwk_url?: InputMaybe<ConfigUrlComparisonExp>;
  key?: InputMaybe<ConfigStringComparisonExp>;
  type?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigJwtSecretInsertInput = {
  allowed_skew?: InputMaybe<Scalars['ConfigUint32']>;
  audience?: InputMaybe<Scalars['String']>;
  claims_format?: InputMaybe<Scalars['String']>;
  claims_map?: InputMaybe<Array<ConfigClaimMapInsertInput>>;
  claims_namespace?: InputMaybe<Scalars['String']>;
  claims_namespace_path?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  issuer?: InputMaybe<Scalars['String']>;
  jwk_url?: InputMaybe<Scalars['ConfigUrl']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConfigJwtSecretUpdateInput = {
  allowed_skew?: InputMaybe<Scalars['ConfigUint32']>;
  audience?: InputMaybe<Scalars['String']>;
  claims_format?: InputMaybe<Scalars['String']>;
  claims_map?: InputMaybe<Array<ConfigClaimMapUpdateInput>>;
  claims_namespace?: InputMaybe<Scalars['String']>;
  claims_namespace_path?: InputMaybe<Scalars['String']>;
  header?: InputMaybe<Scalars['String']>;
  issuer?: InputMaybe<Scalars['String']>;
  jwk_url?: InputMaybe<Scalars['ConfigUrl']>;
  key?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ConfigLocaleComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigLocale']>;
  _in?: InputMaybe<Array<Scalars['ConfigLocale']>>;
  _neq?: InputMaybe<Scalars['ConfigLocale']>;
  _nin?: InputMaybe<Array<Scalars['ConfigLocale']>>;
};

export type ConfigObservability = {
  __typename?: 'ConfigObservability';
  grafana?: Maybe<ConfigGrafana>;
};

export type ConfigObservabilityComparisonExp = {
  _and?: InputMaybe<Array<ConfigObservabilityComparisonExp>>;
  _not?: InputMaybe<ConfigObservabilityComparisonExp>;
  _or?: InputMaybe<Array<ConfigObservabilityComparisonExp>>;
  grafana?: InputMaybe<ConfigGrafanaComparisonExp>;
};

export type ConfigObservabilityInsertInput = {
  grafana?: InputMaybe<ConfigGrafanaInsertInput>;
};

export type ConfigObservabilityUpdateInput = {
  grafana?: InputMaybe<ConfigGrafanaUpdateInput>;
};

export type ConfigPortComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigPort']>;
  _in?: InputMaybe<Array<Scalars['ConfigPort']>>;
  _neq?: InputMaybe<Scalars['ConfigPort']>;
  _nin?: InputMaybe<Array<Scalars['ConfigPort']>>;
};

export type ConfigPostgres = {
  __typename?: 'ConfigPostgres';
  resources?: Maybe<ConfigResources>;
  version?: Maybe<Scalars['String']>;
};

export type ConfigPostgresComparisonExp = {
  _and?: InputMaybe<Array<ConfigPostgresComparisonExp>>;
  _not?: InputMaybe<ConfigPostgresComparisonExp>;
  _or?: InputMaybe<Array<ConfigPostgresComparisonExp>>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigPostgresInsertInput = {
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigPostgresUpdateInput = {
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigProvider = {
  __typename?: 'ConfigProvider';
  sms?: Maybe<ConfigSms>;
  smtp?: Maybe<ConfigSmtp>;
};

export type ConfigProviderComparisonExp = {
  _and?: InputMaybe<Array<ConfigProviderComparisonExp>>;
  _not?: InputMaybe<ConfigProviderComparisonExp>;
  _or?: InputMaybe<Array<ConfigProviderComparisonExp>>;
  sms?: InputMaybe<ConfigSmsComparisonExp>;
  smtp?: InputMaybe<ConfigSmtpComparisonExp>;
};

export type ConfigProviderInsertInput = {
  sms?: InputMaybe<ConfigSmsInsertInput>;
  smtp?: InputMaybe<ConfigSmtpInsertInput>;
};

export type ConfigProviderUpdateInput = {
  sms?: InputMaybe<ConfigSmsUpdateInput>;
  smtp?: InputMaybe<ConfigSmtpUpdateInput>;
};

export type ConfigResources = {
  __typename?: 'ConfigResources';
  compute: ConfigResourcesCompute;
  replicas: Scalars['ConfigUint8'];
};

export type ConfigResourcesComparisonExp = {
  _and?: InputMaybe<Array<ConfigResourcesComparisonExp>>;
  _not?: InputMaybe<ConfigResourcesComparisonExp>;
  _or?: InputMaybe<Array<ConfigResourcesComparisonExp>>;
  compute?: InputMaybe<ConfigResourcesComputeComparisonExp>;
  replicas?: InputMaybe<ConfigUint8ComparisonExp>;
};

export type ConfigResourcesCompute = {
  __typename?: 'ConfigResourcesCompute';
  cpu: Scalars['ConfigUint32'];
  memory: Scalars['ConfigUint32'];
};

export type ConfigResourcesComputeComparisonExp = {
  _and?: InputMaybe<Array<ConfigResourcesComputeComparisonExp>>;
  _not?: InputMaybe<ConfigResourcesComputeComparisonExp>;
  _or?: InputMaybe<Array<ConfigResourcesComputeComparisonExp>>;
  cpu?: InputMaybe<ConfigUint32ComparisonExp>;
  memory?: InputMaybe<ConfigUint32ComparisonExp>;
};

export type ConfigResourcesComputeInsertInput = {
  cpu: Scalars['ConfigUint32'];
  memory: Scalars['ConfigUint32'];
};

export type ConfigResourcesComputeUpdateInput = {
  cpu?: InputMaybe<Scalars['ConfigUint32']>;
  memory?: InputMaybe<Scalars['ConfigUint32']>;
};

export type ConfigResourcesInsertInput = {
  compute: ConfigResourcesComputeInsertInput;
  replicas: Scalars['ConfigUint8'];
};

export type ConfigResourcesUpdateInput = {
  compute?: InputMaybe<ConfigResourcesComputeUpdateInput>;
  replicas?: InputMaybe<Scalars['ConfigUint8']>;
};

export type ConfigSms = {
  __typename?: 'ConfigSms';
  accountSid: Scalars['String'];
  authToken: Scalars['String'];
  messagingServiceId: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type ConfigSmsComparisonExp = {
  _and?: InputMaybe<Array<ConfigSmsComparisonExp>>;
  _not?: InputMaybe<ConfigSmsComparisonExp>;
  _or?: InputMaybe<Array<ConfigSmsComparisonExp>>;
  accountSid?: InputMaybe<ConfigStringComparisonExp>;
  authToken?: InputMaybe<ConfigStringComparisonExp>;
  messagingServiceId?: InputMaybe<ConfigStringComparisonExp>;
  provider?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSmsInsertInput = {
  accountSid: Scalars['String'];
  authToken: Scalars['String'];
  messagingServiceId: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type ConfigSmsUpdateInput = {
  accountSid?: InputMaybe<Scalars['String']>;
  authToken?: InputMaybe<Scalars['String']>;
  messagingServiceId?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
};

export type ConfigSmtp = {
  __typename?: 'ConfigSmtp';
  host: Scalars['String'];
  method: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['ConfigPort'];
  secure: Scalars['Boolean'];
  sender: Scalars['String'];
  user: Scalars['String'];
};

export type ConfigSmtpComparisonExp = {
  _and?: InputMaybe<Array<ConfigSmtpComparisonExp>>;
  _not?: InputMaybe<ConfigSmtpComparisonExp>;
  _or?: InputMaybe<Array<ConfigSmtpComparisonExp>>;
  host?: InputMaybe<ConfigStringComparisonExp>;
  method?: InputMaybe<ConfigStringComparisonExp>;
  password?: InputMaybe<ConfigStringComparisonExp>;
  port?: InputMaybe<ConfigPortComparisonExp>;
  secure?: InputMaybe<ConfigBooleanComparisonExp>;
  sender?: InputMaybe<ConfigStringComparisonExp>;
  user?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSmtpInsertInput = {
  host: Scalars['String'];
  method: Scalars['String'];
  password: Scalars['String'];
  port: Scalars['ConfigPort'];
  secure: Scalars['Boolean'];
  sender: Scalars['String'];
  user: Scalars['String'];
};

export type ConfigSmtpUpdateInput = {
  host?: InputMaybe<Scalars['String']>;
  method?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  port?: InputMaybe<Scalars['ConfigPort']>;
  secure?: InputMaybe<Scalars['Boolean']>;
  sender?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
};

export type ConfigStandardOauthProvider = {
  __typename?: 'ConfigStandardOauthProvider';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderComparisonExp = {
  _and?: InputMaybe<Array<ConfigStandardOauthProviderComparisonExp>>;
  _not?: InputMaybe<ConfigStandardOauthProviderComparisonExp>;
  _or?: InputMaybe<Array<ConfigStandardOauthProviderComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
};

export type ConfigStandardOauthProviderInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

export type ConfigStandardOauthProviderWithScope = {
  __typename?: 'ConfigStandardOauthProviderWithScope';
  clientId?: Maybe<Scalars['String']>;
  clientSecret?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  scope?: Maybe<Array<Scalars['String']>>;
};

export type ConfigStandardOauthProviderWithScopeComparisonExp = {
  _and?: InputMaybe<Array<ConfigStandardOauthProviderWithScopeComparisonExp>>;
  _not?: InputMaybe<ConfigStandardOauthProviderWithScopeComparisonExp>;
  _or?: InputMaybe<Array<ConfigStandardOauthProviderWithScopeComparisonExp>>;
  clientId?: InputMaybe<ConfigStringComparisonExp>;
  clientSecret?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  scope?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigStandardOauthProviderWithScopeInsertInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigStandardOauthProviderWithScopeUpdateInput = {
  clientId?: InputMaybe<Scalars['String']>;
  clientSecret?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  scope?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigStorage = {
  __typename?: 'ConfigStorage';
  resources?: Maybe<ConfigResources>;
  version?: Maybe<Scalars['String']>;
};

export type ConfigStorageComparisonExp = {
  _and?: InputMaybe<Array<ConfigStorageComparisonExp>>;
  _not?: InputMaybe<ConfigStorageComparisonExp>;
  _or?: InputMaybe<Array<ConfigStorageComparisonExp>>;
  resources?: InputMaybe<ConfigResourcesComparisonExp>;
  version?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigStorageInsertInput = {
  resources?: InputMaybe<ConfigResourcesInsertInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigStorageUpdateInput = {
  resources?: InputMaybe<ConfigResourcesUpdateInput>;
  version?: InputMaybe<Scalars['String']>;
};

export type ConfigStringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  _neq?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
};

export type ConfigSystemConfig = {
  __typename?: 'ConfigSystemConfig';
  auth?: Maybe<ConfigSystemConfigAuth>;
  postgres: ConfigSystemConfigPostgres;
};

export type ConfigSystemConfigAuth = {
  __typename?: 'ConfigSystemConfigAuth';
  email?: Maybe<ConfigSystemConfigAuthEmail>;
};

export type ConfigSystemConfigAuthComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthComparisonExp>>;
  email?: InputMaybe<ConfigSystemConfigAuthEmailComparisonExp>;
};

export type ConfigSystemConfigAuthEmail = {
  __typename?: 'ConfigSystemConfigAuthEmail';
  templates?: Maybe<ConfigSystemConfigAuthEmailTemplates>;
};

export type ConfigSystemConfigAuthEmailComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthEmailComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthEmailComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthEmailComparisonExp>>;
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesComparisonExp>;
};

export type ConfigSystemConfigAuthEmailInsertInput = {
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesInsertInput>;
};

export type ConfigSystemConfigAuthEmailTemplates = {
  __typename?: 'ConfigSystemConfigAuthEmailTemplates';
  s3Key?: Maybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailTemplatesComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigAuthEmailTemplatesComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigAuthEmailTemplatesComparisonExp>>;
  s3Key?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigAuthEmailTemplatesInsertInput = {
  s3Key?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailTemplatesUpdateInput = {
  s3Key?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigAuthEmailUpdateInput = {
  templates?: InputMaybe<ConfigSystemConfigAuthEmailTemplatesUpdateInput>;
};

export type ConfigSystemConfigAuthInsertInput = {
  email?: InputMaybe<ConfigSystemConfigAuthEmailInsertInput>;
};

export type ConfigSystemConfigAuthUpdateInput = {
  email?: InputMaybe<ConfigSystemConfigAuthEmailUpdateInput>;
};

export type ConfigSystemConfigComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigComparisonExp>>;
  auth?: InputMaybe<ConfigSystemConfigAuthComparisonExp>;
  postgres?: InputMaybe<ConfigSystemConfigPostgresComparisonExp>;
};

export type ConfigSystemConfigInsertInput = {
  auth?: InputMaybe<ConfigSystemConfigAuthInsertInput>;
  postgres: ConfigSystemConfigPostgresInsertInput;
};

export type ConfigSystemConfigPostgres = {
  __typename?: 'ConfigSystemConfigPostgres';
  connectionString: ConfigSystemConfigPostgresConnectionString;
  database: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
};

export type ConfigSystemConfigPostgresComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigPostgresComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigPostgresComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigPostgresComparisonExp>>;
  connectionString?: InputMaybe<ConfigSystemConfigPostgresConnectionStringComparisonExp>;
  database?: InputMaybe<ConfigStringComparisonExp>;
  enabled?: InputMaybe<ConfigBooleanComparisonExp>;
  password?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigPostgresConnectionString = {
  __typename?: 'ConfigSystemConfigPostgresConnectionString';
  auth: Scalars['String'];
  backup: Scalars['String'];
  hasura: Scalars['String'];
  storage: Scalars['String'];
};

export type ConfigSystemConfigPostgresConnectionStringComparisonExp = {
  _and?: InputMaybe<Array<ConfigSystemConfigPostgresConnectionStringComparisonExp>>;
  _not?: InputMaybe<ConfigSystemConfigPostgresConnectionStringComparisonExp>;
  _or?: InputMaybe<Array<ConfigSystemConfigPostgresConnectionStringComparisonExp>>;
  auth?: InputMaybe<ConfigStringComparisonExp>;
  backup?: InputMaybe<ConfigStringComparisonExp>;
  hasura?: InputMaybe<ConfigStringComparisonExp>;
  storage?: InputMaybe<ConfigStringComparisonExp>;
};

export type ConfigSystemConfigPostgresConnectionStringInsertInput = {
  auth: Scalars['String'];
  backup: Scalars['String'];
  hasura: Scalars['String'];
  storage: Scalars['String'];
};

export type ConfigSystemConfigPostgresConnectionStringUpdateInput = {
  auth?: InputMaybe<Scalars['String']>;
  backup?: InputMaybe<Scalars['String']>;
  hasura?: InputMaybe<Scalars['String']>;
  storage?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigPostgresInsertInput = {
  connectionString: ConfigSystemConfigPostgresConnectionStringInsertInput;
  database: Scalars['String'];
  enabled?: InputMaybe<Scalars['Boolean']>;
  password: Scalars['String'];
};

export type ConfigSystemConfigPostgresUpdateInput = {
  connectionString?: InputMaybe<ConfigSystemConfigPostgresConnectionStringUpdateInput>;
  database?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  password?: InputMaybe<Scalars['String']>;
};

export type ConfigSystemConfigUpdateInput = {
  auth?: InputMaybe<ConfigSystemConfigAuthUpdateInput>;
  postgres?: InputMaybe<ConfigSystemConfigPostgresUpdateInput>;
};

export type ConfigUint8ComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUint8']>;
  _in?: InputMaybe<Array<Scalars['ConfigUint8']>>;
  _neq?: InputMaybe<Scalars['ConfigUint8']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUint8']>>;
};

export type ConfigUint32ComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUint32']>;
  _in?: InputMaybe<Array<Scalars['ConfigUint32']>>;
  _neq?: InputMaybe<Scalars['ConfigUint32']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUint32']>>;
};

export type ConfigUrlComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUrl']>;
  _in?: InputMaybe<Array<Scalars['ConfigUrl']>>;
  _neq?: InputMaybe<Scalars['ConfigUrl']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUrl']>>;
};

export type ConfigUserRoleComparisonExp = {
  _eq?: InputMaybe<Scalars['ConfigUserRole']>;
  _in?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
  _neq?: InputMaybe<Scalars['ConfigUserRole']>;
  _nin?: InputMaybe<Array<Scalars['ConfigUserRole']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type Log = {
  __typename?: 'Log';
  log: Scalars['String'];
  service: Scalars['String'];
  timestamp: Scalars['Timestamp'];
};

export type Metrics = {
  __typename?: 'Metrics';
  value: Scalars['float64'];
};

export type StatsLiveApps = {
  __typename?: 'StatsLiveApps';
  appID: Array<Scalars['uuid']>;
  count: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "app_state_history" */
export type AppStateHistory = {
  __typename?: 'appStateHistory';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  /** An object relationship */
  appState: AppStates;
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  message?: Maybe<Scalars['String']>;
  stateId: Scalars['Int'];
};

/** aggregated selection of "app_state_history" */
export type AppStateHistory_Aggregate = {
  __typename?: 'appStateHistory_aggregate';
  aggregate?: Maybe<AppStateHistory_Aggregate_Fields>;
  nodes: Array<AppStateHistory>;
};

export type AppStateHistory_Aggregate_Bool_Exp = {
  count?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp_Count>;
};

export type AppStateHistory_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AppStateHistory_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "app_state_history" */
export type AppStateHistory_Aggregate_Fields = {
  __typename?: 'appStateHistory_aggregate_fields';
  avg?: Maybe<AppStateHistory_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AppStateHistory_Max_Fields>;
  min?: Maybe<AppStateHistory_Min_Fields>;
  stddev?: Maybe<AppStateHistory_Stddev_Fields>;
  stddev_pop?: Maybe<AppStateHistory_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AppStateHistory_Stddev_Samp_Fields>;
  sum?: Maybe<AppStateHistory_Sum_Fields>;
  var_pop?: Maybe<AppStateHistory_Var_Pop_Fields>;
  var_samp?: Maybe<AppStateHistory_Var_Samp_Fields>;
  variance?: Maybe<AppStateHistory_Variance_Fields>;
};


/** aggregate fields of "app_state_history" */
export type AppStateHistory_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "app_state_history" */
export type AppStateHistory_Aggregate_Order_By = {
  avg?: InputMaybe<AppStateHistory_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AppStateHistory_Max_Order_By>;
  min?: InputMaybe<AppStateHistory_Min_Order_By>;
  stddev?: InputMaybe<AppStateHistory_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AppStateHistory_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AppStateHistory_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AppStateHistory_Sum_Order_By>;
  var_pop?: InputMaybe<AppStateHistory_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AppStateHistory_Var_Samp_Order_By>;
  variance?: InputMaybe<AppStateHistory_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "app_state_history" */
export type AppStateHistory_Arr_Rel_Insert_Input = {
  data: Array<AppStateHistory_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};

/** aggregate avg on columns */
export type AppStateHistory_Avg_Fields = {
  __typename?: 'appStateHistory_avg_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "app_state_history" */
export type AppStateHistory_Avg_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "app_state_history". All fields are combined with a logical 'AND'. */
export type AppStateHistory_Bool_Exp = {
  _and?: InputMaybe<Array<AppStateHistory_Bool_Exp>>;
  _not?: InputMaybe<AppStateHistory_Bool_Exp>;
  _or?: InputMaybe<Array<AppStateHistory_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  appState?: InputMaybe<AppStates_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  stateId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_state_history" */
export enum AppStateHistory_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppStateHistoryPkey = 'app_state_history_pkey'
}

/** input type for incrementing numeric columns in table "app_state_history" */
export type AppStateHistory_Inc_Input = {
  stateId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_state_history" */
export type AppStateHistory_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  appState?: InputMaybe<AppStates_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type AppStateHistory_Max_Fields = {
  __typename?: 'appStateHistory_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "app_state_history" */
export type AppStateHistory_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AppStateHistory_Min_Fields = {
  __typename?: 'appStateHistory_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "app_state_history" */
export type AppStateHistory_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "app_state_history" */
export type AppStateHistory_Mutation_Response = {
  __typename?: 'appStateHistory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AppStateHistory>;
};

/** on_conflict condition type for table "app_state_history" */
export type AppStateHistory_On_Conflict = {
  constraint: AppStateHistory_Constraint;
  update_columns?: Array<AppStateHistory_Update_Column>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};

/** Ordering options when selecting data from "app_state_history". */
export type AppStateHistory_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  appState?: InputMaybe<AppStates_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  stateId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_state_history */
export type AppStateHistory_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "app_state_history" */
export enum AppStateHistory_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  StateId = 'stateId'
}

/** input type for updating data in table "app_state_history" */
export type AppStateHistory_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type AppStateHistory_Stddev_Fields = {
  __typename?: 'appStateHistory_stddev_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AppStateHistory_Stddev_Pop_Fields = {
  __typename?: 'appStateHistory_stddev_pop_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Pop_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AppStateHistory_Stddev_Samp_Fields = {
  __typename?: 'appStateHistory_stddev_samp_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "app_state_history" */
export type AppStateHistory_Stddev_Samp_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "appStateHistory" */
export type AppStateHistory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AppStateHistory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStateHistory_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  stateId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type AppStateHistory_Sum_Fields = {
  __typename?: 'appStateHistory_sum_fields';
  stateId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "app_state_history" */
export type AppStateHistory_Sum_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** update columns of table "app_state_history" */
export enum AppStateHistory_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  StateId = 'stateId'
}

export type AppStateHistory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  where: AppStateHistory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AppStateHistory_Var_Pop_Fields = {
  __typename?: 'appStateHistory_var_pop_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "app_state_history" */
export type AppStateHistory_Var_Pop_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AppStateHistory_Var_Samp_Fields = {
  __typename?: 'appStateHistory_var_samp_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "app_state_history" */
export type AppStateHistory_Var_Samp_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AppStateHistory_Variance_Fields = {
  __typename?: 'appStateHistory_variance_fields';
  stateId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "app_state_history" */
export type AppStateHistory_Variance_Order_By = {
  stateId?: InputMaybe<Order_By>;
};

/** columns and relationships of "app_states" */
export type AppStates = {
  __typename?: 'appStates';
  /** An array relationship */
  appStates: Array<AppStateHistory>;
  /** An aggregate relationship */
  appStates_aggregate: AppStateHistory_Aggregate;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "app_states" */
export type AppStatesAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesAppStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "app_states" */
export type AppStatesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "app_states" */
export type AppStates_Aggregate = {
  __typename?: 'appStates_aggregate';
  aggregate?: Maybe<AppStates_Aggregate_Fields>;
  nodes: Array<AppStates>;
};

/** aggregate fields of "app_states" */
export type AppStates_Aggregate_Fields = {
  __typename?: 'appStates_aggregate_fields';
  avg?: Maybe<AppStates_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AppStates_Max_Fields>;
  min?: Maybe<AppStates_Min_Fields>;
  stddev?: Maybe<AppStates_Stddev_Fields>;
  stddev_pop?: Maybe<AppStates_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AppStates_Stddev_Samp_Fields>;
  sum?: Maybe<AppStates_Sum_Fields>;
  var_pop?: Maybe<AppStates_Var_Pop_Fields>;
  var_samp?: Maybe<AppStates_Var_Samp_Fields>;
  variance?: Maybe<AppStates_Variance_Fields>;
};


/** aggregate fields of "app_states" */
export type AppStates_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AppStates_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type AppStates_Avg_Fields = {
  __typename?: 'appStates_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "app_states". All fields are combined with a logical 'AND'. */
export type AppStates_Bool_Exp = {
  _and?: InputMaybe<Array<AppStates_Bool_Exp>>;
  _not?: InputMaybe<AppStates_Bool_Exp>;
  _or?: InputMaybe<Array<AppStates_Bool_Exp>>;
  appStates?: InputMaybe<AppStateHistory_Bool_Exp>;
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "app_states" */
export enum AppStates_Constraint {
  /** unique or primary key constraint on columns "name" */
  AppStatesNameKey = 'app_states_name_key',
  /** unique or primary key constraint on columns "id" */
  AppStatesPkey = 'app_states_pkey'
}

/** input type for incrementing numeric columns in table "app_states" */
export type AppStates_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "app_states" */
export type AppStates_Insert_Input = {
  appStates?: InputMaybe<AppStateHistory_Arr_Rel_Insert_Input>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AppStates_Max_Fields = {
  __typename?: 'appStates_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AppStates_Min_Fields = {
  __typename?: 'appStates_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "app_states" */
export type AppStates_Mutation_Response = {
  __typename?: 'appStates_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AppStates>;
};

/** input type for inserting object relation for remote table "app_states" */
export type AppStates_Obj_Rel_Insert_Input = {
  data: AppStates_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};

/** on_conflict condition type for table "app_states" */
export type AppStates_On_Conflict = {
  constraint: AppStates_Constraint;
  update_columns?: Array<AppStates_Update_Column>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};

/** Ordering options when selecting data from "app_states". */
export type AppStates_Order_By = {
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: app_states */
export type AppStates_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "app_states" */
export enum AppStates_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "app_states" */
export type AppStates_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type AppStates_Stddev_Fields = {
  __typename?: 'appStates_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AppStates_Stddev_Pop_Fields = {
  __typename?: 'appStates_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AppStates_Stddev_Samp_Fields = {
  __typename?: 'appStates_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "appStates" */
export type AppStates_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AppStates_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStates_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type AppStates_Sum_Fields = {
  __typename?: 'appStates_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "app_states" */
export enum AppStates_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type AppStates_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AppStates_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppStates_Set_Input>;
  where: AppStates_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AppStates_Var_Pop_Fields = {
  __typename?: 'appStates_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AppStates_Var_Samp_Fields = {
  __typename?: 'appStates_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AppStates_Variance_Fields = {
  __typename?: 'appStates_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "apps" */
export type Apps = {
  __typename?: 'apps';
  appSecrets: Array<ConfigEnvironmentVariable>;
  /** An array relationship */
  appStates: Array<AppStateHistory>;
  /** An aggregate relationship */
  appStates_aggregate: AppStateHistory_Aggregate;
  autoUpdate: Scalars['Boolean'];
  /** An array relationship */
  backups: Array<Backups>;
  /** An aggregate relationship */
  backups_aggregate: Backups_Aggregate;
  /** An object relationship */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** An object relationship */
  billingDedicatedComputeReports?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** An object relationship */
  billingSubscriptions?: Maybe<Billing_Subscriptions>;
  config?: Maybe<ConfigConfig>;
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creator?: Maybe<Users>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** An aggregate relationship */
  deployments_aggregate: Deployments_Aggregate;
  /** An object relationship */
  desiredAppState: AppStates;
  desiredState: Scalars['Int'];
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** An aggregate relationship */
  featureFlags_aggregate: FeatureFlags_Aggregate;
  /** An object relationship */
  githubRepository?: Maybe<GithubRepositories>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  isProvisioned: Scalars['Boolean'];
  metadataFunctions: Scalars['jsonb'];
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nhostBaseFolder: Scalars['String'];
  /** whether or not this app is paused */
  paused: Scalars['Boolean'];
  /** An object relationship */
  plan: Plans;
  planId: Scalars['uuid'];
  postgresPassword: Scalars['String'];
  providersUpdated?: Maybe<Scalars['Boolean']>;
  /** An object relationship */
  region: Regions;
  regionId: Scalars['uuid'];
  repositoryProductionBranch: Scalars['String'];
  slug: Scalars['String'];
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain: Scalars['String'];
  systemConfig?: Maybe<ConfigSystemConfig>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};


/** columns and relationships of "apps" */
export type AppsAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsAppStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsBackups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsConfigArgs = {
  resolve: Scalars['Boolean'];
};


/** columns and relationships of "apps" */
export type AppsDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsDeployments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsFeatureFlags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


/** columns and relationships of "apps" */
export type AppsMetadataFunctionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "apps" */
export type Apps_Aggregate = {
  __typename?: 'apps_aggregate';
  aggregate?: Maybe<Apps_Aggregate_Fields>;
  nodes: Array<Apps>;
};

export type Apps_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Apps_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Apps_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Apps_Aggregate_Bool_Exp_Count>;
};

export type Apps_Aggregate_Bool_Exp_Bool_And = {
  arguments: Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apps_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Apps_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Apps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Apps_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "apps" */
export type Apps_Aggregate_Fields = {
  __typename?: 'apps_aggregate_fields';
  avg?: Maybe<Apps_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Apps_Max_Fields>;
  min?: Maybe<Apps_Min_Fields>;
  stddev?: Maybe<Apps_Stddev_Fields>;
  stddev_pop?: Maybe<Apps_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Apps_Stddev_Samp_Fields>;
  sum?: Maybe<Apps_Sum_Fields>;
  var_pop?: Maybe<Apps_Var_Pop_Fields>;
  var_samp?: Maybe<Apps_Var_Samp_Fields>;
  variance?: Maybe<Apps_Variance_Fields>;
};


/** aggregate fields of "apps" */
export type Apps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Apps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "apps" */
export type Apps_Aggregate_Order_By = {
  avg?: InputMaybe<Apps_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Apps_Max_Order_By>;
  min?: InputMaybe<Apps_Min_Order_By>;
  stddev?: InputMaybe<Apps_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Apps_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Apps_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Apps_Sum_Order_By>;
  var_pop?: InputMaybe<Apps_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Apps_Var_Samp_Order_By>;
  variance?: InputMaybe<Apps_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Apps_Append_Input = {
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "apps" */
export type Apps_Arr_Rel_Insert_Input = {
  data: Array<Apps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};

/** aggregate avg on columns */
export type Apps_Avg_Fields = {
  __typename?: 'apps_avg_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "apps" */
export type Apps_Avg_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "apps". All fields are combined with a logical 'AND'. */
export type Apps_Bool_Exp = {
  _and?: InputMaybe<Array<Apps_Bool_Exp>>;
  _not?: InputMaybe<Apps_Bool_Exp>;
  _or?: InputMaybe<Array<Apps_Bool_Exp>>;
  appStates?: InputMaybe<AppStateHistory_Bool_Exp>;
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Bool_Exp>;
  autoUpdate?: InputMaybe<Boolean_Comparison_Exp>;
  backups?: InputMaybe<Backups_Bool_Exp>;
  backups_aggregate?: InputMaybe<Backups_Aggregate_Bool_Exp>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator?: InputMaybe<Users_Bool_Exp>;
  creatorUserId?: InputMaybe<Uuid_Comparison_Exp>;
  deployments?: InputMaybe<Deployments_Bool_Exp>;
  deployments_aggregate?: InputMaybe<Deployments_Aggregate_Bool_Exp>;
  desiredAppState?: InputMaybe<AppStates_Bool_Exp>;
  desiredState?: InputMaybe<Int_Comparison_Exp>;
  featureFlags?: InputMaybe<FeatureFlags_Bool_Exp>;
  featureFlags_aggregate?: InputMaybe<FeatureFlags_Aggregate_Bool_Exp>;
  githubRepository?: InputMaybe<GithubRepositories_Bool_Exp>;
  githubRepositoryId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isProvisioned?: InputMaybe<Boolean_Comparison_Exp>;
  metadataFunctions?: InputMaybe<Jsonb_Comparison_Exp>;
  mimirConfigEnc?: InputMaybe<String_Comparison_Exp>;
  mimirSecretsEnc?: InputMaybe<String_Comparison_Exp>;
  mimirSystemConfigEnc?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  nhostBaseFolder?: InputMaybe<String_Comparison_Exp>;
  paused?: InputMaybe<Boolean_Comparison_Exp>;
  plan?: InputMaybe<Plans_Bool_Exp>;
  planId?: InputMaybe<Uuid_Comparison_Exp>;
  postgresPassword?: InputMaybe<String_Comparison_Exp>;
  providersUpdated?: InputMaybe<Boolean_Comparison_Exp>;
  region?: InputMaybe<Regions_Bool_Exp>;
  regionId?: InputMaybe<Uuid_Comparison_Exp>;
  repositoryProductionBranch?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  stripeSubscriptionId?: InputMaybe<String_Comparison_Exp>;
  subdomain?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "apps" */
export enum Apps_Constraint {
  /** unique or primary key constraint on columns "id" */
  AppsPkey = 'apps_pkey',
  /** unique or primary key constraint on columns "subdomain" */
  AppsSubdomainKey = 'apps_subdomain_key',
  /** unique or primary key constraint on columns "workspace_id", "slug" */
  AppsWorkspaceIdSlugKey = 'apps_workspace_id_slug_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Apps_Delete_At_Path_Input = {
  metadataFunctions?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Apps_Delete_Elem_Input = {
  metadataFunctions?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Apps_Delete_Key_Input = {
  metadataFunctions?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "apps" */
export type Apps_Inc_Input = {
  desiredState?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "apps" */
export type Apps_Insert_Input = {
  appStates?: InputMaybe<AppStateHistory_Arr_Rel_Insert_Input>;
  autoUpdate?: InputMaybe<Scalars['Boolean']>;
  backups?: InputMaybe<Backups_Arr_Rel_Insert_Input>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Obj_Rel_Insert_Input>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Obj_Rel_Insert_Input>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Obj_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creator?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  deployments?: InputMaybe<Deployments_Arr_Rel_Insert_Input>;
  desiredAppState?: InputMaybe<AppStates_Obj_Rel_Insert_Input>;
  desiredState?: InputMaybe<Scalars['Int']>;
  featureFlags?: InputMaybe<FeatureFlags_Arr_Rel_Insert_Input>;
  githubRepository?: InputMaybe<GithubRepositories_Obj_Rel_Insert_Input>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isProvisioned?: InputMaybe<Scalars['Boolean']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  /** whether or not this app is paused */
  paused?: InputMaybe<Scalars['Boolean']>;
  plan?: InputMaybe<Plans_Obj_Rel_Insert_Input>;
  planId?: InputMaybe<Scalars['uuid']>;
  postgresPassword?: InputMaybe<Scalars['String']>;
  providersUpdated?: InputMaybe<Scalars['Boolean']>;
  region?: InputMaybe<Regions_Obj_Rel_Insert_Input>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Apps_Max_Fields = {
  __typename?: 'apps_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  desiredState?: Maybe<Scalars['Int']>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nhostBaseFolder?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['uuid']>;
  postgresPassword?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['uuid']>;
  repositoryProductionBranch?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "apps" */
export type Apps_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  postgresPassword?: InputMaybe<Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Apps_Min_Fields = {
  __typename?: 'apps_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  desiredState?: Maybe<Scalars['Int']>;
  githubRepositoryId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  mimirConfigEnc?: Maybe<Scalars['String']>;
  mimirSecretsEnc?: Maybe<Scalars['String']>;
  mimirSystemConfigEnc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nhostBaseFolder?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['uuid']>;
  postgresPassword?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['uuid']>;
  repositoryProductionBranch?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  subdomain?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "apps" */
export type Apps_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  desiredState?: InputMaybe<Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  planId?: InputMaybe<Order_By>;
  postgresPassword?: InputMaybe<Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "apps" */
export type Apps_Mutation_Response = {
  __typename?: 'apps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Apps>;
};

/** input type for inserting object relation for remote table "apps" */
export type Apps_Obj_Rel_Insert_Input = {
  data: Apps_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};

/** on_conflict condition type for table "apps" */
export type Apps_On_Conflict = {
  constraint: Apps_Constraint;
  update_columns?: Array<Apps_Update_Column>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** Ordering options when selecting data from "apps". */
export type Apps_Order_By = {
  appStates_aggregate?: InputMaybe<AppStateHistory_Aggregate_Order_By>;
  autoUpdate?: InputMaybe<Order_By>;
  backups_aggregate?: InputMaybe<Backups_Aggregate_Order_By>;
  billingDedicatedCompute?: InputMaybe<Billing_Dedicated_Compute_Order_By>;
  billingDedicatedComputeReports?: InputMaybe<Billing_Dedicated_Compute_Reports_Order_By>;
  billingSubscriptions?: InputMaybe<Billing_Subscriptions_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creator?: InputMaybe<Users_Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  deployments_aggregate?: InputMaybe<Deployments_Aggregate_Order_By>;
  desiredAppState?: InputMaybe<AppStates_Order_By>;
  desiredState?: InputMaybe<Order_By>;
  featureFlags_aggregate?: InputMaybe<FeatureFlags_Aggregate_Order_By>;
  githubRepository?: InputMaybe<GithubRepositories_Order_By>;
  githubRepositoryId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isProvisioned?: InputMaybe<Order_By>;
  metadataFunctions?: InputMaybe<Order_By>;
  mimirConfigEnc?: InputMaybe<Order_By>;
  mimirSecretsEnc?: InputMaybe<Order_By>;
  mimirSystemConfigEnc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  nhostBaseFolder?: InputMaybe<Order_By>;
  paused?: InputMaybe<Order_By>;
  plan?: InputMaybe<Plans_Order_By>;
  planId?: InputMaybe<Order_By>;
  postgresPassword?: InputMaybe<Order_By>;
  providersUpdated?: InputMaybe<Order_By>;
  region?: InputMaybe<Regions_Order_By>;
  regionId?: InputMaybe<Order_By>;
  repositoryProductionBranch?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeSubscriptionId?: InputMaybe<Order_By>;
  subdomain?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: apps */
export type Apps_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Apps_Prepend_Input = {
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "apps" */
export enum Apps_Select_Column {
  /** column name */
  AutoUpdate = 'autoUpdate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  DesiredState = 'desiredState',
  /** column name */
  GithubRepositoryId = 'githubRepositoryId',
  /** column name */
  Id = 'id',
  /** column name */
  IsProvisioned = 'isProvisioned',
  /** column name */
  MetadataFunctions = 'metadataFunctions',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  MimirSecretsEnc = 'mimirSecretsEnc',
  /** column name */
  MimirSystemConfigEnc = 'mimirSystemConfigEnc',
  /** column name */
  Name = 'name',
  /** column name */
  NhostBaseFolder = 'nhostBaseFolder',
  /** column name */
  Paused = 'paused',
  /** column name */
  PlanId = 'planId',
  /** column name */
  PostgresPassword = 'postgresPassword',
  /** column name */
  ProvidersUpdated = 'providersUpdated',
  /** column name */
  RegionId = 'regionId',
  /** column name */
  RepositoryProductionBranch = 'repositoryProductionBranch',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "apps_aggregate_bool_exp_bool_and_arguments_columns" columns of table "apps" */
export enum Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  AutoUpdate = 'autoUpdate',
  /** column name */
  IsProvisioned = 'isProvisioned',
  /** column name */
  Paused = 'paused',
  /** column name */
  ProvidersUpdated = 'providersUpdated'
}

/** select "apps_aggregate_bool_exp_bool_or_arguments_columns" columns of table "apps" */
export enum Apps_Select_Column_Apps_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  AutoUpdate = 'autoUpdate',
  /** column name */
  IsProvisioned = 'isProvisioned',
  /** column name */
  Paused = 'paused',
  /** column name */
  ProvidersUpdated = 'providersUpdated'
}

/** input type for updating data in table "apps" */
export type Apps_Set_Input = {
  autoUpdate?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  desiredState?: InputMaybe<Scalars['Int']>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isProvisioned?: InputMaybe<Scalars['Boolean']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  /** whether or not this app is paused */
  paused?: InputMaybe<Scalars['Boolean']>;
  planId?: InputMaybe<Scalars['uuid']>;
  postgresPassword?: InputMaybe<Scalars['String']>;
  providersUpdated?: InputMaybe<Scalars['Boolean']>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Apps_Stddev_Fields = {
  __typename?: 'apps_stddev_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "apps" */
export type Apps_Stddev_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Apps_Stddev_Pop_Fields = {
  __typename?: 'apps_stddev_pop_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "apps" */
export type Apps_Stddev_Pop_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Apps_Stddev_Samp_Fields = {
  __typename?: 'apps_stddev_samp_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "apps" */
export type Apps_Stddev_Samp_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "apps" */
export type Apps_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Apps_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Apps_Stream_Cursor_Value_Input = {
  autoUpdate?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  desiredState?: InputMaybe<Scalars['Int']>;
  githubRepositoryId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  isProvisioned?: InputMaybe<Scalars['Boolean']>;
  metadataFunctions?: InputMaybe<Scalars['jsonb']>;
  mimirConfigEnc?: InputMaybe<Scalars['String']>;
  mimirSecretsEnc?: InputMaybe<Scalars['String']>;
  mimirSystemConfigEnc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nhostBaseFolder?: InputMaybe<Scalars['String']>;
  /** whether or not this app is paused */
  paused?: InputMaybe<Scalars['Boolean']>;
  planId?: InputMaybe<Scalars['uuid']>;
  postgresPassword?: InputMaybe<Scalars['String']>;
  providersUpdated?: InputMaybe<Scalars['Boolean']>;
  regionId?: InputMaybe<Scalars['uuid']>;
  repositoryProductionBranch?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeSubscriptionId?: InputMaybe<Scalars['String']>;
  subdomain?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Apps_Sum_Fields = {
  __typename?: 'apps_sum_fields';
  desiredState?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "apps" */
export type Apps_Sum_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** update columns of table "apps" */
export enum Apps_Update_Column {
  /** column name */
  AutoUpdate = 'autoUpdate',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  DesiredState = 'desiredState',
  /** column name */
  GithubRepositoryId = 'githubRepositoryId',
  /** column name */
  Id = 'id',
  /** column name */
  IsProvisioned = 'isProvisioned',
  /** column name */
  MetadataFunctions = 'metadataFunctions',
  /** column name */
  MimirConfigEnc = 'mimirConfigEnc',
  /** column name */
  MimirSecretsEnc = 'mimirSecretsEnc',
  /** column name */
  MimirSystemConfigEnc = 'mimirSystemConfigEnc',
  /** column name */
  Name = 'name',
  /** column name */
  NhostBaseFolder = 'nhostBaseFolder',
  /** column name */
  Paused = 'paused',
  /** column name */
  PlanId = 'planId',
  /** column name */
  PostgresPassword = 'postgresPassword',
  /** column name */
  ProvidersUpdated = 'providersUpdated',
  /** column name */
  RegionId = 'regionId',
  /** column name */
  RepositoryProductionBranch = 'repositoryProductionBranch',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeSubscriptionId = 'stripeSubscriptionId',
  /** column name */
  Subdomain = 'subdomain',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type Apps_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Apps_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Apps_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Apps_Set_Input>;
  where: Apps_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Apps_Var_Pop_Fields = {
  __typename?: 'apps_var_pop_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "apps" */
export type Apps_Var_Pop_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Apps_Var_Samp_Fields = {
  __typename?: 'apps_var_samp_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "apps" */
export type Apps_Var_Samp_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Apps_Variance_Fields = {
  __typename?: 'apps_variance_fields';
  desiredState?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "apps" */
export type Apps_Variance_Order_By = {
  desiredState?: InputMaybe<Order_By>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  metadata?: Maybe<Scalars['jsonb']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
  refreshTokenHash?: Maybe<Scalars['String']>;
  type: Scalars['refresh_token_type'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshToken?: InputMaybe<Uuid_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Refresh_Token_Type_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['refresh_token_type']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['refresh_token_type']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['refresh_token_type']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  type?: InputMaybe<Scalars['refresh_token_type']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** DEPRECATED: auto-generated refresh token id. Will be replaced by a genereric id column that will be used as a primary key, not the refresh token itself. Use refresh_token_hash instead. */
  refreshToken?: InputMaybe<Scalars['uuid']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['refresh_token_type']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Internal table for tracking migrations. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Auth_Migrations = {
  __typename?: 'auth_migrations';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "auth.migrations" */
export type Auth_Migrations_Aggregate = {
  __typename?: 'auth_migrations_aggregate';
  aggregate?: Maybe<Auth_Migrations_Aggregate_Fields>;
  nodes: Array<Auth_Migrations>;
};

/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_Fields = {
  __typename?: 'auth_migrations_aggregate_fields';
  avg?: Maybe<Auth_Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Migrations_Max_Fields>;
  min?: Maybe<Auth_Migrations_Min_Fields>;
  stddev?: Maybe<Auth_Migrations_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Migrations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Migrations_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Migrations_Sum_Fields>;
  var_pop?: Maybe<Auth_Migrations_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Migrations_Var_Samp_Fields>;
  variance?: Maybe<Auth_Migrations_Variance_Fields>;
};


/** aggregate fields of "auth.migrations" */
export type Auth_Migrations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Migrations_Avg_Fields = {
  __typename?: 'auth_migrations_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "auth.migrations". All fields are combined with a logical 'AND'. */
export type Auth_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  _not?: InputMaybe<Auth_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Migrations_Bool_Exp>>;
  executed_at?: InputMaybe<Timestamp_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.migrations" */
export enum Auth_Migrations_Constraint {
  /** unique or primary key constraint on columns "name" */
  MigrationsNameKey = 'migrations_name_key',
  /** unique or primary key constraint on columns "id" */
  MigrationsPkey = 'migrations_pkey'
}

/** input type for incrementing numeric columns in table "auth.migrations" */
export type Auth_Migrations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "auth.migrations" */
export type Auth_Migrations_Insert_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Migrations_Max_Fields = {
  __typename?: 'auth_migrations_max_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Migrations_Min_Fields = {
  __typename?: 'auth_migrations_min_fields';
  executed_at?: Maybe<Scalars['timestamp']>;
  hash?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.migrations" */
export type Auth_Migrations_Mutation_Response = {
  __typename?: 'auth_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Migrations>;
};

/** on_conflict condition type for table "auth.migrations" */
export type Auth_Migrations_On_Conflict = {
  constraint: Auth_Migrations_Constraint;
  update_columns?: Array<Auth_Migrations_Update_Column>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.migrations". */
export type Auth_Migrations_Order_By = {
  executed_at?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.migrations */
export type Auth_Migrations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "auth.migrations" */
export enum Auth_Migrations_Select_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "auth.migrations" */
export type Auth_Migrations_Set_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Migrations_Stddev_Fields = {
  __typename?: 'auth_migrations_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Migrations_Stddev_Pop_Fields = {
  __typename?: 'auth_migrations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Migrations_Stddev_Samp_Fields = {
  __typename?: 'auth_migrations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "auth_migrations" */
export type Auth_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Migrations_Stream_Cursor_Value_Input = {
  executed_at?: InputMaybe<Scalars['timestamp']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Auth_Migrations_Sum_Fields = {
  __typename?: 'auth_migrations_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "auth.migrations" */
export enum Auth_Migrations_Update_Column {
  /** column name */
  ExecutedAt = 'executed_at',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Auth_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  where: Auth_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Auth_Migrations_Var_Pop_Fields = {
  __typename?: 'auth_migrations_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Migrations_Var_Samp_Fields = {
  __typename?: 'auth_migrations_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Migrations_Variance_Fields = {
  __typename?: 'auth_migrations_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "backups" */
export type Backups = {
  __typename?: 'backups';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt: Scalars['timestamptz'];
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  size: Scalars['bigint'];
};

/** aggregated selection of "backups" */
export type Backups_Aggregate = {
  __typename?: 'backups_aggregate';
  aggregate?: Maybe<Backups_Aggregate_Fields>;
  nodes: Array<Backups>;
};

export type Backups_Aggregate_Bool_Exp = {
  count?: InputMaybe<Backups_Aggregate_Bool_Exp_Count>;
};

export type Backups_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Backups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Backups_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "backups" */
export type Backups_Aggregate_Fields = {
  __typename?: 'backups_aggregate_fields';
  avg?: Maybe<Backups_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Backups_Max_Fields>;
  min?: Maybe<Backups_Min_Fields>;
  stddev?: Maybe<Backups_Stddev_Fields>;
  stddev_pop?: Maybe<Backups_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Backups_Stddev_Samp_Fields>;
  sum?: Maybe<Backups_Sum_Fields>;
  var_pop?: Maybe<Backups_Var_Pop_Fields>;
  var_samp?: Maybe<Backups_Var_Samp_Fields>;
  variance?: Maybe<Backups_Variance_Fields>;
};


/** aggregate fields of "backups" */
export type Backups_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Backups_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "backups" */
export type Backups_Aggregate_Order_By = {
  avg?: InputMaybe<Backups_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Backups_Max_Order_By>;
  min?: InputMaybe<Backups_Min_Order_By>;
  stddev?: InputMaybe<Backups_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Backups_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Backups_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Backups_Sum_Order_By>;
  var_pop?: InputMaybe<Backups_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Backups_Var_Samp_Order_By>;
  variance?: InputMaybe<Backups_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "backups" */
export type Backups_Arr_Rel_Insert_Input = {
  data: Array<Backups_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};

/** aggregate avg on columns */
export type Backups_Avg_Fields = {
  __typename?: 'backups_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "backups" */
export type Backups_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "backups". All fields are combined with a logical 'AND'. */
export type Backups_Bool_Exp = {
  _and?: InputMaybe<Array<Backups_Bool_Exp>>;
  _not?: InputMaybe<Backups_Bool_Exp>;
  _or?: InputMaybe<Array<Backups_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  completedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  size?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "backups" */
export enum Backups_Constraint {
  /** unique or primary key constraint on columns "id" */
  BackupsPkey = 'backups_pkey'
}

/** input type for incrementing numeric columns in table "backups" */
export type Backups_Inc_Input = {
  size?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "backups" */
export type Backups_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Backups_Max_Fields = {
  __typename?: 'backups_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "backups" */
export type Backups_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Backups_Min_Fields = {
  __typename?: 'backups_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  completedAt?: Maybe<Scalars['timestamptz']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "backups" */
export type Backups_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "backups" */
export type Backups_Mutation_Response = {
  __typename?: 'backups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Backups>;
};

/** on_conflict condition type for table "backups" */
export type Backups_On_Conflict = {
  constraint: Backups_Constraint;
  update_columns?: Array<Backups_Update_Column>;
  where?: InputMaybe<Backups_Bool_Exp>;
};

/** Ordering options when selecting data from "backups". */
export type Backups_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  completedAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
};

/** primary key columns input for table: backups */
export type Backups_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "backups" */
export enum Backups_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size'
}

/** input type for updating data in table "backups" */
export type Backups_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Backups_Stddev_Fields = {
  __typename?: 'backups_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "backups" */
export type Backups_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Backups_Stddev_Pop_Fields = {
  __typename?: 'backups_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "backups" */
export type Backups_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Backups_Stddev_Samp_Fields = {
  __typename?: 'backups_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "backups" */
export type Backups_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "backups" */
export type Backups_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Backups_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Backups_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  completedAt?: InputMaybe<Scalars['timestamptz']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type Backups_Sum_Fields = {
  __typename?: 'backups_sum_fields';
  size?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "backups" */
export type Backups_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "backups" */
export enum Backups_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CompletedAt = 'completedAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size'
}

export type Backups_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Backups_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Backups_Set_Input>;
  where: Backups_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Backups_Var_Pop_Fields = {
  __typename?: 'backups_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "backups" */
export type Backups_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Backups_Var_Samp_Fields = {
  __typename?: 'backups_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "backups" */
export type Backups_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Backups_Variance_Fields = {
  __typename?: 'backups_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "backups" */
export type Backups_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute = {
  __typename?: 'billing_dedicated_compute';
  /** An object relationship */
  app?: Maybe<Apps>;
  app_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  total_millicores: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate = {
  __typename?: 'billing_dedicated_compute_aggregate';
  aggregate?: Maybe<Billing_Dedicated_Compute_Aggregate_Fields>;
  nodes: Array<Billing_Dedicated_Compute>;
};

/** aggregate fields of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate_Fields = {
  __typename?: 'billing_dedicated_compute_aggregate_fields';
  avg?: Maybe<Billing_Dedicated_Compute_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Dedicated_Compute_Max_Fields>;
  min?: Maybe<Billing_Dedicated_Compute_Min_Fields>;
  stddev?: Maybe<Billing_Dedicated_Compute_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Dedicated_Compute_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Dedicated_Compute_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Dedicated_Compute_Sum_Fields>;
  var_pop?: Maybe<Billing_Dedicated_Compute_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Dedicated_Compute_Var_Samp_Fields>;
  variance?: Maybe<Billing_Dedicated_Compute_Variance_Fields>;
};


/** aggregate fields of "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Dedicated_Compute_Avg_Fields = {
  __typename?: 'billing_dedicated_compute_avg_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.dedicated_compute". All fields are combined with a logical 'AND'. */
export type Billing_Dedicated_Compute_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Dedicated_Compute_Bool_Exp>>;
  _not?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Dedicated_Compute_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  total_millicores?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Constraint {
  /** unique or primary key constraint on columns "app_id" */
  DedicatedComputeAppIdKey = 'dedicated_compute_app_id_key',
  /** unique or primary key constraint on columns "id" */
  DedicatedComputePkey = 'dedicated_compute_pkey'
}

/** input type for incrementing numeric columns in table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Inc_Input = {
  total_millicores?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Dedicated_Compute_Max_Fields = {
  __typename?: 'billing_dedicated_compute_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Dedicated_Compute_Min_Fields = {
  __typename?: 'billing_dedicated_compute_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Mutation_Response = {
  __typename?: 'billing_dedicated_compute_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Dedicated_Compute>;
};

/** input type for inserting object relation for remote table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Obj_Rel_Insert_Input = {
  data: Billing_Dedicated_Compute_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};

/** on_conflict condition type for table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_On_Conflict = {
  constraint: Billing_Dedicated_Compute_Constraint;
  update_columns?: Array<Billing_Dedicated_Compute_Update_Column>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.dedicated_compute". */
export type Billing_Dedicated_Compute_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  total_millicores?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.dedicated_compute */
export type Billing_Dedicated_Compute_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports = {
  __typename?: 'billing_dedicated_compute_reports';
  /** An object relationship */
  app?: Maybe<Apps>;
  app_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pending: Scalars['Boolean'];
  report_ends: Scalars['timestamptz'];
  report_starts: Scalars['timestamptz'];
  total_millicores: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate = {
  __typename?: 'billing_dedicated_compute_reports_aggregate';
  aggregate?: Maybe<Billing_Dedicated_Compute_Reports_Aggregate_Fields>;
  nodes: Array<Billing_Dedicated_Compute_Reports>;
};

/** aggregate fields of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate_Fields = {
  __typename?: 'billing_dedicated_compute_reports_aggregate_fields';
  avg?: Maybe<Billing_Dedicated_Compute_Reports_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Billing_Dedicated_Compute_Reports_Max_Fields>;
  min?: Maybe<Billing_Dedicated_Compute_Reports_Min_Fields>;
  stddev?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Fields>;
  stddev_pop?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Billing_Dedicated_Compute_Reports_Stddev_Samp_Fields>;
  sum?: Maybe<Billing_Dedicated_Compute_Reports_Sum_Fields>;
  var_pop?: Maybe<Billing_Dedicated_Compute_Reports_Var_Pop_Fields>;
  var_samp?: Maybe<Billing_Dedicated_Compute_Reports_Var_Samp_Fields>;
  variance?: Maybe<Billing_Dedicated_Compute_Reports_Variance_Fields>;
};


/** aggregate fields of "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Billing_Dedicated_Compute_Reports_Avg_Fields = {
  __typename?: 'billing_dedicated_compute_reports_avg_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "billing.dedicated_compute_reports". All fields are combined with a logical 'AND'. */
export type Billing_Dedicated_Compute_Reports_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Bool_Exp>>;
  _not?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pending?: InputMaybe<Boolean_Comparison_Exp>;
  report_ends?: InputMaybe<Timestamptz_Comparison_Exp>;
  report_starts?: InputMaybe<Timestamptz_Comparison_Exp>;
  total_millicores?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Constraint {
  /** unique or primary key constraint on columns "id" */
  DedicatedComputeReportsPkey = 'dedicated_compute_reports_pkey'
}

/** input type for incrementing numeric columns in table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Inc_Input = {
  total_millicores?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Dedicated_Compute_Reports_Max_Fields = {
  __typename?: 'billing_dedicated_compute_reports_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  report_ends?: Maybe<Scalars['timestamptz']>;
  report_starts?: Maybe<Scalars['timestamptz']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Dedicated_Compute_Reports_Min_Fields = {
  __typename?: 'billing_dedicated_compute_reports_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  report_ends?: Maybe<Scalars['timestamptz']>;
  report_starts?: Maybe<Scalars['timestamptz']>;
  total_millicores?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Mutation_Response = {
  __typename?: 'billing_dedicated_compute_reports_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Dedicated_Compute_Reports>;
};

/** input type for inserting object relation for remote table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Obj_Rel_Insert_Input = {
  data: Billing_Dedicated_Compute_Reports_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};

/** on_conflict condition type for table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_On_Conflict = {
  constraint: Billing_Dedicated_Compute_Reports_Constraint;
  update_columns?: Array<Billing_Dedicated_Compute_Reports_Update_Column>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.dedicated_compute_reports". */
export type Billing_Dedicated_Compute_Reports_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pending?: InputMaybe<Order_By>;
  report_ends?: InputMaybe<Order_By>;
  report_starts?: InputMaybe<Order_By>;
  total_millicores?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.dedicated_compute_reports */
export type Billing_Dedicated_Compute_Reports_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'report_ends',
  /** column name */
  ReportStarts = 'report_starts',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "billing.dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Dedicated_Compute_Reports_Stddev_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_reports_stddev_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_dedicated_compute_reports" */
export type Billing_Dedicated_Compute_Reports_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Dedicated_Compute_Reports_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Dedicated_Compute_Reports_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  report_ends?: InputMaybe<Scalars['timestamptz']>;
  report_starts?: InputMaybe<Scalars['timestamptz']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Billing_Dedicated_Compute_Reports_Sum_Fields = {
  __typename?: 'billing_dedicated_compute_reports_sum_fields';
  total_millicores?: Maybe<Scalars['Int']>;
};

/** update columns of table "billing.dedicated_compute_reports" */
export enum Billing_Dedicated_Compute_Reports_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pending = 'pending',
  /** column name */
  ReportEnds = 'report_ends',
  /** column name */
  ReportStarts = 'report_starts',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Billing_Dedicated_Compute_Reports_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Dedicated_Compute_Reports_Var_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_reports_var_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Dedicated_Compute_Reports_Var_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_reports_var_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Dedicated_Compute_Reports_Variance_Fields = {
  __typename?: 'billing_dedicated_compute_reports_variance_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** select columns of table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "billing.dedicated_compute" */
export type Billing_Dedicated_Compute_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Billing_Dedicated_Compute_Stddev_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Billing_Dedicated_Compute_Stddev_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Billing_Dedicated_Compute_Stddev_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_stddev_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "billing_dedicated_compute" */
export type Billing_Dedicated_Compute_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Dedicated_Compute_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Dedicated_Compute_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  total_millicores?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Billing_Dedicated_Compute_Sum_Fields = {
  __typename?: 'billing_dedicated_compute_sum_fields';
  total_millicores?: Maybe<Scalars['Int']>;
};

/** update columns of table "billing.dedicated_compute" */
export enum Billing_Dedicated_Compute_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  TotalMillicores = 'total_millicores',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Billing_Dedicated_Compute_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  where: Billing_Dedicated_Compute_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Billing_Dedicated_Compute_Var_Pop_Fields = {
  __typename?: 'billing_dedicated_compute_var_pop_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Billing_Dedicated_Compute_Var_Samp_Fields = {
  __typename?: 'billing_dedicated_compute_var_samp_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Billing_Dedicated_Compute_Variance_Fields = {
  __typename?: 'billing_dedicated_compute_variance_fields';
  total_millicores?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "billing.subscriptions" */
export type Billing_Subscriptions = {
  __typename?: 'billing_subscriptions';
  /** An object relationship */
  app?: Maybe<Apps>;
  app_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  dedicated_compute?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate = {
  __typename?: 'billing_subscriptions_aggregate';
  aggregate?: Maybe<Billing_Subscriptions_Aggregate_Fields>;
  nodes: Array<Billing_Subscriptions>;
};

/** aggregate fields of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate_Fields = {
  __typename?: 'billing_subscriptions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Billing_Subscriptions_Max_Fields>;
  min?: Maybe<Billing_Subscriptions_Min_Fields>;
};


/** aggregate fields of "billing.subscriptions" */
export type Billing_Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "billing.subscriptions". All fields are combined with a logical 'AND'. */
export type Billing_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<Billing_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<Billing_Subscriptions_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  app_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  dedicated_compute?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "billing.subscriptions" */
export enum Billing_Subscriptions_Constraint {
  /** unique or primary key constraint on columns "app_id" */
  SubscriptionsAppIdKey = 'subscriptions_app_id_key',
  /** unique or primary key constraint on columns "dedicated_compute" */
  SubscriptionsDedicatedComputeKey = 'subscriptions_dedicated_compute_key',
  /** unique or primary key constraint on columns "id" */
  SubscriptionsPkey = 'subscriptions_pkey'
}

/** input type for inserting data into table "billing.subscriptions" */
export type Billing_Subscriptions_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dedicated_compute?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Billing_Subscriptions_Max_Fields = {
  __typename?: 'billing_subscriptions_max_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dedicated_compute?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Billing_Subscriptions_Min_Fields = {
  __typename?: 'billing_subscriptions_min_fields';
  app_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dedicated_compute?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "billing.subscriptions" */
export type Billing_Subscriptions_Mutation_Response = {
  __typename?: 'billing_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Billing_Subscriptions>;
};

/** input type for inserting object relation for remote table "billing.subscriptions" */
export type Billing_Subscriptions_Obj_Rel_Insert_Input = {
  data: Billing_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "billing.subscriptions" */
export type Billing_Subscriptions_On_Conflict = {
  constraint: Billing_Subscriptions_Constraint;
  update_columns?: Array<Billing_Subscriptions_Update_Column>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "billing.subscriptions". */
export type Billing_Subscriptions_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  dedicated_compute?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: billing.subscriptions */
export type Billing_Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "billing.subscriptions" */
export enum Billing_Subscriptions_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DedicatedCompute = 'dedicated_compute',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "billing.subscriptions" */
export type Billing_Subscriptions_Set_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dedicated_compute?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "billing_subscriptions" */
export type Billing_Subscriptions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Billing_Subscriptions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Billing_Subscriptions_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  dedicated_compute?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "billing.subscriptions" */
export enum Billing_Subscriptions_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DedicatedCompute = 'dedicated_compute',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Billing_Subscriptions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  where: Billing_Subscriptions_Bool_Exp;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "cli_tokens" */
export type CliTokens = {
  __typename?: 'cliTokens';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  token: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "cli_tokens" */
export type CliTokens_Aggregate = {
  __typename?: 'cliTokens_aggregate';
  aggregate?: Maybe<CliTokens_Aggregate_Fields>;
  nodes: Array<CliTokens>;
};

export type CliTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<CliTokens_Aggregate_Bool_Exp_Count>;
};

export type CliTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<CliTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<CliTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cli_tokens" */
export type CliTokens_Aggregate_Fields = {
  __typename?: 'cliTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<CliTokens_Max_Fields>;
  min?: Maybe<CliTokens_Min_Fields>;
};


/** aggregate fields of "cli_tokens" */
export type CliTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<CliTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cli_tokens" */
export type CliTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<CliTokens_Max_Order_By>;
  min?: InputMaybe<CliTokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "cli_tokens" */
export type CliTokens_Arr_Rel_Insert_Input = {
  data: Array<CliTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "cli_tokens". All fields are combined with a logical 'AND'. */
export type CliTokens_Bool_Exp = {
  _and?: InputMaybe<Array<CliTokens_Bool_Exp>>;
  _not?: InputMaybe<CliTokens_Bool_Exp>;
  _or?: InputMaybe<Array<CliTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  token?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cli_tokens" */
export enum CliTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  CliTokensPkey = 'cliTokens_pkey'
}

/** input type for inserting data into table "cli_tokens" */
export type CliTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type CliTokens_Max_Fields = {
  __typename?: 'cliTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  token?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cli_tokens" */
export type CliTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type CliTokens_Min_Fields = {
  __typename?: 'cliTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  token?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cli_tokens" */
export type CliTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cli_tokens" */
export type CliTokens_Mutation_Response = {
  __typename?: 'cliTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<CliTokens>;
};

/** on_conflict condition type for table "cli_tokens" */
export type CliTokens_On_Conflict = {
  constraint: CliTokens_Constraint;
  update_columns?: Array<CliTokens_Update_Column>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "cli_tokens". */
export type CliTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cli_tokens */
export type CliTokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "cli_tokens" */
export enum CliTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "cli_tokens" */
export type CliTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "cliTokens" */
export type CliTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: CliTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type CliTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  token?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "cli_tokens" */
export enum CliTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type CliTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CliTokens_Set_Input>;
  where: CliTokens_Bool_Exp;
};

/** columns and relationships of "continents" */
export type Continents = {
  __typename?: 'continents';
  /** Continent code */
  code: Scalars['bpchar'];
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "continents" */
export type ContinentsCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


/** columns and relationships of "continents" */
export type ContinentsCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

/** aggregated selection of "continents" */
export type Continents_Aggregate = {
  __typename?: 'continents_aggregate';
  aggregate?: Maybe<Continents_Aggregate_Fields>;
  nodes: Array<Continents>;
};

/** aggregate fields of "continents" */
export type Continents_Aggregate_Fields = {
  __typename?: 'continents_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Continents_Max_Fields>;
  min?: Maybe<Continents_Min_Fields>;
};


/** aggregate fields of "continents" */
export type Continents_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Continents_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "continents". All fields are combined with a logical 'AND'. */
export type Continents_Bool_Exp = {
  _and?: InputMaybe<Array<Continents_Bool_Exp>>;
  _not?: InputMaybe<Continents_Bool_Exp>;
  _or?: InputMaybe<Array<Continents_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  countries?: InputMaybe<Countries_Bool_Exp>;
  countries_aggregate?: InputMaybe<Countries_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "continents" */
export enum Continents_Constraint {
  /** unique or primary key constraint on columns "code" */
  ContinentPkey = 'continent_pkey'
}

/** input type for inserting data into table "continents" */
export type Continents_Insert_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  countries?: InputMaybe<Countries_Arr_Rel_Insert_Input>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Continents_Max_Fields = {
  __typename?: 'continents_max_fields';
  /** Continent code */
  code?: Maybe<Scalars['bpchar']>;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Continents_Min_Fields = {
  __typename?: 'continents_min_fields';
  /** Continent code */
  code?: Maybe<Scalars['bpchar']>;
  /** Continent name */
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "continents" */
export type Continents_Mutation_Response = {
  __typename?: 'continents_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Continents>;
};

/** input type for inserting object relation for remote table "continents" */
export type Continents_Obj_Rel_Insert_Input = {
  data: Continents_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};

/** on_conflict condition type for table "continents" */
export type Continents_On_Conflict = {
  constraint: Continents_Constraint;
  update_columns?: Array<Continents_Update_Column>;
  where?: InputMaybe<Continents_Bool_Exp>;
};

/** Ordering options when selecting data from "continents". */
export type Continents_Order_By = {
  code?: InputMaybe<Order_By>;
  countries_aggregate?: InputMaybe<Countries_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: continents */
export type Continents_Pk_Columns_Input = {
  /** Continent code */
  code: Scalars['bpchar'];
};

/** select columns of table "continents" */
export enum Continents_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "continents" */
export type Continents_Set_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "continents" */
export type Continents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Continents_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Continents_Stream_Cursor_Value_Input = {
  /** Continent code */
  code?: InputMaybe<Scalars['bpchar']>;
  /** Continent name */
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "continents" */
export enum Continents_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  Name = 'name'
}

export type Continents_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Continents_Set_Input>;
  where: Continents_Bool_Exp;
};

/** columns and relationships of "countries" */
export type Countries = {
  __typename?: 'countries';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code: Scalars['bpchar'];
  /** An object relationship */
  continent: Continents;
  continentCode: Scalars['bpchar'];
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** An array relationship */
  locations: Array<Regions>;
  /** An aggregate relationship */
  locations_aggregate: Regions_Aggregate;
  /** English country name */
  name: Scalars['String'];
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** An aggregate relationship */
  workspaces_aggregate: Workspaces_Aggregate;
};


/** columns and relationships of "countries" */
export type CountriesLocationsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** columns and relationships of "countries" */
export type CountriesWorkspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** aggregated selection of "countries" */
export type Countries_Aggregate = {
  __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

export type Countries_Aggregate_Bool_Exp = {
  count?: InputMaybe<Countries_Aggregate_Bool_Exp_Count>;
};

export type Countries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Countries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "countries" */
export type Countries_Aggregate_Fields = {
  __typename?: 'countries_aggregate_fields';
  avg?: Maybe<Countries_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
  stddev?: Maybe<Countries_Stddev_Fields>;
  stddev_pop?: Maybe<Countries_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Countries_Stddev_Samp_Fields>;
  sum?: Maybe<Countries_Sum_Fields>;
  var_pop?: Maybe<Countries_Var_Pop_Fields>;
  var_samp?: Maybe<Countries_Var_Samp_Fields>;
  variance?: Maybe<Countries_Variance_Fields>;
};


/** aggregate fields of "countries" */
export type Countries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Countries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "countries" */
export type Countries_Aggregate_Order_By = {
  avg?: InputMaybe<Countries_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Countries_Max_Order_By>;
  min?: InputMaybe<Countries_Min_Order_By>;
  stddev?: InputMaybe<Countries_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Countries_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Countries_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Countries_Sum_Order_By>;
  var_pop?: InputMaybe<Countries_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Countries_Var_Samp_Order_By>;
  variance?: InputMaybe<Countries_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "countries" */
export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};

/** aggregate avg on columns */
export type Countries_Avg_Fields = {
  __typename?: 'countries_avg_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "countries" */
export type Countries_Avg_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: InputMaybe<Array<Countries_Bool_Exp>>;
  _not?: InputMaybe<Countries_Bool_Exp>;
  _or?: InputMaybe<Array<Countries_Bool_Exp>>;
  code?: InputMaybe<Bpchar_Comparison_Exp>;
  continent?: InputMaybe<Continents_Bool_Exp>;
  continentCode?: InputMaybe<Bpchar_Comparison_Exp>;
  emojiFlag?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  iso3?: InputMaybe<Bpchar_Comparison_Exp>;
  isoNumber?: InputMaybe<Smallint_Comparison_Exp>;
  locations?: InputMaybe<Regions_Bool_Exp>;
  locations_aggregate?: InputMaybe<Regions_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  workspaces?: InputMaybe<Workspaces_Bool_Exp>;
  workspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "countries" */
export enum Countries_Constraint {
  /** unique or primary key constraint on columns "code" */
  CountryPkey = 'country_pkey'
}

/** input type for incrementing numeric columns in table "countries" */
export type Countries_Inc_Input = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "countries" */
export type Countries_Insert_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continent?: InputMaybe<Continents_Obj_Rel_Insert_Input>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  locations?: InputMaybe<Regions_Arr_Rel_Insert_Input>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
  workspaces?: InputMaybe<Workspaces_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Countries_Max_Fields = {
  __typename?: 'countries_max_fields';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: Maybe<Scalars['bpchar']>;
  continentCode?: Maybe<Scalars['bpchar']>;
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** English country name */
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "countries" */
export type Countries_Max_Order_By = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  /** Full English country name */
  fullName?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
  /** English country name */
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Countries_Min_Fields = {
  __typename?: 'countries_min_fields';
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: Maybe<Scalars['bpchar']>;
  continentCode?: Maybe<Scalars['bpchar']>;
  emojiFlag?: Maybe<Scalars['String']>;
  /** Full English country name */
  fullName?: Maybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: Maybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
  /** English country name */
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "countries" */
export type Countries_Min_Order_By = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  /** Full English country name */
  fullName?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Order_By>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
  /** English country name */
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "countries" */
export type Countries_Mutation_Response = {
  __typename?: 'countries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Countries>;
};

/** input type for inserting object relation for remote table "countries" */
export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};

/** on_conflict condition type for table "countries" */
export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns?: Array<Countries_Update_Column>;
  where?: InputMaybe<Countries_Bool_Exp>;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
  code?: InputMaybe<Order_By>;
  continent?: InputMaybe<Continents_Order_By>;
  continentCode?: InputMaybe<Order_By>;
  emojiFlag?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  iso3?: InputMaybe<Order_By>;
  isoNumber?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Regions_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  workspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Order_By>;
};

/** primary key columns input for table: countries */
export type Countries_Pk_Columns_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code: Scalars['bpchar'];
};

/** select columns of table "countries" */
export enum Countries_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  EmojiFlag = 'emojiFlag',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  IsoNumber = 'isoNumber',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "countries" */
export type Countries_Set_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Countries_Stddev_Fields = {
  __typename?: 'countries_stddev_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "countries" */
export type Countries_Stddev_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Countries_Stddev_Pop_Fields = {
  __typename?: 'countries_stddev_pop_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "countries" */
export type Countries_Stddev_Pop_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Countries_Stddev_Samp_Fields = {
  __typename?: 'countries_stddev_samp_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "countries" */
export type Countries_Stddev_Samp_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "countries" */
export type Countries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Countries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Countries_Stream_Cursor_Value_Input = {
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  code?: InputMaybe<Scalars['bpchar']>;
  continentCode?: InputMaybe<Scalars['bpchar']>;
  emojiFlag?: InputMaybe<Scalars['String']>;
  /** Full English country name */
  fullName?: InputMaybe<Scalars['String']>;
  /** Three-letter country code (ISO 3166-1 alpha-3) */
  iso3?: InputMaybe<Scalars['bpchar']>;
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Scalars['smallint']>;
  /** English country name */
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Countries_Sum_Fields = {
  __typename?: 'countries_sum_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['smallint']>;
};

/** order by sum() on columns of table "countries" */
export type Countries_Sum_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** update columns of table "countries" */
export enum Countries_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  ContinentCode = 'continentCode',
  /** column name */
  EmojiFlag = 'emojiFlag',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Iso3 = 'iso3',
  /** column name */
  IsoNumber = 'isoNumber',
  /** column name */
  Name = 'name'
}

export type Countries_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Countries_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Countries_Var_Pop_Fields = {
  __typename?: 'countries_var_pop_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "countries" */
export type Countries_Var_Pop_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Countries_Var_Samp_Fields = {
  __typename?: 'countries_var_samp_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "countries" */
export type Countries_Var_Samp_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Countries_Variance_Fields = {
  __typename?: 'countries_variance_fields';
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "countries" */
export type Countries_Variance_Order_By = {
  /** Three-letter country code (ISO 3166-1 numeric) */
  isoNumber?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "deployment_logs" */
export type DeploymentLogs = {
  __typename?: 'deploymentLogs';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  deployment: Deployments;
  deploymentId: Scalars['uuid'];
  id: Scalars['uuid'];
  message: Scalars['String'];
};

/** aggregated selection of "deployment_logs" */
export type DeploymentLogs_Aggregate = {
  __typename?: 'deploymentLogs_aggregate';
  aggregate?: Maybe<DeploymentLogs_Aggregate_Fields>;
  nodes: Array<DeploymentLogs>;
};

export type DeploymentLogs_Aggregate_Bool_Exp = {
  count?: InputMaybe<DeploymentLogs_Aggregate_Bool_Exp_Count>;
};

export type DeploymentLogs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<DeploymentLogs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deployment_logs" */
export type DeploymentLogs_Aggregate_Fields = {
  __typename?: 'deploymentLogs_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<DeploymentLogs_Max_Fields>;
  min?: Maybe<DeploymentLogs_Min_Fields>;
};


/** aggregate fields of "deployment_logs" */
export type DeploymentLogs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deployment_logs" */
export type DeploymentLogs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<DeploymentLogs_Max_Order_By>;
  min?: InputMaybe<DeploymentLogs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "deployment_logs" */
export type DeploymentLogs_Arr_Rel_Insert_Input = {
  data: Array<DeploymentLogs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "deployment_logs". All fields are combined with a logical 'AND'. */
export type DeploymentLogs_Bool_Exp = {
  _and?: InputMaybe<Array<DeploymentLogs_Bool_Exp>>;
  _not?: InputMaybe<DeploymentLogs_Bool_Exp>;
  _or?: InputMaybe<Array<DeploymentLogs_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deployment?: InputMaybe<Deployments_Bool_Exp>;
  deploymentId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "deployment_logs" */
export enum DeploymentLogs_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeploymentLogsPkey = 'deployment_logs_pkey'
}

/** input type for inserting data into table "deployment_logs" */
export type DeploymentLogs_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deployment?: InputMaybe<Deployments_Obj_Rel_Insert_Input>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type DeploymentLogs_Max_Fields = {
  __typename?: 'deploymentLogs_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deploymentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "deployment_logs" */
export type DeploymentLogs_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type DeploymentLogs_Min_Fields = {
  __typename?: 'deploymentLogs_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  deploymentId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "deployment_logs" */
export type DeploymentLogs_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deployment_logs" */
export type DeploymentLogs_Mutation_Response = {
  __typename?: 'deploymentLogs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<DeploymentLogs>;
};

/** on_conflict condition type for table "deployment_logs" */
export type DeploymentLogs_On_Conflict = {
  constraint: DeploymentLogs_Constraint;
  update_columns?: Array<DeploymentLogs_Update_Column>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};

/** Ordering options when selecting data from "deployment_logs". */
export type DeploymentLogs_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  deployment?: InputMaybe<Deployments_Order_By>;
  deploymentId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deployment_logs */
export type DeploymentLogs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deployment_logs" */
export enum DeploymentLogs_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeploymentId = 'deploymentId',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message'
}

/** input type for updating data in table "deployment_logs" */
export type DeploymentLogs_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "deploymentLogs" */
export type DeploymentLogs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: DeploymentLogs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type DeploymentLogs_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
};

/** update columns of table "deployment_logs" */
export enum DeploymentLogs_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DeploymentId = 'deploymentId',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message'
}

export type DeploymentLogs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  where: DeploymentLogs_Bool_Exp;
};

/** Table that keeps track of deployments done by watchtower */
export type Deployments = {
  __typename?: 'deployments';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA: Scalars['String'];
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** An aggregate relationship */
  deploymentLogs_aggregate: DeploymentLogs_Aggregate;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};


/** Table that keeps track of deployments done by watchtower */
export type DeploymentsDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


/** Table that keeps track of deployments done by watchtower */
export type DeploymentsDeploymentLogs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};

/** aggregated selection of "deployments" */
export type Deployments_Aggregate = {
  __typename?: 'deployments_aggregate';
  aggregate?: Maybe<Deployments_Aggregate_Fields>;
  nodes: Array<Deployments>;
};

export type Deployments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Deployments_Aggregate_Bool_Exp_Count>;
};

export type Deployments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Deployments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Deployments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "deployments" */
export type Deployments_Aggregate_Fields = {
  __typename?: 'deployments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Deployments_Max_Fields>;
  min?: Maybe<Deployments_Min_Fields>;
};


/** aggregate fields of "deployments" */
export type Deployments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deployments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deployments" */
export type Deployments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deployments_Max_Order_By>;
  min?: InputMaybe<Deployments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "deployments" */
export type Deployments_Arr_Rel_Insert_Input = {
  data: Array<Deployments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "deployments". All fields are combined with a logical 'AND'. */
export type Deployments_Bool_Exp = {
  _and?: InputMaybe<Array<Deployments_Bool_Exp>>;
  _not?: InputMaybe<Deployments_Bool_Exp>;
  _or?: InputMaybe<Array<Deployments_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  commitMessage?: InputMaybe<String_Comparison_Exp>;
  commitSHA?: InputMaybe<String_Comparison_Exp>;
  commitUserAvatarUrl?: InputMaybe<String_Comparison_Exp>;
  commitUserName?: InputMaybe<String_Comparison_Exp>;
  deploymentEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deploymentLogs?: InputMaybe<DeploymentLogs_Bool_Exp>;
  deploymentLogs_aggregate?: InputMaybe<DeploymentLogs_Aggregate_Bool_Exp>;
  deploymentStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  deploymentStatus?: InputMaybe<String_Comparison_Exp>;
  functionsEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  functionsStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  functionsStatus?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadataEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadataStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadataStatus?: InputMaybe<String_Comparison_Exp>;
  migrationsEndedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  migrationsStartedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  migrationsStatus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "deployments" */
export enum Deployments_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeploymentsPkey = 'deployments_pkey'
}

/** input type for inserting data into table "deployments" */
export type Deployments_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentLogs?: InputMaybe<DeploymentLogs_Arr_Rel_Insert_Input>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Deployments_Max_Fields = {
  __typename?: 'deployments_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA?: Maybe<Scalars['String']>;
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "deployments" */
export type Deployments_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deployments_Min_Fields = {
  __typename?: 'deployments_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  commitMessage?: Maybe<Scalars['String']>;
  commitSHA?: Maybe<Scalars['String']>;
  commitUserAvatarUrl?: Maybe<Scalars['String']>;
  commitUserName?: Maybe<Scalars['String']>;
  deploymentEndedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStartedAt?: Maybe<Scalars['timestamptz']>;
  deploymentStatus?: Maybe<Scalars['String']>;
  functionsEndedAt?: Maybe<Scalars['timestamptz']>;
  functionsStartedAt?: Maybe<Scalars['timestamptz']>;
  functionsStatus?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  metadataEndedAt?: Maybe<Scalars['timestamptz']>;
  metadataStartedAt?: Maybe<Scalars['timestamptz']>;
  metadataStatus?: Maybe<Scalars['String']>;
  migrationsEndedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStartedAt?: Maybe<Scalars['timestamptz']>;
  migrationsStatus?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "deployments" */
export type Deployments_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deployments" */
export type Deployments_Mutation_Response = {
  __typename?: 'deployments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Deployments>;
};

/** input type for inserting object relation for remote table "deployments" */
export type Deployments_Obj_Rel_Insert_Input = {
  data: Deployments_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};

/** on_conflict condition type for table "deployments" */
export type Deployments_On_Conflict = {
  constraint: Deployments_Constraint;
  update_columns?: Array<Deployments_Update_Column>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};

/** Ordering options when selecting data from "deployments". */
export type Deployments_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  commitMessage?: InputMaybe<Order_By>;
  commitSHA?: InputMaybe<Order_By>;
  commitUserAvatarUrl?: InputMaybe<Order_By>;
  commitUserName?: InputMaybe<Order_By>;
  deploymentEndedAt?: InputMaybe<Order_By>;
  deploymentLogs_aggregate?: InputMaybe<DeploymentLogs_Aggregate_Order_By>;
  deploymentStartedAt?: InputMaybe<Order_By>;
  deploymentStatus?: InputMaybe<Order_By>;
  functionsEndedAt?: InputMaybe<Order_By>;
  functionsStartedAt?: InputMaybe<Order_By>;
  functionsStatus?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadataEndedAt?: InputMaybe<Order_By>;
  metadataStartedAt?: InputMaybe<Order_By>;
  metadataStatus?: InputMaybe<Order_By>;
  migrationsEndedAt?: InputMaybe<Order_By>;
  migrationsStartedAt?: InputMaybe<Order_By>;
  migrationsStatus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: deployments */
export type Deployments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "deployments" */
export enum Deployments_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CommitMessage = 'commitMessage',
  /** column name */
  CommitSha = 'commitSHA',
  /** column name */
  CommitUserAvatarUrl = 'commitUserAvatarUrl',
  /** column name */
  CommitUserName = 'commitUserName',
  /** column name */
  DeploymentEndedAt = 'deploymentEndedAt',
  /** column name */
  DeploymentStartedAt = 'deploymentStartedAt',
  /** column name */
  DeploymentStatus = 'deploymentStatus',
  /** column name */
  FunctionsEndedAt = 'functionsEndedAt',
  /** column name */
  FunctionsStartedAt = 'functionsStartedAt',
  /** column name */
  FunctionsStatus = 'functionsStatus',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataEndedAt = 'metadataEndedAt',
  /** column name */
  MetadataStartedAt = 'metadataStartedAt',
  /** column name */
  MetadataStatus = 'metadataStatus',
  /** column name */
  MigrationsEndedAt = 'migrationsEndedAt',
  /** column name */
  MigrationsStartedAt = 'migrationsStartedAt',
  /** column name */
  MigrationsStatus = 'migrationsStatus'
}

/** input type for updating data in table "deployments" */
export type Deployments_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "deployments" */
export type Deployments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deployments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Deployments_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  commitMessage?: InputMaybe<Scalars['String']>;
  commitSHA?: InputMaybe<Scalars['String']>;
  commitUserAvatarUrl?: InputMaybe<Scalars['String']>;
  commitUserName?: InputMaybe<Scalars['String']>;
  deploymentEndedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStartedAt?: InputMaybe<Scalars['timestamptz']>;
  deploymentStatus?: InputMaybe<Scalars['String']>;
  functionsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  functionsStatus?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadataEndedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStartedAt?: InputMaybe<Scalars['timestamptz']>;
  metadataStatus?: InputMaybe<Scalars['String']>;
  migrationsEndedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStartedAt?: InputMaybe<Scalars['timestamptz']>;
  migrationsStatus?: InputMaybe<Scalars['String']>;
};

/** update columns of table "deployments" */
export enum Deployments_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  CommitMessage = 'commitMessage',
  /** column name */
  CommitSha = 'commitSHA',
  /** column name */
  CommitUserAvatarUrl = 'commitUserAvatarUrl',
  /** column name */
  CommitUserName = 'commitUserName',
  /** column name */
  DeploymentEndedAt = 'deploymentEndedAt',
  /** column name */
  DeploymentStartedAt = 'deploymentStartedAt',
  /** column name */
  DeploymentStatus = 'deploymentStatus',
  /** column name */
  FunctionsEndedAt = 'functionsEndedAt',
  /** column name */
  FunctionsStartedAt = 'functionsStartedAt',
  /** column name */
  FunctionsStatus = 'functionsStatus',
  /** column name */
  Id = 'id',
  /** column name */
  MetadataEndedAt = 'metadataEndedAt',
  /** column name */
  MetadataStartedAt = 'metadataStartedAt',
  /** column name */
  MetadataStatus = 'metadataStatus',
  /** column name */
  MigrationsEndedAt = 'migrationsEndedAt',
  /** column name */
  MigrationsStartedAt = 'migrationsStartedAt',
  /** column name */
  MigrationsStatus = 'migrationsStatus'
}

export type Deployments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deployments_Set_Input>;
  where: Deployments_Bool_Exp;
};

/** columns and relationships of "feature_flags" */
export type FeatureFlags = {
  __typename?: 'featureFlags';
  /** An object relationship */
  app: Apps;
  appId: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "feature_flags" */
export type FeatureFlags_Aggregate = {
  __typename?: 'featureFlags_aggregate';
  aggregate?: Maybe<FeatureFlags_Aggregate_Fields>;
  nodes: Array<FeatureFlags>;
};

export type FeatureFlags_Aggregate_Bool_Exp = {
  count?: InputMaybe<FeatureFlags_Aggregate_Bool_Exp_Count>;
};

export type FeatureFlags_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<FeatureFlags_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feature_flags" */
export type FeatureFlags_Aggregate_Fields = {
  __typename?: 'featureFlags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<FeatureFlags_Max_Fields>;
  min?: Maybe<FeatureFlags_Min_Fields>;
};


/** aggregate fields of "feature_flags" */
export type FeatureFlags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feature_flags" */
export type FeatureFlags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<FeatureFlags_Max_Order_By>;
  min?: InputMaybe<FeatureFlags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "feature_flags" */
export type FeatureFlags_Arr_Rel_Insert_Input = {
  data: Array<FeatureFlags_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "feature_flags". All fields are combined with a logical 'AND'. */
export type FeatureFlags_Bool_Exp = {
  _and?: InputMaybe<Array<FeatureFlags_Bool_Exp>>;
  _not?: InputMaybe<FeatureFlags_Bool_Exp>;
  _or?: InputMaybe<Array<FeatureFlags_Bool_Exp>>;
  app?: InputMaybe<Apps_Bool_Exp>;
  appId?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feature_flags" */
export enum FeatureFlags_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeatureFlagsPkey = 'feature_flags_pkey'
}

/** input type for inserting data into table "feature_flags" */
export type FeatureFlags_Insert_Input = {
  app?: InputMaybe<Apps_Obj_Rel_Insert_Input>;
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type FeatureFlags_Max_Fields = {
  __typename?: 'featureFlags_max_fields';
  appId?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "feature_flags" */
export type FeatureFlags_Max_Order_By = {
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type FeatureFlags_Min_Fields = {
  __typename?: 'featureFlags_min_fields';
  appId?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "feature_flags" */
export type FeatureFlags_Min_Order_By = {
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feature_flags" */
export type FeatureFlags_Mutation_Response = {
  __typename?: 'featureFlags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FeatureFlags>;
};

/** on_conflict condition type for table "feature_flags" */
export type FeatureFlags_On_Conflict = {
  constraint: FeatureFlags_Constraint;
  update_columns?: Array<FeatureFlags_Update_Column>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};

/** Ordering options when selecting data from "feature_flags". */
export type FeatureFlags_Order_By = {
  app?: InputMaybe<Apps_Order_By>;
  appId?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feature_flags */
export type FeatureFlags_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "feature_flags" */
export enum FeatureFlags_Select_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "feature_flags" */
export type FeatureFlags_Set_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "featureFlags" */
export type FeatureFlags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: FeatureFlags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type FeatureFlags_Stream_Cursor_Value_Input = {
  appId?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "feature_flags" */
export enum FeatureFlags_Update_Column {
  /** column name */
  AppId = 'appId',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Value = 'value'
}

export type FeatureFlags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  where: FeatureFlags_Bool_Exp;
};

/** columns and relationships of "feedback" */
export type Feedback = {
  __typename?: 'feedback';
  createdAt: Scalars['timestamptz'];
  feedback: Scalars['String'];
  id: Scalars['Int'];
  sentBy: Scalars['uuid'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "feedback" */
export type Feedback_Aggregate = {
  __typename?: 'feedback_aggregate';
  aggregate?: Maybe<Feedback_Aggregate_Fields>;
  nodes: Array<Feedback>;
};

export type Feedback_Aggregate_Bool_Exp = {
  count?: InputMaybe<Feedback_Aggregate_Bool_Exp_Count>;
};

export type Feedback_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Feedback_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "feedback" */
export type Feedback_Aggregate_Fields = {
  __typename?: 'feedback_aggregate_fields';
  avg?: Maybe<Feedback_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feedback_Max_Fields>;
  min?: Maybe<Feedback_Min_Fields>;
  stddev?: Maybe<Feedback_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Sum_Fields>;
  var_pop?: Maybe<Feedback_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Variance_Fields>;
};


/** aggregate fields of "feedback" */
export type Feedback_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "feedback" */
export type Feedback_Aggregate_Order_By = {
  avg?: InputMaybe<Feedback_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Feedback_Max_Order_By>;
  min?: InputMaybe<Feedback_Min_Order_By>;
  stddev?: InputMaybe<Feedback_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Feedback_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Feedback_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Feedback_Sum_Order_By>;
  var_pop?: InputMaybe<Feedback_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Feedback_Var_Samp_Order_By>;
  variance?: InputMaybe<Feedback_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "feedback" */
export type Feedback_Arr_Rel_Insert_Input = {
  data: Array<Feedback_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};

/** aggregate avg on columns */
export type Feedback_Avg_Fields = {
  __typename?: 'feedback_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "feedback" */
export type Feedback_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "feedback". All fields are combined with a logical 'AND'. */
export type Feedback_Bool_Exp = {
  _and?: InputMaybe<Array<Feedback_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  feedback?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  sentBy?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "feedback" */
export enum Feedback_Constraint {
  /** unique or primary key constraint on columns "id" */
  FeedbackPkey = 'feedback_pkey'
}

/** input type for incrementing numeric columns in table "feedback" */
export type Feedback_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "feedback" */
export type Feedback_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  sentBy?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Feedback_Max_Fields = {
  __typename?: 'feedback_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sentBy?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "feedback" */
export type Feedback_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sentBy?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Feedback_Min_Fields = {
  __typename?: 'feedback_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  feedback?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  sentBy?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "feedback" */
export type Feedback_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sentBy?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "feedback" */
export type Feedback_Mutation_Response = {
  __typename?: 'feedback_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback>;
};

/** on_conflict condition type for table "feedback" */
export type Feedback_On_Conflict = {
  constraint: Feedback_Constraint;
  update_columns?: Array<Feedback_Update_Column>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback". */
export type Feedback_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  sentBy?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: feedback */
export type Feedback_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feedback" */
export enum Feedback_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  SentBy = 'sentBy'
}

/** input type for updating data in table "feedback" */
export type Feedback_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  sentBy?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Feedback_Stddev_Fields = {
  __typename?: 'feedback_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "feedback" */
export type Feedback_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Stddev_Pop_Fields = {
  __typename?: 'feedback_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "feedback" */
export type Feedback_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Stddev_Samp_Fields = {
  __typename?: 'feedback_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "feedback" */
export type Feedback_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "feedback" */
export type Feedback_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Feedback_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Feedback_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  feedback?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  sentBy?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Feedback_Sum_Fields = {
  __typename?: 'feedback_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "feedback" */
export type Feedback_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "feedback" */
export enum Feedback_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  Id = 'id',
  /** column name */
  SentBy = 'sentBy'
}

export type Feedback_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Feedback_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Feedback_Set_Input>;
  where: Feedback_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Feedback_Var_Pop_Fields = {
  __typename?: 'feedback_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "feedback" */
export type Feedback_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Feedback_Var_Samp_Fields = {
  __typename?: 'feedback_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "feedback" */
export type Feedback_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Feedback_Variance_Fields = {
  __typename?: 'feedback_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "feedback" */
export type Feedback_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "github_app_installations" */
export type GithubAppInstallations = {
  __typename?: 'githubAppInstallations';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  githubData?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** An aggregate relationship */
  githubRepositories_aggregate: GithubRepositories_Aggregate;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user?: Maybe<Users>;
  userId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubDataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


/** columns and relationships of "github_app_installations" */
export type GithubAppInstallationsGithubRepositories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};

/** aggregated selection of "github_app_installations" */
export type GithubAppInstallations_Aggregate = {
  __typename?: 'githubAppInstallations_aggregate';
  aggregate?: Maybe<GithubAppInstallations_Aggregate_Fields>;
  nodes: Array<GithubAppInstallations>;
};

export type GithubAppInstallations_Aggregate_Bool_Exp = {
  count?: InputMaybe<GithubAppInstallations_Aggregate_Bool_Exp_Count>;
};

export type GithubAppInstallations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "github_app_installations" */
export type GithubAppInstallations_Aggregate_Fields = {
  __typename?: 'githubAppInstallations_aggregate_fields';
  avg?: Maybe<GithubAppInstallations_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<GithubAppInstallations_Max_Fields>;
  min?: Maybe<GithubAppInstallations_Min_Fields>;
  stddev?: Maybe<GithubAppInstallations_Stddev_Fields>;
  stddev_pop?: Maybe<GithubAppInstallations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<GithubAppInstallations_Stddev_Samp_Fields>;
  sum?: Maybe<GithubAppInstallations_Sum_Fields>;
  var_pop?: Maybe<GithubAppInstallations_Var_Pop_Fields>;
  var_samp?: Maybe<GithubAppInstallations_Var_Samp_Fields>;
  variance?: Maybe<GithubAppInstallations_Variance_Fields>;
};


/** aggregate fields of "github_app_installations" */
export type GithubAppInstallations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "github_app_installations" */
export type GithubAppInstallations_Aggregate_Order_By = {
  avg?: InputMaybe<GithubAppInstallations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GithubAppInstallations_Max_Order_By>;
  min?: InputMaybe<GithubAppInstallations_Min_Order_By>;
  stddev?: InputMaybe<GithubAppInstallations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<GithubAppInstallations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<GithubAppInstallations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<GithubAppInstallations_Sum_Order_By>;
  var_pop?: InputMaybe<GithubAppInstallations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<GithubAppInstallations_Var_Samp_Order_By>;
  variance?: InputMaybe<GithubAppInstallations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type GithubAppInstallations_Append_Input = {
  githubData?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "github_app_installations" */
export type GithubAppInstallations_Arr_Rel_Insert_Input = {
  data: Array<GithubAppInstallations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};

/** aggregate avg on columns */
export type GithubAppInstallations_Avg_Fields = {
  __typename?: 'githubAppInstallations_avg_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "github_app_installations" */
export type GithubAppInstallations_Avg_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "github_app_installations". All fields are combined with a logical 'AND'. */
export type GithubAppInstallations_Bool_Exp = {
  _and?: InputMaybe<Array<GithubAppInstallations_Bool_Exp>>;
  _not?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  _or?: InputMaybe<Array<GithubAppInstallations_Bool_Exp>>;
  accountAvatarUrl?: InputMaybe<String_Comparison_Exp>;
  accountLogin?: InputMaybe<String_Comparison_Exp>;
  accountNodeId?: InputMaybe<String_Comparison_Exp>;
  accountType?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  externalGithubAppInstallationId?: InputMaybe<Int_Comparison_Exp>;
  githubData?: InputMaybe<Jsonb_Comparison_Exp>;
  githubRepositories?: InputMaybe<GithubRepositories_Bool_Exp>;
  githubRepositories_aggregate?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "github_app_installations" */
export enum GithubAppInstallations_Constraint {
  /** unique or primary key constraint on columns "external_github_app_installation_id" */
  GithubAppInstallationsExternalGithubAppInstallationIKey = 'github_app_installations_external_github_app_installation_i_key',
  /** unique or primary key constraint on columns "id" */
  GithubAppInstallationsPkey = 'github_app_installations_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type GithubAppInstallations_Delete_At_Path_Input = {
  githubData?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type GithubAppInstallations_Delete_Elem_Input = {
  githubData?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type GithubAppInstallations_Delete_Key_Input = {
  githubData?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "github_app_installations" */
export type GithubAppInstallations_Inc_Input = {
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "github_app_installations" */
export type GithubAppInstallations_Insert_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  githubRepositories?: InputMaybe<GithubRepositories_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type GithubAppInstallations_Max_Fields = {
  __typename?: 'githubAppInstallations_max_fields';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "github_app_installations" */
export type GithubAppInstallations_Max_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GithubAppInstallations_Min_Fields = {
  __typename?: 'githubAppInstallations_min_fields';
  accountAvatarUrl?: Maybe<Scalars['String']>;
  accountLogin?: Maybe<Scalars['String']>;
  accountNodeId?: Maybe<Scalars['String']>;
  accountType?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "github_app_installations" */
export type GithubAppInstallations_Min_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "github_app_installations" */
export type GithubAppInstallations_Mutation_Response = {
  __typename?: 'githubAppInstallations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubAppInstallations>;
};

/** input type for inserting object relation for remote table "github_app_installations" */
export type GithubAppInstallations_Obj_Rel_Insert_Input = {
  data: GithubAppInstallations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};

/** on_conflict condition type for table "github_app_installations" */
export type GithubAppInstallations_On_Conflict = {
  constraint: GithubAppInstallations_Constraint;
  update_columns?: Array<GithubAppInstallations_Update_Column>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};

/** Ordering options when selecting data from "github_app_installations". */
export type GithubAppInstallations_Order_By = {
  accountAvatarUrl?: InputMaybe<Order_By>;
  accountLogin?: InputMaybe<Order_By>;
  accountNodeId?: InputMaybe<Order_By>;
  accountType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
  githubData?: InputMaybe<Order_By>;
  githubRepositories_aggregate?: InputMaybe<GithubRepositories_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: github_app_installations */
export type GithubAppInstallations_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type GithubAppInstallations_Prepend_Input = {
  githubData?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "github_app_installations" */
export enum GithubAppInstallations_Select_Column {
  /** column name */
  AccountAvatarUrl = 'accountAvatarUrl',
  /** column name */
  AccountLogin = 'accountLogin',
  /** column name */
  AccountNodeId = 'accountNodeId',
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppInstallationId = 'externalGithubAppInstallationId',
  /** column name */
  GithubData = 'githubData',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "github_app_installations" */
export type GithubAppInstallations_Set_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type GithubAppInstallations_Stddev_Fields = {
  __typename?: 'githubAppInstallations_stddev_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type GithubAppInstallations_Stddev_Pop_Fields = {
  __typename?: 'githubAppInstallations_stddev_pop_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Pop_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type GithubAppInstallations_Stddev_Samp_Fields = {
  __typename?: 'githubAppInstallations_stddev_samp_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "github_app_installations" */
export type GithubAppInstallations_Stddev_Samp_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "githubAppInstallations" */
export type GithubAppInstallations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GithubAppInstallations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GithubAppInstallations_Stream_Cursor_Value_Input = {
  accountAvatarUrl?: InputMaybe<Scalars['String']>;
  accountLogin?: InputMaybe<Scalars['String']>;
  accountNodeId?: InputMaybe<Scalars['String']>;
  accountType?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppInstallationId?: InputMaybe<Scalars['Int']>;
  githubData?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type GithubAppInstallations_Sum_Fields = {
  __typename?: 'githubAppInstallations_sum_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "github_app_installations" */
export type GithubAppInstallations_Sum_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** update columns of table "github_app_installations" */
export enum GithubAppInstallations_Update_Column {
  /** column name */
  AccountAvatarUrl = 'accountAvatarUrl',
  /** column name */
  AccountLogin = 'accountLogin',
  /** column name */
  AccountNodeId = 'accountNodeId',
  /** column name */
  AccountType = 'accountType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppInstallationId = 'externalGithubAppInstallationId',
  /** column name */
  GithubData = 'githubData',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type GithubAppInstallations_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  where: GithubAppInstallations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type GithubAppInstallations_Var_Pop_Fields = {
  __typename?: 'githubAppInstallations_var_pop_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "github_app_installations" */
export type GithubAppInstallations_Var_Pop_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type GithubAppInstallations_Var_Samp_Fields = {
  __typename?: 'githubAppInstallations_var_samp_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "github_app_installations" */
export type GithubAppInstallations_Var_Samp_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type GithubAppInstallations_Variance_Fields = {
  __typename?: 'githubAppInstallations_variance_fields';
  externalGithubAppInstallationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "github_app_installations" */
export type GithubAppInstallations_Variance_Order_By = {
  externalGithubAppInstallationId?: InputMaybe<Order_By>;
};

/** columns and relationships of "github_repositories" */
export type GithubRepositories = {
  __typename?: 'githubRepositories';
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  createdAt: Scalars['timestamptz'];
  externalGithubAppRepositoryNodeId: Scalars['String'];
  fullName: Scalars['String'];
  /** An object relationship */
  githubAppInstallation: GithubAppInstallations;
  githubAppInstallationId: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  private: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "github_repositories" */
export type GithubRepositoriesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "github_repositories" */
export type GithubRepositoriesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "github_repositories" */
export type GithubRepositories_Aggregate = {
  __typename?: 'githubRepositories_aggregate';
  aggregate?: Maybe<GithubRepositories_Aggregate_Fields>;
  nodes: Array<GithubRepositories>;
};

export type GithubRepositories_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<GithubRepositories_Aggregate_Bool_Exp_Count>;
};

export type GithubRepositories_Aggregate_Bool_Exp_Bool_And = {
  arguments: GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type GithubRepositories_Aggregate_Bool_Exp_Bool_Or = {
  arguments: GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type GithubRepositories_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<GithubRepositories_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "github_repositories" */
export type GithubRepositories_Aggregate_Fields = {
  __typename?: 'githubRepositories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<GithubRepositories_Max_Fields>;
  min?: Maybe<GithubRepositories_Min_Fields>;
};


/** aggregate fields of "github_repositories" */
export type GithubRepositories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "github_repositories" */
export type GithubRepositories_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<GithubRepositories_Max_Order_By>;
  min?: InputMaybe<GithubRepositories_Min_Order_By>;
};

/** input type for inserting array relation for remote table "github_repositories" */
export type GithubRepositories_Arr_Rel_Insert_Input = {
  data: Array<GithubRepositories_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};

/** Boolean expression to filter rows from the table "github_repositories". All fields are combined with a logical 'AND'. */
export type GithubRepositories_Bool_Exp = {
  _and?: InputMaybe<Array<GithubRepositories_Bool_Exp>>;
  _not?: InputMaybe<GithubRepositories_Bool_Exp>;
  _or?: InputMaybe<Array<GithubRepositories_Bool_Exp>>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  externalGithubAppRepositoryNodeId?: InputMaybe<String_Comparison_Exp>;
  fullName?: InputMaybe<String_Comparison_Exp>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  githubAppInstallationId?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  private?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "github_repositories" */
export enum GithubRepositories_Constraint {
  /** unique or primary key constraint on columns "id" */
  GithubRepositoriesPkey = 'github_repositories_pkey'
}

/** input type for inserting data into table "github_repositories" */
export type GithubRepositories_Insert_Input = {
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Obj_Rel_Insert_Input>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type GithubRepositories_Max_Fields = {
  __typename?: 'githubRepositories_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  githubAppInstallationId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "github_repositories" */
export type GithubRepositories_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type GithubRepositories_Min_Fields = {
  __typename?: 'githubRepositories_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  githubAppInstallationId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "github_repositories" */
export type GithubRepositories_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "github_repositories" */
export type GithubRepositories_Mutation_Response = {
  __typename?: 'githubRepositories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<GithubRepositories>;
};

/** input type for inserting object relation for remote table "github_repositories" */
export type GithubRepositories_Obj_Rel_Insert_Input = {
  data: GithubRepositories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};

/** on_conflict condition type for table "github_repositories" */
export type GithubRepositories_On_Conflict = {
  constraint: GithubRepositories_Constraint;
  update_columns?: Array<GithubRepositories_Update_Column>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};

/** Ordering options when selecting data from "github_repositories". */
export type GithubRepositories_Order_By = {
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Order_By>;
  fullName?: InputMaybe<Order_By>;
  githubAppInstallation?: InputMaybe<GithubAppInstallations_Order_By>;
  githubAppInstallationId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  private?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: github_repositories */
export type GithubRepositories_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "github_repositories" */
export enum GithubRepositories_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppRepositoryNodeId = 'externalGithubAppRepositoryNodeId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  GithubAppInstallationId = 'githubAppInstallationId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "githubRepositories_aggregate_bool_exp_bool_and_arguments_columns" columns of table "github_repositories" */
export enum GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Private = 'private'
}

/** select "githubRepositories_aggregate_bool_exp_bool_or_arguments_columns" columns of table "github_repositories" */
export enum GithubRepositories_Select_Column_GithubRepositories_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Private = 'private'
}

/** input type for updating data in table "github_repositories" */
export type GithubRepositories_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "githubRepositories" */
export type GithubRepositories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: GithubRepositories_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type GithubRepositories_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  externalGithubAppRepositoryNodeId?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  githubAppInstallationId?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  private?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "github_repositories" */
export enum GithubRepositories_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExternalGithubAppRepositoryNodeId = 'externalGithubAppRepositoryNodeId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  GithubAppInstallationId = 'githubAppInstallationId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Private = 'private',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type GithubRepositories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  where: GithubRepositories_Bool_Exp;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  backupAllApplicationsDatabase: Array<Maybe<BackupResultsItem>>;
  backupApplicationDatabase: BackupResult;
  billingFinishSubscription: Scalars['Boolean'];
  billingFixSubscriptions: Scalars['Boolean'];
  billingReportDedicatedCompute: Scalars['Boolean'];
  billingUpdateAndReportDedicatedComputeReports: Scalars['Boolean'];
  billingUpdateDedicatedCompute: Scalars['Boolean'];
  billingUpdateDedicatedComputeReports: Scalars['Boolean'];
  /** delete single row from the table: "apps" */
  deleteApp?: Maybe<Apps>;
  /** delete single row from the table: "app_states" */
  deleteAppState?: Maybe<AppStates>;
  /** delete data from the table: "app_state_history" */
  deleteAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** delete single row from the table: "app_state_history" */
  deleteAppStateHistory?: Maybe<AppStateHistory>;
  /** delete data from the table: "app_states" */
  deleteAppStates?: Maybe<AppStates_Mutation_Response>;
  /** delete data from the table: "apps" */
  deleteApps?: Maybe<Apps_Mutation_Response>;
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "backups" */
  deleteBackup?: Maybe<Backups>;
  /** delete data from the table: "backups" */
  deleteBackups?: Maybe<Backups_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "cli_tokens" */
  deleteCliToken?: Maybe<CliTokens>;
  /** delete data from the table: "cli_tokens" */
  deleteCliTokens?: Maybe<CliTokens_Mutation_Response>;
  deleteConfig?: Maybe<ConfigConfig>;
  /** delete single row from the table: "deployments" */
  deleteDeployment?: Maybe<Deployments>;
  /** delete single row from the table: "deployment_logs" */
  deleteDeploymentLog?: Maybe<DeploymentLogs>;
  /** delete data from the table: "deployment_logs" */
  deleteDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** delete data from the table: "deployments" */
  deleteDeployments?: Maybe<Deployments_Mutation_Response>;
  /** delete single row from the table: "feature_flags" */
  deleteFeatureFlag?: Maybe<FeatureFlags>;
  /** delete data from the table: "feature_flags" */
  deleteFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** delete data from the table: "feedback" */
  deleteFeedback?: Maybe<Feedback_Mutation_Response>;
  /** delete single row from the table: "feedback" */
  deleteFeedbackOne?: Maybe<Feedback>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "github_app_installations" */
  deleteGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** delete data from the table: "github_app_installations" */
  deleteGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** delete data from the table: "github_repositories" */
  deleteGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** delete single row from the table: "github_repositories" */
  deleteGithubRepository?: Maybe<GithubRepositories>;
  /** delete single row from the table: "payment_methods" */
  deletePaymentMethod?: Maybe<PaymentMethods>;
  /** delete data from the table: "payment_methods" */
  deletePaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** delete single row from the table: "plans" */
  deletePlan?: Maybe<Plans>;
  /** delete data from the table: "plans" */
  deletePlans?: Maybe<Plans_Mutation_Response>;
  deleteSecret: ConfigEnvironmentVariable;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "workspaces" */
  deleteWorkspace?: Maybe<Workspaces>;
  /** delete single row from the table: "workspace_members" */
  deleteWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** delete single row from the table: "workspace_member_invites" */
  deleteWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** delete data from the table: "workspace_member_invites" */
  deleteWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** delete data from the table: "workspace_members" */
  deleteWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** delete data from the table: "workspaces" */
  deleteWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** delete data from the table: "auth.migrations" */
  delete_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** delete single row from the table: "auth.migrations" */
  delete_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** delete data from the table: "continents" */
  delete_continents?: Maybe<Continents_Mutation_Response>;
  /** delete single row from the table: "continents" */
  delete_continents_by_pk?: Maybe<Continents>;
  /** delete data from the table: "countries" */
  delete_countries?: Maybe<Countries_Mutation_Response>;
  /** delete single row from the table: "countries" */
  delete_countries_by_pk?: Maybe<Countries>;
  /** delete data from the table: "regions" */
  delete_regions?: Maybe<Regions_Mutation_Response>;
  /** delete single row from the table: "regions" */
  delete_regions_by_pk?: Maybe<Regions>;
  /** insert a single row into the table: "apps" */
  insertApp?: Maybe<Apps>;
  /** insert a single row into the table: "app_states" */
  insertAppState?: Maybe<AppStates>;
  /** insert data into the table: "app_state_history" */
  insertAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** insert a single row into the table: "app_state_history" */
  insertAppStateHistory?: Maybe<AppStateHistory>;
  /** insert data into the table: "app_states" */
  insertAppStates?: Maybe<AppStates_Mutation_Response>;
  /** insert data into the table: "apps" */
  insertApps?: Maybe<Apps_Mutation_Response>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "backups" */
  insertBackup?: Maybe<Backups>;
  /** insert data into the table: "backups" */
  insertBackups?: Maybe<Backups_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "cli_tokens" */
  insertCliToken?: Maybe<CliTokens>;
  /** insert data into the table: "cli_tokens" */
  insertCliTokens?: Maybe<CliTokens_Mutation_Response>;
  insertConfig: ConfigInsertConfigResponse;
  /** insert a single row into the table: "deployments" */
  insertDeployment?: Maybe<Deployments>;
  /** insert a single row into the table: "deployment_logs" */
  insertDeploymentLog?: Maybe<DeploymentLogs>;
  /** insert data into the table: "deployment_logs" */
  insertDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** insert data into the table: "deployments" */
  insertDeployments?: Maybe<Deployments_Mutation_Response>;
  /** insert a single row into the table: "feature_flags" */
  insertFeatureFlag?: Maybe<FeatureFlags>;
  /** insert data into the table: "feature_flags" */
  insertFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** insert data into the table: "feedback" */
  insertFeedback?: Maybe<Feedback_Mutation_Response>;
  /** insert a single row into the table: "feedback" */
  insertFeedbackOne?: Maybe<Feedback>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "github_app_installations" */
  insertGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** insert data into the table: "github_app_installations" */
  insertGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** insert data into the table: "github_repositories" */
  insertGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** insert a single row into the table: "github_repositories" */
  insertGithubRepository?: Maybe<GithubRepositories>;
  /** insert a single row into the table: "payment_methods" */
  insertPaymentMethod?: Maybe<PaymentMethods>;
  /** insert data into the table: "payment_methods" */
  insertPaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** insert a single row into the table: "plans" */
  insertPlan?: Maybe<Plans>;
  /** insert data into the table: "plans" */
  insertPlans?: Maybe<Plans_Mutation_Response>;
  insertSecret: ConfigEnvironmentVariable;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "workspaces" */
  insertWorkspace?: Maybe<Workspaces>;
  /** insert a single row into the table: "workspace_members" */
  insertWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** insert a single row into the table: "workspace_member_invites" */
  insertWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** insert data into the table: "workspace_member_invites" */
  insertWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** insert data into the table: "workspace_members" */
  insertWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** insert data into the table: "workspaces" */
  insertWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** insert data into the table: "auth.migrations" */
  insert_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** insert a single row into the table: "auth.migrations" */
  insert_auth_migrations_one?: Maybe<Auth_Migrations>;
  /** insert data into the table: "continents" */
  insert_continents?: Maybe<Continents_Mutation_Response>;
  /** insert a single row into the table: "continents" */
  insert_continents_one?: Maybe<Continents>;
  /** insert data into the table: "countries" */
  insert_countries?: Maybe<Countries_Mutation_Response>;
  /** insert a single row into the table: "countries" */
  insert_countries_one?: Maybe<Countries>;
  /** insert data into the table: "regions" */
  insert_regions?: Maybe<Regions_Mutation_Response>;
  /** insert a single row into the table: "regions" */
  insert_regions_one?: Maybe<Regions>;
  migrateRDSToPostgres: Scalars['Boolean'];
  pauseInactiveApps: Array<Scalars['String']>;
  replaceConfig: ConfigConfig;
  resetPostgresPassword: Scalars['Boolean'];
  restoreApplicationDatabase: Scalars['Boolean'];
  /** update single row of the table: "apps" */
  updateApp?: Maybe<Apps>;
  /** update single row of the table: "app_states" */
  updateAppState?: Maybe<AppStates>;
  /** update data of the table: "app_state_history" */
  updateAppStateHistories?: Maybe<AppStateHistory_Mutation_Response>;
  /** update single row of the table: "app_state_history" */
  updateAppStateHistory?: Maybe<AppStateHistory>;
  /** update data of the table: "app_states" */
  updateAppStates?: Maybe<AppStates_Mutation_Response>;
  /** update data of the table: "apps" */
  updateApps?: Maybe<Apps_Mutation_Response>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "backups" */
  updateBackup?: Maybe<Backups>;
  /** update data of the table: "backups" */
  updateBackups?: Maybe<Backups_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "cli_tokens" */
  updateCliToken?: Maybe<CliTokens>;
  /** update data of the table: "cli_tokens" */
  updateCliTokens?: Maybe<CliTokens_Mutation_Response>;
  updateConfig: ConfigConfig;
  /** update single row of the table: "deployments" */
  updateDeployment?: Maybe<Deployments>;
  /** update single row of the table: "deployment_logs" */
  updateDeploymentLog?: Maybe<DeploymentLogs>;
  /** update data of the table: "deployment_logs" */
  updateDeploymentLogs?: Maybe<DeploymentLogs_Mutation_Response>;
  /** update data of the table: "deployments" */
  updateDeployments?: Maybe<Deployments_Mutation_Response>;
  /** update single row of the table: "feature_flags" */
  updateFeatureFlag?: Maybe<FeatureFlags>;
  /** update data of the table: "feature_flags" */
  updateFeatureFlags?: Maybe<FeatureFlags_Mutation_Response>;
  /** update data of the table: "feedback" */
  updateFeedback?: Maybe<Feedback_Mutation_Response>;
  /** update single row of the table: "feedback" */
  updateFeedbackOne?: Maybe<Feedback>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "github_app_installations" */
  updateGithubAppInstallation?: Maybe<GithubAppInstallations>;
  /** update data of the table: "github_app_installations" */
  updateGithubAppInstallations?: Maybe<GithubAppInstallations_Mutation_Response>;
  /** update data of the table: "github_repositories" */
  updateGithubRepositories?: Maybe<GithubRepositories_Mutation_Response>;
  /** update single row of the table: "github_repositories" */
  updateGithubRepository?: Maybe<GithubRepositories>;
  /** update single row of the table: "payment_methods" */
  updatePaymentMethod?: Maybe<PaymentMethods>;
  /** update data of the table: "payment_methods" */
  updatePaymentMethods?: Maybe<PaymentMethods_Mutation_Response>;
  /** update single row of the table: "plans" */
  updatePlan?: Maybe<Plans>;
  /** update data of the table: "plans" */
  updatePlans?: Maybe<Plans_Mutation_Response>;
  updateSecret: ConfigEnvironmentVariable;
  updateSystemConfig: ConfigSystemConfig;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "workspaces" */
  updateWorkspace?: Maybe<Workspaces>;
  /** update single row of the table: "workspace_members" */
  updateWorkspaceMember?: Maybe<WorkspaceMembers>;
  /** update single row of the table: "workspace_member_invites" */
  updateWorkspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** update data of the table: "workspace_member_invites" */
  updateWorkspaceMemberInvites?: Maybe<WorkspaceMemberInvites_Mutation_Response>;
  /** update data of the table: "workspace_members" */
  updateWorkspaceMembers?: Maybe<WorkspaceMembers_Mutation_Response>;
  /** update data of the table: "workspaces" */
  updateWorkspaces?: Maybe<Workspaces_Mutation_Response>;
  /** update multiples rows of table: "app_state_history" */
  update_appStateHistory_many?: Maybe<Array<Maybe<AppStateHistory_Mutation_Response>>>;
  /** update multiples rows of table: "app_states" */
  update_appStates_many?: Maybe<Array<Maybe<AppStates_Mutation_Response>>>;
  /** update multiples rows of table: "apps" */
  update_apps_many?: Maybe<Array<Maybe<Apps_Mutation_Response>>>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update data of the table: "auth.migrations" */
  update_auth_migrations?: Maybe<Auth_Migrations_Mutation_Response>;
  /** update single row of the table: "auth.migrations" */
  update_auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** update multiples rows of table: "auth.migrations" */
  update_auth_migrations_many?: Maybe<Array<Maybe<Auth_Migrations_Mutation_Response>>>;
  /** update multiples rows of table: "backups" */
  update_backups_many?: Maybe<Array<Maybe<Backups_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update multiples rows of table: "cli_tokens" */
  update_cliTokens_many?: Maybe<Array<Maybe<CliTokens_Mutation_Response>>>;
  /** update data of the table: "continents" */
  update_continents?: Maybe<Continents_Mutation_Response>;
  /** update single row of the table: "continents" */
  update_continents_by_pk?: Maybe<Continents>;
  /** update multiples rows of table: "continents" */
  update_continents_many?: Maybe<Array<Maybe<Continents_Mutation_Response>>>;
  /** update data of the table: "countries" */
  update_countries?: Maybe<Countries_Mutation_Response>;
  /** update single row of the table: "countries" */
  update_countries_by_pk?: Maybe<Countries>;
  /** update multiples rows of table: "countries" */
  update_countries_many?: Maybe<Array<Maybe<Countries_Mutation_Response>>>;
  /** update multiples rows of table: "deployment_logs" */
  update_deploymentLogs_many?: Maybe<Array<Maybe<DeploymentLogs_Mutation_Response>>>;
  /** update multiples rows of table: "deployments" */
  update_deployments_many?: Maybe<Array<Maybe<Deployments_Mutation_Response>>>;
  /** update multiples rows of table: "feature_flags" */
  update_featureFlags_many?: Maybe<Array<Maybe<FeatureFlags_Mutation_Response>>>;
  /** update multiples rows of table: "feedback" */
  update_feedback_many?: Maybe<Array<Maybe<Feedback_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update multiples rows of table: "github_app_installations" */
  update_githubAppInstallations_many?: Maybe<Array<Maybe<GithubAppInstallations_Mutation_Response>>>;
  /** update multiples rows of table: "github_repositories" */
  update_githubRepositories_many?: Maybe<Array<Maybe<GithubRepositories_Mutation_Response>>>;
  /** update multiples rows of table: "payment_methods" */
  update_paymentMethods_many?: Maybe<Array<Maybe<PaymentMethods_Mutation_Response>>>;
  /** update multiples rows of table: "plans" */
  update_plans_many?: Maybe<Array<Maybe<Plans_Mutation_Response>>>;
  /** update data of the table: "regions" */
  update_regions?: Maybe<Regions_Mutation_Response>;
  /** update single row of the table: "regions" */
  update_regions_by_pk?: Maybe<Regions>;
  /** update multiples rows of table: "regions" */
  update_regions_many?: Maybe<Array<Maybe<Regions_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "workspace_member_invites" */
  update_workspaceMemberInvites_many?: Maybe<Array<Maybe<WorkspaceMemberInvites_Mutation_Response>>>;
  /** update multiples rows of table: "workspace_members" */
  update_workspaceMembers_many?: Maybe<Array<Maybe<WorkspaceMembers_Mutation_Response>>>;
  /** update multiples rows of table: "workspaces" */
  update_workspaces_many?: Maybe<Array<Maybe<Workspaces_Mutation_Response>>>;
  /** delete single row from the table: "billing.dedicated_compute" */
  zzzDONOTUSE_delete_billing_dedicated_compute?: Maybe<Billing_Dedicated_Compute>;
  /** delete single row from the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_delete_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** delete data from the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_delete_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** delete data from the table: "billing.dedicated_compute" */
  zzzDONOTUSE_delete_billing_dedicated_computes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** delete single row from the table: "billing.subscriptions" */
  zzzDONOTUSE_delete_billing_subscription?: Maybe<Billing_Subscriptions>;
  /** delete data from the table: "billing.subscriptions" */
  zzzDONOTUSE_delete_billing_subscriptions?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "billing.dedicated_compute" */
  zzzDONOTUSE_insert_billing_dedicated_compute?: Maybe<Billing_Dedicated_Compute>;
  /** insert a single row into the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_insert_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** insert data into the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_insert_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** insert data into the table: "billing.dedicated_compute" */
  zzzDONOTUSE_insert_billing_dedicated_computes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** insert a single row into the table: "billing.subscriptions" */
  zzzDONOTUSE_insert_billing_subscription?: Maybe<Billing_Subscriptions>;
  /** insert data into the table: "billing.subscriptions" */
  zzzDONOTUSE_insert_billing_subscriptions?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** update single row of the table: "billing.dedicated_compute" */
  zzzDONOTUSE_update_billing_dedicated_compute?: Maybe<Billing_Dedicated_Compute>;
  /** update single row of the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_billing_dedicated_compute_report?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** update data of the table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_billing_dedicated_compute_reports?: Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>;
  /** update data of the table: "billing.dedicated_compute" */
  zzzDONOTUSE_update_billing_dedicated_computes?: Maybe<Billing_Dedicated_Compute_Mutation_Response>;
  /** update single row of the table: "billing.subscriptions" */
  zzzDONOTUSE_update_billing_subscription?: Maybe<Billing_Subscriptions>;
  /** update data of the table: "billing.subscriptions" */
  zzzDONOTUSE_update_billing_subscriptions?: Maybe<Billing_Subscriptions_Mutation_Response>;
  /** update multiples rows of table: "billing.dedicated_compute" */
  zzzDONOTUSE_update_many_billing_dedicated_compute?: Maybe<Array<Maybe<Billing_Dedicated_Compute_Mutation_Response>>>;
  /** update multiples rows of table: "billing.dedicated_compute_reports" */
  zzzDONOTUSE_update_many_billing_dedicated_compute_reports?: Maybe<Array<Maybe<Billing_Dedicated_Compute_Reports_Mutation_Response>>>;
  /** update multiples rows of table: "billing.subscriptions" */
  zzzDONOTUSE_update_many_billing_subscriptions?: Maybe<Array<Maybe<Billing_Subscriptions_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootBackupAllApplicationsDatabaseArgs = {
  expireInDays?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootBackupApplicationDatabaseArgs = {
  appID: Scalars['String'];
  expireInDays?: InputMaybe<Scalars['Int']>;
};


/** mutation root */
export type Mutation_RootBillingFinishSubscriptionArgs = {
  appID: Scalars['uuid'];
  appName: Scalars['String'];
  subdomain: Scalars['String'];
  subscriptionID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootBillingReportDedicatedComputeArgs = {
  reportTime: Scalars['Timestamp'];
};


/** mutation root */
export type Mutation_RootBillingUpdateAndReportDedicatedComputeReportsArgs = {
  reportTime: Scalars['Timestamp'];
};


/** mutation root */
export type Mutation_RootBillingUpdateDedicatedComputeArgs = {
  appID: Scalars['uuid'];
  totalMillicores: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootBillingUpdateDedicatedComputeReportsArgs = {
  reportTime: Scalars['Timestamp'];
};


/** mutation root */
export type Mutation_RootDeleteAppArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAppStateArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteAppStateHistoriesArgs = {
  where: AppStateHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAppStatesArgs = {
  where: AppStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAppsArgs = {
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBackupArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteBackupsArgs = {
  where: Backups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteCliTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteCliTokensArgs = {
  where: CliTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteConfigArgs = {
  appID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentLogArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteDeploymentLogsArgs = {
  where: DeploymentLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteDeploymentsArgs = {
  where: Deployments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFeatureFlagArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFeatureFlagsArgs = {
  where: FeatureFlags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFeedbackArgs = {
  where: Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFeedbackOneArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteGithubAppInstallationsArgs = {
  where: GithubAppInstallations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubRepositoriesArgs = {
  where: GithubRepositories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePaymentMethodArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePaymentMethodsArgs = {
  where: PaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeletePlanArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeletePlansArgs = {
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteSecretArgs = {
  appID: Scalars['uuid'];
  key: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMemberInvitesArgs = {
  where: WorkspaceMemberInvites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspaceMembersArgs = {
  where: WorkspaceMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteWorkspacesArgs = {
  where: Workspaces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_MigrationsArgs = {
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ContinentsArgs = {
  where: Continents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Continents_By_PkArgs = {
  code: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Countries_By_PkArgs = {
  code: Scalars['bpchar'];
};


/** mutation root */
export type Mutation_RootDelete_RegionsArgs = {
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Regions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertAppArgs = {
  object: Apps_Insert_Input;
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateArgs = {
  object: AppStates_Insert_Input;
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateHistoriesArgs = {
  objects: Array<AppStateHistory_Insert_Input>;
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStateHistoryArgs = {
  object: AppStateHistory_Insert_Input;
  on_conflict?: InputMaybe<AppStateHistory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppStatesArgs = {
  objects: Array<AppStates_Insert_Input>;
  on_conflict?: InputMaybe<AppStates_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAppsArgs = {
  objects: Array<Apps_Insert_Input>;
  on_conflict?: InputMaybe<Apps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBackupArgs = {
  object: Backups_Insert_Input;
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBackupsArgs = {
  objects: Array<Backups_Insert_Input>;
  on_conflict?: InputMaybe<Backups_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCliTokenArgs = {
  object: CliTokens_Insert_Input;
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertCliTokensArgs = {
  objects: Array<CliTokens_Insert_Input>;
  on_conflict?: InputMaybe<CliTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigInsertInput;
  secrets?: InputMaybe<Array<ConfigEnvironmentVariableInsertInput>>;
  systemConfig: ConfigSystemConfigInsertInput;
};


/** mutation root */
export type Mutation_RootInsertDeploymentArgs = {
  object: Deployments_Insert_Input;
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentLogArgs = {
  object: DeploymentLogs_Insert_Input;
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentLogsArgs = {
  objects: Array<DeploymentLogs_Insert_Input>;
  on_conflict?: InputMaybe<DeploymentLogs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertDeploymentsArgs = {
  objects: Array<Deployments_Insert_Input>;
  on_conflict?: InputMaybe<Deployments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeatureFlagArgs = {
  object: FeatureFlags_Insert_Input;
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeatureFlagsArgs = {
  objects: Array<FeatureFlags_Insert_Input>;
  on_conflict?: InputMaybe<FeatureFlags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeedbackArgs = {
  objects: Array<Feedback_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFeedbackOneArgs = {
  object: Feedback_Insert_Input;
  on_conflict?: InputMaybe<Feedback_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubAppInstallationArgs = {
  object: GithubAppInstallations_Insert_Input;
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubAppInstallationsArgs = {
  objects: Array<GithubAppInstallations_Insert_Input>;
  on_conflict?: InputMaybe<GithubAppInstallations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubRepositoriesArgs = {
  objects: Array<GithubRepositories_Insert_Input>;
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertGithubRepositoryArgs = {
  object: GithubRepositories_Insert_Input;
  on_conflict?: InputMaybe<GithubRepositories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentMethodArgs = {
  object: PaymentMethods_Insert_Input;
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPaymentMethodsArgs = {
  objects: Array<PaymentMethods_Insert_Input>;
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPlanArgs = {
  object: Plans_Insert_Input;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertPlansArgs = {
  objects: Array<Plans_Insert_Input>;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertSecretArgs = {
  appID: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceArgs = {
  object: Workspaces_Insert_Input;
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberArgs = {
  object: WorkspaceMembers_Insert_Input;
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberInviteArgs = {
  object: WorkspaceMemberInvites_Insert_Input;
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMemberInvitesArgs = {
  objects: Array<WorkspaceMemberInvites_Insert_Input>;
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspaceMembersArgs = {
  objects: Array<WorkspaceMembers_Insert_Input>;
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertWorkspacesArgs = {
  objects: Array<Workspaces_Insert_Input>;
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_MigrationsArgs = {
  objects: Array<Auth_Migrations_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Migrations_OneArgs = {
  object: Auth_Migrations_Insert_Input;
  on_conflict?: InputMaybe<Auth_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContinentsArgs = {
  objects: Array<Continents_Insert_Input>;
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Continents_OneArgs = {
  object: Continents_Insert_Input;
  on_conflict?: InputMaybe<Continents_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: InputMaybe<Countries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RegionsArgs = {
  objects: Array<Regions_Insert_Input>;
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Regions_OneArgs = {
  object: Regions_Insert_Input;
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootMigrateRdsToPostgresArgs = {
  appID: Scalars['String'];
  backupID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootReplaceConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigInsertInput;
};


/** mutation root */
export type Mutation_RootResetPostgresPasswordArgs = {
  appID: Scalars['String'];
  newPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRestoreApplicationDatabaseArgs = {
  appID: Scalars['String'];
  backupID: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdateAppArgs = {
  _append?: InputMaybe<Apps_Append_Input>;
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  _inc?: InputMaybe<Apps_Inc_Input>;
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  _set?: InputMaybe<Apps_Set_Input>;
  pk_columns: Apps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStateArgs = {
  _inc?: InputMaybe<AppStates_Inc_Input>;
  _set?: InputMaybe<AppStates_Set_Input>;
  pk_columns: AppStates_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStateHistoriesArgs = {
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  where: AppStateHistory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAppStateHistoryArgs = {
  _inc?: InputMaybe<AppStateHistory_Inc_Input>;
  _set?: InputMaybe<AppStateHistory_Set_Input>;
  pk_columns: AppStateHistory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAppStatesArgs = {
  _inc?: InputMaybe<AppStates_Inc_Input>;
  _set?: InputMaybe<AppStates_Set_Input>;
  where: AppStates_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAppsArgs = {
  _append?: InputMaybe<Apps_Append_Input>;
  _delete_at_path?: InputMaybe<Apps_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Apps_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Apps_Delete_Key_Input>;
  _inc?: InputMaybe<Apps_Inc_Input>;
  _prepend?: InputMaybe<Apps_Prepend_Input>;
  _set?: InputMaybe<Apps_Set_Input>;
  where: Apps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBackupArgs = {
  _inc?: InputMaybe<Backups_Inc_Input>;
  _set?: InputMaybe<Backups_Set_Input>;
  pk_columns: Backups_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBackupsArgs = {
  _inc?: InputMaybe<Backups_Inc_Input>;
  _set?: InputMaybe<Backups_Set_Input>;
  where: Backups_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateCliTokenArgs = {
  _set?: InputMaybe<CliTokens_Set_Input>;
  pk_columns: CliTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateCliTokensArgs = {
  _set?: InputMaybe<CliTokens_Set_Input>;
  where: CliTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateConfigArgs = {
  appID: Scalars['uuid'];
  config: ConfigConfigUpdateInput;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentArgs = {
  _set?: InputMaybe<Deployments_Set_Input>;
  pk_columns: Deployments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentLogArgs = {
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  pk_columns: DeploymentLogs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentLogsArgs = {
  _set?: InputMaybe<DeploymentLogs_Set_Input>;
  where: DeploymentLogs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateDeploymentsArgs = {
  _set?: InputMaybe<Deployments_Set_Input>;
  where: Deployments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFeatureFlagArgs = {
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  pk_columns: FeatureFlags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFeatureFlagsArgs = {
  _set?: InputMaybe<FeatureFlags_Set_Input>;
  where: FeatureFlags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFeedbackArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  where: Feedback_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFeedbackOneArgs = {
  _inc?: InputMaybe<Feedback_Inc_Input>;
  _set?: InputMaybe<Feedback_Set_Input>;
  pk_columns: Feedback_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubAppInstallationArgs = {
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  pk_columns: GithubAppInstallations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateGithubAppInstallationsArgs = {
  _append?: InputMaybe<GithubAppInstallations_Append_Input>;
  _delete_at_path?: InputMaybe<GithubAppInstallations_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<GithubAppInstallations_Delete_Elem_Input>;
  _delete_key?: InputMaybe<GithubAppInstallations_Delete_Key_Input>;
  _inc?: InputMaybe<GithubAppInstallations_Inc_Input>;
  _prepend?: InputMaybe<GithubAppInstallations_Prepend_Input>;
  _set?: InputMaybe<GithubAppInstallations_Set_Input>;
  where: GithubAppInstallations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubRepositoriesArgs = {
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  where: GithubRepositories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateGithubRepositoryArgs = {
  _set?: InputMaybe<GithubRepositories_Set_Input>;
  pk_columns: GithubRepositories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePaymentMethodArgs = {
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  pk_columns: PaymentMethods_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePaymentMethodsArgs = {
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  where: PaymentMethods_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdatePlanArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  pk_columns: Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdatePlansArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateSecretArgs = {
  appID: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
};


/** mutation root */
export type Mutation_RootUpdateSystemConfigArgs = {
  appID: Scalars['uuid'];
  systemConfig: ConfigSystemConfigUpdateInput;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceArgs = {
  _set?: InputMaybe<Workspaces_Set_Input>;
  pk_columns: Workspaces_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberArgs = {
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  pk_columns: WorkspaceMembers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberInviteArgs = {
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  pk_columns: WorkspaceMemberInvites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMemberInvitesArgs = {
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  where: WorkspaceMemberInvites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspaceMembersArgs = {
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  where: WorkspaceMembers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateWorkspacesArgs = {
  _set?: InputMaybe<Workspaces_Set_Input>;
  where: Workspaces_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AppStateHistory_ManyArgs = {
  updates: Array<AppStateHistory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AppStates_ManyArgs = {
  updates: Array<AppStates_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Apps_ManyArgs = {
  updates: Array<Apps_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_MigrationsArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  where: Auth_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_By_PkArgs = {
  _inc?: InputMaybe<Auth_Migrations_Inc_Input>;
  _set?: InputMaybe<Auth_Migrations_Set_Input>;
  pk_columns: Auth_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Migrations_ManyArgs = {
  updates: Array<Auth_Migrations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Backups_ManyArgs = {
  updates: Array<Backups_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CliTokens_ManyArgs = {
  updates: Array<CliTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContinentsArgs = {
  _set?: InputMaybe<Continents_Set_Input>;
  where: Continents_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Continents_By_PkArgs = {
  _set?: InputMaybe<Continents_Set_Input>;
  pk_columns: Continents_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Continents_ManyArgs = {
  updates: Array<Continents_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CountriesArgs = {
  _inc?: InputMaybe<Countries_Inc_Input>;
  _set?: InputMaybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _inc?: InputMaybe<Countries_Inc_Input>;
  _set?: InputMaybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Countries_ManyArgs = {
  updates: Array<Countries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeploymentLogs_ManyArgs = {
  updates: Array<DeploymentLogs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Deployments_ManyArgs = {
  updates: Array<Deployments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_FeatureFlags_ManyArgs = {
  updates: Array<FeatureFlags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_ManyArgs = {
  updates: Array<Feedback_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GithubAppInstallations_ManyArgs = {
  updates: Array<GithubAppInstallations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GithubRepositories_ManyArgs = {
  updates: Array<GithubRepositories_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentMethods_ManyArgs = {
  updates: Array<PaymentMethods_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Plans_ManyArgs = {
  updates: Array<Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RegionsArgs = {
  _set?: InputMaybe<Regions_Set_Input>;
  where: Regions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_By_PkArgs = {
  _set?: InputMaybe<Regions_Set_Input>;
  pk_columns: Regions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Regions_ManyArgs = {
  updates: Array<Regions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceMemberInvites_ManyArgs = {
  updates: Array<WorkspaceMemberInvites_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkspaceMembers_ManyArgs = {
  updates: Array<WorkspaceMembers_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workspaces_ManyArgs = {
  updates: Array<Workspaces_Updates>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_ComputeArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_Compute_ReportArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_Compute_ReportsArgs = {
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_Dedicated_ComputesArgs = {
  where: Billing_Dedicated_Compute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_SubscriptionArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Delete_Billing_SubscriptionsArgs = {
  where: Billing_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_ComputeArgs = {
  object: Billing_Dedicated_Compute_Insert_Input;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_Compute_ReportArgs = {
  object: Billing_Dedicated_Compute_Reports_Insert_Input;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_Compute_ReportsArgs = {
  objects: Array<Billing_Dedicated_Compute_Reports_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_Reports_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_Dedicated_ComputesArgs = {
  objects: Array<Billing_Dedicated_Compute_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Dedicated_Compute_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_SubscriptionArgs = {
  object: Billing_Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Insert_Billing_SubscriptionsArgs = {
  objects: Array<Billing_Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<Billing_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_ComputeArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  pk_columns: Billing_Dedicated_Compute_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_Compute_ReportArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  pk_columns: Billing_Dedicated_Compute_Reports_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_Compute_ReportsArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Reports_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Reports_Set_Input>;
  where: Billing_Dedicated_Compute_Reports_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_Dedicated_ComputesArgs = {
  _inc?: InputMaybe<Billing_Dedicated_Compute_Inc_Input>;
  _set?: InputMaybe<Billing_Dedicated_Compute_Set_Input>;
  where: Billing_Dedicated_Compute_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_SubscriptionArgs = {
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  pk_columns: Billing_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Billing_SubscriptionsArgs = {
  _set?: InputMaybe<Billing_Subscriptions_Set_Input>;
  where: Billing_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Many_Billing_Dedicated_ComputeArgs = {
  updates: Array<Billing_Dedicated_Compute_Updates>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Many_Billing_Dedicated_Compute_ReportsArgs = {
  updates: Array<Billing_Dedicated_Compute_Reports_Updates>;
};


/** mutation root */
export type Mutation_RootZzzDonotuse_Update_Many_Billing_SubscriptionsArgs = {
  updates: Array<Billing_Subscriptions_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment_methods" */
export type PaymentMethods = {
  __typename?: 'paymentMethods';
  addedByUserId: Scalars['uuid'];
  cardBrand: Scalars['String'];
  cardExpMonth: Scalars['Int'];
  cardExpYear: Scalars['Int'];
  cardLast4: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isDefault: Scalars['Boolean'];
  stripePaymentMethodId: Scalars['String'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "payment_methods" */
export type PaymentMethods_Aggregate = {
  __typename?: 'paymentMethods_aggregate';
  aggregate?: Maybe<PaymentMethods_Aggregate_Fields>;
  nodes: Array<PaymentMethods>;
};

export type PaymentMethods_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp_Count>;
};

export type PaymentMethods_Aggregate_Bool_Exp_Bool_And = {
  arguments: PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type PaymentMethods_Aggregate_Bool_Exp_Bool_Or = {
  arguments: PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type PaymentMethods_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<PaymentMethods_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "payment_methods" */
export type PaymentMethods_Aggregate_Fields = {
  __typename?: 'paymentMethods_aggregate_fields';
  avg?: Maybe<PaymentMethods_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<PaymentMethods_Max_Fields>;
  min?: Maybe<PaymentMethods_Min_Fields>;
  stddev?: Maybe<PaymentMethods_Stddev_Fields>;
  stddev_pop?: Maybe<PaymentMethods_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<PaymentMethods_Stddev_Samp_Fields>;
  sum?: Maybe<PaymentMethods_Sum_Fields>;
  var_pop?: Maybe<PaymentMethods_Var_Pop_Fields>;
  var_samp?: Maybe<PaymentMethods_Var_Samp_Fields>;
  variance?: Maybe<PaymentMethods_Variance_Fields>;
};


/** aggregate fields of "payment_methods" */
export type PaymentMethods_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "payment_methods" */
export type PaymentMethods_Aggregate_Order_By = {
  avg?: InputMaybe<PaymentMethods_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<PaymentMethods_Max_Order_By>;
  min?: InputMaybe<PaymentMethods_Min_Order_By>;
  stddev?: InputMaybe<PaymentMethods_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PaymentMethods_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PaymentMethods_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PaymentMethods_Sum_Order_By>;
  var_pop?: InputMaybe<PaymentMethods_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PaymentMethods_Var_Samp_Order_By>;
  variance?: InputMaybe<PaymentMethods_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "payment_methods" */
export type PaymentMethods_Arr_Rel_Insert_Input = {
  data: Array<PaymentMethods_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};

/** aggregate avg on columns */
export type PaymentMethods_Avg_Fields = {
  __typename?: 'paymentMethods_avg_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "payment_methods" */
export type PaymentMethods_Avg_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "payment_methods". All fields are combined with a logical 'AND'. */
export type PaymentMethods_Bool_Exp = {
  _and?: InputMaybe<Array<PaymentMethods_Bool_Exp>>;
  _not?: InputMaybe<PaymentMethods_Bool_Exp>;
  _or?: InputMaybe<Array<PaymentMethods_Bool_Exp>>;
  addedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  cardBrand?: InputMaybe<String_Comparison_Exp>;
  cardExpMonth?: InputMaybe<Int_Comparison_Exp>;
  cardExpYear?: InputMaybe<Int_Comparison_Exp>;
  cardLast4?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  stripePaymentMethodId?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_methods" */
export enum PaymentMethods_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentMethodsPkey = 'payment_methods_pkey'
}

/** input type for incrementing numeric columns in table "payment_methods" */
export type PaymentMethods_Inc_Input = {
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "payment_methods" */
export type PaymentMethods_Insert_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type PaymentMethods_Max_Fields = {
  __typename?: 'paymentMethods_max_fields';
  addedByUserId?: Maybe<Scalars['uuid']>;
  cardBrand?: Maybe<Scalars['String']>;
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
  cardLast4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  stripePaymentMethodId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "payment_methods" */
export type PaymentMethods_Max_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type PaymentMethods_Min_Fields = {
  __typename?: 'paymentMethods_min_fields';
  addedByUserId?: Maybe<Scalars['uuid']>;
  cardBrand?: Maybe<Scalars['String']>;
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
  cardLast4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  stripePaymentMethodId?: Maybe<Scalars['String']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "payment_methods" */
export type PaymentMethods_Min_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "payment_methods" */
export type PaymentMethods_Mutation_Response = {
  __typename?: 'paymentMethods_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<PaymentMethods>;
};

/** input type for inserting object relation for remote table "payment_methods" */
export type PaymentMethods_Obj_Rel_Insert_Input = {
  data: PaymentMethods_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<PaymentMethods_On_Conflict>;
};

/** on_conflict condition type for table "payment_methods" */
export type PaymentMethods_On_Conflict = {
  constraint: PaymentMethods_Constraint;
  update_columns?: Array<PaymentMethods_Update_Column>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_methods". */
export type PaymentMethods_Order_By = {
  addedByUserId?: InputMaybe<Order_By>;
  cardBrand?: InputMaybe<Order_By>;
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
  cardLast4?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  stripePaymentMethodId?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_methods */
export type PaymentMethods_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "payment_methods" */
export enum PaymentMethods_Select_Column {
  /** column name */
  AddedByUserId = 'addedByUserId',
  /** column name */
  CardBrand = 'cardBrand',
  /** column name */
  CardExpMonth = 'cardExpMonth',
  /** column name */
  CardExpYear = 'cardExpYear',
  /** column name */
  CardLast4 = 'cardLast4',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  StripePaymentMethodId = 'stripePaymentMethodId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "paymentMethods_aggregate_bool_exp_bool_and_arguments_columns" columns of table "payment_methods" */
export enum PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDefault = 'isDefault'
}

/** select "paymentMethods_aggregate_bool_exp_bool_or_arguments_columns" columns of table "payment_methods" */
export enum PaymentMethods_Select_Column_PaymentMethods_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDefault = 'isDefault'
}

/** input type for updating data in table "payment_methods" */
export type PaymentMethods_Set_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type PaymentMethods_Stddev_Fields = {
  __typename?: 'paymentMethods_stddev_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type PaymentMethods_Stddev_Pop_Fields = {
  __typename?: 'paymentMethods_stddev_pop_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Pop_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type PaymentMethods_Stddev_Samp_Fields = {
  __typename?: 'paymentMethods_stddev_samp_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "payment_methods" */
export type PaymentMethods_Stddev_Samp_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "paymentMethods" */
export type PaymentMethods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: PaymentMethods_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type PaymentMethods_Stream_Cursor_Value_Input = {
  addedByUserId?: InputMaybe<Scalars['uuid']>;
  cardBrand?: InputMaybe<Scalars['String']>;
  cardExpMonth?: InputMaybe<Scalars['Int']>;
  cardExpYear?: InputMaybe<Scalars['Int']>;
  cardLast4?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  stripePaymentMethodId?: InputMaybe<Scalars['String']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type PaymentMethods_Sum_Fields = {
  __typename?: 'paymentMethods_sum_fields';
  cardExpMonth?: Maybe<Scalars['Int']>;
  cardExpYear?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "payment_methods" */
export type PaymentMethods_Sum_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** update columns of table "payment_methods" */
export enum PaymentMethods_Update_Column {
  /** column name */
  AddedByUserId = 'addedByUserId',
  /** column name */
  CardBrand = 'cardBrand',
  /** column name */
  CardExpMonth = 'cardExpMonth',
  /** column name */
  CardExpYear = 'cardExpYear',
  /** column name */
  CardLast4 = 'cardLast4',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  StripePaymentMethodId = 'stripePaymentMethodId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type PaymentMethods_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<PaymentMethods_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PaymentMethods_Set_Input>;
  where: PaymentMethods_Bool_Exp;
};

/** aggregate var_pop on columns */
export type PaymentMethods_Var_Pop_Fields = {
  __typename?: 'paymentMethods_var_pop_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "payment_methods" */
export type PaymentMethods_Var_Pop_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type PaymentMethods_Var_Samp_Fields = {
  __typename?: 'paymentMethods_var_samp_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "payment_methods" */
export type PaymentMethods_Var_Samp_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type PaymentMethods_Variance_Fields = {
  __typename?: 'paymentMethods_variance_fields';
  cardExpMonth?: Maybe<Scalars['Float']>;
  cardExpYear?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "payment_methods" */
export type PaymentMethods_Variance_Order_By = {
  cardExpMonth?: InputMaybe<Order_By>;
  cardExpYear?: InputMaybe<Order_By>;
};

/** columns and relationships of "plans" */
export type Plans = {
  __typename?: 'plans';
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  createdAt: Scalars['timestamptz'];
  featureBackupEnabled: Scalars['Boolean'];
  featureCustomDomainsEnabled: Scalars['Boolean'];
  featureCustomEmailTemplatesEnabled: Scalars['Boolean'];
  featureCustomResources: Scalars['Boolean'];
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates: Scalars['Boolean'];
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout: Scalars['Int'];
  featureMaxDbSize: Scalars['Int'];
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment: Scalars['Int'];
  id: Scalars['uuid'];
  isDefault: Scalars['Boolean'];
  isFree: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  name: Scalars['String'];
  price: Scalars['Int'];
  sort: Scalars['Int'];
  stripePriceId: Scalars['String'];
  upatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "plans" */
export type PlansAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "plans" */
export type PlansApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "plans" */
export type Plans_Aggregate = {
  __typename?: 'plans_aggregate';
  aggregate?: Maybe<Plans_Aggregate_Fields>;
  nodes: Array<Plans>;
};

/** aggregate fields of "plans" */
export type Plans_Aggregate_Fields = {
  __typename?: 'plans_aggregate_fields';
  avg?: Maybe<Plans_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plans_Max_Fields>;
  min?: Maybe<Plans_Min_Fields>;
  stddev?: Maybe<Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Plans_Sum_Fields>;
  var_pop?: Maybe<Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Plans_Var_Samp_Fields>;
  variance?: Maybe<Plans_Variance_Fields>;
};


/** aggregate fields of "plans" */
export type Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Plans_Avg_Fields = {
  __typename?: 'plans_avg_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "plans". All fields are combined with a logical 'AND'. */
export type Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Plans_Bool_Exp>>;
  _not?: InputMaybe<Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Plans_Bool_Exp>>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  featureBackupEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureCustomDomainsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  featureCustomResources?: InputMaybe<Boolean_Comparison_Exp>;
  featureDeployEmailTemplates?: InputMaybe<Boolean_Comparison_Exp>;
  featureFunctionExecutionTimeout?: InputMaybe<Int_Comparison_Exp>;
  featureMaxDbSize?: InputMaybe<Int_Comparison_Exp>;
  featureMaxFilesSize?: InputMaybe<Int_Comparison_Exp>;
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isDefault?: InputMaybe<Boolean_Comparison_Exp>;
  isFree?: InputMaybe<Boolean_Comparison_Exp>;
  isPublic?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  sort?: InputMaybe<Int_Comparison_Exp>;
  stripePriceId?: InputMaybe<String_Comparison_Exp>;
  upatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "plans" */
export enum Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlansPkey = 'plans_pkey'
}

/** input type for incrementing numeric columns in table "plans" */
export type Plans_Inc_Input = {
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "plans" */
export type Plans_Insert_Input = {
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Plans_Max_Fields = {
  __typename?: 'plans_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  stripePriceId?: Maybe<Scalars['String']>;
  upatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Plans_Min_Fields = {
  __typename?: 'plans_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
  stripePriceId?: Maybe<Scalars['String']>;
  upatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "plans" */
export type Plans_Mutation_Response = {
  __typename?: 'plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plans>;
};

/** input type for inserting object relation for remote table "plans" */
export type Plans_Obj_Rel_Insert_Input = {
  data: Plans_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};

/** on_conflict condition type for table "plans" */
export type Plans_On_Conflict = {
  constraint: Plans_Constraint;
  update_columns?: Array<Plans_Update_Column>;
  where?: InputMaybe<Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "plans". */
export type Plans_Order_By = {
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  featureBackupEnabled?: InputMaybe<Order_By>;
  featureCustomDomainsEnabled?: InputMaybe<Order_By>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Order_By>;
  featureCustomResources?: InputMaybe<Order_By>;
  featureDeployEmailTemplates?: InputMaybe<Order_By>;
  featureFunctionExecutionTimeout?: InputMaybe<Order_By>;
  featureMaxDbSize?: InputMaybe<Order_By>;
  featureMaxFilesSize?: InputMaybe<Order_By>;
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDefault?: InputMaybe<Order_By>;
  isFree?: InputMaybe<Order_By>;
  isPublic?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  stripePriceId?: InputMaybe<Order_By>;
  upatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: plans */
export type Plans_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FeatureBackupEnabled = 'featureBackupEnabled',
  /** column name */
  FeatureCustomDomainsEnabled = 'featureCustomDomainsEnabled',
  /** column name */
  FeatureCustomEmailTemplatesEnabled = 'featureCustomEmailTemplatesEnabled',
  /** column name */
  FeatureCustomResources = 'featureCustomResources',
  /** column name */
  FeatureDeployEmailTemplates = 'featureDeployEmailTemplates',
  /** column name */
  FeatureFunctionExecutionTimeout = 'featureFunctionExecutionTimeout',
  /** column name */
  FeatureMaxDbSize = 'featureMaxDbSize',
  /** column name */
  FeatureMaxFilesSize = 'featureMaxFilesSize',
  /** column name */
  FeatureMaxNumberOfFunctionsPerDeployment = 'featureMaxNumberOfFunctionsPerDeployment',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sort = 'sort',
  /** column name */
  StripePriceId = 'stripePriceId',
  /** column name */
  UpatedAt = 'upatedAt'
}

/** input type for updating data in table "plans" */
export type Plans_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Plans_Stddev_Fields = {
  __typename?: 'plans_stddev_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Plans_Stddev_Pop_Fields = {
  __typename?: 'plans_stddev_pop_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Plans_Stddev_Samp_Fields = {
  __typename?: 'plans_stddev_samp_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "plans" */
export type Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plans_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  featureBackupEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomDomainsEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomEmailTemplatesEnabled?: InputMaybe<Scalars['Boolean']>;
  featureCustomResources?: InputMaybe<Scalars['Boolean']>;
  /** Weather or not to deploy email templates for git deployments */
  featureDeployEmailTemplates?: InputMaybe<Scalars['Boolean']>;
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: InputMaybe<Scalars['Int']>;
  featureMaxDbSize?: InputMaybe<Scalars['Int']>;
  featureMaxFilesSize?: InputMaybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  isDefault?: InputMaybe<Scalars['Boolean']>;
  isFree?: InputMaybe<Scalars['Boolean']>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['Int']>;
  stripePriceId?: InputMaybe<Scalars['String']>;
  upatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Plans_Sum_Fields = {
  __typename?: 'plans_sum_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Int']>;
  featureMaxDbSize?: Maybe<Scalars['Int']>;
  featureMaxFilesSize?: Maybe<Scalars['Int']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['Int']>;
};

/** update columns of table "plans" */
export enum Plans_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FeatureBackupEnabled = 'featureBackupEnabled',
  /** column name */
  FeatureCustomDomainsEnabled = 'featureCustomDomainsEnabled',
  /** column name */
  FeatureCustomEmailTemplatesEnabled = 'featureCustomEmailTemplatesEnabled',
  /** column name */
  FeatureCustomResources = 'featureCustomResources',
  /** column name */
  FeatureDeployEmailTemplates = 'featureDeployEmailTemplates',
  /** column name */
  FeatureFunctionExecutionTimeout = 'featureFunctionExecutionTimeout',
  /** column name */
  FeatureMaxDbSize = 'featureMaxDbSize',
  /** column name */
  FeatureMaxFilesSize = 'featureMaxFilesSize',
  /** column name */
  FeatureMaxNumberOfFunctionsPerDeployment = 'featureMaxNumberOfFunctionsPerDeployment',
  /** column name */
  Id = 'id',
  /** column name */
  IsDefault = 'isDefault',
  /** column name */
  IsFree = 'isFree',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Sort = 'sort',
  /** column name */
  StripePriceId = 'stripePriceId',
  /** column name */
  UpatedAt = 'upatedAt'
}

export type Plans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plans_Var_Pop_Fields = {
  __typename?: 'plans_var_pop_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Plans_Var_Samp_Fields = {
  __typename?: 'plans_var_samp_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Plans_Variance_Fields = {
  __typename?: 'plans_variance_fields';
  /** Function execution timeout in seconds */
  featureFunctionExecutionTimeout?: Maybe<Scalars['Float']>;
  featureMaxDbSize?: Maybe<Scalars['Float']>;
  featureMaxFilesSize?: Maybe<Scalars['Float']>;
  /** Max number of functions to deploy per git deployment */
  featureMaxNumberOfFunctionsPerDeployment?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "apps" using primary key columns */
  app?: Maybe<Apps>;
  appSecrets: Array<ConfigEnvironmentVariable>;
  /** fetch data from the table: "app_states" using primary key columns */
  appState?: Maybe<AppStates>;
  /** fetch data from the table: "app_state_history" */
  appStateHistories: Array<AppStateHistory>;
  /** fetch data from the table: "app_state_history" using primary key columns */
  appStateHistory?: Maybe<AppStateHistory>;
  /** fetch aggregated fields from the table: "app_state_history" */
  appStateHistoryAggregate: AppStateHistory_Aggregate;
  /** fetch data from the table: "app_states" */
  appStates: Array<AppStates>;
  /** fetch aggregated fields from the table: "app_states" */
  appStatesAggregate: AppStates_Aggregate;
  /** An array relationship */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  appsAggregate: Apps_Aggregate;
  appsSecrets?: Maybe<Array<ConfigAppSecrets>>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table: "backups" using primary key columns */
  backup?: Maybe<Backups>;
  /** An array relationship */
  backups: Array<Backups>;
  /** fetch aggregated fields from the table: "backups" */
  backupsAggregate: Backups_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" using primary key columns */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute" */
  billingDedicatedComputeAggregate: Billing_Dedicated_Compute_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute_reports" using primary key columns */
  billingDedicatedComputeReport?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReports: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReportsAggregate: Billing_Dedicated_Compute_Reports_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" */
  billingDedicatedComputes: Array<Billing_Dedicated_Compute>;
  billingDummy: Scalars['Boolean'];
  /** fetch data from the table: "billing.subscriptions" using primary key columns */
  billingSubscription?: Maybe<Billing_Subscriptions>;
  /** fetch data from the table: "billing.subscriptions" */
  billingSubscriptions: Array<Billing_Subscriptions>;
  /** fetch aggregated fields from the table: "billing.subscriptions" */
  billingSubscriptionsAggregate: Billing_Subscriptions_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "cli_tokens" using primary key columns */
  cliToken?: Maybe<CliTokens>;
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** fetch aggregated fields from the table: "cli_tokens" */
  cliTokensAggregate: CliTokens_Aggregate;
  config?: Maybe<ConfigConfig>;
  configRawJSON: Scalars['String'];
  configs: Array<ConfigAppConfig>;
  /** fetch data from the table: "continents" */
  continents: Array<Continents>;
  /** fetch aggregated fields from the table: "continents" */
  continents_aggregate: Continents_Aggregate;
  /** fetch data from the table: "continents" using primary key columns */
  continents_by_pk?: Maybe<Continents>;
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table: "deployments" using primary key columns */
  deployment?: Maybe<Deployments>;
  /** fetch data from the table: "deployment_logs" using primary key columns */
  deploymentLog?: Maybe<DeploymentLogs>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** fetch aggregated fields from the table: "deployment_logs" */
  deploymentLogsAggregate: DeploymentLogs_Aggregate;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** fetch aggregated fields from the table: "deployments" */
  deploymentsAggregate: Deployments_Aggregate;
  /** fetch data from the table: "feature_flags" using primary key columns */
  featureFlag?: Maybe<FeatureFlags>;
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  featureFlagsAggregate: FeatureFlags_Aggregate;
  /** fetch data from the table: "feedback" */
  feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "feedback" */
  feedbackAggreggate: Feedback_Aggregate;
  /** fetch data from the table: "feedback" using primary key columns */
  feedbackOne?: Maybe<Feedback>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  getCPUSecondsUsage: Metrics;
  getEgressVolume: Metrics;
  getFunctionsInvocations: Metrics;
  getLogsVolume: Metrics;
  getPostgresVolumeCapacity: Metrics;
  getPostgresVolumeUsage: Metrics;
  getTotalRequests: Metrics;
  /** fetch data from the table: "github_app_installations" using primary key columns */
  githubAppInstallation?: Maybe<GithubAppInstallations>;
  /** fetch data from the table: "github_app_installations" */
  githubAppInstallations: Array<GithubAppInstallations>;
  /** fetch aggregated fields from the table: "github_app_installations" */
  githubAppInstallationsAggregate: GithubAppInstallations_Aggregate;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** fetch aggregated fields from the table: "github_repositories" */
  githubRepositoriesAggregate: GithubRepositories_Aggregate;
  /** fetch data from the table: "github_repositories" using primary key columns */
  githubRepository?: Maybe<GithubRepositories>;
  /**
   * Returns logs for a given application. If `service` is not provided all services are returned.
   * If `from` and `to` are not provided, they default to an hour ago and now, respectively.
   */
  logs: Array<Log>;
  /** fetch data from the table: "payment_methods" using primary key columns */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** fetch aggregated fields from the table: "payment_methods" */
  paymentMethodsAggregate: PaymentMethods_Aggregate;
  /** fetch data from the table: "plans" using primary key columns */
  plan?: Maybe<Plans>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plansAggregate: Plans_Aggregate;
  /** fetch data from the table: "regions" */
  regions: Array<Regions>;
  /** fetch aggregated fields from the table: "regions" */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
  /**
   * Returns lists of apps that have some live traffic in the give time range.
   * From defaults to 24 hours ago and to defaults to now.
   *
   * Requests that returned a 4xx or 5xx status code are not counted as live traffic.
   */
  statsLiveApps: StatsLiveApps;
  systemConfig?: Maybe<ConfigSystemConfig>;
  systemConfigs: Array<ConfigAppSystemConfig>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspace?: Maybe<Workspaces>;
  /** fetch data from the table: "workspace_members" using primary key columns */
  workspaceMember?: Maybe<WorkspaceMembers>;
  /** fetch data from the table: "workspace_member_invites" using primary key columns */
  workspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** fetch aggregated fields from the table: "workspace_member_invites" */
  workspaceMemberInvitesAggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** fetch aggregated fields from the table: "workspace_members" */
  workspaceMembersAggregate: WorkspaceMembers_Aggregate;
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: Workspaces_Aggregate;
};


export type Query_RootAppArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAppSecretsArgs = {
  appID: Scalars['uuid'];
};


export type Query_RootAppStateArgs = {
  id: Scalars['Int'];
};


export type Query_RootAppStateHistoriesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Query_RootAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAppStateHistoryAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Query_RootAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Query_RootAppStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Query_RootAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Query_RootAppsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Query_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBackupArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Query_RootBackupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingDedicatedComputeAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeReportArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingDedicatedComputeReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputeReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Query_RootBillingDedicatedComputesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Query_RootBillingSubscriptionArgs = {
  id: Scalars['uuid'];
};


export type Query_RootBillingSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Query_RootBillingSubscriptionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCliTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Query_RootCliTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Query_RootConfigArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
};


export type Query_RootConfigRawJsonArgs = {
  appID: Scalars['uuid'];
  resolve: Scalars['Boolean'];
};


export type Query_RootConfigsArgs = {
  resolve: Scalars['Boolean'];
  where?: InputMaybe<ConfigConfigComparisonExp>;
};


export type Query_RootContinentsArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Query_RootContinents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Query_RootContinents_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Query_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Query_RootDeploymentArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeploymentLogArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Query_RootDeploymentLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Query_RootDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Query_RootDeploymentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Query_RootFeatureFlagArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Query_RootFeatureFlagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Query_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Query_RootFeedbackAggreggateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Query_RootFeedbackOneArgs = {
  id: Scalars['Int'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootGetCpuSecondsUsageArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetEgressVolumeArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  subdomain: Scalars['String'];
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetFunctionsInvocationsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetLogsVolumeArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetPostgresVolumeCapacityArgs = {
  appID: Scalars['String'];
  t?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetPostgresVolumeUsageArgs = {
  appID: Scalars['String'];
  t?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGetTotalRequestsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGithubAppInstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Query_RootGithubAppInstallationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Query_RootGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Query_RootGithubRepositoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Query_RootGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLogsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  service?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootPaymentMethodArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Query_RootPaymentMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Query_RootPlanArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootRegionsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Query_RootRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Query_RootRegions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStatsLiveAppsArgs = {
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
};


export type Query_RootSystemConfigArgs = {
  appID: Scalars['uuid'];
};


export type Query_RootSystemConfigsArgs = {
  where?: InputMaybe<ConfigSystemConfigComparisonExp>;
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Query_RootWorkspaceMemberInvitesAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Query_RootWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Query_RootWorkspaceMembersAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Query_RootWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Query_RootWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** Boolean expression to compare columns of type "refresh_token_type". All fields are combined with logical 'AND'. */
export type Refresh_Token_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['refresh_token_type']>;
  _gt?: InputMaybe<Scalars['refresh_token_type']>;
  _gte?: InputMaybe<Scalars['refresh_token_type']>;
  _in?: InputMaybe<Array<Scalars['refresh_token_type']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['refresh_token_type']>;
  _lte?: InputMaybe<Scalars['refresh_token_type']>;
  _neq?: InputMaybe<Scalars['refresh_token_type']>;
  _nin?: InputMaybe<Array<Scalars['refresh_token_type']>>;
};

/** columns and relationships of "regions" */
export type Regions = {
  __typename?: 'regions';
  active: Scalars['Boolean'];
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  awsName: Scalars['String'];
  city: Scalars['String'];
  /** An object relationship */
  country: Countries;
  countryCode: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  isGdprCompliant: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "regions" */
export type RegionsAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "regions" */
export type RegionsApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};

/** aggregated selection of "regions" */
export type Regions_Aggregate = {
  __typename?: 'regions_aggregate';
  aggregate?: Maybe<Regions_Aggregate_Fields>;
  nodes: Array<Regions>;
};

export type Regions_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Regions_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Regions_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Regions_Aggregate_Bool_Exp_Count>;
};

export type Regions_Aggregate_Bool_Exp_Bool_And = {
  arguments: Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Regions_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Regions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Regions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Regions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "regions" */
export type Regions_Aggregate_Fields = {
  __typename?: 'regions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Regions_Max_Fields>;
  min?: Maybe<Regions_Min_Fields>;
};


/** aggregate fields of "regions" */
export type Regions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Regions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "regions" */
export type Regions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Regions_Max_Order_By>;
  min?: InputMaybe<Regions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "regions" */
export type Regions_Arr_Rel_Insert_Input = {
  data: Array<Regions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "regions". All fields are combined with a logical 'AND'. */
export type Regions_Bool_Exp = {
  _and?: InputMaybe<Array<Regions_Bool_Exp>>;
  _not?: InputMaybe<Regions_Bool_Exp>;
  _or?: InputMaybe<Array<Regions_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  awsName?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<Countries_Bool_Exp>;
  countryCode?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isGdprCompliant?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "regions" */
export enum Regions_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey',
  /** unique or primary key constraint on columns "aws_name" */
  RegionsAwsNameKey = 'regions_aws_name_key'
}

/** input type for inserting data into table "regions" */
export type Regions_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Countries_Obj_Rel_Insert_Input>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Regions_Max_Fields = {
  __typename?: 'regions_max_fields';
  awsName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "regions" */
export type Regions_Max_Order_By = {
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Regions_Min_Fields = {
  __typename?: 'regions_min_fields';
  awsName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "regions" */
export type Regions_Min_Order_By = {
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "regions" */
export type Regions_Mutation_Response = {
  __typename?: 'regions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Regions>;
};

/** input type for inserting object relation for remote table "regions" */
export type Regions_Obj_Rel_Insert_Input = {
  data: Regions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Regions_On_Conflict>;
};

/** on_conflict condition type for table "regions" */
export type Regions_On_Conflict = {
  constraint: Regions_Constraint;
  update_columns?: Array<Regions_Update_Column>;
  where?: InputMaybe<Regions_Bool_Exp>;
};

/** Ordering options when selecting data from "regions". */
export type Regions_Order_By = {
  active?: InputMaybe<Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  awsName?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Countries_Order_By>;
  countryCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isGdprCompliant?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: regions */
export type Regions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "regions" */
export enum Regions_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AwsName = 'awsName',
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "regions_aggregate_bool_exp_bool_and_arguments_columns" columns of table "regions" */
export enum Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant'
}

/** select "regions_aggregate_bool_exp_bool_or_arguments_columns" columns of table "regions" */
export enum Regions_Select_Column_Regions_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Active = 'active',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant'
}

/** input type for updating data in table "regions" */
export type Regions_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "regions" */
export type Regions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Regions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Regions_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']>;
  awsName?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  isGdprCompliant?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "regions" */
export enum Regions_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  AwsName = 'awsName',
  /** column name */
  City = 'city',
  /** column name */
  CountryCode = 'countryCode',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsGdprCompliant = 'isGdprCompliant',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Regions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Regions_Set_Input>;
  where: Regions_Bool_Exp;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "apps" using primary key columns */
  app?: Maybe<Apps>;
  /** fetch data from the table: "app_states" using primary key columns */
  appState?: Maybe<AppStates>;
  /** fetch data from the table: "app_state_history" */
  appStateHistories: Array<AppStateHistory>;
  /** fetch data from the table: "app_state_history" using primary key columns */
  appStateHistory?: Maybe<AppStateHistory>;
  /** fetch aggregated fields from the table: "app_state_history" */
  appStateHistoryAggregate: AppStateHistory_Aggregate;
  /** fetch data from the table in a streaming manner: "app_state_history" */
  appStateHistory_stream: Array<AppStateHistory>;
  /** fetch data from the table: "app_states" */
  appStates: Array<AppStates>;
  /** fetch aggregated fields from the table: "app_states" */
  appStatesAggregate: AppStates_Aggregate;
  /** fetch data from the table in a streaming manner: "app_states" */
  appStates_stream: Array<AppStates>;
  /** An array relationship */
  apps: Array<Apps>;
  /** fetch aggregated fields from the table: "apps" */
  appsAggregate: Apps_Aggregate;
  /** fetch data from the table in a streaming manner: "apps" */
  apps_stream: Array<Apps>;
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.migrations" */
  auth_migrations: Array<Auth_Migrations>;
  /** fetch aggregated fields from the table: "auth.migrations" */
  auth_migrations_aggregate: Auth_Migrations_Aggregate;
  /** fetch data from the table: "auth.migrations" using primary key columns */
  auth_migrations_by_pk?: Maybe<Auth_Migrations>;
  /** fetch data from the table in a streaming manner: "auth.migrations" */
  auth_migrations_stream: Array<Auth_Migrations>;
  /** fetch data from the table: "backups" using primary key columns */
  backup?: Maybe<Backups>;
  /** An array relationship */
  backups: Array<Backups>;
  /** fetch aggregated fields from the table: "backups" */
  backupsAggregate: Backups_Aggregate;
  /** fetch data from the table in a streaming manner: "backups" */
  backups_stream: Array<Backups>;
  /** fetch data from the table: "billing.dedicated_compute" using primary key columns */
  billingDedicatedCompute?: Maybe<Billing_Dedicated_Compute>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute" */
  billingDedicatedComputeAggregate: Billing_Dedicated_Compute_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute_reports" using primary key columns */
  billingDedicatedComputeReport?: Maybe<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReports: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch aggregated fields from the table: "billing.dedicated_compute_reports" */
  billingDedicatedComputeReportsAggregate: Billing_Dedicated_Compute_Reports_Aggregate;
  /** fetch data from the table: "billing.dedicated_compute" */
  billingDedicatedComputes: Array<Billing_Dedicated_Compute>;
  /** fetch data from the table: "billing.subscriptions" using primary key columns */
  billingSubscription?: Maybe<Billing_Subscriptions>;
  /** fetch data from the table: "billing.subscriptions" */
  billingSubscriptions: Array<Billing_Subscriptions>;
  /** fetch aggregated fields from the table: "billing.subscriptions" */
  billingSubscriptionsAggregate: Billing_Subscriptions_Aggregate;
  /** fetch data from the table in a streaming manner: "billing.dedicated_compute_reports" */
  billing_dedicated_compute_reports_stream: Array<Billing_Dedicated_Compute_Reports>;
  /** fetch data from the table in a streaming manner: "billing.dedicated_compute" */
  billing_dedicated_compute_stream: Array<Billing_Dedicated_Compute>;
  /** fetch data from the table in a streaming manner: "billing.subscriptions" */
  billing_subscriptions_stream: Array<Billing_Subscriptions>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "cli_tokens" using primary key columns */
  cliToken?: Maybe<CliTokens>;
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** fetch aggregated fields from the table: "cli_tokens" */
  cliTokensAggregate: CliTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "cli_tokens" */
  cliTokens_stream: Array<CliTokens>;
  /** fetch data from the table: "continents" */
  continents: Array<Continents>;
  /** fetch aggregated fields from the table: "continents" */
  continents_aggregate: Continents_Aggregate;
  /** fetch data from the table: "continents" using primary key columns */
  continents_by_pk?: Maybe<Continents>;
  /** fetch data from the table in a streaming manner: "continents" */
  continents_stream: Array<Continents>;
  /** An array relationship */
  countries: Array<Countries>;
  /** An aggregate relationship */
  countries_aggregate: Countries_Aggregate;
  /** fetch data from the table: "countries" using primary key columns */
  countries_by_pk?: Maybe<Countries>;
  /** fetch data from the table in a streaming manner: "countries" */
  countries_stream: Array<Countries>;
  /** fetch data from the table: "deployments" using primary key columns */
  deployment?: Maybe<Deployments>;
  /** fetch data from the table: "deployment_logs" using primary key columns */
  deploymentLog?: Maybe<DeploymentLogs>;
  /** An array relationship */
  deploymentLogs: Array<DeploymentLogs>;
  /** fetch aggregated fields from the table: "deployment_logs" */
  deploymentLogsAggregate: DeploymentLogs_Aggregate;
  /** fetch data from the table in a streaming manner: "deployment_logs" */
  deploymentLogs_stream: Array<DeploymentLogs>;
  /** An array relationship */
  deployments: Array<Deployments>;
  /** fetch aggregated fields from the table: "deployments" */
  deploymentsAggregate: Deployments_Aggregate;
  /** fetch data from the table in a streaming manner: "deployments" */
  deployments_stream: Array<Deployments>;
  /** fetch data from the table: "feature_flags" using primary key columns */
  featureFlag?: Maybe<FeatureFlags>;
  /** An array relationship */
  featureFlags: Array<FeatureFlags>;
  /** fetch aggregated fields from the table: "feature_flags" */
  featureFlagsAggregate: FeatureFlags_Aggregate;
  /** fetch data from the table in a streaming manner: "feature_flags" */
  featureFlags_stream: Array<FeatureFlags>;
  /** fetch data from the table: "feedback" */
  feedback: Array<Feedback>;
  /** fetch aggregated fields from the table: "feedback" */
  feedbackAggreggate: Feedback_Aggregate;
  /** fetch data from the table: "feedback" using primary key columns */
  feedbackOne?: Maybe<Feedback>;
  /** fetch data from the table in a streaming manner: "feedback" */
  feedback_stream: Array<Feedback>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "github_app_installations" using primary key columns */
  githubAppInstallation?: Maybe<GithubAppInstallations>;
  /** fetch data from the table: "github_app_installations" */
  githubAppInstallations: Array<GithubAppInstallations>;
  /** fetch aggregated fields from the table: "github_app_installations" */
  githubAppInstallationsAggregate: GithubAppInstallations_Aggregate;
  /** fetch data from the table in a streaming manner: "github_app_installations" */
  githubAppInstallations_stream: Array<GithubAppInstallations>;
  /** An array relationship */
  githubRepositories: Array<GithubRepositories>;
  /** fetch aggregated fields from the table: "github_repositories" */
  githubRepositoriesAggregate: GithubRepositories_Aggregate;
  /** fetch data from the table in a streaming manner: "github_repositories" */
  githubRepositories_stream: Array<GithubRepositories>;
  /** fetch data from the table: "github_repositories" using primary key columns */
  githubRepository?: Maybe<GithubRepositories>;
  /**
   * Returns logs for a given application. If `service` is not provided all services are returned.
   * If `from` is not provided, it defaults to an hour ago.
   */
  logs: Array<Log>;
  /** fetch data from the table: "payment_methods" using primary key columns */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** fetch aggregated fields from the table: "payment_methods" */
  paymentMethodsAggregate: PaymentMethods_Aggregate;
  /** fetch data from the table in a streaming manner: "payment_methods" */
  paymentMethods_stream: Array<PaymentMethods>;
  /** fetch data from the table: "plans" using primary key columns */
  plan?: Maybe<Plans>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plansAggregate: Plans_Aggregate;
  /** fetch data from the table in a streaming manner: "plans" */
  plans_stream: Array<Plans>;
  /** fetch data from the table: "regions" */
  regions: Array<Regions>;
  /** fetch aggregated fields from the table: "regions" */
  regions_aggregate: Regions_Aggregate;
  /** fetch data from the table: "regions" using primary key columns */
  regions_by_pk?: Maybe<Regions>;
  /** fetch data from the table in a streaming manner: "regions" */
  regions_stream: Array<Regions>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "workspaces" using primary key columns */
  workspace?: Maybe<Workspaces>;
  /** fetch data from the table: "workspace_members" using primary key columns */
  workspaceMember?: Maybe<WorkspaceMembers>;
  /** fetch data from the table: "workspace_member_invites" using primary key columns */
  workspaceMemberInvite?: Maybe<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** fetch aggregated fields from the table: "workspace_member_invites" */
  workspaceMemberInvitesAggregate: WorkspaceMemberInvites_Aggregate;
  /** fetch data from the table in a streaming manner: "workspace_member_invites" */
  workspaceMemberInvites_stream: Array<WorkspaceMemberInvites>;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** fetch aggregated fields from the table: "workspace_members" */
  workspaceMembersAggregate: WorkspaceMembers_Aggregate;
  /** fetch data from the table in a streaming manner: "workspace_members" */
  workspaceMembers_stream: Array<WorkspaceMembers>;
  /** An array relationship */
  workspaces: Array<Workspaces>;
  /** fetch aggregated fields from the table: "workspaces" */
  workspacesAggregate: Workspaces_Aggregate;
  /** fetch data from the table in a streaming manner: "workspaces" */
  workspaces_stream: Array<Workspaces>;
};


export type Subscription_RootAppArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAppStateArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAppStateHistoriesArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStateHistoryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAppStateHistoryAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStateHistory_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStateHistory_Order_By>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStateHistory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AppStateHistory_Stream_Cursor_Input>>;
  where?: InputMaybe<AppStateHistory_Bool_Exp>;
};


export type Subscription_RootAppStatesArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppStatesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AppStates_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AppStates_Order_By>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppStates_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AppStates_Stream_Cursor_Input>>;
  where?: InputMaybe<AppStates_Bool_Exp>;
};


export type Subscription_RootAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootAppsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootApps_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Apps_Stream_Cursor_Input>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuth_MigrationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Migrations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Migrations_Order_By>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootAuth_Migrations_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootAuth_Migrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Auth_Migrations_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Migrations_Bool_Exp>;
};


export type Subscription_RootBackupArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBackupsArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBackupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Backups_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Backups_Order_By>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBackups_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Backups_Stream_Cursor_Input>>;
  where?: InputMaybe<Backups_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingDedicatedComputeAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeReportArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingDedicatedComputeReportsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputeReportsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Reports_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBillingDedicatedComputesArgs = {
  distinct_on?: InputMaybe<Array<Billing_Dedicated_Compute_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Dedicated_Compute_Order_By>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBillingSubscriptionArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBillingSubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBillingSubscriptionsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Billing_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Billing_Subscriptions_Order_By>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBilling_Dedicated_Compute_Reports_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Dedicated_Compute_Reports_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Reports_Bool_Exp>;
};


export type Subscription_RootBilling_Dedicated_Compute_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Dedicated_Compute_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Dedicated_Compute_Bool_Exp>;
};


export type Subscription_RootBilling_Subscriptions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Billing_Subscriptions_Stream_Cursor_Input>>;
  where?: InputMaybe<Billing_Subscriptions_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCliTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootCliTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootCliTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CliTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


export type Subscription_RootContinentsArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootContinents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Continents_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Continents_Order_By>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootContinents_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Subscription_RootContinents_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Continents_Stream_Cursor_Input>>;
  where?: InputMaybe<Continents_Bool_Exp>;
};


export type Subscription_RootCountriesArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Countries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Countries_Order_By>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_By_PkArgs = {
  code: Scalars['bpchar'];
};


export type Subscription_RootCountries_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Countries_Stream_Cursor_Input>>;
  where?: InputMaybe<Countries_Bool_Exp>;
};


export type Subscription_RootDeploymentArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDeploymentLogArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDeploymentLogsArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentLogsAggregateArgs = {
  distinct_on?: InputMaybe<Array<DeploymentLogs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<DeploymentLogs_Order_By>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentLogs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<DeploymentLogs_Stream_Cursor_Input>>;
  where?: InputMaybe<DeploymentLogs_Bool_Exp>;
};


export type Subscription_RootDeploymentsArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootDeploymentsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Deployments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deployments_Order_By>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootDeployments_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Deployments_Stream_Cursor_Input>>;
  where?: InputMaybe<Deployments_Bool_Exp>;
};


export type Subscription_RootFeatureFlagArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFeatureFlagsArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFeatureFlagsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FeatureFlags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FeatureFlags_Order_By>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFeatureFlags_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<FeatureFlags_Stream_Cursor_Input>>;
  where?: InputMaybe<FeatureFlags_Bool_Exp>;
};


export type Subscription_RootFeedbackArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootFeedbackAggreggateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootFeedbackOneArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeedback_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Feedback_Stream_Cursor_Input>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallationArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGithubAppInstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubAppInstallations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GithubAppInstallations_Stream_Cursor_Input>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


export type Subscription_RootGithubRepositoriesArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositoriesAggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubRepositories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubRepositories_Order_By>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositories_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<GithubRepositories_Stream_Cursor_Input>>;
  where?: InputMaybe<GithubRepositories_Bool_Exp>;
};


export type Subscription_RootGithubRepositoryArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLogsArgs = {
  appID: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  service?: InputMaybe<Scalars['String']>;
};


export type Subscription_RootPaymentMethodArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPaymentMethodsAggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPaymentMethods_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<PaymentMethods_Stream_Cursor_Input>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


export type Subscription_RootPlanArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlansAggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootRegionsArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootRegions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Regions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Regions_Order_By>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootRegions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRegions_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Regions_Stream_Cursor_Input>>;
  where?: InputMaybe<Regions_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorkspaceArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberInviteArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMemberInvitesAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMemberInvites_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WorkspaceMemberInvites_Stream_Cursor_Input>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembersAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspaceMembers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<WorkspaceMembers_Stream_Cursor_Input>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


export type Subscription_RootWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Subscription_RootWorkspacesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


export type Subscription_RootWorkspaces_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Workspaces_Stream_Cursor_Input>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  avatarUrl: Scalars['String'];
  /** An array relationship */
  cliTokens: Array<CliTokens>;
  /** An aggregate relationship */
  cliTokens_aggregate: CliTokens_Aggregate;
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  creatorOfWorkspaces: Array<Workspaces>;
  /** An aggregate relationship */
  creatorOfWorkspaces_aggregate: Workspaces_Aggregate;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  feedbacks: Array<Feedback>;
  /** An aggregate relationship */
  feedbacks_aggregate: Feedback_Aggregate;
  /** An array relationship */
  github_app_installations: Array<GithubAppInstallations>;
  /** An aggregate relationship */
  github_app_installations_aggregate: GithubAppInstallations_Aggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  /** An array relationship */
  payment_methods: Array<PaymentMethods>;
  /** An aggregate relationship */
  payment_methods_aggregate: PaymentMethods_Aggregate;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An object relationship */
  role: AuthRoles;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An array relationship */
  workspaceMemberInvitesByInvitedByUserId: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspaceMemberInvitesByInvitedByUserId_aggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** An aggregate relationship */
  workspaceMembers_aggregate: WorkspaceMembers_Aggregate;
  /** An array relationship */
  workspace_member_invites: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspace_member_invites_aggregate: WorkspaceMemberInvites_Aggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCliTokensArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCliTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<CliTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<CliTokens_Order_By>>;
  where?: InputMaybe<CliTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCreatorOfWorkspacesArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCreatorOfWorkspaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workspaces_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Workspaces_Order_By>>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersFeedbacksArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersFeedbacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Order_By>>;
  where?: InputMaybe<Feedback_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGithub_App_InstallationsArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersGithub_App_Installations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<GithubAppInstallations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<GithubAppInstallations_Order_By>>;
  where?: InputMaybe<GithubAppInstallations_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPayment_MethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersPayment_Methods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMemberInvitesByInvitedByUserIdArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMemberInvitesByInvitedByUserId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspaceMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspace_Member_InvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersWorkspace_Member_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  cliTokens?: InputMaybe<CliTokens_Bool_Exp>;
  cliTokens_aggregate?: InputMaybe<CliTokens_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorOfWorkspaces?: InputMaybe<Workspaces_Bool_Exp>;
  creatorOfWorkspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Bool_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  feedbacks?: InputMaybe<Feedback_Bool_Exp>;
  feedbacks_aggregate?: InputMaybe<Feedback_Aggregate_Bool_Exp>;
  github_app_installations?: InputMaybe<GithubAppInstallations_Bool_Exp>;
  github_app_installations_aggregate?: InputMaybe<GithubAppInstallations_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  payment_methods?: InputMaybe<PaymentMethods_Bool_Exp>;
  payment_methods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  role?: InputMaybe<AuthRoles_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
  workspaceMemberInvitesByInvitedByUserId?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspaceMemberInvitesByInvitedByUserId_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp>;
  workspace_member_invites?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspace_member_invites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  cliTokens?: InputMaybe<CliTokens_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorOfWorkspaces?: InputMaybe<Workspaces_Arr_Rel_Insert_Input>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  feedbacks?: InputMaybe<Feedback_Arr_Rel_Insert_Input>;
  github_app_installations?: InputMaybe<GithubAppInstallations_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  payment_methods?: InputMaybe<PaymentMethods_Arr_Rel_Insert_Input>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  role?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  workspaceMemberInvitesByInvitedByUserId?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Arr_Rel_Insert_Input>;
  workspace_member_invites?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  cliTokens_aggregate?: InputMaybe<CliTokens_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorOfWorkspaces_aggregate?: InputMaybe<Workspaces_Aggregate_Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  feedbacks_aggregate?: InputMaybe<Feedback_Aggregate_Order_By>;
  github_app_installations_aggregate?: InputMaybe<GithubAppInstallations_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  payment_methods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  role?: InputMaybe<AuthRoles_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  workspaceMemberInvitesByInvitedByUserId_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Order_By>;
  workspace_member_invites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "workspace_member_invites" */
export type WorkspaceMemberInvites = {
  __typename?: 'workspaceMemberInvites';
  createdAt: Scalars['timestamptz'];
  email: Scalars['citext'];
  id: Scalars['uuid'];
  /** An object relationship */
  invitedByUser: Users;
  invitedByUserId: Scalars['uuid'];
  isAccepted?: Maybe<Scalars['Boolean']>;
  /** owner or member */
  memberType: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  userByEmail?: Maybe<Users>;
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate = {
  __typename?: 'workspaceMemberInvites_aggregate';
  aggregate?: Maybe<WorkspaceMemberInvites_Aggregate_Fields>;
  nodes: Array<WorkspaceMemberInvites>;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp_Count>;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And = {
  arguments: WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or = {
  arguments: WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type WorkspaceMemberInvites_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_Fields = {
  __typename?: 'workspaceMemberInvites_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WorkspaceMemberInvites_Max_Fields>;
  min?: Maybe<WorkspaceMemberInvites_Min_Fields>;
};


/** aggregate fields of "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WorkspaceMemberInvites_Max_Order_By>;
  min?: InputMaybe<WorkspaceMemberInvites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_member_invites" */
export type WorkspaceMemberInvites_Arr_Rel_Insert_Input = {
  data: Array<WorkspaceMemberInvites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkspaceMemberInvites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspace_member_invites". All fields are combined with a logical 'AND'. */
export type WorkspaceMemberInvites_Bool_Exp = {
  _and?: InputMaybe<Array<WorkspaceMemberInvites_Bool_Exp>>;
  _not?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  _or?: InputMaybe<Array<WorkspaceMemberInvites_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  invitedByUser?: InputMaybe<Users_Bool_Exp>;
  invitedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
  isAccepted?: InputMaybe<Boolean_Comparison_Exp>;
  memberType?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userByEmail?: InputMaybe<Users_Bool_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Constraint {
  /** unique or primary key constraint on columns "email", "workspace_id" */
  WorkspaceMemberInvitesEmailWorkspaceIdKey = 'workspace_member_invites_email_workspace_id_key',
  /** unique or primary key constraint on columns "id" */
  WorkspaceMemberInvitesPkey = 'workspace_member_invites_pkey'
}

/** input type for inserting data into table "workspace_member_invites" */
export type WorkspaceMemberInvites_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userByEmail?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkspaceMemberInvites_Max_Fields = {
  __typename?: 'workspaceMemberInvites_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  invitedByUserId?: Maybe<Scalars['uuid']>;
  /** owner or member */
  memberType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  /** owner or member */
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WorkspaceMemberInvites_Min_Fields = {
  __typename?: 'workspaceMemberInvites_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  invitedByUserId?: Maybe<Scalars['uuid']>;
  /** owner or member */
  memberType?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workspace_member_invites" */
export type WorkspaceMemberInvites_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  /** owner or member */
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspace_member_invites" */
export type WorkspaceMemberInvites_Mutation_Response = {
  __typename?: 'workspaceMemberInvites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceMemberInvites>;
};

/** on_conflict condition type for table "workspace_member_invites" */
export type WorkspaceMemberInvites_On_Conflict = {
  constraint: WorkspaceMemberInvites_Constraint;
  update_columns?: Array<WorkspaceMemberInvites_Update_Column>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace_member_invites". */
export type WorkspaceMemberInvites_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitedByUser?: InputMaybe<Users_Order_By>;
  invitedByUserId?: InputMaybe<Order_By>;
  isAccepted?: InputMaybe<Order_By>;
  memberType?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userByEmail?: InputMaybe<Users_Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workspace_member_invites */
export type WorkspaceMemberInvites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedByUserId = 'invitedByUserId',
  /** column name */
  IsAccepted = 'isAccepted',
  /** column name */
  MemberType = 'memberType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** select "workspaceMemberInvites_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAccepted = 'isAccepted'
}

/** select "workspaceMemberInvites_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Select_Column_WorkspaceMemberInvites_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAccepted = 'isAccepted'
}

/** input type for updating data in table "workspace_member_invites" */
export type WorkspaceMemberInvites_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspaceMemberInvites" */
export type WorkspaceMemberInvites_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WorkspaceMemberInvites_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkspaceMemberInvites_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['citext']>;
  id?: InputMaybe<Scalars['uuid']>;
  invitedByUserId?: InputMaybe<Scalars['uuid']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  /** owner or member */
  memberType?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_member_invites" */
export enum WorkspaceMemberInvites_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  InvitedByUserId = 'invitedByUserId',
  /** column name */
  IsAccepted = 'isAccepted',
  /** column name */
  MemberType = 'memberType',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type WorkspaceMemberInvites_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspaceMemberInvites_Set_Input>;
  where: WorkspaceMemberInvites_Bool_Exp;
};

/** columns and relationships of "workspace_members" */
export type WorkspaceMembers = {
  __typename?: 'workspaceMembers';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** owner or member */
  type: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
  /** An object relationship */
  workspace: Workspaces;
  workspaceId: Scalars['uuid'];
};

/** aggregated selection of "workspace_members" */
export type WorkspaceMembers_Aggregate = {
  __typename?: 'workspaceMembers_aggregate';
  aggregate?: Maybe<WorkspaceMembers_Aggregate_Fields>;
  nodes: Array<WorkspaceMembers>;
};

export type WorkspaceMembers_Aggregate_Bool_Exp = {
  count?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp_Count>;
};

export type WorkspaceMembers_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspace_members" */
export type WorkspaceMembers_Aggregate_Fields = {
  __typename?: 'workspaceMembers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<WorkspaceMembers_Max_Fields>;
  min?: Maybe<WorkspaceMembers_Min_Fields>;
};


/** aggregate fields of "workspace_members" */
export type WorkspaceMembers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspace_members" */
export type WorkspaceMembers_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<WorkspaceMembers_Max_Order_By>;
  min?: InputMaybe<WorkspaceMembers_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspace_members" */
export type WorkspaceMembers_Arr_Rel_Insert_Input = {
  data: Array<WorkspaceMembers_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkspaceMembers_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspace_members". All fields are combined with a logical 'AND'. */
export type WorkspaceMembers_Bool_Exp = {
  _and?: InputMaybe<Array<WorkspaceMembers_Bool_Exp>>;
  _not?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  _or?: InputMaybe<Array<WorkspaceMembers_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
  workspace?: InputMaybe<Workspaces_Bool_Exp>;
  workspaceId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "workspace_members" */
export enum WorkspaceMembers_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkspaceMembersPkey = 'workspace_members_pkey',
  /** unique or primary key constraint on columns "workspace_id", "user_id" */
  WorkspaceMembersUserIdWorkspaceIdKey = 'workspace_members_user_id_workspace_id_key'
}

/** input type for inserting data into table "workspace_members" */
export type WorkspaceMembers_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspace?: InputMaybe<Workspaces_Obj_Rel_Insert_Input>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type WorkspaceMembers_Max_Fields = {
  __typename?: 'workspaceMembers_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** owner or member */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "workspace_members" */
export type WorkspaceMembers_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** owner or member */
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type WorkspaceMembers_Min_Fields = {
  __typename?: 'workspaceMembers_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  /** owner or member */
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
  workspaceId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "workspace_members" */
export type WorkspaceMembers_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** owner or member */
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspace_members" */
export type WorkspaceMembers_Mutation_Response = {
  __typename?: 'workspaceMembers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkspaceMembers>;
};

/** on_conflict condition type for table "workspace_members" */
export type WorkspaceMembers_On_Conflict = {
  constraint: WorkspaceMembers_Constraint;
  update_columns?: Array<WorkspaceMembers_Update_Column>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};

/** Ordering options when selecting data from "workspace_members". */
export type WorkspaceMembers_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
  workspace?: InputMaybe<Workspaces_Order_By>;
  workspaceId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workspace_members */
export type WorkspaceMembers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspace_members" */
export enum WorkspaceMembers_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

/** input type for updating data in table "workspace_members" */
export type WorkspaceMembers_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "workspaceMembers" */
export type WorkspaceMembers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: WorkspaceMembers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkspaceMembers_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  /** owner or member */
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
  workspaceId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "workspace_members" */
export enum WorkspaceMembers_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  WorkspaceId = 'workspaceId'
}

export type WorkspaceMembers_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkspaceMembers_Set_Input>;
  where: WorkspaceMembers_Bool_Exp;
};

/** columns and relationships of "workspaces" */
export type Workspaces = {
  __typename?: 'workspaces';
  /** City, district, suburb, town, or village. */
  addressCity: Scalars['String'];
  /** An object relationship */
  addressCountry?: Maybe<Countries>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1: Scalars['String'];
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2: Scalars['String'];
  /** ZIP or postal code. */
  addressPostalCode: Scalars['String'];
  /** State, county, province, or region. */
  addressState: Scalars['String'];
  /** An array relationship */
  apps: Array<Apps>;
  /** An aggregate relationship */
  apps_aggregate: Apps_Aggregate;
  companyName: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  creatorUser?: Maybe<Users>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  paymentMethod?: Maybe<PaymentMethods>;
  /** An array relationship */
  paymentMethods: Array<PaymentMethods>;
  /** An aggregate relationship */
  paymentMethods_aggregate: PaymentMethods_Aggregate;
  slug: Scalars['String'];
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType: Scalars['String'];
  taxIdValue: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  workspaceMemberInvites: Array<WorkspaceMemberInvites>;
  /** An aggregate relationship */
  workspaceMemberInvites_aggregate: WorkspaceMemberInvites_Aggregate;
  /** An array relationship */
  workspaceMembers: Array<WorkspaceMembers>;
  /** An aggregate relationship */
  workspaceMembers_aggregate: WorkspaceMembers_Aggregate;
};


/** columns and relationships of "workspaces" */
export type WorkspacesAppsArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesApps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Apps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Apps_Order_By>>;
  where?: InputMaybe<Apps_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesPaymentMethodsArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesPaymentMethods_AggregateArgs = {
  distinct_on?: InputMaybe<Array<PaymentMethods_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<PaymentMethods_Order_By>>;
  where?: InputMaybe<PaymentMethods_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMemberInvitesArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMemberInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMemberInvites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMemberInvites_Order_By>>;
  where?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMembersArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};


/** columns and relationships of "workspaces" */
export type WorkspacesWorkspaceMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkspaceMembers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<WorkspaceMembers_Order_By>>;
  where?: InputMaybe<WorkspaceMembers_Bool_Exp>;
};

/** aggregated selection of "workspaces" */
export type Workspaces_Aggregate = {
  __typename?: 'workspaces_aggregate';
  aggregate?: Maybe<Workspaces_Aggregate_Fields>;
  nodes: Array<Workspaces>;
};

export type Workspaces_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workspaces_Aggregate_Bool_Exp_Count>;
};

export type Workspaces_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workspaces_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Workspaces_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_Fields = {
  __typename?: 'workspaces_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Workspaces_Max_Fields>;
  min?: Maybe<Workspaces_Min_Fields>;
};


/** aggregate fields of "workspaces" */
export type Workspaces_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workspaces_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "workspaces" */
export type Workspaces_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workspaces_Max_Order_By>;
  min?: InputMaybe<Workspaces_Min_Order_By>;
};

/** input type for inserting array relation for remote table "workspaces" */
export type Workspaces_Arr_Rel_Insert_Input = {
  data: Array<Workspaces_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};

/** Boolean expression to filter rows from the table "workspaces". All fields are combined with a logical 'AND'. */
export type Workspaces_Bool_Exp = {
  _and?: InputMaybe<Array<Workspaces_Bool_Exp>>;
  _not?: InputMaybe<Workspaces_Bool_Exp>;
  _or?: InputMaybe<Array<Workspaces_Bool_Exp>>;
  addressCity?: InputMaybe<String_Comparison_Exp>;
  addressCountry?: InputMaybe<Countries_Bool_Exp>;
  addressCountryCode?: InputMaybe<String_Comparison_Exp>;
  addressLine1?: InputMaybe<String_Comparison_Exp>;
  addressLine2?: InputMaybe<String_Comparison_Exp>;
  addressPostalCode?: InputMaybe<String_Comparison_Exp>;
  addressState?: InputMaybe<String_Comparison_Exp>;
  apps?: InputMaybe<Apps_Bool_Exp>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Bool_Exp>;
  companyName?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  creatorUser?: InputMaybe<Users_Bool_Exp>;
  creatorUserId?: InputMaybe<Uuid_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  paymentMethod?: InputMaybe<PaymentMethods_Bool_Exp>;
  paymentMethods?: InputMaybe<PaymentMethods_Bool_Exp>;
  paymentMethods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  stripeCustomerId?: InputMaybe<String_Comparison_Exp>;
  taxIdType?: InputMaybe<String_Comparison_Exp>;
  taxIdValue?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  workspaceMemberInvites?: InputMaybe<WorkspaceMemberInvites_Bool_Exp>;
  workspaceMemberInvites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Bool_Exp>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Bool_Exp>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workspaces" */
export enum Workspaces_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkspacesPkey = 'workspaces_pkey',
  /** unique or primary key constraint on columns "slug" */
  WorkspacesSlugKey = 'workspaces_slug_key'
}

/** input type for inserting data into table "workspaces" */
export type Workspaces_Insert_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  addressCountry?: InputMaybe<Countries_Obj_Rel_Insert_Input>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  apps?: InputMaybe<Apps_Arr_Rel_Insert_Input>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUser?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  paymentMethod?: InputMaybe<PaymentMethods_Obj_Rel_Insert_Input>;
  paymentMethods?: InputMaybe<PaymentMethods_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  workspaceMemberInvites?: InputMaybe<WorkspaceMemberInvites_Arr_Rel_Insert_Input>;
  workspaceMembers?: InputMaybe<WorkspaceMembers_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workspaces_Max_Fields = {
  __typename?: 'workspaces_max_fields';
  /** City, district, suburb, town, or village. */
  addressCity?: Maybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: Maybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: Maybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType?: Maybe<Scalars['String']>;
  taxIdValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "workspaces" */
export type Workspaces_Max_Order_By = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Order_By>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Order_By>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Order_By>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Order_By>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Order_By>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workspaces_Min_Fields = {
  __typename?: 'workspaces_min_fields';
  /** City, district, suburb, town, or village. */
  addressCity?: Maybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: Maybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: Maybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  taxIdType?: Maybe<Scalars['String']>;
  taxIdValue?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "workspaces" */
export type Workspaces_Min_Order_By = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Order_By>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Order_By>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Order_By>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Order_By>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Order_By>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workspaces" */
export type Workspaces_Mutation_Response = {
  __typename?: 'workspaces_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Workspaces>;
};

/** input type for inserting object relation for remote table "workspaces" */
export type Workspaces_Obj_Rel_Insert_Input = {
  data: Workspaces_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workspaces_On_Conflict>;
};

/** on_conflict condition type for table "workspaces" */
export type Workspaces_On_Conflict = {
  constraint: Workspaces_Constraint;
  update_columns?: Array<Workspaces_Update_Column>;
  where?: InputMaybe<Workspaces_Bool_Exp>;
};

/** Ordering options when selecting data from "workspaces". */
export type Workspaces_Order_By = {
  addressCity?: InputMaybe<Order_By>;
  addressCountry?: InputMaybe<Countries_Order_By>;
  addressCountryCode?: InputMaybe<Order_By>;
  addressLine1?: InputMaybe<Order_By>;
  addressLine2?: InputMaybe<Order_By>;
  addressPostalCode?: InputMaybe<Order_By>;
  addressState?: InputMaybe<Order_By>;
  apps_aggregate?: InputMaybe<Apps_Aggregate_Order_By>;
  companyName?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  creatorUser?: InputMaybe<Users_Order_By>;
  creatorUserId?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  paymentMethod?: InputMaybe<PaymentMethods_Order_By>;
  paymentMethods_aggregate?: InputMaybe<PaymentMethods_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
  stripeCustomerId?: InputMaybe<Order_By>;
  taxIdType?: InputMaybe<Order_By>;
  taxIdValue?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  workspaceMemberInvites_aggregate?: InputMaybe<WorkspaceMemberInvites_Aggregate_Order_By>;
  workspaceMembers_aggregate?: InputMaybe<WorkspaceMembers_Aggregate_Order_By>;
};

/** primary key columns input for table: workspaces */
export type Workspaces_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "workspaces" */
export enum Workspaces_Select_Column {
  /** column name */
  AddressCity = 'addressCity',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressLine1 = 'addressLine1',
  /** column name */
  AddressLine2 = 'addressLine2',
  /** column name */
  AddressPostalCode = 'addressPostalCode',
  /** column name */
  AddressState = 'addressState',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TaxIdType = 'taxIdType',
  /** column name */
  TaxIdValue = 'taxIdValue',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "workspaces" */
export type Workspaces_Set_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "workspaces" */
export type Workspaces_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workspaces_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workspaces_Stream_Cursor_Value_Input = {
  /** City, district, suburb, town, or village. */
  addressCity?: InputMaybe<Scalars['String']>;
  /** Two-letter country code (ISO 3166-1 alpha-2). */
  addressCountryCode?: InputMaybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  addressLine1?: InputMaybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  addressLine2?: InputMaybe<Scalars['String']>;
  /** ZIP or postal code. */
  addressPostalCode?: InputMaybe<Scalars['String']>;
  /** State, county, province, or region. */
  addressState?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  creatorUserId?: InputMaybe<Scalars['uuid']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  taxIdType?: InputMaybe<Scalars['String']>;
  taxIdValue?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "workspaces" */
export enum Workspaces_Update_Column {
  /** column name */
  AddressCity = 'addressCity',
  /** column name */
  AddressCountryCode = 'addressCountryCode',
  /** column name */
  AddressLine1 = 'addressLine1',
  /** column name */
  AddressLine2 = 'addressLine2',
  /** column name */
  AddressPostalCode = 'addressPostalCode',
  /** column name */
  AddressState = 'addressState',
  /** column name */
  CompanyName = 'companyName',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatorUserId = 'creatorUserId',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  StripeCustomerId = 'stripeCustomerId',
  /** column name */
  TaxIdType = 'taxIdType',
  /** column name */
  TaxIdValue = 'taxIdValue',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Workspaces_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workspaces_Set_Input>;
  where: Workspaces_Bool_Exp;
};

export type DeleteApplicationMutationVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type DeleteApplicationMutation = { __typename?: 'mutation_root', deleteApp?: { __typename?: 'apps', id: any } | null };

export type GetAllWorkspacesAndProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllWorkspacesAndProjectsQuery = { __typename?: 'query_root', workspaces: Array<{ __typename?: 'workspaces', id: any, name: string, slug: string, creatorUserId?: any | null, workspaceMembers: Array<{ __typename?: 'workspaceMembers', id: any, type: string, user: { __typename?: 'users', id: any, email?: any | null, displayName: string } }>, projects: Array<{ __typename?: 'apps', id: any, slug: string, name: string, repositoryProductionBranch: string, subdomain: string, isProvisioned: boolean, createdAt: any, desiredState: number, nhostBaseFolder: string, providersUpdated?: boolean | null, config?: { __typename?: 'ConfigConfig', hasura: { __typename?: 'ConfigHasura', adminSecret: string } } | null, featureFlags: Array<{ __typename?: 'featureFlags', description: string, id: any, name: string, value: string }>, appStates: Array<{ __typename?: 'appStateHistory', id: any, appId: any, message?: string | null, stateId: number, createdAt: any }>, region: { __typename?: 'regions', id: any, countryCode: string, awsName: string, city: string }, plan: { __typename?: 'plans', id: any, name: string, price: number, isFree: boolean }, githubRepository?: { __typename?: 'githubRepositories', fullName: string } | null, deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, commitMessage?: string | null, commitUserName?: string | null, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, commitUserAvatarUrl?: string | null, deploymentStatus?: string | null }>, creator?: { __typename?: 'users', id: any, email?: any | null, displayName: string } | null }> }> };

export type GetAppPlanAndGlobalPlansAppFragment = { __typename?: 'apps', id: any, subdomain: string, workspace: { __typename?: 'workspaces', id: any, paymentMethods: Array<{ __typename?: 'paymentMethods', id: any }> }, plan: { __typename?: 'plans', id: any, name: string } };

export type GetAppPlanAndGlobalPlansPlanFragment = { __typename?: 'plans', id: any, name: string, isFree: boolean, price: number, featureMaxDbSize: number };

export type GetAppPlanAndGlobalPlansQueryVariables = Exact<{
  workspaceSlug: Scalars['String'];
  appSlug: Scalars['String'];
}>;


export type GetAppPlanAndGlobalPlansQuery = { __typename?: 'query_root', apps: Array<{ __typename?: 'apps', id: any, subdomain: string, workspace: { __typename?: 'workspaces', id: any, paymentMethods: Array<{ __typename?: 'paymentMethods', id: any }> }, plan: { __typename?: 'plans', id: any, name: string } }>, plans: Array<{ __typename?: 'plans', id: any, name: string, isFree: boolean, price: number, featureMaxDbSize: number }> };

export type GetApplicationBackupsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetApplicationBackupsQuery = { __typename?: 'query_root', app?: { __typename?: 'apps', backups: Array<{ __typename?: 'backups', id: any, size: any, createdAt: any, completedAt?: any | null }> } | null };

export type GetApplicationPlanQueryVariables = Exact<{
  workspace: Scalars['String'];
  slug: Scalars['String'];
}>;


export type GetApplicationPlanQuery = { __typename?: 'query_root', apps: Array<{ __typename?: 'apps', id: any, subdomain: string, plan: { __typename?: 'plans', name: string, price: number, upatedAt: any, featureMaxDbSize: number } }> };

export type GetApplicationStateQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetApplicationStateQuery = { __typename?: 'query_root', app?: { __typename?: 'apps', id: any, name: string, appStates: Array<{ __typename?: 'appStateHistory', id: any, appId: any, message?: string | null, stateId: number, createdAt: any }> } | null };

export type GetProjectMetricsQueryVariables = Exact<{
  appId: Scalars['String'];
  subdomain: Scalars['String'];
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
}>;


export type GetProjectMetricsQuery = { __typename?: 'query_root', logsVolume: { __typename?: 'Metrics', value: any }, cpuSecondsUsage: { __typename?: 'Metrics', value: any }, functionInvocations: { __typename?: 'Metrics', value: any }, postgresVolumeCapacity: { __typename?: 'Metrics', value: any }, postgresVolumeUsage: { __typename?: 'Metrics', value: any }, totalRequests: { __typename?: 'Metrics', value: any }, egressVolume: { __typename?: 'Metrics', value: any } };

export type GetRemoteAppRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRemoteAppRolesQuery = { __typename?: 'query_root', authRoles: Array<{ __typename?: 'authRoles', role: string }> };

export type GetWorkspaceAndProjectQueryVariables = Exact<{
  workspaceSlug: Scalars['String'];
  projectSlug?: InputMaybe<Scalars['String']>;
}>;


export type GetWorkspaceAndProjectQuery = { __typename?: 'query_root', workspaces: Array<{ __typename?: 'workspaces', id: any, name: string, slug: string, creatorUserId?: any | null, workspaceMembers: Array<{ __typename?: 'workspaceMembers', id: any, type: string, user: { __typename?: 'users', id: any, email?: any | null, displayName: string } }>, projects: Array<{ __typename?: 'apps', id: any, slug: string, name: string, repositoryProductionBranch: string, subdomain: string, isProvisioned: boolean, createdAt: any, desiredState: number, nhostBaseFolder: string, providersUpdated?: boolean | null, config?: { __typename?: 'ConfigConfig', hasura: { __typename?: 'ConfigHasura', adminSecret: string } } | null, featureFlags: Array<{ __typename?: 'featureFlags', description: string, id: any, name: string, value: string }>, appStates: Array<{ __typename?: 'appStateHistory', id: any, appId: any, message?: string | null, stateId: number, createdAt: any }>, region: { __typename?: 'regions', id: any, countryCode: string, awsName: string, city: string }, plan: { __typename?: 'plans', id: any, name: string, price: number, isFree: boolean }, githubRepository?: { __typename?: 'githubRepositories', fullName: string } | null, deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, commitMessage?: string | null, commitUserName?: string | null, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, commitUserAvatarUrl?: string | null, deploymentStatus?: string | null }>, creator?: { __typename?: 'users', id: any, email?: any | null, displayName: string } | null }> }> };

export type InsertApplicationMutationVariables = Exact<{
  app: Apps_Insert_Input;
}>;


export type InsertApplicationMutation = { __typename?: 'mutation_root', insertApp?: { __typename?: 'apps', id: any, name: string, slug: string, workspace: { __typename?: 'workspaces', id: any, name: string, slug: string } } | null };

export type PauseApplicationMutationVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type PauseApplicationMutation = { __typename?: 'mutation_root', updateApp?: { __typename?: 'apps', id: any } | null };

export type PrefetchNewAppRegionsFragment = { __typename?: 'regions', id: any, city: string, active: boolean, country: { __typename?: 'countries', code: any, name: string } };

export type PrefetchNewAppPlansFragment = { __typename?: 'plans', id: any, name: string, isDefault: boolean, isFree: boolean, price: number, featureBackupEnabled: boolean, featureCustomDomainsEnabled: boolean, featureMaxDbSize: number };

export type PrefetchNewAppWorkspaceFragment = { __typename?: 'workspaces', id: any, name: string, slug: string, paymentMethods: Array<{ __typename?: 'paymentMethods', id: any }> };

export type PrefetchNewAppQueryVariables = Exact<{ [key: string]: never; }>;


export type PrefetchNewAppQuery = { __typename?: 'query_root', regions: Array<{ __typename?: 'regions', id: any, city: string, active: boolean, country: { __typename?: 'countries', code: any, name: string } }>, plans: Array<{ __typename?: 'plans', id: any, name: string, isDefault: boolean, isFree: boolean, price: number, featureBackupEnabled: boolean, featureCustomDomainsEnabled: boolean, featureMaxDbSize: number }>, workspaces: Array<{ __typename?: 'workspaces', id: any, name: string, slug: string, paymentMethods: Array<{ __typename?: 'paymentMethods', id: any }> }> };

export type GetAuthenticationSettingsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetAuthenticationSettingsQuery = { __typename?: 'query_root', config?: { __typename: 'ConfigConfig', id: 'ConfigConfig', auth?: { __typename: 'ConfigAuth', id: 'ConfigAuth', redirections?: { __typename?: 'ConfigAuthRedirections', clientUrl?: any | null, allowedUrls?: Array<string> | null } | null, totp?: { __typename?: 'ConfigAuthTotp', enabled?: boolean | null, issuer?: string | null } | null, signUp?: { __typename?: 'ConfigAuthSignUp', enabled?: boolean | null } | null, user?: { __typename?: 'ConfigAuthUser', email?: { __typename?: 'ConfigAuthUserEmail', allowed?: Array<any> | null, blocked?: Array<any> | null } | null, emailDomains?: { __typename?: 'ConfigAuthUserEmailDomains', allowed?: Array<string> | null, blocked?: Array<string> | null } | null, gravatar?: { __typename?: 'ConfigAuthUserGravatar', enabled?: boolean | null, default?: string | null, rating?: string | null } | null } | null } | null } | null };

export type EnvironmentVariableFragment = { __typename?: 'ConfigEnvironmentVariable', name: string, value: string, id: string };

export type JwtSecretFragment = { __typename?: 'ConfigJWTSecret', issuer?: string | null, key?: string | null, type?: string | null, jwk_url?: any | null, header?: string | null, claims_namespace_path?: string | null, claims_namespace?: string | null, claims_format?: string | null, audience?: string | null, allowed_skew?: any | null };

export type GetEnvironmentVariablesQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetEnvironmentVariablesQuery = { __typename?: 'query_root', config?: { __typename: 'ConfigConfig', id: 'ConfigConfig', global?: { __typename?: 'ConfigGlobal', environment?: Array<{ __typename?: 'ConfigEnvironmentVariable', name: string, value: string, id: string }> | null } | null, hasura: { __typename?: 'ConfigHasura', adminSecret: string, webhookSecret: string, jwtSecrets?: Array<{ __typename?: 'ConfigJWTSecret', issuer?: string | null, key?: string | null, type?: string | null, jwk_url?: any | null, header?: string | null, claims_namespace_path?: string | null, claims_namespace?: string | null, claims_format?: string | null, audience?: string | null, allowed_skew?: any | null }> | null } } | null };

export type ServiceResourcesFragment = { __typename?: 'ConfigConfig', auth?: { __typename?: 'ConfigAuth', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null, hasura: { __typename?: 'ConfigHasura', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null }, postgres?: { __typename?: 'ConfigPostgres', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null, storage?: { __typename?: 'ConfigStorage', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null };

export type GetResourcesQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetResourcesQuery = { __typename?: 'query_root', config?: { __typename?: 'ConfigConfig', auth?: { __typename?: 'ConfigAuth', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null, hasura: { __typename?: 'ConfigHasura', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null }, postgres?: { __typename?: 'ConfigPostgres', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null, storage?: { __typename?: 'ConfigStorage', resources?: { __typename?: 'ConfigResources', compute: { __typename?: 'ConfigResourcesCompute', cpu: any, memory: any } } | null } | null } | null };

export type PermissionVariableFragment = { __typename?: 'ConfigAuthsessionaccessTokenCustomClaims', key: string, value: string, id: string };

export type GetRolesPermissionsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetRolesPermissionsQuery = { __typename?: 'query_root', config?: { __typename: 'ConfigConfig', id: 'ConfigConfig', auth?: { __typename?: 'ConfigAuth', user?: { __typename?: 'ConfigAuthUser', roles?: { __typename?: 'ConfigAuthUserRoles', allowed?: Array<any> | null, default?: any | null } | null } | null, session?: { __typename?: 'ConfigAuthSession', accessToken?: { __typename?: 'ConfigAuthSessionAccessToken', customClaims?: Array<{ __typename?: 'ConfigAuthsessionaccessTokenCustomClaims', key: string, value: string, id: string }> | null } | null } | null } | null } | null };

export type DeleteSecretMutationVariables = Exact<{
  appId: Scalars['uuid'];
  name: Scalars['String'];
}>;


export type DeleteSecretMutation = { __typename?: 'mutation_root', deleteSecret: { __typename?: 'ConfigEnvironmentVariable', name: string } };

export type SecretFragment = { __typename?: 'ConfigEnvironmentVariable', name: string };

export type GetSecretsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetSecretsQuery = { __typename?: 'query_root', appSecrets: Array<{ __typename?: 'ConfigEnvironmentVariable', name: string }> };

export type InsertSecretMutationVariables = Exact<{
  appId: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
}>;


export type InsertSecretMutation = { __typename?: 'mutation_root', insertSecret: { __typename?: 'ConfigEnvironmentVariable', name: string } };

export type UpdateSecretMutationVariables = Exact<{
  appId: Scalars['uuid'];
  secret: ConfigEnvironmentVariableInsertInput;
}>;


export type UpdateSecretMutation = { __typename?: 'mutation_root', updateSecret: { __typename?: 'ConfigEnvironmentVariable', name: string } };

export type GetSignInMethodsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetSignInMethodsQuery = { __typename?: 'query_root', config?: { __typename: 'ConfigConfig', id: 'ConfigConfig', provider?: { __typename: 'ConfigProvider', id: 'ConfigProvider', sms?: { __typename?: 'ConfigSms', accountSid: string, authToken: string, messagingServiceId: string, provider?: string | null } | null } | null, auth?: { __typename: 'ConfigAuth', id: 'ConfigAuth', method?: { __typename?: 'ConfigAuthMethod', emailPassword?: { __typename?: 'ConfigAuthMethodEmailPassword', emailVerificationRequired?: boolean | null, hibpEnabled?: boolean | null } | null, emailPasswordless?: { __typename?: 'ConfigAuthMethodEmailPasswordless', enabled?: boolean | null } | null, smsPasswordless?: { __typename?: 'ConfigAuthMethodSmsPasswordless', enabled?: boolean | null } | null, anonymous?: { __typename?: 'ConfigAuthMethodAnonymous', enabled?: boolean | null } | null, webauthn?: { __typename?: 'ConfigAuthMethodWebauthn', enabled?: boolean | null } | null, oauth?: { __typename?: 'ConfigAuthMethodOauth', apple?: { __typename?: 'ConfigAuthMethodOauthApple', enabled?: boolean | null, clientId?: string | null, keyId?: string | null, teamId?: string | null, privateKey?: string | null } | null, discord?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, facebook?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, github?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, google?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, linkedin?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, spotify?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, twitch?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, twitter?: { __typename?: 'ConfigAuthMethodOauthTwitter', enabled?: boolean | null, consumerKey?: string | null, consumerSecret?: string | null } | null, windowslive?: { __typename?: 'ConfigStandardOauthProviderWithScope', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, scope?: Array<string> | null } | null, workos?: { __typename?: 'ConfigAuthMethodOauthWorkos', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, connection?: string | null, organization?: string | null } | null, azuread?: { __typename?: 'ConfigAuthMethodOauthAzuread', enabled?: boolean | null, clientId?: string | null, clientSecret?: string | null, tenant?: string | null } | null } | null } | null } | null } | null };

export type GetSmtpSettingsQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetSmtpSettingsQuery = { __typename?: 'query_root', config?: { __typename: 'ConfigConfig', id: 'ConfigConfig', provider?: { __typename: 'ConfigProvider', id: 'ConfigProvider', smtp?: { __typename?: 'ConfigSmtp', host: string, method: string, port: any, secure: boolean, sender: string, user: string } | null } | null } | null };

export type UpdateConfigMutationVariables = Exact<{
  appId: Scalars['uuid'];
  config: ConfigConfigUpdateInput;
}>;


export type UpdateConfigMutation = { __typename?: 'mutation_root', updateConfig: { __typename?: 'ConfigConfig', id: 'ConfigConfig' } };

export type UnpauseApplicationMutationVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type UnpauseApplicationMutation = { __typename?: 'mutation_root', updateApp?: { __typename?: 'apps', id: any } | null };

export type UpdateApplicationMutationVariables = Exact<{
  appId: Scalars['uuid'];
  app: Apps_Set_Input;
}>;


export type UpdateApplicationMutation = { __typename?: 'mutation_root', updateApp?: { __typename?: 'apps', name: string, id: any, slug: string } | null };

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'query_root', countries: Array<{ __typename?: 'countries', code: any, name: string }> };

export type ResetPostgresPasswordMutationVariables = Exact<{
  appID: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ResetPostgresPasswordMutation = { __typename?: 'mutation_root', resetPostgresPassword: boolean };

export type DeploymentRowFragment = { __typename?: 'deployments', id: any, commitSHA: string, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, commitUserName?: string | null, commitUserAvatarUrl?: string | null, commitMessage?: string | null };

export type ScheduledOrPendingDeploymentsSubSubscriptionVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type ScheduledOrPendingDeploymentsSubSubscription = { __typename?: 'subscription_root', deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, commitUserName?: string | null, commitUserAvatarUrl?: string | null, commitMessage?: string | null }> };

export type LatestLiveDeploymentSubSubscriptionVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type LatestLiveDeploymentSubSubscription = { __typename?: 'subscription_root', deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, commitUserName?: string | null, commitUserAvatarUrl?: string | null, commitMessage?: string | null }> };

export type InsertDeploymentMutationVariables = Exact<{
  object: Deployments_Insert_Input;
}>;


export type InsertDeploymentMutation = { __typename?: 'mutation_root', insertDeployment?: { __typename?: 'deployments', id: any, commitSHA: string, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, commitUserName?: string | null, commitUserAvatarUrl?: string | null, commitMessage?: string | null } | null };

export type GetDeploymentsSubSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type GetDeploymentsSubSubscription = { __typename?: 'subscription_root', deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, commitUserName?: string | null, commitUserAvatarUrl?: string | null, commitMessage?: string | null }> };

export type DeploymentSubSubscriptionVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeploymentSubSubscription = { __typename?: 'subscription_root', deployment?: { __typename?: 'deployments', id: any, commitMessage?: string | null, commitSHA: string, commitUserName?: string | null, commitUserAvatarUrl?: string | null, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, deploymentStatus?: string | null, metadataStartedAt?: any | null, metadataEndedAt?: any | null, metadataStatus?: string | null, migrationsStartedAt?: any | null, migrationsEndedAt?: any | null, migrationsStatus?: string | null, functionsStartedAt?: any | null, functionsEndedAt?: any | null, functionsStatus?: string | null, deploymentLogs: Array<{ __typename?: 'deploymentLogs', id: any, createdAt: any, message: string }> } | null };

export type GetBucketsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBucketsQuery = { __typename?: 'query_root', buckets: Array<{ __typename?: 'buckets', id: string, maxUploadFileSize: number }> };

export type GetFilesQueryVariables = Exact<{
  where?: InputMaybe<Files_Bool_Exp>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By> | Files_Order_By>;
}>;


export type GetFilesQuery = { __typename?: 'query_root', files: Array<{ __typename?: 'files', id: any, bucketId: string, createdAt: any, updatedAt: any, name?: string | null, size?: number | null, mimeType?: string | null, etag?: string | null, isUploaded?: boolean | null, uploadedByUserId?: any | null }> };

export type GetFilesAggregateQueryVariables = Exact<{
  where?: InputMaybe<Files_Bool_Exp>;
}>;


export type GetFilesAggregateQuery = { __typename?: 'query_root', filesAggregate: { __typename?: 'files_aggregate', aggregate?: { __typename?: 'files_aggregate_fields', count: number } | null } };

export type ProjectFragment = { __typename?: 'apps', id: any, slug: string, name: string, repositoryProductionBranch: string, subdomain: string, isProvisioned: boolean, createdAt: any, desiredState: number, nhostBaseFolder: string, providersUpdated?: boolean | null, config?: { __typename?: 'ConfigConfig', hasura: { __typename?: 'ConfigHasura', adminSecret: string } } | null, featureFlags: Array<{ __typename?: 'featureFlags', description: string, id: any, name: string, value: string }>, appStates: Array<{ __typename?: 'appStateHistory', id: any, appId: any, message?: string | null, stateId: number, createdAt: any }>, region: { __typename?: 'regions', id: any, countryCode: string, awsName: string, city: string }, plan: { __typename?: 'plans', id: any, name: string, price: number, isFree: boolean }, githubRepository?: { __typename?: 'githubRepositories', fullName: string } | null, deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, commitMessage?: string | null, commitUserName?: string | null, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, commitUserAvatarUrl?: string | null, deploymentStatus?: string | null }>, creator?: { __typename?: 'users', id: any, email?: any | null, displayName: string } | null };

export type WorkspaceFragment = { __typename?: 'workspaces', id: any, name: string, slug: string, creatorUserId?: any | null, workspaceMembers: Array<{ __typename?: 'workspaceMembers', id: any, type: string, user: { __typename?: 'users', id: any, email?: any | null, displayName: string } }>, projects: Array<{ __typename?: 'apps', id: any, slug: string, name: string, repositoryProductionBranch: string, subdomain: string, isProvisioned: boolean, createdAt: any, desiredState: number, nhostBaseFolder: string, providersUpdated?: boolean | null, config?: { __typename?: 'ConfigConfig', hasura: { __typename?: 'ConfigHasura', adminSecret: string } } | null, featureFlags: Array<{ __typename?: 'featureFlags', description: string, id: any, name: string, value: string }>, appStates: Array<{ __typename?: 'appStateHistory', id: any, appId: any, message?: string | null, stateId: number, createdAt: any }>, region: { __typename?: 'regions', id: any, countryCode: string, awsName: string, city: string }, plan: { __typename?: 'plans', id: any, name: string, price: number, isFree: boolean }, githubRepository?: { __typename?: 'githubRepositories', fullName: string } | null, deployments: Array<{ __typename?: 'deployments', id: any, commitSHA: string, commitMessage?: string | null, commitUserName?: string | null, deploymentStartedAt?: any | null, deploymentEndedAt?: any | null, commitUserAvatarUrl?: string | null, deploymentStatus?: string | null }>, creator?: { __typename?: 'users', id: any, email?: any | null, displayName: string } | null }> };

export type GithubRepositoryFragment = { __typename?: 'githubRepositories', id: any, name: string, fullName: string, private: boolean, githubAppInstallation: { __typename?: 'githubAppInstallations', id: any, accountLogin?: string | null, accountType?: string | null, accountAvatarUrl?: string | null } };

export type GetGithubRepositoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGithubRepositoriesQuery = { __typename?: 'query_root', githubRepositories: Array<{ __typename?: 'githubRepositories', id: any, name: string, fullName: string, private: boolean, githubAppInstallation: { __typename?: 'githubAppInstallations', id: any, accountLogin?: string | null, accountType?: string | null, accountAvatarUrl?: string | null } }>, githubAppInstallations: Array<{ __typename?: 'githubAppInstallations', id: any, accountLogin?: string | null, accountType?: string | null, accountAvatarUrl?: string | null }> };

export type GetProjectLogsQueryVariables = Exact<{
  appID: Scalars['String'];
  service?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Timestamp']>;
  to?: InputMaybe<Scalars['Timestamp']>;
}>;


export type GetProjectLogsQuery = { __typename?: 'query_root', logs: Array<{ __typename?: 'Log', log: string, service: string, timestamp: any }> };

export type GetLogsSubscriptionSubscriptionVariables = Exact<{
  appID: Scalars['String'];
  service?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Timestamp']>;
}>;


export type GetLogsSubscriptionSubscription = { __typename?: 'subscription_root', logs: Array<{ __typename?: 'Log', log: string, service: string, timestamp: any }> };

export type DeletePaymentMethodMutationVariables = Exact<{
  paymentMethodId: Scalars['uuid'];
}>;


export type DeletePaymentMethodMutation = { __typename?: 'mutation_root', deletePaymentMethod?: { __typename?: 'paymentMethods', id: any } | null };

export type GetPaymentMethodsFragment = { __typename?: 'paymentMethods', id: any, createdAt: any, cardBrand: string, cardLast4: string, cardExpMonth: number, cardExpYear: number, isDefault: boolean, workspace: { __typename?: 'workspaces', id: any, apps: Array<{ __typename?: 'apps', id: any, plan: { __typename?: 'plans', isFree: boolean } }> } };

export type GetPaymentMethodsQueryVariables = Exact<{
  workspaceId: Scalars['uuid'];
}>;


export type GetPaymentMethodsQuery = { __typename?: 'query_root', paymentMethods: Array<{ __typename?: 'paymentMethods', id: any, createdAt: any, cardBrand: string, cardLast4: string, cardExpMonth: number, cardExpYear: number, isDefault: boolean, workspace: { __typename?: 'workspaces', id: any, apps: Array<{ __typename?: 'apps', id: any, plan: { __typename?: 'plans', isFree: boolean } }> } }> };

export type InsertNewPaymentMethodMutationVariables = Exact<{
  workspaceId: Scalars['uuid'];
  paymentMethod: PaymentMethods_Insert_Input;
}>;


export type InsertNewPaymentMethodMutation = { __typename?: 'mutation_root', updatePaymentMethods?: { __typename?: 'paymentMethods_mutation_response', affected_rows: number } | null, insertPaymentMethod?: { __typename?: 'paymentMethods', id: any } | null };

export type SetNewDefaultPaymentMethodMutationVariables = Exact<{
  workspaceId: Scalars['uuid'];
  paymentMethodId: Scalars['uuid'];
}>;


export type SetNewDefaultPaymentMethodMutation = { __typename?: 'mutation_root', setAllPaymentMethodToDefaultFalse?: { __typename?: 'paymentMethods_mutation_response', affected_rows: number } | null, updatePaymentMethods?: { __typename?: 'paymentMethods_mutation_response', affected_rows: number } | null };

export type GetPlansQueryVariables = Exact<{
  where?: InputMaybe<Plans_Bool_Exp>;
}>;


export type GetPlansQuery = { __typename?: 'query_root', plans: Array<{ __typename?: 'plans', id: any, name: string, isFree: boolean, price: number }> };

export type RestoreApplicationDatabaseMutationVariables = Exact<{
  appId: Scalars['String'];
  backupId: Scalars['String'];
}>;


export type RestoreApplicationDatabaseMutation = { __typename?: 'mutation_root', restoreApplicationDatabase: boolean };

export type RemoteAppDeleteUserMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type RemoteAppDeleteUserMutation = { __typename?: 'mutation_root', deleteUser?: { __typename?: 'users', id: any } | null };

export type GetAppFunctionsMetadataQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetAppFunctionsMetadataQuery = { __typename?: 'query_root', app?: { __typename?: 'apps', id: any, metadataFunctions: any } | null };

export type GetRemoteAppMetricsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRemoteAppMetricsQuery = { __typename?: 'query_root', filesAggregate: { __typename?: 'files_aggregate', aggregate?: { __typename?: 'files_aggregate_fields', count: number, sum?: { __typename?: 'files_sum_fields', size?: number | null } | null } | null }, usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type RemoteAppGetUsersFragment = { __typename?: 'users', id: any, createdAt: any, displayName: string, avatarUrl: string, email?: any | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, disabled: boolean, defaultRole: string, lastSeen?: any | null, locale: string, roles: Array<{ __typename?: 'authUserRoles', id: any, role: string }>, userProviders: Array<{ __typename?: 'authUserProviders', id: any, providerId: string }> };

export type RemoteAppGetUsersQueryVariables = Exact<{
  where: Users_Bool_Exp;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type RemoteAppGetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, displayName: string, avatarUrl: string, email?: any | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, disabled: boolean, defaultRole: string, lastSeen?: any | null, locale: string, roles: Array<{ __typename?: 'authUserRoles', id: any, role: string }>, userProviders: Array<{ __typename?: 'authUserProviders', id: any, providerId: string }> }>, filteredUsersAggreggate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null }, usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type RemoteAppGetUsersCustomQueryVariables = Exact<{
  where: Users_Bool_Exp;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type RemoteAppGetUsersCustomQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, displayName: string, phoneNumber?: string | null, avatarUrl: string, email?: any | null, disabled: boolean, defaultRole: string, isAnonymous: boolean, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type RemoteAppGetUsersWholeQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type RemoteAppGetUsersWholeQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, displayName: string, avatarUrl: string, email?: any | null, emailVerified: boolean, phoneNumber?: string | null, phoneNumberVerified: boolean, disabled: boolean, defaultRole: string, lastSeen?: any | null, locale: string, roles: Array<{ __typename?: 'authUserRoles', id: any, role: string }>, userProviders: Array<{ __typename?: 'authUserProviders', id: any, providerId: string }> }>, usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type TotalUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalUsersQuery = { __typename?: 'query_root', usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type TotalUsersByDateQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type TotalUsersByDateQuery = { __typename?: 'query_root', usersAggregate: { __typename?: 'users_aggregate', aggregate?: { __typename?: 'users_aggregate_fields', count: number } | null } };

export type UpdateRemoteAppUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user: Users_Set_Input;
}>;


export type UpdateRemoteAppUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type InsertRemoteAppUserRolesMutationVariables = Exact<{
  roles: Array<AuthUserRoles_Insert_Input> | AuthUserRoles_Insert_Input;
}>;


export type InsertRemoteAppUserRolesMutation = { __typename?: 'mutation_root', insertAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type DeleteRemoteAppUserRolesMutationVariables = Exact<{
  userId: Scalars['uuid'];
  roles: Array<Scalars['String']> | Scalars['String'];
}>;


export type DeleteRemoteAppUserRolesMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type GetDatabaseConnectionInfoQueryVariables = Exact<{
  appId: Scalars['uuid'];
}>;


export type GetDatabaseConnectionInfoQuery = { __typename?: 'query_root', systemConfig?: { __typename?: 'ConfigSystemConfig', postgres: { __typename?: 'ConfigSystemConfigPostgres', database: string } } | null };

export type GetFreeAndActiveProjectsQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetFreeAndActiveProjectsQuery = { __typename?: 'query_root', freeAndActiveProjects: Array<{ __typename?: 'apps', id: any }> };

export type InsertFeedbackOneMutationVariables = Exact<{
  feedback: Feedback_Insert_Input;
}>;


export type InsertFeedbackOneMutation = { __typename?: 'mutation_root', insertFeedbackOne?: { __typename?: 'feedback', id: number } | null };

export type DeleteWorkspaceMemberInvitesMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteWorkspaceMemberInvitesMutation = { __typename?: 'mutation_root', deleteWorkspaceMemberInvites?: { __typename?: 'workspaceMemberInvites_mutation_response', affected_rows: number } | null };

export type GetWorkspaceMemberInvitesToManageQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type GetWorkspaceMemberInvitesToManageQuery = { __typename?: 'query_root', workspaceMemberInvites: Array<{ __typename?: 'workspaceMemberInvites', id: any, email: any, userByEmail?: { __typename?: 'users', id: any } | null, workspace: { __typename?: 'workspaces', id: any, name: string, slug: string } }> };

export type InsertWorkspaceMemberInviteMutationVariables = Exact<{
  workspaceMemberInvite: WorkspaceMemberInvites_Insert_Input;
}>;


export type InsertWorkspaceMemberInviteMutation = { __typename?: 'mutation_root', insertWorkspaceMemberInvite?: { __typename?: 'workspaceMemberInvites', id: any } | null };

export type UpdateWorkspaceMemberInviteMutationVariables = Exact<{
  id: Scalars['uuid'];
  workspaceMemberInvite: WorkspaceMemberInvites_Set_Input;
}>;


export type UpdateWorkspaceMemberInviteMutation = { __typename?: 'mutation_root', updateWorkspaceMemberInvites?: { __typename?: 'workspaceMemberInvites_mutation_response', affected_rows: number } | null };

export type DeleteWorkspaceMemberMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteWorkspaceMemberMutation = { __typename?: 'mutation_root', deleteWorkspaceMember?: { __typename?: 'workspaceMembers', id: any } | null };

export type GetWorkspaceMembersWorkspaceMemberFragment = { __typename?: 'workspaceMembers', id: any, type: string, user: { __typename?: 'users', id: any, displayName: string, avatarUrl: string, email?: any | null } };

export type GetWorkspaceMembersWorkspaceMemberInviteFragment = { __typename?: 'workspaceMemberInvites', id: any, email: any, memberType: string };

export type GetWorkspaceMembersQueryVariables = Exact<{
  workspaceId: Scalars['uuid'];
}>;


export type GetWorkspaceMembersQuery = { __typename?: 'query_root', workspace?: { __typename?: 'workspaces', id: any, creatorUser?: { __typename?: 'users', id: any } | null, workspaceMembers: Array<{ __typename?: 'workspaceMembers', id: any, type: string, user: { __typename?: 'users', id: any, displayName: string, avatarUrl: string, email?: any | null } }>, workspaceMemberInvites: Array<{ __typename?: 'workspaceMemberInvites', id: any, email: any, memberType: string }> } | null };

export type UpdateWorkspaceMemberMutationVariables = Exact<{
  id: Scalars['uuid'];
  workspaceMember: WorkspaceMembers_Set_Input;
}>;


export type UpdateWorkspaceMemberMutation = { __typename?: 'mutation_root', updateWorkspaceMember?: { __typename?: 'workspaceMembers', id: any } | null };

export type DeleteWorkspaceMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteWorkspaceMutation = { __typename?: 'mutation_root', deleteWorkspace?: { __typename?: 'workspaces', id: any } | null };

export type InsertWorkspaceMutationVariables = Exact<{
  workspace: Workspaces_Insert_Input;
}>;


export type InsertWorkspaceMutation = { __typename?: 'mutation_root', insertWorkspace?: { __typename?: 'workspaces', name: string, id: any } | null };

export type UpdateWorkspaceMutationVariables = Exact<{
  id: Scalars['uuid'];
  workspace: Workspaces_Set_Input;
}>;


export type UpdateWorkspaceMutation = { __typename?: 'mutation_root', updateWorkspace?: { __typename?: 'workspaces', id: any, name: string, email: string, companyName: string, addressLine1: string, addressLine2: string, addressPostalCode: string, addressCity: string, addressCountryCode?: string | null, slug: string, taxIdType: string, taxIdValue: string } | null };

export const GetAppPlanAndGlobalPlansAppFragmentDoc = gql`
    fragment getAppPlanAndGlobalPlansApp on apps {
  id
  subdomain
  workspace {
    id
    paymentMethods {
      id
    }
  }
  plan {
    id
    name
  }
}
    `;
export const GetAppPlanAndGlobalPlansPlanFragmentDoc = gql`
    fragment getAppPlanAndGlobalPlansPlan on plans {
  id
  name
  isFree
  price
  featureMaxDbSize
}
    `;
export const PrefetchNewAppRegionsFragmentDoc = gql`
    fragment PrefetchNewAppRegions on regions {
  id
  city
  active
  country {
    code
    name
  }
}
    `;
export const PrefetchNewAppPlansFragmentDoc = gql`
    fragment PrefetchNewAppPlans on plans {
  id
  name
  isDefault
  isFree
  price
  featureBackupEnabled
  featureCustomDomainsEnabled
  featureMaxDbSize
}
    `;
export const PrefetchNewAppWorkspaceFragmentDoc = gql`
    fragment PrefetchNewAppWorkspace on workspaces {
  id
  name
  slug
  paymentMethods {
    id
  }
}
    `;
export const EnvironmentVariableFragmentDoc = gql`
    fragment EnvironmentVariable on ConfigEnvironmentVariable {
  id: name
  name
  value
}
    `;
export const JwtSecretFragmentDoc = gql`
    fragment JWTSecret on ConfigJWTSecret {
  issuer
  key
  type
  jwk_url
  header
  claims_namespace_path
  claims_namespace
  claims_format
  audience
  allowed_skew
}
    `;
export const ServiceResourcesFragmentDoc = gql`
    fragment ServiceResources on ConfigConfig {
  auth {
    resources {
      compute {
        cpu
        memory
      }
    }
  }
  hasura {
    resources {
      compute {
        cpu
        memory
      }
    }
  }
  postgres {
    resources {
      compute {
        cpu
        memory
      }
    }
  }
  storage {
    resources {
      compute {
        cpu
        memory
      }
    }
  }
}
    `;
export const PermissionVariableFragmentDoc = gql`
    fragment PermissionVariable on ConfigAuthsessionaccessTokenCustomClaims {
  id: key
  key
  value
}
    `;
export const SecretFragmentDoc = gql`
    fragment Secret on ConfigEnvironmentVariable {
  name
}
    `;
export const DeploymentRowFragmentDoc = gql`
    fragment DeploymentRow on deployments {
  id
  commitSHA
  deploymentStartedAt
  deploymentEndedAt
  deploymentStatus
  commitUserName
  commitUserAvatarUrl
  commitMessage
}
    `;
export const ProjectFragmentDoc = gql`
    fragment Project on apps {
  id
  slug
  name
  repositoryProductionBranch
  subdomain
  isProvisioned
  createdAt
  desiredState
  nhostBaseFolder
  providersUpdated
  config(resolve: true) {
    hasura {
      adminSecret
    }
  }
  featureFlags {
    description
    id
    name
    value
  }
  appStates(order_by: {createdAt: desc}, limit: 1) {
    id
    appId
    message
    stateId
    createdAt
  }
  region {
    id
    countryCode
    awsName
    city
  }
  plan {
    id
    name
    price
    isFree
  }
  githubRepository {
    fullName
  }
  deployments(limit: 4, order_by: {deploymentEndedAt: desc}) {
    id
    commitSHA
    commitMessage
    commitUserName
    deploymentStartedAt
    deploymentEndedAt
    commitUserAvatarUrl
    deploymentStatus
  }
  creator {
    id
    email
    displayName
  }
}
    `;
export const WorkspaceFragmentDoc = gql`
    fragment Workspace on workspaces {
  id
  name
  slug
  creatorUserId
  workspaceMembers {
    id
    user {
      id
      email
      displayName
    }
    type
  }
  projects: apps(order_by: {name: asc}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export const GithubRepositoryFragmentDoc = gql`
    fragment GithubRepository on githubRepositories {
  id
  name
  fullName
  private
  githubAppInstallation {
    id
    accountLogin
    accountType
    accountAvatarUrl
  }
}
    `;
export const GetPaymentMethodsFragmentDoc = gql`
    fragment getPaymentMethods on paymentMethods {
  id
  createdAt
  cardBrand
  cardLast4
  cardExpMonth
  cardExpYear
  isDefault
  workspace {
    id
    apps {
      id
      plan {
        isFree
      }
    }
  }
}
    `;
export const RemoteAppGetUsersFragmentDoc = gql`
    fragment RemoteAppGetUsers on users {
  id
  createdAt
  displayName
  avatarUrl
  email
  emailVerified
  phoneNumber
  phoneNumberVerified
  disabled
  defaultRole
  lastSeen
  locale
  roles {
    id
    role
  }
  userProviders {
    id
    providerId
  }
  disabled
}
    `;
export const GetWorkspaceMembersWorkspaceMemberFragmentDoc = gql`
    fragment getWorkspaceMembersWorkspaceMember on workspaceMembers {
  id
  type
  user {
    id
    displayName
    avatarUrl
    email
  }
}
    `;
export const GetWorkspaceMembersWorkspaceMemberInviteFragmentDoc = gql`
    fragment getWorkspaceMembersWorkspaceMemberInvite on workspaceMemberInvites {
  id
  email
  memberType
}
    `;
export const DeleteApplicationDocument = gql`
    mutation deleteApplication($appId: uuid!) {
  deleteApp(id: $appId) {
    id
  }
}
    `;
export type DeleteApplicationMutationFn = Apollo.MutationFunction<DeleteApplicationMutation, DeleteApplicationMutationVariables>;

/**
 * __useDeleteApplicationMutation__
 *
 * To run a mutation, you first call `useDeleteApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteApplicationMutation, { data, loading, error }] = useDeleteApplicationMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteApplicationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteApplicationMutation, DeleteApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteApplicationMutation, DeleteApplicationMutationVariables>(DeleteApplicationDocument, options);
      }
export type DeleteApplicationMutationHookResult = ReturnType<typeof useDeleteApplicationMutation>;
export type DeleteApplicationMutationResult = Apollo.MutationResult<DeleteApplicationMutation>;
export type DeleteApplicationMutationOptions = Apollo.BaseMutationOptions<DeleteApplicationMutation, DeleteApplicationMutationVariables>;
export const GetAllWorkspacesAndProjectsDocument = gql`
    query GetAllWorkspacesAndProjects {
  workspaces(order_by: {name: asc}) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;

/**
 * __useGetAllWorkspacesAndProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllWorkspacesAndProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllWorkspacesAndProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllWorkspacesAndProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllWorkspacesAndProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllWorkspacesAndProjectsQuery, GetAllWorkspacesAndProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllWorkspacesAndProjectsQuery, GetAllWorkspacesAndProjectsQueryVariables>(GetAllWorkspacesAndProjectsDocument, options);
      }
export function useGetAllWorkspacesAndProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllWorkspacesAndProjectsQuery, GetAllWorkspacesAndProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllWorkspacesAndProjectsQuery, GetAllWorkspacesAndProjectsQueryVariables>(GetAllWorkspacesAndProjectsDocument, options);
        }
export type GetAllWorkspacesAndProjectsQueryHookResult = ReturnType<typeof useGetAllWorkspacesAndProjectsQuery>;
export type GetAllWorkspacesAndProjectsLazyQueryHookResult = ReturnType<typeof useGetAllWorkspacesAndProjectsLazyQuery>;
export type GetAllWorkspacesAndProjectsQueryResult = Apollo.QueryResult<GetAllWorkspacesAndProjectsQuery, GetAllWorkspacesAndProjectsQueryVariables>;
export function refetchGetAllWorkspacesAndProjectsQuery(variables?: GetAllWorkspacesAndProjectsQueryVariables) {
      return { query: GetAllWorkspacesAndProjectsDocument, variables: variables }
    }
export const GetAppPlanAndGlobalPlansDocument = gql`
    query getAppPlanAndGlobalPlans($workspaceSlug: String!, $appSlug: String!) {
  apps(where: {workspace: {slug: {_eq: $workspaceSlug}}, slug: {_eq: $appSlug}}) {
    ...getAppPlanAndGlobalPlansApp
  }
  plans {
    ...getAppPlanAndGlobalPlansPlan
  }
}
    ${GetAppPlanAndGlobalPlansAppFragmentDoc}
${GetAppPlanAndGlobalPlansPlanFragmentDoc}`;

/**
 * __useGetAppPlanAndGlobalPlansQuery__
 *
 * To run a query within a React component, call `useGetAppPlanAndGlobalPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppPlanAndGlobalPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppPlanAndGlobalPlansQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      appSlug: // value for 'appSlug'
 *   },
 * });
 */
export function useGetAppPlanAndGlobalPlansQuery(baseOptions: Apollo.QueryHookOptions<GetAppPlanAndGlobalPlansQuery, GetAppPlanAndGlobalPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppPlanAndGlobalPlansQuery, GetAppPlanAndGlobalPlansQueryVariables>(GetAppPlanAndGlobalPlansDocument, options);
      }
export function useGetAppPlanAndGlobalPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppPlanAndGlobalPlansQuery, GetAppPlanAndGlobalPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppPlanAndGlobalPlansQuery, GetAppPlanAndGlobalPlansQueryVariables>(GetAppPlanAndGlobalPlansDocument, options);
        }
export type GetAppPlanAndGlobalPlansQueryHookResult = ReturnType<typeof useGetAppPlanAndGlobalPlansQuery>;
export type GetAppPlanAndGlobalPlansLazyQueryHookResult = ReturnType<typeof useGetAppPlanAndGlobalPlansLazyQuery>;
export type GetAppPlanAndGlobalPlansQueryResult = Apollo.QueryResult<GetAppPlanAndGlobalPlansQuery, GetAppPlanAndGlobalPlansQueryVariables>;
export function refetchGetAppPlanAndGlobalPlansQuery(variables: GetAppPlanAndGlobalPlansQueryVariables) {
      return { query: GetAppPlanAndGlobalPlansDocument, variables: variables }
    }
export const GetApplicationBackupsDocument = gql`
    query getApplicationBackups($appId: uuid!) {
  app(id: $appId) {
    backups(order_by: {createdAt: desc}) {
      id
      size
      createdAt
      completedAt
    }
  }
}
    `;

/**
 * __useGetApplicationBackupsQuery__
 *
 * To run a query within a React component, call `useGetApplicationBackupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationBackupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationBackupsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetApplicationBackupsQuery(baseOptions: Apollo.QueryHookOptions<GetApplicationBackupsQuery, GetApplicationBackupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicationBackupsQuery, GetApplicationBackupsQueryVariables>(GetApplicationBackupsDocument, options);
      }
export function useGetApplicationBackupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicationBackupsQuery, GetApplicationBackupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicationBackupsQuery, GetApplicationBackupsQueryVariables>(GetApplicationBackupsDocument, options);
        }
export type GetApplicationBackupsQueryHookResult = ReturnType<typeof useGetApplicationBackupsQuery>;
export type GetApplicationBackupsLazyQueryHookResult = ReturnType<typeof useGetApplicationBackupsLazyQuery>;
export type GetApplicationBackupsQueryResult = Apollo.QueryResult<GetApplicationBackupsQuery, GetApplicationBackupsQueryVariables>;
export function refetchGetApplicationBackupsQuery(variables: GetApplicationBackupsQueryVariables) {
      return { query: GetApplicationBackupsDocument, variables: variables }
    }
export const GetApplicationPlanDocument = gql`
    query getApplicationPlan($workspace: String!, $slug: String!) {
  apps(where: {workspace: {slug: {_eq: $workspace}}, slug: {_eq: $slug}}) {
    id
    subdomain
    plan {
      name
      price
      upatedAt
      featureMaxDbSize
    }
  }
}
    `;

/**
 * __useGetApplicationPlanQuery__
 *
 * To run a query within a React component, call `useGetApplicationPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationPlanQuery({
 *   variables: {
 *      workspace: // value for 'workspace'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetApplicationPlanQuery(baseOptions: Apollo.QueryHookOptions<GetApplicationPlanQuery, GetApplicationPlanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicationPlanQuery, GetApplicationPlanQueryVariables>(GetApplicationPlanDocument, options);
      }
export function useGetApplicationPlanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicationPlanQuery, GetApplicationPlanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicationPlanQuery, GetApplicationPlanQueryVariables>(GetApplicationPlanDocument, options);
        }
export type GetApplicationPlanQueryHookResult = ReturnType<typeof useGetApplicationPlanQuery>;
export type GetApplicationPlanLazyQueryHookResult = ReturnType<typeof useGetApplicationPlanLazyQuery>;
export type GetApplicationPlanQueryResult = Apollo.QueryResult<GetApplicationPlanQuery, GetApplicationPlanQueryVariables>;
export function refetchGetApplicationPlanQuery(variables: GetApplicationPlanQueryVariables) {
      return { query: GetApplicationPlanDocument, variables: variables }
    }
export const GetApplicationStateDocument = gql`
    query getApplicationState($appId: uuid!) {
  app(id: $appId) {
    id
    name
    appStates(order_by: {createdAt: desc}, limit: 10) {
      id
      appId
      message
      stateId
      createdAt
    }
  }
}
    `;

/**
 * __useGetApplicationStateQuery__
 *
 * To run a query within a React component, call `useGetApplicationStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationStateQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetApplicationStateQuery(baseOptions: Apollo.QueryHookOptions<GetApplicationStateQuery, GetApplicationStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetApplicationStateQuery, GetApplicationStateQueryVariables>(GetApplicationStateDocument, options);
      }
export function useGetApplicationStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetApplicationStateQuery, GetApplicationStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetApplicationStateQuery, GetApplicationStateQueryVariables>(GetApplicationStateDocument, options);
        }
export type GetApplicationStateQueryHookResult = ReturnType<typeof useGetApplicationStateQuery>;
export type GetApplicationStateLazyQueryHookResult = ReturnType<typeof useGetApplicationStateLazyQuery>;
export type GetApplicationStateQueryResult = Apollo.QueryResult<GetApplicationStateQuery, GetApplicationStateQueryVariables>;
export function refetchGetApplicationStateQuery(variables: GetApplicationStateQueryVariables) {
      return { query: GetApplicationStateDocument, variables: variables }
    }
export const GetProjectMetricsDocument = gql`
    query GetProjectMetrics($appId: String!, $subdomain: String!, $from: Timestamp, $to: Timestamp) {
  logsVolume: getLogsVolume(appID: $appId, from: $from, to: $to) {
    value
  }
  cpuSecondsUsage: getCPUSecondsUsage(appID: $appId, from: $from, to: $to) {
    value
  }
  functionInvocations: getFunctionsInvocations(
    appID: $appId
    from: $from
    to: $to
  ) {
    value
  }
  postgresVolumeCapacity: getPostgresVolumeCapacity(appID: $appId) {
    value
  }
  postgresVolumeUsage: getPostgresVolumeUsage(appID: $appId) {
    value
  }
  totalRequests: getTotalRequests(appID: $appId, from: $from, to: $to) {
    value
  }
  egressVolume: getEgressVolume(
    appID: $appId
    subdomain: $subdomain
    from: $from
    to: $to
  ) {
    value
  }
}
    `;

/**
 * __useGetProjectMetricsQuery__
 *
 * To run a query within a React component, call `useGetProjectMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectMetricsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *      subdomain: // value for 'subdomain'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useGetProjectMetricsQuery(baseOptions: Apollo.QueryHookOptions<GetProjectMetricsQuery, GetProjectMetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectMetricsQuery, GetProjectMetricsQueryVariables>(GetProjectMetricsDocument, options);
      }
export function useGetProjectMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectMetricsQuery, GetProjectMetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectMetricsQuery, GetProjectMetricsQueryVariables>(GetProjectMetricsDocument, options);
        }
export type GetProjectMetricsQueryHookResult = ReturnType<typeof useGetProjectMetricsQuery>;
export type GetProjectMetricsLazyQueryHookResult = ReturnType<typeof useGetProjectMetricsLazyQuery>;
export type GetProjectMetricsQueryResult = Apollo.QueryResult<GetProjectMetricsQuery, GetProjectMetricsQueryVariables>;
export function refetchGetProjectMetricsQuery(variables: GetProjectMetricsQueryVariables) {
      return { query: GetProjectMetricsDocument, variables: variables }
    }
export const GetRemoteAppRolesDocument = gql`
    query getRemoteAppRoles {
  authRoles {
    role
  }
}
    `;

/**
 * __useGetRemoteAppRolesQuery__
 *
 * To run a query within a React component, call `useGetRemoteAppRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRemoteAppRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRemoteAppRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRemoteAppRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRemoteAppRolesQuery, GetRemoteAppRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRemoteAppRolesQuery, GetRemoteAppRolesQueryVariables>(GetRemoteAppRolesDocument, options);
      }
export function useGetRemoteAppRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRemoteAppRolesQuery, GetRemoteAppRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRemoteAppRolesQuery, GetRemoteAppRolesQueryVariables>(GetRemoteAppRolesDocument, options);
        }
export type GetRemoteAppRolesQueryHookResult = ReturnType<typeof useGetRemoteAppRolesQuery>;
export type GetRemoteAppRolesLazyQueryHookResult = ReturnType<typeof useGetRemoteAppRolesLazyQuery>;
export type GetRemoteAppRolesQueryResult = Apollo.QueryResult<GetRemoteAppRolesQuery, GetRemoteAppRolesQueryVariables>;
export function refetchGetRemoteAppRolesQuery(variables?: GetRemoteAppRolesQueryVariables) {
      return { query: GetRemoteAppRolesDocument, variables: variables }
    }
export const GetWorkspaceAndProjectDocument = gql`
    query GetWorkspaceAndProject($workspaceSlug: String!, $projectSlug: String) {
  workspaces(where: {slug: {_eq: $workspaceSlug}}) {
    ...Workspace
  }
}
    ${WorkspaceFragmentDoc}`;

/**
 * __useGetWorkspaceAndProjectQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceAndProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceAndProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceAndProjectQuery({
 *   variables: {
 *      workspaceSlug: // value for 'workspaceSlug'
 *      projectSlug: // value for 'projectSlug'
 *   },
 * });
 */
export function useGetWorkspaceAndProjectQuery(baseOptions: Apollo.QueryHookOptions<GetWorkspaceAndProjectQuery, GetWorkspaceAndProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceAndProjectQuery, GetWorkspaceAndProjectQueryVariables>(GetWorkspaceAndProjectDocument, options);
      }
export function useGetWorkspaceAndProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceAndProjectQuery, GetWorkspaceAndProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceAndProjectQuery, GetWorkspaceAndProjectQueryVariables>(GetWorkspaceAndProjectDocument, options);
        }
export type GetWorkspaceAndProjectQueryHookResult = ReturnType<typeof useGetWorkspaceAndProjectQuery>;
export type GetWorkspaceAndProjectLazyQueryHookResult = ReturnType<typeof useGetWorkspaceAndProjectLazyQuery>;
export type GetWorkspaceAndProjectQueryResult = Apollo.QueryResult<GetWorkspaceAndProjectQuery, GetWorkspaceAndProjectQueryVariables>;
export function refetchGetWorkspaceAndProjectQuery(variables: GetWorkspaceAndProjectQueryVariables) {
      return { query: GetWorkspaceAndProjectDocument, variables: variables }
    }
export const InsertApplicationDocument = gql`
    mutation insertApplication($app: apps_insert_input!) {
  insertApp(object: $app) {
    id
    name
    slug
    workspace {
      id
      name
      slug
    }
  }
}
    `;
export type InsertApplicationMutationFn = Apollo.MutationFunction<InsertApplicationMutation, InsertApplicationMutationVariables>;

/**
 * __useInsertApplicationMutation__
 *
 * To run a mutation, you first call `useInsertApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertApplicationMutation, { data, loading, error }] = useInsertApplicationMutation({
 *   variables: {
 *      app: // value for 'app'
 *   },
 * });
 */
export function useInsertApplicationMutation(baseOptions?: Apollo.MutationHookOptions<InsertApplicationMutation, InsertApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertApplicationMutation, InsertApplicationMutationVariables>(InsertApplicationDocument, options);
      }
export type InsertApplicationMutationHookResult = ReturnType<typeof useInsertApplicationMutation>;
export type InsertApplicationMutationResult = Apollo.MutationResult<InsertApplicationMutation>;
export type InsertApplicationMutationOptions = Apollo.BaseMutationOptions<InsertApplicationMutation, InsertApplicationMutationVariables>;
export const PauseApplicationDocument = gql`
    mutation PauseApplication($appId: uuid!) {
  updateApp(pk_columns: {id: $appId}, _set: {desiredState: 6}) {
    id
  }
}
    `;
export type PauseApplicationMutationFn = Apollo.MutationFunction<PauseApplicationMutation, PauseApplicationMutationVariables>;

/**
 * __usePauseApplicationMutation__
 *
 * To run a mutation, you first call `usePauseApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePauseApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pauseApplicationMutation, { data, loading, error }] = usePauseApplicationMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function usePauseApplicationMutation(baseOptions?: Apollo.MutationHookOptions<PauseApplicationMutation, PauseApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PauseApplicationMutation, PauseApplicationMutationVariables>(PauseApplicationDocument, options);
      }
export type PauseApplicationMutationHookResult = ReturnType<typeof usePauseApplicationMutation>;
export type PauseApplicationMutationResult = Apollo.MutationResult<PauseApplicationMutation>;
export type PauseApplicationMutationOptions = Apollo.BaseMutationOptions<PauseApplicationMutation, PauseApplicationMutationVariables>;
export const PrefetchNewAppDocument = gql`
    query PrefetchNewApp {
  regions(order_by: {city: asc}) {
    ...PrefetchNewAppRegions
  }
  plans(order_by: {sort: asc}) {
    ...PrefetchNewAppPlans
  }
  workspaces {
    ...PrefetchNewAppWorkspace
  }
}
    ${PrefetchNewAppRegionsFragmentDoc}
${PrefetchNewAppPlansFragmentDoc}
${PrefetchNewAppWorkspaceFragmentDoc}`;

/**
 * __usePrefetchNewAppQuery__
 *
 * To run a query within a React component, call `usePrefetchNewAppQuery` and pass it any options that fit your needs.
 * When your component renders, `usePrefetchNewAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePrefetchNewAppQuery({
 *   variables: {
 *   },
 * });
 */
export function usePrefetchNewAppQuery(baseOptions?: Apollo.QueryHookOptions<PrefetchNewAppQuery, PrefetchNewAppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PrefetchNewAppQuery, PrefetchNewAppQueryVariables>(PrefetchNewAppDocument, options);
      }
export function usePrefetchNewAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PrefetchNewAppQuery, PrefetchNewAppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PrefetchNewAppQuery, PrefetchNewAppQueryVariables>(PrefetchNewAppDocument, options);
        }
export type PrefetchNewAppQueryHookResult = ReturnType<typeof usePrefetchNewAppQuery>;
export type PrefetchNewAppLazyQueryHookResult = ReturnType<typeof usePrefetchNewAppLazyQuery>;
export type PrefetchNewAppQueryResult = Apollo.QueryResult<PrefetchNewAppQuery, PrefetchNewAppQueryVariables>;
export function refetchPrefetchNewAppQuery(variables?: PrefetchNewAppQueryVariables) {
      return { query: PrefetchNewAppDocument, variables: variables }
    }
export const GetAuthenticationSettingsDocument = gql`
    query GetAuthenticationSettings($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    id: __typename
    __typename
    auth {
      id: __typename
      __typename
      redirections {
        clientUrl
        allowedUrls
      }
      totp {
        enabled
        issuer
      }
      signUp {
        enabled
      }
      user {
        email {
          allowed
          blocked
        }
        emailDomains {
          allowed
          blocked
        }
        gravatar {
          enabled
          default
          rating
        }
      }
    }
  }
}
    `;

/**
 * __useGetAuthenticationSettingsQuery__
 *
 * To run a query within a React component, call `useGetAuthenticationSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAuthenticationSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAuthenticationSettingsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetAuthenticationSettingsQuery(baseOptions: Apollo.QueryHookOptions<GetAuthenticationSettingsQuery, GetAuthenticationSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAuthenticationSettingsQuery, GetAuthenticationSettingsQueryVariables>(GetAuthenticationSettingsDocument, options);
      }
export function useGetAuthenticationSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAuthenticationSettingsQuery, GetAuthenticationSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAuthenticationSettingsQuery, GetAuthenticationSettingsQueryVariables>(GetAuthenticationSettingsDocument, options);
        }
export type GetAuthenticationSettingsQueryHookResult = ReturnType<typeof useGetAuthenticationSettingsQuery>;
export type GetAuthenticationSettingsLazyQueryHookResult = ReturnType<typeof useGetAuthenticationSettingsLazyQuery>;
export type GetAuthenticationSettingsQueryResult = Apollo.QueryResult<GetAuthenticationSettingsQuery, GetAuthenticationSettingsQueryVariables>;
export function refetchGetAuthenticationSettingsQuery(variables: GetAuthenticationSettingsQueryVariables) {
      return { query: GetAuthenticationSettingsDocument, variables: variables }
    }
export const GetEnvironmentVariablesDocument = gql`
    query GetEnvironmentVariables($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    id: __typename
    __typename
    global {
      environment {
        ...EnvironmentVariable
      }
    }
    hasura {
      adminSecret
      webhookSecret
      jwtSecrets {
        ...JWTSecret
      }
    }
  }
}
    ${EnvironmentVariableFragmentDoc}
${JwtSecretFragmentDoc}`;

/**
 * __useGetEnvironmentVariablesQuery__
 *
 * To run a query within a React component, call `useGetEnvironmentVariablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnvironmentVariablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnvironmentVariablesQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetEnvironmentVariablesQuery(baseOptions: Apollo.QueryHookOptions<GetEnvironmentVariablesQuery, GetEnvironmentVariablesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnvironmentVariablesQuery, GetEnvironmentVariablesQueryVariables>(GetEnvironmentVariablesDocument, options);
      }
export function useGetEnvironmentVariablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnvironmentVariablesQuery, GetEnvironmentVariablesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnvironmentVariablesQuery, GetEnvironmentVariablesQueryVariables>(GetEnvironmentVariablesDocument, options);
        }
export type GetEnvironmentVariablesQueryHookResult = ReturnType<typeof useGetEnvironmentVariablesQuery>;
export type GetEnvironmentVariablesLazyQueryHookResult = ReturnType<typeof useGetEnvironmentVariablesLazyQuery>;
export type GetEnvironmentVariablesQueryResult = Apollo.QueryResult<GetEnvironmentVariablesQuery, GetEnvironmentVariablesQueryVariables>;
export function refetchGetEnvironmentVariablesQuery(variables: GetEnvironmentVariablesQueryVariables) {
      return { query: GetEnvironmentVariablesDocument, variables: variables }
    }
export const GetResourcesDocument = gql`
    query GetResources($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    ...ServiceResources
  }
}
    ${ServiceResourcesFragmentDoc}`;

/**
 * __useGetResourcesQuery__
 *
 * To run a query within a React component, call `useGetResourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetResourcesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetResourcesQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetResourcesQuery(baseOptions: Apollo.QueryHookOptions<GetResourcesQuery, GetResourcesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetResourcesQuery, GetResourcesQueryVariables>(GetResourcesDocument, options);
      }
export function useGetResourcesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetResourcesQuery, GetResourcesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetResourcesQuery, GetResourcesQueryVariables>(GetResourcesDocument, options);
        }
export type GetResourcesQueryHookResult = ReturnType<typeof useGetResourcesQuery>;
export type GetResourcesLazyQueryHookResult = ReturnType<typeof useGetResourcesLazyQuery>;
export type GetResourcesQueryResult = Apollo.QueryResult<GetResourcesQuery, GetResourcesQueryVariables>;
export function refetchGetResourcesQuery(variables: GetResourcesQueryVariables) {
      return { query: GetResourcesDocument, variables: variables }
    }
export const GetRolesPermissionsDocument = gql`
    query GetRolesPermissions($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    id: __typename
    __typename
    auth {
      user {
        roles {
          allowed
          default
        }
      }
      session {
        accessToken {
          customClaims {
            ...PermissionVariable
          }
        }
      }
    }
  }
}
    ${PermissionVariableFragmentDoc}`;

/**
 * __useGetRolesPermissionsQuery__
 *
 * To run a query within a React component, call `useGetRolesPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesPermissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesPermissionsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetRolesPermissionsQuery(baseOptions: Apollo.QueryHookOptions<GetRolesPermissionsQuery, GetRolesPermissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesPermissionsQuery, GetRolesPermissionsQueryVariables>(GetRolesPermissionsDocument, options);
      }
export function useGetRolesPermissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesPermissionsQuery, GetRolesPermissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesPermissionsQuery, GetRolesPermissionsQueryVariables>(GetRolesPermissionsDocument, options);
        }
export type GetRolesPermissionsQueryHookResult = ReturnType<typeof useGetRolesPermissionsQuery>;
export type GetRolesPermissionsLazyQueryHookResult = ReturnType<typeof useGetRolesPermissionsLazyQuery>;
export type GetRolesPermissionsQueryResult = Apollo.QueryResult<GetRolesPermissionsQuery, GetRolesPermissionsQueryVariables>;
export function refetchGetRolesPermissionsQuery(variables: GetRolesPermissionsQueryVariables) {
      return { query: GetRolesPermissionsDocument, variables: variables }
    }
export const DeleteSecretDocument = gql`
    mutation DeleteSecret($appId: uuid!, $name: String!) {
  deleteSecret(appID: $appId, key: $name) {
    name
  }
}
    `;
export type DeleteSecretMutationFn = Apollo.MutationFunction<DeleteSecretMutation, DeleteSecretMutationVariables>;

/**
 * __useDeleteSecretMutation__
 *
 * To run a mutation, you first call `useDeleteSecretMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSecretMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSecretMutation, { data, loading, error }] = useDeleteSecretMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useDeleteSecretMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSecretMutation, DeleteSecretMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSecretMutation, DeleteSecretMutationVariables>(DeleteSecretDocument, options);
      }
export type DeleteSecretMutationHookResult = ReturnType<typeof useDeleteSecretMutation>;
export type DeleteSecretMutationResult = Apollo.MutationResult<DeleteSecretMutation>;
export type DeleteSecretMutationOptions = Apollo.BaseMutationOptions<DeleteSecretMutation, DeleteSecretMutationVariables>;
export const GetSecretsDocument = gql`
    query GetSecrets($appId: uuid!) {
  appSecrets(appID: $appId) {
    ...Secret
  }
}
    ${SecretFragmentDoc}`;

/**
 * __useGetSecretsQuery__
 *
 * To run a query within a React component, call `useGetSecretsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSecretsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSecretsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetSecretsQuery(baseOptions: Apollo.QueryHookOptions<GetSecretsQuery, GetSecretsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSecretsQuery, GetSecretsQueryVariables>(GetSecretsDocument, options);
      }
export function useGetSecretsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSecretsQuery, GetSecretsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSecretsQuery, GetSecretsQueryVariables>(GetSecretsDocument, options);
        }
export type GetSecretsQueryHookResult = ReturnType<typeof useGetSecretsQuery>;
export type GetSecretsLazyQueryHookResult = ReturnType<typeof useGetSecretsLazyQuery>;
export type GetSecretsQueryResult = Apollo.QueryResult<GetSecretsQuery, GetSecretsQueryVariables>;
export function refetchGetSecretsQuery(variables: GetSecretsQueryVariables) {
      return { query: GetSecretsDocument, variables: variables }
    }
export const InsertSecretDocument = gql`
    mutation InsertSecret($appId: uuid!, $secret: ConfigEnvironmentVariableInsertInput!) {
  insertSecret(appID: $appId, secret: $secret) {
    name
  }
}
    `;
export type InsertSecretMutationFn = Apollo.MutationFunction<InsertSecretMutation, InsertSecretMutationVariables>;

/**
 * __useInsertSecretMutation__
 *
 * To run a mutation, you first call `useInsertSecretMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSecretMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSecretMutation, { data, loading, error }] = useInsertSecretMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useInsertSecretMutation(baseOptions?: Apollo.MutationHookOptions<InsertSecretMutation, InsertSecretMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertSecretMutation, InsertSecretMutationVariables>(InsertSecretDocument, options);
      }
export type InsertSecretMutationHookResult = ReturnType<typeof useInsertSecretMutation>;
export type InsertSecretMutationResult = Apollo.MutationResult<InsertSecretMutation>;
export type InsertSecretMutationOptions = Apollo.BaseMutationOptions<InsertSecretMutation, InsertSecretMutationVariables>;
export const UpdateSecretDocument = gql`
    mutation UpdateSecret($appId: uuid!, $secret: ConfigEnvironmentVariableInsertInput!) {
  updateSecret(appID: $appId, secret: $secret) {
    name
  }
}
    `;
export type UpdateSecretMutationFn = Apollo.MutationFunction<UpdateSecretMutation, UpdateSecretMutationVariables>;

/**
 * __useUpdateSecretMutation__
 *
 * To run a mutation, you first call `useUpdateSecretMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSecretMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSecretMutation, { data, loading, error }] = useUpdateSecretMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      secret: // value for 'secret'
 *   },
 * });
 */
export function useUpdateSecretMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSecretMutation, UpdateSecretMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSecretMutation, UpdateSecretMutationVariables>(UpdateSecretDocument, options);
      }
export type UpdateSecretMutationHookResult = ReturnType<typeof useUpdateSecretMutation>;
export type UpdateSecretMutationResult = Apollo.MutationResult<UpdateSecretMutation>;
export type UpdateSecretMutationOptions = Apollo.BaseMutationOptions<UpdateSecretMutation, UpdateSecretMutationVariables>;
export const GetSignInMethodsDocument = gql`
    query GetSignInMethods($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    id: __typename
    __typename
    provider {
      id: __typename
      __typename
      sms {
        accountSid
        authToken
        messagingServiceId
        provider
      }
    }
    auth {
      id: __typename
      __typename
      method {
        emailPassword {
          emailVerificationRequired
          hibpEnabled
        }
        emailPasswordless {
          enabled
        }
        smsPasswordless {
          enabled
        }
        anonymous {
          enabled
        }
        webauthn {
          enabled
        }
        oauth {
          apple {
            enabled
            clientId
            keyId
            teamId
            privateKey
          }
          discord {
            enabled
            clientId
            clientSecret
            scope
          }
          facebook {
            enabled
            clientId
            clientSecret
            scope
          }
          github {
            enabled
            clientId
            clientSecret
            scope
          }
          google {
            enabled
            clientId
            clientSecret
            scope
          }
          linkedin {
            enabled
            clientId
            clientSecret
            scope
          }
          spotify {
            enabled
            clientId
            clientSecret
            scope
          }
          twitch {
            enabled
            clientId
            clientSecret
            scope
          }
          twitter {
            enabled
            consumerKey
            consumerSecret
          }
          windowslive {
            enabled
            clientId
            clientSecret
            scope
          }
          workos {
            enabled
            clientId
            clientSecret
            connection
            organization
          }
          azuread {
            enabled
            clientId
            clientSecret
            tenant
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetSignInMethodsQuery__
 *
 * To run a query within a React component, call `useGetSignInMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignInMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignInMethodsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetSignInMethodsQuery(baseOptions: Apollo.QueryHookOptions<GetSignInMethodsQuery, GetSignInMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSignInMethodsQuery, GetSignInMethodsQueryVariables>(GetSignInMethodsDocument, options);
      }
export function useGetSignInMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignInMethodsQuery, GetSignInMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSignInMethodsQuery, GetSignInMethodsQueryVariables>(GetSignInMethodsDocument, options);
        }
export type GetSignInMethodsQueryHookResult = ReturnType<typeof useGetSignInMethodsQuery>;
export type GetSignInMethodsLazyQueryHookResult = ReturnType<typeof useGetSignInMethodsLazyQuery>;
export type GetSignInMethodsQueryResult = Apollo.QueryResult<GetSignInMethodsQuery, GetSignInMethodsQueryVariables>;
export function refetchGetSignInMethodsQuery(variables: GetSignInMethodsQueryVariables) {
      return { query: GetSignInMethodsDocument, variables: variables }
    }
export const GetSmtpSettingsDocument = gql`
    query GetSmtpSettings($appId: uuid!) {
  config(appID: $appId, resolve: true) {
    id: __typename
    __typename
    provider {
      id: __typename
      __typename
      smtp {
        host
        method
        port
        secure
        sender
        user
      }
    }
  }
}
    `;

/**
 * __useGetSmtpSettingsQuery__
 *
 * To run a query within a React component, call `useGetSmtpSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSmtpSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSmtpSettingsQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetSmtpSettingsQuery(baseOptions: Apollo.QueryHookOptions<GetSmtpSettingsQuery, GetSmtpSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSmtpSettingsQuery, GetSmtpSettingsQueryVariables>(GetSmtpSettingsDocument, options);
      }
export function useGetSmtpSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSmtpSettingsQuery, GetSmtpSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSmtpSettingsQuery, GetSmtpSettingsQueryVariables>(GetSmtpSettingsDocument, options);
        }
export type GetSmtpSettingsQueryHookResult = ReturnType<typeof useGetSmtpSettingsQuery>;
export type GetSmtpSettingsLazyQueryHookResult = ReturnType<typeof useGetSmtpSettingsLazyQuery>;
export type GetSmtpSettingsQueryResult = Apollo.QueryResult<GetSmtpSettingsQuery, GetSmtpSettingsQueryVariables>;
export function refetchGetSmtpSettingsQuery(variables: GetSmtpSettingsQueryVariables) {
      return { query: GetSmtpSettingsDocument, variables: variables }
    }
export const UpdateConfigDocument = gql`
    mutation UpdateConfig($appId: uuid!, $config: ConfigConfigUpdateInput!) {
  updateConfig(appID: $appId, config: $config) {
    id: __typename
  }
}
    `;
export type UpdateConfigMutationFn = Apollo.MutationFunction<UpdateConfigMutation, UpdateConfigMutationVariables>;

/**
 * __useUpdateConfigMutation__
 *
 * To run a mutation, you first call `useUpdateConfigMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConfigMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConfigMutation, { data, loading, error }] = useUpdateConfigMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      config: // value for 'config'
 *   },
 * });
 */
export function useUpdateConfigMutation(baseOptions?: Apollo.MutationHookOptions<UpdateConfigMutation, UpdateConfigMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateConfigMutation, UpdateConfigMutationVariables>(UpdateConfigDocument, options);
      }
export type UpdateConfigMutationHookResult = ReturnType<typeof useUpdateConfigMutation>;
export type UpdateConfigMutationResult = Apollo.MutationResult<UpdateConfigMutation>;
export type UpdateConfigMutationOptions = Apollo.BaseMutationOptions<UpdateConfigMutation, UpdateConfigMutationVariables>;
export const UnpauseApplicationDocument = gql`
    mutation UnpauseApplication($appId: uuid!) {
  updateApp(pk_columns: {id: $appId}, _set: {desiredState: 5}) {
    id
  }
}
    `;
export type UnpauseApplicationMutationFn = Apollo.MutationFunction<UnpauseApplicationMutation, UnpauseApplicationMutationVariables>;

/**
 * __useUnpauseApplicationMutation__
 *
 * To run a mutation, you first call `useUnpauseApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpauseApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpauseApplicationMutation, { data, loading, error }] = useUnpauseApplicationMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useUnpauseApplicationMutation(baseOptions?: Apollo.MutationHookOptions<UnpauseApplicationMutation, UnpauseApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnpauseApplicationMutation, UnpauseApplicationMutationVariables>(UnpauseApplicationDocument, options);
      }
export type UnpauseApplicationMutationHookResult = ReturnType<typeof useUnpauseApplicationMutation>;
export type UnpauseApplicationMutationResult = Apollo.MutationResult<UnpauseApplicationMutation>;
export type UnpauseApplicationMutationOptions = Apollo.BaseMutationOptions<UnpauseApplicationMutation, UnpauseApplicationMutationVariables>;
export const UpdateApplicationDocument = gql`
    mutation updateApplication($appId: uuid!, $app: apps_set_input!) {
  updateApp(pk_columns: {id: $appId}, _set: $app) {
    name
    id
    slug
  }
}
    `;
export type UpdateApplicationMutationFn = Apollo.MutationFunction<UpdateApplicationMutation, UpdateApplicationMutationVariables>;

/**
 * __useUpdateApplicationMutation__
 *
 * To run a mutation, you first call `useUpdateApplicationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateApplicationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateApplicationMutation, { data, loading, error }] = useUpdateApplicationMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      app: // value for 'app'
 *   },
 * });
 */
export function useUpdateApplicationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateApplicationMutation, UpdateApplicationMutationVariables>(UpdateApplicationDocument, options);
      }
export type UpdateApplicationMutationHookResult = ReturnType<typeof useUpdateApplicationMutation>;
export type UpdateApplicationMutationResult = Apollo.MutationResult<UpdateApplicationMutation>;
export type UpdateApplicationMutationOptions = Apollo.BaseMutationOptions<UpdateApplicationMutation, UpdateApplicationMutationVariables>;
export const GetCountriesDocument = gql`
    query getCountries {
  countries(order_by: {name: asc}) {
    code
    name
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export function refetchGetCountriesQuery(variables?: GetCountriesQueryVariables) {
      return { query: GetCountriesDocument, variables: variables }
    }
export const ResetPostgresPasswordDocument = gql`
    mutation resetPostgresPassword($appID: String!, $newPassword: String!) {
  resetPostgresPassword(appID: $appID, newPassword: $newPassword)
}
    `;
export type ResetPostgresPasswordMutationFn = Apollo.MutationFunction<ResetPostgresPasswordMutation, ResetPostgresPasswordMutationVariables>;

/**
 * __useResetPostgresPasswordMutation__
 *
 * To run a mutation, you first call `useResetPostgresPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPostgresPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPostgresPasswordMutation, { data, loading, error }] = useResetPostgresPasswordMutation({
 *   variables: {
 *      appID: // value for 'appID'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useResetPostgresPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPostgresPasswordMutation, ResetPostgresPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPostgresPasswordMutation, ResetPostgresPasswordMutationVariables>(ResetPostgresPasswordDocument, options);
      }
export type ResetPostgresPasswordMutationHookResult = ReturnType<typeof useResetPostgresPasswordMutation>;
export type ResetPostgresPasswordMutationResult = Apollo.MutationResult<ResetPostgresPasswordMutation>;
export type ResetPostgresPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPostgresPasswordMutation, ResetPostgresPasswordMutationVariables>;
export const ScheduledOrPendingDeploymentsSubDocument = gql`
    subscription ScheduledOrPendingDeploymentsSub($appId: uuid!) {
  deployments(
    where: {deploymentStatus: {_in: ["SCHEDULED"]}, appId: {_eq: $appId}}
  ) {
    ...DeploymentRow
  }
}
    ${DeploymentRowFragmentDoc}`;

/**
 * __useScheduledOrPendingDeploymentsSubSubscription__
 *
 * To run a query within a React component, call `useScheduledOrPendingDeploymentsSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useScheduledOrPendingDeploymentsSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScheduledOrPendingDeploymentsSubSubscription({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useScheduledOrPendingDeploymentsSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<ScheduledOrPendingDeploymentsSubSubscription, ScheduledOrPendingDeploymentsSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<ScheduledOrPendingDeploymentsSubSubscription, ScheduledOrPendingDeploymentsSubSubscriptionVariables>(ScheduledOrPendingDeploymentsSubDocument, options);
      }
export type ScheduledOrPendingDeploymentsSubSubscriptionHookResult = ReturnType<typeof useScheduledOrPendingDeploymentsSubSubscription>;
export type ScheduledOrPendingDeploymentsSubSubscriptionResult = Apollo.SubscriptionResult<ScheduledOrPendingDeploymentsSubSubscription>;
export const LatestLiveDeploymentSubDocument = gql`
    subscription LatestLiveDeploymentSub($appId: uuid!) {
  deployments(
    where: {deploymentStatus: {_eq: "DEPLOYED"}, appId: {_eq: $appId}}
    order_by: {deploymentEndedAt: desc}
    limit: 1
    offset: 0
  ) {
    ...DeploymentRow
  }
}
    ${DeploymentRowFragmentDoc}`;

/**
 * __useLatestLiveDeploymentSubSubscription__
 *
 * To run a query within a React component, call `useLatestLiveDeploymentSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useLatestLiveDeploymentSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestLiveDeploymentSubSubscription({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useLatestLiveDeploymentSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<LatestLiveDeploymentSubSubscription, LatestLiveDeploymentSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<LatestLiveDeploymentSubSubscription, LatestLiveDeploymentSubSubscriptionVariables>(LatestLiveDeploymentSubDocument, options);
      }
export type LatestLiveDeploymentSubSubscriptionHookResult = ReturnType<typeof useLatestLiveDeploymentSubSubscription>;
export type LatestLiveDeploymentSubSubscriptionResult = Apollo.SubscriptionResult<LatestLiveDeploymentSubSubscription>;
export const InsertDeploymentDocument = gql`
    mutation InsertDeployment($object: deployments_insert_input!) {
  insertDeployment(object: $object) {
    ...DeploymentRow
  }
}
    ${DeploymentRowFragmentDoc}`;
export type InsertDeploymentMutationFn = Apollo.MutationFunction<InsertDeploymentMutation, InsertDeploymentMutationVariables>;

/**
 * __useInsertDeploymentMutation__
 *
 * To run a mutation, you first call `useInsertDeploymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDeploymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDeploymentMutation, { data, loading, error }] = useInsertDeploymentMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertDeploymentMutation(baseOptions?: Apollo.MutationHookOptions<InsertDeploymentMutation, InsertDeploymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertDeploymentMutation, InsertDeploymentMutationVariables>(InsertDeploymentDocument, options);
      }
export type InsertDeploymentMutationHookResult = ReturnType<typeof useInsertDeploymentMutation>;
export type InsertDeploymentMutationResult = Apollo.MutationResult<InsertDeploymentMutation>;
export type InsertDeploymentMutationOptions = Apollo.BaseMutationOptions<InsertDeploymentMutation, InsertDeploymentMutationVariables>;
export const GetDeploymentsSubDocument = gql`
    subscription getDeploymentsSub($id: uuid!, $limit: Int!, $offset: Int!) {
  deployments(
    where: {appId: {_eq: $id}}
    order_by: {deploymentStartedAt: desc}
    limit: $limit
    offset: $offset
  ) {
    ...DeploymentRow
  }
}
    ${DeploymentRowFragmentDoc}`;

/**
 * __useGetDeploymentsSubSubscription__
 *
 * To run a query within a React component, call `useGetDeploymentsSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetDeploymentsSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDeploymentsSubSubscription({
 *   variables: {
 *      id: // value for 'id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetDeploymentsSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetDeploymentsSubSubscription, GetDeploymentsSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetDeploymentsSubSubscription, GetDeploymentsSubSubscriptionVariables>(GetDeploymentsSubDocument, options);
      }
export type GetDeploymentsSubSubscriptionHookResult = ReturnType<typeof useGetDeploymentsSubSubscription>;
export type GetDeploymentsSubSubscriptionResult = Apollo.SubscriptionResult<GetDeploymentsSubSubscription>;
export const DeploymentSubDocument = gql`
    subscription deploymentSub($id: uuid!) {
  deployment(id: $id) {
    id
    commitMessage
    commitSHA
    commitUserName
    commitUserAvatarUrl
    deploymentStartedAt
    deploymentEndedAt
    deploymentStatus
    metadataStartedAt
    metadataEndedAt
    metadataStatus
    migrationsStartedAt
    migrationsEndedAt
    migrationsStatus
    functionsStartedAt
    functionsEndedAt
    functionsStatus
    deploymentLogs(order_by: {createdAt: asc}) {
      id
      createdAt
      message
    }
  }
}
    `;

/**
 * __useDeploymentSubSubscription__
 *
 * To run a query within a React component, call `useDeploymentSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeploymentSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeploymentSubSubscription({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeploymentSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<DeploymentSubSubscription, DeploymentSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<DeploymentSubSubscription, DeploymentSubSubscriptionVariables>(DeploymentSubDocument, options);
      }
export type DeploymentSubSubscriptionHookResult = ReturnType<typeof useDeploymentSubSubscription>;
export type DeploymentSubSubscriptionResult = Apollo.SubscriptionResult<DeploymentSubSubscription>;
export const GetBucketsDocument = gql`
    query getBuckets {
  buckets {
    id
    maxUploadFileSize
  }
}
    `;

/**
 * __useGetBucketsQuery__
 *
 * To run a query within a React component, call `useGetBucketsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBucketsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBucketsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBucketsQuery(baseOptions?: Apollo.QueryHookOptions<GetBucketsQuery, GetBucketsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBucketsQuery, GetBucketsQueryVariables>(GetBucketsDocument, options);
      }
export function useGetBucketsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBucketsQuery, GetBucketsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBucketsQuery, GetBucketsQueryVariables>(GetBucketsDocument, options);
        }
export type GetBucketsQueryHookResult = ReturnType<typeof useGetBucketsQuery>;
export type GetBucketsLazyQueryHookResult = ReturnType<typeof useGetBucketsLazyQuery>;
export type GetBucketsQueryResult = Apollo.QueryResult<GetBucketsQuery, GetBucketsQueryVariables>;
export function refetchGetBucketsQuery(variables?: GetBucketsQueryVariables) {
      return { query: GetBucketsDocument, variables: variables }
    }
export const GetFilesDocument = gql`
    query getFiles($where: files_bool_exp, $limit: Int, $offset: Int, $order_by: [files_order_by!]) {
  files(where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
    id
    bucketId
    createdAt
    updatedAt
    name
    size
    mimeType
    etag
    isUploaded
    uploadedByUserId
  }
}
    `;

/**
 * __useGetFilesQuery__
 *
 * To run a query within a React component, call `useGetFilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *   },
 * });
 */
export function useGetFilesQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
      }
export function useGetFilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesQuery, GetFilesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesQuery, GetFilesQueryVariables>(GetFilesDocument, options);
        }
export type GetFilesQueryHookResult = ReturnType<typeof useGetFilesQuery>;
export type GetFilesLazyQueryHookResult = ReturnType<typeof useGetFilesLazyQuery>;
export type GetFilesQueryResult = Apollo.QueryResult<GetFilesQuery, GetFilesQueryVariables>;
export function refetchGetFilesQuery(variables?: GetFilesQueryVariables) {
      return { query: GetFilesDocument, variables: variables }
    }
export const GetFilesAggregateDocument = gql`
    query getFilesAggregate($where: files_bool_exp) {
  filesAggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetFilesAggregateQuery__
 *
 * To run a query within a React component, call `useGetFilesAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilesAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilesAggregateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetFilesAggregateQuery(baseOptions?: Apollo.QueryHookOptions<GetFilesAggregateQuery, GetFilesAggregateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilesAggregateQuery, GetFilesAggregateQueryVariables>(GetFilesAggregateDocument, options);
      }
export function useGetFilesAggregateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilesAggregateQuery, GetFilesAggregateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilesAggregateQuery, GetFilesAggregateQueryVariables>(GetFilesAggregateDocument, options);
        }
export type GetFilesAggregateQueryHookResult = ReturnType<typeof useGetFilesAggregateQuery>;
export type GetFilesAggregateLazyQueryHookResult = ReturnType<typeof useGetFilesAggregateLazyQuery>;
export type GetFilesAggregateQueryResult = Apollo.QueryResult<GetFilesAggregateQuery, GetFilesAggregateQueryVariables>;
export function refetchGetFilesAggregateQuery(variables?: GetFilesAggregateQueryVariables) {
      return { query: GetFilesAggregateDocument, variables: variables }
    }
export const GetGithubRepositoriesDocument = gql`
    query getGithubRepositories {
  githubRepositories {
    ...GithubRepository
  }
  githubAppInstallations {
    id
    accountLogin
    accountType
    accountAvatarUrl
  }
}
    ${GithubRepositoryFragmentDoc}`;

/**
 * __useGetGithubRepositoriesQuery__
 *
 * To run a query within a React component, call `useGetGithubRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGithubRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGithubRepositoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGithubRepositoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetGithubRepositoriesQuery, GetGithubRepositoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGithubRepositoriesQuery, GetGithubRepositoriesQueryVariables>(GetGithubRepositoriesDocument, options);
      }
export function useGetGithubRepositoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGithubRepositoriesQuery, GetGithubRepositoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGithubRepositoriesQuery, GetGithubRepositoriesQueryVariables>(GetGithubRepositoriesDocument, options);
        }
export type GetGithubRepositoriesQueryHookResult = ReturnType<typeof useGetGithubRepositoriesQuery>;
export type GetGithubRepositoriesLazyQueryHookResult = ReturnType<typeof useGetGithubRepositoriesLazyQuery>;
export type GetGithubRepositoriesQueryResult = Apollo.QueryResult<GetGithubRepositoriesQuery, GetGithubRepositoriesQueryVariables>;
export function refetchGetGithubRepositoriesQuery(variables?: GetGithubRepositoriesQueryVariables) {
      return { query: GetGithubRepositoriesDocument, variables: variables }
    }
export const GetProjectLogsDocument = gql`
    query getProjectLogs($appID: String!, $service: String, $from: Timestamp, $to: Timestamp) {
  logs(appID: $appID, service: $service, from: $from, to: $to) {
    log
    service
    timestamp
  }
}
    `;

/**
 * __useGetProjectLogsQuery__
 *
 * To run a query within a React component, call `useGetProjectLogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectLogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectLogsQuery({
 *   variables: {
 *      appID: // value for 'appID'
 *      service: // value for 'service'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *   },
 * });
 */
export function useGetProjectLogsQuery(baseOptions: Apollo.QueryHookOptions<GetProjectLogsQuery, GetProjectLogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectLogsQuery, GetProjectLogsQueryVariables>(GetProjectLogsDocument, options);
      }
export function useGetProjectLogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectLogsQuery, GetProjectLogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectLogsQuery, GetProjectLogsQueryVariables>(GetProjectLogsDocument, options);
        }
export type GetProjectLogsQueryHookResult = ReturnType<typeof useGetProjectLogsQuery>;
export type GetProjectLogsLazyQueryHookResult = ReturnType<typeof useGetProjectLogsLazyQuery>;
export type GetProjectLogsQueryResult = Apollo.QueryResult<GetProjectLogsQuery, GetProjectLogsQueryVariables>;
export function refetchGetProjectLogsQuery(variables: GetProjectLogsQueryVariables) {
      return { query: GetProjectLogsDocument, variables: variables }
    }
export const GetLogsSubscriptionDocument = gql`
    subscription getLogsSubscription($appID: String!, $service: String, $from: Timestamp) {
  logs(appID: $appID, service: $service, from: $from) {
    log
    service
    timestamp
  }
}
    `;

/**
 * __useGetLogsSubscriptionSubscription__
 *
 * To run a query within a React component, call `useGetLogsSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLogsSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLogsSubscriptionSubscription({
 *   variables: {
 *      appID: // value for 'appID'
 *      service: // value for 'service'
 *      from: // value for 'from'
 *   },
 * });
 */
export function useGetLogsSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<GetLogsSubscriptionSubscription, GetLogsSubscriptionSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<GetLogsSubscriptionSubscription, GetLogsSubscriptionSubscriptionVariables>(GetLogsSubscriptionDocument, options);
      }
export type GetLogsSubscriptionSubscriptionHookResult = ReturnType<typeof useGetLogsSubscriptionSubscription>;
export type GetLogsSubscriptionSubscriptionResult = Apollo.SubscriptionResult<GetLogsSubscriptionSubscription>;
export const DeletePaymentMethodDocument = gql`
    mutation deletePaymentMethod($paymentMethodId: uuid!) {
  deletePaymentMethod(id: $paymentMethodId) {
    id
  }
}
    `;
export type DeletePaymentMethodMutationFn = Apollo.MutationFunction<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;

/**
 * __useDeletePaymentMethodMutation__
 *
 * To run a mutation, you first call `useDeletePaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePaymentMethodMutation, { data, loading, error }] = useDeletePaymentMethodMutation({
 *   variables: {
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useDeletePaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>(DeletePaymentMethodDocument, options);
      }
export type DeletePaymentMethodMutationHookResult = ReturnType<typeof useDeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationResult = Apollo.MutationResult<DeletePaymentMethodMutation>;
export type DeletePaymentMethodMutationOptions = Apollo.BaseMutationOptions<DeletePaymentMethodMutation, DeletePaymentMethodMutationVariables>;
export const GetPaymentMethodsDocument = gql`
    query getPaymentMethods($workspaceId: uuid!) {
  paymentMethods(
    where: {workspaceId: {_eq: $workspaceId}}
    order_by: {createdAt: desc}
  ) {
    ...getPaymentMethods
  }
}
    ${GetPaymentMethodsFragmentDoc}`;

/**
 * __useGetPaymentMethodsQuery__
 *
 * To run a query within a React component, call `useGetPaymentMethodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaymentMethodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaymentMethodsQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGetPaymentMethodsQuery(baseOptions: Apollo.QueryHookOptions<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>(GetPaymentMethodsDocument, options);
      }
export function useGetPaymentMethodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>(GetPaymentMethodsDocument, options);
        }
export type GetPaymentMethodsQueryHookResult = ReturnType<typeof useGetPaymentMethodsQuery>;
export type GetPaymentMethodsLazyQueryHookResult = ReturnType<typeof useGetPaymentMethodsLazyQuery>;
export type GetPaymentMethodsQueryResult = Apollo.QueryResult<GetPaymentMethodsQuery, GetPaymentMethodsQueryVariables>;
export function refetchGetPaymentMethodsQuery(variables: GetPaymentMethodsQueryVariables) {
      return { query: GetPaymentMethodsDocument, variables: variables }
    }
export const InsertNewPaymentMethodDocument = gql`
    mutation insertNewPaymentMethod($workspaceId: uuid!, $paymentMethod: paymentMethods_insert_input!) {
  updatePaymentMethods(
    where: {workspaceId: {_eq: $workspaceId}}
    _set: {isDefault: false}
  ) {
    affected_rows
  }
  insertPaymentMethod(object: $paymentMethod) {
    id
  }
}
    `;
export type InsertNewPaymentMethodMutationFn = Apollo.MutationFunction<InsertNewPaymentMethodMutation, InsertNewPaymentMethodMutationVariables>;

/**
 * __useInsertNewPaymentMethodMutation__
 *
 * To run a mutation, you first call `useInsertNewPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertNewPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertNewPaymentMethodMutation, { data, loading, error }] = useInsertNewPaymentMethodMutation({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *      paymentMethod: // value for 'paymentMethod'
 *   },
 * });
 */
export function useInsertNewPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<InsertNewPaymentMethodMutation, InsertNewPaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertNewPaymentMethodMutation, InsertNewPaymentMethodMutationVariables>(InsertNewPaymentMethodDocument, options);
      }
export type InsertNewPaymentMethodMutationHookResult = ReturnType<typeof useInsertNewPaymentMethodMutation>;
export type InsertNewPaymentMethodMutationResult = Apollo.MutationResult<InsertNewPaymentMethodMutation>;
export type InsertNewPaymentMethodMutationOptions = Apollo.BaseMutationOptions<InsertNewPaymentMethodMutation, InsertNewPaymentMethodMutationVariables>;
export const SetNewDefaultPaymentMethodDocument = gql`
    mutation setNewDefaultPaymentMethod($workspaceId: uuid!, $paymentMethodId: uuid!) {
  setAllPaymentMethodToDefaultFalse: updatePaymentMethods(
    where: {workspaceId: {_eq: $workspaceId}}
    _set: {isDefault: false}
  ) {
    affected_rows
  }
  updatePaymentMethods(
    where: {id: {_eq: $paymentMethodId}}
    _set: {isDefault: true}
  ) {
    affected_rows
  }
}
    `;
export type SetNewDefaultPaymentMethodMutationFn = Apollo.MutationFunction<SetNewDefaultPaymentMethodMutation, SetNewDefaultPaymentMethodMutationVariables>;

/**
 * __useSetNewDefaultPaymentMethodMutation__
 *
 * To run a mutation, you first call `useSetNewDefaultPaymentMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetNewDefaultPaymentMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setNewDefaultPaymentMethodMutation, { data, loading, error }] = useSetNewDefaultPaymentMethodMutation({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *      paymentMethodId: // value for 'paymentMethodId'
 *   },
 * });
 */
export function useSetNewDefaultPaymentMethodMutation(baseOptions?: Apollo.MutationHookOptions<SetNewDefaultPaymentMethodMutation, SetNewDefaultPaymentMethodMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetNewDefaultPaymentMethodMutation, SetNewDefaultPaymentMethodMutationVariables>(SetNewDefaultPaymentMethodDocument, options);
      }
export type SetNewDefaultPaymentMethodMutationHookResult = ReturnType<typeof useSetNewDefaultPaymentMethodMutation>;
export type SetNewDefaultPaymentMethodMutationResult = Apollo.MutationResult<SetNewDefaultPaymentMethodMutation>;
export type SetNewDefaultPaymentMethodMutationOptions = Apollo.BaseMutationOptions<SetNewDefaultPaymentMethodMutation, SetNewDefaultPaymentMethodMutationVariables>;
export const GetPlansDocument = gql`
    query GetPlans($where: plans_bool_exp) {
  plans(where: $where) {
    id
    name
    isFree
    price
  }
}
    `;

/**
 * __useGetPlansQuery__
 *
 * To run a query within a React component, call `useGetPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlansQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetPlansQuery(baseOptions?: Apollo.QueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
      }
export function useGetPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlansQuery, GetPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlansQuery, GetPlansQueryVariables>(GetPlansDocument, options);
        }
export type GetPlansQueryHookResult = ReturnType<typeof useGetPlansQuery>;
export type GetPlansLazyQueryHookResult = ReturnType<typeof useGetPlansLazyQuery>;
export type GetPlansQueryResult = Apollo.QueryResult<GetPlansQuery, GetPlansQueryVariables>;
export function refetchGetPlansQuery(variables?: GetPlansQueryVariables) {
      return { query: GetPlansDocument, variables: variables }
    }
export const RestoreApplicationDatabaseDocument = gql`
    mutation RestoreApplicationDatabase($appId: String!, $backupId: String!) {
  restoreApplicationDatabase(appID: $appId, backupID: $backupId)
}
    `;
export type RestoreApplicationDatabaseMutationFn = Apollo.MutationFunction<RestoreApplicationDatabaseMutation, RestoreApplicationDatabaseMutationVariables>;

/**
 * __useRestoreApplicationDatabaseMutation__
 *
 * To run a mutation, you first call `useRestoreApplicationDatabaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestoreApplicationDatabaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restoreApplicationDatabaseMutation, { data, loading, error }] = useRestoreApplicationDatabaseMutation({
 *   variables: {
 *      appId: // value for 'appId'
 *      backupId: // value for 'backupId'
 *   },
 * });
 */
export function useRestoreApplicationDatabaseMutation(baseOptions?: Apollo.MutationHookOptions<RestoreApplicationDatabaseMutation, RestoreApplicationDatabaseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestoreApplicationDatabaseMutation, RestoreApplicationDatabaseMutationVariables>(RestoreApplicationDatabaseDocument, options);
      }
export type RestoreApplicationDatabaseMutationHookResult = ReturnType<typeof useRestoreApplicationDatabaseMutation>;
export type RestoreApplicationDatabaseMutationResult = Apollo.MutationResult<RestoreApplicationDatabaseMutation>;
export type RestoreApplicationDatabaseMutationOptions = Apollo.BaseMutationOptions<RestoreApplicationDatabaseMutation, RestoreApplicationDatabaseMutationVariables>;
export const RemoteAppDeleteUserDocument = gql`
    mutation remoteAppDeleteUser($id: uuid!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export type RemoteAppDeleteUserMutationFn = Apollo.MutationFunction<RemoteAppDeleteUserMutation, RemoteAppDeleteUserMutationVariables>;

/**
 * __useRemoteAppDeleteUserMutation__
 *
 * To run a mutation, you first call `useRemoteAppDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoteAppDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [remoteAppDeleteUserMutation, { data, loading, error }] = useRemoteAppDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoteAppDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoteAppDeleteUserMutation, RemoteAppDeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoteAppDeleteUserMutation, RemoteAppDeleteUserMutationVariables>(RemoteAppDeleteUserDocument, options);
      }
export type RemoteAppDeleteUserMutationHookResult = ReturnType<typeof useRemoteAppDeleteUserMutation>;
export type RemoteAppDeleteUserMutationResult = Apollo.MutationResult<RemoteAppDeleteUserMutation>;
export type RemoteAppDeleteUserMutationOptions = Apollo.BaseMutationOptions<RemoteAppDeleteUserMutation, RemoteAppDeleteUserMutationVariables>;
export const GetAppFunctionsMetadataDocument = gql`
    query getAppFunctionsMetadata($id: uuid!) {
  app(id: $id) {
    id
    metadataFunctions
  }
}
    `;

/**
 * __useGetAppFunctionsMetadataQuery__
 *
 * To run a query within a React component, call `useGetAppFunctionsMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppFunctionsMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAppFunctionsMetadataQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAppFunctionsMetadataQuery(baseOptions: Apollo.QueryHookOptions<GetAppFunctionsMetadataQuery, GetAppFunctionsMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAppFunctionsMetadataQuery, GetAppFunctionsMetadataQueryVariables>(GetAppFunctionsMetadataDocument, options);
      }
export function useGetAppFunctionsMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAppFunctionsMetadataQuery, GetAppFunctionsMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAppFunctionsMetadataQuery, GetAppFunctionsMetadataQueryVariables>(GetAppFunctionsMetadataDocument, options);
        }
export type GetAppFunctionsMetadataQueryHookResult = ReturnType<typeof useGetAppFunctionsMetadataQuery>;
export type GetAppFunctionsMetadataLazyQueryHookResult = ReturnType<typeof useGetAppFunctionsMetadataLazyQuery>;
export type GetAppFunctionsMetadataQueryResult = Apollo.QueryResult<GetAppFunctionsMetadataQuery, GetAppFunctionsMetadataQueryVariables>;
export function refetchGetAppFunctionsMetadataQuery(variables: GetAppFunctionsMetadataQueryVariables) {
      return { query: GetAppFunctionsMetadataDocument, variables: variables }
    }
export const GetRemoteAppMetricsDocument = gql`
    query getRemoteAppMetrics {
  filesAggregate {
    aggregate {
      count
      sum {
        size
      }
    }
  }
  usersAggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useGetRemoteAppMetricsQuery__
 *
 * To run a query within a React component, call `useGetRemoteAppMetricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRemoteAppMetricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRemoteAppMetricsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRemoteAppMetricsQuery(baseOptions?: Apollo.QueryHookOptions<GetRemoteAppMetricsQuery, GetRemoteAppMetricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRemoteAppMetricsQuery, GetRemoteAppMetricsQueryVariables>(GetRemoteAppMetricsDocument, options);
      }
export function useGetRemoteAppMetricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRemoteAppMetricsQuery, GetRemoteAppMetricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRemoteAppMetricsQuery, GetRemoteAppMetricsQueryVariables>(GetRemoteAppMetricsDocument, options);
        }
export type GetRemoteAppMetricsQueryHookResult = ReturnType<typeof useGetRemoteAppMetricsQuery>;
export type GetRemoteAppMetricsLazyQueryHookResult = ReturnType<typeof useGetRemoteAppMetricsLazyQuery>;
export type GetRemoteAppMetricsQueryResult = Apollo.QueryResult<GetRemoteAppMetricsQuery, GetRemoteAppMetricsQueryVariables>;
export function refetchGetRemoteAppMetricsQuery(variables?: GetRemoteAppMetricsQueryVariables) {
      return { query: GetRemoteAppMetricsDocument, variables: variables }
    }
export const RemoteAppGetUsersDocument = gql`
    query remoteAppGetUsers($where: users_bool_exp!, $limit: Int!, $offset: Int!) {
  users(
    where: $where
    limit: $limit
    offset: $offset
    order_by: {createdAt: desc}
  ) {
    ...RemoteAppGetUsers
  }
  filteredUsersAggreggate: usersAggregate(where: $where) {
    aggregate {
      count
    }
  }
  usersAggregate {
    aggregate {
      count
    }
  }
}
    ${RemoteAppGetUsersFragmentDoc}`;

/**
 * __useRemoteAppGetUsersQuery__
 *
 * To run a query within a React component, call `useRemoteAppGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoteAppGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoteAppGetUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useRemoteAppGetUsersQuery(baseOptions: Apollo.QueryHookOptions<RemoteAppGetUsersQuery, RemoteAppGetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RemoteAppGetUsersQuery, RemoteAppGetUsersQueryVariables>(RemoteAppGetUsersDocument, options);
      }
export function useRemoteAppGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RemoteAppGetUsersQuery, RemoteAppGetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RemoteAppGetUsersQuery, RemoteAppGetUsersQueryVariables>(RemoteAppGetUsersDocument, options);
        }
export type RemoteAppGetUsersQueryHookResult = ReturnType<typeof useRemoteAppGetUsersQuery>;
export type RemoteAppGetUsersLazyQueryHookResult = ReturnType<typeof useRemoteAppGetUsersLazyQuery>;
export type RemoteAppGetUsersQueryResult = Apollo.QueryResult<RemoteAppGetUsersQuery, RemoteAppGetUsersQueryVariables>;
export function refetchRemoteAppGetUsersQuery(variables: RemoteAppGetUsersQueryVariables) {
      return { query: RemoteAppGetUsersDocument, variables: variables }
    }
export const RemoteAppGetUsersCustomDocument = gql`
    query remoteAppGetUsersCustom($where: users_bool_exp!, $limit: Int!, $offset: Int!) {
  users(
    where: $where
    limit: $limit
    offset: $offset
    order_by: {createdAt: desc}
  ) {
    id
    createdAt
    displayName
    phoneNumber
    avatarUrl
    email
    disabled
    defaultRole
    roles(order_by: {role: asc}) {
      role
    }
    isAnonymous
  }
}
    `;

/**
 * __useRemoteAppGetUsersCustomQuery__
 *
 * To run a query within a React component, call `useRemoteAppGetUsersCustomQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoteAppGetUsersCustomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoteAppGetUsersCustomQuery({
 *   variables: {
 *      where: // value for 'where'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useRemoteAppGetUsersCustomQuery(baseOptions: Apollo.QueryHookOptions<RemoteAppGetUsersCustomQuery, RemoteAppGetUsersCustomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RemoteAppGetUsersCustomQuery, RemoteAppGetUsersCustomQueryVariables>(RemoteAppGetUsersCustomDocument, options);
      }
export function useRemoteAppGetUsersCustomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RemoteAppGetUsersCustomQuery, RemoteAppGetUsersCustomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RemoteAppGetUsersCustomQuery, RemoteAppGetUsersCustomQueryVariables>(RemoteAppGetUsersCustomDocument, options);
        }
export type RemoteAppGetUsersCustomQueryHookResult = ReturnType<typeof useRemoteAppGetUsersCustomQuery>;
export type RemoteAppGetUsersCustomLazyQueryHookResult = ReturnType<typeof useRemoteAppGetUsersCustomLazyQuery>;
export type RemoteAppGetUsersCustomQueryResult = Apollo.QueryResult<RemoteAppGetUsersCustomQuery, RemoteAppGetUsersCustomQueryVariables>;
export function refetchRemoteAppGetUsersCustomQuery(variables: RemoteAppGetUsersCustomQueryVariables) {
      return { query: RemoteAppGetUsersCustomDocument, variables: variables }
    }
export const RemoteAppGetUsersWholeDocument = gql`
    query remoteAppGetUsersWhole($limit: Int!, $offset: Int!) {
  users(limit: $limit, offset: $offset) {
    ...RemoteAppGetUsers
  }
  usersAggregate {
    aggregate {
      count
    }
  }
}
    ${RemoteAppGetUsersFragmentDoc}`;

/**
 * __useRemoteAppGetUsersWholeQuery__
 *
 * To run a query within a React component, call `useRemoteAppGetUsersWholeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRemoteAppGetUsersWholeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRemoteAppGetUsersWholeQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useRemoteAppGetUsersWholeQuery(baseOptions: Apollo.QueryHookOptions<RemoteAppGetUsersWholeQuery, RemoteAppGetUsersWholeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RemoteAppGetUsersWholeQuery, RemoteAppGetUsersWholeQueryVariables>(RemoteAppGetUsersWholeDocument, options);
      }
export function useRemoteAppGetUsersWholeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RemoteAppGetUsersWholeQuery, RemoteAppGetUsersWholeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RemoteAppGetUsersWholeQuery, RemoteAppGetUsersWholeQueryVariables>(RemoteAppGetUsersWholeDocument, options);
        }
export type RemoteAppGetUsersWholeQueryHookResult = ReturnType<typeof useRemoteAppGetUsersWholeQuery>;
export type RemoteAppGetUsersWholeLazyQueryHookResult = ReturnType<typeof useRemoteAppGetUsersWholeLazyQuery>;
export type RemoteAppGetUsersWholeQueryResult = Apollo.QueryResult<RemoteAppGetUsersWholeQuery, RemoteAppGetUsersWholeQueryVariables>;
export function refetchRemoteAppGetUsersWholeQuery(variables: RemoteAppGetUsersWholeQueryVariables) {
      return { query: RemoteAppGetUsersWholeDocument, variables: variables }
    }
export const TotalUsersDocument = gql`
    query totalUsers {
  usersAggregate {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTotalUsersQuery__
 *
 * To run a query within a React component, call `useTotalUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTotalUsersQuery(baseOptions?: Apollo.QueryHookOptions<TotalUsersQuery, TotalUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalUsersQuery, TotalUsersQueryVariables>(TotalUsersDocument, options);
      }
export function useTotalUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalUsersQuery, TotalUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalUsersQuery, TotalUsersQueryVariables>(TotalUsersDocument, options);
        }
export type TotalUsersQueryHookResult = ReturnType<typeof useTotalUsersQuery>;
export type TotalUsersLazyQueryHookResult = ReturnType<typeof useTotalUsersLazyQuery>;
export type TotalUsersQueryResult = Apollo.QueryResult<TotalUsersQuery, TotalUsersQueryVariables>;
export function refetchTotalUsersQuery(variables?: TotalUsersQueryVariables) {
      return { query: TotalUsersDocument, variables: variables }
    }
export const TotalUsersByDateDocument = gql`
    query totalUsersByDate($where: users_bool_exp!) {
  usersAggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useTotalUsersByDateQuery__
 *
 * To run a query within a React component, call `useTotalUsersByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalUsersByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalUsersByDateQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTotalUsersByDateQuery(baseOptions: Apollo.QueryHookOptions<TotalUsersByDateQuery, TotalUsersByDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalUsersByDateQuery, TotalUsersByDateQueryVariables>(TotalUsersByDateDocument, options);
      }
export function useTotalUsersByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalUsersByDateQuery, TotalUsersByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalUsersByDateQuery, TotalUsersByDateQueryVariables>(TotalUsersByDateDocument, options);
        }
export type TotalUsersByDateQueryHookResult = ReturnType<typeof useTotalUsersByDateQuery>;
export type TotalUsersByDateLazyQueryHookResult = ReturnType<typeof useTotalUsersByDateLazyQuery>;
export type TotalUsersByDateQueryResult = Apollo.QueryResult<TotalUsersByDateQuery, TotalUsersByDateQueryVariables>;
export function refetchTotalUsersByDateQuery(variables: TotalUsersByDateQueryVariables) {
      return { query: TotalUsersByDateDocument, variables: variables }
    }
export const UpdateRemoteAppUserDocument = gql`
    mutation updateRemoteAppUser($id: uuid!, $user: users_set_input!) {
  updateUser(pk_columns: {id: $id}, _set: $user) {
    id
  }
}
    `;
export type UpdateRemoteAppUserMutationFn = Apollo.MutationFunction<UpdateRemoteAppUserMutation, UpdateRemoteAppUserMutationVariables>;

/**
 * __useUpdateRemoteAppUserMutation__
 *
 * To run a mutation, you first call `useUpdateRemoteAppUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRemoteAppUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRemoteAppUserMutation, { data, loading, error }] = useUpdateRemoteAppUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateRemoteAppUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRemoteAppUserMutation, UpdateRemoteAppUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRemoteAppUserMutation, UpdateRemoteAppUserMutationVariables>(UpdateRemoteAppUserDocument, options);
      }
export type UpdateRemoteAppUserMutationHookResult = ReturnType<typeof useUpdateRemoteAppUserMutation>;
export type UpdateRemoteAppUserMutationResult = Apollo.MutationResult<UpdateRemoteAppUserMutation>;
export type UpdateRemoteAppUserMutationOptions = Apollo.BaseMutationOptions<UpdateRemoteAppUserMutation, UpdateRemoteAppUserMutationVariables>;
export const InsertRemoteAppUserRolesDocument = gql`
    mutation insertRemoteAppUserRoles($roles: [authUserRoles_insert_input!]!) {
  insertAuthUserRoles(objects: $roles) {
    affected_rows
  }
}
    `;
export type InsertRemoteAppUserRolesMutationFn = Apollo.MutationFunction<InsertRemoteAppUserRolesMutation, InsertRemoteAppUserRolesMutationVariables>;

/**
 * __useInsertRemoteAppUserRolesMutation__
 *
 * To run a mutation, you first call `useInsertRemoteAppUserRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRemoteAppUserRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRemoteAppUserRolesMutation, { data, loading, error }] = useInsertRemoteAppUserRolesMutation({
 *   variables: {
 *      roles: // value for 'roles'
 *   },
 * });
 */
export function useInsertRemoteAppUserRolesMutation(baseOptions?: Apollo.MutationHookOptions<InsertRemoteAppUserRolesMutation, InsertRemoteAppUserRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertRemoteAppUserRolesMutation, InsertRemoteAppUserRolesMutationVariables>(InsertRemoteAppUserRolesDocument, options);
      }
export type InsertRemoteAppUserRolesMutationHookResult = ReturnType<typeof useInsertRemoteAppUserRolesMutation>;
export type InsertRemoteAppUserRolesMutationResult = Apollo.MutationResult<InsertRemoteAppUserRolesMutation>;
export type InsertRemoteAppUserRolesMutationOptions = Apollo.BaseMutationOptions<InsertRemoteAppUserRolesMutation, InsertRemoteAppUserRolesMutationVariables>;
export const DeleteRemoteAppUserRolesDocument = gql`
    mutation deleteRemoteAppUserRoles($userId: uuid!, $roles: [String!]!) {
  deleteAuthUserRoles(
    where: {_and: [{userId: {_eq: $userId}}, {role: {_in: $roles}}]}
  ) {
    affected_rows
  }
}
    `;
export type DeleteRemoteAppUserRolesMutationFn = Apollo.MutationFunction<DeleteRemoteAppUserRolesMutation, DeleteRemoteAppUserRolesMutationVariables>;

/**
 * __useDeleteRemoteAppUserRolesMutation__
 *
 * To run a mutation, you first call `useDeleteRemoteAppUserRolesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRemoteAppUserRolesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRemoteAppUserRolesMutation, { data, loading, error }] = useDeleteRemoteAppUserRolesMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      roles: // value for 'roles'
 *   },
 * });
 */
export function useDeleteRemoteAppUserRolesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRemoteAppUserRolesMutation, DeleteRemoteAppUserRolesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRemoteAppUserRolesMutation, DeleteRemoteAppUserRolesMutationVariables>(DeleteRemoteAppUserRolesDocument, options);
      }
export type DeleteRemoteAppUserRolesMutationHookResult = ReturnType<typeof useDeleteRemoteAppUserRolesMutation>;
export type DeleteRemoteAppUserRolesMutationResult = Apollo.MutationResult<DeleteRemoteAppUserRolesMutation>;
export type DeleteRemoteAppUserRolesMutationOptions = Apollo.BaseMutationOptions<DeleteRemoteAppUserRolesMutation, DeleteRemoteAppUserRolesMutationVariables>;
export const GetDatabaseConnectionInfoDocument = gql`
    query GetDatabaseConnectionInfo($appId: uuid!) {
  systemConfig(appID: $appId) {
    postgres {
      database
    }
  }
}
    `;

/**
 * __useGetDatabaseConnectionInfoQuery__
 *
 * To run a query within a React component, call `useGetDatabaseConnectionInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDatabaseConnectionInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDatabaseConnectionInfoQuery({
 *   variables: {
 *      appId: // value for 'appId'
 *   },
 * });
 */
export function useGetDatabaseConnectionInfoQuery(baseOptions: Apollo.QueryHookOptions<GetDatabaseConnectionInfoQuery, GetDatabaseConnectionInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDatabaseConnectionInfoQuery, GetDatabaseConnectionInfoQueryVariables>(GetDatabaseConnectionInfoDocument, options);
      }
export function useGetDatabaseConnectionInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDatabaseConnectionInfoQuery, GetDatabaseConnectionInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDatabaseConnectionInfoQuery, GetDatabaseConnectionInfoQueryVariables>(GetDatabaseConnectionInfoDocument, options);
        }
export type GetDatabaseConnectionInfoQueryHookResult = ReturnType<typeof useGetDatabaseConnectionInfoQuery>;
export type GetDatabaseConnectionInfoLazyQueryHookResult = ReturnType<typeof useGetDatabaseConnectionInfoLazyQuery>;
export type GetDatabaseConnectionInfoQueryResult = Apollo.QueryResult<GetDatabaseConnectionInfoQuery, GetDatabaseConnectionInfoQueryVariables>;
export function refetchGetDatabaseConnectionInfoQuery(variables: GetDatabaseConnectionInfoQueryVariables) {
      return { query: GetDatabaseConnectionInfoDocument, variables: variables }
    }
export const GetFreeAndActiveProjectsDocument = gql`
    query GetFreeAndActiveProjects($userId: uuid!) {
  freeAndActiveProjects: apps(
    where: {creatorUserId: {_eq: $userId}, plan: {isFree: {_eq: true}}, desiredState: {_eq: 5}}
  ) {
    id
  }
}
    `;

/**
 * __useGetFreeAndActiveProjectsQuery__
 *
 * To run a query within a React component, call `useGetFreeAndActiveProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFreeAndActiveProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFreeAndActiveProjectsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetFreeAndActiveProjectsQuery(baseOptions: Apollo.QueryHookOptions<GetFreeAndActiveProjectsQuery, GetFreeAndActiveProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFreeAndActiveProjectsQuery, GetFreeAndActiveProjectsQueryVariables>(GetFreeAndActiveProjectsDocument, options);
      }
export function useGetFreeAndActiveProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFreeAndActiveProjectsQuery, GetFreeAndActiveProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFreeAndActiveProjectsQuery, GetFreeAndActiveProjectsQueryVariables>(GetFreeAndActiveProjectsDocument, options);
        }
export type GetFreeAndActiveProjectsQueryHookResult = ReturnType<typeof useGetFreeAndActiveProjectsQuery>;
export type GetFreeAndActiveProjectsLazyQueryHookResult = ReturnType<typeof useGetFreeAndActiveProjectsLazyQuery>;
export type GetFreeAndActiveProjectsQueryResult = Apollo.QueryResult<GetFreeAndActiveProjectsQuery, GetFreeAndActiveProjectsQueryVariables>;
export function refetchGetFreeAndActiveProjectsQuery(variables: GetFreeAndActiveProjectsQueryVariables) {
      return { query: GetFreeAndActiveProjectsDocument, variables: variables }
    }
export const InsertFeedbackOneDocument = gql`
    mutation insertFeedbackOne($feedback: feedback_insert_input!) {
  insertFeedbackOne(object: $feedback) {
    id
  }
}
    `;
export type InsertFeedbackOneMutationFn = Apollo.MutationFunction<InsertFeedbackOneMutation, InsertFeedbackOneMutationVariables>;

/**
 * __useInsertFeedbackOneMutation__
 *
 * To run a mutation, you first call `useInsertFeedbackOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFeedbackOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFeedbackOneMutation, { data, loading, error }] = useInsertFeedbackOneMutation({
 *   variables: {
 *      feedback: // value for 'feedback'
 *   },
 * });
 */
export function useInsertFeedbackOneMutation(baseOptions?: Apollo.MutationHookOptions<InsertFeedbackOneMutation, InsertFeedbackOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertFeedbackOneMutation, InsertFeedbackOneMutationVariables>(InsertFeedbackOneDocument, options);
      }
export type InsertFeedbackOneMutationHookResult = ReturnType<typeof useInsertFeedbackOneMutation>;
export type InsertFeedbackOneMutationResult = Apollo.MutationResult<InsertFeedbackOneMutation>;
export type InsertFeedbackOneMutationOptions = Apollo.BaseMutationOptions<InsertFeedbackOneMutation, InsertFeedbackOneMutationVariables>;
export const DeleteWorkspaceMemberInvitesDocument = gql`
    mutation deleteWorkspaceMemberInvites($id: uuid!) {
  deleteWorkspaceMemberInvites(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type DeleteWorkspaceMemberInvitesMutationFn = Apollo.MutationFunction<DeleteWorkspaceMemberInvitesMutation, DeleteWorkspaceMemberInvitesMutationVariables>;

/**
 * __useDeleteWorkspaceMemberInvitesMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMemberInvitesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMemberInvitesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMemberInvitesMutation, { data, loading, error }] = useDeleteWorkspaceMemberInvitesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkspaceMemberInvitesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMemberInvitesMutation, DeleteWorkspaceMemberInvitesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMemberInvitesMutation, DeleteWorkspaceMemberInvitesMutationVariables>(DeleteWorkspaceMemberInvitesDocument, options);
      }
export type DeleteWorkspaceMemberInvitesMutationHookResult = ReturnType<typeof useDeleteWorkspaceMemberInvitesMutation>;
export type DeleteWorkspaceMemberInvitesMutationResult = Apollo.MutationResult<DeleteWorkspaceMemberInvitesMutation>;
export type DeleteWorkspaceMemberInvitesMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMemberInvitesMutation, DeleteWorkspaceMemberInvitesMutationVariables>;
export const GetWorkspaceMemberInvitesToManageDocument = gql`
    query getWorkspaceMemberInvitesToManage($userId: uuid!) {
  workspaceMemberInvites(where: {userByEmail: {id: {_eq: $userId}}}) {
    id
    email
    userByEmail {
      id
    }
    workspace {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useGetWorkspaceMemberInvitesToManageQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceMemberInvitesToManageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceMemberInvitesToManageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceMemberInvitesToManageQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetWorkspaceMemberInvitesToManageQuery(baseOptions: Apollo.QueryHookOptions<GetWorkspaceMemberInvitesToManageQuery, GetWorkspaceMemberInvitesToManageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceMemberInvitesToManageQuery, GetWorkspaceMemberInvitesToManageQueryVariables>(GetWorkspaceMemberInvitesToManageDocument, options);
      }
export function useGetWorkspaceMemberInvitesToManageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceMemberInvitesToManageQuery, GetWorkspaceMemberInvitesToManageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceMemberInvitesToManageQuery, GetWorkspaceMemberInvitesToManageQueryVariables>(GetWorkspaceMemberInvitesToManageDocument, options);
        }
export type GetWorkspaceMemberInvitesToManageQueryHookResult = ReturnType<typeof useGetWorkspaceMemberInvitesToManageQuery>;
export type GetWorkspaceMemberInvitesToManageLazyQueryHookResult = ReturnType<typeof useGetWorkspaceMemberInvitesToManageLazyQuery>;
export type GetWorkspaceMemberInvitesToManageQueryResult = Apollo.QueryResult<GetWorkspaceMemberInvitesToManageQuery, GetWorkspaceMemberInvitesToManageQueryVariables>;
export function refetchGetWorkspaceMemberInvitesToManageQuery(variables: GetWorkspaceMemberInvitesToManageQueryVariables) {
      return { query: GetWorkspaceMemberInvitesToManageDocument, variables: variables }
    }
export const InsertWorkspaceMemberInviteDocument = gql`
    mutation insertWorkspaceMemberInvite($workspaceMemberInvite: workspaceMemberInvites_insert_input!) {
  insertWorkspaceMemberInvite(object: $workspaceMemberInvite) {
    id
  }
}
    `;
export type InsertWorkspaceMemberInviteMutationFn = Apollo.MutationFunction<InsertWorkspaceMemberInviteMutation, InsertWorkspaceMemberInviteMutationVariables>;

/**
 * __useInsertWorkspaceMemberInviteMutation__
 *
 * To run a mutation, you first call `useInsertWorkspaceMemberInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertWorkspaceMemberInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertWorkspaceMemberInviteMutation, { data, loading, error }] = useInsertWorkspaceMemberInviteMutation({
 *   variables: {
 *      workspaceMemberInvite: // value for 'workspaceMemberInvite'
 *   },
 * });
 */
export function useInsertWorkspaceMemberInviteMutation(baseOptions?: Apollo.MutationHookOptions<InsertWorkspaceMemberInviteMutation, InsertWorkspaceMemberInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertWorkspaceMemberInviteMutation, InsertWorkspaceMemberInviteMutationVariables>(InsertWorkspaceMemberInviteDocument, options);
      }
export type InsertWorkspaceMemberInviteMutationHookResult = ReturnType<typeof useInsertWorkspaceMemberInviteMutation>;
export type InsertWorkspaceMemberInviteMutationResult = Apollo.MutationResult<InsertWorkspaceMemberInviteMutation>;
export type InsertWorkspaceMemberInviteMutationOptions = Apollo.BaseMutationOptions<InsertWorkspaceMemberInviteMutation, InsertWorkspaceMemberInviteMutationVariables>;
export const UpdateWorkspaceMemberInviteDocument = gql`
    mutation updateWorkspaceMemberInvite($id: uuid!, $workspaceMemberInvite: workspaceMemberInvites_set_input!) {
  updateWorkspaceMemberInvites(
    _set: $workspaceMemberInvite
    where: {id: {_eq: $id}}
  ) {
    affected_rows
  }
}
    `;
export type UpdateWorkspaceMemberInviteMutationFn = Apollo.MutationFunction<UpdateWorkspaceMemberInviteMutation, UpdateWorkspaceMemberInviteMutationVariables>;

/**
 * __useUpdateWorkspaceMemberInviteMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMemberInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMemberInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMemberInviteMutation, { data, loading, error }] = useUpdateWorkspaceMemberInviteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      workspaceMemberInvite: // value for 'workspaceMemberInvite'
 *   },
 * });
 */
export function useUpdateWorkspaceMemberInviteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMemberInviteMutation, UpdateWorkspaceMemberInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMemberInviteMutation, UpdateWorkspaceMemberInviteMutationVariables>(UpdateWorkspaceMemberInviteDocument, options);
      }
export type UpdateWorkspaceMemberInviteMutationHookResult = ReturnType<typeof useUpdateWorkspaceMemberInviteMutation>;
export type UpdateWorkspaceMemberInviteMutationResult = Apollo.MutationResult<UpdateWorkspaceMemberInviteMutation>;
export type UpdateWorkspaceMemberInviteMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMemberInviteMutation, UpdateWorkspaceMemberInviteMutationVariables>;
export const DeleteWorkspaceMemberDocument = gql`
    mutation deleteWorkspaceMember($id: uuid!) {
  deleteWorkspaceMember(id: $id) {
    id
  }
}
    `;
export type DeleteWorkspaceMemberMutationFn = Apollo.MutationFunction<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>;

/**
 * __useDeleteWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMemberMutation, { data, loading, error }] = useDeleteWorkspaceMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>(DeleteWorkspaceMemberDocument, options);
      }
export type DeleteWorkspaceMemberMutationHookResult = ReturnType<typeof useDeleteWorkspaceMemberMutation>;
export type DeleteWorkspaceMemberMutationResult = Apollo.MutationResult<DeleteWorkspaceMemberMutation>;
export type DeleteWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMemberMutation, DeleteWorkspaceMemberMutationVariables>;
export const GetWorkspaceMembersDocument = gql`
    query getWorkspaceMembers($workspaceId: uuid!) {
  workspace(id: $workspaceId) {
    id
    creatorUser {
      id
    }
    workspaceMembers(order_by: {createdAt: asc}) {
      ...getWorkspaceMembersWorkspaceMember
    }
    workspaceMemberInvites(order_by: {createdAt: asc}) {
      ...getWorkspaceMembersWorkspaceMemberInvite
    }
  }
}
    ${GetWorkspaceMembersWorkspaceMemberFragmentDoc}
${GetWorkspaceMembersWorkspaceMemberInviteFragmentDoc}`;

/**
 * __useGetWorkspaceMembersQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceMembersQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useGetWorkspaceMembersQuery(baseOptions: Apollo.QueryHookOptions<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>(GetWorkspaceMembersDocument, options);
      }
export function useGetWorkspaceMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>(GetWorkspaceMembersDocument, options);
        }
export type GetWorkspaceMembersQueryHookResult = ReturnType<typeof useGetWorkspaceMembersQuery>;
export type GetWorkspaceMembersLazyQueryHookResult = ReturnType<typeof useGetWorkspaceMembersLazyQuery>;
export type GetWorkspaceMembersQueryResult = Apollo.QueryResult<GetWorkspaceMembersQuery, GetWorkspaceMembersQueryVariables>;
export function refetchGetWorkspaceMembersQuery(variables: GetWorkspaceMembersQueryVariables) {
      return { query: GetWorkspaceMembersDocument, variables: variables }
    }
export const UpdateWorkspaceMemberDocument = gql`
    mutation updateWorkspaceMember($id: uuid!, $workspaceMember: workspaceMembers_set_input!) {
  updateWorkspaceMember(_set: $workspaceMember, pk_columns: {id: $id}) {
    id
  }
}
    `;
export type UpdateWorkspaceMemberMutationFn = Apollo.MutationFunction<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>;

/**
 * __useUpdateWorkspaceMemberMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMemberMutation, { data, loading, error }] = useUpdateWorkspaceMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      workspaceMember: // value for 'workspaceMember'
 *   },
 * });
 */
export function useUpdateWorkspaceMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>(UpdateWorkspaceMemberDocument, options);
      }
export type UpdateWorkspaceMemberMutationHookResult = ReturnType<typeof useUpdateWorkspaceMemberMutation>;
export type UpdateWorkspaceMemberMutationResult = Apollo.MutationResult<UpdateWorkspaceMemberMutation>;
export type UpdateWorkspaceMemberMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMemberMutation, UpdateWorkspaceMemberMutationVariables>;
export const DeleteWorkspaceDocument = gql`
    mutation deleteWorkspace($id: uuid!) {
  deleteWorkspace(id: $id) {
    id
  }
}
    `;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>(DeleteWorkspaceDocument, options);
      }
export type DeleteWorkspaceMutationHookResult = ReturnType<typeof useDeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationResult = Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<DeleteWorkspaceMutation, DeleteWorkspaceMutationVariables>;
export const InsertWorkspaceDocument = gql`
    mutation insertWorkspace($workspace: workspaces_insert_input!) {
  insertWorkspace(object: $workspace) {
    name
    id
  }
}
    `;
export type InsertWorkspaceMutationFn = Apollo.MutationFunction<InsertWorkspaceMutation, InsertWorkspaceMutationVariables>;

/**
 * __useInsertWorkspaceMutation__
 *
 * To run a mutation, you first call `useInsertWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertWorkspaceMutation, { data, loading, error }] = useInsertWorkspaceMutation({
 *   variables: {
 *      workspace: // value for 'workspace'
 *   },
 * });
 */
export function useInsertWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<InsertWorkspaceMutation, InsertWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertWorkspaceMutation, InsertWorkspaceMutationVariables>(InsertWorkspaceDocument, options);
      }
export type InsertWorkspaceMutationHookResult = ReturnType<typeof useInsertWorkspaceMutation>;
export type InsertWorkspaceMutationResult = Apollo.MutationResult<InsertWorkspaceMutation>;
export type InsertWorkspaceMutationOptions = Apollo.BaseMutationOptions<InsertWorkspaceMutation, InsertWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument = gql`
    mutation updateWorkspace($id: uuid!, $workspace: workspaces_set_input!) {
  updateWorkspace(pk_columns: {id: $id}, _set: $workspace) {
    id
    name
    email
    companyName
    addressLine1
    addressLine2
    addressPostalCode
    addressCity
    addressCountryCode
    slug
    taxIdType
    taxIdValue
  }
}
    `;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      workspace: // value for 'workspace'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, options);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<UpdateWorkspaceMutation, UpdateWorkspaceMutationVariables>;