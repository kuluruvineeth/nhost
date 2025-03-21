# @nhost/dashboard

## 0.15.2

### Patch Changes

- 84b84ab7: fix(projects): filter projects by workspace

## 0.15.1

### Patch Changes

- 2faf7907: chore(deps): bump `graphql-request` to v6
- f1b5a944: chore(deps): bump `@vitejs/plugin-react` to v4
- 7f1785ac: chore(deps): bump `@types/react` to v18.0.37
  - @nhost/react-apollo@5.0.19

## 0.15.0

### Minor Changes

- 85889ee8: feat(dashboard): add Compute management to the settings

## 0.14.8

### Patch Changes

- 668c8771: chore(dialogs): unify dialog management of payment dialogs

## 0.14.7

### Patch Changes

- d4ccc656: chore: cleanup unused code
  - @nhost/react-apollo@5.0.18
  - @nhost/nextjs@1.13.21

## 0.14.6

### Patch Changes

- b299cfc9: chore(deps): bump `vitest` to v0.30.0
- 411cb65b: chore(projects): refactor workspace and project hooks
- 43b1b144: chore(deps): bump `@types/react` to v18.0.34 and `@types/react-dom` to v18.0.11
- Updated dependencies [43b1b144]
  - @nhost/react-apollo@5.0.17
  - @nhost/nextjs@1.13.20

## 0.14.5

### Patch Changes

- ba0d57ee: fix(i18n): revert i18n library
- 3328ed05: feat(projects): improve overview when there is an error

## 0.14.4

### Patch Changes

- 5e0920ba: chore(deps): bump `next-seo` to v6
- 706c9dc3: chore(deps): bump `@types/react` to 18.0.33
- 99f8f6b3: feat(metrics): show metrics on the overview

## 0.14.3

### Patch Changes

- @nhost/react-apollo@5.0.16

## 0.14.2

### Patch Changes

- 3cb67300: fix(logs): don't break UI when clearing time picker
- 7453bf3b: feat(projects): show project creator info
- c166dad0: chore(tests): improve auth page tests
- 6a290bb2: chore(deps): bump `@types/react` to 18.0.32

## 0.14.1

### Patch Changes

- @nhost/react-apollo@5.0.15
- @nhost/nextjs@1.13.19

## 0.14.0

### Minor Changes

- 6e1f03ea: feat(dashboard): add support for the Azure AD provider

### Patch Changes

- 1bd2c373: chore(deps): bump `turbo` to 1.8.6
- d329b621: chore(deps): bump `@types/react` to 18.0.30
- cb248f0d: fix(tests): avoid name collision in database tests
- 867c8076: chore(deps): bump `@types/react` to 18.0.29

## 0.13.10

### Patch Changes

- e93b06ab: fix(dashboard): remove left margin from workspace list on mobile
- 1c4806bf: chore(deps): bump `sharp` to 0.32.0
  - @nhost/react-apollo@5.0.14
  - @nhost/nextjs@1.13.18

## 0.13.9

### Patch Changes

- 912ed76c: chore(dashboard): bump `@apollo/client` to 3.7.10
- Updated dependencies [912ed76c]
  - @nhost/react-apollo@5.0.13

## 0.13.8

### Patch Changes

- 7c127372: chore(dashboard): bump `react-error-boundary` to v4

## 0.13.7

### Patch Changes

- 9130ab12: chore(dashboard): bump `yup` to v1 and `@hookform/resolvers` to v3

## 0.13.6

### Patch Changes

- 253dd235: using new mutation to create projects + refactor Create Project page.

## 0.13.5

### Patch Changes

- @nhost/react-apollo@5.0.12
- @nhost/nextjs@1.13.17

## 0.13.4

### Patch Changes

- b48bc034: fix(dashboard): disable new users
- 798e591b: fix(dashboard): show correct date in data grid

## 0.13.3

### Patch Changes

- bfb4c1a6: chore(dashboard): remove `useAxios` property
- d8d8394b: Dashboard: allow to override hasura admin secret in docker
- Updated dependencies [ce1ee40d]
  - @nhost/nextjs@1.13.16
  - @nhost/react-apollo@5.0.11

## 0.13.2

### Patch Changes

- beed2eba: Fix docker entrypoint for dashboard
- 2c8559a3: fix(dashboard): refresh project list after deleting a project
- 4329d048: chore(dashboard): bump `graphiql` dependencies

