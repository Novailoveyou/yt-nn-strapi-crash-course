module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd089d0efb9b56a1ed0dbf89bc277124e'),
  },
});
