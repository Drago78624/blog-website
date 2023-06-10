type PostType = {
  _id: string;
  title: string;
  body: string;
  slug: string;
  tags: string[];
  coverPhoto: string;
  author: AuthorType
  createdAt: string;
  updatedAt: string;
};

export default PostType;