## 0.13.1

### Patch Changes

- cbb1fc5b: chore(dashboard): cleanup GraphQL operations

## 0.13.0

### Minor Changes

- 088584e7: feat(dashboard): add support for custom local subdomains

### Patch Changes

- 2ac90dfd: fix(dashboard): improve mobile responsive layout
- Updated dependencies [f375eacc]
  - @nhost/nextjs@1.13.15
  - @nhost/react-apollo@5.0.10

## 0.12.4

### Patch Changes

- @nhost/react-apollo@5.0.9
- @nhost/nextjs@1.13.14

## 0.12.3

### Patch Changes

- 2b1338f7: chore(dashboard): bump `turbo` to 1.8.3
- 5223ee93: fix(dashboard): show correct deployment status on the main page
- 850a049c: chore(deps): update docker/build-push-action action to v4
- Updated dependencies [850a049c]
  - @nhost/nextjs@1.13.13
  - @nhost/react-apollo@5.0.8

## 0.12.2

### Patch Changes

- 4bf40995: chore(deps): bump `typescript` to `4.9.5`
- 8bb097c9: chore(deps): bump `vitest`
- 35d52aab: chore(deps): replace `cross-fetch` with `isomorphic-unfetch`
- Updated dependencies [4bf40995]
- Updated dependencies [8bb097c9]
- Updated dependencies [35d52aab]
  - @nhost/react-apollo@5.0.7
  - @nhost/nextjs@1.13.12

## 0.12.1

### Patch Changes

- c96d7ccd: fix(dashboard): fix docker builds

## 0.12.0

### Minor Changes

- d1671210: feat(dashboard): use mimir to manage project configuration

### Patch Changes

- f65e4de9: chore(deps): bump @graphql-codegen monorepo to v3

## 0.11.20

### Patch Changes

- 4b4f0d01: chore(dashboard): improve dialog management

## 0.11.19

### Patch Changes

- @nhost/react-apollo@5.0.6
- @nhost/nextjs@1.13.11

## 0.11.18

### Patch Changes

- 01318860: fix(nhost-js): use correct URL for functions requests
- Updated dependencies [01318860]
  - @nhost/react-apollo@5.0.5
  - @nhost/nextjs@1.13.10

## 0.11.17

### Patch Changes

- f673adea: fix(dashboard): set correct Content-Type for user creation
- 445d8ef4: chore(deps): bump `@nhost/react-apollo` to 5.0.4
- 445d8ef4: chore(deps): bump `@nhost/nextjs` to 1.13.9
- 0368663d: fix(dashboard): allow permission editing for auth and storage schemas
- Updated dependencies [445d8ef4]
- Updated dependencies [445d8ef4]
  - @nhost/react-apollo@5.0.4
  - @nhost/nextjs@1.13.9

## 0.11.16

### Patch Changes

- b755e908: fix(dashboard): use correct date for last seen
- 2d9145f9: chore(deps): revert GraphQL client
- 1ddf704c: fix(dashboard): don't show false positive message for failed user creation
  - @nhost/react-apollo@5.0.3
  - @nhost/nextjs@1.13.8

## 0.11.15

### Patch Changes

- @nhost/react-apollo@5.0.2
- @nhost/nextjs@1.13.7

## 0.11.14

### Patch Changes

- 2cc18dcb: fix(dashboard): prevent permission editor dropdown from being always open

## 0.11.13

### Patch Changes

- 3343a363: chore(dashboard): bump `@testing-library/react` to v14 and `@testing-library/dom` to v9
  - @nhost/react-apollo@5.0.1
  - @nhost/nextjs@1.13.6

## 0.11.12

### Patch Changes

- 87eda76e: chore(dashboard): bump `@types/react` to v18.0.28 and `@types/react-dom` to v18.0.11
- 6f0ac570: feat(dashboard): show dashboard version in account menu

## 0.11.11

### Patch Changes

- bf1e4071: chore(dashboard): bump `react-is` version to `18.2.0`
- Updated dependencies [bf1e4071]
- Updated dependencies [5013213b]
  - @nhost/nextjs@1.13.5
  - @nhost/react-apollo@4.13.5

## 0.11.10

### Patch Changes

- a37a430b: fix(dashboard): don't break UI when deployments are unavailable
  - @nhost/react-apollo@4.13.4
  - @nhost/nextjs@1.13.4

