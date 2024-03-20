
import { Metadata } from "next";

import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = await fetch(`https://cnp2002-api.developer24x7.com/api/frontend/video/getVideoById/6/null`).then((res) => res.json())
//   if (!post)
//     return {
//       title: "Not Found",
//       description: "The page is not found",
//     };

  return {
     title: product.data.title,
      description: product.data.description,
      openGraph: {
        images: product.data.thumbnail_link,
      },
    alternates: {
      canonical: `/post/6`,
      languages: {
        "en-CA": `en-CA/post/6`,
      },
    },
  };
}

// export async function generateStaticParams() {
//     const posts = await fetch(`https://cnp2002-api.developer24x7.com/api/frontend/video/getVideoById/6/null`).then((res) => res.json())

//  return {
//     slug: posts.data.title,
//  }
// }

const BlogPostPage = async ({ params }: Props) => {
  return (
    <div>Hello world</div>
  )
};

export default BlogPostPage;
