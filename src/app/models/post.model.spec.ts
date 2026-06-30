import { Post } from './post.model';

it('should create an object with post properties', () => {
  const post: Post = {
    id: 1,
    title: 'Test Title',
    body: 'Test Content',
    dateCreated: new Date(),
    userName: 'testuser',
    firstName: 'Test',
    lastName: 'User'
  };
  expect(post).toBeTruthy();
});