## 0.11.9

### Patch Changes

- 7b970e68: fix(dashboard): fix header link color

## 0.11.8

### Patch Changes

- f33242f2: feat(dashboard): add new sign up, sign in and reset password pages

## 0.11.7

### Patch Changes

- e9c8909c: fix(dashboard): use correct theme color in dark mode

## 0.11.6

### Patch Changes

- 902f486b: fix(dashboard): re-enable Hasura on logs page

## 0.11.5

### Patch Changes

- 1f9720fa: fix(dashboard): apply select permissions properly

## 0.11.4

### Patch Changes

- deb14b51: fix(dashboard): don't break billing form

## 0.11.3

### Patch Changes

- @nhost/react-apollo@4.13.3
- @nhost/nextjs@1.13.3

## 0.11.2

### Patch Changes

- f143e51d: chore(dashboard): pin Turborepo to 1.6.3

## 0.11.1

### Patch Changes

- c2b5a41a: chore(dashboard): select system colors by default

## 0.11.0

### Minor Changes

- 1ebaf429: feat(dashboard): introduce Dark Mode 🌚

### Patch Changes

- 63b445c4: fixed duplicated logs bug and made to date count during live mode

## 0.10.1

### Patch Changes

- e146d32e: chore(deps): update dependency @types/react to v18.0.27
- 59347fcd: correct allowed role name
- 5b65cac9: updated authentication documentation
- 963f9b5e: feat(dashboard): include project info in feedback

## 0.10.0

### Minor Changes

- ed4c7801: chore(dashboard): remove Functions section

## 0.9.10

### Patch Changes

- 4e2f8ccd: fix(dashboard): don't break Auth page in local mode

## 0.9.9

### Patch Changes

- 31abbe5f: fix(dashboard): enable toggle when settings are filled in

## 0.9.8

### Patch Changes

- 5bdd31ad: chore(dashboard): list fewer images per page on the Storage page
- 5121851c: fix(dashboard): don't throw validation error for valid permission rules

## 0.9.7

### Patch Changes

- c126b20d: fix(dashboard): correct redeployment button

## 0.9.6

### Patch Changes

- 36c3519c: feat(dashboard): retrigger deployments

## 0.9.5

### Patch Changes

- 200e9f77: chore(deps): update dependency @types/react-dom to v18.0.10
- Updated dependencies [200e9f77]
  - @nhost/nextjs@1.13.2
  - @nhost/react-apollo@4.13.2

## 0.9.4

### Patch Changes

- dbd3ded5: fix(dashboard): workspaces creation, new form, correct redirects.

## 0.9.3

### Patch Changes

- 85f0f943: fix(dashboard): don't break the table creation process

## 0.9.2

### Patch Changes

- Updated dependencies [d42c27ae]
- Updated dependencies [927be4a2]
  - @nhost/nextjs@1.13.1
  - @nhost/react-apollo@4.13.1

## 0.9.1

### Patch Changes

- d0f80811: fix(dashboard): don't show error when signing out the user

## 0.9.0

### Minor Changes

- d92891b2: feat(dashboard): add Permission Editor to the Database section

### Patch Changes

- 3d379128: fix(dashboard): create new user
  - @nhost/react-apollo@4.13.0
  - @nhost/nextjs@1.13.0

## 0.8.1

### Patch Changes

- 7cadd944: fix(dashboard): display Twitter provider settings

## 0.8.0

### Minor Changes

- 9a1aa7bb: add functions to the log dashboard
- f29abe62: feat(dashboard): Users Management v2

### Patch Changes

- 7766624b: feat(dashboard): add JWT secret editor modal
  - @nhost/react-apollo@4.12.1
  - @nhost/nextjs@1.12.1

## 0.7.13

### Patch Changes

- dd0738d5: fix(dashboard): provisioning status polling

## 0.7.12

### Patch Changes

- b21222b3: chore(deps): update dependency @types/node to v16
- 9e0486a3: fix(dashboard): close modals when navigating
- Updated dependencies [b21222b3]
- Updated dependencies [65687bee]
- Updated dependencies [54df0df4]
  - @nhost/nextjs@1.12.0
  - @nhost/react-apollo@4.12.0

## 0.7.11

### Patch Changes

- d6527122: fix(dashboard): use correct service URLs

## 0.7.10

### Patch Changes

