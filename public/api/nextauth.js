import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (credentials.username === 'user' && credentials.password === 'pass') {
          return Promise.resolve({ id: 1, name: 'User', email: 'user@example.com' });
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  pages: {
    signIn: '/account', // Đường dẫn tới trang đăng nhập tùy chỉnh
    error: '/account?error=CredentialsSignin', // Đường dẫn khi có lỗi đăng nhập
  },
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Sử dụng biến môi trường cho secret
  },
});
