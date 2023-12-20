import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({params}) {
    const postId=params.postId;
    const loadingJsx=(<div><h1>Loading...</h1></div>);
  return (
    <div style={{padding:"20px"}}>
      <h1>Post Details</h1>
      <Suspense fallback={loadingJsx}>
     <PostDetails postId={postId}/>
      </Suspense>
    </div>
  );
}