- Updated dependencies [57db5b83]
  - @nhost/nextjs@1.11.0
  - @nhost/nhost-js@1.7.0
  - @nhost/react@0.17.0
  - @nhost/react-apollo@4.11.0

## 0.7.9

### Patch Changes

- a6d31dc2: fix(dashboard): don't break the UI when project is not loaded yet

## 0.7.8

### Patch Changes

- 7f251111: Use `NhostProvider` instead of `NhostReactProvider` and `NhostNextProvider`

  `NhostReactProvider` and `NhostNextProvider` are now deprecated

- f4d70f88: fix(dashboard): do not break when region is nullish
- 4a9471cc: Windows Live Provider displayed link updated to match backend url
- 594488e4: fix(dashboard): do not show error when submitting Apple provider settings
- Updated dependencies [7f251111]
  - @nhost/nextjs@1.10.0
  - @nhost/react@0.16.0
  - @nhost/react-apollo@4.10.0

## 0.7.7

### Patch Changes

- 80b604ad: fix(dashboard): use correct Hasura slug

## 0.7.6

### Patch Changes

- 2d2beb53: fix(dashboard): prevent error on GraphQL page
- ac8efcbd: chore(dashboard): deprecate old DNS name

## 0.7.5

### Patch Changes

- 132a4f4b: chore(dashboard): remove unused dependencies
- 132a4f4b: chore(deps): synchronize @types/react-dom and @types/react versions
- db57572f: fix(dashboard): correct section paddings when no env vars
- Updated dependencies [132a4f4b]
  - @nhost/react@0.15.2
  - @nhost/react-apollo@4.9.2
  - @nhost/nextjs@1.9.3

## 0.7.4

### Patch Changes

- 34d85e54: chore(deps): update dependency critters to ^0.0.16
- 9b93cf95: chore(deps): update dependency @netlify/functions to ^0.11.0
- e0439030: chore(deps): update dependency @types/react-dom to v18.0.9
- Updated dependencies [82124329]
  - @nhost/nextjs@1.9.2

## 0.7.3

### Patch Changes

- a1193da4: fix(dashboard): remove character limit from env var inputs

## 0.7.2

### Patch Changes

- 44f13f62: chore(dashboard): cleanup unused files

## 0.7.1

### Patch Changes

- e01cb2ed: chore(dashboard): change settings sidebar menu item density

## 0.7.0

### Minor Changes

- db342f45: chore(dashboard): refactor Roles and Permissions settings sections
- 8b9fa0b1: feat(dashboard): add Environment Variables page

### Patch Changes

- Updated dependencies [66b4f3d0]
- Updated dependencies [2e6923dc]
- Updated dependencies [ef117c28]
- Updated dependencies [aebb8225]
  - @nhost/core@0.9.4
  - @nhost/nhost-js@1.6.2
  - @nhost/nextjs@1.9.1
  - @nhost/react@0.15.1
  - @nhost/react-apollo@4.9.1

## 0.6.0

### Minor Changes

- eef9c914: feat(dashboard): add Roles and Permissions page

## 0.5.0

### Minor Changes

- a48dd5bf: feat(dashboard): make backend port configurable

## 0.4.3

### Patch Changes

- 5de965d9: fix(dashboard): alphabetic ordering of providers
- b9087a4a: fix(dashboard): console -> dashboard terminology
- ca012d79: docs(workos): WorkOS Docs

## 0.4.2

### Patch Changes

- 89bd37bc: fix(dashboard): correct redirect URL input opacity
- Updated dependencies [4601d84e]
- Updated dependencies [843087cb]
  - @nhost/react@0.15.0
  - @nhost/nextjs@1.9.0
  - @nhost/react-apollo@4.9.0

## 0.4.1

### Patch Changes

- 766cb612: fix(dashboard): correct redirect URL for oauth providers
- Updated dependencies [53bdc294]
- Updated dependencies [f2aaff05]
  - @nhost/nextjs@1.8.3
  - @nhost/core@0.9.3
  - @nhost/react@0.14.3
  - @nhost/nhost-js@1.6.1
  - @nhost/react-apollo@4.8.3

## 0.4.0

### Minor Changes

- 9211743d: feat(dashboard): migrate Settings page features

## 0.3.0

### Minor Changes

- 73da6a67: fix(dashboard): avoid using BACKEND_URL locally

## 0.2.0

### Minor Changes

- db118f97: feat(dashboard): generate Docker image
