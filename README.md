## TODO
- Review npm packages, move some to dev
- Review prod Dockerfile, compare to dev

## Auth0 Setup
- Tenant Settings
  - **Default Directory:** Username-Password-Authentication
- Database Connection
  - **Name:** Username-Password-Authentication
  - **Disable Sign Ups**: Enabled
- Single Page Application
  - **Allowed Callback URLs:** http://localhost:3000
  - **Allowed Logout URLs:** http://localhost:3000
  - **Allowed Web Origins:** http://localhost:3000
  - **Advanced Settings > Grant Types:** Password *(only needed for Postman request)*
- Custom API
  - **Identifier:** hasura
- Rule
  - **Name:** hasura-jwt-claims
  - **Script:**
    ```
    function (user, context, callback) {
      const namespace = "https://hasura.io/jwt/claims";
      context.accessToken[namespace] =
        {
          'x-hasura-default-role': 'user',
          // do some custom logic to decide allowed roles
          'x-hasura-allowed-roles': ['user'],
          'x-hasura-user-id': user.user_id
        };
      callback(null, user, context);
    }
    ```
- User
  - **Connection:** Username-Password-Authentication