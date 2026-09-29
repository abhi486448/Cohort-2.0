import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './app.routes';
import { AuthProvider } from './features/auth/auth.context';
import "./features/shared/global.scss"
import { PostContexProvider } from './features/post/post.context';

const App = () => {
  return (
    <AuthProvider>
      <PostContexProvider>
        <RouterProvider router={router} />
      </PostContexProvider>
    </AuthProvider>
  )
}

export default App