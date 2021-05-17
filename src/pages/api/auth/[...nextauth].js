import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: "Email",
          type: "text",
          placeholder: "you@domain.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        console.log(credentials);
        return null;
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
        //   // If you return null or false then the credentials will be rejected
        //   return null
        //   // You can also Reject this callback with an Error or with a URL:
        //   // throw new Error('error message') // Redirect to error page
        //   // throw '/path/to/redirect'        // Redirect to a URL
        // }
      },
    }),
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/database
  //
  // Notes:
  // * You must to install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  database: process.env.DB_URI,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: "INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw",
    // Set to true to use encryption (default: false)
    encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in pages.
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/api/auth/signin',  // Displays signin buttons
    // signOut: '/api/auth/signout', // Displays form with sign out button
    // error: "/api/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/api/auth/verify-request", // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    session: async (session, token) => {
      if (token) {
        session.user = token.user;
        session.accessToken = token.accessToken;
        session.error = token.error;
      }

      return session;
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      // Initial sign in
      return token;
    },
    // signIn: async (user, account, profile) => { return Promise.resolve(true) },
    // redirect: async (url, baseUrl) => { return Promise.resolve(baseUrl) },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {
    signIn: async (message) => {
      console.log("signIn: ", message);
    },
    signOut: async (message) => {
      console.log("signOut: ", message);
    },
    createUser: async (message) => {
      console.log("createUser: ", message);
    },
    linkAccount: async (message) => {
      console.log("linkAccount: ", message);
    },
    session: async (message) => {
      console.log("session: ", message);
    },
    error: async (message) => {
      console.log("error: ", message);
    },
  },

  // Enable debug messages in the console if you are having problems
  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
